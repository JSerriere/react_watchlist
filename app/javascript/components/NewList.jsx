import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewList = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const stripHtmlEntities = (str) => {
    return String(str)
      .replace(/\n/g, "<br> <br>")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "/api/v1/lists/create";

    if (name.length == 0)
      return;

    const body = {name};

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => navigate(`/list/${response.id}`))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Add a new movie list to your collection.
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="listName">List name</label>
              <input
                type="text"
                name="name"
                id="listName"
                className="form-control"
                required
                onChange={(event) => onChange(event, setName)}
              />
            </div>

            <button type="submit" className="btn custom-button mt-3">
              Create list
            </button>
            <Link to="/lists" className="btn btn-link mt-3">
              Back to lists
            </Link>
          </form>
            </div>
          </div>
        </div>
  );
};

export default NewList;
