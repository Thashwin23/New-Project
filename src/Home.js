import "./App.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import DataFetch from "./DataFetching";

function Home() {
  const data = [
    {
      avatar:
        "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
      name: "Thashwin",
      age: "23",
      Option: "9987654321",
      marks: {},
    },
    {
      avatar:
        "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      name: "Sandesh",
      age: "22",
      Option: "9987654321",
    },
    {
      avatar:
        "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
      name: "Karthik",
      age: "22",
      Option: "9987654321",
    },
    {
      avatar:
        "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      name: "Alstan",
      age: "22",
      Option: "9987654321",
    },
    {
      avatar:
        "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
      name: "Rashik",
      age: "23",
      Option: "9987654321",
    },
  ];
  return (
    <>
      <div className="main">
        <div className="container">
          <h3> Class room</h3>
          <Table className="table table-secondary tble " striped>
            <thead>
              <tr>
                <th>Avatar</th>
                <th> Name</th>
                <th>Age</th>
                <th>Option</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={index}>
                  <td>
                    <img className="image" src={data.avatar} alt="Avatar"></img>
                  </td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>
                    <Button className="btn" variant="success">
                      <a className="option" href={data.Option}>
                        call
                      </a>
                    </Button>
                  </td>
                  <td>
                    <Button className="btn" variant="success">
                      <Link className="option" to={`/marks/${data.name}`}>
                        Open
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button className="btn" variant="success">
            <Link className="option" to={`./StudentForm`}>
              Open
            </Link>
          </Button>
          <DataFetch />
        </div>
      </div>
    </>
  );
}

export default Home;
