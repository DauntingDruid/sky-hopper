import React, { useEffect, useState } from 'react';

function PopularDestinationCard({ places }) {
    const[gridRows, setGridRows] = useState(10)
    const rowSpanValues = [5, 2, 3, 5, 3, 2];
    const [placesArray, setPlacesArray] = useState([{
        city: '',
        imageUrl: '',
        rowSpan: Number,
    }]);

    const addRowSpanValues = (places, rowSpanValues) => {
      const updatedPlaces = places.map((place, index) => {
        const rowSpanIndex = index % rowSpanValues.length;
        const rowSpan = rowSpanValues[rowSpanIndex];
        return { ...place, rowSpan };
      });
      return updatedPlaces;
    };

    useEffect(() => {
      if (places.length <= 3) {
        setGridRows(5);
      } else if (places.length <= 6) {
        setGridRows(5);
      } else if (places.length <= 9) {
        setGridRows(10);
      } else if (places.length <= 12) {
        setGridRows(10);
      } else if (places.length <= 15) {
        setGridRows(15);
      } else if (places.length <= 18) {
        setGridRows(15);
      }

      const updatedPlaces = addRowSpanValues(places, rowSpanValues);
      setPlacesArray(updatedPlaces);
    //   console.log(updatedPlaces);
    }, [places]);

  return (
    <div style={{ gridTemplateRows: `repeat(${gridRows}, 1fr)` }} className={`w-screen h-full grid grid-cols-4 grid-flow-row gap-4 px-8`} >
      {placesArray.map((place, index) => (
        <a
          key={index}
          href="#"
          className={`flex text-lg hover:text-2xl hover:scale-105 transition-all duration-500 justify-center items-end bg-gray-500 bg-blend-overlay hover:bg-blend-normal row-span-${place.rowSpan} col-span-1 rounded-xl bg-center bg-cover bg-no-repeat`}
          style={{ backgroundImage: `url('${place.imageUrl}')`,gridRow: `span ${place.rowSpan}`, }}
        >
          <div className="px-2 bg-gray-200 bg-opacity-70 mb-2 rounded-lg">{place.city}</div>
        </a>
      ))}
    </div>
  );
}

export default PopularDestinationCard;