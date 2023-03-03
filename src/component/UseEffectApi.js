import React, { useState, useEffect } from "react";
import "../styles.css";

const UseEffectApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const Loading = () => {
    return <h1>Loading...</h1>;
  };

  const getUsers = async () => {
    try {
      setLoading(false);
      const url = "https://jsonplaceholder.typicode.com/photos";
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log("The Error: " + err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>List of Github Users</h1>
      <div className="container-flud mt-5">
        <div className="row text-center">
          {users.map((currElem) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={currElem.thumbnailUrl}
                        className="rounded"
                        width="155"
                        alt="myImg"
                      />
                      <div className="m1-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft">{currElem.login}</h4>
                        <span className="textLeft">{currElem.title}</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                          <div className="d-flex flex-column">
                            <span className="articles">articles</span>
                            <span className="number1">12</span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="followers">followers</span>
                            <span className="number2">1200</span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="rating">rating</span>
                            <span className="number3">5.2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;
