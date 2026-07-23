// gift-map.js
// ==========================================
// YouTube Jewel Gift Map
// imageName -> Jewel / Amount
// ==========================================

const GIFT_MAP = {

    // ----------------------------
    // Confirmed
    // ----------------------------

    tea_money: {
        name: "Tea money",
        jewel: 90
    },

    laughing_bear_www: {
        name: "wwwww",
        jewel: 0
    }

};

/**
 * ギフト情報取得
 * @param {string} imageName
 * @returns {Object}
 */
function getGiftInfo(imageName){

    return GIFT_MAP[imageName] || {

        name: imageName,

        jewel: 0,

        amount: 0

    };

}

/**
 * ジュエル取得
 */
function getJewelCount(imageName){

    return getGiftInfo(imageName).jewel;

}

/**
 * 金額取得
 */
function getAmount(imageName){

    return getGiftInfo(imageName).amount;

}

/**
 * ギフト名取得
 */
function getGiftName(imageName){

    return getGiftInfo(imageName).name;

}

/**
 * 未登録ギフト一覧
 */
function getUnknownGifts(list){

    const result = [];

    for(const item of list){

        if(!(item.imageName in GIFT_MAP)){

            result.push(item.imageName);

        }

    }

    return [...new Set(result)];

}
