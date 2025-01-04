<h1><p align="center"><img src="./ia.png" alt="いあ" height="200"></p></h1>
<p align="center">An Ai(iA) for Misskey. <a href="./torisetu.md">About Ai(iA)</a></p>

**※In this repository, Ai is basically called iA.**

[![CircleCI](https://img.shields.io/circleci/build/gh/Leies-202/ai/myia?logo=circleci&style=for-the-badge&token=46065ec19ddcd7cb377b1adea6e6d23fa468c963)](https://circleci.com/gh/Leies-202/ai)

![](https://github.com/leies-202/ai/workflows/Node.js%20CI/badge.svg)

## これなに
Misskey用の日本語Botです。

当リポジトリではめいめいさんのリポジトリ(=藍たその改造版)から更に(セリフだけ)改造してます。

藍ではなく衣亜(いあ)と呼んであげて下さい。

※概念(キャラ)的にはいあ(フォーク元/@ia@misskey.m544.net)と衣亜(これ/@ia@mk.lei202.com)は別判定ということで。

## どこ改造した？

要約:色々改造してみたけど、最終的にセリフ変えただけ。

･そもそもフォーク元がオリジナルではなくめいめい(@mei23)さんによる改造バージョン。(通称いあ)

･セリフを敬語調から変更(完全に趣味｡統一性があるかは謎｡)

~~･起動時に投稿するモジュールを追加(あれが正解とは思えないのでTypeScript得意な人は修正案を頼みます)~~ ←1時間に1回投稿する謎現象起こしたので廃止

~~･○○頂戴(下さい,欲しい,欲しいな)とリプライすると○○どうぞと返信してくれるプログラム(オウム返しプログラム。天気機能作ろうとした残骸。変数関係が訳わからなかったので試してた。)~~←リアクション動作にバグを起こしたので削除

･このプログラムではないが同じアカウントで使う前提のPHPプログラムが[別リポジトリ](https://github.com/Leies-202/mis-php-list)にあります。

･フォーク元であるめいめいさんのリポジトリでは何が改造されてるかについては[こちらの取説の下部](https://github.com/Leies-202/ai/blob/myia/torisetu.md)をご確認下さい。

## インストール
> Node.js と npm と MeCab (オプション) がインストールされている必要があります。

まず適当なディレクトリに `git clone` します。
次にそのディレクトリに `config.json` を作成します。中身は次のようにします:
``` json
{
	"host": "https:// + あなたのインスタンスのURL (末尾の / は除く)",
	"i": "衣亜として動かしたいアカウントのアクセストークン",
	"master": "管理者のユーザー名(オプション)",
	"notingEnabled": "ランダムにノートを投稿する機能を無効にする場合は false を入れる",
	"keywordEnabled": "キーワードを覚える機能 (MeCab が必要) を有効にする場合は true を入れる (無効にする場合は false)",
	"keywordInterval": "キーワードを覚える間隔 (分, デフォルト60分)",
	"chartEnabled": "チャート機能を無効化する場合は false を入れてください",
	"reversiEnabled": "いあとリバーシで対局できる機能を有効にする場合は true を入れる (無効にする場合は false)",
	"serverMonitoring": "サーバー監視の機能を有効にする場合は true を入れる (無効にする場合は false)",
	"mecab": "MeCab のインストールパス (オプション、PATHが通ってれば指定不要)",
	"mecabDic": "MeCab の辞書ファイルパス (オプション、たいてい /usr/lib/x86_64-linux-gnu/mecab/dic/mecab-ipadic-neologd)",
	"mecabNeologd": "MeCabの辞書に mecab-ipadic-NEologd を使用している場合は true にすると良いかも"
}
```
`yarn install` して `yarn build` して `yarn start` すれば起動できます

なんか知らんけど、時々MeCabの場所が`/usr/bin/mecab`の場合ある。
Dockerの場合は最初に `memory/memory.json` に空ファイルを作っておく必要がある

Dockerイメージはここにある https://hub.docker.com/r/mei23/ia/

現状、Node v22ではチャートと迷路が動きません。

## フォント
一部の機能にはフォントが必要です。  

おそらくLinux環境などではフォントをインストールすればそれなりに使用してくれるはずです。  
Debian/Ubuntu系ディストリの場合
```
apt-get install -y fonts-noto
```
その際、フォントのグリフは環境変数で調整出来る可能性があります。
```shell
FC_LANG: ja
:
```

ご自身でフォントをインストールディレクトリに`font.ttf`という名前で設置することにより、特定のフォントファイルを使用することもできます。

## 時刻
定時動作系のタイムゾーンがずれる場合、サーバーの設定を変更するか環境変数などでも対処出来ます。
```shell
TZ: Asia/Tokyo
:
```

## 記憶
衣亜は記憶の保持にインメモリデータベースを使用しており、いあのインストールディレクトリに `memory.json` という名前で永続化されます。

## ライセンス
MIT

## Awards
<img src="./WorksOnMyMachine.png" alt="Works on my machine" height="120">
