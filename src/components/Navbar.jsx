import { logo } from "../assets";

function Navbar() {
  return (
    <>
      <div className="bg-black w-[100%] h-20 ">
        <img className="w-48  h-20 " src={logo} alt="Logo" />
      </div>
    </>
  );
}
export default Navbar;
