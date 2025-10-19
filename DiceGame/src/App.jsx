import { useState } from "react"
import MainPage from "./components/MainPage"
import GamePage from "./components/GamePage";

function App() {

  const [mainpage , gamePage] = useState(true);
  function toggelGamePage(){
    gamePage((prev) => !prev);
  };

  return (
    <div>
      {//ye yah par esliye laga rhe hai taki ham js run kar sake js {} ke andar hi run hota hai.
        mainpage ? <GamePage /> : <MainPage toggle={toggelGamePage}/>//yah par function ka refrance pass kar rhe hai. Ab es tooges ka use ham mainpage ke button me karnge.
      }
    </div>
  )
}

export default App 