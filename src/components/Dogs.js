import React from "react";

function Dogs(props) {
  

  return (
<div className="morph pic">
      <img alt="Click a dog!" className="img-thumbnail border-0 rounded m-3" src={props.src} id={props.id} {...props}  />
</div>    
  )
}

export default Dogs;