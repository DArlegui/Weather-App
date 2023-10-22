/* eslint-disable react/prop-types */

export default function Stat(props) {
  return (
    <div className="md:w-3/5 lg:w-[35%] flex w-full justify-between py-3 px-3 backdrop-blur-sm rounded-xl bg-white/20 shadow-lg cursor-pointer ease-in-out duration-300 hover:scale-[102%] items-center">
      <div id="left" className="flex flex-col justify-start items-center">
        {/* Icon  */}
        <img
          id="weather-icon"
          src={props.weatherIcon}
          alt=""
          className="w-28 h-28"
        />
        {/* <!-- Weather --> */}
        <p
          id="weather"
          className="font-bold text-4xl text-gray-900 text-center">
          {props.weather}
        </p>
        {/* <!-- Description --> */}
        <p
          id="weather-description"
          className="font-semibold text-gray-900 text-center">
          {props.weatherDescription}
        </p>
      </div>
      {/* <!-- Right --> */}
      <div id="right" className="w-1/2 flex-col space-y-2">
        {/* <!-- Temperature --> */}
        <div className="flex w-full justify-around bg-white/30 py-2 px-3 rounded-lg items-center gap-6">
          <ion-icon name="thermometer"></ion-icon>
          <div className="flex-1">
            <p
              id="temperature"
              className="font-bold text-2xl text-right text-gray-900">
              {props.temperature}
            </p>
            <p className="text-sm text-gray-900 text-right">Temperature</p>
          </div>
        </div>
        {/* <!-- Wind Speed --> */}
        <div className="flex w-full justify-around bg-white/30 py-2 px-3 rounded-lg items-center gap-6">
          <ion-icon name="speedometer"></ion-icon>
          <div className="flex-1">
            <p
              id="wind-speed"
              className="font-bold text-2xl text-right text-gray-900">
              {props.windSpeed}
            </p>
            <p className="text-sm text-gray-900 text-right">Wind Speed</p>
          </div>
        </div>
        {/* <!-- Humidity --> */}
        <div className="flex w-full justify-around bg-white/30 py-2 px-3 rounded-lg items-center gap-6">
          <ion-icon name="rainy"></ion-icon>
          <div className="flex-1">
            <p
              id="humidity"
              className="font-bold text-2xl text-right text-gray-900">
              {props.humidity}
            </p>
            <p className="text-sm text-gray-900 text-right">Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
}
