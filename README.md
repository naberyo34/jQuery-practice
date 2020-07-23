# jQuery十番勝負
- https://jquery-never-die.netlify.com/
- よくあるインタラクションをjQueryでサクッと実装しました。
## 使用技術
- HTML / SCSS (BEMを利用)
- jQuery (ES6)
## 開発コマンド
- `yarn start` …… webpack-dev-server起動
## 補足
- 原則的にはCSSはCSS側で制御する(クラスの付け外し)方針ですが、slideUp/slideDownは同様の操作をCSSで実現すると余計にややこしいことになるためjQueryの機能で表示切り替えしています。
