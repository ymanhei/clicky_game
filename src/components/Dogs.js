import React from "react";

function Dogs(props) {
  

  return (
<div className="morph pic">
      <img alt={props.title} className="img-thumbnail border-0 rounded m-3" src={props.src} {...props}  />
</div>    
  )
}

export default Dogs;