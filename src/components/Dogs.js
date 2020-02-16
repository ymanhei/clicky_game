import React from "react";

function Dogs(props) {
  

  return (
<div className="morph pic  ml-6 mr-6 mt-1 mb-1">
      <img alt="Click a dog!" className="img-thumbnail border-0 rounded" src={props.src} id={props.id} {...props}  />
</div>    
  )
}

export default Dogs;