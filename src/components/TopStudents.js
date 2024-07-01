import React from 'react';

const TopStudents = ({ data }) => {
  if (!data.students || data.students.length === 0) {
    return <div>No student data available.</div>;
  }

  const topStudents = data.students.slice(0, 10);

  return (
    <div>
      <h2>Top 10 Students</h2>
      <ul>
        {topStudents.map(student => (
          <li key={student.id}>{student.name} - ${student.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopStudents;