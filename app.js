/* ══════════════════════════════════════════════════
   DATA – 36 lời chúc cá nhân hóa (9 × 4 vibe)
══════════════════════════════════════════════════ */
const WISHES = {
  game: [
    {
      zh: "祝小企鹅珍珍今晚手感爆棚，局局超神，上分如流水！",
      pinyin: "Zhù Xiǎo Qǐ'é Zhēnzhēn jīn wǎn shǒugǎn bàopéng, jú jú chāoshén, shàng fēn rú liúshuǐ!",
      vi: "Chúc Cánh Cụt Trân Trân tối nay cảm giác tay cực đỉnh, ván nào cũng gánh team, leo rank mượt như nước chảy!"
    },
    {
      zh: "愿我们的珍珍在游戏里所向披靡，大吉大利，今晚吃鸡！",
      pinyin: "Yuàn wǒmen de Zhēnzhēn zài yóuxì lǐ suǒ xiàng pī mǐ, dàjí dàlì, jīn wǎn chī jī!",
      vi: "Chúc Bảo Trân của chúng ta bách chiến bách thắng, đại cát đại lợi, tối nay ăn gà!"
    },
    {
      zh: "祝bzhenn game vui vẻ, đồng đội hỗ trợ thần sầu, đối thủ tự dâng hiến, thắng dễ dàng mọi ván!",
      pinyin: "Zhù bzhenn yóuxì yúkuài, duìyǒu shén zhùgōng, duìshǒu quán báigěi, qīngsōng yíng xià měi yī jú!",
      vi: "Chúc bzhenn chơi game vui vẻ, đồng đội hỗ trợ thần sầu, đối thủ tự dâng hiến, thắng dễ dàng mọi ván!"
    },
    {
      zh: "愿小企鹅欧气满满，开箱全是极品，装备爆不停，快乐无限！",
      pinyin: "Yuàn Xiǎo Qǐ'é ōuqì mǎnmǎn, kāi xiāng quán shì jípǐn, zhuāngbèi bào bù tíng, kuàilè wúxiàn!",
      vi: "Chúc Cánh Cụt nhỏ nhân phẩm tràn đầy, mở rương toàn đồ cực phẩm, trang bị xịn xò, niềm vui vô tận!"
    },
    {
      zh: "祝珍珍游戏畅玩无阻，网速 fly lên, latency wéi líng, cāozuò xiù fān quánchǎng!",
      pinyin: "Zhù Zhēnzhēn yóuxì chàngwán wúzǔ, wǎng sù fēi qǐ, yánchí wéi líng, cāozuò xiù fān quánchǎng!",
      vi: "Chúc Trân Trân chơi game mượt mà không lag, mạng nhanh như bay, ping bằng 0, thao tác đỉnh cao gánh cả team!"
    },
    {
      zh: "愿小企鹅在游戏里收获满满快乐，忘却疲惫，做个开心的大赢家！",
      pinyin: "Yuàn Xiǎo Qǐ'é zài yóuxì lǐ shōuhuò mǎnmǎn kuàilè, wàngquè píbèi, zuò gè kāixīn de dà yíngjiā!",
      vi: "Nguyện Cánh Cụt gặt hái ngập tràn niềm vui trong game, quên hết mệt mỏi, làm người chiến thắng vui vẻ nhất!"
    },
    {
      zh: "祝珍珍神挡杀神，佛挡杀佛，段位飙升，登顶巅峰！",
      pinyin: "Zhù Zhēnzhēn shén dǎng shā shén, fó dǎng shā fó, duànwèi biāo shēng, dēng dǐng diānfēng!",
      vi: "Chúc Trân Trân thần cản sát thần, Phật cản sát Phật, rank tăng vùn vụt, leo thẳng lên đỉnh vinh quang!"
    },
    {
      zh: "愿bzhenn de běnmìng yīngxióng yǒngyuǎn qiángshì, carry quánchǎng, shènglǜ bǎifēnbǎi!",
      pinyin: "Yuàn bzhenn de běnmìng yīngxióng yǒngyuǎn qiángshì, carry quánchǎng, shènglǜ bǎifēnbǎi!",
      vi: "Chúc tướng tủ của bzhenn luôn mạnh mẽ thống trị, gánh team cực đỉnh, tỷ lệ thắng đạt 100%!"
    },
    {
      zh: "祝珍珍的游戏时光充满欢声笑语，玩得开心，快乐最重要！",
      pinyin: "Zhù Zhēnzhēn de yóuxì shíguāng chōngmǎn huān shēng xiào yǔ, wán dé kāixīn, kuàilè zuì zhòngyào!",
      vi: "Chúc Trân Trân có những giờ chơi game ngập tràn tiếng cười, chơi vui vẻ thỏa thích, niềm vui là quan trọng nhất!"
    }
  ],

  movie: [
    {
      zh: "祝小企鹅珍珍观影愉快，零食管够，剧情高燃，看得过瘾！",
      pinyin: "Zhù Xiǎo Qǐ'é Zhēnzhēn guān yǐng yúkuài, língshí guǎn gòu, jùqíng gāo rán, kàn dé guòyǐn!",
      vi: "Chúc Cánh Cụt Trân Trân xem phim cực vui, đồ ăn vặt ngập tràn, cốt truyện siêu cuốn, xem cực đã cực thỏa!"
    },
    {
      zh: "愿珍珍沉浸在精彩的故事里，享受今夜专属的影院时光！",
      pinyin: "Yuàn Zhēnzhēn chénjìn zài jīngcǎi de gùshi lǐ, xiǎngshòu jīn yè zhuānshǔ de yǐngyuàn shíguāng!",
      vi: "Chúc Trân Trân đắm chìm trong những câu chuyện đặc sắc, tận hưởng khoảng thời gian rạp phim độc quyền tối nay!"
    },
    {
      zh: "虽然电影很精彩，但小企鹅也要注意休息，别熬到太晚哦！",
      pinyin: "Suīrán diànyǐng hěn jīngcǎi, dàn Xiǎo Qǐ'é yě yào zhùyì xiūxi, bié áo dào tài wǎn o!",
      vi: "Dù phim hay đến mấy nhưng Cánh Cụt cũng phải chú ý nghỉ ngơi nhé, đừng thức khuya đến 5h sáng đấy!"
    },
    {
      zh: "祝bzhenn今晚追剧不踩雷，看到最治愈的结局，心情美滋滋！",
      pinyin: "Zhù bzhenn jīn wǎn zhuī jù bù cǎi léi, kàn dào zuì zhìyù de jiéjú, xīnqíng měi zī zī!",
      vi: "Chúc bzhenn tối nay cày phim không gặp phim rác, xem được cái kết chữa lành nhất, tâm trạng vui phơi phới!"
    },
    {
      zh: "愿影院的微光带给你温暖，陪小企鹅度过这个惬意的深夜。",
      pinyin: "Yuàn yǐngyuàn de wēiguāng dài gěi nǐ wēnnuǎn, péi Xiǎo Qǐ'é dùguò zhège qièyì de shēnyè.",
      vi: "Nguyện ánh sáng lung linh của màn ảnh mang lại ấm áp, cùng Cánh Cụt đi qua đêm muộn dễ chịu và thật bình yên."
    },
    {
      zh: "熬夜看电影也要记得盖好被子，小企鹅珍珍，今晚你是最佳女主角！",
      pinyin: "Áoyè kàn diànyǐng yě yào jìde gài hǎo bèizi, Xiǎo Qǐ'é Zhēnzhēn, jīn wǎn nǐ shì zuìjiā nǚ zhǔjiǎo!",
      vi: "Thức khuya xem phim cũng nhớ đắp chăn ấm nhé, Cánh Cụt Trân Trân, tối nay em chính là nữ chính xuất sắc nhất!"
    },
    {
      zh: "祝珍珍找到宝藏电影，剧情反转超精彩，快乐双倍！",
      pinyin: "Zhù Zhēnzhēn zhǎodào bǎozàng diànyǐng, jùqíng fǎnzhuǎn chāo jīngcǎi, kuàilè shuāng bèi!",
      vi: "Chúc Trân Trân tìm được bộ phim tâm đắc, tình tiết twist đến bất ngờ, niềm vui nhân đôi nhân ba!"
    },
    {
      zh: "愿电影里所有的温柔与美好，都能在梦里与珍珍相遇。",
      pinyin: "Yuàn diànyǐng lǐ suǒyǒu de wēnróu yǔ měihǎo, dōu néng zài mèng lǐ yǔ Zhēnzhēn xiāngyù.",
      vi: "Nguyện tất cả sự dịu dàng và tốt đẹp trong phim sẽ cùng Trân Trân gặp nhau trong những giấc mơ đêm nay."
    },
    {
      zh: "看完最后这一幕，小企鹅就要乖乖去睡觉啦，晚安，好梦！",
      pinyin: "Kàn wán zuìhòu zhè yī mù, Xiǎo Qǐ'é jiù yào guāiguāi qù shuìjiào la, wǎn'ān, hǎo mèng!",
      vi: "Xem xong phân cảnh cuối này thì Cánh Cụt phải ngoan ngoãn đi ngủ nhé, ngủ ngon và mơ những giấc mộng thật đẹp!"
    }
  ],

  sleep: [
    {
      zh: "月亮眨眨眼，星光暖心田，愿小企鹅珍珍卸下一身疲惫，晚安，做个甜甜的美梦。",
      pinyin: "Yuèliang zhǎ zhǎ yǎn, xīngguāng nuǎn xīn tián, yuàn Xiǎo Qǐ'é Zhēnzhēn xiè xià yīshēn píbèi, wǎn'ān, zuò gè tiántián de měimèng.",
      vi: "Trăng khẽ chớp mắt, ánh sao sưởi ấm tim, nguyện Cánh Cụt Trân Trân trút bỏ mọi mệt mỏi, ngủ ngon và mơ giấc mộng ngọt ngào nhất."
    },
    {
      zh: "愿夜空中の每一颗微星，都化作温和的祝愿，伴我的珍珍安然入睡。",
      pinyin: "Yuàn yèkōng zhōng de měi yī kē wēi xīng, dōu huàzuò wēnhé de zhùyuàn, bàn wǒ de Zhēnzhēn ānrán rù shuì.",
      vi: "Nguyện mỗi ngôi sao nhỏ trên bầu trời đêm hóa thành lời chúc dịu dàng, đưa Bảo Trân của tôi vào giấc ngủ thật yên bình."
    },
    {
      zh: "放下白天的忙碌，让黑夜温柔地拥抱你，祝珍珍睡个好觉，晚安。",
      pinyin: "Fàngxià báitiān de mánglù, ràng hēiyè wēnróu de yōngbào nǐ, zhù Zhēnzhēn shuì gè hǎo jiào, wǎn'ān.",
      vi: "Hãy buông bỏ bận rộn ngày dài, để màn đêm dịu dàng ôm lấy em, chúc Trân Trân ngủ thật ngon, ngủ ngon nhé."
    },
    {
      zh: "愿小企鹅今夜枕着星光入眠，梦里有温暖的阳光和盛开的花朵，晚安。",
      pinyin: "Yuàn Xiǎo Qǐ'é jīn yè zhěn zhe xīngguāng rù mián, mèng lǐ yǒu wēnnuǎn de yángguāng hé shèngkāi de huāduǒ, wǎn'ān.",
      vi: "Nguyện Cánh Cụt đêm nay gối đầu lên ánh sao mà ngủ, trong mơ có nắng ấm và những đóa hoa nở rực rỡ, ngủ ngon."
    },
    {
      zh: "把今天的烦恼都交给夜空，明天又是元气满满的珍珍，晚安，好梦。",
      pinyin: "Bǎ jīntiān de fánnǎo dōu jiāo gěi yèkōng, míngtiān yòu ...",
      vi: "Hãy gửi hết muộn phiền hôm nay cho bầu trời đêm, ngày mai lại là một Trân Trân tràn đầy năng lượng, ngủ ngon và mơ đẹp."
    },
    {
      zh: "愿晚风带走小企鹅的疲惫，月光洒满你的床头，送你一个最温柔的梦境，晚安。",
      pinyin: "Yuàn wǎnfēng dài zǒu Xiǎo Qǐ'é de píbèi, yuèguāng sǎ mǎn nǐ de chuángtóu, sòng nǐ yī gè zuì wēnróu de mèngjìng, wǎn'ān.",
      vi: "Nguyện gió đêm mang đi sự mệt mỏi của Cánh Cụt, ánh trăng rọi sáng đầu giường, gửi em giấc mộng dịu dàng nhất đêm nay."
    },
    {
      zh: "星光闪烁，夜幕降临，愿最宁静的夜色带给珍珍最深沉的睡眠，晚安。",
      pinyin: "Xīngguāng shǎnshuò, yèmù jiànglín, yuàn zuì níngjìng de yèsè dài gěi Zhēnzhēn zuì shēnchén de shuìmián, wǎn'ān.",
      vi: "Sao sáng lấp lánh, màn đêm buông xuống, nguyện đêm tối tĩnh lặng nhất mang đến cho Trân Trân giấc ngủ sâu và ngon nhất."
    },
    {
      zh: "愿bzhenn de mèng lǐ yǒu xīngchén dàhǎi, yǒu nǐ xǐhuān de suǒyǒu wēnróu yǔ měimiào xuánlǜ, wǎn'ān.",
      pinyin: "Yuàn bzhenn de mèng lǐ yǒu xīngchén dàhǎi, yǒu nǐ xǐhuān de suǒyǒu wēnróu yǔ měimiào xuánlǜ, wǎn'ān.",
      vi: "Nguyện trong giấc mơ của bzhenn có biển cả bầu trời sao, có tất cả sự dịu dàng và những giai điệu tuyệt vời nhất."
    },
    {
      zh: "闭上眼睛，静静听风的声音，那是世界在对小企鹅说：晚安，明天见。",
      pinyin: "Bì shàng yǎnjīng, jìngjìng tīng fēng de shēngyīn, nà shì shìjiè zài duì Xiǎo Qǐ'é shuō: wǎn'ān, míngtiān jiàn.",
      vi: "Nhắm mắt lại, lặng nghe tiếng gió rì rào, đó là thế giới đang thầm thì với Cánh Cụt: Ngủ ngon, ngày mai gặp lại."
    }
  ],

  yaxuan: [
    {
      zh: "愿珍珍追星快乐，宋亚轩的每一个笑容都治愈你的每一天！",
      pinyin: "Yuàn Zhēnzhēn zhuī xīng kuàilè, Sòng Yàxuān de měi yī gè xiàoróng dōu zhìyù nǐ de měi yī tiān!",
      vi: "Chúc Trân Trân theo đuổi idol vui vẻ, mỗi nụ cười của Tống Á Hiên đều chữa lành từng ngày của em!"
    },
    {
      zh: "祝珍珍永远是宋亚轩最可爱的小粉丝，追星路上快乐无边！",
      pinyin: "Zhù Zhēnzhēn yǒngyuǎn... Sòng Yàxuān zuì kě'ài de xiǎo fěnsī...",
      vi: "Chúc Trân Trân mãi mãi là fan dễ thương nhất của Tống Á Hiên, con đường theo đuổi idol tràn đầy hạnh phúc!"
    },
    {
      zh: "愿小企鹅每次看到亚轩的视频都元气满满，笑容灿烂如春光！",
      pinyin: "Yuàn Xiǎo Qǐ'é měi cì kàn dào Yàxuān de... dōu yuánqì mǎnmǎn...",
      vi: "Nguyện Cánh Cụt mỗi lần xem clip của Á Hiên đều tràn đầy năng lượng, nụ cười rạng rỡ như ánh xuân!"
    },
    {
      zh: "祝bzhenn与亚轩的每一次相遇都成为珍贵的记忆，快乐永远！",
      pinyin: "Zhù bzhenn... Yàxuān de měi yī cì xiāngyù dōu...",
      vi: "Chúc bzhenn mỗi lần gặp gỡ Á Hiên đều trở thành ký ức quý giá, niềm vui mãi mãi!"
    },
    {
      zh: "愿追星的珍珍永远保持初心，宋亚轩的阳光永远照亮你的世界！",
      pinyin: "Yuàn zhuī xīng de Zhēnzhēn yǒngyuǎn bǎochí chūxīn, Sòng Yàxuān de yángguāng yǒngyuǎn zhàoliàng nǐ de shìjiè!",
      vi: "Nguyện Trân Trân theo đuổi idol luôn giữ vững sơ tâm, ánh nắng của Tống Á Hiên mãi soi sáng thế giới của em!"
    },
    {
      zh: "祝珍珍每天都能收到亚轩的好消息，满满的幸福感装不下！",
      pinyin: "Zhù Zhēnzhēn měitiān dōu néng shōudào Yàxuān de hǎo xiāoxi, mǎnmǎn de xìngfú gǎn zhuāng bù xià!",
      vi: "Chúc Trân Trân mỗi ngày đều nhận được tin tức vui về Á Hiên, hạnh phúc ngập tràn chứa không hết!"
    },
    {
      zh: "愿小企鹅的追星之路越走越宽，收获满满，快乐比星星还 do!",
      pinyin: "Yuàn Xiǎo Qǐ'é de zhuī xīng zhī lù yuè zǒu yuè kuān, shōuhuò mǎnmǎn, kuàilè bǐ xīngxīng hái duō!",
      vi: "Nguyện con đường theo đuổi idol của Cánh Cụt ngày càng rộng mở, gặt hái đầy thành quả, niềm vui nhiều hơn cả những vì sao!"
    },
    {
      zh: "祝珍珍和亚轩的缘分越来越深，做最幸福的小企鹅粉丝！",
      pinyin: "Zhù Zhēnzhēn hé Yàxuān de yuánfèn yuèlái yuè shēn, zuò zuì xìngfú de Xiǎo Qǐ'é fěnsī!",
      vi: "Chúc duyên phận giữa Trân Trân và Á Hiên ngày càng sâu đậm, làm fan Cánh Cụt hạnh phúc nhất đời!"
    },
    {
      zh: "愿追星的每一天都充满惊喜，珍珍，你是亚轩最可爱的应援！",
      pinyin: "Yuàn zhuī xīng de měi yī tiān dōu chōngmǎn jīngxǐ, Zhēnzhēn, nǐ shì Yàxuān zuì kě'ài de yīngyuán!",
      vi: "Nguyện mỗi ngày theo đuổi idol đều tràn đầy bất ngờ thú vị, Trân Trân, em là người cổ vũ dễ thương nhất của Á Hiên!"
    }
  ]
};

/* ══════════════════════════════════════════════════
   VIBE META – particle type, greeting, etc.
══════════════════════════════════════════════════ */
const VIBE_META = {
  game:   { greeting: "🎮  Cánh Cụt · Game Mode",     emoji: "🎮", particle: "pixel" },
  movie:  { greeting: "🎬  Cánh Cụt · Movie Night",   emoji: "🎬", particle: "dust"  },
  sleep:  { greeting: "🌙  Cánh Cụt · Sweet Dreams",  emoji: "🌙", particle: "star"  },
  yaxuan: { greeting: "🌸  Cánh Cụt · 宋亚轩 Mode",   emoji: "🌸", particle: "petal" }
};

/* ══════════════════════════════════════════════════
   GROUP PASSWORDS – mỗi nhóm 3 hộp
   Nhóm A = hộp 0,1,2 · B = hộp 3,4,5 · C = hộp 6,7,8
══════════════════════════════════════════════════ */
const GROUP_PASSWORDS = {
  A: "chutoi",      // Nhóm A – Hộp 1, 2, 3
  B: "baotran",     // Nhóm B – Hộp 4, 5, 6
  C: "yaxuan2025"   // Nhóm C – Hộp 7, 8, 9
};

// Mapping group → box indices
const GROUP_BOXES = { A: [0,1,2], B: [3,4,5], C: [6,7,8] };
const BOX_GROUP   = [0,0,0, 1,1,1, 2,2,2]; // boxIndex → groupIndex (A=0,B=1,C=2)
const GROUP_NAMES = ['A','B','C'];

/* ══════════════════════════════════════════════════
   SONG YAXUAN IMAGE ASSETS
══════════════════════════════════════════════════ */
const YAXUAN_IMAGES = ['yaxuan.png', 'yaxuan1.png', 'yaxuan2.png', 'yaxuan3.png'];

/* ══════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════ */
let currentVibe    = null;
let openedBoxes    = new Set();   // chỉ số hộp đã mở
let unlockedGroups = new Set();   // nhóm đã nhập mật mã đúng
let musicPlaying   = false;
let noteInterval   = null;
let particleCtx    = null;
let trailCtx       = null;
let particles      = [];
let trailDots      = [];
let animFrame      = null;
let trailFrame     = null;
let pendingGroupClick = null;     // nhóm đang chờ xác thực password
let secretSlideInterval = null;   // slide show của card hologram

/* ══════════════════════════════════════════════════
   LOCAL STORAGE – lưu trạng thái đã mở theo vibe
══════════════════════════════════════════════════ */
function lsKey(vibe)    { return `chut_opened_${vibe}`; }
function lsGroupKey(vibe) { return `chut_unlocked_${vibe}`; }

function loadState(vibe) {
  try {
    const raw = localStorage.getItem(lsKey(vibe));
    openedBoxes = raw ? new Set(JSON.parse(raw)) : new Set();
    const rawG = localStorage.getItem(lsGroupKey(vibe));
    unlockedGroups = rawG ? new Set(JSON.parse(rawG)) : new Set();
  } catch(e) {
    openedBoxes = new Set();
    unlockedGroups = new Set();
  }
}

function saveState(vibe) {
  localStorage.setItem(lsKey(vibe),    JSON.stringify([...openedBoxes]));
  localStorage.setItem(lsGroupKey(vibe), JSON.stringify([...unlockedGroups]));
}

/* ══════════════════════════════════════════════════
   CANVAS BACKGROUND PARTICLES
══════════════════════════════════════════════════ */
function initCanvas() {
  const bg = document.getElementById('bgCanvas');
  bg.width  = window.innerWidth;
  bg.height = window.innerHeight;
  particleCtx = bg.getContext('2d');

  const tr = document.getElementById('trailCanvas');
  tr.width  = window.innerWidth;
  tr.height = window.innerHeight;
  trailCtx  = tr.getContext('2d');

  window.addEventListener('resize', () => {
    bg.width  = tr.width  = window.innerWidth;
    bg.height = tr.height = window.innerHeight;
  });
}

function spawnParticles(type) {
  particles = [];
  const count = type === 'pixel'  ? 80
              : type === 'dust'   ? 55
              : type === 'petal'  ? 60
              :                     110; // star
  const W = window.innerWidth, H = window.innerHeight;
  for (let i = 0; i < count; i++) {
    const p = {
      x:         Math.random() * W,
      y:         Math.random() * H,
      size:      Math.random() * (type === 'star' || type === 'petal' ? 2.8 : 1.8) + 0.5,
      speedX:    (Math.random() - 0.5) * (type === 'pixel' ? 1.2 : type === 'petal' ? 0.6 : 0.35),
      speedY:    (Math.random() - 0.5) * 0.3 - (type === 'dust' ? 0.25 : type === 'petal' ? -0.3 : 0),
      opacity:   Math.random(),
      opacityDir: Math.random() > 0.5 ? 1 : -1,
      twinkle:   type === 'star',
      hue:       type === 'pixel'  ? (Math.random() > 0.5 ? 270 : 190)
               : type === 'dust'   ? 30  + Math.random() * 30
               : type === 'petal'  ? 310 + Math.random() * 40
               :                     220 + Math.random() * 60,
      rot:       Math.random() * Math.PI * 2,
      rotSpeed:  (Math.random() - 0.5) * 0.04,
    };
    if (type === 'dust') {
      p.x = W * 0.05 + Math.random() * W * 0.7;
      p.y = H * 0.05 + Math.random() * H * 0.65;
    }
    particles.push(p);
  }
}

function drawParticles() {
  if (!particleCtx || !currentVibe) return;
  const W = window.innerWidth, H = window.innerHeight;
  const type = VIBE_META[currentVibe].particle;
  particleCtx.clearRect(0, 0, W, H);

  if (type === 'dust') {
    const g = particleCtx.createRadialGradient(W*0.05, H*0.05, 8, W*0.55, H*0.55, W*0.75);
    g.addColorStop(0, 'rgba(240,160,60,0.09)');
    g.addColorStop(1, 'transparent');
    particleCtx.fillStyle = g;
    particleCtx.fillRect(0, 0, W, H);
  }

  particles.forEach(p => {
    p.x += p.speedX; p.y += p.speedY;
    if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
    if (p.twinkle) {
      p.opacity += p.opacityDir * 0.012;
      if (p.opacity > 1 || p.opacity < 0.05) p.opacityDir *= -1;
    }
    particleCtx.globalAlpha = Math.min(1, Math.max(0, p.opacity));
    particleCtx.fillStyle   = `hsl(${p.hue},100%,72%)`;

    if (type === 'star') {
      particleCtx.beginPath();
      particleCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      particleCtx.fill();
    } else if (type === 'petal') {
      p.rot += p.rotSpeed;
      particleCtx.save();
      particleCtx.translate(p.x, p.y);
      particleCtx.rotate(p.rot);
      particleCtx.beginPath();
      particleCtx.ellipse(0, 0, p.size * 1.4, p.size * 0.7, 0, 0, Math.PI * 2);
      particleCtx.fill();
      particleCtx.restore();
    } else {
      particleCtx.fillRect(p.x, p.y, p.size, p.size);
    }
  });
  particleCtx.globalAlpha = 1;
  animFrame = requestAnimationFrame(drawParticles);
}

/* ══════════════════════════════════════════════════
   MAGIC TRAIL – sparkles theo chuột / chạm tay
══════════════════════════════════════════════════ */
function initTrail() {
  const handler = (x, y) => {
    const hue = currentVibe === 'game'   ? 270 + Math.random() * 60
              : currentVibe === 'movie'  ? 30  + Math.random() * 40
              : currentVibe === 'yaxuan' ? 310 + Math.random() * 40
              :                            220 + Math.random() * 60;
    for (let i = 0; i < 3; i++) {
      trailDots.push({
        x: x + (Math.random() - 0.5) * 12,
        y: y + (Math.random() - 0.5) * 12,
        r: Math.random() * 4 + 1.5,
        alpha: 0.9 + Math.random() * 0.1,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.8) * 2,
        hue,
        decay: 0.025 + Math.random() * 0.02,
      });
    }
  };

  window.addEventListener('mousemove', e => {
    if (!currentVibe) return;
    handler(e.clientX, e.clientY);
  });

  window.addEventListener('touchmove', e => {
    if (!currentVibe) return;
    e.preventDefault();
    const t = e.touches[0];
    handler(t.clientX, t.clientY);
  }, { passive: false });

  drawTrail();
}

function drawTrail() {
  if (trailCtx) {
    trailCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    trailDots = trailDots.filter(d => d.alpha > 0.01);
    trailDots.forEach(d => {
      d.x += d.dx; d.y += d.dy;
      d.alpha -= d.decay;
      trailCtx.globalAlpha = Math.max(0, d.alpha);
      trailCtx.fillStyle   = `hsl(${d.hue},100%,75%)`;
      trailCtx.beginPath();
      trailCtx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      trailCtx.fill();
    });
    trailCtx.globalAlpha = 1;
  }
  trailFrame = requestAnimationFrame(drawTrail);
}

/* ══════════════════════════════════════════════════
   VINYL PLAYER (Đĩa than)
══════════════════════════════════════════════════ */
function initVinyl() {
  document.getElementById('vinylPlayer').addEventListener('click', toggleMusic);
}

function setVinylTheme(vibe) {
  const center = document.getElementById('vinylCenter');
  if (vibe === 'yaxuan') {
    center.style.backgroundImage  = "url('yaxuan.png')";
    center.style.backgroundSize   = 'cover';
    center.style.backgroundPosition = 'center';
    center.style.border           = '2px solid #f472b6';
    center.style.width            = '30px';
    center.style.height           = '30px';
  } else {
    center.style.backgroundImage  = '';
    center.style.backgroundSize   = '';
    center.style.width            = '';
    center.style.height           = '';
    center.style.border           = '2px solid var(--accent)';
  }
}

function toggleMusic() {
  const audio = document.getElementById('bgMusic');
  const disc  = document.getElementById('vinylDisc');
  const tooltip = document.getElementById('vinylTooltip');
  if (musicPlaying) {
    audio.pause();
    disc.classList.remove('spinning');
    clearInterval(noteInterval);
    musicPlaying = false;
  } else {
    audio.play().catch(() => {});
    disc.classList.add('spinning');
    noteInterval = setInterval(spawnNote, 900);
    musicPlaying = true;
    if (tooltip) tooltip.classList.add('hidden');
  }
}

function spawnNote() {
  const notes = ['♩','♪','♫','♬','🎵','🎶'];
  const wrap  = document.getElementById('vinylNotes');
  const el    = document.createElement('span');
  el.className   = 'music-note';
  el.textContent = notes[Math.floor(Math.random() * notes.length)];
  el.style.setProperty('--nx', ((Math.random() - 0.5) * 80) + 'px');
  el.style.left  = (16 + Math.random() * 26) + 'px';
  el.style.top   = (12 + Math.random() * 18) + 'px';
  el.style.color = `hsl(${Math.random() * 360},80%,72%)`;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

/* ══════════════════════════════════════════════════
   VIBE SELECTION & NAV
══════════════════════════════════════════════════ */
function selectVibe(vibe) {
  currentVibe = vibe;
  document.body.setAttribute('data-theme', vibe);

  loadState(vibe);

  const welcome = document.getElementById('screenWelcome');
  const gifts   = document.getElementById('screenGifts');
  gsap.to(welcome, { opacity: 0, scale: 0.95, duration: 0.4, ease: 'power2.in', onComplete: () => {
    welcome.classList.remove('active');
    gifts.classList.add('active');
    gsap.fromTo(gifts, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
  }});

  document.getElementById('giftsGreeting').textContent = VIBE_META[vibe].greeting;
  
  renderGrid();
  setVinylTheme(vibe);

  // Tự động bật nhạc khi vừa chọn vibe
  if (!musicPlaying) {
    toggleMusic();
  }

  if (animFrame) cancelAnimationFrame(animFrame);
  spawnParticles(VIBE_META[vibe].particle);
  drawParticles();
}

function goBack() {
  const welcome = document.getElementById('screenWelcome');
  const gifts   = document.getElementById('screenGifts');
  gsap.to(gifts, { opacity: 0, y: -20, duration: 0.35, ease: 'power2.in', onComplete: () => {
    gifts.classList.remove('active');
    welcome.classList.add('active');
    gsap.fromTo(welcome, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.5)' });
  }});
  if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }
  if (particleCtx) particleCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  currentVibe = null;
  document.body.removeAttribute('data-theme');
}

/* ══════════════════════════════════════════════════
   RESET FUNCTION
══════════════════════════════════════════════════ */
function resetVibe() {
  if (!currentVibe) return;
  const agree = confirm("Cánh Cụt muốn chơi lại Vibe này từ đầu à? Các hộp quà sẽ được khóa lại để mở khóa nhé! 🐧🔄");
  if (!agree) return;

  openedBoxes.clear();
  unlockedGroups.clear();
  saveState(currentVibe);

  spawnConfetti(window.innerWidth / 2, window.innerHeight / 2, 25);

  renderGrid();
}

/* ══════════════════════════════════════════════════
   GROUP HINT & COMPLETION CHECK
══════════════════════════════════════════════════ */
function updateGroupHint() {
  const hint = document.getElementById('groupHint');
  const unlockedCount = unlockedGroups.size;
  if (unlockedCount === 0) {
    hint.textContent = '🔑 Nhấn vào hộp để nhập mật mã mở cả nhóm!';
  } else if (unlockedCount < 3) {
    hint.textContent = `✅ Đã mở khóa ${unlockedCount}/3 nhóm`;
  } else {
    hint.textContent = '🎉 Tất cả nhóm đã mở khóa! Hãy mở hết các hộp quà nhé! 🐧';
  }
}

function checkCompletion() {
  const triggerWrap = document.getElementById('secretTriggerWrap');
  const triggerBtn = document.getElementById('btnOpenSecret');
  if (!triggerWrap || !triggerBtn) return;

  if (openedBoxes.size === 9) {
    triggerWrap.style.display = 'block';
    
    if (currentVibe === 'yaxuan') {
      triggerBtn.innerHTML = '💌 Nhận Card Hologram & Thư Bí Mật của Á Hiên 🌸';
    } else {
      triggerBtn.innerHTML = '💌 Mở Thư Tay Bí Mật Của Cánh Cụt 🐧';
    }

    setTimeout(() => {
      triggerWrap.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 600);

    spawnConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 80);
  } else {
    triggerWrap.style.display = 'none';
  }
}

/* ══════════════════════════════════════════════════
   GIFT GRID RENDER
══════════════════════════════════════════════════ */
function renderGrid() {
  const grid = document.getElementById('giftGrid');
  grid.innerHTML = '';

  WISHES[currentVibe].forEach((_, idx) => {
    const groupIdx = BOX_GROUP[idx];
    const groupName = GROUP_NAMES[groupIdx];
    const isUnlocked = unlockedGroups.has(groupName);
    const isOpened   = openedBoxes.has(idx);

    const box = document.createElement('div');
    box.className = 'gift-box';
    box.id = 'box-' + idx;

    if (isOpened) {
      box.classList.add('opened');
      box.innerHTML = `<span class="gift-emoji" style="font-size:1.6rem">✨</span><span class="gift-opened-text">Đã mở</span>`;
    } else if (isUnlocked) {
      box.classList.add('unlocked-ready');
      box.innerHTML = `<span class="gift-emoji">🎁</span><span class="gift-num">HỘP ${idx+1}</span>`;
      box.addEventListener('click', () => openBox(idx));
    } else {
      box.classList.add('locked');
      box.innerHTML = `<span class="gift-emoji">🎁</span><span class="gift-num">HỘP ${idx+1}</span>`;
      box.addEventListener('click', () => promptPassword(groupName, groupIdx));
    }

    grid.appendChild(box);
    gsap.fromTo(box,
      { opacity: 0, scale: 0.7, y: 30 },
      { opacity: isOpened ? 0.45 : 1, scale: isOpened ? 0.93 : 1, y: 0,
        duration: 0.55, delay: idx * 0.07, ease: 'back.out(1.7)' }
    );
  });

  updateRemainCount();
  updateGroupHint();
  checkCompletion();
}

function updateRemainCount() {
  const total = WISHES[currentVibe]?.length ?? 9;
  document.getElementById('remainCount').textContent = total - openedBoxes.size;
}

/* ══════════════════════════════════════════════════
   PASSWORD MODAL
══════════════════════════════════════════════════ */
function promptPassword(groupName, groupIdx) {
  pendingGroupClick = { groupName, groupIdx };
  document.getElementById('pwdGroupLabel').textContent = groupName;
  const boxes = GROUP_BOXES[groupName];
  document.getElementById('pwdBoxRange').textContent = boxes.map(b => b+1).join(', ');
  document.getElementById('pwdInput').value = '';
  document.getElementById('pwdError').textContent = '';
  document.getElementById('pwdError').classList.remove('show');
  document.getElementById('passwordOverlay').classList.add('visible');
  setTimeout(() => document.getElementById('pwdInput').focus(), 300);
}

function verifyPassword() {
  if (!pendingGroupClick) return;
  const { groupName } = pendingGroupClick;
  const entered = document.getElementById('pwdInput').value.trim().toLowerCase();
  const correct = GROUP_PASSWORDS[groupName].toLowerCase();

  if (entered === correct) {
    unlockedGroups.add(groupName);
    saveState(currentVibe);
    closePasswordModal();
    
    const boxes = GROUP_BOXES[groupName];
    boxes.forEach((bIdx, i) => {
      setTimeout(() => {
        const el = document.getElementById('box-' + bIdx);
        if (!el || openedBoxes.has(bIdx)) return;
        el.classList.remove('locked');
        el.classList.add('unlocked-ready');
        const newEl = el.cloneNode(true);
        el.parentNode.replaceChild(newEl, el);
        newEl.addEventListener('click', () => openBox(bIdx));
        gsap.fromTo(newEl, { scale: 0.85 }, { scale: 1, duration: 0.4, ease: 'back.out(1.8)' });
      }, i * 180);
    });
    updateGroupHint();
    spawnConfetti(window.innerWidth / 2, window.innerHeight / 2, 30);
  } else {
    const card = document.getElementById('passwordCard');
    const errEl = document.getElementById('pwdError');
    errEl.textContent = '❌ Mật mã sai rồi Cánh Cụt ơi, thử lại nhé!';
    errEl.classList.add('show');
    card.classList.remove('shake');
    void card.offsetWidth;
    card.classList.add('shake');
    document.getElementById('pwdInput').value = '';
    setTimeout(() => {
      errEl.classList.remove('show');
      card.classList.remove('shake');
    }, 2500);
  }
}

function closePasswordModal(e) {
  if (e && e.target !== document.getElementById('passwordOverlay')) return;
  document.getElementById('passwordOverlay').classList.remove('visible');
  pendingGroupClick = null;
}

/* ══════════════════════════════════════════════════
   OPEN BOX (Unboxing animation)
══════════════════════════════════════════════════ */
function openBox(idx) {
  if (openedBoxes.has(idx)) return;
  openedBoxes.add(idx);
  saveState(currentVibe);
  updateRemainCount();

  const boxEl = document.getElementById('box-' + idx);
  gsap.to(boxEl, { scale: 1.15, duration: 0.15, ease: 'power1.out', onComplete: () => {
    gsap.to(boxEl, { scale: 0.92, opacity: 0.45, duration: 0.3, ease: 'power2.in' });
  }});
  boxEl.innerHTML = `<span class="gift-emoji" style="font-size:1.6rem">✨</span><span class="gift-opened-text">Đã mở</span>`;
  boxEl.classList.add('opened');
  boxEl.classList.remove('unlocked-ready', 'locked');

  burstParticles(boxEl);

  // Set modal content
  const wish = WISHES[currentVibe][idx];
  document.getElementById('unboxZh').textContent     = wish.zh;
  document.getElementById('unboxPinyin').textContent = wish.pinyin;
  document.getElementById('unboxVi').textContent     = wish.vi;
  document.getElementById('unboxContent').style.opacity = '0';

  // Hiển thị avatar nhỏ của Song Yaxuan (tuần tự theo 4 hình ảnh)
  const avatar = document.getElementById('unboxYaxuanImg');
  if (currentVibe === 'yaxuan') {
    avatar.style.display = 'block';
    avatar.style.backgroundImage = `url('${YAXUAN_IMAGES[idx % YAXUAN_IMAGES.length]}')`;
  } else {
    avatar.style.display = 'none';
  }

  const lid = document.getElementById('unboxLid');
  lid.style.animation = 'none';
  void lid.offsetWidth;
  lid.style.animation = '';

  document.getElementById('unboxOverlay').classList.add('visible');

  setTimeout(() => {
    gsap.to('#unboxContent', { opacity: 1, y: [10, 0], duration: 0.6, ease: 'power3.out' });
    const zhEl = document.getElementById('unboxZh');
    const text = wish.zh;
    zhEl.innerHTML = '';
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      zhEl.appendChild(span);
      gsap.fromTo(span,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, delay: i * 0.04, ease: 'power2.out' }
      );
    });
    setTimeout(() => spawnConfetti(window.innerWidth / 2, window.innerHeight * 0.3, 35), 300);
    
    checkCompletion();
  }, 650);
}

/* ══════════════════════════════════════════════════
   BURST PARTICLES (box click)
══════════════════════════════════════════════════ */
function burstParticles(boxEl) {
  const rect = boxEl.getBoundingClientRect();
  const cx = rect.left + rect.width  / 2;
  const cy = rect.top  + rect.height / 2;
  const colors = currentVibe === 'game'   ? ['#a855f7','#22d3ee','#fff']
               : currentVibe === 'movie'  ? ['#f59e0b','#dc2626','#fff']
               : currentVibe === 'yaxuan' ? ['#f472b6','#fbbf24','#fff']
               :                            ['#818cf8','#fde68a','#fff'];
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement('div');
    Object.assign(dot.style, {
      position: 'fixed', width: '8px', height: '8px', borderRadius: '50%',
      background: colors[Math.floor(Math.random() * colors.length)],
      left: cx + 'px', top: cy + 'px', zIndex: '9999', pointerEvents: 'none'
    });
    document.body.appendChild(dot);
    const angle = (i / 20) * Math.PI * 2;
    const dist  = 60 + Math.random() * 90;
    gsap.to(dot, {
      x: Math.cos(angle) * dist, y: Math.sin(angle) * dist - 50,
      opacity: 0, scale: 0.3, duration: 0.9, ease: 'power2.out',
      delay: Math.random() * 0.15,
      onComplete: () => dot.remove()
    });
  }
}

/* ══════════════════════════════════════════════════
   CONFETTI (canvas overlay)
══════════════════════════════════════════════════ */
function spawnConfetti(cx, cy, count) {
  const colors = ['#f472b6','#a855f7','#22d3ee','#fbbf24','#34d399','#f87171','#818cf8'];
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size  = 6 + Math.random() * 6;
    Object.assign(el.style, {
      position: 'fixed',
      left: cx + 'px', top: cy + 'px',
      width: size + 'px', height: size + 'px',
      background: color,
      borderRadius: Math.random() > 0.5 ? '50%' : '2px',
      zIndex: '10000', pointerEvents: 'none',
      transform: 'translate(-50%,-50%)'
    });
    document.body.appendChild(el);
    const angle = Math.random() * Math.PI * 2;
    const dist  = 100 + Math.random() * 200;
    const rotDeg = (Math.random() - 0.5) * 720;
    gsap.to(el, {
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist + 80,
      rotation: rotDeg,
      opacity: 0,
      duration: 1.2 + Math.random() * 0.8,
      ease: 'power2.out',
      delay: Math.random() * 0.3,
      onComplete: () => el.remove()
    });
  }
}

/* ══════════════════════════════════════════════════
   SECRET LETTER OVERLAY
══════════════════════════════════════════════════ */
function showSecretLetter() {
  const mediaWrap = document.getElementById('secretMediaWrap');
  const body = document.getElementById('secretBody');
  const overlay = document.getElementById('secretOverlay');
  
  if (!mediaWrap || !body || !overlay) return;

  mediaWrap.innerHTML = '';
  
  if (currentVibe === 'yaxuan') {
    // Holographic card của Song Yaxuan
    const card = document.createElement('div');
    card.className = 'yaxuan-holo-card';
    card.id = 'yaxuanHoloCard';
    card.title = 'Card bo góc Hologram lấp lánh của Á Hiên 🌸';
    
    // Đặt ảnh đầu tiên
    let imgIdx = 0;
    card.style.backgroundImage = `url('${YAXUAN_IMAGES[imgIdx]}')`;
    mediaWrap.appendChild(card);

    // Bắt đầu slideshow tự chuyển ảnh mỗi 3.5 giây
    if (secretSlideInterval) clearInterval(secretSlideInterval);
    secretSlideInterval = setInterval(() => {
      imgIdx = (imgIdx + 1) % YAXUAN_IMAGES.length;
      
      // Hiệu ứng fade chuyển đổi ảnh mượt mà
      gsap.to(card, { opacity: 0.15, duration: 0.4, onComplete: () => {
        card.style.backgroundImage = `url('${YAXUAN_IMAGES[imgIdx]}')`;
        gsap.to(card, { opacity: 1, duration: 0.5 });
      }});
    }, 3500);

    body.innerHTML = `Gửi Bảo Trân (bzhenn) dễ thương nhất hệ mặt trời, 🌸

Cảm ơn Cánh Cụt đã kiên trì giải mã và mở hết tất cả hộp quà nhé! Tống Á Hiên gửi tới em ngàn lời chúc ngọt ngào nhất. 

Hy vọng mỗi ngày trôi qua em đều tràn ngập niềm vui, may mắn, học tập và làm việc thật tốt, và đặc biệt là luôn giữ nụ cười rạng rỡ như ánh nắng xuân trên môi nha! 🐧✨

~ From bzhenn's Special Gift App ~`;
  } else if (currentVibe === 'game') {
    body.innerHTML = `Chúc mừng Cựu Chiến Binh Cánh Cụt! 🎮

Bạn đã xuất sắc vượt qua tất cả các thử thách mật mã để unbox thành công toàn bộ 9 hộp quà. 

Chúc Bảo Trân chơi game luôn vui vẻ, không bao giờ gặp đồng đội 'tạ', leo rank vùn vụt, sở hữu những trang bị xịn sò nhất và luôn là MVP tỏa sáng trong lòng mọi người nhé! 🏆✨`;
  } else if (currentVibe === 'movie') {
    body.innerHTML = `Chúc mừng mọt phim Cánh Cụt Trân Trân! 🎬

Hy vọng những bộ phim đêm muộn luôn mang lại cho em những giây phút giải trí thoải mái, ấm áp và đong đầy cảm xúc ý nghĩa. 

Cày phim vui nhưng đừng thức khuya đến tận 4-5 giờ sáng nhé, nhớ giữ gìn sức khỏe thật tốt nha! 🍿🎥`;
  } else {
    body.innerHTML = `Chúc ngủ ngon, Cánh Cụt Bảo Trân thân yêu! 🌙

Chúc em luôn có những giấc ngủ thật sâu, êm đềm và có những giấc mơ ngọt ngào, bay bổng. 

Mọi lo toan và mệt mỏi của ngày hôm nay cứ gửi lại cho bầu trời đêm và những vì sao lấp lánh nhé. Ngày mai thức dậy sẽ là một ngày mới tràn ngập niềm vui dịu dàng đối với em! 🐧💤`;
  }

  overlay.classList.add('visible');
  spawnConfetti(window.innerWidth / 2, window.innerHeight / 2, 60);
}

function closeSecret(e) {
  if (e && e.target !== document.getElementById('secretOverlay')) return;
  document.getElementById('secretOverlay').classList.remove('visible');
  if (secretSlideInterval) {
    clearInterval(secretSlideInterval);
    secretSlideInterval = null;
  }
}

/* ══════════════════════════════════════════════════
   CLOSE UNBOX MODAL
══════════════════════════════════════════════════ */
function closeUnbox(e) {
  if (e && e.target !== document.getElementById('unboxOverlay') && !e.target.classList.contains('unbox-close')) return;
  const overlay = document.getElementById('unboxOverlay');
  gsap.to('#unboxCard', { scale: 0.9, opacity: 0, duration: 0.25, ease: 'power2.in', onComplete: () => {
    overlay.classList.remove('visible');
    gsap.set('#unboxCard', { scale: 1, opacity: 1 });
  }});
}

/* ══════════════════════════════════════════════════
   INIT ON DOM READY
══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  initTrail();
  initVinyl();

  gsap.fromTo('#screenWelcome .welcome-content',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
  );
  gsap.fromTo('.welcome-title',
    { letterSpacing: '8px', opacity: 0 },
    { letterSpacing: '-1px', opacity: 1, duration: 1.1, ease: 'expo.out', delay: 0.5 }
  );
});
