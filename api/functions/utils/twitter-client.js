const Twit = require('twit')
const functions = require('firebase-functions');

exports.post = async (text) => {
  const response = await T.post('statuses/update', { status: text })
  return response.data
}

// ユーザーをブロック
exports.createBlocks = async (accessToken, accessTokenSecret, users) => {
  const T = new Twit({
    consumer_key: functions.config().twitter.consumerkey,
    consumer_secret: functions.config().twitter.consumersecret,
    access_token: accessToken,
    access_token_secret: accessTokenSecret,
    timeout_ms: 60 * 1000,
    strictSSL: true,
  })

  let result = []
  for (let i = 0; i < users.length; i++) {
    /* eslint no-await-in-loop: 0 */
    const response = await T.post('blocks/create', { screen_name: users[i] })
    await sleep(1000)
    result.push(response.data)
  }

  return result
}

const sleep = (msec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, msec)
  })
}