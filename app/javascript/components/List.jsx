import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const List = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [list, setList] = useState({ name: "" });

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setList(response))
      .catch(() => navigate("/lists"));
  }, [params.id]);

  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  };

  const deleteList = () => {
    const url = `/api/v1/destroy/${params.id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => navigate("/lists"))
      .catch((error) => console.log(error.message));
  };

  const listName = addHtmlEntities(list.name);

  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <img
          src={list.image}
          alt={`${list.name} image`}
          className="img-fluid position-absolute"
        />
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">{list.name}</h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={deleteList}
            >
              Delete List
            </button>
          </div>
        </div>
        <Link to="/lists" className="btn btn-link">
          Back to lists
        </Link>
      </div>
    </div>
  );
};

export default List;
