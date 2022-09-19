const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['landing'] = require('../middleware/landing.js')
middleware['landing'] = middleware['landing'].default || middleware['landing']

export default middleware
