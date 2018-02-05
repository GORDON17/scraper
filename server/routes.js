const XRay = require('x-ray')

module.exports = function(app) {
	app.get('/scraping-imdb', function(req, res){
		let x = XRay();
		let list = [];
		console.log("asdfaf")
		x('http://www.imdb.com/search/name?birth_monthday=02-02', {
		  items: x('#pagecontent #content-2-wide #main .article .lister-list .lister-item', [{
		    name: '.lister-item-content h3 a'
		  }])
		})(function(err, obj) {
			if (err) {
				res.status(400).send(err)
			} else {
				res.status(200).send(obj)
			}
		})
	})
}