const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const CommentRouter = require('./CommentRouter')
const ListingRouter = require('./ListingRouter')
Router.use('/', AuthRouter)
Router.use('/listing', ListingRouter)
Router.use('/comment', CommentRouter)
module.exports = Router
