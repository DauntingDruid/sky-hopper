import React, { useState } from "react";
import NavBar from "../components/navBar";
import AdminNavBar from "../components/adminNavBar";
import DashboardOverview from "../components/dashboardOverview";
import DashboardCharts from "../components/dashboardCharts";

const AdminDashboardPage = () => {
  const [bookings] = useState("31,200");
  const [emptySeats] = useState(7869);
  const [cancelledSeats] = useState(162);
  const [totalRevenue] = useState("76,10,600");
  const [bookingTrendsOptions] = useState({
    chart: {
      id: "booking-trends-chart",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
  });
  const [bookingTrendsSeries] = useState([
    {
      name: "Bookings",
      data: [50, 65, 80, 55, 70, 90],
    },
  ]);
  const [occupancyChartOptions] = useState({
    chart: {
      id: "occupancy-chart",
    },
    xaxis: {
      categories: ["Flight 1", "Flight 2", "Flight 3", "Flight 4", "Flight 5"],
    },
  });
  const [occupancyChartSeries] = useState([
    {
      name: "Occupancy",
      data: [80, 65, 90, 75, 85],
    },
  ]);
  const [revenueChartOptions] = useState({
    chart: {
      id: "revenue-chart",
    },
    xaxis: {
      categories: ["Flight 1", "Flight 2", "Flight 3", "Flight 4", "Flight 5"],
    },
  });
  const [revenueChartSeries] = useState([
    {
      name: "Revenue",
      data: [1200, 1500, 1800, 1350, 1600],
    },
  ]);
  const [flightPerformanceOptions] = useState({
    chart: {
      id: "flight-performance-chart",
    },
    xaxis: {
      categories: ["Flight 1", "Flight 2", "Flight 3", "Flight 4", "Flight 5"],
    },
  });
  const [flightPerformanceSeries] = useState([
    {
      name: "Bookings",
      data: [80, 65, 90, 75, 85],
    },
    {
      name: "Revenue",
      data: [1200, 1500, 1800, 1350, 1600],
    },
  ]);

  return (
    <div className="flex h-screen flex-col">
      {/* Navigation Bar */}
      <NavBar />
      <div className="flex flex-row h-[95vh] ">
        {/* Vertical Admin Dashboard Navigater  */}
        <AdminNavBar />
        <div className=" w-[85vw]">
          {/* Dashboard Overview */}
          <DashboardOverview
            bookings={bookings}
            emptySeats={emptySeats}
            cancelledSeats={cancelledSeats}
            totalRevenue={totalRevenue}
          />
          {/* Graphs and Charts */}
          <DashboardCharts
            bookingTrendsOptions={bookingTrendsOptions}
            bookingTrendsSeries={bookingTrendsSeries}
            occupancyChartOptions={occupancyChartOptions}
            occupancyChartSeries={occupancyChartSeries}
            revenueChartOptions={revenueChartOptions}
            revenueChartSeries={revenueChartSeries}
            flightPerformanceOptions={flightPerformanceOptions}
            flightPerformanceSeries={flightPerformanceSeries}
          />

          {/* Additional Features */}
          <div className="mt-8 mx-4">{/* Search and Filtering */}</div>
          <div className="mt-8 mx-4">{/* Flight Listing Table */}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
