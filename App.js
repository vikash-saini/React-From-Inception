import React from "react";
import ReactDOM from "react-dom/client";

// let parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
// ]);

// JSX - Babel transpiles JSX code into React.createElement => React.creatElement js object =>HTMLElement(render)
// let jsxHeading = <h1 className="head">Vikash Saini</h1>;


// React Functional Component - React funtional component are JS functions which returns React element or JSX element
const Title=()=>(
    <h1>Hello This is Vikash Saini</h1>
);

const HeadingComponent =()=>(
    <div id="container">
        
        {/* Multiple ways to inject React component inside another component */}
        {/* Component Composition - adding componenet inside another componenet is called component composition  */}
        {/* {Title()}  JSX allow to execute any Javascript code inside {} */}
        <Title/>
        {/* <Title></Title> */}
        <h2>Good morning </h2>
    </div>
)


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
