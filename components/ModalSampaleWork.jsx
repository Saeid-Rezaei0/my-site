import { useState } from 'react';
import { FaDesktop, FaInfoCircle, FaEye, FaCalendarAlt, FaLightbulb, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { RiStackLine } from 'react-icons/ri';

const ModalSampaleWork = ({ showModal, setShowModal, selectedProject }) => {
  const [showDescription, setShowDescription] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!showModal || !selectedProject) return null;

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-black/95 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
    >
      <div className="relative bg-slate-900 rounded-2xl border border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-slate-800/50 border-b border-slate-700">
          <h3 className="text-white font-semibold flex items-center gap-2">
            <FaDesktop className="text-cyan-400" />
            {selectedProject.category}
          </h3>
          <button
            onClick={() => setShowModal(false)}
            className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-700/50"
          >
            <MdCancel className="text-xl" />
          </button>
        </div>

        <div className="p-4 max-h-[70vh] overflow-auto">
          {showDescription ? (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaInfoCircle className="text-cyan-400 text-xl" />
                  <h4 className="text-white text-lg font-semibold">توضیحات پروژه</h4>
                </div>
                <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                  {selectedProject.detailedDescription || selectedProject.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <RiStackLine className="text-purple-400" />
                    تکنولوژی‌ها
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <FaLightbulb className="text-yellow-400" />
                    ویژگی‌های خاص
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.specialFeatures?.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {selectedProject.projectInfo && (
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <FaCalendarAlt className="text-green-400" />
                    اطلاعات پروژه
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-400">وضعیت: </span>
                      <span className="text-white">{selectedProject.projectInfo.status}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">تیم: </span>
                      <span className="text-white">{selectedProject.projectInfo.teamSize}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">صنعت: </span>
                      <span className="text-white">{selectedProject.projectInfo.industry}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">مشتری: </span>
                      <span className="text-white">{selectedProject.projectInfo.client}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <img
                src={selectedProject.images[currentIndex]}
                className="w-full h-full object-contain"
                alt={`${selectedProject.category} - Image ${currentIndex + 1}`}
              />
            </div>
          )}
        </div>

        <div className="p-4 bg-slate-800/50 border-t border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDescription}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors text-white"
            >
              {showDescription ? (
                <>
                  <FaEye className="text-cyan-400" />
                  نمایش تصویر
                </>
              ) : (
                <>
                  <FaInfoCircle className="text-purple-400" />
                  مشاهده توضیحات
                </>
              )}
            </button>
            
            {!showDescription && (
              <span className="text-slate-400 text-sm">
                {currentIndex + 1} / {selectedProject.images.length}
              </span>
            )}
          </div>

          {!showDescription && (
            <div className="flex gap-3">
              <button
                onClick={handlePreviousImage}
                className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors text-white"
              >
                <FaArrowRight />
              </button>
              <button
                onClick={handleNextImage}
                className="p-3 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors text-white"
              >
                <FaArrowLeft />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalSampaleWork;