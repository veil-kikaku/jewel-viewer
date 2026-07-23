// parser.js
// ==========================================
// Jewel Viewer Parser
// YouTube Live Chat Replay (NDJSON)
// giftMessageViewModel Only
// ==========================================

function parseChatFile(text) {

    const result = [];

    const lines = text
        .split(/\r?\n/)
        .filter(line => line.trim() !== "");

    for (const line of lines) {

        try {

            const obj = JSON.parse(line);

            const replay = obj?.replayChatItemAction;

            if (!replay) continue;

            const timestamp =
                Number(replay.videoOffsetTimeMsec || 0);

            const actions = replay.actions || [];

            for (const action of actions) {

                const item =
                    action?.addChatItemAction?.item;

                if (!item) continue;

                //--------------------------------------------------
                // Jewel Gift Only
                //--------------------------------------------------

                const gift =
                    item.giftMessageViewModel;

                if (!gift) continue;

                //--------------------------------------------------
                // Author
                //--------------------------------------------------

                const author =
                    gift.authorName?.content
                        ?.trim() || "";

                //--------------------------------------------------
                // Gift Text
                //--------------------------------------------------

                const textContent =
                    gift.text?.content || "";

                const giftName =
                    textContent
                        .replace(/^sent\s+/i, "")
                        .trim();

                //--------------------------------------------------
                // Image URL
                //--------------------------------------------------

                let image =
                    gift.giftImage
                        ?.sources?.[0]?.url || "";

                if (
                    image.startsWith("//")
                ) {
                    image = "https:" + image;
                }

                //--------------------------------------------------
                // imageName
                //--------------------------------------------------

                let imageName = "";

                if (image !== "") {

                    imageName = image
                        .split("/")
                        .pop()
                        .split("=")[0]
                        .replace(".png", "");

                }

                //--------------------------------------------------
                // Gift Map
                //--------------------------------------------------

                const info =
                    getGiftInfo(imageName);

                //--------------------------------------------------
                // Result
                //--------------------------------------------------

                result.push({

                    timestamp,

                    author,

                    giftName:
                        info.name || giftName,

                    image,

                    imageName,

                    jewel:
                        info.jewel,

                    amount:
                        info.amount,

                    raw: gift

                });

            }

        }

        catch (e) {

            console.warn(
                "Parse Error",
                e
            );

        }

    }

    //------------------------------------------------------
    // Time Sort
    //------------------------------------------------------

    result.sort((a, b) =>
        a.timestamp - b.timestamp
    );

    //------------------------------------------------------
    // Unknown Gift
    //------------------------------------------------------

    const unknown =
        getUnknownGifts(result);

    if (unknown.length) {

        console.log(
            "Unknown Gifts"
        );

        console.table(unknown);

    }

    return result;

}
