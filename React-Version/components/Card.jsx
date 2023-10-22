/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
    <div className="md:w-[60%] lg:w-[35%] flex justify-between p-5 w-4/5 bg-white/20 rounded-2xl backdrop-blur-sm text-gray-900 shadow-lg cursor-pointer ease-in-out duration-300 hover:scale-[102%] mb-3">
      <div id="left" className="flex flex-col">
        <div id="top" className="mb-6">
          <p id="timezone" className="font-bold text-4xl">
            {props.timezone}
          </p>
          <p className="font-semibold">Now</p>
        </div>
        <p className="font-semibold text-xl">
          <span id="city">{props.city}</span>,{' '}
          <span id="country">{props.country}</span>
        </p>
      </div>
      <div id="right" className="flex justify-center items-center">
        <img
          id="weather-icon"
          src={props.weatherIcon}
          alt="weather img"
          className="w-24 h-24"
        />
      </div>
    </div>
  );
}
