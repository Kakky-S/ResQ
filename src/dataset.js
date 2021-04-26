

const defaultDataset = {
    "init": {
        answers: [
            {content: "首の痛み(頭痛を含む)", nextId: "neck_pain"},
            {content: "肩の痛み", nextId: "consultant"},
            {content: "腰の痛み", nextId: "community"},
            {content: "膝の痛み", nextId: "dating"},
        ],
        question: "こんにちは！どのような症状でお悩みでしょうか？",
    },
    "neck_pain": {
        answers: [
            {content: "首の痛み", nextId: "neck"},
            {content: "頭痛", nextId: "headache"},
            {content: "前に戻る", nextId: "init"}
        ],
        question: "首の痛み、頭痛どちらでお困りですか？",
    },
    "neck": {
        answers: [
            {content: "はい", nextId: "neck_01"},
            { content: "いいえ", nextId: "neck_07" },
            { content: "前に戻る", nextId: "neck_pain" },
        ],
        question: "首に腫れがありますか",
    },
    "neck_01": {
        answers: [
            {
                content: "はい", nextId: "neck_02"},
            { content: "いいえ", nextId: "neck_07" },
            { content: "前に戻る", nextId: "neck" },
        ],
        question: "耳の下あたりが腫れて痛みますか？",
    },
    "neck_02": {
        answers: [
            {content: "はい", nextId: "contact"},//耳下腺炎
            {
                content: "いいえ", nextId: "neck_03" },
            { content: "前に戻る", nextId: "neck-01" },
        ],
        question: "耳の下あたりが腫れて痛みますか？",
    },
    "neck_03": {
        answers: [
            {content: "はい", nextId: "neck_04"},
            { content: "いいえ", nextId: "neck_Yes2_No2" },//耳鼻咽頭科
            { content: "前に戻る", nextId: "neck_02" },
        ],
        question: "のどぼとけの下あたりが腫れていますか?",
    },
    "neck_04": {
        answers: [
            {content: "はい", nextId: "neck_06"},
            { content: "いいえ", nextId: "neck_05" },
            { content: "前に戻る", nextId: "neck_03" },
        ],
        question: "腫れている部分にしこりがありますか？",
    },
    "neck_05": {
        answers: [
            {content: "はい", nextId: "neck_00"},// バセドウ病
            { content: "いいえ", nextId: "neck_00" },//橋本病
            { content: "前に戻る", nextId: "neck_04" },
        ],
        question: "腫れている部分にしこりがありますか？",
    },
    "neck_06": {
        answers: [
            {content: "はい", nextId: "neck_00"},// 亜急性甲状腺炎
            { content: "いいえ", nextId: "neck_00" },//甲状腺がん
            { content: "前に戻る", nextId: "neck_04" },
        ],
        question: "38度以上の熱が出て腫れた部分に痛みがありますか？",
    },
    "neck_07": {
        answers: [
            {content: "はい", nextId: "neck_08"},
            { content: "いいえ", nextId: "neck_09" },
            { content: "前に戻る", nextId: "neck_01" },
        ],
        question: "最近怪我をしましたか？",
    },
    "neck_08": {
        answers: [
            {content: "痛みがある", nextId: "neck_00"},// 椎骨骨折
            { content: "しびれがある", nextId: "neck_00" },//後部椎間板病変
            { content: "いいえ", nextId: "neck_10" },
            { content: "前に戻る", nextId: "neck_07" },
        ],
        question: "首の骨を叩くと強く痛かったり、肩や腕にしびれがありますか？",
    },
    "neck_09": {
        answers: [
            {content: "痛み", nextId: "neck_00"},// 椎骨骨折
            { content: "しびれ", nextId: "neck_00" },//後部椎間板病変
            { content: "前に戻る", nextId: "neck_07" },
        ],
        question: '上を向いて痛い方に首を傾け、真上から押すと肩や腕にしびれが出ますか？',
    },
    "neck_10": {
        answers: [
            {content: "はい", nextId: "whiplash"},// ムチウチ
            { content: "いいえ", nextId: "neck_00" },//検査してください
            { content: "前に戻る", nextId: "neck_08" },
        ],
        question: "上や下や横を向いたり首をかしげたりすると痛みますか？",
    },
    "whiplash":{
        answers: [
            {content: "症状を確認する", nextId: "answer"},// ムチウチ
            { content: "前に戻る", nextId: "neck_10" },//検査してください
            { content: "最初に戻る", nextId: "init" },
        ],
        question: "診察結果が出ました！",
    },
    "headache": {
        answers: [
            {content: "はい", nextId: "headache_01"},
            {content: "いいえ", nextId: "headache_02"},
            {content: "前の質問に戻る", nextId: "init"}
        ],
        question: "発熱はありますか？",
    },
    "headache_01": {
        answers: [
            {content: "はい", nextId: "headache_03"},
            { content: "いいえ", nextId: "headache_06" },
            {content: "前の質問に戻る", nextId: "headache"}
        ],
        question: "くしゃみ・鼻水・鼻詰まりなどの症状はありますか？",
    },
    "headache_02": {
        answers: [
            {content: "はい", nextId: "headache_00"},//外傷の後遺症
            { content: "いいえ", nextId: "headache_04" },
            {content: "前の質問に戻る", nextId: "headache"}
        ],
        question: "頭にケガをしましたか？",
    },
    "headache_03": {
        answers: [
            {content: "はい", nextId: "headache_00"},//インフルエンザ
            { content: "いいえ", nextId: "headache_00" },//風邪
            {content: "前の質問に戻る", nextId: "headache_01"}
        ],
        question: "急激に38度以上の高熱が出て、関節や筋肉が痛みますか？",
    },
    "headache_04": {
        answers: [
            {content: "はい", nextId: "headache_05"},
            { content: "いいえ", nextId: "headache_08" },
            {content: "前の質問に戻る", nextId: "headache_02"}
        ],
        question: "目の疲れや目の痛みはありますか？",
    },
    "headache_05": {
        answers: [
            {content: "はい", nextId: "headache_00"},//群発性頭痛
            { content: "いいえ", nextId: "headache_10" },
            {content: "前の質問に戻る", nextId: "headache_04"}
        ],
        question: "夜間に頭痛と片目の奥に痛みが出る状態が10日程続いていますか？",
    },
    "headache_06": {
        answers: [
            {content: "はい", nextId: "headache_11"},
            { content: "いいえ", nextId: "headache_07" },
            {content: "前の質問に戻る", nextId: "headache_01"}
        ],
        question: "高熱が出て激しく痛みますか？",
    },
    "headache_07": {
        answers: [
            {content: "はい", nextId: "headache_00"},//帯状疱疹(ヘルペス)
            { content: "いいえ", nextId: "headache_00" },//感染症の疾患
            {content: "前の質問に戻る", nextId: "headache_06"}
        ],
        question: "頭の表面近くがピリピリ痛みますか？",
    },
    "headache_08": {
        answers: [
            {content: "はい", nextId: "headache_09"},
            { content: "いいえ", nextId: "headache_12" },
            {content: "前の質問に戻る", nextId: "headache_04"}
        ],
        question: "耳の痛みがありますか？",
    },
    "headache_09": {
        answers: [
            {content: "はい", nextId: "headache_00"},//外耳道炎
            { content: "いいえ", nextId: "headache_00" },//急性中耳炎
            {content: "前の質問に戻る", nextId: "headache_08"}
        ],
        question: "耳の入り口を触れると痛みますか？",
    },
    "headache_10": {
        answers: [
            {content: "はい", nextId: "headache_00"},//眼精疲労
            { content: "いいえ", nextId: "headache_00" },//緑内障
            {content: "前の質問に戻る", nextId: "headache_05"}
        ],
        question: "作業をしていると徐々に頭が重く感じますか？",
    },
    "headache_11": {
        answers: [
            {content: "はい", nextId: "headache_00"},//脳腫瘍
            { content: "いいえ", nextId: "headache_00" },//髄膜炎
            {content: "前の質問に戻る", nextId: "headache_06"}
        ],
        question: "以前から耳か鼻に慢性の病気がありましたか？",
    },
    "headache_12": {
        answers: [
            {content: "はい", nextId: "headache_00"},//鼻炎・副鼻腔炎
            { content: "いいえ", nextId: "headache_13" },
            {content: "前の質問に戻る", nextId: "headache_08"}
        ],
        question: "鼻水・鼻詰まりがありますか？",
    },
    "headache_13": {
        answers: [
            {content: "はい", nextId: "headache_00"},//鼻炎・副鼻腔炎
            { content: "いいえ", nextId: "headache_13" },
            {content: "前の質問に戻る", nextId: "headache_12"}
        ],
        question: "吐き気や吐く、めまいなどの症状がありますか？",
    },
    "shoulder": {
    answers: [
      { content: "はい", nextId: "shoulder01" },
      { content: "いいえ", nextId: "shoulder06" },
      { content: "前の質問に戻る", nextId: "init" }
    ],
    question: "左右どちらかの方がこったり張ったり、痛みますか？"
  },
  "shoulder01": {
    answers: [
      { content: "はい", nextId: "shoulder02" },
      { content: "いいえ", nextId: "shoulder04" },
      { content: "前の質問に戻る", nextId: "shoulder" }
    ],
    question: "それは左肩ですか？"
  },
  "shoulder02": {
    answers: [
      { content: "はい", nextId: "#" }, // 胸膜炎や狭心症、心筋梗塞
      { content: "いいえ", nextId: "shoulder03" },
      { content: "前の質問に戻る", nextId: "shoulder01" }
    ],
    question: "胸の痛みやしめつけられるような感じがありますか？"
  },
  "shoulder03": {
    answers: [
      { content: "はい", nextId: "#" }, // 膵炎や胃の病気
      { content: "いいえ", nextId: "shoulder06" },
      { content: "前の質問に戻る", nextId: "shoulder02" }
    ],
    question: "みぞおちの痛みや不快感を伴いますか？"
  },
  "shoulder04": {
    answers: [
      { content: "はい", nextId: "#" }, // 胆石症食道炎
      { content: "いいえ", nextId: "shoulder05" },
      { content: "前の質問に戻る", nextId: "shoulder01" }
    ],
    question: "主に右肩で、背中と腹部の痛みを伴いますか？"
  },
  "shoulder05": {
    answers: [
      { content: "はい", nextId: "#" }, // 肺炎・呼吸器の痛み
      { content: "いいえ", nextId: "shoulder06" },
      { content: "前の質問に戻る", nextId: "shoulder04" }
    ],
    question: "肩の深部が痛み、咳をすると激しく痛みますか？"
  },
  "shoulder06": {
    answers: [
      { content: "はい", nextId: "shoulder7" },
      { content: "いいえ", nextId: "headache_13" },
      { content: "前の質問に戻る", nextId: "shoulder" }
    ],
    question: "最近、怪我をしましたか？"
  },
  "shoulder07": {
    answers: [
      { content: "はい", nextId: "shoulder08" },
      { content: "いいえ", nextId: "shoulder09" },
      { content: "前の質問に戻る", nextId: "shoulder06" }
    ],
    question: "しびれがありますか？"
  },
  "shoulder08": {
    answers: [
      { content: "はい", nextId: "#" }, // リュックサック麻痺
      { content: "いいえ", nextId: "shoulder10" },
      { content: "前の質問に戻る", nextId: "shoulder07" }
    ],
    question: "リュックサックやランドセルなど、長時間肩を圧迫することをしましたか？"
  },
  "shoulder09": {
    answers: [
      { content: "はい", nextId: "headache_00" },
      { content: "いいえ", nextId: "headache_13" },
      { content: "前の質問に戻る", nextId: "init" }
    ],
    question: "左右どちらかの方がこったり張ったり、痛みますか？"
  },
  "shoulder10": {
    answers: [
      { content: "はい", nextId: "shoulder11" },
      { content: "いいえ", nextId: "#" }, // 検査してください
      { content: "前の質問に戻る", nextId: "shoulder08" }
    ],
    question: "上を向いて、しびれるほうに首を傾け、真上から押すと、肩や腕にしびれが強くなりますか？"
  },
  "shoulder11": {
    answers: [
      { content: "はい", nextId: "#" }, // 心筋梗塞の疑いあり、専門医へ
      { content: "いいえ", nextId: "shoulder12" },
      { content: "前の質問に戻る", nextId: "shoulder10" }
    ],
    question: "しびれ以外に内科的症状がありますか？"
  },
  "shoulder12": {
    answers: [
      { content: "はい", nextId: "#" }, // 頚骨後縦靭帯骨化症(OPLL)
      { content: "いいえ", nextId: "shoulder13" },
      { content: "前の質問に戻る", nextId: "shoulder11" }
    ],
    question: "階段を降りる時、スムーズに降りられなかったり、下り坂で足がもつれたりしますか？また尿の調子がよくないですか？"
  },
  "shoulder13": {
    answers: [
      { content: "はい", nextId: "#" }, // 変形性頚椎症
      { content: "いいえ", nextId: "#" },// 頚椎椎間板ヘルニア
      { content: "前の質問に戻る", nextId: "shoulder12" }
    ],
    question: "50才以上ですか？"
  },
  "waist": {
    answers: [
      { content: "はい", nextId: "headache_00" },
      { content: "いいえ", nextId: "headache_13" },
      { content: "前の質問に戻る", nextId: "init" }
    ],
    question: "吐き気や吐く、めまいなどの症状がありますか？"
  },
  "knee": {
    answers: [
      { content: "はい", nextId: "headache_00" },
      { content: "いいえ", nextId: "headache_13" },
      { content: "前の質問に戻る", nextId: "init" }
    ],
    question: "吐き気や吐く、めまいなどの症状がありますか？"
  },
};
export default defaultDataset
