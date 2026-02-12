
//    const heading=React.createElement("h1",{id:"heading"},"hello world")

import React from "react";
import ReactDOM from "react-dom/client";
   const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"children"},React.createElement("h1",{},"I am Yash")))
   const root=ReactDOM.createRoot(document.getElementById("root"))
   root.render(parent);


//    React.createElement ->>> It creates an object