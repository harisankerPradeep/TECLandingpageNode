exports.init = function (app) {
    app.get('/', function (req, res) {
	    console.log("request handler for start called");
		res.render('index', {title: 'express'});
    });
}
