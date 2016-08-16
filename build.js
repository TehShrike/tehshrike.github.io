const fs = require('fs')
const Remarkable = require('remarkable')

function read(file) {
	return fs.readFileSync(file, { encoding: 'utf8'})
}

const contentHtml = new Remarkable().render(read('./index.md'))
const indexHtml = read('./index.html.template')

fs.writeFileSync('./index.html', indexHtml.replace('<!--content-->', contentHtml))
