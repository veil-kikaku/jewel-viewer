```javascript
// parser.js
// YouTube Live Chat Replay (NDJSON)
// Jewel Gift (giftMessageViewModel) Parser

function parseChatFile(text) {

    const result = [];

    const lines = text
        .split(/\r?\n/)
        .filter(line => line.trim() !== "");

    for (const line of lines) {

        try {

            const obj = JSON.parse(line);

            const replay = obj.replayChatItemAction;

            if (!replay) continue;

            const timestamp =
                Number(replay.videoOffsetTimeMsec || 0);

            const actions = replay.actions || [];

            for (const action of actions) {

                const item =
                    action?.addChatItemAction?.item;

                if (!item) continue;

                // Jewel Giftのみ対象
                const gift =
                    item.giftMessageViewModel;

                if (!gift) continue;

                const author =
                    gift.authorName?.content?.trim() || "";

                const textContent =
                    gift.text?.content || "";

                // "sent " を除去
                const giftName =
                    textContent.replace(/^sent\s+/i, "").trim();

                const image =
                    gift.giftImage?.sources?.[0]?.url || "";

                const imageName =
                    image
                        .split("/")
                        .pop()
                        .split("=")[0]
                        .replace(".png", "");

                const jewel =
                    getJewelCount(imageName);

                result.push({

                    timestamp,

                    author,

                    giftName,

                    image,

                    imageName,

                    jewel,

                    raw: gift

                });

            }

        } catch (e) {

            console.warn(e);

        }

    }

    return result;

}

/*
-----------------------------------------------------
画像名 → Jewel変換
※ gift-map.js に移動予定
-----------------------------------------------------
*/

function getJewelCount(imageName) {

    const map = {

        // サンプル
        tea_money: 100,

        laughing_bear_www: 0

        // 今後追加
        // rose:50
        // coffee:200
        // cake:1000
        // ...

    };

    return map[imageName] || 0;

}
```
