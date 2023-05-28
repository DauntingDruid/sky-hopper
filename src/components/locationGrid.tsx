import React, { useEffect, useState } from "react";
import PopularDestinationCard from "./popularDestinationCard";

const places = [
  {
    city: "Berlin",
    imageUrl:
      "https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
  },
  {
    city: "Colombia",
    imageUrl:
      "https://images.unsplash.com/photo-1576018753502-1a55b66cc44a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
  },
  {
    city: "Greece",
    imageUrl:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
  },
  {
    city: "Sydney",
    imageUrl:
      "https://images.unsplash.com/photo-1548565495-a692bd1c1d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
  },
  {
    city: "New York",
    imageUrl:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
  {
    city: "Spain",
    imageUrl:
      "https://images.unsplash.com/photo-1570136608985-36fdcec5b7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1007&q=80",
  },
  {
    city: "Netherlands",
    imageUrl:
      "https://images.unsplash.com/photo-1620657110850-91fbec86cfa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
  },
  {
    city: "Tokyo",
    imageUrl:
      "https://images.unsplash.com/photo-1553292770-c3d14b814242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=849&q=80",
  },
  {
    city: "Rome",
    imageUrl:
      "https://images.unsplash.com/photo-1537799943037-f5da89a65689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
  },
  {
    city: "Paris",
    imageUrl:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    city: "Denmark",
    imageUrl:
      "https://images.unsplash.com/photo-1552560880-2482cef14240?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=743&q=80",
  },
  {
    city: "Iceland",
    imageUrl:
      "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    city: "Dubai",
    imageUrl:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    city: "Rio de Janeiro",
    imageUrl:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

const LocationGrid = () => {
  const [viewHeight, setViewHeight] = useState(60 * Math.ceil(places.length / 6))
//   console.log(places.length,Math.ceil(places.length / 6),60 * Math.ceil(places.length / 6))

  return (
    <div style={{ height: `${viewHeight}vh` }}>
      <div className="flex w-full px-12 py-4">
        <div className="hover:animate-pulse bg-center h-8 w-8 bg-cover bg-no-repeat bg-[url('img/travel.png')] mr-2" />
        <div className="text-2xl cursor-default">Popular Destinations</div>
      </div>
      {/* Cards Grid */}
      <PopularDestinationCard places={places} />
    </div>
  );
};

export default LocationGrid;

