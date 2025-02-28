import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [theme, setTheme] = useState(false)

  function toggleTheme (){
    setTheme((theme) => !theme)
  }
  
  const appClass = theme ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleTheme}>{theme ? "Light mode" : "Dark mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;