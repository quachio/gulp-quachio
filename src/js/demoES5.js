/*jshint browserify: true */

// es5 module export example
module.exports = function (version) {

	var html = [
		'<div class="wrapper">',
			'<div class="card">',
				'<p>Hello, this is an <strong>ES'+ version + 'module</strong></p>',
			'</div>',
		'</div>'
	].join('\n');

	var newEl = document.createElement("div");
	newEl.innerHTML = html;
	var es5Content = document.body.appendChild(newEl);
	return es5Content;
};
