import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="font-inter bg-slate-300 dark:bg-slate-900">
        <div className=" m-auto">
          <Navbar></Navbar>
          <Hero></Hero>
        </div>
        <div className="mx-auto w-11/12 flex flex-row">
          <Sidebar></Sidebar>
          <Section></Section>
        </div>
      </div>
    </>
  );
}

export default App;
