const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const backupDir = path.join(__dirname, 'public-backup');

// Create backup directory if it doesn't exist
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
  console.log('✅ Created backup directory');
}

// List of images to compress (the large ones)
const imagesToCompress = [
  'traning1.jpg',
  'enterprise-resource-management-erp-software-system-business-resources-uds.jpg',
  'traning7.jpg',
  'how-is-your-deals-group-people-business-conference-modern-classroom-daytime.jpg',
  'traning3.jpg',
  'feturedCourses1.jpg',
  'male-supervisor-training-latin-executive-call-center-manager-explaining-work-stuff-employees-offering-tech-support-customer-service.jpg',
  'alarm-clock-with-young-businessman-using-laptop.jpg',
  'virtual-classroom-study-space.jpg',
  'business-strategy-success-target-goals.jpg',
  'traning6.jpg',
  'traning2.jpg',
  'online-education-concept-studying-science-laptop-modern-technologies.jpg',
  'feturedCourses2.jpg',
  'traning8.jpg',
  'standard-quality-control-concept-m.jpg',
  'traning5.jpg',
  'team-discussing-about-industrial-project-using-dual-monitors-setup-desing-d-gears-metalic-cla.jpg',
  'man-woman-making-deal-work.jpg',
  'traning4.jpg'
];

async function compressImage(filename) {
  const inputPath = path.join(publicDir, filename);
  const backupPath = path.join(backupDir, filename);

  // Check if file exists
  if (!fs.existsSync(inputPath)) {
    console.log(`❌ File not found: ${filename}`);
    return;
  }

  try {
    // Get original size
    const originalStats = fs.statSync(inputPath);
    const originalSize = (originalStats.size / 1024 / 1024).toFixed(2);

    // Backup original file
    fs.copyFileSync(inputPath, backupPath);

    // Compress image
    await sharp(inputPath)
      .resize(1920, null, { // Max width 1920px, maintain aspect ratio
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({
        quality: 80, // Good quality, much smaller size
        progressive: true
      })
      .toFile(inputPath + '.tmp');

    // Replace original with compressed
    fs.unlinkSync(inputPath);
    fs.renameSync(inputPath + '.tmp', inputPath);

    // Get new size
    const newStats = fs.statSync(inputPath);
    const newSize = (newStats.size / 1024 / 1024).toFixed(2);
    const reduction = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`✅ ${filename}`);
    console.log(`   Before: ${originalSize} MB → After: ${newSize} MB (${reduction}% smaller)`);
  } catch (error) {
    console.error(`❌ Error compressing ${filename}:`, error.message);
  }
}

async function compressAll() {
  console.log('🚀 Starting image compression...\n');
  console.log(`📦 Processing ${imagesToCompress.length} images...\n`);

  for (const image of imagesToCompress) {
    await compressImage(image);
  }

  console.log('\n✨ Compression complete!');
  console.log('📁 Original images backed up to: public-backup/');
  console.log('\n🎯 Your website should now load MUCH faster!');
}

compressAll();
