import React, { useState } from "react";
function Alert({ message, messageLink}) {  
  return (
    <div className="alert alert-info fs-5" role="alert">
      {message}
      <a
        href="https://diego-008.github.io/my-web-site/"
        target="_blank"
        rel="noreferrer"
        className="alert-link"
      >
        {messageLink}
      </a>
    </div>
  );
}

export default Alert;
