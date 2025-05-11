import type { Idiom } from "@/types/idiom"

export const categories = [
  "All",
  "Animals",
  "Strategy",
  "Caution",
  "Perseverance",
  "War",
  "Knowledge"
]

export const idioms: Idiom[] = [
  {
    id: 1,
    chinese: "留得青山在 不怕没柴烧",
    pinyin: "liú dé qīng shān zài, bù pà méi chái shāo",
    literalTranslation: "As long as the green hills remain, there will be firewood to burn",
    meaning: "If the foundation or essential resources are preserved, future opportunities will always arise. This saying reminds us that preserving core strength or resources will ensure survival and a path forward, even after hardship or failure.",
    categories: ["Perseverance"],
  },

  {
    id: 2,
    chinese: "过了这个村就没有这个店",
    pinyin: "guò le zhè gè cūn jiù méi yǒu zhè gè diàn",
    literalTranslation: "Once you pass this village, there will be no such store",
    meaning: "Don't miss an opportunity, it might not come again. Used to emphasize the fleeting nature of chances; like a lone shop in a rural village, once passed, there’s no turning back.",
    categories: ["Strategy"],
  },

  {
    id: 3,
    chinese: "塞翁失马",
    pinyin: "sài wēng shī mǎ",
    literalTranslation: "Sai Weng lost his horse",
    meaning: "A blessing in disguise; misfortune may be an actual blessing",
    story:
      "An old man living near the northern border of ancient China once lost his horse, which ran away. His neighbors came to comfort him, but the old man wasn't worried, saying, 'Who knows if this is a misfortune?' A few days later, the horse returned with several wild horses. The neighbors congratulated him, but the old man said, 'Who knows if this is a blessing?' Later, the old man's son broke his leg while taming one of the wild horses. Again, the neighbors offered sympathy, and again the old man was philosophical. Soon after, a war broke out, and all able-bodied young men were drafted to fight, but the son was exempted because of his broken leg, thus saving his life.",
    categories: ["Animals", "War"],
  },

  {
    id: 4,
    chinese: "读万卷书不如行万里路",
    pinyin: "dú wàn juàn shū bù rú xíng wàn lǐ lù",
    literalTranslation: "Reading 10,000 books is not as good as walking 10,000 miles",
    meaning: "Experience is more valuable than theoretical knowledge. It is important to get out into the world.",
    categories: ["Knowledge"],
  },

  {
    id: 5,
    chinese: "害人之心不可有 防人之心不可无",
    pinyin: "hài rén zhī xīn bù kě yǒu, fáng rén zhī xīn bù kě wú",
    literalTranslation: "One should not have the intention to harm others, but must be wary of being harmed",
    meaning: "Be kind, but stay cautious. Promotes a balance of goodwill and self-protection — while we shouldn’t wish others harm, we also shouldn't be naive.",
    categories: ["Caution"],
  },

  {
    id: 6,
    chinese: "天降大任于斯人也",
    pinyin: "Tiān jiàng dàrèn yú sī rén yě",
    literalTranslation: "Heaven gives great responsibility by first making one suffer",
    meaning: "Great responsibility comes after great hardship and endurance. To prepare someone for greatness, they must endure suffering to build strength and resolve.",
    categories: ["Perseverance"],
  },

  {
    id: 7,
    chinese: "路遥知马力 日久见人心",
    pinyin: "lù yáo zhī mǎlì, rì jiǔ jiàn rénxīn",
    literalTranslation: "Distance tests a horse's strength; time reveals a person’s heart",
    meaning: "Character is revealed over time. Just as a horse’s endurance is tested by a long journey, so too is a person’s true nature revealed by time and experience.",
    categories: ["Animals", "Knowledge"],
  },

  {
    id: 8,
    chinese: "不入虎穴 焉得虎子",
    pinyin: "bù rù hǔxué, yān dé hǔ zǐ",
    literalTranslation: "No enter tiger den, no get tiger baby.",
    meaning: "No risk, no reward.",
    categories: ["Animals", "Courage"],
  },

  {
    id: 9,
    chinese: "狡兔三窟",
    pinyin: "jiǎo tù sān kū",
    literalTranslation: "A crafty rabbit has three burrows",
    meaning: "Always have multiple backup plans. Like a clever rabbit with multiple hiding places, a wise person prepares several options in case something goes wrong.",
    categories: ["Animals", "Strategy"],
  },

  {
    id: 10,
    chinese: "卸磨杀驴",
    pinyin: "xiè mò shā lǘ",
    literalTranslation: "Kill the donkey after the grinding is done",
    meaning: "Discard someone after they’ve served their purpose. This chengyu criticizes those who exploit others and then abandon them when they're no longer needed.",
    categories: ["Animals"],
    audioUrl: "/audio/xiemoshalu.m4a"
  },

  {
    id: 11,
    chinese: "鸡毛蒜皮",
    pinyin: "jī máo suàn pí",
    literalTranslation: "Chicken feathers and garlic skins",
    meaning: "Trivial matters; unimportant things. Used to describe arguments or concerns over things that are too small or insignificant to matter.",
    categories: [],
    audioUrl: "/audio/jimaosuanpi.m4a"
  },

  {
    id: 12,
    chinese: "人心不足蛇吞象",
    pinyin: "Rénxīn bùzú shé tūn xiàng",
    literalTranslation: "Greedy snake swallows elephant",
    meaning: "Warning against greed or overreaching beyond one's capacity. Greed can lead to self-destruction, as shown by the impossibility of a snake trying to consume an elephant.",
    categories: ["Animals"],
    audioUrl: "/audio/renxinbuzu.m4a"
  },

  {
    id: 13,
    chinese: "骑虎难下",
    pinyin: "qí hǔ nán xià",
    literalTranslation: "Difficult to get off a tiger once riding it",
    meaning: "Caught in a difficult situation that’s hard to escape from. Once you’re in a risky or dangerous situation, it’s hard to back out without consequences.",
    categories: ["Animals", "Strategy", "Caution"],
    audioUrl: "/audio/qihunanxia.m4a"
  },

  {
    id: 14,
    chinese: "一朝被蛇咬 十年怕草绳",
    pinyin: "yī zhāo bèi shé yǎo, shí nián pà cǎo shéng",
    literalTranslation: "Once bitten by a snake, fear rope for ten years",
    meaning: "Trauma can lead to lasting fear, even of harmless things. Describes how past painful experiences can make someone overly cautious or fearful, even when danger isn’t present.",
    categories: ["Animals"],
    audioUrl: "/audio/yizhaobeishe.m4a"
  },

  {
    id: 15,
    chinese: "人不为己 天诛地灭",
    pinyin: "rén bù wéi jǐ, tiān zhū dì miè",
    literalTranslation: "If a person doesn’t look out for themselves, heaven and earth will destroy them",
    meaning: "Take care of yourself first and foremost. Stresses the importance of self-preservation and prioritizing your own wellbeing in a harsh world.",
    categories: ["Self"],
    audioUrl: "/audio/renbuweiji.m4a"
  },

  {
    id: 16,
    chinese: "知己知彼 百战百胜",
    pinyin: "zhī jǐ zhī bǐ, bǎi zhàn bǎi shèng",
    literalTranslation: "Know yourself and your enemy; win every battle",
    meaning: "Success comes from understanding both sides.",
    story:
      "From Sun Tzu’s Art of War — victory comes from a deep understanding of both your own strengths and your opponent’s weaknesses.",
    categories: ["War", "Strategy", "Knowledge"],
    audioUrl: "/audio/zhijizhibi.m4a"
  },

  {
    id: 17,
    chinese: "伸头是一刀，缩头也是一刀",
    pinyin: "shēn tóu shì yī dāo, suō tóu yě shì yī dāo",
    literalTranslation: "Stick out your head or lower it, it's still a knife",
    meaning: "When you're doomed either way, choose the path of dignity. Used in situations where a person must face difficulty either way. It encourages facing challenges bravely when the outcome is inevitable.",
    categories: ["Courage"],
    audioUrl: "/audio/shentouyidao.m4a"
  },

  {
    id: 18,
    chinese: "退一步海阔天空",
    pinyin: "tuì yī bù hǎi kuò tiān kōng",
    literalTranslation: "Take a step back and the sea and sky widen",
    meaning: "Sometimes taking a step back opens up new possibilities. This saying reminds us that retreating or compromising in the short term can lead to better long-term outcomes.",
    categories: ["Strategy"],
  },

  {
    id: 19,
    chinese: "三十六计 走为上计",
    pinyin: "sān shí liù jì zǒu wéi shàng jì",
    literalTranslation: "Of the 36 strategies, running away is best",
    meaning: "Sometimes retreat is the wisest move. The final and often smartest strategy is to retreat in order to survive and regroup, rather than lose everything.",
    categories: ["War", "Strategy"],
    audioUrl: "/audio/zouweishangji.m4a"
  },

  {
    id: 20,
    chinese: "兵不厌诈",
    pinyin: "bīng bù yàn zhà",
    literalTranslation: "There could never be enough deception in war.",
    meaning: "All is fair in war; trickery is expected.",
    categories: ["War", "Deception"],
    audioUrl: "/audio/bingbuyanzha.m4a"
  },

  {
    id: 21,
    chinese: "欲擒故纵",
    pinyin: "yù qín gù zòng",
    literalTranslation: "To capture, first let loose",
    meaning: "Pretend to let go in order to gain control. Used in strategy and relationships — pretending to care less in order to win over or control a person or situation.",
    categories: ["War", "Psychology"],
    audioUrl: "/audio/yuqinguzong.m4a"
  },

  {
    id: 22,
    chinese: "当断不断 反受其乱",
    pinyin: "dāng duàn bù duàn, fǎn shòu qí luàn",
    literalTranslation: "If you don’t cut when you should, chaos follows",
    meaning: "Indecisiveness leads to greater problems. This encourages people to make necessary decisions in time, rather than procrastinate and face bigger consequences.",
    categories: ["Leadership"],
    audioUrl: "/audio/dangduanbuduan.m4a"
  },

  {
    id: 23,
    chinese: "疑人不用 用人不疑",
    pinyin: "yí rén bù yòng, yòng rén bù yí",
    literalTranslation: "Don’t use those you distrust, don’t distrust those you use",
    meaning: "Trust is essential in leadership. Leaders should either have complete trust in those they work with or not work with them at all.",
    categories: ["Leadership"],
    audioUrl: "/audio/yirenbuyong.m4a"
  },

  {
    id: 24,
    chinese: "既来之则安之",
    pinyin: "jì lái zhī zé ān zhī",
    literalTranslation: "Since you've come, settle in",
    meaning: "Be at peace with your situation. Once a decision has been made or a place reached, it’s better to adapt and be content than to regret or resist.",
    categories: ["Acceptance"],
    audioUrl: "/audio/jilaizhi.m4a"
  },

  {
    id: 25,
    chinese: "小不忍 则乱大谋",
    pinyin: "xiǎo bù rěn zé luàn dà móu",
    literalTranslation: "Without tolerating small things, big plans get disrupted",
    meaning: "Don't let small irritations ruin big goals. Sometimes, tolerating small annoyances is necessary to achieve larger plans or ambitions.",
    categories: ["Strategy"],
    audioUrl: "/audio/xiaoburen.m4a"
  },

  {
    id: 26,
    chinese: "富贵险中求",
    pinyin: "fù guì xiǎn zhōng qiú",
    literalTranslation: "Wealth and honor are sought through risk",
    meaning: "Great rewards require great risk. To achieve great success, one must be willing to take calculated risks.",
    categories: ["Risk"],
    audioUrl: "/audio/fugui.m4a"
  },

  {
    id: 27,
    chinese: "居安思危 有备无患",
    pinyin: "jū ān sī wēi, yǒu bèi wú huàn",
    literalTranslation: "In peace, think of danger; being prepared avoids trouble",
    meaning: "Stay prepared even in good times. This proverb promotes vigilance and preparation, even when everything seems fine, to prevent future disasters.",
    categories: ["Strategy"],
    audioUrl: "/audio/juansiwei.m4a"
  },
  {
    id: 28,
    chinese: "事出反常必有妖",
    pinyin: "Shì chū fǎncháng bì yǒu yāo",
    literalTranslation: "There must be something wrong when things are abnormal",
    meaning: "Use your common sense and judgement and don’t fall for tricks.",
    categories: [],
    audioUrl: "/audio/shichufanchang.m4a"
  },
  {
    id: 29,
    chinese: "唇亡齿寒",
    pinyin: "chún wáng chǐ hán",
    literalTranslation: "If the lips are gone, the teeth feel the cold",
    meaning: "Two things have a symbiotic relationship; if one falls, the other is at risk.",
    categories: ["War", "Strategy"],
    audioUrl: "/audio/chunwangchihan.m4a"
  }

]
