const Result = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-600 to-blue-800 flex flex-col items-center gap-5 rounded-b-4xl p-10 md:rounded-t-4xl lg:basis-[50%] lg:justify-between lg:px-20">
      <p className="text-white/50 text-xl lg:text-2xl lg:font-semibold">Your Result</p>
      <div className="bg-gradient-to-b from-indigo-800 to-blue-600/0 rounded-full flex flex-col items-center justify-around p-7 w-40 h-40 lg:p-10 lg:w-52 lg:h-52">
        <span className="text-white text-6xl font-bold lg:text-7xl">76</span>
        <span className="text-white/30">of 100</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-center lg:gap-3">
        <p className="text-white text-2xl font-semibold lg:text-3xl">Great</p>
        <p className="text-white/50 leading-6">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  )
}

export default Result
