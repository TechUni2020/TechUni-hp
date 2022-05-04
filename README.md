# Tech.Uni website

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## 使用技術

- [React](https://ja.reactjs.org/)
- [Bootstrap](https://getbootstrap.jp/)
- [Vite](https://vitejs.dev/)

## セットアップ

### ① npm の準備

まずは npm がインストールされているか確認しましょう。ターミナルで下記コマンドを打ってバージョンが表示されたら、それ以降の手順は飛ばして OK です。

```
npm -v
```

npm が入っていなかった方は Node.js も入っていないと思うので、まずは Node.js
をインストールしてください。インストール方法はたくさんありますが、[VOLTA](https://volta.sh/)をオススメしております。VOLTA のサイトを参考に Node.js をインストールしてください。

npm は Node.js とともに配布されるため、Node.js をインストールしたら npm も自動的にインストールされます。

### ② リポジトリのクローン

このリポジトリをローカル環境にクローンしてください。

コマンドで行う場合

```
git clone https://github.com/TechUni2020/TechUni-hp.git
```

VS Code で行う場合は、リポジトリをクローンする（英語だと Clone
Repository）というボタンがあるので、それをクリックしていただき、`https://github.com/TechUni2020/TechUni-hp.git` を入力してエンターを押してください。

### ④ 依存関係のインストール

ターミナルを開き、下記コマンドで依存関係をインストールしましょう。以上で、環境構築は完了です。

```
yarn install
```

## 開発する

開発を行う場合

```
yarn start // localhost:3000 で立ち上がります
```

本番の動作確認を行う場合

```
yarn build // bundleファイルであるbuild/が生成されます
```

様々なIDEでスタイルを統一するために.editorconfigを使っています
各自のIDEでconfigを適用する方法を調べてください

例 : VS code - https://rfs.jp/sb/vsc/editorconfig.html


## Git ブランチルール

`main`

- マージされると本番に自動反映されます。

`develop`

- developにマージしたら[ステージング環境](https://develop.techuni.org/)よりご確認ください
※user名/パスワードは会長・副会長に聞いてください
- 本番反映前に確認するための環境（ステージング環境）。
- 常駐しているブランチで、feature からの変更を受け付け、main にマージする。


`hotfix`

- 本番で発生した緊急のバグに対処するためのブランチ。
- 必ず main から分岐し、main と develop にマージする。

`feature/あなたのGitHub名_*`

- 開発にはここを用いる。
- 必ず develop から分岐し、develop にマージする。
- 「あなたの GitHub 名」にはアカウント名を入力。
- `*` は開発するものを簡易的に記入。
- 例: feature/shouhi_add-about-page

`main`, `develop`, `hotfix` に直接 push してはいけません。基本的に皆さんが触って良いのは `feature/あなたのGitHub名_*` ブランチだけです。


## Contributors ✨

Thanks goes to these wonderful people

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
     <td align="center"><a href="https://twitter.com/shouhi_ide"><img src="https://user-images.githubusercontent.com/63713624/123041698-9f3c9b00-d430-11eb-8faf-e98e27e347db.jpg" width="100px;" alt=""/><br /><sub><b>井手翔陽</b></sub></a><br /><a href="https://github.com/TechUni2020/TechUni-hp/commits?author=shouhi" title="Documentation">📖</a> <a href="#projectManagement-shouhi" title="Project Management">📆</a>
    <td align="center"><a href="https://twitter.com/tayzar133"><img src="https://avatars.githubusercontent.com/u/62434815?v=4" width="100px;" alt=""/><br /><sub><b>テザー ナイ ウィン</b></sub></a><br /><a href="" title="Documentation">📖</a> <a href="#projectManagement-
tayzar-v98" title="Project Management">📆</a>

</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
