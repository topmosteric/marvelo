import React, { useState } from "react";
import "./App.css";
import { characters } from "./MarvelData";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter((data) =>
    data.alias.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mainBody">
      <div className="topHeader">
        <h1 className="header"> Top Pastors in Nigeria</h1>
        <input
          placeholder="Search a Comedian"
          className="topInput"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="cardBody">
        {filteredCharacters.map((data, index) => (
          <div key={index} className="card">
            <div className="main">
              <img
                className="avatarImage"
                src={data.img1}
                alt={data.alias}
              />
              <h2>{data.alias}</h2>
              <p className="description">{data?.abilities[0]}</p>
              <div className="avatarInfo">
                <div className="price"> 
                  <ins>◘</ins>
                  <p>{data.team}</p>
                </div>
                <div className="duration">
                  <ins>◷</ins>
                  <p>Type: {data.homeworld}</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
