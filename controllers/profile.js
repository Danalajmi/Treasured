const Post = require("../models/post")
const User = require('../models/user')
exports.profile_index_get = async (req,res) => {
  const myPosts = await Post.find({creator: req.params.userID}).populate('creator')
  const postCount = myPosts.length
  res.render('profile/index.ejs', {myPosts, postCount})
}

exports.profile_edit_get = async (req,res) => {
  const account = await User.findById(req.session.user._id)
  console.log(account)
  res.render('profile/edit.ejs', account)
}
