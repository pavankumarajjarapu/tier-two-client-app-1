import React, { useEffect } from "react";

function Models() {
  let [modelsArray, setModelsArray] = useEffect([]);
  let getModelFromServer = async () => {
    let reqOption = {
      method: "GET",
    };
    let JSONData = await fetch("http://localhost:5128/models", reqOption);
    let JSOData = await JSONData.json();
    console.log(JSOData);
    setModelsArray(JSOData);
  };
  return (
    <div>
      <button
        onClick={() => {
          getModelFromServer();
        }}
      >
        Models
      </button>
      {modelsArray.map((ele,i)=>{
        return <h1 key={i}>{ele.company}</h1>
      })}
    </div>
  );
}

export default Models;
