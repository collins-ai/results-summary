import Result from "./result"
import Summary from "./summary"

function App() {
  return (
    <div className="bg-sky-50 w-screen h-full md:h-screen md:flex md:justify-center md:items-center">
      <div className="bg-white text-lg flex flex-col sm:w-[430px] md:rounded-4xl lg:w-[860px] lg:flex-row">
        <Result />
        <Summary />
      </div>
      <div className="text-sm text-center py-5 md:absolute md:bottom-0 lg:py-2">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blue-800 cursor-pointer">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/collins-ai" target="_blank" className="text-blue-800 cursor-pointer">Sunday Collins</a>.
      </div>
    </div>
  )
}

export default App
