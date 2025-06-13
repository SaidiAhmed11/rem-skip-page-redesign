import { useEffect, useRef, useState } from 'react';

const StickySkipBar = ({ skip }) => {
  const [isAtFooter, setIsAtFooter] = useState(false);
  const footerRef = useRef(null);

  // Detect footer using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsAtFooter(entry.isIntersecting), {
      root: null,
      threshold: 0,
    });
    const footerEl = document.querySelector('footer');
    if (footerEl) {
      footerRef.current = footerEl;
      observer.observe(footerEl);
    }
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const priceWithVat = (skip.price_before_vat * 1.2).toFixed(2);

  return (
    <div
      className={`
    z-50
    ${isAtFooter ? 'absolute left-0 right-0 bottom-[100%]' : 'fixed bottom-0 left-0 right-0'}
    bg-gradient-to-r from-[#1c1c1e] via-[#2c2c2e] to-[#1c1c1e]
    text-white border-t border-orange-500
    shadow-[0_-2px_10px_rgba(215,127,25,0.3)]
    transition-all duration-300 ease-in-out transform
  `}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-4 gap-4">
        <p className="text-xs text-gray-300 text-center sm:text-left">
          Imagery and information shown throughout this website may not reflect the exact shape or
          size specification, colours may vary, options and/or accessories may be featured at
          additional cost.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="text-sm text-gray-300 font-semibold">
            <span className="block text-amber-50">{skip.size} Yard Skip</span>
            <span>
              £{priceWithVat} / {skip.hire_period_days} day hire
            </span>
          </div>

          <div className="flex gap-2">
            <button
              //onClick={onBack}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 text-sm font-medium"
            >
              Back
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#ff8a00] text-white hover:bg-orange-500 text-sm font-medium">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickySkipBar;
