import { useState } from "react";

function Input() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="bg-[#1C2130] w-[50%]  border-r-2 border-slate-500  ">
      <div className="flex justify-end gap-7">
        <div className="">
          <button className="bg-[#316FF6] w-16 mt-2 text-white rounded-md">
            Share
          </button>
        </div>
        <div className="pr-10 ">
          <button className="bg-[#316FF6] w-16  mt-2 text-white rounded-md ">
            Run
          </button>
        </div>
      </div>
      <div>
        <input
          value={input}
          onChange={handleInputChange}
          className="w-[100%] h-[600px] mt-8 rounded bg-black text-white"
          type="text"
          name=""
          id=""
        />
      </div>
    </div>
  );
}

export default Input;
