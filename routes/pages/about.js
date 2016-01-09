var about = function (req, res, next) {
	res.render('about', { 
		title: 'This is about page.', 
		message: 'Hi, you are now on about page.'
	});
}

module.exports = about;