export const ContinuousNewsTicker = () => {
    const tickerText = "🔥 Ongoing Training Batches: Workday HCM  |  Workday Finance |  Workday Integration  |  Workday Extend  |  ServiceNow  | AI & Machine Learning  | PeopleSoft ERP  | SAP Security  | ";
  
    return (
      <div className="bg-white/90 rounded-xl p-4 mb-4 max-w-8xl mx-auto shadow-soft border border-mint-200/25 overflow-hidden">
        <div className="relative h-4 flex items-center">
          
          {/* News Label */}
          <div className="bg-professional-primary text-white px-3 py-1 rounded-full text-xs font-bold mr-4 flex-shrink-0 animate-gentle-bounce">
            LIVE
          </div>
          
          {/* Scrolling Container */}
          <div className="flex-1 overflow-hidden relative">
            <div className="animate-scroll-left whitespace-nowrap text-professional-primary font-semibold">
              {/* Duplicate text for seamless loop */}
              <span className="inline-block">{tickerText}</span>
              <span className="inline-block">{tickerText}</span>
            </div>
            
            {/* Gradient Fade Effects */}
            <div className="absolute left-10 top-10 w-8 h-full bg-gradient-to-r from-white/95 to-transparent pointer-events-none"></div>
            <div className="absolute right-10 top-10 w-8 h-full bg-gradient-to-l from-white/95 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    );
  };