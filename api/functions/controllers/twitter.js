const twitterClient = require('../utils/twitter-client')

exports.createBlocks = async (req, res, next) => {
  try {
    const { accessToken, accessTokenSecret, users } = req.body
    const result = await twitterClient.createBlocks(accessToken, accessTokenSecret, users)
    res.send(result)
    return
  } catch (error) {
    next(error)
    return
  }
}