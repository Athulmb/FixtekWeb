import React from 'react'
import Footersection from "../Components/common/Footersection";

function Whoweare() {
  return (
    <div className="mt-12 space-y-20">

      <div className="flex justify-center px-2">
  <div className="flex flex-col md:flex-row justify-between items-start bg-[#F9F3EF] rounded-xl w-full md:w-[1244px] h-auto md:h-[552px] shadow-sm p-6 md:p-8">
    
    {/* Left Content */}
    <div className="w-full md:w-1/2 pr-0 md:pr-6 flex flex-col justify-start text-center md:text-left">
      <h2 className="text-[28px] md:text-[41px] font-manrope font-bold text-[#00343D] mb-2 leading-snug py-4 md:py-13">
        Lorem Ipsum is simply <br /> dummy text of the printing and typesetting.
      </h2>
      <p className="text-[#212529] text-[14px] font-manrope md:text-[15px] leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting <br />
        industry. Lorem Ipsum has been th
      </p>
    </div>
          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center mt-3 md:mt-0 ">
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center">
              <img
                src="10-ways-to-keep-your-house-clean.jpg"
                alt="who we are"
                className="object-cover w-[299px] h-[292px] md:w-[499px] md:h-[492px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= OUR MISSION / VISION SECTION ================= */}
      <div className="flex flex-col md:flex-row justify-between items-start max-w-[1244px] mx-auto px-4 gap-8 md:gap-0">
        {/* Left Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-[24px] md:text-[31px] font-semibold text-[#212529] font-manrope  mb-3">Our Mission</h2>
          <p className="text-[#212529] text-[14px] md:text-[15px] font-manrope  leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has<br/>
             been the industry's standard dummy text ever since the 1500s, when an unknown printer took a<br/> 
             galley of type and scrambled it to make a type specimen book
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col gap-3 px-0 md:px-6 w-full md:w-1/3 mt-6 md:mt-0">
          <button className="w-full md:w-[391px] h-[102px] flex items-center gap-3 border rounded-xl p-4 shadow-sm bg-blue-50 hover:bg-blue-100">
            <img src="Mission Icon.png" alt="mission icon" className="w-6 h-6" />
            <span>Our Mission</span>
          </button>

          <button className="w-full md:w-[391px] h-[102px] flex items-center gap-3 border rounded-xl p-4 shadow-sm bg-blue-50 hover:bg-blue-100">
            <img src="Vision Icon.png" alt="vision icon" className="w-6 h-6" />
            <span>Our Vision</span>
          </button>
        </div>
      </div>

 {/* ================= PHONE + CARDS SECTION ================= */}
<div className="flex justify-center items-center w-full ">
  <div className="bg-[#F0F5FF] w-full max-w-[1224px] h-auto md:h-[696px] flex flex-col items-center justify-start text-center rounded-2xl relative px-4 py-10 md:py-14">

    {/* ======= HEADING ======= */}
    <h2 className="text-center font-manrope text-[22px] md:text-[33px] font-bold text-[#00343D] mb-4 leading-snug">
      Fixtek Everything. Find Spares. Book Instantly <br className="hidden md:block" />
      with the Fixtek Home Service App
    </h2>

    {/* ======= SUBTEXT ======= */}
    <p className="text-center font-manrope text-[#212529] text-[12px] md:text-[13px] leading-relaxed max-w-[750px] px-4 md:px-6 mb-10">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br className="hidden md:block" />
      Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting.
    </p>

    {/* ======= MAIN CONTAINER ======= */}
    <div className="relative flex justify-center items-center w-full max-w-[1224px] mx-auto mt-10 min-h-[400px] md:min-h-[500px]">

      {/* ======= LEFT SIDE IMAGES ======= */}
      <div className="hidden md:flex flex-col gap-6 mt-10">
        <div className="absolute bottom-[80%] left-[15%] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center w-[196px] h-[128px]">
          <img
            src="Figure (5).png"
            alt="Families"
            className="w-[194px] h-[95px] bg-[#FFC0C0] rounded-t-2xl object-cover"
          />
          <p className="text-[12px] font-semibold text-gray-900 mt-3 font-manrope">
            Trusted by 6000+ Families
          </p>
        </div>

        <div className="absolute top-[34%] left-[19%] bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center w-[183px] h-[116px]">
          <img src="Figure (1).png" alt="Professionals" className="bg-[#FFFFFF] rounded-t-2xl object-cover" />
          <p className="text-[8.6px] font-semibold font-manrope text-[#18181B] py-2">
            Professionally Trained For Home Cleaning
          </p>
        </div>

        <div className="absolute top-[40%] left-[3%] w-[144px] h-[154px]">
          <img src="Container.png" alt="Analytics" className="w-full h-full object-contain rounded-xl" />
        </div>

        <div className="absolute top-[5%] left-[3%] w-[144px] h-[144px]">
          <img src="Container (8).png" alt="Reports" className="w-full h-full object-contain rounded-xl" />
        </div>
      </div>

      {/* Mobile Left Side Cards */}
      <div className="md:hidden absolute top-0 left-0 w-full flex flex-col gap-3 px-2">
        <div className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center w-[140px] h-[90px] mx-auto">
          <img
            src="Figure (5).png"
            alt="Families"
            className="w-[138px] h-[65px] bg-[#FFC0C0] rounded-t-2xl object-cover"
          />
          <p className="text-[10px] font-semibold text-gray-900 mt-1 font-manrope px-2">
            Trusted by 6000+ Families
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm flex flex-col items-center text-center w-[130px] h-[85px] mx-auto">
          <img src="Figure (1).png" alt="Professionals" className="bg-[#FFFFFF] rounded-t-2xl object-cover w-full h-[50px]" />
          <p className="text-[7px] font-semibold font-manrope text-[#18181B] py-1 px-2">
            Professionally Trained For Home Cleaning
          </p>
        </div>
      </div>

      {/* ======= PHONE IMAGE ======= */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[24%] md:left-[36%] md:transform-none md:bottom-[24%] w-[200px] h-[320px] md:w-[305px] md:h-[450px] z-10">
        <img
          src="iPhone 13 Pro (2).png"
          alt="Fixtek App"
          className="w-full h-full object-contain"
        />
      </div>

      {/* ======= RIGHT SIDE IMAGES ======= */}
      <div className="hidden md:block relative w-[400px] h-[500px] mt-10">
        <div className="absolute bottom-[80%] left-[95%] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center w-[172px] h-[107px]">
          <img
            src="Figure (4).png"
            alt="Quality"
            className="w-[171px] h-[77px] rounded-t-2xl bg-[#AFDEFF] object-cover"
          />
          <p className="text-[10px] font-manrope font-semibold text-gray-900 mt-2 px-3">
            Quality You Can Trust
          </p>
        </div>

        <div className="absolute top-[35%] left-[90%] w-[144px] h-[154px]">
          <img
            src="Coupen-home.webp"
            alt="Wishlist"
            className="w-[144px] h-[144px] object-contain rounded-xl"
          />
        </div>

        <div className="absolute bottom-[95%] left-[150%] w-[184px] h-[90px]">
          <img
            src="whislist.png"
            alt="Rewards"
            className="w-[144px] h-[144px] object-contain rounded-xl"
          />
        </div>

        <div className="absolute bottom-[50%] left-[135%] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center w-[200px] h-[122px]">
          <img
            src="Figure.png"
            alt="Background Verified"
            className="w-[200px] h-[90px] rounded-t-2xl object-cover"
          />
          <p className="text-[9px] font-semibold text-[#18181B] font-manrope mt-2 px-3">
            Background Verified and Trusted Experts
          </p>
        </div>
      </div>

      {/* Mobile Right Side Cards */}
      <div className="md:hidden absolute bottom-0 right-0 w-full flex flex-col gap-3 px-2">
        <div className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center w-[140px] h-[90px] ml-auto">
          <img
            src="Figure (4).png"
            alt="Quality"
            className="w-[138px] h-[65px] rounded-t-2xl bg-[#AFDEFF] object-cover"
          />
          <p className="text-[9px] font-manrope font-semibold text-gray-900 mt-1 px-2">
            Quality You Can Trust
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center w-[150px] h-[90px] ml-auto">
          <img
            src="Figure.png"
            alt="Background Verified"
            className="w-[148px] h-[65px] rounded-t-2xl object-cover"
          />
          <p className="text-[8px] font-semibold text-[#18181B] font-manrope mt-1 px-2">
            Background Verified and Trusted Experts
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<Footersection />
</div>
  
  );
}

export default Whoweare;
