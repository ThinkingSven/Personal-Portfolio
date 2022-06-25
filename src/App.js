import { useState } from "react";
import "./style.css";
function App() {
  function handleCopy() {
    var text = "ThinkingSven#4099";
    navigator.clipboard.writeText(text).then((_) => {});
  }

  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <section>
        <h1 className="my-5">
          Hello. My name is <a>Sven</a>
        </h1>
        <p>
          I'm a 16 year old <a>web developer</a> & student based in Austria. I
          like to <a>build cool stuff</a> using technology. Most of my work is
          open source & publicly available on{" "}
          <a href="https://github.com/ThinkingSven">Github</a>.
        </p>
        <p>
          You can contact me on{" "}
          <a className="" onClick={handleCopy}>
            Discord
          </a>{" "}
          (ThinkingSven#4099) &{" "}
          <a href="https://twitter.com/ThinkingSven">Twitter</a>
        </p>
        <p>
          I'm currently working on{" "}
          <a href="https://github.com/ThinkingSven/Galaxite.">Galaxite</a> which
          is a modern speed typing website that will be released soon™.
        </p>
        <div className="flex">
      
        </div>
      </section>
    </div>
  );
}

export default App;
