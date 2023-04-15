import React from "react";

const students = [
  { id: 1, name: "apple" },
  { id: 2, name: "bana" },
  { id: 3, name: "orange" },
  { id: 4, name: "straw" },
  { id: 5, name: "berry" },
];
function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}
export default AttendanceBook;
