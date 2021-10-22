import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./UpdateUser.css";

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/singleUser/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h5>
        userId: <mark>{id}</mark>
      </h5>
      <h1>{user.name}</h1>
    </div>
  );
};

export default UpdateUser;
