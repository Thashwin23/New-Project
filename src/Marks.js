import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import { useState } from "react";
// import PageNotFound from "./pageNotFound";

function MarksPage() {
  const Student = [
    {
      Name: "Thashwin",
      marks: [99, 98, 88, 93, 81, 80],
    },
    {
      Name: "Sandesh",
      marks: [55, 67, 88, 73, 37, 87],
    },
    {
      Name: "Karthik",
      marks: [45, 44, 78, 93, 56, 79],
    },
    {
      Name: "Alstan",
      marks: [69, 56, 73, 63, 85, 79],
    },
    {
      Name: "Rashik",
      marks: [98, 34, 67, 45, 56],
    },
  ];
  const { id } = useParams();

  const getMarks = () => {
    try {
      const student = Student.find((stu) => stu.Name === id);

      if (!student) {
        return null;
      }

      return student.marks;
    } catch (error) {
      return null;
    }
  };

  const marks = getMarks();

  return (
    <div>
      <Button variant="warning">
        <Link className=" option" to="/">
          Home
        </Link>
      </Button>
      {marks === null ? (
        <div>
          <h1>404 Error</h1>
        </div>
      ) : (
        <>
          <h3>Marks for {id}</h3>

          <Table className="table table-primary tble " striped>
            <thead>
              <tr>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {marks &&
                marks.map((data, index) => (
                  <tr key={index}>
                    <td>{marks[index]}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
}
export default MarksPage;
