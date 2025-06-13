import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkips, selectSkip, unselectSkip } from '../../../redux/slices/SkipSlice';
import { Loader2 } from 'lucide-react';
import StickySkipBar from '../StickySkipBar';

const SelectSkipStep = ({ postcode = 'NR32', area = 'Lowestoft' }) => {
  const dispatch = useDispatch();
  const { skips, loading, selectedSkip, error } = useSelector((state) => state.skips);

  // 📡 Fetch skips on mount
  useEffect(() => {
    dispatch(fetchSkips({ postcode, area }));
  }, [dispatch, postcode, area]);

  const getSkipImage = (size) => {
    if (size === 4) {
      return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg';
    } else if (size >= 5 && size <= 14) {
      return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg';
    } else if (size === 16) {
      return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg';
    } else if (size === 20) {
      return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg';
    } else if (size === 40) {
      return 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg';
    } else {
      return ''; // fallback image or empty
    }
  };

  return (
    <section className="px-4 mb-40 py-8 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Step Title */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-100">Choose Your Skip Size</h2>
        <p className="text-gray-400 mt-2">Select the skip size that best suits your needs</p>
      </div>
      {/* Loading/Error States */}
      {loading && (
        <div className="flex justify-center items-center h-32">
          <Loader2 className="animate-spin text-primary" size={28} />
          <span className="ml-2 text-gray-600">Loading skips...</span>
        </div>
      )}
      {error && (
        <div role="alert" className="border-s-4 border-red-700 bg-red-50 p-4">
          <div className="flex items-center gap-2 text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>

            <strong className="font-medium"> Something went wrong </strong>
          </div>

          <p className="mt-2 text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Skip Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skips.map((skip) => {
          const priceWithVat = (skip.price_before_vat * 1.2).toFixed(2);
          const isSelected = selectedSkip?.id === skip.id;
          const isDisabled = !skip.allowed_on_road && !skip.allows_heavy_waste;

          return (
            <div
              key={skip.id}
              className={`
          group relative overflow-hidden rounded-2xl shadow-md transition hover:shadow-lg
          ${isSelected ? 'border-4 border-[#ff8a00] bg-orange-50' : 'bg-[#f2f2f2]'}
          ${isDisabled ? 'opacity-60 pointer-events-none cursor-not-allowed' : ''}
        `}
            >
              {/* Dark overlay when disabled */}
              {isDisabled && <div className="absolute inset-0 z-20 bg-black/30" />}

              {/* Wishlist Button */}
              <button className="absolute end-3 top-3 z-10 rounded-full bg-white p-1.5 text-gray-900 shadow hover:text-gray-700">
                <span className="sr-only">Wishlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              {/* Skip Image */}
              <div className="relative overflow-hidden">
                <img
                  src={getSkipImage(skip.size)}
                  alt={`Skip size ${skip.size}`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/500x300?text=No+Image&font=roboto';
                  }}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Warning badges */}
                <div className="absolute bottom-2 right-2 flex flex-col space-y-2 z-10">
                  {!skip.allowed_on_road && (
                    <span className="inline-flex items-center rounded-full border border-amber-500 bg-amber-100 px-2.5 py-0.5 text-amber-700 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.764-1.36 2.722-1.36 3.486 0l6.518 11.614c.75 1.338-.213 2.987-1.743 2.987H3.482c-1.53 0-2.493-1.649-1.743-2.987L8.257 3.1zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-6a1 1 0 00-.993.883L9 8v3a1 1 0 001.993.117L11 11V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs font-semibold">On-Road Not Allowed</span>
                    </span>
                  )}

                  {!skip.allows_heavy_waste && (
                    <span className="inline-flex items-center rounded-full border border-red-500 bg-red-100 px-2.5 py-0.5 text-red-700 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.764-1.36 2.722-1.36 3.486 0l6.518 11.614c.75 1.338-.213 2.987-1.743 2.987H3.482c-1.53 0-2.493-1.649-1.743-2.987L8.257 3.1zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-6a1 1 0 00-.993.883L9 8v3a1 1 0 001.993.117L11 11V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs font-semibold">Heavy Waste Not Allowed</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Card body */}
              <div className={`p-5 ${isSelected ? 'text-gray-900' : 'text-zinc-800'}`}>
                <div className="mb-2">
                  <span className="bg-[#ff8a00] px-3 py-1.5 text-xs font-medium whitespace-nowrap">
                    {skip.size} yards
                  </span>
                </div>

                <p className="text-primary font-semibold text-lg">£{priceWithVat}</p>
                <h3 className="mt-2 text-xl font-bold">{skip.size} Yard Skip</h3>

                <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                  <li>Hire Period: {skip.hire_period_days} days</li>
                </ul>

                {/* Select / Unselect Button */}
                {isSelected ? (
                  <a
                    className="group relative inline-block focus:ring-3 focus:outline-none mt-4 cursor-pointer"
                    onClick={() => dispatch(unselectSkip(skip))}
                  >
                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-orange-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
                    <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest uppercase text-orange-900">
                      Selected
                    </span>
                  </a>
                ) : (
                  <a
                    className="group relative inline-block focus:ring-3 focus:outline-none mt-4 cursor-pointer"
                    onClick={() => dispatch(selectSkip(skip))}
                  >
                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>
                    <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest uppercase text-yellow-900">
                      Select This Skip
                    </span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {selectedSkip !== null && (
        <StickySkipBar skip={selectedSkip} onBack={() => dispatch(unselectSkip(selectedSkip))} />
      )}
    </section>
  );
};

export default SelectSkipStep;
