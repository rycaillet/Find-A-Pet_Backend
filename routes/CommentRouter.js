const router = require('express').Router()
const controller = require('../controller/CommentController')
const middleware = require('../middleware')

router.get('/', controller.GetAllComments)

// // Create a new comment
router.post(
  '/new_comment/user/:user_id/listing/:listing_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComment
)

// // update a comment
router.put(
  '/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateComment
)

// delete a comment
router.delete(
  '/:comment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)

router.get('/:id', controller.GetCommentById)
module.exports = router
