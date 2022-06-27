import express from 'express'
import apiRoutes from '../api'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

const allowedOrigins = [
	'http://localhost:8080',
	'https://my-lovely-site.com'
];

export default ({config}) => {
  const app = express()

  app.use(cors({
		origin: function (origin, callback) {

			if (!origin) {
				return callback(null, true);
			}
      
			if (allowedOrigins.indexOf(origin) === -1) {
				const msg = 'The CORS policy for this site does not allow access from the specified Origin.';

				return callback(new Error(msg), false);
			}

			return callback(null, true);
		},
		credentials: true
	}));

  app.use(bodyParser.json())
  app.use(cookieParser())

  app.use(`/api/v${config.VERSION}`, apiRoutes())

  return app
}
