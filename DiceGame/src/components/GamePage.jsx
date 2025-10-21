import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber";
import Dice from "./Dice";
import { useState } from "react";
import Rules from "./Rules";

function GamePage() {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error , setError] = useState('');
  const [showRules , setrules] = useState(false);   

  function randomeNum(start, end) {
    console.log(Math.floor(Math.random() * (end - start) + start));
    return Math.floor(Math.random() * (end - start) + start);
  }
  
  function roleDice() {
    if(!selectNumber) {
      setError('You have not selected any number');
      return
    }
    setError(' ');

    const randNum = randomeNum(1, 7);
    setCurrentDice((prev) => randNum);

    if(selectNumber === randNum){
      setScore((prev)=> prev + randNum);
    }
    else{
      setScore((prev) => prev-2);
    }
    setSelectNumber(undefined);

  }

  function resetScore(){
    setScore(0);
  }
  

  return (
    <main>
      <div className="h-32 flex items-center justify-around p-2">
        <TotalScore score={score}/>
        <SelectNumber
          error={error}
          setError={setError}
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <div className="w-full h-137 flex flex-col gap-5 items-center justify-center ">
        <Dice currentDice={currentDice} roleDice={roleDice} />

        <div className="flex flex-col gap-3 w-40">
          
          <button onClick={resetScore} className="w-full border-2 px-2 py-2 rounded-sm cursor-pointer hover:text-white hover:bg-black duration-300 ease-out">Reset Score</button>

          <button onClick={() => setrules((prev) => !prev) } className="w-full text-white bg-black px-2 py-2 rounded-sm cursor-pointer">{showRules ? 'Hide' : 'Show'} Show Rules</button>

        </div>

        {showRules && <Rules />}

      </div>


    </main>
  );
}

export default GamePage;
