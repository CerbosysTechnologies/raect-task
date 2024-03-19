import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import salesData from '../../../jsonData/salesData.json';
import Mostpositive from '../Mostpositive/Mostpositive';

const MyLineChart = () => {
  const [lineVisibility, setLineVisibility] = useState({
    web_sales: true,
    offline_sales: true,
  });

  const handleLegendClick = (entry) => {
    const { dataKey } = entry;

    setLineVisibility((prevState) => ({
      ...prevState,
      [dataKey]: !prevState[dataKey],
    }));
  };
  return (
    <>
      <div
        style={{
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '0.5rem',
          padding: '1rem',
          background: '#fff',
        }}
      >
        <h1 className="dashboard-head">Customers by Device</h1>

        <br />
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend onClick={handleLegendClick} />
            {lineVisibility.web_sales && (
              <Line
                type="monotone"
                dataKey="web_sales"
                stroke="#8884d8"
                name="Web Sales"
              />
            )}
            {lineVisibility.offline_sales && (
              <Line
                type="monotone"
                dataKey="offline_sales"
                stroke="#82ca9d"
                name="Offline Sales"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Mostpositive />
    </>
  );
};

export default MyLineChart;
