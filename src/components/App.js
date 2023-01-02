import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relatives = ["Manish", "Nitin", "Yatin"];

    return (
      <div id="main">
        <ol key="relativeList">
          {relatives.map(renderList)}
        </ol>
      </div>
    );

    // hoisting
	function renderList(relativeName, i){
       return <li key={`relativeListItem${i + 1}`}>{relativeName}</li>
    }
  }
}

export default App;
