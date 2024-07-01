import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('today')}>Today</button>
      <button onClick={() => setFilter('yesterday')}>Yesterday</button>
      <button onClick={() => setFilter('last7days')}>Last 7 Days</button>
      <button onClick={() => setFilter('alltime')}>All Time</button>
    </div>
  );
};

export default Filter;