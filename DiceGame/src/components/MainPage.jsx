
function MainPage({toggle}) {
  return (
    <div className="mainBox w-full h-169 flex items-center justify-center gap-5">
        <div>
            <img className="w-100" src="./public/imgs/Frame 5.png"/>
        </div>
        <div className="flex flex-col gap-2">
            <h1 className="text-7xl font-extrabold">DICE GAME</h1>
            <button onClick={toggle} className="mx-1 w-30 text-center bg-black text-1xl text-white px-2 py-1 rounded-sm hover:bg-white hover:text-black duration-300 ease-out cursor-pointer border-2 ">
              Play Now
            </button>
        </div>
    </div>
  )
}

export default MainPage