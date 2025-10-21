
function TotalScore({score}) {
  return (
    <div className="h-full w-30 flex items-center justify-center flex-col">
        <h1 className="text-7xl">{score}</h1>
        <p>Total Score</p>
    </div>
  )
}

export default TotalScore