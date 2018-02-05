const path = require('path')
const http = require('http')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo')(session)


module.exports = {
  app: function() {
		const app = express()
		const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))

		app.use(cookieParser())
		/* setup MongoDB here */
		// app.use(session({
		// 		secret: '',
		// 		proxy: true,
		// 		resave: true,
		// 		saveUninitialized: true,
		// 		store: new MongoStore({ host: 'localhost', port: 27017, db: 'scraper'})
		// 	})
		// )
		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: true }))
		app.use('/public', publicPath)
		app.get('/', function (_, res) { res.sendFile(indexPath) })

		require('./server/routes')(app)

		if (app.get('env') == 'development') app.use(errorHandler())

		return app
  }
}