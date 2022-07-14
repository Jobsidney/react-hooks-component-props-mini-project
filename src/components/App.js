import React from "react";
import blogData from "../data/blog";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} bloglogo={blogData.blog}/>
      <Article prop={blogData}/>
    </div>
  );
}

export default App;
