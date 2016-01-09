var index = function (req, res, next) {
	res.render('index', { 
		title: 'Hey, this is index page.', 
		message: 'Hello there, you are now on index page.'
	});
}

module.exports = index;