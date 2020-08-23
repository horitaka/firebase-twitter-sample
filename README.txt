
■Firebase functionsの設定

・Firebase functionsのプロジェクト作成
https://firebase.google.com/docs/functions/get-started?hl=ja
「1.Firebase プロジェクトを作成する」から「3.Firebase SDK for Cloud Functions を初期化する」までを実施

・ファイルコピー
functionsの中身を削除して、添付のfunctions.zipの中身をコピーする

・Firebaseのアカウントの有料化
Firebaseのコンソールから実施。
「Project Overview」の右側の歯車ボタン→Usage and billing→Details & Settings　から実施。

・Firebase 環境変数の設定
https://blog.katsubemakito.net/firebase/functions-environmentvariable
以下の2つを実行する
firebase functions:config:set twitter.consumerkey="XXX"   ←　Twitterのdeveloper画面から取得できるAPI keyを入れる
firebase functions:config:set twitter.consumersecret="XXX"　　　←　Twitterのdeveloper画面から取得できるAPI secret keyを入れる

・モジュールのインストール
functionsのフォルダに移動
npm install

・デプロイ
firebase deploy

・デプロイ後に表示される以下のURLをコピー
Function URL (app): https://us-xxx.cloudfunctions.net/app


■フロントエンドの設定
・ファイルを添付のfrontend.zipのものに入れ替え

・twitter-request.jsの以下の部分をFirebase functionsのデプロイ後に表示されるURLに変更する
const API_URL = 'https://us-xxx.cloudfunctions.net/app'

・twitter-request.jsの以下の部分をブロックしたいユーザー名に変更する
const users = ['xxx', 'yyy']
