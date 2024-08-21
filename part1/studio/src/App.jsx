import { useState } from "react";
import "./App.css";
import RecipeDescription from "./components/Description";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <RecipeDescription />
        </div>
      </div>
    </>
  );
}

export default App;
