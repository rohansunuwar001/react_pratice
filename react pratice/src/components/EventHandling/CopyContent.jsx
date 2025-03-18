import React from "react";

const CopyContent = () => {
  const copyHandler = () => {
    console.log("Stop Stealing my content");
  };

  return (
    <div>
      <h1>CopyContent</h1>

      <p onCopy={copyHandler}> 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim odit sequi accusamus cum, sunt velit, possimus error necessitatibus consequatur suscipit sapiente.
      </p>
    </div>
  );
};

export default CopyContent;
