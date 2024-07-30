//const heading= React.createElement("h1",{id: "heading_as_attribute"},"KYA SCENE H BAAVE, SEEKH LE kYA SAB KUCCH!");
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "               JO SEEKHTA HAI HAAR SE ,    "),
    React.createElement("h1", {}, "        WO HARA NHI !       "),
    React.createElement("h1", {}, "              "),
    React.createElement("h1", {}, "     JO JALTA HAI AAP SE ,          "),
    React.createElement("h1", {}, "       WO TARA NAHI !       "),
    React.createElement("h1", {}, "     JO JALTA HAI AAG SE ,          "),
    React.createElement("h1", {}, "       HAI TARA WAHI !       ")
]));
console.log("parent");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
