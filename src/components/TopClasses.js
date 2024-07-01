import React from 'react';

const TopClasses = ({ data }) => {
  if (!data.classes || data.classes.length === 0) {
    return <div>No class data available.</div>;
  }

  const topClasses = data.classes.slice(0, 5);
  const belowClasses = data.classes.slice(-5);

  return (
    <div>
      <h2>Top 5 Classes</h2>
      <ul>
        {topClasses.map(cls => (
          <li key={cls.id}>{cls.name} - ${cls.amount}</li>
        ))}
      </ul>
      <h2>Below 5 Classes</h2>
      <ul>
        {belowClasses.map(cls => (
          <li key={cls.id}>{cls.name} - ${cls.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopClasses;
