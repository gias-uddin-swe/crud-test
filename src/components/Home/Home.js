import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((result) => setUser(result));
  }, []);
  console.log(user);
  return (
    <div>
      <div className="allusers d-flex justify-content-center align-items-center">
        <div className="row">
          {user?.map((pd) => (
            <div className="col-md-6 ">
              <div className="user border border p-2 m-2">
                <h1>{pd.name}</h1>
                <h6>{pd.email}</h6>
                <h6>{pd.password}</h6>
                <button className="btn btn-danger p-1 m-2">Delete</button>
                <Link to={`/update/${pd._id}`}>
                  <button className="btn btn-success p-1 m-2">Update</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
