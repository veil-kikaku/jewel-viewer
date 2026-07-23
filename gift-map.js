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

    husky: {
        name: "ハスキー",
        jewel: 800
    },

    gold_coin_v2_320x320: {
        name: "金貨",
        jewel: 10
    },

    ggez: {
        name: "GGEZ",
        jewel: 20
    },

    sorena: {
        name: "それな",
        jewel: 2
    },

    its_cake: {
        name: "トロフィーの形のケーキ",
        jewel: 1000
    },

    gg_hamster: {
        name: "GGハムスター",
        jewel: 77
    },

    shocked: {
        name: "驚き",
        jewel: 6
    },

    kami: {
        name: "神",
        jewel: 150
    },

    hand_heart: {
        name: "指ハート",
        jewel: 300
    },

    goodwork_jp: {
        name: "おつかれさまです",
        jewel: 400
    },

    yabai_skull: {
        name: "ヤバー",
        jewel: 1000
    },

    microphone_gift: {
        name: "マイク",
        jewel: 6
    },

    konkon: {
        name: "こんこん",
        jewel: 320
    },

    saiko_kayo: {
        name: "最高かよ",
        jewel: 320
    },

    omedetou: {
        name: "おめでとう",
        jewel: 500
    },

    crying_hamster: {
        name: "泣いているハムスター",
        jewel: 600
    },

    fired_up: {
        name: "やる気満々",
        jewel: 250
    },

    sparkles_v2_320x320: {
        name: "キラキラ",
        jewel: 2
    },

    one_hundred_v2_320x320: {
        name: "100",
        jewel: 2
    },

    microphone: {
        name: "マイク",
        jewel: 100
    },

    finger_heart: {
        name: "指ハート",
        jewel: 350
    },

    thankful: {
        name: "感謝",
        jewel: 7
    },

    gg_taiotsu: {
        name: "対おつ",
        jewel: 5
    },

    gg_planet_v2: {
        name: "GGプラネット",
        jewel: 380
    },

    watermelon: {
        name: "スイカ",
        jewel: 500
    },

    heart_you: {
        name: "ハートのトッピングは必須",
        jewel: 1500
    },

    salmon_nigiri: {
        name: "すし",
        jewel: 200
    },

    pudding_cat: {
        name: "プリンの猫",
        jewel: 500
    },

    gg: {
        name: "炎に包まれたGG",
        jewel: 120
    },

    orange: {
        name: "オレンジ",
        jewel: 10
    },

    takoyaki: {
        name: "たこ焼きをどうぞ",
        jewel: 500
    },

    sushi: {
        name: "寿司",
        jewel: 5500
    },

    silver_star_v2_320x320: {
        name: "星",
        jewel: 2
    },

    lol: {
        name: "笑顔のディスコ",
        jewel: 250
    },

    air_travel: {
        name: "空の旅",
        jewel: 1000
    },

    tanghulu: {
        name: "タンフル",
        jewel: 300
    },

    park_the_bus: {
        name: "バスの駐車",
        jewel: 1000
    },

    red_card: {
        name: "レッドカード",
        jewel: 250
    },

    beach_dog: {
        name: "ビーチの犬",
        jewel: 3000
    },

    tube_dancer: {
        name: "チューブ ダンサー",
        jewel: 1500
    },

    naisu: {
        name: "ナイス",
        jewel: 400
    },

    kawaii_crepe: {
        name: "ハートのトッピング",
        jewel: 500
    },

    bear_bread: {
        name: "クマのパン",
        jewel: 500
    },

    pug_nap: {
        name: "昼寝",
        jewel: 680
    },

    loot_box: {
        name: "ルートボックス",
        jewel: 1000
    },

    soccer_trophy: {
        name: "サッカーのトロフィー",
        jewel: 500
    },

    sunshine: {
        name: "サンシャイン",
        jewel: 200
    },

    tete: {
        name: "尊い",
        jewel: 320
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

    };

}

/**
 * ジュエル取得
 */
function getJewelCount(imageName){

    return getGiftInfo(imageName).jewel;

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
