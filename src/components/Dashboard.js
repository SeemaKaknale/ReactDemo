import React, { useState, useEffect } from 'react';
import DonationGraph from './DonationGraph';
import TopStudents from './TopStudents';
import TopClasses from './TopClasses';
import Filter from './Filter';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState({ donations: [], students: [], classes: [] });
  const [filter, setFilter] = useState('today');

  useEffect(() => {
    fetchData();
  }, [filter]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/donations?filter=${filter}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Filter setFilter={setFilter} />
      <DonationGraph data={data} />
      <TopStudents data={data} />
      <TopClasses data={data} />
    </div>
  );
};

export default Dashboard;
