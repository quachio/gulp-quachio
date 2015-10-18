// ES6 module export example

export function es6Welcome(version) {	
	let message = `Hello, this is an ES${version} module`;
	let es6Node = document.querySelector('#output');
	let newEl = document.createElement("p");
	newEl.innerHTML = message;
	let es6Content = es6Node.appendChild(newEl);
	return es6Content;
}
