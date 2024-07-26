import React, { useState } from "react";

function Mobiles() {
  let [mobilesArray, setMobilesArray] = useState([]);
  let getFromTheServer = async () => {
    let reqOptions = {
      method: "GET",
    };
    let JSONData = await fetch("http://localhost:5128/mobiles", reqOptions);
    let JSOData = await JSONData.json();
    setMobilesArray(JSOData);
    console.log(JSOData);
  };
  return (
    <div>
      <button
        onClick={() => {
          getFromTheServer();
        }}
      >
        Mobiles
      </button>
      {mobilesArray.map((element, index) => {
        return <div>
            <h1>{element}</h1>
        </div>;
      })}
    </div>
  );
}

export default Mobiles;
