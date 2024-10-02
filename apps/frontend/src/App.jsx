import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Output from "./components/Output";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex w-[100%]">
        <SideBar />
        <Input />
        <Output />
      </div>
    </>
  );
}
export default App;
