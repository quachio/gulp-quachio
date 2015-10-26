// ES6 module export example

export function es6Welcome(version) {

	let html = `
		<div class="wrapper" style="width: 90%;margin: 20px auto;">
			<div class="card">
				<p>Hello, this is an <strong>ES${version} module</strong></p>
			</div>
		</div>
	`;
	
	let newEl = document.createElement("p");
	newEl.innerHTML = html;
	let es6Content = document.body.appendChild(newEl);
	return es6Content;
}
