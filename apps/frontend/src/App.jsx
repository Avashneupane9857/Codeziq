import Input from "./components/Input";
import Navbar from "./components/Navbar";

import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex w-[100%]">
        <SideBar />
        <Input />
      </div>
    </>
  );
}
export default App;
