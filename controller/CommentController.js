const { Comment } = require('../models')

const GetAllComments = async (req, req) => {
  try {
    const comments = await Comment.findAll({})
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const GetCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    let listingId = parseInt(req.params.listing_id)
    let userId = parseInt(req.params.user_id)
    let commentBody = {
      userId,
      listingId,
      ...req.body
    }
    const createdComment = await Comment.create(commentBody)
    res.send(createdComment)
  } catch (error) {
    throw error
  }
}
