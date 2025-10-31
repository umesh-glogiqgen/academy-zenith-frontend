export const ContinuousNewsTicker = () => {
    const tickerText = "🔥 Ongoing Training Batches: Workday HCM  |  Workday Finance  |  Workday Integration  |  Workday Extend  |  ServiceNow  |  AI & Machine Learning  |  PeopleSoft ERP  |  SAP Security  |  ";

    return (
      <div className="bg-white/90 rounded-xl p-4 mb-4 max-w-8xl mx-auto shadow-soft border border-mint-200/25 overflow-hidden">
        <div className="relative h-6 flex items-center">

          {/* News Label */}
          <div className="bg-professional-primary text-white px-3 py-1 rounded-full text-xs font-bold mr-4 flex-shrink-0 animate-gentle-bounce">
            LIVE
          </div>

          {/* Scrolling Container */}
          <div className="flex-1 overflow-hidden relative">
            <div className="animate-scroll-left whitespace-nowrap text-professional-primary font-semibold text-sm">
              {/* Duplicate text multiple times for seamless infinite loop */}
              <span className="inline-block">{tickerText}</span>
              <span className="inline-block">{tickerText}</span>
              <span className="inline-block">{tickerText}</span>
            </div>

            {/* Gradient Fade Effects */}
            <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white/90 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white/90 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    );
  };