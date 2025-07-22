import React from "react"

const Hero = () => {
  return (
    <div className="realative min-h-[110vh] bg-gradient-to-b from-gray-50 to-white pb-0">
      <div className="container mx-0 px-4 sm:px-6 lg:px-8 py-28 lg:py-44">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-6">
            태양광 설비 전문가와 함께
            <span className="block text-blue-600 mt-2">미래를 만들어갑니다.</span>
          </h1>
          <p className="text-lg text-gray-800 text-semibold mb-8 max-w-2xl mx-auto">
            안전하고 효율적인 태영광 설비 설치부터 유지보수까지, 전문가들이 함께합니다.
          </p>
          <div className="flex flex-col gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">
              상담 신청하기
            </button>
            <button className='px-8 py-4 bg-white text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-color duration-300 text-lg font-semibold'>
              더 알아보기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
