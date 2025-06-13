import React from 'react';
import { X } from 'lucide-react';
import { selectSkip, unselectSkip } from '../../redux/slices/SkipSlice';
import { useDispatch, useSelector } from 'react-redux';

const skipInfoData = {
  4: {
    title: '4 Yard Skip',
    description:
      '4 yard Skips, also known as “midi Skips,” are great for small domestic jobs. They hold around 30-40 bin bags.',
    image:
      'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg',
    measurements: [['4 cu YRDs', '3.06m³', '5’11”', '1.80m', '4′', '1.22m', '3’2″', '0.96m']],
  },
  6: {
    title: '6 Yard Skip',
    description:
      '6 yard Skips are referred to as “Builders Skips” and hold around 50–60 bin bags. Great for hardcore waste.',
    image:
      'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg',
    measurements: [['6 cu YRDs', '4.06m³', '8‘6″', '2.60m', '5′', '1.52m', '4′', '1.22m']],
  },
  8: {
    title: '8 Yard Skip',
    description:
      '8 yard Skips are the most popular and great for hardcore waste. They hold around 60-80 bin bags.',
    image:
      'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg',
    measurements: [['8 cu YRDs', '6.12m³', '10‘6″', '3.2m', '5’9″', '1.75m', '4′', '1.22m']],
  },
  10: {
    title: '10 Yard Skip',
    description: 'Great for big cleanouts and bulky waste (~80–100 bin bags).',
    image: 'url...14-yarder-image.jpg',
    measurements: [['10 cu YRDs', '7.6m³', '12′', '3.5m', '5’9″', '1.75m', '4’11”', '1.5m']],
  },
  12: {
    title: '12 Yard Skip',
    description: 'Maxi Skip, for large clear outs (~100–120 bin bags).',
    image: 'url...14-yarder-image.jpg',
    measurements: [['12 cu YRDs', '9.8m³', '12’2″', '3.7m', '5’9″', '1.75m', '5’6″', '1.68m']],
  },
  20: {
    title: '20 Yard Skip',
    description: 'Roll-on/roll-off for light construction (~160–200 bin bags).',
    image: 'url...20-yarder-image.jpg',
    measurements: [['20 cu YRDs', '15.3m³', '19’11”', '6.07m', '7’4″', '2.23m', '5’4″', '1.62m']],
  },
  40: {
    title: '40 Yard Skip',
    description: 'Largest commercial skip (~350–400 bin bags).',
    image: 'url...40-yarder-image.jpg',
    measurements: [['40 cu YRDs', '30.58m³', '19’11”', '6.07m', '7’4″', '2.23m', '8’10″', '2.69m']],
  },
};

export default function SkipInfoModal({ skip, size, onClose }) {
  const dispatch = useDispatch();
  const selectedSkipSize = useSelector((state) => state.skips.selectedSkip?.size);
  const isSelected = selectedSkipSize === size;

  const skipInfo = skipInfoData[size];
  if (!skipInfo) return null;

  const handleSelectToggle = () => {
    if (isSelected) {
      dispatch(unselectSkip()); // Unselect
    } else {
      dispatch(selectSkip(skip)); // Select
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-screen overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-600 hover:text-slate-900 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Responsive Grid: stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="p-4 sm:p-6 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#ff8a00]">{skipInfo.title}</h2>
            <p className="text-slate-700 text-sm leading-relaxed">{skipInfo.description}</p>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-[#ff8a00]/10 text-[#ff8a00] font-semibold">
                  <tr>
                    <th className="p-2">Skip Size</th>
                    <th className="p-2">m³</th>
                    <th className="p-2">Length</th>
                    <th className="p-2">m</th>
                    <th className="p-2">Width</th>
                    <th className="p-2">m</th>
                    <th className="p-2">Height</th>
                    <th className="p-2">m</th>
                  </tr>
                </thead>
                <tbody className="text-slate-800">
                  {skipInfo.measurements.map((row, i) => (
                    <tr key={i} className="odd:bg-white even:bg-gray-50">
                      {row.map((cell, idx) => (
                        <td key={idx} className="p-2 border-t border-gray-200 text-center">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-4 sm:p-6 flex items-center justify-center">
            <img
              src={skipInfo.image}
              alt={`${skipInfo.title} example`}
              className="rounded-xl border shadow-lg object-contain w-full max-w-xs sm:max-w-full max-h-80"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="p-4 flex flex-col sm:flex-row justify-end gap-3 border-t border-gray-100 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-slate-700 hover:bg-gray-100 transition"
          >
            Close
          </button>
          <button
            onClick={handleSelectToggle}
            className={`px-4 py-2 text-sm font-semibold rounded-lg  transition shadow-md bg-[#ff8a00] ${isSelected ? 'bg-yellow-200 text-slate-700 hover:bg-yellow-300' : 'bg-[#ff8a00] text-white hover:bg-[#e67a00] '}  `}
          >
            {isSelected ? 'Selected' : 'Select This Skip'}
          </button>
        </div>
      </div>
    </div>
  );
}
