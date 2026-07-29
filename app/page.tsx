import type { ReactElement } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";


export default function Page(): ReactElement {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </main>
  );
}