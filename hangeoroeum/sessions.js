window.SESSIONS = [
  // ─── CAFÉ & ORDERING (1-4) ────────────────────────────────────
  {
    id: 1, topic: "cafe", topicKorean: "카페", level: "topik1",
    scene: "You walk into a small café near Hongdae after a long morning of exploring. The barista looks up with a warm smile, ready to take your order.",
    focusIndex: 0,
    phrases: [
      { id: "s1p1", korean: "아메리카노 한 잔 주세요.", english: "One americano, please.", context: "The most common coffee order in Korea", grammar: "한 잔 = one cup (counter for drinks). 주세요 = please give me", response: { korean: "네, 아메리카노 한 잔이요. 4,500원이에요.", english: "Yes, one americano. That's 4,500 won." } },
      { id: "s1p2", korean: "얼마예요?", english: "How much is it?", context: "Asking the price — works everywhere", grammar: "얼마 = how much. 예요 = polite copula" },
      { id: "s1p3", korean: "카드 돼요?", english: "Do you take cards?", context: "Korea is nearly cashless, but good to know", grammar: "돼요 = is it okay / is it possible" },
      { id: "s1p4", korean: "여기서 마실게요.", english: "I'll drink it here.", context: "Saying you want to sit in, not take out", grammar: "여기서 = here. -ㄹ게요 = I will (soft promise)" },
      { id: "s1p5", korean: "감사합니다.", english: "Thank you.", context: "Formal thank you — always appropriate", grammar: null }
    ]
  },
  {
    id: 2, topic: "cafe", topicKorean: "카페", level: "topik1",
    scene: "You've been coming to this café for a week now. The barista recognizes you and nods. Today you want something different.",
    focusIndex: 0,
    phrases: [
      { id: "s2p1", korean: "오늘은 라떼 주세요.", english: "Today I'll have a latte.", context: "Ordering something different from usual", grammar: "오늘은 = today (은 adds contrast). 라떼 = latte", response: { korean: "라떼요? 뜨거운 거로 드릴까요?", english: "A latte? Would you like it hot?" } },
      { id: "s2p2", korean: "차갑게 해 주세요.", english: "Please make it cold.", context: "Asking for an iced drink", grammar: "차갑게 = coldly. 해 주세요 = please do (for me)" },
      { id: "s2p3", korean: "조금 있다가 올게요.", english: "I'll come back in a little while.", context: "Telling them you'll return for your order", grammar: "조금 있다가 = in a little while. 올게요 = I'll come" },
      { id: "s2p4", korean: "맛있어요!", english: "It's delicious!", context: "Complimenting anything you eat or drink", grammar: "맛 = taste. 있어요 = there is. 맛있어요 = it's tasty" },
      { id: "s2p5", korean: "포장해 주세요.", english: "To go, please.", context: "Asking for takeout", grammar: "포장 = packaging/takeout. 해 주세요 = please do" }
    ]
  },
  {
    id: 3, topic: "cafe", topicKorean: "카페", level: "topik1",
    scene: "A quiet afternoon in a bookish café in Ikseon-dong. You overhear someone reading aloud. You settle in with your drink and want to ask about the wifi.",
    focusIndex: 0,
    phrases: [
      { id: "s3p1", korean: "와이파이 비밀번호가 뭐예요?", english: "What's the wifi password?", context: "Essential in any Korean café", grammar: "비밀번호 = password. 뭐예요 = what is it", response: { korean: "영수증에 있어요. 잠깐만요.", english: "It's on the receipt. One moment." } },
      { id: "s3p2", korean: "콘센트 있어요?", english: "Is there a power outlet?", context: "For laptop work sessions", grammar: "있어요 = there is / do you have" },
      { id: "s3p3", korean: "디카페인 있어요?", english: "Do you have decaf?", context: "Late afternoon caffeine management", grammar: null },
      { id: "s3p4", korean: "자리 있어요?", english: "Are there seats available?", context: "Checking if there's space", grammar: "자리 = seat/spot" },
      { id: "s3p5", korean: "여기 좋다.", english: "This place is nice.", context: "Casual appreciation — 좋다 is the base form, very natural", grammar: "좋다 = is good (casual, talking to yourself)" }
    ]
  },
  {
    id: 4, topic: "cafe", topicKorean: "카페", level: "topik1",
    scene: "You're at a traditional Korean tea house near Bukchon. The menu is all in Hangul. The owner, an older woman, waits patiently.",
    focusIndex: 0,
    phrases: [
      { id: "s4p1", korean: "추천해 주세요.", english: "Please recommend something.", context: "When you can't decide — very useful", grammar: "추천 = recommendation. 해 주세요 = please do", response: { korean: "유자차 어떠세요? 오늘 딱 좋아요.", english: "How about yuzu tea? It's perfect today." } },
      { id: "s4p2", korean: "이게 뭐예요?", english: "What is this?", context: "Pointing at something on the menu", grammar: "이게 = this (subject). 뭐예요 = what is it" },
      { id: "s4p3", korean: "달지 않은 거 있어요?", english: "Do you have something not sweet?", context: "Specifying your preference", grammar: "달다 = to be sweet. -지 않은 = not (adjective form)" },
      { id: "s4p4", korean: "하나 더 주세요.", english: "One more, please.", context: "Ordering another of anything", grammar: "하나 = one. 더 = more" },
      { id: "s4p5", korean: "잘 먹겠습니다.", english: "I'll eat/drink well. (Thanks for the food)", context: "Said before eating — shows gratitude", grammar: "Ritual phrase before any meal or drink" }
    ]
  },
  // ─── CONVENIENCE STORE (5-8) ──────────────────────────────────
  {
    id: 5, topic: "convenience", topicKorean: "편의점", level: "topik1",
    scene: "It's 11pm. You need snacks and water after a long evening bouldering session. The tired cashier rings you up.",
    focusIndex: 0,
    phrases: [
      { id: "s5p1", korean: "봉투 필요하세요?", english: "Do you need a bag?", context: "The cashier asks — bags cost extra in Korea", grammar: "봉투 = bag. 필요하세요 = do you need (polite)", response: { korean: "네, 하나 주세요.", english: "Yes, one please." } },
      { id: "s5p2", korean: "네, 주세요.", english: "Yes, please.", context: "Simple agreement + request", grammar: "네 = yes. 주세요 = please give" },
      { id: "s5p3", korean: "영수증 필요하세요?", english: "Do you need a receipt?", context: "Standard checkout question", grammar: "영수증 = receipt" },
      { id: "s5p4", korean: "괜찮아요.", english: "It's okay. / No need.", context: "Politely declining — incredibly versatile phrase", grammar: "괜찮다 = to be fine/okay" },
      { id: "s5p5", korean: "이거 데워 주세요.", english: "Please heat this up.", context: "For convenience store food — they have microwaves", grammar: "데우다 = to heat up. -어 주세요 = please do for me" }
    ]
  },
  {
    id: 6, topic: "convenience", topicKorean: "편의점", level: "topik1",
    scene: "You grab a cup of ramyeon from the shelf. You need hot water. The cashier points you to the station.",
    focusIndex: 0,
    phrases: [
      { id: "s6p1", korean: "뜨거운 물 어디 있어요?", english: "Where is the hot water?", context: "For cup noodles — essential convenience store Korean", grammar: "뜨거운 = hot. 물 = water. 어디 = where", response: { korean: "저쪽 카운터 옆에 있어요.", english: "It's over by the counter." } },
      { id: "s6p2", korean: "저기 있어요.", english: "It's over there.", context: "Pointing something out", grammar: "저기 = over there" },
      { id: "s6p3", korean: "젓가락 있어요?", english: "Do you have chopsticks?", context: "Sometimes you need to ask", grammar: "젓가락 = chopsticks" },
      { id: "s6p4", korean: "감사합니다.", english: "Thank you.", context: "Formal thanks — always safe to use", grammar: null },
      { id: "s6p5", korean: "맛있게 드세요!", english: "Enjoy your meal!", context: "The cashier might say this — warm farewell", grammar: "맛있게 = deliciously. 드세요 = please eat (honorific)" }
    ]
  },
  {
    id: 7, topic: "convenience", topicKorean: "편의점", level: "topik1",
    scene: "Quick morning stop before heading to the climbing gym. You need a banana, a protein drink, and maybe some kimbap.",
    focusIndex: 0,
    phrases: [
      { id: "s7p1", korean: "이거 얼마예요?", english: "How much is this?", context: "Pointing at something without a clear price tag", grammar: "이거 = this thing", response: { korean: "2,000원이에요.", english: "It's 2,000 won." } },
      { id: "s7p2", korean: "카드로 할게요.", english: "I'll pay by card.", context: "Choosing payment method", grammar: "카드로 = by card. 할게요 = I'll do" },
      { id: "s7p3", korean: "현금으로 할게요.", english: "I'll pay with cash.", context: "The other payment option", grammar: "현금으로 = with cash" },
      { id: "s7p4", korean: "이거랑 이거 주세요.", english: "This and this, please.", context: "Ordering multiple items by pointing", grammar: "-이랑 = and (casual connector)" },
      { id: "s7p5", korean: "충전해 주세요.", english: "Please charge it. / Top it up.", context: "For T-money card or prepaid items", grammar: "충전 = charging/recharging" }
    ]
  },
  {
    id: 8, topic: "convenience", topicKorean: "편의점", level: "topik1",
    scene: "Late night after a K-drama marathon. You're at the CU near your Airbnb, craving something warm.",
    focusIndex: 0,
    phrases: [
      { id: "s8p1", korean: "전자레인지 써도 돼요?", english: "Can I use the microwave?", context: "Asking permission — polite and useful", grammar: "써도 돼요 = is it okay to use", response: { korean: "네, 거기 쓰세요.", english: "Yes, go ahead and use it there." } },
      { id: "s8p2", korean: "뜨거우니까 조심하세요.", english: "It's hot, so be careful.", context: "The cashier warning you", grammar: "-니까 = because/since. 조심하세요 = please be careful" },
      { id: "s8p3", korean: "고맙습니다.", english: "Thank you.", context: "Slightly softer than 감사합니다 — both are polite", grammar: null },
      { id: "s8p4", korean: "어디서 먹어도 돼요?", english: "Can I eat it here?", context: "Many CU/GS25 stores have seating", grammar: "어디서 = where. 먹어도 돼요 = is it okay to eat" },
      { id: "s8p5", korean: "밖에 자리 있어요.", english: "There are seats outside.", context: "Being directed to outdoor seating", grammar: "밖에 = outside" }
    ]
  },
  // ─── RESTAURANT & FOOD (9-12) ─────────────────────────────────
  {
    id: 9, topic: "restaurant", topicKorean: "식당", level: "topik1",
    scene: "You and a friend sit down at a small restaurant near Euljiro. The menu has no pictures. The owner waits.",
    focusIndex: 0,
    phrases: [
      { id: "s9p1", korean: "뭐가 맛있어요?", english: "What's good here?", context: "Best way to get a recommendation at a local spot", grammar: "뭐가 = what (subject). 맛있어요 = is delicious", response: { korean: "김치찌개가 제일 인기 있어요.", english: "The kimchi stew is the most popular." } },
      { id: "s9p2", korean: "이거 어떤 음식이에요?", english: "What kind of food is this?", context: "Asking about an unfamiliar dish on the menu", grammar: "어떤 = what kind of" },
      { id: "s9p3", korean: "맵지 않은 걸로 주세요.", english: "Please give me something not spicy.", context: "Specifying spice preference", grammar: "-지 않은 = not. 걸로 = the one that is" },
      { id: "s9p4", korean: "계산해 주세요.", english: "The bill, please.", context: "Asking for the check", grammar: "계산 = calculation/payment" },
      { id: "s9p5", korean: "정말 맛있었어요!", english: "It was really delicious!", context: "Complimenting the meal — makes the owner's day", grammar: "정말 = really. 맛있었어요 = was delicious (past tense)" }
    ]
  },
  {
    id: 10, topic: "restaurant", topicKorean: "식당", level: "topik1",
    scene: "Korean BBQ night in Mapo-gu. The grill is hot, the meat is sizzling, and you need to communicate with the server.",
    focusIndex: 0,
    phrases: [
      { id: "s10p1", korean: "고기 추가해 주세요.", english: "More meat, please.", context: "Ordering additional portions at KBBQ", grammar: "고기 = meat. 추가 = addition", response: { korean: "네, 바로 가져다 드릴게요.", english: "Yes, I'll bring it right away." } },
      { id: "s10p2", korean: "반찬 더 주세요.", english: "More side dishes, please.", context: "Refills are usually free at KBBQ", grammar: "반찬 = side dishes. 더 = more" },
      { id: "s10p3", korean: "불 좀 줄여 주세요.", english: "Please turn down the fire a bit.", context: "When the grill is too hot", grammar: "불 = fire. 좀 = a bit. 줄이다 = to reduce" },
      { id: "s10p4", korean: "소주 한 병 주세요.", english: "One bottle of soju, please.", context: "The classic KBBQ drink order", grammar: "한 병 = one bottle (counter for bottles)" },
      { id: "s10p5", korean: "배불러요.", english: "I'm full.", context: "When you've had enough", grammar: "배 = stomach. 부르다 = to be full" }
    ]
  },
  {
    id: 11, topic: "restaurant", topicKorean: "식당", level: "topik1",
    scene: "You're wandering through Myeongdong and the street food is calling. Tteokbokki, hotteok, and fish cakes everywhere.",
    focusIndex: 0,
    phrases: [
      { id: "s11p1", korean: "하나 주세요.", english: "One, please.", context: "Ordering one of anything at a street stall", grammar: "하나 = one", response: { korean: "네! 잠깐만요, 금방 돼요.", english: "Yes! Just a moment, it'll be ready soon." } },
      { id: "s11p2", korean: "맵지 않아요?", english: "Is it not spicy?", context: "Checking before you commit", grammar: "-지 않아요 = isn't it / is it not" },
      { id: "s11p3", korean: "이거 뭐예요?", english: "What is this?", context: "Pointing at unfamiliar street food", grammar: null },
      { id: "s11p4", korean: "진짜 맛있다!", english: "This is really good!", context: "Casual exclamation while eating — 반말 to yourself", grammar: "진짜 = really/for real. 맛있다 = delicious (plain form)" },
      { id: "s11p5", korean: "하나 더요.", english: "One more.", context: "When one isn't enough", grammar: "더 = more. 요 = polite ending" }
    ]
  },
  {
    id: 12, topic: "restaurant", topicKorean: "식당", level: "topik1",
    scene: "Sunday morning at a brunch spot in Yeonnam-dong. The menu has Korean and some English. You want to order for two.",
    focusIndex: 0,
    phrases: [
      { id: "s12p1", korean: "두 명이요.", english: "Two people.", context: "Telling the host how many in your party", grammar: "두 = two. 명 = counter for people", response: { korean: "이쪽으로 오세요.", english: "This way, please." } },
      { id: "s12p2", korean: "메뉴판 주세요.", english: "Menu, please.", context: "Asking for the menu", grammar: "메뉴판 = menu (physical)" },
      { id: "s12p3", korean: "주문할게요.", english: "I'd like to order.", context: "Signaling you're ready", grammar: "주문 = order. -ㄹ게요 = I will" },
      { id: "s12p4", korean: "같은 거 주세요.", english: "Same thing, please.", context: "Ordering the same as your friend", grammar: "같은 = same. 거 = thing" },
      { id: "s12p5", korean: "물 좀 주세요.", english: "Some water, please.", context: "Water is usually self-serve, but sometimes not", grammar: "물 = water. 좀 = a bit / please (softener)" }
    ]
  },
  // ─── TRANSIT (13-16) ──────────────────────────────────────────
  {
    id: 13, topic: "transit", topicKorean: "교통", level: "topik1",
    scene: "Rush hour on Line 2. The subway is packed. You're not sure if this is the right direction, and you need to find the transfer.",
    focusIndex: 0,
    phrases: [
      { id: "s13p1", korean: "이 자리 비었어요?", english: "Is this seat empty?", context: "Asking if a seat is taken", grammar: "자리 = seat. 비었어요 = is empty (past state)", response: { korean: "네, 앉으세요.", english: "Yes, have a seat." } },
      { id: "s13p2", korean: "어디서 갈아타요?", english: "Where do I transfer?", context: "Essential for navigating the subway", grammar: "어디서 = where. 갈아타다 = to transfer" },
      { id: "s13p3", korean: "다음 역이 어디예요?", english: "What's the next station?", context: "Confirming your stop", grammar: "다음 = next. 역 = station" },
      { id: "s13p4", korean: "잠깐만요, 내려야 해요.", english: "Excuse me, I need to get off.", context: "Pushing through a crowded car", grammar: "잠깐만요 = just a moment. 내리다 = to get off" },
      { id: "s13p5", korean: "이 열차는 어디로 가요?", english: "Where does this train go?", context: "Making sure you're going the right way", grammar: "열차 = train. 어디로 = to where" }
    ]
  },
  {
    id: 14, topic: "transit", topicKorean: "교통", level: "topik1",
    scene: "You're trying to take a bus to Bukhansan for a hike. The bus stop has routes in Korean only. An ajumma is waiting too.",
    focusIndex: 0,
    phrases: [
      { id: "s14p1", korean: "이 버스 북한산 가요?", english: "Does this bus go to Bukhansan?", context: "Confirming the bus destination", grammar: "버스 = bus. 가요 = goes", response: { korean: "아니요, 다음 거 타세요. 740번이요.", english: "No, take the next one. Number 740." } },
      { id: "s14p2", korean: "몇 번 버스 타야 돼요?", english: "Which number bus should I take?", context: "Asking which bus to catch", grammar: "몇 번 = which number. 타야 돼요 = need to ride" },
      { id: "s14p3", korean: "내릴 때 알려 주세요.", english: "Please let me know when to get off.", context: "Asking the driver or a fellow passenger", grammar: "내릴 때 = when getting off. 알려 주세요 = please tell me" },
      { id: "s14p4", korean: "여기서 내려요.", english: "I'm getting off here.", context: "Telling the driver your stop", grammar: "여기서 = here. 내려요 = getting off" },
      { id: "s14p5", korean: "다음 정류장이 어디예요?", english: "What's the next stop?", context: "Checking your position on the route", grammar: "정류장 = bus stop" }
    ]
  },
  {
    id: 15, topic: "transit", topicKorean: "교통", level: "topik1",
    scene: "Late night after a film screening in Gangnam. No more subway. You need a taxi back to your place in Hongdae.",
    focusIndex: 0,
    phrases: [
      { id: "s15p1", korean: "홍대 가 주세요.", english: "Please go to Hongdae.", context: "Telling the taxi driver your destination", grammar: "가 주세요 = please go (for me)", response: { korean: "홍대요? 네, 알겠습니다.", english: "Hongdae? Okay, got it." } },
      { id: "s15p2", korean: "여기서 세워 주세요.", english: "Please stop here.", context: "Telling the driver to pull over", grammar: "세우다 = to stop (a vehicle)" },
      { id: "s15p3", korean: "얼마나 걸려요?", english: "How long does it take?", context: "Asking about travel time", grammar: "얼마나 = how much/long. 걸리다 = to take (time)" },
      { id: "s15p4", korean: "카드로 결제할게요.", english: "I'll pay by card.", context: "Most taxis accept cards", grammar: "결제 = payment" },
      { id: "s15p5", korean: "감사합니다, 안녕히 계세요.", english: "Thank you, goodbye.", context: "Polite farewell to the driver", grammar: "안녕히 계세요 = goodbye (to someone staying)" }
    ]
  },
  {
    id: 16, topic: "transit", topicKorean: "교통", level: "topik1",
    scene: "You're lost on a side street near Itaewon. You stop someone walking by to ask for directions.",
    focusIndex: 0,
    phrases: [
      { id: "s16p1", korean: "저기요, 잠깐만요.", english: "Excuse me, just a moment.", context: "Getting a stranger's attention", grammar: "저기요 = excuse me (to stranger). 잠깐만요 = just a moment", response: { korean: "네, 말씀하세요.", english: "Yes, go ahead." } },
      { id: "s16p2", korean: "이 근처에 지하철역 있어요?", english: "Is there a subway station near here?", context: "Finding the nearest subway", grammar: "이 근처에 = near here. 있어요 = there is" },
      { id: "s16p3", korean: "걸어서 얼마나 걸려요?", english: "How long does it take to walk?", context: "Judging whether to walk or taxi", grammar: "걸어서 = on foot / by walking" },
      { id: "s16p4", korean: "감사합니다, 잘 찾아갈게요.", english: "Thank you, I'll find my way.", context: "Grateful farewell after getting directions", grammar: "찾아가다 = to find one's way to" },
      { id: "s16p5", korean: "직진하면 있어요.", english: "It's straight ahead.", context: "Common direction you'll hear", grammar: "직진 = going straight. -하면 = if you do" }
    ]
  },
  // ─── SHOPPING (17-20) ─────────────────────────────────────────
  {
    id: 17, topic: "shopping", topicKorean: "쇼핑", level: "topik1",
    scene: "You're browsing a climbing gear shop in Hongdae. The colorful chalk bags catch your eye. The owner approaches.",
    focusIndex: 0,
    phrases: [
      { id: "s17p1", korean: "이거 얼마예요?", english: "How much is this?", context: "The universal shopping question", grammar: "이거 = this thing. 얼마 = how much", response: { korean: "그거 35,000원이에요.", english: "That's 35,000 won." } },
      { id: "s17p2", korean: "좀 더 싼 거 있어요?", english: "Do you have something cheaper?", context: "Budget-conscious shopping", grammar: "싼 = cheap. 좀 더 = a bit more" },
      { id: "s17p3", korean: "다른 색 있어요?", english: "Do you have other colors?", context: "Checking available options", grammar: "다른 = different/other. 색 = color" },
      { id: "s17p4", korean: "입어 봐도 돼요?", english: "Can I try it on?", context: "Asking to try on clothes", grammar: "입어 보다 = to try wearing. -아도 돼요 = is it okay to" },
      { id: "s17p5", korean: "이걸로 할게요.", english: "I'll take this one.", context: "Making your purchase decision", grammar: "이걸로 = with this one. 할게요 = I'll do/take" }
    ]
  },
  {
    id: 18, topic: "shopping", topicKorean: "쇼핑", level: "topik1",
    scene: "Namdaemun Market. You're hunting for a gift to bring home. A vendor calls out to you from behind stacked boxes.",
    focusIndex: 0,
    phrases: [
      { id: "s18p1", korean: "깎아 주세요.", english: "Give me a discount, please.", context: "Haggling — expected at traditional markets", grammar: "깎다 = to cut/reduce (price)", response: { korean: "에이, 이미 싸게 드리는 거예요.", english: "Come on, I'm already giving you a good price." } },
      { id: "s18p2", korean: "너무 비싸요.", english: "It's too expensive.", context: "Starting point for negotiation", grammar: "너무 = too much. 비싸요 = expensive" },
      { id: "s18p3", korean: "두 개 사면 얼마예요?", english: "How much for two?", context: "Volume discount negotiation", grammar: "두 개 = two items. 사면 = if I buy" },
      { id: "s18p4", korean: "구경만 할게요.", english: "I'm just looking.", context: "When you want to browse without pressure", grammar: "구경 = looking around. -만 = only/just" },
      { id: "s18p5", korean: "선물이에요.", english: "It's a gift.", context: "They might wrap it nicely for you", grammar: "선물 = gift. -이에요 = it is" }
    ]
  },
  {
    id: 19, topic: "shopping", topicKorean: "쇼핑", level: "topik1",
    scene: "You ordered something on Coupang and it arrived at the convenience store pickup. You need to collect it.",
    focusIndex: 0,
    phrases: [
      { id: "s19p1", korean: "택배 찾으러 왔어요.", english: "I came to pick up a package.", context: "Collecting a delivery at a pickup point", grammar: "택배 = delivery/package. 찾으러 = to pick up (purpose)", response: { korean: "성함이 어떻게 되세요?", english: "What's your name, please?" } },
      { id: "s19p2", korean: "이름이 뭐예요?", english: "What's your name?", context: "They need to verify your identity", grammar: "이름 = name" },
      { id: "s19p3", korean: "전화번호 알려 주세요.", english: "Please tell me your phone number.", context: "Verification step for pickup", grammar: "전화번호 = phone number. 알려 주세요 = please tell" },
      { id: "s19p4", korean: "여기 사인해 주세요.", english: "Please sign here.", context: "Signing for the package", grammar: "사인 = signature" },
      { id: "s19p5", korean: "확인했습니다.", english: "Confirmed.", context: "Standard acknowledgment", grammar: "확인 = confirmation. -했습니다 = did (formal)" }
    ]
  },
  {
    id: 20, topic: "shopping", topicKorean: "쇼핑", level: "topik1",
    scene: "The shirt you bought online doesn't fit. You head to the Olive Young in Sinchon to return it.",
    focusIndex: 0,
    phrases: [
      { id: "s20p1", korean: "교환하고 싶어요.", english: "I want to exchange this.", context: "Requesting an exchange", grammar: "교환 = exchange. -고 싶어요 = want to", response: { korean: "영수증 가져오셨어요?", english: "Did you bring the receipt?" } },
      { id: "s20p2", korean: "환불 가능해요?", english: "Can I get a refund?", context: "Asking about refund policy", grammar: "환불 = refund. 가능해요 = is it possible" },
      { id: "s20p3", korean: "영수증 있어요.", english: "I have the receipt.", context: "Showing proof of purchase", grammar: "영수증 = receipt" },
      { id: "s20p4", korean: "사이즈가 안 맞아요.", english: "The size doesn't fit.", context: "Explaining the return reason", grammar: "사이즈 = size. 안 맞다 = doesn't fit" },
      { id: "s20p5", korean: "큰 사이즈로 바꿔 주세요.", english: "Please change it to a bigger size.", context: "Requesting a specific exchange", grammar: "큰 = big. 바꾸다 = to change/exchange" }
    ]
  },
  // ─── DAILY ESSENTIALS (21-24) ─────────────────────────────────
  {
    id: 21, topic: "daily", topicKorean: "일상", level: "topik1",
    scene: "You need to meet a friend at Gyeongbokgung at 3pm. You realize you don't know what time it is. Your phone is dead.",
    focusIndex: 0,
    phrases: [
      { id: "s21p1", korean: "지금 몇 시예요?", english: "What time is it now?", context: "Asking the time — universal survival phrase", grammar: "지금 = now. 몇 시 = what time", response: { korean: "두 시 반이요.", english: "It's two thirty." } },
      { id: "s21p2", korean: "세 시에 만나요.", english: "Let's meet at 3 o'clock.", context: "Setting a time to meet", grammar: "세 시 = 3 o'clock. 만나요 = meet" },
      { id: "s21p3", korean: "늦었어요, 미안해요.", english: "I'm late, sorry.", context: "When you don't make it on time", grammar: "늦다 = to be late. 미안해요 = sorry" },
      { id: "s21p4", korean: "거의 다 왔어요.", english: "I'm almost there.", context: "Texting when you're close", grammar: "거의 = almost. 다 = all. 왔어요 = came/arrived" },
      { id: "s21p5", korean: "어디에서 만날까요?", english: "Where should we meet?", context: "Deciding on a meeting spot", grammar: "어디에서 = where. -ㄹ까요 = shall we" }
    ]
  },
  {
    id: 22, topic: "daily", topicKorean: "일상", level: "topik1",
    scene: "Early morning in a park near the Han River. You went for a walk and got turned around near the pond.",
    focusIndex: 0,
    phrases: [
      { id: "s22p1", korean: "죄송합니다, 여기가 어디예요?", english: "I'm sorry, where is this?", context: "Asking where you are — polite approach", grammar: "죄송합니다 = I'm sorry (formal). 여기 = here", response: { korean: "여기 한강공원이에요. 출구는 저쪽이에요.", english: "This is the Han River park. The exit is that way." } },
      { id: "s22p2", korean: "이 근처에 화장실 있어요?", english: "Is there a restroom near here?", context: "Finding a bathroom — always important", grammar: "화장실 = bathroom/restroom" },
      { id: "s22p3", korean: "사진 한 장 찍어줄 수 있어요?", english: "Could you take a photo of me?", context: "Asking a stranger for a photo", grammar: "사진 = photo. 한 장 = one sheet/photo. 찍다 = to take (photo)" },
      { id: "s22p4", korean: "날씨 정말 좋네요.", english: "The weather is really nice.", context: "Small talk opener — works with anyone", grammar: "날씨 = weather. 좋네요 = is nice (with mild surprise)" },
      { id: "s22p5", korean: "출구가 어디예요?", english: "Where's the exit?", context: "Finding your way out", grammar: "출구 = exit" }
    ]
  },
  {
    id: 23, topic: "daily", topicKorean: "일상", level: "topik1",
    scene: "Your phone's data ran out. You need to find a phone shop to get a SIM top-up or wifi access.",
    focusIndex: 0,
    phrases: [
      { id: "s23p1", korean: "와이파이 되는 곳 있어요?", english: "Is there a place with wifi?", context: "Hunting for connectivity", grammar: "되는 = that works/available. 곳 = place" },
      { id: "s23p2", korean: "데이터가 없어요.", english: "I have no data.", context: "Explaining your situation", grammar: "데이터 = data. 없어요 = there isn't / don't have" },
      { id: "s23p3", korean: "충전기 빌려줄 수 있어요?", english: "Could you lend me a charger?", context: "Phone dying situation", grammar: "충전기 = charger. 빌리다 = to borrow" },
      { id: "s23p4", korean: "도와주세요.", english: "Please help me.", context: "General request for help", grammar: "도와주다 = to help (someone)" },
      { id: "s23p5", korean: "한국어 잘 못해요.", english: "I can't speak Korean well.", context: "Setting expectations — gets you patience and kindness", grammar: "잘 = well. 못해요 = can't do" }
    ]
  },
  {
    id: 24, topic: "daily", topicKorean: "일상", level: "topik1",
    scene: "You need to send money to split dinner. Your friend shows you how to use a Korean banking app.",
    focusIndex: 0,
    phrases: [
      { id: "s24p1", korean: "계좌번호 알려 주세요.", english: "Please tell me your account number.", context: "Getting bank details for transfer", grammar: "계좌번호 = account number", response: { korean: "카카오페이로 보내도 돼요.", english: "You can send it via KakaoPay." } },
      { id: "s24p2", korean: "보냈어요.", english: "I sent it.", context: "Confirming you made the transfer", grammar: "보내다 = to send. -았어요 = past tense" },
      { id: "s24p3", korean: "얼마 보내면 돼요?", english: "How much should I send?", context: "Confirming the amount", grammar: "보내면 돼요 = if I send, is it okay" },
      { id: "s24p4", korean: "나눠서 낼까요?", english: "Shall we split it?", context: "Suggesting to split the bill", grammar: "나누다 = to divide. 내다 = to pay" },
      { id: "s24p5", korean: "제가 낼게요.", english: "I'll pay.", context: "Offering to pay — a power move in Korean culture", grammar: "제가 = I (humble). 낼게요 = I'll pay" }
    ]
  },
  // ─── MOVIES & SHOWS (25-28) ★ ─────────────────────────────────
  {
    id: 25, topic: "movies", topicKorean: "영화", level: "topik1",
    scene: "You're at CGV Yongsan for a Korean film you've been waiting months to see. The ticket counter has a short queue.",
    focusIndex: 0,
    phrases: [
      { id: "s25p1", korean: "두 장 주세요.", english: "Two tickets, please.", context: "Buying movie tickets", grammar: "장 = counter for flat objects (tickets, paper)" },
      { id: "s25p2", korean: "자막 있어요?", english: "Are there subtitles?", context: "Checking for English subtitles", grammar: "자막 = subtitles" },
      { id: "s25p3", korean: "몇 시에 시작해요?", english: "What time does it start?", context: "Checking the showtime", grammar: "시작하다 = to start" },
      { id: "s25p4", korean: "팝콘 세트 주세요.", english: "Popcorn combo, please.", context: "The movie snack order", grammar: "세트 = set/combo" },
      { id: "s25p5", korean: "이 영화 재미있어요.", english: "This movie is fun/good.", context: "Commenting on a movie", grammar: "재미있다 = to be fun/interesting" }
    ]
  },
  {
    id: 26, topic: "movies", topicKorean: "영화", level: "topik1",
    scene: "Rainy afternoon. You're under a blanket watching a K-drama on Netflix. Your Korean friend texts asking what you're up to.",
    focusIndex: 0,
    phrases: [
      { id: "s26p1", korean: "드라마 보고 있어요.", english: "I'm watching a drama.", context: "Describing what you're doing right now", grammar: "-고 있어요 = am doing (present progressive)" },
      { id: "s26p2", korean: "이거 진짜 재미있어.", english: "This is really fun.", context: "Casual recommendation to a friend", grammar: "진짜 = really. 재미있어 = is fun (casual)" },
      { id: "s26p3", korean: "다음 화 빨리 보고 싶어.", english: "I want to see the next episode quickly.", context: "K-drama addiction symptoms", grammar: "다음 화 = next episode. 빨리 = quickly" },
      { id: "s26p4", korean: "같이 볼래?", english: "Want to watch together?", context: "Inviting someone to watch with you", grammar: "같이 = together. -ㄹ래 = do you want to (casual)" },
      { id: "s26p5", korean: "스포 하지 마!", english: "No spoilers!", context: "Essential K-drama etiquette", grammar: "스포 = spoiler. 하지 마 = don't do (casual)" }
    ]
  },
  {
    id: 27, topic: "movies", topicKorean: "영화", level: "topik1",
    scene: "You're at a friend's place. They're scrolling Netflix asking what to watch. You want to suggest the film that changed your perspective on Korean cinema.",
    focusIndex: 0,
    phrases: [
      { id: "s27p1", korean: "이거 봤어요?", english: "Have you seen this?", context: "Asking if someone has watched something", grammar: "봤어요 = have seen (past tense of 보다)" },
      { id: "s27p2", korean: "꼭 봐야 돼요.", english: "You must see it.", context: "Strong recommendation", grammar: "꼭 = definitely. 봐야 돼요 = must/have to see" },
      { id: "s27p3", korean: "무서운 영화 좋아해요?", english: "Do you like scary movies?", context: "Checking genre preference", grammar: "무서운 = scary. 좋아하다 = to like" },
      { id: "s27p4", korean: "감동적이었어요.", english: "It was moving.", context: "Describing an emotional film", grammar: "감동적 = moving/touching. -이었어요 = it was" },
      { id: "s27p5", korean: "결말이 좋았어요.", english: "The ending was good.", context: "Discussing the story", grammar: "결말 = ending/conclusion. 좋았어요 = was good" }
    ]
  },
  {
    id: 28, topic: "movies", topicKorean: "영화", level: "topik1",
    scene: "You're at a small film festival Q&A in a Jongno theater. The Korean director just finished speaking. The person next to you leans over.",
    focusIndex: 0,
    phrases: [
      { id: "s28p1", korean: "이 영화 진짜 감동적이었어요.", english: "This movie was really moving.", context: "Sharing your reaction with a stranger", grammar: "진짜 = really. 감동적 = moving/emotional" },
      { id: "s28p2", korean: "감독님 대단해요.", english: "The director is amazing.", context: "Praising the filmmaker", grammar: "감독님 = director (honorific). 대단하다 = to be amazing" },
      { id: "s28p3", korean: "한국 영화 좋아해요.", english: "I like Korean movies.", context: "Bonding over shared interest", grammar: "좋아하다 = to like" },
      { id: "s28p4", korean: "어떻게 생각해요?", english: "What do you think?", context: "Asking someone's opinion", grammar: "어떻게 = how. 생각하다 = to think" },
      { id: "s28p5", korean: "또 오고 싶어요.", english: "I want to come again.", context: "Expressing desire to return", grammar: "또 = again. 오고 싶다 = want to come" }
    ]
  },
  // ─── MUSIC & CONCERTS (29-32) ★ ───────────────────────────────
  {
    id: 29, topic: "music", topicKorean: "음악", level: "topik1",
    scene: "You scored tickets to an indie band at a small venue in Hongdae. The energy is electric. You squeeze toward the front.",
    focusIndex: 0,
    phrases: [
      { id: "s29p1", korean: "이 노래 진짜 좋다.", english: "This song is really good.", context: "Reacting to a great performance", grammar: "노래 = song. 좋다 = is good (casual/self-talk)" },
      { id: "s29p2", korean: "이 밴드 처음 들어봐요.", english: "This is my first time hearing this band.", context: "Discovering new music", grammar: "처음 = first time. 들어보다 = to try listening" },
      { id: "s29p3", korean: "앵콜! 앵콜!", english: "Encore! Encore!", context: "Calling for one more song", grammar: null },
      { id: "s29p4", korean: "너무 좋았어요.", english: "It was so good.", context: "Post-concert feelings", grammar: "너무 = so/very. 좋았어요 = was good" },
      { id: "s29p5", korean: "다음 공연 언제예요?", english: "When's the next show?", context: "Already wanting more", grammar: "공연 = performance/show. 언제 = when" }
    ]
  },
  {
    id: 30, topic: "music", topicKorean: "음악", level: "topik1",
    scene: "You're at a record shop in Hapjeong, flipping through vinyl. The owner is playing something that stops you mid-browse.",
    focusIndex: 0,
    phrases: [
      { id: "s30p1", korean: "이 노래 누가 불러요?", english: "Who sings this song?", context: "Discovering new music in the wild", grammar: "누가 = who. 부르다 = to sing/call" },
      { id: "s30p2", korean: "가사가 좋다.", english: "The lyrics are good.", context: "Appreciating songwriting", grammar: "가사 = lyrics" },
      { id: "s30p3", korean: "이 앨범 있어요?", english: "Do you have this album?", context: "Looking for a specific record", grammar: "앨범 = album" },
      { id: "s30p4", korean: "추천 좀 해 주세요.", english: "Please recommend something.", context: "Trusting the record shop owner's taste", grammar: "추천 = recommendation. 좀 = a bit (softener)" },
      { id: "s30p5", korean: "요즘 뭐 듣고 있어요?", english: "What are you listening to these days?", context: "Asking about current favorites", grammar: "요즘 = these days. 듣다 = to listen" }
    ]
  },
  {
    id: 31, topic: "music", topicKorean: "음악", level: "topik1",
    scene: "Friday night noraebang in Sinchon. Your friend shoves the mic at you. The song list is all Korean.",
    focusIndex: 0,
    phrases: [
      { id: "s31p1", korean: "노래방 가자!", english: "Let's go to karaoke!", context: "The classic Korean Friday night plan", grammar: "노래방 = karaoke room. -자 = let's (casual)" },
      { id: "s31p2", korean: "이 노래 알아요?", english: "Do you know this song?", context: "Checking if someone knows a song", grammar: "알다 = to know" },
      { id: "s31p3", korean: "마이크 주세요.", english: "Give me the mic.", context: "Claiming your turn", grammar: null },
      { id: "s31p4", korean: "노래 잘하네요!", english: "You sing well!", context: "Complimenting someone's singing", grammar: "잘하다 = to do well. -네요 = oh, (I see that)" },
      { id: "s31p5", korean: "한 곡 더!", english: "One more song!", context: "When the timer is running out", grammar: "한 곡 = one song (곡 = counter for songs)" }
    ]
  },
  {
    id: 32, topic: "music", topicKorean: "음악", level: "topik1",
    scene: "Walking through Hongdae on a Saturday. A busker is playing guitar and singing. A small crowd has gathered.",
    focusIndex: 0,
    phrases: [
      { id: "s32p1", korean: "목소리가 좋아요.", english: "You have a nice voice.", context: "Complimenting a singer", grammar: "목소리 = voice" },
      { id: "s32p2", korean: "어떤 장르 좋아해요?", english: "What genre do you like?", context: "Music taste conversation", grammar: "장르 = genre" },
      { id: "s32p3", korean: "매일 듣는 노래 있어요?", english: "Is there a song you listen to every day?", context: "Deeper music conversation", grammar: "매일 = every day. 듣는 = that you listen to" },
      { id: "s32p4", korean: "이거 들어 봐요.", english: "Try listening to this.", context: "Sharing music with someone", grammar: "들어 보다 = to try listening" },
      { id: "s32p5", korean: "음악 없으면 못 살아요.", english: "I can't live without music.", context: "Expressing how much music means to you", grammar: "없으면 = if there isn't. 못 살다 = can't live" }
    ]
  },
  // ─── EXPRESSING FEELINGS (33-36) ──────────────────────────────
  {
    id: 33, topic: "feelings", topicKorean: "감정", level: "topik1",
    scene: "You just nailed a new bouldering route you've been working on for weeks. Your climbing buddy gives you a high five.",
    focusIndex: 0,
    phrases: [
      { id: "s33p1", korean: "기분이 좋아요!", english: "I feel great!", context: "Expressing happiness", grammar: "기분 = feeling/mood. 좋다 = good" },
      { id: "s33p2", korean: "너무 기뻐요.", english: "I'm so happy.", context: "Deeper joy expression", grammar: "기쁘다 = to be happy/glad" },
      { id: "s33p3", korean: "드디어 했어요!", english: "I finally did it!", context: "Celebrating an achievement", grammar: "드디어 = finally/at last" },
      { id: "s33p4", korean: "신나요!", english: "I'm excited!", context: "Expressing excitement", grammar: "신나다 = to be excited/pumped" },
      { id: "s33p5", korean: "오늘 최고의 날이에요.", english: "Today is the best day.", context: "Peak happiness", grammar: "최고 = the best. 날 = day" }
    ]
  },
  {
    id: 34, topic: "feelings", topicKorean: "감정", level: "topik1",
    scene: "Long day. Your ADHD brain wouldn't cooperate at work. You're sitting in a café staring at your coffee.",
    focusIndex: 0,
    phrases: [
      { id: "s34p1", korean: "좀 피곤해요.", english: "I'm a bit tired.", context: "Understated exhaustion — very Korean", grammar: "좀 = a bit. 피곤하다 = to be tired" },
      { id: "s34p2", korean: "오늘 힘들었어요.", english: "Today was tough.", context: "Acknowledging a hard day", grammar: "힘들다 = to be hard/difficult" },
      { id: "s34p3", korean: "집중이 안 돼요.", english: "I can't focus.", context: "ADHD mood — relatable", grammar: "집중 = focus/concentration. 안 되다 = doesn't work" },
      { id: "s34p4", korean: "쉬고 싶어요.", english: "I want to rest.", context: "Expressing need for downtime", grammar: "쉬다 = to rest" },
      { id: "s34p5", korean: "내일은 나을 거예요.", english: "Tomorrow will be better.", context: "Self-encouragement", grammar: "내일 = tomorrow. 낫다 = to be better" }
    ]
  },
  {
    id: 35, topic: "feelings", topicKorean: "감정", level: "topik1",
    scene: "Your friend shows you a rooftop view of Seoul at sunset. Namsan Tower is glowing in the distance.",
    focusIndex: 0,
    phrases: [
      { id: "s35p1", korean: "와, 대박!", english: "Wow, amazing!", context: "Korean's favorite exclamation of surprise", grammar: "대박 = jackpot/amazing (slang)" },
      { id: "s35p2", korean: "진짜 예쁘다.", english: "It's really beautiful.", context: "Reacting to something beautiful", grammar: "예쁘다 = pretty/beautiful" },
      { id: "s35p3", korean: "몰랐어요.", english: "I didn't know.", context: "Expressing surprise at something new", grammar: "모르다 = to not know. -았어요 = past tense" },
      { id: "s35p4", korean: "놀랐어요.", english: "I was surprised.", context: "Being caught off guard", grammar: "놀라다 = to be surprised" },
      { id: "s35p5", korean: "잊지 못할 것 같아요.", english: "I don't think I'll forget this.", context: "An unforgettable moment", grammar: "잊다 = to forget. 못할 것 같다 = seems like I won't be able to" }
    ]
  },
  {
    id: 36, topic: "feelings", topicKorean: "감정", level: "topik1",
    scene: "You accidentally bumped into someone's coffee in the subway. They look annoyed. You need to apologize sincerely.",
    focusIndex: 0,
    phrases: [
      { id: "s36p1", korean: "정말 죄송합니다.", english: "I'm really sorry.", context: "Sincere formal apology", grammar: "정말 = really. 죄송합니다 = I'm sorry (formal)" },
      { id: "s36p2", korean: "실수였어요.", english: "It was a mistake.", context: "Explaining it wasn't intentional", grammar: "실수 = mistake" },
      { id: "s36p3", korean: "괜찮으세요?", english: "Are you okay?", context: "Showing concern for someone", grammar: "괜찮다 = to be okay. -으세요 = honorific" },
      { id: "s36p4", korean: "걱정하지 마세요.", english: "Don't worry.", context: "Reassuring someone", grammar: "걱정하다 = to worry. -지 마세요 = please don't" },
      { id: "s36p5", korean: "다음에 조심할게요.", english: "I'll be careful next time.", context: "Promising to be more careful", grammar: "다음에 = next time. 조심하다 = to be careful" }
    ]
  },
  // ─── WEATHER & SMALL TALK (37-40) ─────────────────────────────
  {
    id: 37, topic: "weather", topicKorean: "날씨", level: "topik1",
    scene: "Monday morning elevator with your Korean coworker. You both look at the grey sky through the lobby window.",
    focusIndex: 0,
    phrases: [
      { id: "s37p1", korean: "오늘 날씨 좋다.", english: "The weather is nice today.", context: "The universal small talk opener", grammar: "날씨 = weather. 좋다 = good (casual/observational)", response: { korean: "그러게요, 진짜 따뜻하네요.", english: "Right? It's really warm." } },
      { id: "s37p2", korean: "비 올 것 같아요.", english: "It looks like it's going to rain.", context: "Predicting rain", grammar: "비 = rain. 올 것 같다 = seems like it will come" },
      { id: "s37p3", korean: "우산 가져왔어요?", english: "Did you bring an umbrella?", context: "Practical weather conversation", grammar: "우산 = umbrella. 가져오다 = to bring" },
      { id: "s37p4", korean: "너무 추워요.", english: "It's so cold.", context: "Commenting on temperature", grammar: "춥다 = to be cold" },
      { id: "s37p5", korean: "오늘 몇 도예요?", english: "How many degrees is it today?", context: "Asking the temperature", grammar: "몇 도 = how many degrees" }
    ]
  },
  {
    id: 38, topic: "weather", topicKorean: "일상 대화", level: "topik1",
    scene: "Friday evening at the climbing gym. Your belaying partner asks about your weekend plans.",
    focusIndex: 0,
    phrases: [
      { id: "s38p1", korean: "주말에 뭐 해요?", english: "What are you doing this weekend?", context: "Classic casual conversation starter", grammar: "주말 = weekend. 뭐 = what" },
      { id: "s38p2", korean: "특별한 계획 없어요.", english: "No special plans.", context: "When you have a chill weekend ahead", grammar: "특별한 = special. 계획 = plan" },
      { id: "s38p3", korean: "집에서 쉴 거예요.", english: "I'm going to rest at home.", context: "The introvert's weekend plan", grammar: "집에서 = at home. 쉬다 = to rest. -ㄹ 거예요 = going to" },
      { id: "s38p4", korean: "같이 갈래요?", english: "Want to go together?", context: "Inviting someone along", grammar: "같이 = together. -ㄹ래요 = want to (polite)" },
      { id: "s38p5", korean: "좋아요, 가요!", english: "Sure, let's go!", context: "Enthusiastic agreement", grammar: "좋아요 = good/okay. 가요 = let's go" }
    ]
  },
  {
    id: 39, topic: "weather", topicKorean: "일상 대화", level: "topik1",
    scene: "You run into your Korean neighbor in the hallway. She's carrying groceries. You want to be friendly.",
    focusIndex: 0,
    phrases: [
      { id: "s39p1", korean: "안녕하세요!", english: "Hello!", context: "Standard greeting — warm and respectful", grammar: null },
      { id: "s39p2", korean: "오늘 많이 바빠요?", english: "Are you busy today?", context: "Casual check-in", grammar: "많이 = a lot. 바쁘다 = to be busy" },
      { id: "s39p3", korean: "맛있는 거 샀어요?", english: "Did you buy something tasty?", context: "Friendly comment about groceries", grammar: "맛있는 = delicious. 사다 = to buy" },
      { id: "s39p4", korean: "건강하세요!", english: "Stay healthy!", context: "Warm farewell in Korea", grammar: "건강하다 = to be healthy. -세요 = please (honorific)" },
      { id: "s39p5", korean: "다음에 또 봐요.", english: "See you again next time.", context: "Casual goodbye between acquaintances", grammar: "다음에 = next time. 또 = again. 봐요 = see" }
    ]
  },
  {
    id: 40, topic: "weather", topicKorean: "일상 대화", level: "topik1",
    scene: "You're at a friend's house warming party. Everyone is Korean except you. Time to mingle.",
    focusIndex: 0,
    phrases: [
      { id: "s40p1", korean: "처음 뵙겠습니다.", english: "Nice to meet you. (First time meeting)", context: "Formal first introduction", grammar: "처음 = first time. 뵙다 = to see/meet (humble)", response: { korean: "반갑습니다! 많이 들었어요.", english: "Nice to meet you! I've heard a lot about you." } },
      { id: "s40p2", korean: "한국에 온 지 얼마나 됐어요?", english: "How long has it been since you came to Korea?", context: "Common question for foreigners", grammar: "온 지 = since coming. 얼마나 = how long" },
      { id: "s40p3", korean: "한국어 잘하시네요!", english: "Your Korean is good!", context: "Compliment you'll hear — and can give", grammar: "잘하다 = to do well. -시네요 = oh, you (honorific)" },
      { id: "s40p4", korean: "아직 많이 부족해요.", english: "I still have a lot to improve.", context: "Humble response to compliments — very Korean", grammar: "아직 = still. 부족하다 = to be lacking" },
      { id: "s40p5", korean: "연락처 교환할까요?", english: "Shall we exchange contacts?", context: "Making a new friend", grammar: "연락처 = contact info. 교환 = exchange" }
    ]
  },
  // ─── TOPIK 2: WORK & MEETINGS (41-43) ★ ───────────────────────
  {
    id: 41, topic: "work", topicKorean: "직장", level: "topik2",
    scene: "First day at a Korean startup's marketing team. Your manager shows you around the open-plan office. Everyone looks busy.",
    focusIndex: 0,
    phrases: [
      { id: "s41p1", korean: "잘 부탁드립니다.", english: "Please take care of me. (I look forward to working with you.)", context: "Essential phrase for starting any work relationship", grammar: "부탁드리다 = to request (humble). Standard greeting for new colleagues" },
      { id: "s41p2", korean: "회의 시간이 바뀌었어요.", english: "The meeting time has changed.", context: "Schedule updates happen constantly", grammar: "회의 = meeting. 바뀌다 = to change (intransitive)" },
      { id: "s41p3", korean: "보고서 확인해 주세요.", english: "Please check the report.", context: "Requesting a review", grammar: "보고서 = report. 확인하다 = to check/confirm" },
      { id: "s41p4", korean: "언제까지 해야 돼요?", english: "When is this due?", context: "Asking about deadlines", grammar: "언제까지 = by when. 해야 되다 = have to do" },
      { id: "s41p5", korean: "수고하셨습니다.", english: "Good work today. (Thanks for your effort.)", context: "Said when leaving the office — essential", grammar: "수고 = effort. Ritual phrase at end of workday" }
    ]
  },
  {
    id: 42, topic: "work", topicKorean: "직장", level: "topik2",
    scene: "Team meeting. The project manager is outlining next quarter's campaign. You have a question but don't want to interrupt rudely.",
    focusIndex: 0,
    phrases: [
      { id: "s42p1", korean: "질문 하나 해도 될까요?", english: "May I ask a question?", context: "Politely interjecting in a meeting", grammar: "질문 = question. 해도 될까요 = would it be okay if I" },
      { id: "s42p2", korean: "좀 더 자세히 설명해 주세요.", english: "Please explain in more detail.", context: "Asking for clarification", grammar: "자세히 = in detail. 설명하다 = to explain" },
      { id: "s42p3", korean: "저도 같은 생각이에요.", english: "I think the same.", context: "Agreeing with a colleague", grammar: "같은 = same. 생각 = thought/opinion" },
      { id: "s42p4", korean: "다른 의견 있으시면 말씀해 주세요.", english: "If you have a different opinion, please share.", context: "Opening the floor for discussion", grammar: "의견 = opinion. 말씀하다 = to speak (honorific)" }
    ]
  },
  {
    id: 43, topic: "work", topicKorean: "직장", level: "topik2",
    scene: "You need to email the Korean client about the campaign timeline. Your coworker helps you draft it.",
    focusIndex: 0,
    phrases: [
      { id: "s43p1", korean: "메일 확인하셨어요?", english: "Did you check the email?", context: "Following up on a sent email", grammar: "메일 = email. 확인하다 = to check. -셨어요 = honorific past" },
      { id: "s43p2", korean: "첨부파일 보내 드릴게요.", english: "I'll send you the attachment.", context: "Sending files", grammar: "첨부파일 = attachment. 보내 드리다 = to send (humble)" },
      { id: "s43p3", korean: "회신 부탁드립니다.", english: "Please reply at your convenience.", context: "Polite email closing", grammar: "회신 = reply. 부탁드리다 = I request (humble)" },
      { id: "s43p4", korean: "일정 조율이 필요해요.", english: "We need to coordinate the schedule.", context: "Scheduling discussion", grammar: "일정 = schedule. 조율 = coordination/adjustment" }
    ]
  },
  // ─── OPINIONS & DISCUSSIONS (44-46) ★ ─────────────────────────
  {
    id: 44, topic: "opinions", topicKorean: "의견", level: "topik2",
    scene: "After a film screening, you and your friend argue about whether the protagonist made the right choice. You see it differently.",
    focusIndex: 0,
    phrases: [
      { id: "s44p1", korean: "저는 좀 다르게 생각해요.", english: "I think a bit differently.", context: "Respectfully disagreeing", grammar: "다르게 = differently. 생각하다 = to think" },
      { id: "s44p2", korean: "일리가 있네요.", english: "That makes sense. / You have a point.", context: "Acknowledging someone's argument", grammar: "일리 = reason/logic. 있네요 = there is (I see)" },
      { id: "s44p3", korean: "그럴 수도 있어요.", english: "That could be the case.", context: "Soft concession without fully agreeing", grammar: "그렇다 = to be so. -ㄹ 수도 있다 = it could be" },
      { id: "s44p4", korean: "왜 그렇게 생각해요?", english: "Why do you think so?", context: "Asking for reasoning — not aggressive, curious", grammar: "왜 = why. 그렇게 = like that" },
      { id: "s44p5", korean: "그 말도 맞아요.", english: "That's true too.", context: "Validating both perspectives", grammar: "그 말 = those words. 맞다 = to be right" }
    ]
  },
  {
    id: 45, topic: "opinions", topicKorean: "의견", level: "topik2",
    scene: "Late night at a pojangmacha. The conversation turns deep — your friend is at a career crossroads. They ask for your honest take.",
    focusIndex: 0,
    phrases: [
      { id: "s45p1", korean: "솔직히 말하면요.", english: "To be honest.", context: "Prefacing an honest opinion", grammar: "솔직히 = honestly. 말하면 = if I say" },
      { id: "s45p2", korean: "너무 걱정하지 마.", english: "Don't worry too much.", context: "Comforting a friend (casual)", grammar: "걱정하다 = to worry. -지 마 = don't" },
      { id: "s45p3", korean: "네가 결정해야 해.", english: "You have to decide.", context: "Gently putting ownership on the person", grammar: "네가 = you. 결정하다 = to decide. -해야 해 = have to" },
      { id: "s45p4", korean: "천천히 생각해 봐.", english: "Think about it slowly.", context: "Suggesting they take their time", grammar: "천천히 = slowly. 생각해 보다 = to think about/try thinking" },
      { id: "s45p5", korean: "뭘 하든 응원할게.", english: "Whatever you do, I'll support you.", context: "Unconditional support", grammar: "뭘 하든 = whatever you do. 응원하다 = to cheer on/support" }
    ]
  },
  {
    id: 46, topic: "opinions", topicKorean: "의견", level: "topik2",
    scene: "A heated but respectful discussion at a reading club in Itaewon about whether self-help books actually help.",
    focusIndex: 0,
    phrases: [
      { id: "s46p1", korean: "관점에 따라 다를 수 있어요.", english: "It can differ depending on perspective.", context: "Acknowledging subjectivity", grammar: "관점 = perspective. 따라 = depending on. 다르다 = to differ" },
      { id: "s46p2", korean: "핵심은 이거예요.", english: "The key point is this.", context: "Summarizing your argument", grammar: "핵심 = core/key point" },
      { id: "s46p3", korean: "구체적인 예를 들어 볼게요.", english: "Let me give a specific example.", context: "Backing up your point", grammar: "구체적인 = specific. 예 = example. 들다 = to give/raise" },
      { id: "s46p4", korean: "동의해요.", english: "I agree.", context: "Expressing agreement", grammar: "동의하다 = to agree" }
    ]
  },
  // ─── K-DRAMA SITUATIONS (47-49) ★ ─────────────────────────────
  {
    id: 47, topic: "kdrama", topicKorean: "드라마", level: "topik2",
    scene: "You're watching a drama where the leads have a classic misunderstanding. The tension is unbearable. These are the phrases flying back and forth.",
    focusIndex: 0,
    phrases: [
      { id: "s47p1", korean: "그런 뜻이 아니었어.", english: "That's not what I meant.", context: "The classic K-drama misunderstanding line", grammar: "뜻 = meaning/intention. 아니다 = to not be" },
      { id: "s47p2", korean: "오해하지 마.", english: "Don't misunderstand.", context: "Trying to clear things up", grammar: "오해하다 = to misunderstand. -지 마 = don't" },
      { id: "s47p3", korean: "내 말 좀 들어.", english: "Listen to me.", context: "Pleading to be heard", grammar: "내 말 = my words. 좀 = please. 듣다 = to listen" },
      { id: "s47p4", korean: "미안해, 내가 잘못했어.", english: "I'm sorry, I was wrong.", context: "Owning up to a mistake", grammar: "잘못하다 = to do wrong" },
      { id: "s47p5", korean: "다시 시작하자.", english: "Let's start over.", context: "Offering a fresh beginning", grammar: "다시 = again. 시작하다 = to start" }
    ]
  },
  {
    id: 48, topic: "kdrama", topicKorean: "드라마", level: "topik2",
    scene: "The emotional confession scene. Rain optional. One character finally says what they've been holding back all season.",
    focusIndex: 0,
    phrases: [
      { id: "s48p1", korean: "보고 싶었어.", english: "I missed you.", context: "One of the most emotional Korean phrases", grammar: "보고 싶다 = to miss (want to see). -었어 = past casual" },
      { id: "s48p2", korean: "너밖에 없어.", english: "There's no one but you.", context: "K-drama confession classic", grammar: "너 = you. -밖에 없다 = there's nothing/no one but" },
      { id: "s48p3", korean: "진심이야.", english: "I'm serious. / I mean it.", context: "Declaring sincerity", grammar: "진심 = sincerity/true heart" },
      { id: "s48p4", korean: "내 곁에 있어 줘.", english: "Stay by my side.", context: "Asking someone to stay", grammar: "곁에 = by one's side. 있어 주다 = to stay (for someone)" },
      { id: "s48p5", korean: "늦어서 미안해.", english: "Sorry I'm late. (Sorry it took so long.)", context: "Apologizing for delayed confession", grammar: "늦다 = to be late. -어서 = because" }
    ]
  },
  {
    id: 49, topic: "kdrama", topicKorean: "드라마", level: "topik2",
    scene: "The intense confrontation. Two characters face off. The music swells. These are the words that cut deep.",
    focusIndex: 0,
    phrases: [
      { id: "s49p1", korean: "거짓말하지 마.", english: "Don't lie.", context: "Calling someone out", grammar: "거짓말 = lie. 하지 마 = don't do" },
      { id: "s49p2", korean: "왜 말 안 했어?", english: "Why didn't you tell me?", context: "Hurt by being kept in the dark", grammar: "왜 = why. 말 안 하다 = to not speak/tell" },
      { id: "s49p3", korean: "이제 어쩌려고.", english: "What are you going to do now.", context: "Resignation about a bad situation", grammar: "이제 = now. 어쩌다 = what to do" },
      { id: "s49p4", korean: "나한테 이러면 안 돼.", english: "You can't do this to me.", context: "Setting a boundary", grammar: "나한테 = to me. 이러다 = to do this. 안 되다 = shouldn't" }
    ]
  },
  // ─── DEEPER FOOD CULTURE (50-52) ──────────────────────────────
  {
    id: 50, topic: "food-culture", topicKorean: "음식 문화", level: "topik2",
    scene: "Your Korean friend is teaching you to make kimchi jjigae in their tiny studio kitchen. You're chopping while they stir.",
    focusIndex: 0,
    phrases: [
      { id: "s50p1", korean: "이거 직접 만든 거예요?", english: "Did you make this yourself?", context: "Asking if something is homemade", grammar: "직접 = directly/personally. 만들다 = to make" },
      { id: "s50p2", korean: "요리 잘하시네요.", english: "You're a good cook.", context: "Complimenting someone's cooking", grammar: "요리 = cooking. 잘하다 = to do well. -시네요 = honorific admiration" },
      { id: "s50p3", korean: "이거 넣어도 돼요?", english: "Can I add this?", context: "Asking before putting something in the pot", grammar: "넣다 = to put in. -어도 되다 = is it okay to" },
      { id: "s50p4", korean: "불 세기 어떻게 해요?", english: "How should I set the heat?", context: "Asking about cooking temperature", grammar: "불 세기 = fire strength/heat level" },
      { id: "s50p5", korean: "엄마 맛이에요.", english: "It tastes like mom's cooking.", context: "The highest compliment for Korean home cooking", grammar: "엄마 = mom. 맛 = taste" }
    ]
  },
  {
    id: 51, topic: "food-culture", topicKorean: "음식 문화", level: "topik2",
    scene: "Cold night. An orange tent glows on the street. You duck into a pojangmacha with a friend. The warmth hits you immediately.",
    focusIndex: 0,
    phrases: [
      { id: "s51p1", korean: "여기 앉아도 돼요?", english: "Can I sit here?", context: "Asking for a seat at the pojangmacha", grammar: "앉다 = to sit. -아도 되다 = is it okay to" },
      { id: "s51p2", korean: "소주 한 병이랑 안주 주세요.", english: "One bottle of soju and some snacks, please.", context: "The classic pojangmacha order", grammar: "소주 = soju. 안주 = snacks eaten with alcohol" },
      { id: "s51p3", korean: "건배!", english: "Cheers!", context: "Toasting — important part of drinking culture", grammar: null },
      { id: "s51p4", korean: "한 잔 더 할까요?", english: "Shall we have one more?", context: "Suggesting another round", grammar: "한 잔 = one glass. 더 = more. -ㄹ까요 = shall we" },
      { id: "s51p5", korean: "오늘 정말 좋았어요.", english: "Tonight was really good.", context: "Warm end to a great evening", grammar: null }
    ]
  },
  {
    id: 52, topic: "food-culture", topicKorean: "음식 문화", level: "topik2",
    scene: "Your coworker's mom packed extra lunch and shared it with the office. Homemade kimbap and japchae. Everyone gathers.",
    focusIndex: 0,
    phrases: [
      { id: "s52p1", korean: "잘 먹겠습니다.", english: "I'll eat well. (Thank you for the food.)", context: "Always said before eating — shows gratitude", grammar: "Ritual phrase before meals", response: { korean: "많이 드세요, 더 있어요.", english: "Eat lots, there's more." } },
      { id: "s52p2", korean: "손맛이 좋으세요.", english: "Your cooking touch is wonderful.", context: "Complimenting the cook's skill", grammar: "손맛 = hand-taste (cooking touch). 좋다 = good" },
      { id: "s52p3", korean: "레시피 알려 주세요.", english: "Please share the recipe.", context: "When the food is too good not to learn", grammar: "레시피 = recipe" },
      { id: "s52p4", korean: "잘 먹었습니다.", english: "I ate well. (That was delicious.)", context: "After finishing — the bookend to 잘 먹겠습니다", grammar: "Ritual phrase after meals" }
    ]
  },
  // ─── PHILOSOPHY & THOUGHTS (53-54) ★ ──────────────────────────
  {
    id: 53, topic: "philosophy", topicKorean: "생각", level: "topik2",
    scene: "Late night on a rooftop with a friend. Seoul stretches below, lit up. The conversation turns to life, purpose, and what it all means.",
    focusIndex: 0,
    phrases: [
      { id: "s53p1", korean: "중요한 건 꾸준함이야.", english: "What matters is consistency.", context: "A Stoic truth — steady effort beats bursts", grammar: "중요한 건 = the important thing. 꾸준함 = consistency/steadiness" },
      { id: "s53p2", korean: "지금 이 순간이 중요해.", english: "This moment right now is what matters.", context: "Mindfulness — Buddhist-adjacent", grammar: "순간 = moment. 중요하다 = to be important" },
      { id: "s53p3", korean: "실패해도 괜찮아.", english: "It's okay to fail.", context: "Self-compassion", grammar: "실패하다 = to fail. -해도 = even if" },
      { id: "s53p4", korean: "사람은 변할 수 있어.", english: "People can change.", context: "Belief in growth — Jungian individuation", grammar: "사람 = person. 변하다 = to change. -ㄹ 수 있다 = can" },
      { id: "s53p5", korean: "답은 안에 있어.", english: "The answer is within.", context: "Inner wisdom — shadow work insight", grammar: "답 = answer. 안에 = inside" }
    ]
  },
  {
    id: 54, topic: "philosophy", topicKorean: "생각", level: "topik2",
    scene: "Walking a quiet temple trail in Bukhansan. Your friend, a meditation practitioner, shares a thought that stays with you.",
    focusIndex: 0,
    phrases: [
      { id: "s54p1", korean: "그건 관점의 차이야.", english: "That's a difference in perspective.", context: "Acknowledging different worldviews", grammar: "관점 = perspective. 차이 = difference" },
      { id: "s54p2", korean: "완벽할 필요 없어.", english: "You don't need to be perfect.", context: "Releasing perfectionism", grammar: "완벽하다 = to be perfect. 필요 없다 = there's no need" },
      { id: "s54p3", korean: "과정이 더 중요해.", english: "The process is more important.", context: "Journey over destination", grammar: "과정 = process. 더 = more" },
      { id: "s54p4", korean: "감사한 마음이 생겨.", english: "A feeling of gratitude arises.", context: "Noticing gratitude in the moment", grammar: "감사한 = grateful. 마음 = heart/mind. 생기다 = to arise" }
    ]
  },
  // ─── HEALTH & WELLBEING (55-56) ───────────────────────────────
  {
    id: 55, topic: "health", topicKorean: "건강", level: "topik2",
    scene: "You're not feeling well. You find a pharmacy near your guesthouse in Jongno and try to explain your symptoms.",
    focusIndex: 0,
    phrases: [
      { id: "s55p1", korean: "머리가 아파요.", english: "My head hurts.", context: "Describing a headache", grammar: "머리 = head. 아프다 = to hurt/be sick", response: { korean: "언제부터 아팠어요?", english: "Since when has it been hurting?" } },
      { id: "s55p2", korean: "진통제 있어요?", english: "Do you have painkillers?", context: "Asking for pain medication", grammar: "진통제 = painkiller" },
      { id: "s55p3", korean: "하루에 몇 번 먹어요?", english: "How many times a day should I take it?", context: "Asking about dosage", grammar: "하루에 = per day. 몇 번 = how many times" },
      { id: "s55p4", korean: "식후에 드세요.", english: "Take it after meals.", context: "Common pharmacist instruction", grammar: "식후 = after meals. 드세요 = please take/eat (honorific)" },
      { id: "s55p5", korean: "알레르기 있어요?", english: "Do you have any allergies?", context: "The pharmacist checking before dispensing", grammar: "알레르기 = allergy" }
    ]
  },
  {
    id: 56, topic: "health", topicKorean: "건강", level: "topik2",
    scene: "You've been pushing too hard at the climbing gym. Your friend notices and suggests you take care of yourself.",
    focusIndex: 0,
    phrases: [
      { id: "s56p1", korean: "요즘 좀 안 좋아요.", english: "I haven't been feeling great lately.", context: "Admitting you're not at your best", grammar: "요즘 = these days. 안 좋다 = not good" },
      { id: "s56p2", korean: "스트레칭 해야 돼.", english: "I need to stretch.", context: "Post-climbing recovery essential", grammar: "스트레칭 = stretching. 해야 되다 = need to do" },
      { id: "s56p3", korean: "충분히 자고 있어요?", english: "Are you getting enough sleep?", context: "A friend checking in on your rest", grammar: "충분히 = sufficiently. 자다 = to sleep" },
      { id: "s56p4", korean: "무리하지 마.", english: "Don't overdo it.", context: "A caring warning", grammar: "무리하다 = to overdo/strain. -지 마 = don't" }
    ]
  },
  // ─── ROCK CLIMBING (57) ★ ─────────────────────────────────────
  {
    id: 57, topic: "climbing", topicKorean: "클라이밍", level: "topik2",
    scene: "Saturday afternoon at your regular climbing gym in Mapo-gu. The new routes are set. Your climbing partner is warming up on the slab wall.",
    focusIndex: 0,
    phrases: [
      { id: "s57p1", korean: "이 루트 어때요?", english: "How's this route?", context: "Asking about a climbing route", grammar: "루트 = route. 어때요 = how is it" },
      { id: "s57p2", korean: "홀드가 미끄러워요.", english: "The holds are slippery.", context: "Warning about grip conditions", grammar: "홀드 = hold. 미끄럽다 = to be slippery" },
      { id: "s57p3", korean: "이번에 완등했어요!", english: "I topped it this time!", context: "Celebrating a completed route", grammar: "이번에 = this time. 완등 = complete ascent" },
      { id: "s57p4", korean: "다리에 힘이 없어요.", english: "My legs have no strength left.", context: "Post-climb exhaustion", grammar: "다리 = legs. 힘 = strength. 없다 = there isn't" },
      { id: "s57p5", korean: "한 번 더 해 볼까요?", english: "Shall we try one more time?", context: "The eternal climbing question", grammar: "한 번 더 = one more time. 해 보다 = to try doing" }
    ]
  },
  // ─── TRAVEL & DIRECTIONS (58) ────────────────────────────────
  {
    id: 58, topic: "travel", topicKorean: "여행", level: "topik2",
    scene: "You're checking into a guesthouse in Gyeongju. The owner speaks limited English but is incredibly warm. You try Korean.",
    focusIndex: 0,
    phrases: [
      { id: "s58p1", korean: "예약했어요.", english: "I have a reservation.", context: "Checking in at accommodation", grammar: "예약 = reservation. -했어요 = did/have done", response: { korean: "성함이 어떻게 되세요?", english: "What's your name, please?" } },
      { id: "s58p2", korean: "체크인 할게요.", english: "I'd like to check in.", context: "Standard hotel/guesthouse phrase", grammar: "체크인 = check-in" },
      { id: "s58p3", korean: "짐 맡겨도 돼요?", english: "Can I leave my luggage?", context: "Storing bags before/after check-in time", grammar: "짐 = luggage. 맡기다 = to entrust/leave with" },
      { id: "s58p4", korean: "주변에 맛집 추천해 주세요.", english: "Please recommend good restaurants nearby.", context: "Locals always know the best spots", grammar: "주변 = nearby/surroundings. 맛집 = good restaurant" },
      { id: "s58p5", korean: "잘 쉬었습니다.", english: "I rested well. (Thanks for the stay.)", context: "Polite farewell when checking out", grammar: "잘 쉬다 = to rest well. Farewell phrase at accommodations" }
    ]
  },
  // ─── READING & BOOKS (59) ★ ───────────────────────────────────
  {
    id: 59, topic: "books", topicKorean: "책", level: "topik2",
    scene: "You wander into an independent bookstore in Mangwon-dong. The shelves are floor to ceiling. That particular quiet only bookshops have.",
    focusIndex: 0,
    phrases: [
      { id: "s59p1", korean: "요즘 뭐 읽어요?", english: "What are you reading these days?", context: "The reader's favorite question", grammar: "요즘 = these days. 읽다 = to read" },
      { id: "s59p2", korean: "이 작가 좋아해요.", english: "I like this author.", context: "Sharing literary taste", grammar: "작가 = author/writer" },
      { id: "s59p3", korean: "한국어 책 있어요?", english: "Do you have Korean language books?", context: "Looking for Korean study material", grammar: null },
      { id: "s59p4", korean: "요즘 인기 있는 소설 있어요?", english: "Do you have any popular novels right now?", context: "Asking for a current bestseller", grammar: "인기 = popularity. 소설 = novel" },
      { id: "s59p5", korean: "선물 포장 해줄 수 있어요?", english: "Can you gift wrap it?", context: "Requesting gift wrapping for a friend", grammar: "선물 포장 = gift wrapping. 해줄 수 있다 = can you do (for me)" }
    ]
  },
  // ─── TEXTING & CASUAL CHAT (60) ───────────────────────────────
  {
    id: 60, topic: "texting", topicKorean: "문자", level: "topik2",
    scene: "Your Korean friend group chat is blowing up. Plans for dinner, memes, and that specific chaos of Korean group texts.",
    focusIndex: 0,
    phrases: [
      { id: "s60p1", korean: "ㅋㅋㅋ", english: "Hahaha (lol)", context: "Korean text laughter — the more ㅋs the funnier", grammar: "ㅋ = 크 (keu) — represents laughter. Stack for intensity", response: { korean: "뭐가 그렇게 웃겨 ㅋㅋ", english: "What's so funny lol" } },
      { id: "s60p2", korean: "ㅇㅇ", english: "Yeah / Yep", context: "Ultra-casual agreement in text", grammar: "Short for 응응 (eung eung = yeah yeah)" },
      { id: "s60p3", korean: "갑자기?", english: "Out of nowhere? / Suddenly?", context: "When someone says something unexpected", grammar: "갑자기 = suddenly" },
      { id: "s60p4", korean: "나 지금 가는 중.", english: "I'm on my way now.", context: "Telling friends you're coming", grammar: "가는 중 = in the middle of going" },
      { id: "s60p5", korean: "내일 봐!", english: "See you tomorrow!", context: "Casual farewell text", grammar: "내일 = tomorrow. 봐 = see (casual)" }
    ]
  }
];

// ─── GRAMMAR SKELETONS & ANCHOR TAGS ──────────────────────────
// Roadmap #3: Extracted grammar contract per session.
// Each skeleton defines the grammar point(s), key vocab, and whether
// the session is an anchor (topic + grammar inseparable, untouched by AI).
// Non-anchor sessions can be re-skinned by the AI personalization system (#8).
//
// Skeleton spec per session:
//   grammar:    Primary grammar pattern(s) taught
//   keyVocab:   Words that MUST appear regardless of topic re-skinning
//   anchor:     true = topic+grammar naturally paired, no AI re-skin
//   notes:      Why it's anchored, or what makes the grammar transferable

window.GRAMMAR_SKELETONS = {
  // ─── CAFÉ & ORDERING (1-4) — ALL ANCHORS ─────────────────────
  // Ordering grammar is inseparable from service/shop contexts.
  1: {
    grammar: ["주세요 (please give me)", "얼마예요 (how much)", "돼요 (is it okay/possible)", "-ㄹ게요 (soft promise/intent)"],
    keyVocab: ["주세요", "얼마", "돼요"],
    anchor: true,
    notes: "Foundational ordering grammar — must be taught in a service context"
  },
  2: {
    grammar: ["해 주세요 (please do for me)", "-게 해 주세요 (please make it...)", "맛있어요 (is delicious)", "-ㄹ게요 (I will)"],
    keyVocab: ["해 주세요", "맛있어요"],
    anchor: true,
    notes: "Modification requests — needs ordering context"
  },
  3: {
    grammar: ["있어요 (there is / do you have)", "뭐예요 (what is it)", "좋다 (casual observation)"],
    keyVocab: ["있어요", "뭐예요"],
    anchor: true,
    notes: "Existence/availability questions — café essentials like wifi, outlets, seats"
  },
  4: {
    grammar: ["추천해 주세요 (please recommend)", "-지 않은 (not... adjective form)", "하나 더 (one more)", "잘 먹겠습니다 (pre-meal ritual)"],
    keyVocab: ["추천", "하나 더", "잘 먹겠습니다"],
    anchor: true,
    notes: "Menu navigation + dining ritual phrases — food context essential"
  },

  // ─── CONVENIENCE STORE (5-8) — ALL ANCHORS ───────────────────
  // Transactional phrases tied to retail/convenience store interactions.
  5: {
    grammar: ["필요하세요? (do you need — polite)", "괜찮아요 (it's okay / no need)", "-어 주세요 (please do for me)"],
    keyVocab: ["필요하세요", "괜찮아요", "주세요"],
    anchor: true,
    notes: "Cashier interaction grammar — needs retail context"
  },
  6: {
    grammar: ["어디 있어요? (where is...)", "저기 (over there)", "맛있게 드세요 (honorific enjoy)"],
    keyVocab: ["어디", "있어요", "드세요"],
    anchor: true,
    notes: "Finding items in a store — location + honorific"
  },
  7: {
    grammar: ["-로 할게요 (I'll do it with/by...)", "-이랑 (and — casual connector)", "충전 (charge/top-up)"],
    keyVocab: ["카드로", "현금으로", "할게요"],
    anchor: true,
    notes: "Payment method grammar — needs transactional context"
  },
  8: {
    grammar: ["-어도 돼요? (is it okay to...)", "-니까 (because/since)", "조심하세요 (please be careful)"],
    keyVocab: ["돼요", "-니까"],
    anchor: true,
    notes: "Permission + reason grammar — taught via asking to use things in a store"
  },

  // ─── RESTAURANT & FOOD (9-12) — ALL ANCHORS ──────────────────
  // Food ordering, menu interaction, and dining grammar.
  9: {
    grammar: ["뭐가 맛있어요? (what's good)", "어떤 (what kind of)", "-지 않은 걸로 (the one that's not...)", "계산해 주세요 (bill please)", "과거 -었어요"],
    keyVocab: ["맛있어요", "계산", "맵다"],
    anchor: true,
    notes: "Menu questions + bill — inseparable from restaurant"
  },
  10: {
    grammar: ["추가해 주세요 (please add more)", "좀 줄여 주세요 (please reduce a bit)", "counter: 한 병 (one bottle)", "배불러요 (I'm full)"],
    keyVocab: ["추가", "더", "한 병"],
    anchor: true,
    notes: "KBBQ-specific ordering — counters for bottles, more-of requests"
  },
  11: {
    grammar: ["-지 않아요? (isn't it...? negative question)", "진짜 (really — casual)", "하나 더요 (one more — casual polite)"],
    keyVocab: ["하나", "진짜", "더"],
    anchor: true,
    notes: "Street food ordering — casual register, counters"
  },
  12: {
    grammar: ["counter: 두 명 (two people)", "주문할게요 (I'll order)", "같은 거 (same thing)", "물 좀 주세요 (softener 좀)"],
    keyVocab: ["명", "주문", "같은"],
    anchor: true,
    notes: "Restaurant seating + ordering for group — counters for people"
  },

  // ─── TRANSIT (13-16) — ALL ANCHORS ────────────────────────────
  // Direction, transfer, and location grammar requires transit context.
  13: {
    grammar: ["비었어요 (is empty — state result)", "갈아타다 (to transfer)", "내려야 해요 (need to get off)", "어디로 가요 (where does it go)"],
    keyVocab: ["갈아타다", "내리다", "역"],
    anchor: true,
    notes: "Subway navigation — transfer/exit grammar needs transit"
  },
  14: {
    grammar: ["몇 번 (which number)", "타야 돼요 (need to ride)", "내릴 때 알려 주세요 (please tell me when to get off)", "정류장 (bus stop)"],
    keyVocab: ["타다", "내리다", "알려 주세요"],
    anchor: true,
    notes: "Bus grammar — route numbers, stops"
  },
  15: {
    grammar: ["가 주세요 (please go to)", "세워 주세요 (please stop here)", "얼마나 걸려요 (how long does it take)", "결제 (payment)"],
    keyVocab: ["가 주세요", "세우다", "걸리다"],
    anchor: true,
    notes: "Taxi grammar — destination, stopping, time/payment"
  },
  16: {
    grammar: ["이 근처에 (near here)", "걸어서 (on foot / by walking)", "-하면 있어요 (if you do X, it's there)", "찾아가다 (to find one's way)"],
    keyVocab: ["근처", "걸어서", "직진"],
    anchor: true,
    notes: "Asking directions — location grammar needs real-place context"
  },

  // ─── SHOPPING (17-20) — ALL ANCHORS ───────────────────────────
  // Price, try-on, exchange/return grammar tied to shopping.
  17: {
    grammar: ["좀 더 싼 (a bit cheaper)", "다른 색 (other color)", "-어 봐도 돼요? (can I try...?)", "이걸로 할게요 (I'll take this)"],
    keyVocab: ["싼", "입어 보다", "이걸로"],
    anchor: true,
    notes: "Try-on + selection grammar — needs retail context"
  },
  18: {
    grammar: ["깎아 주세요 (please discount)", "너무 비싸요 (too expensive)", "-면 얼마예요 (how much if...)", "구경만 (just looking)", "선물이에요 (it's a gift)"],
    keyVocab: ["깎다", "비싸다", "구경"],
    anchor: true,
    notes: "Haggling grammar — specific to market shopping"
  },
  19: {
    grammar: ["-으러 왔어요 (came to do...)", "이름이 뭐예요 (what's your name)", "알려 주세요 (please tell me)", "확인했습니다 (confirmed — formal)"],
    keyVocab: ["찾으러", "알려 주세요", "확인"],
    anchor: true,
    notes: "Package pickup — purpose grammar + verification"
  },
  20: {
    grammar: ["-고 싶어요 (want to)", "가능해요? (is it possible?)", "안 맞아요 (doesn't fit)", "바꿔 주세요 (please change/exchange)"],
    keyVocab: ["-고 싶다", "가능하다", "바꾸다"],
    anchor: true,
    notes: "Exchange/return grammar — needs shopping context"
  },

  // ─── DAILY ESSENTIALS (21-24) — MIXED ─────────────────────────
  21: {
    grammar: ["몇 시예요 (what time)", "시에 만나요 (meet at X o'clock)", "늦었어요 (I'm late — past state)", "-ㄹ까요 (shall we)"],
    keyVocab: ["몇 시", "만나다", "늦다"],
    anchor: true,
    notes: "Time expressions — universal but time-telling is a fixed curriculum point"
  },
  22: {
    grammar: ["여기가 어디예요 (where is this)", "이 근처에 (near here)", "-아/어 줄 수 있어요? (could you do...?)", "-네요 (mild surprise)"],
    keyVocab: ["어디", "화장실", "사진 찍다"],
    anchor: true,
    notes: "Location + requests to strangers — survival grammar"
  },
  23: {
    grammar: ["되는 곳 (place where X works)", "없어요 (don't have / there isn't)", "빌려줄 수 있어요? (could you lend?)", "잘 못해요 (can't do well)"],
    keyVocab: ["없어요", "도와주세요"],
    anchor: false,
    notes: "Help/lack grammar — could be re-themed to any situation where you need assistance"
  },
  24: {
    grammar: ["보내다 (to send)", "-면 돼요 (if you do X, it's okay)", "나눠서 (by dividing)", "제가 낼게요 (I'll pay — humble)"],
    keyVocab: ["보내다", "내다", "나누다"],
    anchor: true,
    notes: "Money/payment grammar — splitting bills is culturally tied to Korean dining"
  },

  // ─── MOVIES & SHOWS (25-28) — NOT ANCHORS ────────────────────
  // Entertainment grammar is transferable to any hobby/interest.
  25: {
    grammar: ["counter: 장 (flat objects — tickets)", "몇 시에 시작해요 (when does it start)", "재미있어요 (it's fun)"],
    keyVocab: ["장", "시작하다", "재미있다"],
    anchor: false,
    notes: "Counters + event timing — could be concert, exhibition, any event"
  },
  26: {
    grammar: ["-고 있어요 (present progressive)", "-고 싶어 (want to — casual)", "같이 -ㄹ래? (want to do together? — casual)", "-지 마! (don't — casual)"],
    keyVocab: ["-고 있다", "-고 싶다", "-ㄹ래"],
    anchor: false,
    notes: "Progressive tense + casual invitations — universal grammar"
  },
  27: {
    grammar: ["봤어요? (have you seen/done? — past experience)", "꼭 봐야 돼요 (must see)", "무서운 (scary — adjective)", "감동적이었어요 (it was moving — past copula)"],
    keyVocab: ["봤어요", "봐야 되다", "감동적"],
    anchor: false,
    notes: "Past experience + obligation + descriptive adjectives — any recommendation context"
  },
  28: {
    grammar: ["대단해요 (amazing)", "좋아해요 (like)", "어떻게 생각해요 (what do you think)", "오고 싶어요 (want to come)"],
    keyVocab: ["좋아하다", "생각하다", "대단하다"],
    anchor: false,
    notes: "Opinions + preferences — transferable to any discussion"
  },

  // ─── MUSIC & CONCERTS (29-32) — NOT ANCHORS ──────────────────
  29: {
    grammar: ["진짜 좋다 (casual observation)", "처음 -어 봐요 (first time trying)", "너무 좋았어요 (it was so good — past)", "언제예요 (when is it)"],
    keyVocab: ["처음", "너무", "좋다"],
    anchor: false,
    notes: "First-time experience + casual reactions — any new activity"
  },
  30: {
    grammar: ["누가 (who — subject)", "추천 좀 해 주세요 (please recommend — with softener)", "요즘 뭐 -고 있어요 (what are you doing these days)"],
    keyVocab: ["누가", "추천", "요즘"],
    anchor: false,
    notes: "Who-questions + recommendation requests — any discovery context"
  },
  31: {
    grammar: ["-자! (let's — casual)", "알아요? (do you know?)", "잘하네요! (-네요 surprise/admiration)", "한 곡 더 (counter: 곡 for songs)"],
    keyVocab: ["-자", "알다", "-네요"],
    anchor: false,
    notes: "Casual proposals + admiration — any group activity"
  },
  32: {
    grammar: ["목소리가 좋아요 (subject+adjective)", "어떤 장르 (what kind of)", "매일 듣는 (relative clause: that I X every day)", "들어 봐요 (try doing — imperative)"],
    keyVocab: ["어떤", "매일", "-는 (relative clause)"],
    anchor: false,
    notes: "Relative clauses + try-doing — transferable to any taste/preference discussion"
  },

  // ─── EXPRESSING FEELINGS (33-36) — NOT ANCHORS ────────────────
  // Emotion grammar is universal across topics.
  33: {
    grammar: ["기분이 좋아요 (subject marker on abstract noun)", "너무 기뻐요 (so happy)", "드디어 (finally — adverb)", "최고의 (the best — superlative)"],
    keyVocab: ["기분", "기쁘다", "드디어"],
    anchor: false,
    notes: "Positive emotions — teachable in any achievement context"
  },
  34: {
    grammar: ["좀 피곤해요 (softened state)", "힘들었어요 (past state — it was hard)", "집중이 안 돼요 (X doesn't work)", "-고 싶어요 (want to)", "나을 거예요 (future: -ㄹ 거예요)"],
    keyVocab: ["피곤하다", "힘들다", "-ㄹ 거예요"],
    anchor: false,
    notes: "Negative emotions + future prediction — any difficult-day context"
  },
  35: {
    grammar: ["대박 (slang exclamation)", "예쁘다 (casual observation)", "몰랐어요 (didn't know — past negative)", "잊지 못할 것 같아요 (seems like I won't be able to — double negative future)"],
    keyVocab: ["대박", "몰랐어요", "것 같다"],
    anchor: false,
    notes: "Surprise + beauty reactions — any awe-inspiring experience"
  },
  36: {
    grammar: ["죄송합니다 (formal apology)", "실수 (mistake)", "-으세요 (honorific question)", "-지 마세요 (please don't)", "다음에 조심할게요 (next time I'll be careful)"],
    keyVocab: ["죄송합니다", "괜찮다", "-지 마세요"],
    anchor: false,
    notes: "Apology + reassurance grammar — any social accident"
  },

  // ─── WEATHER & SMALL TALK (37-40) — MIXED ─────────────────────
  37: {
    grammar: ["날씨 좋다 (casual topic-comment)", "올 것 같아요 (seems like it will — prediction)", "가져왔어요? (did you bring?)", "춥다/덥다 (temperature adjectives)", "몇 도 (how many degrees)"],
    keyVocab: ["날씨", "비", "춥다"],
    anchor: true,
    notes: "Weather vocabulary is inseparable from weather context"
  },
  38: {
    grammar: ["주말에 뭐 해요 (time+activity question)", "계획 없어요 (no plans)", "-ㄹ 거예요 (future intention)", "같이 -ㄹ래요? (want to do together — polite)"],
    keyVocab: ["주말", "계획", "-ㄹ 거예요"],
    anchor: false,
    notes: "Weekend plans grammar — transferable to any social scheduling"
  },
  39: {
    grammar: ["바빠요? (are you busy)", "맛있는 거 (delicious thing — adj+noun)", "건강하세요 (honorific well-wish)", "다음에 또 봐요 (see you again)"],
    keyVocab: ["바쁘다", "건강하다", "또"],
    anchor: false,
    notes: "Neighbor small talk — transferable to any casual acquaintance interaction"
  },
  40: {
    grammar: ["처음 뵙겠습니다 (formal first meeting)", "온 지 얼마나 됐어요 (how long since...)", "-시네요 (honorific observation)", "부족하다 (to be lacking — humility)", "교환할까요 (shall we exchange)"],
    keyVocab: ["처음 뵙겠습니다", "부족하다"],
    anchor: true,
    notes: "Formal introductions + humble speech — culturally specific to Korean first meetings"
  },

  // ─── TOPIK 2: WORK & MEETINGS (41-43) — NOT ANCHORS ──────────
  // Formal grammar (-시-, 드리다) is transferable to any formal setting.
  41: {
    grammar: ["잘 부탁드립니다 (humble request ritual)", "바뀌었어요 (changed — intransitive past)", "확인해 주세요 (please check)", "언제까지 해야 돼요 (deadline question)", "수고하셨습니다 (end-of-work ritual)"],
    keyVocab: ["부탁드리다", "수고하셨습니다", "확인하다"],
    anchor: false,
    notes: "Workplace rituals — could be taught in any formal/collaborative setting"
  },
  42: {
    grammar: ["-해도 될까요? (would it be okay if I...)", "좀 더 자세히 (in more detail — adverb stacking)", "같은 생각이에요 (same opinion)", "있으시면 말씀해 주세요 (honorific conditional)"],
    keyVocab: ["-해도 될까요", "자세히", "말씀하다"],
    anchor: false,
    notes: "Meeting etiquette grammar — any formal group discussion"
  },
  43: {
    grammar: ["확인하셨어요? (honorific past question)", "보내 드릴게요 (humble future: I'll send for you)", "부탁드립니다 (formal request)", "조율 (coordination)"],
    keyVocab: ["드리다", "-셨어요", "부탁드립니다"],
    anchor: false,
    notes: "Humble/honorific email grammar — any professional communication"
  },

  // ─── OPINIONS & DISCUSSIONS (44-46) — NOT ANCHORS ─────────────
  44: {
    grammar: ["다르게 생각해요 (think differently)", "일리가 있네요 (you have a point)", "그럴 수도 있어요 (that could be — possibility)", "왜 그렇게 (why like that)"],
    keyVocab: ["다르게", "일리", "-ㄹ 수도 있다"],
    anchor: false,
    notes: "Disagreement/concession grammar — any debate context"
  },
  45: {
    grammar: ["솔직히 말하면 (to be honest — conditional)", "-지 마 (don't — casual prohibition)", "결정해야 해 (have to decide — casual obligation)", "천천히 -어 봐 (try slowly)", "뭘 하든 (whatever you do — concessive)"],
    keyVocab: ["솔직히", "결정하다", "응원하다"],
    anchor: false,
    notes: "Honest advice grammar — any deep conversation"
  },
  46: {
    grammar: ["관점에 따라 (depending on perspective)", "핵심은 이거예요 (the key point is)", "구체적인 예 (specific example)", "동의해요 (I agree)"],
    keyVocab: ["관점", "핵심", "구체적"],
    anchor: false,
    notes: "Argument structure grammar — any discussion context"
  },

  // ─── K-DRAMA SITUATIONS (47-49) — NOT ANCHORS ────────────────
  // Emotional/casual speech patterns transferable to any relationship context.
  47: {
    grammar: ["뜻이 아니었어 (that wasn't my meaning — past negative)", "오해하지 마 (don't misunderstand)", "내 말 좀 들어 (listen to me — casual imperative)", "잘못했어 (I was wrong)", "다시 시작하자 (let's start again)"],
    keyVocab: ["뜻", "오해하다", "잘못하다"],
    anchor: false,
    notes: "Misunderstanding resolution — any interpersonal conflict"
  },
  48: {
    grammar: ["보고 싶었어 (I missed you — past desire)", "-밖에 없어 (there's nothing/no one but)", "진심이야 (it's sincere)", "곁에 있어 줘 (stay by my side — request)", "-어서 미안해 (sorry because...)"],
    keyVocab: ["보고 싶다", "진심", "곁에"],
    anchor: false,
    notes: "Emotional expression + confession grammar — any close relationship"
  },
  49: {
    grammar: ["거짓말하지 마 (don't lie)", "왜 말 안 했어 (why didn't you say — past negative)", "이제 어쩌려고 (what are you going to do now)", "나한테 이러면 안 돼 (you can't do this to me — conditional prohibition)"],
    keyVocab: ["거짓말", "이제", "안 되다"],
    anchor: false,
    notes: "Confrontation grammar — any conflict situation"
  },

  // ─── DEEPER FOOD CULTURE (50-52) — NOT ANCHORS ────────────────
  // Cooking/drinking grammar is somewhat tied to food but the patterns transfer.
  50: {
    grammar: ["직접 만든 거예요? (did you make this yourself — relative clause)", "잘하시네요 (you do well — honorific surprise)", "-어도 돼요? (is it okay to)", "어떻게 해요 (how do I do it)"],
    keyVocab: ["직접", "만들다", "넣다"],
    anchor: false,
    notes: "Making/creating grammar — could be crafts, art, any hands-on activity"
  },
  51: {
    grammar: ["앉아도 돼요? (is it okay to sit)", "-이랑 (and)", "건배 (cheers — ritual)", "한 잔 더 할까요 (shall we have one more — counter + suggestion)"],
    keyVocab: ["앉다", "건배", "한 잔"],
    anchor: false,
    notes: "Drinking/social grammar — transferable to any social gathering"
  },
  52: {
    grammar: ["잘 먹겠습니다/잘 먹었습니다 (meal rituals)", "손맛 (hand-taste — idiomatic)", "레시피 알려 주세요 (please share the recipe)", "잘 먹었습니다 (post-meal ritual)"],
    keyVocab: ["잘 먹겠습니다", "잘 먹었습니다"],
    anchor: true,
    notes: "Korean meal rituals — culturally inseparable from food context"
  },

  // ─── PHILOSOPHY & THOUGHTS (53-54) — NOT ANCHORS ──────────────
  53: {
    grammar: ["중요한 건 (the important thing is — nominalizer)", "이 순간 (this moment)", "-해도 괜찮아 (it's okay even if)", "변할 수 있어 (can change — potential)"],
    keyVocab: ["중요하다", "순간", "변하다"],
    anchor: false,
    notes: "Abstract thought grammar — any reflective context"
  },
  54: {
    grammar: ["관점의 차이 (difference of perspective — possessive)", "완벽할 필요 없어 (no need to be perfect)", "과정이 더 중요해 (the process is more important)", "감사한 마음이 생겨 (a grateful feeling arises)"],
    keyVocab: ["관점", "완벽하다", "과정"],
    anchor: false,
    notes: "Life philosophy grammar — any meaningful conversation"
  },

  // ─── HEALTH & WELLBEING (55-56) — MIXED ───────────────────────
  55: {
    grammar: ["아파요 (it hurts — body part + 아프다)", "몇 번 먹어요 (how many times — frequency)", "식후에 드세요 (after meals — time expression + honorific)", "알레르기 있어요 (do you have allergies)"],
    keyVocab: ["아프다", "진통제", "식후"],
    anchor: true,
    notes: "Pharmacy/medical grammar — body+symptom vocabulary is inseparable from health"
  },
  56: {
    grammar: ["요즘 좀 안 좋아요 (lately not good — hedged negative)", "해야 돼 (need to do — casual obligation)", "충분히 자고 있어요? (are you sleeping enough — progressive question)", "무리하지 마 (don't overdo it)"],
    keyVocab: ["안 좋다", "충분히", "무리하다"],
    anchor: false,
    notes: "Self-care advice grammar — any context where someone needs rest"
  },

  // ─── ROCK CLIMBING (57) — NOT ANCHOR ──────────────────────────
  57: {
    grammar: ["어때요? (how is it?)", "미끄럽다 (slippery — descriptive adjective)", "완등 (complete ascent — compound noun)", "힘이 없어요 (no strength — possession negative)", "한 번 더 해 볼까요 (shall we try one more time)"],
    keyVocab: ["어때요", "힘이 없다", "해 볼까요"],
    anchor: false,
    notes: "How-is-it + physical state grammar — any physical activity"
  },

  // ─── TRAVEL & DIRECTIONS (58) — ANCHOR ────────────────────────
  58: {
    grammar: ["예약했어요 (I have a reservation — past action as current state)", "맡겨도 돼요? (can I leave/entrust?)", "추천해 주세요 (please recommend)", "잘 쉬었습니다 (farewell ritual for accommodations)"],
    keyVocab: ["예약", "체크인", "짐 맡기다"],
    anchor: true,
    notes: "Accommodation grammar — check-in/out needs travel context"
  },

  // ─── READING & BOOKS (59) — NOT ANCHOR ────────────────────────
  59: {
    grammar: ["요즘 뭐 읽어요 (these days + activity question)", "좋아해요 (like — object preference)", "인기 있는 (popular — adjective from noun)", "해줄 수 있어요? (can you do for me?)"],
    keyVocab: ["요즘", "좋아하다", "인기"],
    anchor: false,
    notes: "Current-interest grammar — any recommendation/taste discussion"
  },

  // ─── TEXTING & CASUAL CHAT (60) — ANCHOR ──────────────────────
  60: {
    grammar: ["ㅋㅋㅋ (text laughter convention)", "ㅇㅇ (text abbreviation for agreement)", "가는 중 (in the middle of — progressive)", "반말 text register"],
    keyVocab: ["ㅋㅋㅋ", "ㅇㅇ", "가는 중"],
    anchor: true,
    notes: "Korean text conventions — inseparable from texting/chat context"
  }
};

// ─── SKELETON SUMMARY ─────────────────────────────────────────
// Total sessions: 60
// Anchor sessions: 28 (47%) — topic+grammar inseparable
//   Café 1-4, Convenience 5-8, Restaurant 9-12, Transit 13-16,
//   Shopping 17-20, Daily 21-22 & 24, Weather 37, Introductions 40,
//   Meal rituals 52, Health/pharmacy 55, Travel 58, Texting 60
// Non-anchor sessions: 32 (53%) — grammar transferable, AI can re-skin
//   Daily 23, Movies 25-28, Music 29-32, Feelings 33-36,
//   Small talk 38-39, Work 41-43, Opinions 44-46, K-drama 47-49,
//   Food culture 50-51, Philosophy 53-54, Wellbeing 56, Climbing 57,
//   Books 59
