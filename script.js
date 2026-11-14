// ================= 1. 데이터베이스 =================

// 주연 인물 데이터 (A ~ ZG 매칭)
const mainCharacters = [
  { name: "현공대사", age: 78, gender: "남", position: "정도맹주 • 소림방장", faction: "소림사", group: "정파", martial: "백보신권 · 역근경", realm: "현경 완숙", look: "삭발, 자비로운 인상, 금안, 묵직한 체구", outfit: "황금색 가사", personality: "우직, 온후, 책임감 (1w9)", speech: "장중한 하오체", note: "정도맹의 수장이자 소림의 방장", img: "assets/A.png" },
  { name: "남궁설아", age: 24, gender: "여", position: "창공단주", faction: "남궁세가", group: "정파", martial: "창궁무애검법 · 제왕검형", realm: "화경 입문", look: "백장발, 청안, 절세냉미인, 거유", outfit: "청색 비단 무복", personality: "냉정, 무감정, 원칙주의 (1w2)", speech: "격식 존댓말", note: "후기지수 화경 고수", img: "assets/B.png" },
  { name: "제갈혜", age: 22, gender: "여", position: "정도맹 총군사", faction: "제갈세가", group: "정파", martial: "기관진식 · 진법", realm: "마사 (방사)", look: "청순, 지혜로운 눈빛, 단아, 흑단발, 흑안", outfit: "백색 무복", personality: "신중, 지략적, 독점욕 (5w6)", speech: "나긋나긋한 존댓말", note: "정도맹 제일두뇌, 방술과 진법에 능통", img: "assets/C.png" },
  { name: "당소령", age: 20, gender: "여", position: "독암단주", faction: "사천당가", group: "정파", martial: "만독조법 · 만천화우", realm: "절정 완숙", look: "소악마상, 화려한 이목구비, 녹발 양갈래, 빈유", outfit: "검녹색 비단 무복", personality: "소악마, 도발적, 능글맞음 (8w7)", speech: "건방진 말투", note: "독과 암기의 천재, 의술에 능통", img: "assets/D.png" },
  { name: "팽아린", age: 23, gender: "여", position: "천호단주", faction: "하북팽가", group: "정파", martial: "혼원도법 · 오호단문도", realm: "초절정 입문", look: "호쾌한 인상, 장신, 갈발 포니테일, 폭유", outfit: "흑청색 무복", personality: "호쾌, 솔직, 대담 (8w9)", speech: "시원한 말투", note: "호쾌한 여장부", img: "assets/E.png" },
  { name: "모용혜", age: 21, gender: "여", position: "자전단주", faction: "모용세가", group: "정파", martial: "건곤파선검 · 두전성이", realm: "절정 입문", look: "고양이상, 자색 장발, 분홍안, 거유", outfit: "자색 화려한 무복", personality: "오만함, 지기 싫어함, 츤데레 (3w4)", speech: "도도한 말투", note: "모용세가 재건의 야망", img: "assets/F.png" },
  { name: "연소개", age: 20, gender: "여", position: "소방주", faction: "개방", group: "정파", martial: "타구봉법 · 항룡십팔장", realm: "이류", look: "귀여운 인상, 덥수룩한 갈발, 황안, 매우 단신", outfit: "누더기 조끼와 짧은 바지", personality: "털털, 호기심, 귀여움 (7w6)", speech: "밝은 말투", note: "수준 높은 경공, 중원 정보통", img: "assets/G.png" },
  { name: "백설희", age: 22, gender: "여", position: "일제자", faction: "화산파", group: "정파", martial: "이십사수매화검법 · 자하신공", realm: "절정 극", look: "청초한 미인, 분홍색 장발, 적안, 거유", outfit: "백색 매화자수 무복", personality: "고결, 강직, 순정파 (1w9)", speech: "정갈한 존댓말", note: "검의 끝을 목표로 하는 검객", img: "assets/H.png" },
  { name: "청운아", age: 25, gender: "여", position: "대제자", faction: "무당파", group: "정파", martial: "태극혜검 · 양의신공", realm: "초절정 완숙", look: "도풍의 우아한 미인, 백색 자반머리, 거유", outfit: "백색 도포", personality: "유연, 온화, 독점욕 (9w1)", speech: "부드러운 존댓말", note: "무당파 차기 장문인 후보", img: "assets/I.png" },
  { name: "홍도희", age: 21, gender: "여", position: "이제자", faction: "청성파", group: "정파", martial: "청풍검법 · 청운적하검법", realm: "일류", look: "맑고 지적인 인상, 청단발, 녹안, 빈유", outfit: "청색 무복", personality: "차분, 이성적, 내향적 (6w5)", speech: "예의바른 존댓말", note: "도학 경전에도 능통", img: "assets/J.png" },
  { name: "공손월", age: 22, gender: "여", position: "일제자", faction: "공동파", group: "정파", martial: "복마검법 · 혼원일기공", realm: "절정 입문", look: "단아하고 직진형 미인, 갈발, 흑안, 거유", outfit: "흑색 무복", personality: "솔직, 고집, 독점욕 (2w1)", speech: "단정하고 직설적", note: "사회성 없는 직설적 성격", img: "assets/K.png" },
  { name: "서문령", age: 23, gender: "여", position: "일제자", faction: "곤륜파", group: "정파", martial: "운룡대팔식 · 태허도룡검법", realm: "절정 완숙", look: "신비로운 외모, 황발 포니테일, 거유", outfit: "백색 무복", personality: "신비로움, 세속 탈피 (4w5)", speech: "몽환적인 말투", note: "십만대산 가까운 곤륜의 신비녀", img: "assets/L.png" },
  { name: "악수련", age: 22, gender: "여", position: "일제자", faction: "종남파", group: "정파", martial: "유운검법 · 천하삼십육검법", realm: "일류", look: "기품있는 인상, 흑청색 장발, 남색안", outfit: "남색 무복", personality: "외유내강, 우직, 성실 (1w2)", speech: "예의바른 반존댓말", note: "자칭 백설희의 경쟁자", img: "assets/M.png" },
  { name: "혁태강", age: 52, gender: "남", position: "혈사련주", faction: "혈사련", group: "사파", martial: "파천도법 · 맹호심공", realm: "현경 입문", look: "사나운 흉터, 압도적 거구, 갈색 장발", outfit: "호피 장식 가죽옷", personality: "냉혹, 호걸, 이익 우선 (8w7)", speech: "압도적인 하대조", note: "녹림과 장강을 통합한 사파의 제왕", img: "assets/N.png" },
  { name: "녹야령", age: 37, gender: "여", position: "녹림투왕", faction: "녹림", group: "사파", martial: "백붕권법", realm: "화경 완숙", look: "야성적 미인, 올백 녹색 장발, 안대", outfit: "적색 무복", personality: "솔직, 야성적, 지배욕 (8w7)", speech: "거친 반말", note: "혁태강을 외사랑 중", img: "assets/O.png" },
  { name: "장수아", age: 26, gender: "여", position: "장강수로채주", faction: "장강수로채", group: "사파", martial: "수로삼십육창법 · 수신경공", realm: "초절정 극", look: "관능적인 여간부상, 남색 중단발, 적안", outfit: "짙은 청색 무복", personality: "교활, 유혹적, 냉혈 (3w2)", speech: "요염한 반말", note: "혁태강의 수양딸", img: "assets/P.png" },
  { name: "문소향", age: 132, gender: "여", position: "혈마 • 혈교주", faction: "혈교", group: "은둔", martial: "혈마신공 · 역천신공", realm: "생사경 입문", look: "잔혹하도록 아름다운 미인, 적발, 적안", outfit: "흑색 무복", personality: "광기, 잔혹, 소유욕 (4w3)", speech: "어두운 유혹조", note: "멸망한 혈교를 재건하려는 은둔마두", img: "assets/Q.png" },
  { name: "독고천", age: 71, gender: "남", position: "회주", faction: "일월회", group: "일월회", martial: "일월공검 · 천지대라신공", realm: "현경 극", look: "위엄있는 외모, 흑수염, 흑발, 적안", outfit: "칠흑 금실 무복", personality: "약육강식, 잔혹, 냉혈 (8w7)", speech: "무거운 하대조", note: "일월회 2대 회주", img: "assets/R.png" },
  { name: "사마영", age: 48, gender: "여", position: "총군사", faction: "일월회", group: "일월회", martial: "주술 · 식신제어 · 천기역학", realm: "마사 (방사)", look: "지적이고 음침, 회장발, 자안, 거유", outfit: "칠흑 주술도포", personality: "냉철, 계략적, 가학적 (5w6)", speech: "나긋한 존댓말", note: "'해태'가 식신, 일월회 제일두뇌", img: "assets/S.png" },
  { name: "마태후", age: 31, gender: "남", position: "회주 일제자", faction: "일월회", group: "일월회", martial: "일월공검 · 천지대라신공", realm: "화경 완숙", look: "여유넘치는 미남, 오드아이(적안/백안)", outfit: "백색 무복", personality: "잔혹, 음험, 계략 싸이코 (8w7)", speech: "여유로운 반말", note: "유력한 후계자 후보", img: "assets/T.png" },
  { name: "광무혁", age: 24, gender: "남", position: "회주 이제자", faction: "일월회", group: "일월회", martial: "태산멸절도법 · 일월공검", realm: "초절정 극", look: "호쾌한 미남, 갈색 피부, 흑발", outfit: "암회색 무복", personality: "호쾌, 당당, 패도 (3w4)", speech: "호쾌한 반말", note: "마태후를 향한 강한 질투심", img: "assets/U.png" },
  { name: "화은설", age: 21, gender: "여", position: "회주 삼제자", faction: "일월회", group: "일월회", martial: "일월공검 · 암영조법", realm: "초절정 입문", look: "고양이상, 금색 장발, 적안, 차가움", outfit: "적색 무복", personality: "따뜻, 다정, 호승심 (6w5)", speech: "다정한 말투", note: "천음지체, 제자 중 지지율 최저", img: "assets/V.png" },
  { name: "백월", age: 31, gender: "여", position: "좌호법", faction: "일월회", group: "일월회", martial: "백염탄지공 · 월하검법", realm: "화경 입문", look: "백발, 백안, 흰 면사, 기품있는 미인", outfit: "백색 무복", personality: "냉철, 독선적, 충성심 (1w9)", speech: "차갑고 단정한 존댓말", note: "지공의 고수, 말수가 없음", img: "assets/W.png" },
  { name: "흑일", age: 29, gender: "여", position: "우호법", faction: "일월회", group: "일월회", martial: "흑뢰각법 · 암영보", realm: "화경 완숙", look: "흑장발, 퇴폐적 미인, 문신", outfit: "검은 노출 무복", personality: "잔인, 광기, 열정적 (8w7)", speech: "거친 말투", note: "각법의 고수, 회주의 충직한 개", img: "assets/X.png" },
  { name: "유비화", age: 25, gender: "여", position: "문주", faction: "귀독문", group: "일월회", martial: "귀독공 · 귀독조법", realm: "절정 완숙", look: "창백한 피부, 자색 단발, 무표정", outfit: "적색 꽃자수 무복", personality: "잔인, 냉혈, 집착 (3w4)", speech: "단어로 말함", note: "일월회의 암살 담당", img: "assets/Y.png" },
  { name: "마라율", age: 23, gender: "여", position: "부문주", faction: "마라도문", group: "일월회", martial: "마라도법 · 극혈강체", realm: "절정 입문", look: "근육질 거구, 적발, 맹수상, 폭유", outfit: "검은 적색 무복", personality: "호전적, 광기, 지배욕 (8w7)", speech: "거칠고 호탕한 반말", note: "일월회의 약탈 및 전투 담당", img: "assets/Z.png" },
  { name: "천음랑", age: 30, gender: "여", position: "성주", faction: "천음성", group: "일월회", martial: "천음환술 · 파혼음공", realm: "일류", look: "요염한 미모, 분홍 단발, 폭유", outfit: "노출 분홍 비단 무복", personality: "색기, 유혹, 광기 (7w8)", speech: "요염한 반말", note: "일월회의 정보 담당", img: "assets/ZA.png" },
  { name: "설소백", age: 46, gender: "여", position: "궁주", faction: "북해빙궁", group: "새외무림", martial: "빙백신장 · 천음빙공", realm: "현경 입문", look: "창백한 피부, 백장발, 청안, 거유", outfit: "하늘색 모피 무복", personality: "차가움, 독점, 책임감 (5w6)", speech: "단정한 말투", note: "북해의 지배자", img: "assets/ZB.png" },
  { name: "목타르", age: 57, gender: "남", position: "궁주", faction: "남만야수궁", group: "새외무림", martial: "야수심공 · 천호권", realm: "화경 입문", look: "야성적 거구, 흉터, 적갈색 장발", outfit: "야수가죽 갑옷", personality: "호방, 야성적, 의리 (8w9)", speech: "웅장한 반말", note: "'태산대호'와 야수심공으로 연결", img: "assets/ZC.png" },
  { name: "샤르자", age: 28, gender: "여", position: "대신관", faction: "배화교", group: "새외무림", martial: "환일금오술", realm: "영사 (방사)", look: "금장발, 적안, 갈색 피부, 무희상", outfit: "적금색 무희의상", personality: "열정적, 광신도 (7w8)", speech: "요염한 말투", note: "배화교의 영사급 방사, '불가살이'가 식신", img: "assets/ZD.png" },
  { name: "철무안", age: 41, gender: "남", position: "지휘사", faction: "송나라 황실", group: "황실", martial: "천강파황창법 · 오룡대나소", realm: "화경 극", look: "험악한 인상, 검은 수염, 거구", outfit: "송나라 금갑주", personality: "냉혹, 공명정대 (1w9)", speech: "엄숙한 하대조", note: "송나라 황궁을 호위하는 최강 무인", img: "assets/ZE.png" },
  { name: "조소희", age: 22, gender: "여", position: "소경공주", faction: "송나라 황실", group: "황실", martial: "천명검법", realm: "이류", look: "기품있고 화려함, 금안, 거유", outfit: "금색 송나라 황족의상", personality: "오만함, 원대함, 지략 (3w2)", speech: "도도한 말투", note: "송태조의 장녀, 무림을 수하로들이려는 공주", img: "assets/ZF.png" },
  { name: "무하운", age: 710, gender: "여", position: "은둔자", faction: "무상문", group: "은둔", martial: "무상장법 · 心掌", realm: "자연경 완숙", look: "무표정, 흑장발, 천으로 눈가림", outfit: "낡은 검은 도포", personality: "초연함, 무심함 (5w4)", speech: "조용한 말투", note: "선악에 구애받지 않고 수련만 반복", img: "assets/ZG.png" }
];

// 조연 인물 데이터 (숫자 1 ~ 18 매칭)
const subCharacters = [
  { name: "정파남", category: "조연 인물", desc: "정도맹 및 정파 문파에 소속된 남성 무인입니다.", img: "assets/1.png" },
  { name: "정파여", category: "조연 인물", desc: "정도맹 및 정파 문파에 소속된 여성 무인입니다.", img: "assets/2.png" },
  { name: "사파남", category: "조연 인물", desc: "혈사련 및 사파 세력에 소속된 남성 무인입니다.", img: "assets/3.png" },
  { name: "사파여", category: "조연 인물", desc: "혈사련 및 사파 세력에 소속된 여성 무인입니다.", img: "assets/4.png" },
  { name: "일월회남", category: "조연 인물", desc: "일월회에 소속된 남성 무사입니다.", img: "assets/5.png" },
  { name: "일월회여", category: "조연 인물", desc: "일월회에 소속된 여성 무사입니다.", img: "assets/6.png" },
  { name: "혈교남", category: "조연 인물", desc: "중원에 은둔하는 혈교 소속의 남성 인물입니다.", img: "assets/7.png" },
  { name: "혈교여", category: "조연 인물", desc: "중원에 은둔하는 혈교 소속의 여성 인물입니다.", img: "assets/8.png" },
  { name: "빙궁남", category: "조연 인물", desc: "북해빙궁 소속의 남성 인물입니다.", img: "assets/9.png" },
  { name: "빙궁여", category: "조연 인물", desc: "북해빙궁 소속의 여성 인물입니다.", img: "assets/10.png" },
  { name: "야수궁남", category: "조연 인물", desc: "남만야수궁 소속의 남성 인물입니다.", img: "assets/11.png" },
  { name: "야수궁여", category: "조연 인물", desc: "남만야수궁 소속의 여성 인물입니다.", img: "assets/12.png" },
  { name: "황실남", category: "조연 인물", desc: "송나라 황실 소속의 남성 인물입니다.", img: "assets/13.png" },
  { name: "황실여", category: "조연 인물", desc: "송나라 황실 소속의 여성 인물입니다.", img: "assets/14.png" },
  { name: "황성사남", category: "조연 인물", desc: "황실 직속 호위 조직 황성사 소속의 무인입니다.", img: "assets/15.png" },
  { name: "시녀", category: "조연 인물", desc: "각 세력의 저택이나 궁궐을 시중드는 시녀입니다.", img: "assets/16.png" },
  { name: "방사남", category: "조연 인물", desc: "영안이 트여 방술을 부리는 남성 방사입니다.", img: "assets/17.png" },
  { name: "방사여", category: "조연 인물", desc: "영안이 트여 방술을 부리는 여성 방사입니다.", img: "assets/18.png" }
];

// 인외 존재 데이터 (소문자 a ~ w 매칭)
const ghostData = { name: "원혼 (冤魂)", category: "망령 • 사기 축적", desc: "한을 품고 현세에 남은 망령. 방사를 제외하고는 지각 불가능하며, 일혼부터 월혼까지의 등급을 거쳐 성장하고 인간의 육체를 강탈하거나 사기를 흡수합니다.", img: "assets/ㄱ.png" };

const monsterCardData = { name: "이매망량 (魑魅魍魎)", category: "괴물·요괴·이형의 존재 총칭", desc: "중원 및 새외에 존재하는 온갖 괴이와 영물들을 통칭합니다. 흉수부터 신수까지 다양한 등급과 위험도를 지닙니다.", img: "assets/ㄴ.png" };

const monsterSubList = [
  { name: "철갑지주", group: "흉수", category: "흉수 (凶獸)", desc: "최하위 위험 개체. 단단한 철갑 외殼을 지닌 거대 거미.", img: "assets/ㄷ.png" },
  { name: "흑랑", group: "흉수", category: "흉수 (凶獸)", desc: "최하위 위험 개체. 칠흑 같은 털을 지닌 난폭한 늑대 무리.", img: "assets/ㄹ.png" },
  { name: "설표범", group: "흉수", category: "흉수 (凶獸)", desc: "최하위 위험 개체. 북해 설원 지역에 서식하는 은밀한 포식자.", img: "assets/ㅁ.png" },
  { name: "백악", group: "흉수", category: "흉수 (凶獸)", desc: "최하위 위험 개체. 온몸이 새하얗고 단단한 피부로 뒤덮힌 사냥꾼.", img: "assets/ㅎㅊ.png" },
  { name: "태산대호", group: "괴수", category: "괴수 (怪獸)", desc: "일반적인 강한 괴물. 태산 일대를 호령하는 거대한 산군.", img: "assets/ㅂ.png" },
  { name: "괴조", group: "괴수", category: "괴수 (怪獸)", desc: "일반적인 강한 괴물. 하늘에서 날카로운 발톱으로 습격하는 거대 조류.", img: "assets/ㅅ.png" },
  { name: "루두안", group: "괴수", category: "괴수 (怪獸)", desc: "일반적인 강한 괴물. 사자의 몸에 코뿔소의 외뿔과 용의 비늘을 지닌 영물.", img: "assets/ㅎㅋ.png" },
  { name: "무지기", group: "괴수", category: "괴수 (怪獸)", desc: "일반적인 강한 괴물. 코끼리보다 강한 근력을 지닌 새하얀 원숭이.", img: "assets/ㅎㅌ.png" },
  { name: "해태", group: "요수", category: "요수 (妖獸)", desc: "상당한 지능과 힘을 가진 요괴급. 사마영의 식신.", img: "assets/ㅇ.png" },
  { name: "삼족오", group: "요수", category: "요수 (妖獸)", desc: "상당한 지능과 힘을 가진 요괴급. 세 개의 발을 가진 신성하고도 위험한 영조.", img: "assets/ㅈ.png" },
  { name: "백택", group: "요수", category: "요수 (妖獸)", desc: "상당한 지능과 힘을 가진 요괴급. 천하의 길흉화복과 만물의 언어를 아는 지혜로운 영수.", img: "assets/ㅊ.png" },
  { name: "구미호", group: "요수", category: "요수 (妖獸)", desc: "상당한 지능과 힘을 가진 요괴급. 아홉 개의 꼬리를 지니고 사람을 홀리는 요물.", img: "assets/ㅋ.png" },
  { name: "불가살이", group: "마수", category: "마수 (魔獸)", desc: "최상위 괴이. 쇠를 먹고 자라며 현경급 무인도 상대하기 버거운 마수. 샤르자의 식신.", img: "assets/ㅌ.png" },
  { name: "이무기", group: "마수", category: "마수 (魔獸)", desc: "최상위 괴이. 용이 되지 못하고 원한을 품은 거대 영물.", img: "assets/ㅍ.png" },
  { name: "응룡", group: "마수", category: "마수 (魔獸)", desc: "최상위 괴이. 날개가 달린 강력한 용족 마수.", img: "assets/ㅎ.png" },
  { name: "기린", group: "마수", category: "마수 (魔獸)", desc: "최상위 괴이. 성인의 탄생에 나타난다는 전설 속의 영물.", img: "assets/ㅎㄱ.png" },
  { name: "도올", group: "영수", category: "영수 (靈獸)", desc: "재앙급 존재. 난폭하고 물러섬이 없는 고대의 사흉.", img: "assets/ㅎㄴ.png" },
  { name: "도철", group: "영수", category: "영수 (靈獸)", desc: "재앙급 존재. 탐욕스럽게 모든 것을 집어삼키는 사흉.", img: "assets/ㅎㄷ.png" },
  { name: "궁기", group: "영수", category: "영수 (靈獸)", desc: "재앙급 존재. 의로운 것을 미워하고 악한 것을 부추기는 사흉.", img: "assets/ㅎㄹ.png" },
  { name: "혼돈", group: "영수", category: "영수 (靈獸)", desc: "재앙급 존재. 형체가 없으나 사방을 어지럽히는 고대의 괴이.", img: "assets/ㅎㅁ.png" },
  { name: "주작", group: "신수", category: "신수 (神獸)", desc: "현세의 순리를 벗어난 초월적 존재. 남쪽을 수호하는 불꽃의 신수.", img: "assets/ㅎㅂ.png" },
  { name: "현무", group: "신수", category: "신수 (神獸)", desc: "현세의 순리를 벗어난 초월적 존재. 북쪽을 수호하는 뱀과 거북의 영물.", img: "assets/ㅎㅅ.png" },
  { name: "백호", group: "신수", category: "신수 (神獸)", desc: "현세의 순리를 벗어난 초월적 존재. 서쪽을 수호하는 백금빛 호랑이 신수.", img: "assets/ㅎㅇ.png" },
  { name: "청룡", group: "신수", category: "신수 (神獸)", desc: "현세의 순리를 벗어난 초월적 존재. 동쪽을 수호하는 청빛의 용.", img: "assets/ㅎㅈ.png" }
];


// ================= 2. 오프닝 연출 스크립트 =================
window.addEventListener('DOMContentLoaded', () => {
  const sparkContainer = document.getElementById('spark-container');
  const bloodSplash = document.getElementById('blood-splash');
  const bookCover = document.getElementById('book-cover');
  const enterBtn = document.getElementById('enter-btn');
  const introOverlay = document.getElementById('intro-overlay');
  const mainContent = document.getElementById('main-content');

  // 검 스파크 파티클
  setInterval(() => {
    const spark = document.createElement('div');
    spark.className = 'spark';
    spark.style.left = Math.random() * 100 + 'vw';
    spark.style.top = Math.random() * 100 + 'vh';
    spark.style.setProperty('--tx', (Math.random() * 200 - 100) + 'px');
    spark.style.setProperty('--ty', (Math.random() * 200 - 100) + 'px');
    sparkContainer.appendChild(spark);
    setTimeout(() => spark.remove(), 600);
  }, 150);

  // 피 튀김 이펙트
  setInterval(() => {
    const blood = document.createElement('div');
    blood.className = 'blood-drop';
    const size = Math.random() * 80 + 30;
    blood.style.width = size + 'px';
    blood.style.height = size + 'px';
    blood.style.left = Math.random() * 90 + 'vw';
    blood.style.top = Math.random() * 90 + 'vh';
    bloodSplash.appendChild(blood);
    setTimeout(() => blood.remove(), 1200);
  }, 400);

  // 2.5초 후 고서 등장
  setTimeout(() => {
    bookCover.classList.add('show');
  }, 2000);

  // '예' 버튼 클릭 시 입장
  enterBtn.addEventListener('click', () => {
    introOverlay.style.transition = 'opacity 1s ease';
    introOverlay.style.opacity = '0';
    setTimeout(() => {
      introOverlay.classList.add('hidden');
      mainContent.classList.remove('hidden');
    }, 1000);
  });

  // 컴포넌트 렌더링 실행
  renderMainCharacters('all');
  renderSubCharacters();
  renderGhostCard();
  renderMonsterCard();
  renderMonsterSubList('all');
  setupFilters();
  setupMonsterFilters();
});


// ================= 3. 렌더링 및 필터 함수들 =================

function renderMainCharacters(filterGroup) {
  const grid = document.getElementById('main-character-grid');
  grid.innerHTML = '';

  const filtered = filterGroup === 'all' 
    ? mainCharacters 
    : mainCharacters.filter(c => c.group === filterGroup);

  filtered.forEach(c => {
    const card = document.createElement('div');
    card.className = 'char-card';
    const imgStyle = c.img ? `background-image: url('${c.img}');` : '';
    const placeholderText = c.img ? '' : '[ 이미지 공간 ]';

    card.innerHTML = `
      <div class="card-img-placeholder" style="${imgStyle}">${placeholderText}</div>
      <div class="card-info">
        <div class="card-name">${c.name}</div>
        <div class="card-tag">${c.faction} | ${c.position}</div>
        <div class="card-desc">${c.realm}</div>
      </div>
    `;
    card.addEventListener('click', () => openModalDetail(c.name, `${c.faction} | ${c.position}`, getCharacterDetailHTML(c), c.img));
    grid.appendChild(card);
  });
}

function setupFilters() {
  const buttons = document.querySelectorAll('#section-main-chars .filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.getAttribute('data-filter');
      renderMainCharacters(filter);
    });
  });
}

function renderSubCharacters() {
  const grid = document.getElementById('sub-character-grid');
  subCharacters.forEach(sub => {
    const card = document.createElement('div');
    card.className = 'char-card';
    const imgStyle = sub.img ? `background-image: url('${sub.img}');` : '';
    const placeholderText = sub.img ? '' : '[ 이미지 공간 ]';

    card.innerHTML = `
      <div class="card-img-placeholder" style="${imgStyle}">${placeholderText}</div>
      <div class="card-info">
        <div class="card-name">${sub.name}</div>
        <div class="card-tag">조연 인물</div>
      </div>
    `;
    card.addEventListener('click', () => openModalDetail(sub.name, sub.category, `<div class="modal-detail-row" style="line-height:1.6;">${sub.desc}</div>`, sub.img));
    grid.appendChild(card);
  });
}

function renderGhostCard() {
  const container = document.getElementById('ghost-card-container');
  const card = document.createElement('div');
  card.className = 'char-card';
  const imgStyle = ghostData.img ? `background-image: url('${ghostData.img}');` : '';
  const placeholderText = ghostData.img ? '' : '[ 원혼 이미지 공간 ]';

  card.innerHTML = `
    <div class="card-img-placeholder" style="${imgStyle}">${placeholderText}</div>
    <div class="card-info">
      <div class="card-name">${ghostData.name}</div>
      <div class="card-tag">${ghostData.category}</div>
    </div>
  `;
  card.addEventListener('click', () => openModalDetail(ghostData.name, ghostData.category, `<div class="modal-detail-row" style="line-height:1.6;">${ghostData.desc}</div>`, ghostData.img));
  container.appendChild(card);
}

function renderMonsterCard() {
  const container = document.getElementById('monster-card-container');
  const card = document.createElement('div');
  card.className = 'char-card';
  const imgStyle = monsterCardData.img ? `background-image: url('${monsterCardData.img}');` : '';
  const placeholderText = monsterCardData.img ? '' : '[ 이매망량 이미지 공간 ]';

  card.innerHTML = `
    <div class="card-img-placeholder" style="${imgStyle}">${placeholderText}</div>
    <div class="card-info">
      <div class="card-name">${monsterCardData.name}</div>
      <div class="card-tag">${monsterCardData.category}</div>
    </div>
  `;
  card.addEventListener('click', () => openModalDetail(monsterCardData.name, monsterCardData.category, `<div class="modal-detail-row" style="line-height:1.6;">${monsterCardData.desc}</div>`, monsterCardData.img));
  container.appendChild(card);
}

function renderMonsterSubList(filterGroup) {
  const grid = document.getElementById('monster-sub-grid');
  grid.innerHTML = '';

  const filtered = filterGroup === 'all'
    ? monsterSubList
    : monsterSubList.filter(m => m.group === filterGroup);

  filtered.forEach(m => {
    const card = document.createElement('div');
    card.className = 'char-card';
    const imgStyle = m.img ? `background-image: url('${m.img}');` : '';
    const placeholderText = m.img ? '' : '[ 개체 이미지 공간 ]';

    card.innerHTML = `
      <div class="card-img-placeholder" style="${imgStyle}">${placeholderText}</div>
      <div class="card-info">
        <div class="card-name">${m.name}</div>
        <div class="card-tag">${m.category}</div>
      </div>
    `;
    card.addEventListener('click', () => openModalDetail(m.name, m.category, `<div class="modal-detail-row" style="line-height:1.6;">${m.desc}</div>`, m.img));
    grid.appendChild(card);
  });
}

function setupMonsterFilters() {
  const buttons = document.querySelectorAll('.monster-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.getAttribute('data-filter');
      renderMonsterSubList(filter);
    });
  });
}


// ================= 4. 상세 모달 (팝업) 통합 공용 로직 =================
const modal = document.getElementById('detail-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

modalClose.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});

function getCharacterDetailHTML(c) {
  return `
    <div class="modal-detail-row"><strong>소속 문파:</strong> ${c.faction}</div>
    <div class="modal-detail-row"><strong>나이 / 성별:</strong> ${c.age}세 / ${c.gender}</div>
    <div class="modal-detail-row"><strong>무공 경지:</strong> ${c.realm}</div>
    <div class="modal-detail-row"><strong>사용 무공:</strong> ${c.martial}</div>
    <div class="modal-detail-row"><strong>외형 특징:</strong> ${c.look}</div>
    <div class="modal-detail-row"><strong>착용 의상:</strong> ${c.outfit}</div>
    <div class="modal-detail-row"><strong>성격 / 말투:</strong> ${c.personality} / ${c.speech}</div>
    <div class="modal-detail-row" style="margin-top:15px; background:#e4d7c0; padding:10px;"><strong>특징:</strong> ${c.note}</div>
  `;
}

function openModalDetail(name, tag, contentHTML, imgSrc) {
  const imgBoxHTML = imgSrc 
    ? `<div style="width:100%; height:260px; background-image:url('${imgSrc}'); background-size:cover; background-position:center; border:2px solid #3d2b1f; margin-bottom:20px; border-radius:3px;"></div>`
    : `<div style="width:100%; height:200px; background-color:#cbbba0; display:flex; justify-content:center; align-items:center; color:#6e5d4f; border:2px dashed #4a3b32; margin-bottom:20px; font-weight:bold;">[ 상세 일러스트 공간 ]</div>`;

  modalBody.innerHTML = `
    <h2 class="modal-header-title">${name} <span style="font-size:1rem; color:#555;">(${tag})</span></h2>
    ${imgBoxHTML}
    ${contentHTML}
  `;
  modal.classList.remove('hidden');
}
