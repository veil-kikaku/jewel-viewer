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
        name: "お茶代",
        jewel: 90
    },

    laughing_bear_www: {
        name: "wwwww",
        jewel: 320
    },

    ramen_jp: {
        name: "ラーメン",
        jewel: 100
    },

    w_key: {
        name: "w",
        jewel: 10
    },

    smile: {
        name: ":D",
        jewel: 5
    },

    bow: {
        name: "一礼",
        jewel: 3
    },

    v_sign: {
        name: "ピース",
        jewel: 2
    },

    heart: {
        name: "ハート",
        jewel: 10
    },

    corgi: {
        name: "コーギー",
        jewel: 1000
    },

    chili_v2_320x320: {
        name: "唐辛子",
        jewel: 6
    },

    shaved_ice: {
        name: "かき氷",
        jewel: 250
    },

    cream_soda: {
        name: "クリームソーダ",
        jewel: 250
    },

    donut: {
        name: "ドーナツ",
        jewel: 30
    },

    waiting: {
        name: "待ってます",
        jewel: 120
    },

    power_potion: {
        name: "パワーポーション",
        jewel: 500
    },

    numaru: {
        name: "沼る",
        jewel: 120
    },

    press_f: {
        name: "Fキーを押す",
        jewel: 10
    },

    yoshiyoshi: {
        name: "よしよし",
        jewel: 120
    },

    kanpai: {
        name: "かんぱい",
        jewel: 320
    },

    xxxxx: {
        name: "xxxx",
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
