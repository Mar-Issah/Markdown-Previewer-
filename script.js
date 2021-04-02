function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //-----------------------APP.JS------------------
//set the sate to the text this is is the whole textarea.
//destructure it to recieve the state
//set the value of the text area to the markdown state and also when ever user types in it the value is change. use the handle change fxn
//now build th UI using our regular html elements withe the help of bootstrap
//maked-cdn: a markedown parser. This has e method marked() which accepts the markdown text before the return

//dangerouslySetInnerHTML is an attribute under DOM elements in React. According to the official documentation, dangerouslySetInnerHTML is React's replacement for using innerHTML in the browser DOM. ... In simple words, using dangerouslySetInnerHTML , you can set HTML directly from React. So use this for our preview area. dangerouslySetInnerHTML={{__html: markdown}}

//so the marked basically takes the text input and convert it stores in the markdown variable which you pass the the dangerouslySetInnerHTML

//The defaultText is now the text for the initial state

//add the booleans to the marked to make some setting and be compatible with github

const defaultText = `
# Greetings Everyone!
---
## Welcome to Marsiya Markdown Previewer!
---
Find below  my favorite programming languages
1. I love Javascript
2. And also Java
3. And last but not least, C++

The tools I frequently use include.
  - React.
     - Boostrap.
        - SASS.


Let me prove to you my Javascript skills:
\`\`\`javascript
//multiline javascript code
const addMe = (num1, num2) => {
    return num1 + num2;
}

\`\`\`


\`<p>..and also my HTML skills</p>\`

You can make your text **bold**...!
Or _italic_.
Or... **_both!_**
Or even ~~strikethrough~~.

Check out my works on [Codepen](https://codepen.io/your-work/), and
> I will be adding more cool projects soon !

Don't forget to add your info to the table:

| Name          | Email          |
| ------------- | -------------- |
| John Doe    | jdoe@gmail.com |
| Jane Doe   | jdoe@gmail.com |

<br /> 

![my logo](https://res.cloudinary.com/dytnpjxrd/image/upload/v1614020557/my_logo_adfpkf.png "check out my awesome logo")

`;

class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",






    e => {
      this.setState({
        text: e.target.value });

    });this.state = { text: defaultText };}

  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("nav", { className: "navbar navbar-dark navbar-expand-lg text-light d-flex justify-content-center" }, /*#__PURE__*/
      React.createElement("h2", null, "~ Markdown Previewer ~")), /*#__PURE__*/

      React.createElement("div", { className: "container mt-3" }, /*#__PURE__*/
      React.createElement("div", { className: "col-8" }, /*#__PURE__*/
      React.createElement("h5", { className: "text-center" }, "Enter your markdown: "), /*#__PURE__*/
      React.createElement("textarea", {
        className: "form-control pl-3",
        id: "editor",
        value: text,
        onChange: this.handleChange })), /*#__PURE__*/



      React.createElement("div", { className: "col-10 mt-5 ml-5" }, /*#__PURE__*/
      React.createElement("h5", { className: "text-center" }, "View the result: "), /*#__PURE__*/
      React.createElement("div", { id: "preview",
        className: "rounded preview p-3",
        dangerouslySetInnerHTML: { __html: markdown } }))), /*#__PURE__*/



      React.createElement("footer", { className: "p-2 text-light mt-4" }, /*#__PURE__*/
      React.createElement("p", { id: "signature", class: "text-center" }, "~~ made by", /*#__PURE__*/

      React.createElement("a", {
        className: "text-light",
        href: "https://codepen.io/marsiya-issah",
        target: "_blank" }, /*#__PURE__*/

      React.createElement("strong", null, " Marsiya Issah"))))));





  }}


//---INDEX.JS---place it at the bottom so it renders last-----------

ReactDOM.render( /*#__PURE__*/
React.createElement(React.StrictMode, null, /*#__PURE__*/
React.createElement(App, null)),

document.getElementById("root"));


//-----------------------------APP----------------
//-----------------------------APP----------------