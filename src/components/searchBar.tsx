import React, { useState } from "react";
import airport from "../data/airports.json";
import { Combobox } from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { searchGeoPlace } from "../api/autocomplete";

const SearchBar = () => {
  const navigate = useNavigate();
  const [airports, setAirports] = useState(airport);
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengers, setPassengers] = useState(0);
  const [debounceTimeout, setDebounceTimeout] = useState(0);
  const [fromFilteredAirports, setFromFilteredAirports] = useState([]);
  const [toFilteredAirports, setToFilteredAirports] = useState([]);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const debounceSearch = async (input, funct) => {
    if (debounceTimeout !== 0) {
      // clear the timeout
      clearTimeout(debounceTimeout);
    }
    const newTimeout = setTimeout(async () => {
      const data = await searchGeoPlace(input);
      console.log("---------", data?.data.data);
      const places = data?.data.data;
      funct(places);
    }, 1000);
    setDebounceTimeout(newTimeout);
  };
  console.log(fromAirport, "-", toAirport);

  const handleFromAirportChange = async (input) => {
    // autocomplete api call 'FROM' airport
    setFromAirport(input);
    debounceSearch(input, setFromFilteredAirports);
  };

  const handleToAirportChange = (input) => {
    // autocomplete api call 'TO' airport
    setToAirport(input);
    debounceSearch(input, setToFilteredAirports);
  };

  const handleDepartureDateChange = (event) => {};

  const handlePassengersChange = (event) => {};

  const handleSearchFlight = () => {
    navigate("/search");
  };

  return (
    <div className="flex w-full z-0 h-24 rounded-xl bg-white opacity-95 border-solid border-2 border-gray-300 ">
      <div className="flex flex-col w-full rounded-xl">
        <div className="flex">
          <div className="w-[27.5%] text-sm text-gray-500 border-r-2 px-3 border-gray-200">
            From
          </div>
          <div className="w-[27.5%] text-sm text-gray-500 border-r-2 px-3 border-gray-200">
            To
          </div>
          <div className="w-[15%] text-sm text-gray-500 border-r-2 px-3 border-gray-200">
            Departure Date
          </div>
          <div className="w-[15%] text-sm text-gray-500 border-r-2 px-3 border-gray-200">
            Return Date
          </div>
          <div className="w-[15%] text-sm text-gray-500 border-r-2 px-3 border-gray-200">
            Passengers
          </div>
        </div>
        <div className="flex h-full">
          {/* from -> input autocomplete */}
          <Combobox value={fromAirport} onChange={setFromAirport}>
            <Combobox.Input
              placeholder="Delhi International Airport (DEL)"
              className="w-[27.5%] rounded-bl-xl font-bold h-full p-4 border-r-2 border-gray-200  "
              onChange={(event) => handleFromAirportChange(event.target.value)}
            />
            <Combobox.Options className="mt-16 w-56 absolute z-10 ">
              {fromFilteredAirports.map((place, index) => (
                <Combobox.Option
                  className="w-full p-2 h-full border-solid border-b-2 bg-white "
                  key={index}
                  value={
                    place?.name + ", " + place?.region + ", " + place?.country
                  }
                  onSelect={() =>
                    setFromAirport(
                      place?.name + ", " + place?.region + ", " + place?.country
                    )
                  }
                >
                  {place?.name}, {place?.region}, {place?.country}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
          {/* to -> input autocomplete */}
          <Combobox value={toAirport} onChange={setToAirport}>
            <Combobox.Input
              placeholder="GOA International Airport (GOA)"
              className="w-[27.5%] font-bold h-full p-4 border-r-2 border-gray-200  "
              onChange={(event) => handleToAirportChange(event.target.value)}
            />
            <Combobox.Options className="mt-16 w-56 absolute z-10 ">
              {toFilteredAirports.map((place, index) => (
                <Combobox.Option
                  className="w-full p-2 h-full border-solid border-b-2 bg-white "
                  key={index}
                  value={
                    place?.name + ", " + place?.region + ", " + place?.country
                  }
                  onSelect={() =>
                    setToAirport(
                      place?.name + ", " + place?.region + ", " + place?.country
                    )
                  }
                >
                  {place?.name}, {place?.region}, {place?.country}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
          {/* departure -> calendar */}
          <div className="w-[15%] flex justify-center items-center h-full p-4 border-r-2 bg-white border-gray-200">
            <DatePicker
              className="w-full h-full font-bold"
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
            />
          </div>
          {/* Return -> calendar */}
          <div className="w-[15%] flex justify-center items-center h-full p-4 border-r-2 bg-white border-gray-200">
            <DatePicker
              className="w-full h-full font-bold"
              selected={toDate}
              onChange={(date) => setToDate(date)}
            />
          </div>
          {/* passengers -> buttons - + */}
          <div className=" w-[15%] h-full p-4 border-r-2 bg-white border-gray-200">
            <div className="flex justify-between">
              <button
                onClick={() =>
                  passengers > 0
                    ? setPassengers(passengers - 1)
                    : setPassengers(0)
                }
                className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition-all ease-linear duration-200"
              >
                -
              </button>
              <div className="w-8 h-8 text-xl rounded-full flex justify-center items-center font-bold">
                {passengers}
              </div>
              <button
                onClick={() => setPassengers(passengers + 1)}
                className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition-all ease-linear duration-200"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleSearchFlight()}
        className="w-[10%] flex justify-center items-center bg-blue-500 hover:bg-blue-600 transition-all ease-linear duration-300 rounded-r-lg active:bg-blue-700 active:scale-95"
      >
        <button className="w-full h-full text-white font-bold">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
