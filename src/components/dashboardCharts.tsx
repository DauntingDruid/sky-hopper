import React from "react";
import Chart from "react-apexcharts";

const DashboardCharts = ({
  bookingTrendsOptions,
  bookingTrendsSeries,
  occupancyChartOptions,
  occupancyChartSeries,
  revenueChartOptions,
  revenueChartSeries,
  flightPerformanceOptions,
  flightPerformanceSeries,
}) => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 h-[80vh]">
      <div className="flex justify-center items-center w-full p-4">
        <div className="rounded-3xl w-full h-full shadow-lg p-10">
          Booking Trends Graph
          <Chart
            options={bookingTrendsOptions}
            series={bookingTrendsSeries}
            type="line"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full p-4">
        <div className="rounded-3xl w-full h-full shadow-lg p-10">
          Seat Occupancy Chart
          <Chart
            options={occupancyChartOptions}
            series={occupancyChartSeries}
            type="bar"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full p-4">
        <div className="rounded-3xl w-full h-full shadow-lg p-10">
          Revenue Analysis Chart
          <Chart
            options={revenueChartOptions}
            series={revenueChartSeries}
            type="bar"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full p-4">
        <div className="rounded-3xl w-full h-full shadow-lg p-10">
          Flight Performance Graph
          <Chart
            options={flightPerformanceOptions}
            series={flightPerformanceSeries}
            type="bar"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
