//const heading= React.createElement("h1",{id: "heading_as_attribute"},"KYA SCENE H BAAVE, SEEKH LE kYA SAB KUCCH!");

const parent=React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id : "child"},[
        React.createElement("h1",{},"This is an H1 tag !"),
        React.createElement("h2",{},"This is an H2 tag !"),
        React.createElement("h3",{},"This is an H3 tag !"),
        React.createElement("h4",{},"This is an H4 tag !"),
    ])
);
console.log("parent");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);