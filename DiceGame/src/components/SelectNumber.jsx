import { useState } from "react";

function SelectNumber() {
    const arr = [1,2,3,4,5,6];
    const [selectNumber , setSelectNumber] = useState();


  return (
    <div className="h-full w-100 flex flex-col justify-between ">
        <small className="text-right text-red-600">error dikhana hai yah apar</small>

        <div className="flex gap-5 justify-end">
            {
                arr.map((val , i) => <p selected={val === selectNumber} key={i} onClick={() => setSelectNumber(val)} className="setNumber flex items-center justify-center cursor-pointer w-10 h-10 border hover:bg-black hover:text-white duration-300 ease-out font-bold">{val}</p>)
            }
        </div>

        <p className="text-right font-bold">Select Number</p>

    </div>
  )
}

export default SelectNumber