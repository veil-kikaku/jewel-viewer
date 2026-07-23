# 💎 Jewel Viewer

YouTube Live Chat Replay（NDJSON）から
**ジュエルギフト(giftMessageViewModel)** のみを抽出して一覧表示するシンプルなビューアです。

GitHub Pagesでそのまま動作します。

---

# 機能

- ✅ giftMessageViewModelのみ解析
- ✅ ジュエルギフト一覧
- ✅ ギフト画像表示
- ✅ ユーザー名表示
- ✅ ジュエル表示
- ✅ 金額表示
- ✅ 合計ジュエル
- ✅ 合計金額
- ✅ ジュエルフィルター
- ✅ 名前検索
- ✅ 並び替え
- ✅ CSV出力

---

# フォルダ構成

```
jewel-viewer/

index.html
style.css
gift-map.js
parser.js
script.js
csv.js
README.md
```

---

# 使用方法

1.

YouTube Live Chat Replay(JSON)

を保存します。

例

```
chat.json
```

---

2.

GitHub Pages

または

```
index.html
```

をブラウザで開きます。

---

3.

```
チャットJSON
```

を選択します。

---

4.

自動で

- ジュエル
- ギフト
- ユーザー
- 合計

が表示されます。

---

# 対応データ

現在対応しているのは

```
giftMessageViewModel
```

のみです。

以下は解析しません。

- liveChatTextMessageRenderer
- liveChatPaidMessageRenderer
- liveChatPaidStickerRenderer
- liveChatMembershipItemRenderer

---

# ギフト対応

gift-map.js

で管理しています。

例

```javascript
tea_money:{
    name:"Tea money",
    jewel:100,
    amount:200
}
```

新しいギフトは

```
gift-map.js
```

へ追加するだけで対応できます。

---

# CSV

CSVには

- 時間
- ユーザー
- ギフト
- ジュエル
- 金額
- 画像ID

が出力されます。

---

# GitHub Pages

Settings

↓

Pages

↓

Deploy from branch

↓

main

↓

/

保存

公開URL

```
https://YOURNAME.github.io/jewel-viewer/
```

---

# License

MIT License
