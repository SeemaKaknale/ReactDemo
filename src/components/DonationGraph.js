import React from 'react';
import { Line } from 'react-chartjs-2';

const DonationGraph = ({ data }) => {
  if (!Array.isArray(data.donations) || data.donations.length === 0) {
    return <div>No donation data available.</div>;
  }

  const graphData = {
    labels: data.donations.map(d => d.date),
    datasets: [
      {
        label: 'Total Amount Raised',
        data: data.donations.map(d => d.amount),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Day-wise Total Amount Raised</h2>
      <Line data={graphData} />
    </div>
  );
};

export default DonationGraph;
