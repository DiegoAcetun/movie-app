import React, { useState } from "react";
function Alert() {
  return (
    <div className="alert alert-danger fs-5" role="alert">
      You can to visit my website where you can find other projects that I have
      developed.{" "}
      <a
        href="https://diego-008.github.io/my-web-site/"
        target="_blank"
        rel="noreferrer"
        className="alert-link"
      >
        View website
      </a>
    </div>
  );
}

export default Alert;
