import { stepperSteps } from '../../utils/steps';
import { useEffect, useState } from 'react';

export default function Stepper({ currentStep }) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to toggle mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile-only style fix: hardware acceleration triggers flicker fix on Android
  const mobileFixStyle = isMobile ? { transform: 'translateZ(0)', willChange: 'transform' } : {};

  return (
    <div
      className="flex justify-center px-4 py-6 bg-white dark:bg-black shadow-md rounded-xl w-full min-h-[80px]"
      style={mobileFixStyle}
    >
      <div className="flex items-center w-full max-w-7xl overflow-x-auto md:overflow-visible">
        <div className="flex items-center w-full md:justify-between">
          {stepperSteps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            const isLast = index === stepperSteps.length - 1;

            // Only render prev, current, and next step on mobile
            if (isMobile && Math.abs(index - currentStep) > 1) return null;

            return (
              <div
                key={step.key}
                className={`flex items-center relative ${isLast ? 'max-w-[90px]' : 'w-full'}`}
              >
                {/* Step Circle + Label */}
                <div className="flex flex-col items-center justify-center text-center min-w-[60px]">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300
                      ${
                        isCompleted
                          ? 'bg-[#ff8a00] text-white'
                          : isActive
                            ? 'border-2 border-[#ff8a00] text-[#ff8a00] bg-white dark:bg-black'
                            : 'bg-gray-200 text-gray-400 dark:bg-gray-700'
                      }`}
                  >
                    <span className="w-5 h-5 flex items-center justify-center">{step.icon}</span>
                  </div>
                  <span className="text-xs mt-2 text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    {step.label}
                  </span>
                </div>

                {!isLast && (
                  <div className="flex items-center justify-center flex-1 px-2">
                    <div
                      className={`h-1 w-full transition-all duration-300
                        ${isCompleted ? 'bg-[#ff8a00]' : 'bg-gray-300 dark:bg-gray-600'}`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
