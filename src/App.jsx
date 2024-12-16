import { useState } from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar/>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
