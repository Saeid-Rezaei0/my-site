
const AdvancedLocationMap = () => {
  // مختصات تهرانپارس
  const mapUrl = `https://maps.google.com/maps?q=35.745212,51.577048&z=15&output=embed`;
  
  const handleOpenInGoogleMaps = () => {
    window.open("https://www.google.com/maps/dir//35.745212,51.577048", "_blank");
  };

  return (
    <section className="container mx-auto px-4 pb-20">
      <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-cyan-400">
            موقعیت مکانی
          </h2>
          <button 
            onClick={handleOpenInGoogleMaps}
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            باز کردن در Google Maps
          </button>
        </div>
        
        <div className="rounded-xl overflow-hidden h-80 bg-slate-700/50 relative">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="نقشه تهرانپارس"
          ></iframe>
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
            <p className="text-sm font-medium text-gray-800">تهرانپارس، تهران</p>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300">
          <div className="bg-slate-700/30 p-4 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">آدرس دقیق</h3>
            <p>تهران، منطقه ۴، تهرانپارس</p>
          </div>
          <div className="bg-slate-700/30 p-4 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">دسترسی</h3>
            <p>اتوبان بابایی - مترو تهرانپارس</p>
          </div>
          <div className="bg-slate-700/30 p-4 rounded-lg">
            <h3 className="font-semibold text-cyan-400 mb-2">مسیریابی</h3>
            <p>برای مسیریابی دقیق‌تر از دکمه بالا استفاده کنید</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedLocationMap;