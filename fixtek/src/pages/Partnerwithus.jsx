import React from 'react'
import Footersection from "../Components/common/Footersection";

function Partnerwithus() {
  return (
    <div className="space-y-7">
      {/* Content Section with Padding */}
      <div className="px-4 sm:px-8 md:px-16 py-8 md:py-16 space-y-8 md:space-y-14">
        {/* Top Section */}
        <div className="bg-[#023047] rounded-lg p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center lg:items-start justify-between text-white w-full max-w-[1200px] mx-auto">
          <div className="flex-1 lg:max-w-[50%] mb-6 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-[41px] font-bold mb-3 lg:mb-4">
              Become a Fixtek <br className="hidden sm:block"/> Partner
            </h2>
            <p className="mb-6 text-sm sm:text-[15px] text-gray-200 leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.<br className="hidden sm:block"/> 
              Lorem Ipsum has been the...
            </p>
            <button className="bg-white text-[#023047] px-6 md:px-7 py-3 md:py-4 rounded-md text-base md:text-[18px] font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto min-w-[194px]">
              Partner With Us
            </button>
          </div>
          <div className="flex-1 lg:max-w-[50%] flex justify-center lg:justify-end mt-4 lg:mt-0">
            <img
              src="business-deal 1 (1).png"
              alt="Partner Illustration"
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[580px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#F3F7FF] shadow rounded-lg p-6 md:p-9 w-full max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 py-3 md:py-4 px-2 md:px-7">
            {/* Card 1 */}
            <div className="bg-[#FFFFFF] shadow rounded-lg p-6 md:p-8 w-full">
              <h3 className="text-2xl sm:text-3xl md:text-[43px] font-regular mb-3 md:mb-4">
                Why Join the Fixtek<br className="hidden sm:block"/> Network?
              </h3>
              <p className="text-sm sm:text-[15px] text-[#4A5565] mb-6 md:mb-8 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting <br className="hidden sm:block"/>
                industry. Lorem Ipsum has been the industry's standard dummy text <br className="hidden sm:block"/> 
                ever since the...
              </p>
              <button className="bg-[#023047] mt-6 md:mt-14 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#034c63] transition-colors w-full sm:w-auto">
                Partner With Us
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F3F7FF] border border-gray-300 shadow rounded-lg p-6 md:p-8 lg:px-9 w-full">
              <h3 className="text-2xl sm:text-3xl md:text-[43px] font-regular mb-3 md:mb-4">
                Expand Your<br className="hidden sm:block"/> Reach, Boost Your<br className="hidden sm:block"/> Skills
              </h3>
              <p className="text-sm text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and <br className="hidden sm:block"/>typesetting industry. 
                Lorem Ipsum has been <br className="hidden sm:block"/>the industry's standard dummy text ever since <br className="hidden sm:block"/>the...
              </p>
              <button className="bg-white border border-gray-300 text-black px-6 py-3 shadow rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Full Width */}
      <Footersection />
    </div>
  );
}

export default Partnerwithus;
