// parser.js

function parseChatFile(text) {

    const result = [];

    const lines = text
        .split(/\r?\n/)
        .filter(line => line.trim() !== "");

    for (const line of lines) {

        try {

            const obj = JSON.parse(line);

            const actions =
                obj?.replayChatItemAction?.actions || [];

            for (const action of actions) {

                const renderer =
                    action?.addChatItemAction?.item
                    ?.liveChatPaidStickerRenderer;

                if (!renderer) continue;

                const author =
                    renderer.authorName?.simpleText || "";

                const amountText =
                    renderer.purchaseAmountText?.simpleText || "";

                const timestamp =
                    renderer.timestampText?.simpleText || "";

                const image =
                    renderer.sticker?.thumbnails?.slice(-1)[0]?.url || "";

                // 金額（数字のみ）
                const amount =
                    Number(
                        amountText.replace(/[^\d]/g, "")
                    ) || 0;

                // ジュエル取得
                // metadata に jewel がある場合は使用
                let jewel =
                    renderer.jewelCount ||
                    renderer.purchaseAmount ||
                    renderer.jewels ||
                    0;

                // 無ければ金額を仮設定
                if (!jewel) {
                    jewel = amount;
                }

                result.push({
                    timestamp,
                    author,
                    jewel,
                    amount,
                    image
                });

            }

        }
        catch (e) {
            // 壊れた行は無視
        }

    }

    return result;

}
