export interface Fortune {
  id: number;
  level: string;
  levelLabel: string;
  poem: string[];
  interpretation: string;
  finance: number;
  love: number;
  career: number;
  health: number;
  advice: string;
  luckyNumbers: number[];
  luckyColor: string;
  luckyDirection: string;
}

const fortunes: Fortune[] = [
  {
    id: 1, level: "上上", levelLabel: "大吉",
    poem: ["春風得意花滿枝", "前程似錦步雲梯", "貴人相助逢時節", "萬事亨通在今朝"],
    interpretation: "今日適合大膽行動，有貴人在暗中相助。把握機會，一切順遂。",
    finance: 5, love: 5, career: 5, health: 4,
    advice: "穿暖色系衣服會帶來好運", luckyNumbers: [3, 7], luckyColor: "珊瑚橘", luckyDirection: "東南",
  },
  {
    id: 2, level: "上上", levelLabel: "大吉",
    poem: ["金龍騰雲紫氣來", "千里良緣一線牽", "財源廣進如江海", "福星高照耀門楣"],
    interpretation: "運勢極佳，無論做什麼都能事半功倍。感情方面會有甜蜜驚喜。",
    finance: 5, love: 5, career: 4, health: 5,
    advice: "今天送禮物給在乎的人會加倍回報", luckyNumbers: [8, 18], luckyColor: "金黃", luckyDirection: "正南",
  },
  {
    id: 3, level: "上", levelLabel: "吉",
    poem: ["明月清風伴客行", "溪邊柳色映窗明", "一帆風順千帆過", "好事連連在途程"],
    interpretation: "整體運勢穩健上升，工作上有新的突破。保持正向心態，好事將至。",
    finance: 4, love: 4, career: 5, health: 4,
    advice: "今日適合展開新計畫", luckyNumbers: [2, 9], luckyColor: "天藍", luckyDirection: "正東",
  },
  {
    id: 4, level: "上", levelLabel: "吉",
    poem: ["桃花盛開映日紅", "笑語盈盈滿春風", "有緣千里來相會", "佳期已近莫匆匆"],
    interpretation: "桃花運旺盛，單身者容易遇到心儀對象。已有伴侶者感情加溫。",
    finance: 3, love: 5, career: 4, health: 4,
    advice: "穿粉色系衣服增強桃花運", luckyNumbers: [5, 14], luckyColor: "桃粉", luckyDirection: "正西",
  },
  {
    id: 5, level: "上", levelLabel: "吉",
    poem: ["寶劍鋒從磨礪出", "梅花香自苦寒來", "十年辛苦無人問", "一舉成名天下知"],
    interpretation: "之前的努力即將得到回報，堅持到底就是勝利。今日會有好消息傳來。",
    finance: 4, love: 3, career: 5, health: 4,
    advice: "回顧過去的努力，給自己一份獎勵", luckyNumbers: [1, 10], luckyColor: "深紅", luckyDirection: "東北",
  },
  {
    id: 6, level: "上", levelLabel: "吉",
    poem: ["瑞雪初融大地春", "百花齊放滿園新", "喜鵲枝頭聲聲唱", "吉祥如意伴此身"],
    interpretation: "新的開始帶來好運，今日做決定特別明智。",
    finance: 4, love: 4, career: 4, health: 5,
    advice: "清晨散步能帶來意想不到的靈感", luckyNumbers: [6, 12], luckyColor: "翡翠綠", luckyDirection: "西北",
  },
  {
    id: 7, level: "中上", levelLabel: "小吉",
    poem: ["雲開霧散見青天", "水到渠成事自然", "莫道前路多險阻", "柳暗花明又一村"],
    interpretation: "困難即將過去，柳暗花明。耐心等待，轉機就在眼前。",
    finance: 3, love: 4, career: 4, health: 4,
    advice: "遇到困難不要放棄，堅持就對了", luckyNumbers: [4, 11], luckyColor: "湖水藍", luckyDirection: "正北",
  },
  {
    id: 8, level: "中上", levelLabel: "小吉",
    poem: ["東風漸起暖洋洋", "草長鶯飛二月天", "且待時機方出手", "一鳴驚人萬眾歡"],
    interpretation: "準備充分後再出手，時機未到不要急躁。好運正在醞釀中。",
    finance: 3, love: 3, career: 4, health: 5,
    advice: "今天適合學習新知識", luckyNumbers: [7, 21], luckyColor: "暖黃", luckyDirection: "西南",
  },
  {
    id: 9, level: "中", levelLabel: "平",
    poem: ["淡泊明志守本心", "寧靜致遠悟真經", "世間萬物皆有時", "花開花落自有情"],
    interpretation: "運勢平穩，適合休養生息。不宜做重大決定，靜觀其變為上策。",
    finance: 3, love: 3, career: 3, health: 3,
    advice: "今日適合閱讀和冥想", luckyNumbers: [0, 5], luckyColor: "米白", luckyDirection: "中宮",
  },
  {
    id: 10, level: "中", levelLabel: "平",
    poem: ["風平浪靜水如鏡", "雲淡天高月正明", "守得安穩方為福", "不爭不搶自太平"],
    interpretation: "今日一切平順，沒有大起大落。保持現狀就好，不需刻意求變。",
    finance: 3, love: 3, career: 3, health: 4,
    advice: "整理房間會讓心情變好", luckyNumbers: [2, 6], luckyColor: "灰藍", luckyDirection: "東南",
  },
  {
    id: 11, level: "中", levelLabel: "平",
    poem: ["秋水共長天一色", "落霞與孤鶩齊飛", "人生得失常相伴", "隨遇而安最從容"],
    interpretation: "順其自然是今日最好的態度。不要強求，該來的會來。",
    finance: 3, love: 3, career: 3, health: 3,
    advice: "和老朋友聊聊天會有新收穫", luckyNumbers: [9, 15], luckyColor: "淺灰", luckyDirection: "正西",
  },
  {
    id: 12, level: "中下", levelLabel: "小凶",
    poem: ["烏雲蔽日暫無光", "且忍一時待天晴", "退一步海闊天空", "莫讓小事亂心房"],
    interpretation: "今日容易遇到小挫折，但都不是大事。退一步想就豁然開朗。",
    finance: 2, love: 3, career: 2, health: 3,
    advice: "避免與人爭論，忍讓為上", luckyNumbers: [1, 4], luckyColor: "深藍", luckyDirection: "正北",
  },
  {
    id: 13, level: "中下", levelLabel: "小凶",
    poem: ["風急天高猿嘯哀", "渚清沙白鳥飛回", "暫時低谷勿心急", "否極泰來春自開"],
    interpretation: "運勢稍有低迷，但這是暫時的。做好準備，好運很快就來。",
    finance: 2, love: 2, career: 3, health: 3,
    advice: "今天早點休息，養精蓄銳", luckyNumbers: [3, 8], luckyColor: "黑色", luckyDirection: "西南",
  },
  {
    id: 14, level: "下", levelLabel: "凶",
    poem: ["山高路遠霧茫茫", "獨行千里心徬徨", "但存方寸有乾坤", "守靜安心自安康"],
    interpretation: "今日宜靜不宜動，重要事情請延後處理。保重身體，早睡早起。",
    finance: 2, love: 2, career: 2, health: 2,
    advice: "今天不宜做重大決定，靜心等待", luckyNumbers: [0, 2], luckyColor: "白色", luckyDirection: "中宮",
  },
  {
    id: 15, level: "上上", levelLabel: "大吉",
    poem: ["紫氣東來滿堂彩", "鳳凰于飛百鳥朝", "功成名就在今日", "富貴榮華步步高"],
    interpretation: "大吉大利！今天做什麼都會成功，把握住每一個機會。",
    finance: 5, love: 4, career: 5, health: 5,
    advice: "大膽表達自己的想法", luckyNumbers: [8, 16], luckyColor: "正紅", luckyDirection: "正東",
  },
  {
    id: 16, level: "上", levelLabel: "吉",
    poem: ["竹影搖曳映書窗", "琴聲悠揚入夢鄉", "心靈手巧多才藝", "藝海無涯樂徜徉"],
    interpretation: "創意靈感爆發的一天，適合從事藝術創作或學習新技能。",
    finance: 3, love: 4, career: 5, health: 4,
    advice: "動手做一件有創意的事", luckyNumbers: [4, 13], luckyColor: "紫羅蘭", luckyDirection: "東北",
  },
  {
    id: 17, level: "中上", levelLabel: "小吉",
    poem: ["春江水暖鴨先知", "細雨微風燕子飛", "平淡之中有真味", "小確幸裡見真意"],
    interpretation: "生活中的小事會帶來溫暖和感動。珍惜身邊的人和事。",
    finance: 3, love: 4, career: 3, health: 4,
    advice: "買一杯好咖啡犒賞自己", luckyNumbers: [5, 17], luckyColor: "奶茶棕", luckyDirection: "正南",
  },
  {
    id: 18, level: "上", levelLabel: "吉",
    poem: ["旭日東昇萬象新", "千山萬水任我行", "胸懷壯志凌雲起", "乘風破浪正當時"],
    interpretation: "充滿能量和動力的一天！放膽去追求你的目標。",
    finance: 4, love: 3, career: 5, health: 5,
    advice: "今天運動會特別有效果", luckyNumbers: [1, 19], luckyColor: "亮橘", luckyDirection: "正東",
  },
  {
    id: 19, level: "中上", levelLabel: "小吉",
    poem: ["繁花似錦春如畫", "蝴蝶翩翩舞芳華", "用心耕耘終有報", "靜待花開滿天涯"],
    interpretation: "付出的努力正在慢慢結果，不要心急，繼續保持。",
    finance: 3, love: 4, career: 4, health: 3,
    advice: "寫下三件感恩的事", luckyNumbers: [6, 22], luckyColor: "薰衣草紫", luckyDirection: "西北",
  },
  {
    id: 20, level: "中", levelLabel: "平",
    poem: ["半山煙雨半山晴", "世事無常莫較真", "且將新火試新茶", "詩酒趁年華"],
    interpretation: "凡事不要太執著，放輕鬆反而更好。享受當下就好。",
    finance: 3, love: 3, career: 3, health: 3,
    advice: "泡一壺好茶放鬆心情", luckyNumbers: [0, 10], luckyColor: "茶褐", luckyDirection: "中宮",
  },
  {
    id: 21, level: "上上", levelLabel: "大吉",
    poem: ["天賜良機不可失", "雲開見月正當時", "貴人指路通四海", "鴻運當頭萬事宜"],
    interpretation: "千載難逢的好機會即將到來！睜大眼睛，抓住它！",
    finance: 5, love: 4, career: 5, health: 4,
    advice: "今天見到的第一個陌生人可能是你的貴人", luckyNumbers: [9, 28], luckyColor: "琥珀金", luckyDirection: "東南",
  },
  {
    id: 22, level: "上", levelLabel: "吉",
    poem: ["月明星稀烏鵲南", "良辰美景盡開顏", "舉杯邀月共此時", "人生快意在今天"],
    interpretation: "適合社交和聚會的一天，與朋友相聚會帶來好運。",
    finance: 4, love: 5, career: 3, health: 4,
    advice: "約朋友出去走走聊聊", luckyNumbers: [7, 15], luckyColor: "月白", luckyDirection: "正西",
  },
  {
    id: 23, level: "中上", levelLabel: "小吉",
    poem: ["春蠶到死絲方盡", "蠟炬成灰淚始乾", "一分耕耘一分收", "默默付出終被見"],
    interpretation: "你的默默付出終將被看見，不需要刻意表現，真心最重要。",
    finance: 3, love: 4, career: 4, health: 3,
    advice: "對身邊的人說一句感謝的話", luckyNumbers: [2, 11], luckyColor: "珍珠白", luckyDirection: "東北",
  },
  {
    id: 24, level: "中", levelLabel: "平",
    poem: ["閒雲野鶴自由行", "不問東西不問名", "人生百態皆風景", "隨心所欲度此生"],
    interpretation: "不需要刻意追求什麼，隨心所欲地過一天也很好。",
    finance: 3, love: 3, career: 3, health: 4,
    advice: "做一件你一直想做但沒做的小事", luckyNumbers: [3, 14], luckyColor: "天青", luckyDirection: "正南",
  },
  {
    id: 25, level: "中下", levelLabel: "小凶",
    poem: ["暗夜行路需提燈", "小心翼翼穩前行", "莫貪近利失遠見", "三思而後再動身"],
    interpretation: "做事要謹慎，不要被眼前利益所迷惑。三思而行。",
    finance: 2, love: 3, career: 2, health: 3,
    advice: "花錢前多想三秒", luckyNumbers: [1, 6], luckyColor: "墨綠", luckyDirection: "正北",
  },
  {
    id: 26, level: "上", levelLabel: "吉",
    poem: ["玉兔迎春福自來", "東風送暖百花開", "一年之計在於春", "腳踏實地向前邁"],
    interpretation: "適合制定計劃和目標的一天，腳踏實地就能成功。",
    finance: 4, love: 3, career: 5, health: 4,
    advice: "今天寫下你的年度目標", luckyNumbers: [8, 24], luckyColor: "嫩綠", luckyDirection: "正東",
  },
  {
    id: 27, level: "上上", levelLabel: "大吉",
    poem: ["錦鯉躍龍門千丈", "飛黃騰達入青雲", "天時地利人和至", "功名利祿盡歸身"],
    interpretation: "鯉躍龍門！今天是突破自我的最好時機，勇往直前！",
    finance: 5, love: 4, career: 5, health: 5,
    advice: "穿上你最有自信的衣服出門", luckyNumbers: [6, 18], luckyColor: "金紅", luckyDirection: "正南",
  },
  {
    id: 28, level: "中上", levelLabel: "小吉",
    poem: ["松下問童子歸來", "山中無甲子悠哉", "心若安處即故鄉", "一念之間見如來"],
    interpretation: "內心的平靜比外在的成功更重要。今天適合反思和內省。",
    finance: 3, love: 3, career: 3, health: 5,
    advice: "花十分鐘靜坐冥想", luckyNumbers: [0, 9], luckyColor: "檀木色", luckyDirection: "西北",
  },
  {
    id: 29, level: "上", levelLabel: "吉",
    poem: ["喜從天降不須求", "一路順風萬里遊", "且看今朝多少事", "都付笑談中悠悠"],
    interpretation: "好消息從天而降！保持開放的心態，驚喜就在轉角。",
    finance: 4, love: 4, career: 4, health: 4,
    advice: "注意手機訊息，可能有好消息", luckyNumbers: [7, 20], luckyColor: "陽光黃", luckyDirection: "東南",
  },
  {
    id: 30, level: "中", levelLabel: "平",
    poem: ["清茶一盞論古今", "舊友重逢話平生", "莫嘆光陰催人老", "珍惜當下每寸金"],
    interpretation: "平淡的一天也可以過得很充實。珍惜與家人朋友的相處時光。",
    finance: 3, love: 4, career: 3, health: 3,
    advice: "打電話給很久沒聯絡的朋友", luckyNumbers: [5, 13], luckyColor: "古銅", luckyDirection: "正西",
  },
  {
    id: 31, level: "上", levelLabel: "吉",
    poem: ["層樓更上望遠方", "風光無限好風光", "志在千里駒奔騰", "英雄當有凌雲想"],
    interpretation: "格局放大，目光放遠。你的能力遠超你的想像。",
    finance: 4, love: 3, career: 5, health: 4,
    advice: "接觸一個新領域的知識", luckyNumbers: [10, 25], luckyColor: "寶藍", luckyDirection: "正東",
  },
  {
    id: 32, level: "中上", levelLabel: "小吉",
    poem: ["細水長流情意深", "不求轟烈求真心", "平凡日子有深味", "相知相守最動人"],
    interpretation: "感情運不錯，平淡中見真情。已有伴侶的人會感到幸福。",
    finance: 3, love: 5, career: 3, health: 4,
    advice: "為在乎的人做一頓飯", luckyNumbers: [2, 14], luckyColor: "玫瑰紅", luckyDirection: "西南",
  },
  {
    id: 33, level: "上上", levelLabel: "大吉",
    poem: ["滿堂花醉三千客", "一劍霜寒十四州", "今日星光特別亮", "萬眾矚目屬於你"],
    interpretation: "你就是今天的主角！不管做什麼都會成為焦點，盡情發光吧！",
    finance: 5, love: 5, career: 5, health: 4,
    advice: "今天適合展示自己的才華", luckyNumbers: [3, 33], luckyColor: "星光銀", luckyDirection: "正南",
  },
  {
    id: 34, level: "中", levelLabel: "平",
    poem: ["雨後初晴彩虹現", "風吹麥浪金滿田", "不急不徐隨緣走", "自有花開在眼前"],
    interpretation: "一切都在按照該有的節奏發展，不需要著急。",
    finance: 3, love: 3, career: 3, health: 4,
    advice: "散步到平時不會去的地方看看", luckyNumbers: [4, 16], luckyColor: "彩虹色", luckyDirection: "中宮",
  },
  {
    id: 35, level: "中下", levelLabel: "小凶",
    poem: ["霜降寒風入骨涼", "孤燈獨影對寒窗", "且將冷暖記心頭", "明日東風暖意長"],
    interpretation: "今天可能會感到些許孤單或疲憊，但這只是暫時的低潮。",
    finance: 2, love: 2, career: 3, health: 2,
    advice: "泡個熱水澡好好休息", luckyNumbers: [1, 8], luckyColor: "暖灰", luckyDirection: "正北",
  },
  {
    id: 36, level: "上", levelLabel: "吉",
    poem: ["千里之行始足下", "萬丈高樓平地起", "今日種下一粒種", "來年收穫滿倉米"],
    interpretation: "今天播下的種子，未來會結出豐碩的果實。現在的每一步都很重要。",
    finance: 4, love: 3, career: 4, health: 4,
    advice: "開始一個你一直拖延的計畫", luckyNumbers: [6, 19], luckyColor: "土黃", luckyDirection: "東北",
  },
  {
    id: 37, level: "上上", levelLabel: "大吉",
    poem: ["九天攬月摘星辰", "四海之內皆朋友", "機遇叩門正此時", "乘龍快婿展鵬程"],
    interpretation: "超級好運！事業、愛情雙豐收。社交圈會帶來意想不到的機會。",
    finance: 5, love: 5, career: 5, health: 5,
    advice: "今天說出你心裡想說的話", luckyNumbers: [9, 27], luckyColor: "帝王紫", luckyDirection: "東南",
  },
  {
    id: 38, level: "中上", levelLabel: "小吉",
    poem: ["書中自有黃金屋", "筆下生花錦繡文", "學海無涯勤是岸", "今日進步一小分"],
    interpretation: "學習運極佳！今天學到的東西會在未來大派用場。",
    finance: 3, love: 3, career: 4, health: 4,
    advice: "讀一篇有深度的文章", luckyNumbers: [4, 12], luckyColor: "墨黑", luckyDirection: "正東",
  },
  {
    id: 39, level: "中", levelLabel: "平",
    poem: ["波瀾不驚水自流", "歲月靜好度春秋", "莫問前路多少程", "且行且珍惜當頭"],
    interpretation: "平穩的一天，不好不壞。享受生活中的小確幸。",
    finance: 3, love: 3, career: 3, health: 3,
    advice: "早睡一小時明天會更好", luckyNumbers: [5, 10], luckyColor: "奶油白", luckyDirection: "正西",
  },
  {
    id: 40, level: "下", levelLabel: "凶",
    poem: ["風雨交加夜漫漫", "歸途迢迢路難堪", "忍過今宵天自亮", "守得雲開月復圓"],
    interpretation: "今天不太順利，但黑夜終將過去。避免衝動行事，多休息。",
    finance: 1, love: 2, career: 2, health: 2,
    advice: "今日諸事不宜，宜靜養", luckyNumbers: [0, 3], luckyColor: "深灰", luckyDirection: "中宮",
  },
  {
    id: 41, level: "上", levelLabel: "吉",
    poem: ["南風薰薰入夢來", "一樹花開滿院栽", "吉人自有天相助", "無須擔憂自安排"],
    interpretation: "有吉星護佑，遇到問題都能逢凶化吉。放輕鬆，一切會好的。",
    finance: 4, love: 4, career: 4, health: 5,
    advice: "相信直覺，它今天特別準", luckyNumbers: [7, 23], luckyColor: "薄荷綠", luckyDirection: "正南",
  },
  {
    id: 42, level: "中上", levelLabel: "小吉",
    poem: ["采菊東籬下悠然", "見山是山見水閒", "放下執念方自在", "清風明月兩相歡"],
    interpretation: "放下執念，你會發現世界更加美好。今天適合放空。",
    finance: 3, love: 4, career: 3, health: 5,
    advice: "到大自然裡走走", luckyNumbers: [2, 16], luckyColor: "草綠", luckyDirection: "西北",
  },
  {
    id: 43, level: "上", levelLabel: "吉",
    poem: ["青山不墨千秋畫", "流水無弦萬古琴", "今日心開見大道", "豁然開朗步乾坤"],
    interpretation: "靈感和智慧的一天，腦中會浮現絕妙的想法。把它記下來！",
    finance: 4, love: 3, career: 5, health: 4,
    advice: "隨身攜帶筆記本記錄靈感", luckyNumbers: [8, 26], luckyColor: "靛藍", luckyDirection: "正東",
  },
  {
    id: 44, level: "中", levelLabel: "平",
    poem: ["一壺濁酒喜相逢", "古今多少事笑中", "莫問明日風和雨", "且把今朝酒杯空"],
    interpretation: "今天適合放下壓力，與知心好友小酌一番。",
    finance: 3, love: 3, career: 3, health: 3,
    advice: "少看手機多看看身邊的人", luckyNumbers: [4, 11], luckyColor: "琥珀", luckyDirection: "西南",
  },
  {
    id: 45, level: "上上", levelLabel: "大吉",
    poem: ["鳳鳴岐山天下知", "麒麟踏雲降祥瑞", "百年修得今日緣", "福慧雙至喜盈門"],
    interpretation: "極為罕見的好運！福氣和智慧同時到來，今日做什麼都順！",
    finance: 5, love: 5, career: 5, health: 5,
    advice: "把好運分享給身邊的人", luckyNumbers: [8, 88], luckyColor: "金紅", luckyDirection: "正南",
  },
  {
    id: 46, level: "中上", levelLabel: "小吉",
    poem: ["野渡無人舟自橫", "閒來垂釣碧溪清", "不求魚蝦滿簍去", "只願心中一片明"],
    interpretation: "不要太在意結果，享受過程更重要。今天適合做自己喜歡的事。",
    finance: 3, love: 3, career: 3, health: 4,
    advice: "做一件純粹為了快樂的事", luckyNumbers: [3, 15], luckyColor: "碧綠", luckyDirection: "正北",
  },
  {
    id: 47, level: "上", levelLabel: "吉",
    poem: ["龍吟虎嘯風雲會", "英雄豪傑聚一堂", "群策群力成大事", "團結就是力量強"],
    interpretation: "團隊合作運極佳！今天與他人合作會創造出驚人的成果。",
    finance: 4, love: 4, career: 5, health: 4,
    advice: "主動幫助同事或朋友", luckyNumbers: [5, 20], luckyColor: "海軍藍", luckyDirection: "東北",
  },
  {
    id: 48, level: "中", levelLabel: "平",
    poem: ["日出而作日落息", "春種秋收自有時", "不慌不忙依節令", "安分守己最為宜"],
    interpretation: "按部就班最安心。不要打破常規，穩穩的就好。",
    finance: 3, love: 3, career: 3, health: 4,
    advice: "今天按照計畫行事就好", luckyNumbers: [2, 8], luckyColor: "卡其", luckyDirection: "中宮",
  },
  {
    id: 49, level: "中下", levelLabel: "小凶",
    poem: ["秋風蕭瑟落葉紛", "獨坐窗前思故人", "人生聚散終有時", "莫為離別太傷神"],
    interpretation: "可能會有些感傷，但這是成長的一部分。允許自己難過一下。",
    finance: 2, love: 2, career: 3, health: 3,
    advice: "聽一首舒緩的音樂", luckyNumbers: [1, 9], luckyColor: "橄欖綠", luckyDirection: "正西",
  },
  {
    id: 50, level: "上", levelLabel: "吉",
    poem: ["桂花飄香十里聞", "蟾宮折桂正逢春", "苦讀寒窗今朝報", "金榜題名天下聞"],
    interpretation: "考試、面試、比賽運極佳！今天展現實力的好日子。",
    finance: 4, love: 3, career: 5, health: 4,
    advice: "帶一支好看的筆增加自信", luckyNumbers: [6, 18], luckyColor: "桂花黃", luckyDirection: "正東",
  },
  {
    id: 51, level: "上上", levelLabel: "大吉",
    poem: ["天降甘霖潤萬物", "地生瑞草映朝暉", "左右逢源皆如意", "上下和睦共春輝"],
    interpretation: "天時地利人和齊全！做任何事都會得到支持和幫助。",
    finance: 5, love: 5, career: 5, health: 4,
    advice: "趁今天的好運去做一直想做的事", luckyNumbers: [7, 21], luckyColor: "翠綠", luckyDirection: "東南",
  },
  {
    id: 52, level: "中上", levelLabel: "小吉",
    poem: ["清晨露珠掛枝頭", "朝陽初升萬物柔", "新的一天新希望", "微笑面對解千愁"],
    interpretation: "保持微笑，今天會比你想像的更好。正能量會吸引好事。",
    finance: 3, love: 4, career: 4, health: 4,
    advice: "對鏡子裡的自己微笑三次", luckyNumbers: [3, 12], luckyColor: "晨曦橘", luckyDirection: "正東",
  },
  {
    id: 53, level: "中", levelLabel: "平",
    poem: ["竹籬茅舍小橋旁", "炊煙裊裊飯菜香", "簡單日子最踏實", "粗茶淡飯也甘甜"],
    interpretation: "簡單就是幸福。今天適合享受平凡生活中的美好。",
    finance: 3, love: 3, career: 3, health: 4,
    advice: "自己動手做一頓簡單的飯", luckyNumbers: [4, 10], luckyColor: "米色", luckyDirection: "西南",
  },
  {
    id: 54, level: "上", levelLabel: "吉",
    poem: ["雄鷹展翅九萬里", "扶搖直上雲霄際", "莫言此路多艱難", "大鵬展翅恨天低"],
    interpretation: "野心和行動力的一天！不要被現實限制你的夢想。",
    finance: 4, love: 3, career: 5, health: 5,
    advice: "設定一個看似不可能的目標", luckyNumbers: [9, 30], luckyColor: "天際藍", luckyDirection: "正南",
  },
  {
    id: 55, level: "中下", levelLabel: "小凶",
    poem: ["薄霧濃雲愁永晝", "瑞腦銷金獸消受", "莫愁前路無知己", "天涯何處不逢秋"],
    interpretation: "心情可能有些低落，但請記住，這世上有人懂你。",
    finance: 2, love: 2, career: 2, health: 3,
    advice: "向信任的人傾訴心事", luckyNumbers: [1, 7], luckyColor: "煙灰", luckyDirection: "正北",
  },
  {
    id: 56, level: "上", levelLabel: "吉",
    poem: ["水晶宮裡月華明", "海底龍王送寶呈", "意外之財從天降", "喜事連連笑盈盈"],
    interpretation: "偏財運不錯！可能會有意外的小收穫或禮物。",
    finance: 5, love: 4, career: 3, health: 4,
    advice: "檢查一下有沒有被遺忘的紅包", luckyNumbers: [8, 28], luckyColor: "寶石藍", luckyDirection: "正北",
  },
  {
    id: 57, level: "中上", levelLabel: "小吉",
    poem: ["畫堂春曉燕歸來", "花前月下情自開", "有情人終成眷屬", "緣定三生共此懷"],
    interpretation: "感情運上升中！有對象的人感情升溫，單身的人注意身邊的人。",
    finance: 3, love: 5, career: 3, health: 4,
    advice: "勇敢表達你的心意", luckyNumbers: [2, 14], luckyColor: "櫻花粉", luckyDirection: "西南",
  },
  {
    id: 58, level: "中", levelLabel: "平",
    poem: ["白雲悠悠隨風飄", "青山依舊水長繞", "何必匆忙趕路程", "停下腳步看風景"],
    interpretation: "慢下來，你一直在趕路但忘了看風景。今天給自己一個暫停。",
    finance: 3, love: 3, career: 3, health: 4,
    advice: "今天走路慢一點", luckyNumbers: [5, 11], luckyColor: "雲白", luckyDirection: "中宮",
  },
  {
    id: 59, level: "上", levelLabel: "吉",
    poem: ["黃金遍地不須愁", "智者見機先下手", "人棄我取終獲利", "逆勢而行得千秋"],
    interpretation: "別人看不到的機會，你能看到。相信自己的判斷。",
    finance: 5, love: 3, career: 4, health: 4,
    advice: "做一個與眾不同的選擇", luckyNumbers: [6, 22], luckyColor: "古銅金", luckyDirection: "東北",
  },
  {
    id: 60, level: "上上", levelLabel: "大吉",
    poem: ["滿園春色關不住", "一枝紅杏出牆來", "天命所歸運勢旺", "萬般美好皆展開"],
    interpretation: "運勢擋都擋不住！好運自然而然地來到你身邊。盡情享受吧！",
    finance: 5, love: 5, career: 5, health: 5,
    advice: "今天買彩券說不定有驚喜", luckyNumbers: [8, 36], luckyColor: "正紅金邊", luckyDirection: "正南",
  },
];

export default fortunes;

// Seed-based random number generator
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function getFortuneForToday(deviceId: string): Fortune {
  const today = new Date();
  const dateStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  
  // Create a numeric seed from date + deviceId
  let seed = 0;
  const combined = dateStr + deviceId;
  for (let i = 0; i < combined.length; i++) {
    seed = ((seed << 5) - seed) + combined.charCodeAt(i);
    seed |= 0;
  }
  
  const index = Math.floor(Math.abs(seededRandom(seed)) * fortunes.length);
  return fortunes[index];
}

export function getDeviceId(): string {
  const key = 'fortune-device-id';
  let id = localStorage.getItem(key);
  if (!id) {
    id = Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem(key, id);
  }
  return id;
}
