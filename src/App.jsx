import {
  About,
  Navbar,
  Skills,
  Projects,
  Links,
  Certificates,
} from "./components";
import { useProjectsContext } from "./context/projects_context";

const App = () => {
  return (
    <main>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Links />
    </main>
  );
};
export default App;
