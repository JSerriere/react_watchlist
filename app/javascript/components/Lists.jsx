import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Lists = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const url = "/api/v1/lists/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setLists(res))
      .catch(() => navigate("/"));
  }, []);

  const allLists = lists.map((list, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      {/* <div className="card mb-4">
        <img
          src={list.image}
          className="card-img-top"
          alt={`${list.name} image`}
        /> */}
        <div className="card-body">
          <h5 className="card-title">{list.name}</h5>
          <Link to={`/list/${list.id}`} className="btn custom-button">
            View List
          </Link>
        </div>
      {/* </div> */}
    </div>
  ));
  const noList = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No lists yet. Why not <Link to="/new_list">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Movie lists for every occasion</h1>
          <p className="lead text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/list" className="btn custom-button">
              Create New List
            </Link>
          </div>
          <div className="row">
            {lists.length > 0 ? allLists : noList}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default Lists;
