import React, { useEffect, useState } from "react";
import airplane_seat from "../assets/img/airplane_seat.png";

const SeatMap = ({ rows, cols }) => {
  const [selectedSeats, setSelectedSeats] = useState(Array());
  const [selectedSeatsLength, setSelectedSeatsLength] = useState(0);
  const [divElements, setDivElements] = useState([]);
  const [upperDeck, setUpperDeck] = useState([]);
  const [lowerDeck, setLowerDeck] = useState([]);

  const seatSelector = (seat: number) => {
    // console.log("seat id : ", seat);
    let newSelectedSeats = selectedSeats;
    // console.log("SelectedSeats : ", newSelectedSeats)
    if (newSelectedSeats.includes(seat)) {
      newSelectedSeats = newSelectedSeats.filter((s) => s !== seat);
      // console.log("removed newSelectedSeats : ", newSelectedSeats)
    } else {
      newSelectedSeats.push(seat);
      // console.log("added newSelectedSeats : ", newSelectedSeats)
    }
    setSelectedSeats(newSelectedSeats);
    setSelectedSeatsLength(newSelectedSeats.length);
  };

  const generateDeck = (number) => {
    // console.log("regenerating divs")
    // console.log(selectedSeats)
    const divs = [];
    let halfDeck = false

    for (let i = 1; i <= number; i++) {
     //added + 1 to number/2 to prevent a seat with rotated 135deg to render in upper deck
      if (i == number / 2 + 1) {
        halfDeck = true;
      }
      divs.push(
        <img
          src={airplane_seat}
          onClick={() => seatSelector(i)}
          className={
            halfDeck == false
              ? selectedSeats.includes(i)
                ? `w-full h-full -rotate-45 bg-green-400 hover:bg-red-400 bg-cover bg-no-repeat rounded-lg`
                : `w-full h-full -rotate-45 border-gray-400 hover:bg-gray-400 transition duration-200 ease-in-out bg-cover bg-no-repeat rounded-lg`
              : selectedSeats.includes(i)
              ? `w-full h-full -rotate-[135deg] bg-green-400 hover:bg-red-400 bg-cover bg-no-repeat rounded-lg`
              : `w-full h-full -rotate-[135deg] border-gray-400 hover:bg-gray-400 transition duration-200 ease-in-out bg-cover bg-no-repeat rounded-lg`
          }
          key={i}
        />
      );
    }
    // setDivElements(divs);
    // console.log("len : ", divs.length / 2);
    setUpperDeck(divs.slice(0, divs.length / 2));
    setLowerDeck(divs.slice(divs.length / 2, divs.length));
  };

  useEffect(() => {
    generateDeck(rows * cols * 2);
    // size of the dependency array passed to the useEffect must remain constant between renders, hence we are using selectedSeatsLength (as its size remains constant) instead of selectedSeats which is an array
  }, [selectedSeatsLength]);

  return (
    <div className="z-20 w-4/5 h-[60vh] flex justify-center items-center">
      <div className="flex flex-col rounded-l-3xl bg-gray-300 bg-opacity-60 w-11/12 h-2/3 space-y-3">
        <div
          className="w-full h-full grid gap-4 p-2"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {upperDeck.map((div) => {
            return div;
          })}
        </div>
        <div
          className="w-full h-full grid gap-4 p-2"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {lowerDeck.map((div) => {
            return div;
          })}
        </div>
      </div>
      <div className="flex flex-col h-2/3 w-1/12 bg-gray-400 bg-opacity-60 rounded-r-3xl">
        <div
          className="w-full h-full grid gap-4 p-2"
          style={{
            gridTemplateColumns: "repeat(1, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
          }}
        >
          <div className="flex justify-center items-center">A</div>
          <div className="flex justify-center items-center">B</div>
          <div className="flex justify-center items-center">C</div>
        </div>
        <div
          className="w-full h-full grid gap-4 p-2"
          style={{
            gridTemplateColumns: "repeat(1, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
          }}
        >
          <div className="flex justify-center items-center">D</div>
          <div className="flex justify-center items-center">E</div>
          <div className="flex justify-center items-center">F</div>
        </div>
      </div>
    </div>
  );
};

export default SeatMap;
