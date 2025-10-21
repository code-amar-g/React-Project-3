
function Dice({currentDice , roleDice}) {
    
  return (
    <div onClick={roleDice} className="w-40 flex flex-col items-center gap-2 cursor-pointer">
        <img className="w-40" src={`/public/imgs/dice${currentDice}.png`}/>
        <p className="font-medium">Click on Dice to roll</p>
    </div>
  )
}

export default Dice