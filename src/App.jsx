import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Replytia from "./components/Replytia";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import {
  profile,
  replytia,
  skills,
  projects,
  filters,
  experience,
  education,
} from "./data";

export default function App() {
  return (
    <>
      <Background />
      <Nav name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} education={education} />
        <Replytia data={replytia} />
        <Projects projects={projects} filters={filters} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Contact profile={profile} />
      </main>
      <footer className="footer">
        © 2025 made with love &#10084;&#65039; · Built by Mohab Ali
      </footer>
    </>
  );
}
