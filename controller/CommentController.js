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
