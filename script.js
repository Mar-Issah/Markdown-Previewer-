//dangerouslySetInnerHTML is an attribute under DOM elements in React.  dangerouslySetInnerHTML is React's replacement for using innerHTML in the browser DOM. ..

//The defaultText as the initial state for the editor
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
		super(props);

		this.state = {
			text: defaultText,
		};
	}

	handleChange = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	render() {
    //destructure it to recieve the state in jsx
		const { text } = this.state;

    //convert text into markdown, set break to true makes it compatible with github
		const markdown = marked(text, { breaks: true });

		return (
			<div>
				<nav className="navbar navbar-dark navbar-expand-lg text-light d-flex justify-content-center">
					<h2>~ Markdown Previewer ~</h2>
				</nav>
				<div className="container mt-3">
					<div className="col-8">
						<h5 className="text-center">Enter your markdown: </h5>
						<textarea
							className="form-control pl-3"
							id="editor"
							value={text}
							onChange={this.handleChange}
						/>
					</div>

					<div className="col-10 mt-5 ml-5">
						<h5 className="text-center">View the result: </h5>
						<div
							id="preview"
							className="rounded preview p-3"
							dangerouslySetInnerHTML={{ __html: markdown }}
						/>
					</div>
				</div>
				<footer className="p-2 text-light mt-4">
					<p id="signature" class="text-center">
						~~ made by
						<a
							className="text-light"
							href="https://codepen.io/marsiya-issah"
							target="_blank"
						>
							<strong> Marsiya Issah</strong>
						</a>
					</p>
				</footer>
			</div>
		);
	}
}

//---Render html on the DOM

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);


