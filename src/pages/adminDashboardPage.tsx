import React, { useState } from "react";
import Chart from "react-apexcharts";
import NavBar from "../components/navBar";

const AdminDashboardPage = () => {
  const [bookingTrendsOptions] = useState({
    chart: {
      id: 'booking-trends-chart',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
  });
  const [bookingTrendsSeries] = useState([
    {
      name: 'Bookings',
      data: [50, 65, 80, 55, 70, 90],
    },
  ]);
  const [occupancyChartOptions] = useState({
    chart: {
      id: 'occupancy-chart',
    },
    xaxis: {
      categories: ['Flight 1', 'Flight 2', 'Flight 3', 'Flight 4', 'Flight 5'],
    },
  });
  const [occupancyChartSeries] = useState([
    {
      name: 'Occupancy',
      data: [80, 65, 90, 75, 85],
    },
  ]);
  const [revenueChartOptions] = useState({
    chart: {
      id: 'revenue-chart',
    },
    xaxis: {
      categories: ['Flight 1', 'Flight 2', 'Flight 3', 'Flight 4', 'Flight 5'],
    },
  });
  const [revenueChartSeries] = useState([
    {
      name: 'Revenue',
      data: [1200, 1500, 1800, 1350, 1600],
    },
  ]);
  const [flightPerformanceOptions] = useState({
    chart: {
      id: 'flight-performance-chart',
    },
    xaxis: {
      categories: ['Flight 1', 'Flight 2', 'Flight 3', 'Flight 4', 'Flight 5'],
    },
  });
  const [flightPerformanceSeries] = useState([
    {
      name: 'Bookings',
      data: [80, 65, 90, 75, 85],
    },
    {
      name: 'Revenue',
      data: [1200, 1500, 1800, 1350, 1600],
    },
  ]);

  return (
    <div className="flex flex-col">
      {/* Navigation Bar */}
      <NavBar />

      {/* Dashboard Overview */}
      <div className="flex justify-between mt-8 mx-4">
        <div className="bg-white p-4 rounded-lg shadow">
          Number of Bookings Today
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          Number of Empty Seats Today
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          Total Revenue Today
        </div>
      </div>

      {/* Graphs and Charts */}
      <div className="flex flex-wrap mt-8 mx-4">
        <div className="w-full lg:w-1/2 p-4">
          Booking Trends Graph
          <Chart
            options={bookingTrendsOptions}
            series={bookingTrendsSeries}
            type="line"
            width="100%"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          Seat Occupancy Chart
          <Chart
              options={occupancyChartOptions}
              series={occupancyChartSeries}
              type="bar"
              width="100%"
            />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          Revenue Analysis Chart
          <Chart
            options={revenueChartOptions}
            series={revenueChartSeries}
            type="bar"
            width="100%"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          Flight Performance Graph
          <Chart
            options={flightPerformanceOptions}
            series={flightPerformanceSeries}
            type="bar"
            width="100%"
          />
        </div>
      </div>

      {/* Flight Listing */}
      <div className="mt-8 mx-4">
        {/* Flight Listing Table */}
      </div>

      {/* Additional Features */}
      <div className="mt-8 mx-4">
        {/* Search and Filtering */}
      </div>
    </div>
  );
};

export default AdminDashboardPage;