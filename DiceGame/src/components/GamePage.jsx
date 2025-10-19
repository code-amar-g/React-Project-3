import TotalScore from "./TotalScore"
import SelectNumber from "./SelectNumber"

function GamePage() {
  return (
    <main>
        <div className="h-32 flex items-center justify-around p-2">
            <TotalScore />
            <SelectNumber />

        </div>
    </main>
  )
}

export default GamePage