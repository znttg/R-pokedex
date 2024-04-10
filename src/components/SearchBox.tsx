import startButton from './../assets/start.svg'

export function SearchBox() {
  return (
    <div className="flex flex-col items-center justify-center absolute m-auto left-0 right-0 top-0 bottom-0">
      <div>
        <label className="mt-80 mb-8 block text-3xl decoration-white font-medium leading-6">
          <p id="shadow">
            Search Pokemon by name or click start to see the list
          </p>
        </label>
        <div className="relative mt-6 flex justify-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            className="align-middldeblock w-48 border-0 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-8"
          />
        </div>
      </div>
      <button className="m-6 p-24 relative">
        <img
          className=" z-0 absolute left-0 right-0 top-0 bottom-0"
          src={startButton}
          alt=""
        />
        <p
          id="shadow"
          className="absolute z-10 text-4xl left-0 right-0 top-6 bottom-0"
        >
          Start
        </p>
      </button>
    </div>
  )
}
