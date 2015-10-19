// es5 module export example

module.exports = function (version) {
	var message = 'Hello, this is an <strong>ES' + version + ' module</strong>';
	var es5Node = document.querySelector('#output');
	var newEl = document.createElement("p");
	newEl.innerHTML = message;
	var es5Content = es5Node.appendChild(newEl);
	return es5Content;
};
