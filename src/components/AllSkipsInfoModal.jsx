import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const skipInfoData = {
  4: {
    title: '4 Yard Skip',
    description:
      '4 yard Skips, also known as “midi Skips,” are great for small domestic jobs. They hold around 30-40 bin bags.',
    image: 'https://www.renewableenergymarketing.net/wp-content/uploads/2015/12/4-Yard-skip.jpg',
    measurements: [['4 cu YRDs', '3.06m³', '5’11”', '1.80m', '4′', '1.22m', '3’2″', '0.96m']],
  },
  6: {
    title: '6 Yard Skip',
    description:
      '6 yard Skips are referred to as “Builders Skips” and hold around 50–60 bin bags. Great for hardcore waste.',
    image: 'https://www.renewableenergymarketing.net/wp-content/uploads/2015/12/4-Yard-skip.jpg',
    measurements: [['6 cu YRDs', '4.06m³', '8‘6″', '2.60m', '5′', '1.52m', '4′', '1.22m']],
  },
  8: {
    title: '8 Yard Skip',
    description:
      '8 yard Skips are the most popular and great for hardcore waste. They hold around 60-80 bin bags.',
    image: 'https://www.renewableenergymarketing.net/wp-content/uploads/2015/12/4-Yard-skip.jpg',
    measurements: [['8 cu YRDs', '6.12m³', '10‘6″', '3.2m', '5’9″', '1.75m', '4′', '1.22m']],
  },
  10: {
    title: '10 Yard Skip',
    description: 'Great for big cleanouts and bulky waste (~80–100 bin bags).',
    image: 'https://www.renewableenergymarketing.net/wp-content/uploads/2015/12/4-Yard-skip.jpg',
    measurements: [['10 cu YRDs', '7.6m³', '12′', '3.5m', '5’9″', '1.75m', '4’11”', '1.5m']],
  },
  12: {
    title: '12 Yard Skip',
    description: 'Maxi Skip, for large clear outs (~100–120 bin bags).',
    image: 'https://www.renewableenergymarketing.net/wp-content/uploads/2015/12/4-Yard-skip.jpg',
    measurements: [['12 cu YRDs', '9.8m³', '12’2″', '3.7m', '5’9″', '1.75m', '5’6″', '1.68m']],
  },
  20: {
    title: '20 Yard Skip',
    description: 'Roll-on/roll-off for light construction (~160–200 bin bags).',
    image: 'https://www.renewableenergymarketing.net/wp-content/uploads/2015/12/4-Yard-skip.jpg',
    measurements: [['20 cu YRDs', '15.3m³', '19’11”', '6.07m', '7’4″', '2.23m', '5’4″', '1.62m']],
  },
  40: {
    title: '40 Yard Skip',
    description: 'Largest commercial skip (~350–400 bin bags).',
    image: 'https://www.renewableenergymarketing.net/wp-content/uploads/2015/12/4-Yard-skip.jpg',
    measurements: [['40 cu YRDs', '30.58m³', '19’11”', '6.07m', '7’4″', '2.23m', '8’10″', '2.69m']],
  },
};

export default function AllSkipsInfoModal({ onClose }) {
  const modalRef = useRef(null);

  // Disable body scroll when modal opens, re-enable on close
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close modal if clicked outside modal content
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6 overflow-auto"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative max-w-6xl w-full bg-white rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[90vh] flex flex-col"
      >
        {/* Close (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
          aria-label="Close all skips info modal"
          type="button"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal title */}
        <h2 id="modal-title" className="text-3xl font-bold text-[#ff8a00] mb-6 text-center">
          All Skip Sizes & Info
        </h2>

        {/* Skips info list */}
        <div className="space-y-10 flex-grow overflow-y-auto">
          {Object.entries(skipInfoData).map(([size, skip]) => (
            <div
              key={size}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-b border-gray-200 pb-6"
            >
              {/* Image */}
              <div className="w-full max-w-xs mx-auto">
                <img
                  src={skip.image}
                  alt={skip.title}
                  className="rounded-xl border shadow-lg object-contain w-full h-48"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-[#ff8a00]">{skip.title}</h3>
                <p className="text-gray-700 my-2">{skip.description}</p>

                {/* Measurements table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-300 rounded-lg shadow-sm">
                    <thead className="bg-[#ff8a00]/20 text-[#ff8a00] font-semibold">
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
                    <tbody className="text-gray-800">
                      {skip.measurements.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          {row.map((cell, idx) => (
                            <td
                              key={idx}
                              className="p-2 border border-gray-300 text-center whitespace-nowrap"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Close button */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md bg-[#ff8a00] px-6 py-3 text-white font-semibold hover:bg-[#cc7000] transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
