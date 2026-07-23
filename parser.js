// parser.js v2

function parseChatFile(text) {

    const result = [];
    const rendererTypes = new Set();

    const lines = text.split(/\r?\n/).filter(Boolean);

    for (const line of lines) {

        try {

            const obj = JSON.parse(line);

            const actions =
                obj?.replayChatItemAction?.actions || [];

            for (const action of actions) {

                const item =
                    action?.addChatItemAction?.item;

                if (!item) continue;

                // この行が重要
                const rendererName = Object.keys(item)[0];
                rendererTypes.add(rendererName);

                // ジュエルギフトらしいイベントだけ抽出
                if (
                    rendererName.toLowerCase().includes("gift") ||
                    rendererName.toLowerCase().includes("jewel")
                ) {

                    result.push({
                        renderer: rendererName,
                        raw: item[rendererName]
                    });

                }

            }

        } catch (e) {}

    }

    console.log("Renderer一覧");
    console.table([...rendererTypes]);

    return result;

}