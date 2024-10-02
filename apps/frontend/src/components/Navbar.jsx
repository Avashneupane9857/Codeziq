import { logo } from "../assets";

function Navbar() {
  return (
    <>
      <div className="bg-black w-[100%] h-20 text-center ">
        <img className="w-40 pl-8  h-16 " src={logo} alt="Logo" />
      </div>
    </>
  );
}
export default Navbar;
