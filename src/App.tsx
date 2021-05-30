import React, {Suspense} from "react";
import TitleCard from "./component/TitleCard";

const About = React.lazy(() => import('./component/About'));

const Skills = React.lazy(() => import('./component/Skills'));

function App() {
    return (
    <div className="Main">
      <TitleCard/>
      <Suspense fallback={<div>Loading...</div>}>
        <About/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Skills/>
      </Suspense>
    </div>
    )
};

export default App;