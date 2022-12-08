const { Comment } = require('../models')

const GetAllComments = async (req, req) => {
  try {
    const comments = await Comment.findAll({})
    res.send(comments)
  } catch (error) {
    throw error
  }
}
