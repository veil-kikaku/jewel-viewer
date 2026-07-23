// gift-map.js

const GIFT_JEWELS = {
    "Tea money": 100,
    "Rose": 50,
    "Ice Cream": 500,
    // ...YouTubeのギフト一覧を追加
};

function getJewelCount(giftText) {
    const giftName = giftText.replace(/^sent\s+/i, "").trim();
    return GIFT_JEWELS[giftName] ?? 0;
}