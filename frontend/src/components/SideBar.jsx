import { js, python } from "../assets";

function SideBar() {
  return (
    <div className="min-h-screen w-12 bg-black">
      <button className="hover:scale-125 transition-transform duration-300">
        <img className="mt-10" src={python} alt="" />
      </button>
      <button className="hover:scale-110 transition-transform duration-300 ">
        <img className="mt-9 rounded-lg" src={js} alt="" />
      </button>
    </div>
  );
}

export default SideBar;
