import { useState } from 'react';
import Stepper from '../components/skip-hiring-multi-step-form/stepper';
import SelectSkipStep from '../components/skip-hiring-multi-step-form/steps/SelectSkipStep';

export default function SkipHiring() {
  const [currentStep, setCurrentStep] = useState(2); // Start at step 3

  return (
    <div className="min-h-screen flex flex-col p-4">
      <Stepper currentStep={currentStep} />
      <div className="flex-grow mt-6">{currentStep === 2 && <SelectSkipStep />}</div>
    </div>
  );
}
