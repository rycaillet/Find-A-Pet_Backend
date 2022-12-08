const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const CommentRouter = require('./VinylRouter')
const ListingRouter = require('./LibraryRouter')
Router.use('/', AuthRouter)
Router.use('/listing', ListingRouter)
Router.use('/comment', CommentRouter)
module.exports = Router
