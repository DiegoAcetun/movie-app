import React, { useRef } from 'react';
function Form({ onSubmit }) {
  const search = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }
  return (
    <form onSubmit={onSubmit} name="form">
      <div className="row justify-content-center">
        <div className="col-md-8 d-flex justify-content-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              value="movie"
            />
            <label
              className="form-check-label text-light"
              htmlFor="exampleRadios1"
            >
              Find just movies
            </label>
          </div>
          <div className="form-check ms-3">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              value="series"
            />
            <label
              className="form-check-label text-light"
              htmlFor="exampleRadios2"
            >
              Find just series
            </label>
          </div>
          <div className="form-check ms-3">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              value="game"
            />
            <label
              className="form-check-label text-light"
              htmlFor="exampleRadios2"
            >
              Find just games
            </label>
          </div>
          <div className="form-check ms-3">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              value=""
              defaultChecked
            />
            <label
              className="form-check-label text-light"
              htmlFor="exampleRadios2"
            >
              All options
            </label>
          </div>
        </div>
      </div>
      <div className="row justify-content-center my-2">
        <div className="col-lg-5">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="search by title"
              ref={search}
              // defaultValue={search.current.value}
            />
            <button className="btn btn-info" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
