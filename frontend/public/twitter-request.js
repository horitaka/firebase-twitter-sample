const API_URL = 'https://us-xxx.cloudfunctions.net/app'

const users = ['xxx', 'yyy']

window.addEventListener('load', function () {
  const blockButton = document.getElementById('block-button');
  const resultText = document.getElementById('result-text')

  blockButton.addEventListener('click', async function () {

    try {
      resultText.textContent = '処理中'
      const result = await postBlockUsers(users);
      console.log(result)
      resultText.textContent = `ブロックしました　${users}`
    } catch (error) {
      console.error(error.response)
      resultText.textContent = `エラー　${JSON.stringify(error.response)}`
    }
  })

})


async function postBlockUsers(users) {
  // APIのURL
  const url = `${API_URL}/twitter/blocks/create`;

  // ログインしたユーザーの情報を取得
  const authResult = JSON.parse(window.sessionStorage.getItem('authResult'));
  const accessToken = authResult.credential.oauthAccessToken;
  const accessTokenSecret = authResult.credential.oauthTokenSecret;

  // APIの実行
  const data = {
    accessToken: accessToken,
    accessTokenSecret: accessTokenSecret,
    users: users,
  }
  const response = await axios.post(url, data);
  return response.data
}