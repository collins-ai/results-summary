import UseFetch from "./useFetch"

const Summary = () => {
  const jsonData = UseFetch("/data.json")

  return (
    <div className="bg-white flex flex-col gap-5 p-5 font-semibold md:rounded-b-4xl lg:basis-[50%] lg:rounded-r-4xl lg:rounded-bl-none lg:p-10">
      <p className="text-xl">Summary</p>
      <div className="flex flex-col gap-4">
        {jsonData && jsonData.map((data, index) => (
          <div key={index} className={`${data.bgColor} flex justify-between p-5 rounded-xl`}>
            <div className="flex gap-5">
              <img src={data.icon} alt="summary icons" className="w-6" />
              <span className={`${data.color}`}>{data.category}</span>
            </div>
            <p>
              <span>{data.score}</span>
              <span className="text-black/50">/100</span>
            </p>
          </div>
        ))}
      </div>
      <button className="bg-blue-950/90 text-white p-5 rounded-full cursor-pointer hover:bg-gradient-to-b hover:from-indigo-600 hover:to-blue-800">Continue</button>
    </div>
  )
}

export default Summary
