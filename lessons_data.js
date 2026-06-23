const STORY_LESSONS = [
  {
    id: 1,
    title: "Who Is in Your Heart?",
    caseCount: 3,

    passages: [
      {
        id: 1,
        character: "Jihun",
        characterDesc: "지훈이와 가장 친한 친구 민수",
        page: 16,
        text: "I'm Jihun. My best friend is Minsu. Minsu and I love rock music. We are members of the school band Rock It. I play the guitar, and Minsu plays the drums. We are not good players, but we have so much fun together.\nWith Minsu, I laugh all the time. Together, we are happy.",
        translation: "나는 지훈이야. 나의 가장 친한 친구는 민수야. 민수와 나는 록 음악을 정말 좋아해. 우리는 학교 밴드 Rock It의 회원이야. 나는 기타를 치고, 민수는 드럼을 쳐. 우리는 연주를 잘하지 못하지만, 함께 정말 즐거워.\n민수와 있으면, 나는 항상 웃어. 같이 있으면, 우리는 행복해.",
        audioKey: "para_1",
        vocabulary: [
          { word: "member", korean: "구성원, 멤버", audioKey: "vocab_member" },
          { word: "band", korean: "밴드", audioKey: "vocab_band" },
          { word: "together", korean: "함께, 같이", audioKey: "vocab_together" },
          { word: "laugh", korean: "웃다", audioKey: "vocab_laugh" },
          { word: "all the time", korean: "내내, 아주 자주", audioKey: "vocab_all_the_time" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "What does Minsu play in the band?",
            audioKey: "quiz_1_1",
            options: ["He plays the guitar.", "He plays the drums.", "He plays the keyboard.", "He plays the bass."],
            answer: 1,
            explanation: "본문에 'Minsu plays the drums'라고 나와 있어요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "What music do Jihun and Minsu love?",
            audioKey: "quiz_1_2",
            options: ["They love pop music.", "They love classical music.", "They love rock music.", "They love jazz music."],
            answer: 2,
            explanation: "'Minsu and I love rock music.'에서 알 수 있어요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "Jihun and Minsu are good players.",
            audioKey: "quiz_1_3",
            answer: false,
            explanation: "'We are not good players'라고 했어요. 잘하지 못하지만 함께 즐거워해요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "Minsu is my _____, and we are members of the school _____. With him, I _____ all the time.",
            audioKey: "quiz_1_4",
            blanks: [
              { position: 0, answer: "best friend", options: ["best friend", "neighbor", "guide dog", "teacher"] },
              { position: 1, answer: "band", options: ["band", "team", "class", "club"] },
              { position: 2, answer: "laugh", options: ["laugh", "cry", "sleep", "study"] }
            ],
            explanation: "본문의 핵심 단어들로 빈칸을 채워 봅시다."
          }
        ]
      },
      {
        id: 2,
        character: "Hannah",
        characterDesc: "Hannah와 이웃 Schmidt 부인",
        page: 17,
        text: "I'm Hannah. Mrs. Schmidt, my neighbor, is a dear friend to me. She is a great listener, and I often talk with her. She doesn't talk much. She just nods and smiles at me. Sometimes I'm sad, and she bakes a cake for me. Her cake is yummy, and I feel all right, like magic.\nWith Mrs. Schmidt, I feel at home. Together, we are happy.",
        translation: "나는 Hannah야. 내 이웃인 Schmidt 부인은 나에게 소중한 친구야. 그녀는 말을 잘 들어주는 사람이고, 나는 자주 그녀와 이야기를 나눠. 그녀는 말을 많이 하지 않으셔. 단지 고개를 끄덕이시고 내게 미소를 지어 주셔. 때때로 나는 슬퍼, 그리고 그녀는 나를 위해 케이크를 구워 주셔. 그녀의 케이크는 맛있어서, 나는 마법처럼 기분이 괜찮아져.\nSchmidt 부인과 있으면, 나는 마음이 편안해. 같이 있으면, 우리는 행복해.",
        audioKey: "para_2",
        vocabulary: [
          { word: "neighbor", korean: "이웃", audioKey: "vocab_neighbor" },
          { word: "dear", korean: "소중한", audioKey: "vocab_dear" },
          { word: "nod", korean: "끄덕이다", audioKey: "vocab_nod" },
          { word: "bake", korean: "(빵, 쿠키를) 굽다", audioKey: "vocab_bake" },
          { word: "magic", korean: "마술, 마법", audioKey: "vocab_magic" },
          { word: "feel at home", korean: "편안함을 느끼다", audioKey: "vocab_feel_at_home" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "How does Hannah feel with Mrs. Schmidt?",
            audioKey: "quiz_2_1",
            options: ["She feels excited.", "She feels at home.", "She feels nervous.", "She feels bored."],
            answer: 1,
            explanation: "'With Mrs. Schmidt, I feel at home.'에서 알 수 있어요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "What does Mrs. Schmidt bake for Hannah?",
            audioKey: "quiz_2_2",
            options: ["She bakes cookies.", "She bakes bread.", "She bakes a cake.", "She bakes pie."],
            answer: 2,
            explanation: "'She bakes a cake for me.'에서 알 수 있어요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "Mrs. Schmidt talks a lot with Hannah.",
            audioKey: "quiz_2_3",
            answer: false,
            explanation: "'She doesn't talk much. She just nods and smiles.'라고 했어요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "Mrs. Schmidt is my _____ and a dear friend to me. She's a great _____. With her, I feel at _____.",
            audioKey: "quiz_2_4",
            blanks: [
              { position: 0, answer: "neighbor", options: ["neighbor", "teacher", "sister", "mother"] },
              { position: 1, answer: "listener", options: ["listener", "singer", "player", "dancer"] },
              { position: 2, answer: "home", options: ["home", "school", "work", "peace"] }
            ],
            explanation: "본문의 핵심 단어들로 빈칸을 채워 봅시다."
          }
        ]
      },
      {
        id: 3,
        character: "Tim",
        characterDesc: "Tim과 안내견 Hope",
        page: 18,
        text: "I'm Tim. Hope is my guide dog and my best friend. She is by my side 24/7. She even goes to school with me. Is she a good student? Well, she mostly sleeps in class, but the teachers don't mind. On weekends, we go to the park and play together.\nWith Hope, I feel free and strong. Together, we are happy.",
        translation: "나는 Tim이야. Hope는 내 안내견이자 가장 친한 친구야. 그녀는 언제나 내 옆에 있어. 그녀는 심지어 나와 학교도 같이 다녀. 그녀는 좋은 학생일까? 글쎄, 그녀는 수업 중에 주로 잠을 자지만, 선생님들은 신경 쓰지 않으셔. 주말마다, 우리는 공원에 가서 함께 놀아.\nHope와 있으면, 나는 자유롭고 강한 느낌이 들어. 같이 있으면, 우리는 행복해.",
        audioKey: "para_3",
        vocabulary: [
          { word: "guide dog", korean: "안내견", audioKey: "vocab_guide_dog" },
          { word: "by one's side", korean: "~의 옆에", audioKey: "vocab_by_ones_side" },
          { word: "24/7", korean: "항상, 늘", audioKey: "vocab_twenty_four_seven" },
          { word: "even", korean: "심지어", audioKey: "vocab_even" },
          { word: "mostly", korean: "대부분", audioKey: "vocab_mostly" },
          { word: "mind", korean: "신경 쓰다", audioKey: "vocab_mind" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "What do Tim and Hope do on weekends?",
            audioKey: "quiz_3_1",
            options: ["They stay at home.", "They go to school.", "They go to the park and play together.", "They sleep all day."],
            answer: 2,
            explanation: "'On weekends, we go to the park and play together.'에서 알 수 있어요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "What does Hope do in class?",
            audioKey: "quiz_3_2",
            options: ["She plays with students.", "She mostly sleeps.", "She runs around.", "She barks a lot."],
            answer: 1,
            explanation: "'She mostly sleeps in class'에서 알 수 있어요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "The teachers don't like Hope in class.",
            audioKey: "quiz_3_3",
            answer: false,
            explanation: "'The teachers don't mind.'라고 했어요. 선생님들은 신경 쓰지 않으세요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "Hope is my _____ and my best friend. She is always by my _____. With her, I feel free and _____.",
            audioKey: "quiz_3_4",
            blanks: [
              { position: 0, answer: "guide dog", options: ["guide dog", "best friend", "dear neighbor", "school band"] },
              { position: 1, answer: "side", options: ["side", "home", "school", "heart"] },
              { position: 2, answer: "strong", options: ["strong", "sad", "tired", "bored"] }
            ],
            explanation: "본문의 핵심 단어들로 빈칸을 채워 봅시다."
          }
        ]
      }
    ],

    bonusQuizzes: [
      { type: "multiple_choice", question: "Jihun and Minsu love _____ music.", options: ["rock", "pop", "jazz", "classical"], answer: 0, explanation: "지훈이와 민수는 록 음악을 좋아해요." },
      { type: "multiple_choice", question: "Jihun plays the _____ in the band.", options: ["drums", "guitar", "keyboard", "bass"], answer: 1, explanation: "지훈이는 기타를 연주해요. 민수가 드럼이에요!" },
      { type: "multiple_choice", question: "Sometimes Hannah is sad, and Mrs. Schmidt bakes _____ for her.", options: ["a cake", "cookies", "bread", "pie"], answer: 0, explanation: "Schmidt 부인은 Hannah를 위해 케이크를 구워 줘요." },
      { type: "multiple_choice", question: "In class, Hope mostly _____.", options: ["plays", "sleeps", "runs", "barks"], answer: 1, explanation: "Hope는 수업 시간에 주로 잠을 자요." }
    ]
  },

  {
    id: 2,
    title: "Healthy and Yummy Snacks for You",
    caseCount: 3,

    passages: [
      {
        id: 1,
        character: "Bella",
        characterDesc: "이탈리아 출신 셰프 — 카프레제 꼬치",
        page: 33,
        text: "Ciao, I'm Bella from Italy. I'm making caprese skewers. Anyone can make these. You just need mozzarella cheese, cherry tomatoes, and basil leaves. Just put them on skewers, and they'll become healthy snacks. Caprese skewers are low in calories, so I often eat them as a light snack.",
        translation: "안녕하세요, 저는 이탈리아에서 온 Bella입니다. 저는 카프레제 꼬치를 만들고 있어요. 누구나 이것을 만들 수 있어요. 모차렐라 치즈, 방울토마토, 그리고 바질 잎만 있으면 돼요. 그것들을 꼬치에 꽂기만 하면, 건강한 간식이 될 거예요. 카프레제 꼬치는 칼로리가 낮아서, 저는 가벼운 간식으로 자주 먹어요.",
        audioKey: "para_1",
        vocabulary: [
          { word: "skewer", korean: "(요리용) 꼬치", audioKey: "vocab_skewer" },
          { word: "cherry tomato", korean: "방울토마토", audioKey: "vocab_cherry_tomato" },
          { word: "basil", korean: "바질", audioKey: "vocab_basil" },
          { word: "low in calories", korean: "칼로리가 낮은", audioKey: "vocab_low_in_calories" },
          { word: "light", korean: "가벼운", audioKey: "vocab_light" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "What is Bella making?",
            audioKey: "quiz_1_1",
            options: ["She's making caprese skewers.", "She's making a salad.", "She's making pasta.", "She's making pizza."],
            answer: 0,
            explanation: "본문에 'I'm making caprese skewers.'라고 나와 있어요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "Why does Bella often eat caprese skewers as a light snack?",
            audioKey: "quiz_1_2",
            options: ["Because they are delicious.", "Because they are low in calories.", "Because they are easy to buy.", "Because they are her favorite food."],
            answer: 1,
            explanation: "'Caprese skewers are low in calories, so I often eat them as a light snack.'에서 알 수 있어요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "Bella needs flour to make caprese skewers.",
            audioKey: "quiz_1_3",
            answer: false,
            explanation: "Bella는 모차렐라 치즈, 방울토마토, 바질 잎만 필요해요. 밀가루는 필요 없어요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "I'm making caprese _____. You just need mozzarella _____, cherry tomatoes, and _____ leaves.",
            audioKey: "quiz_1_4",
            blanks: [
              { position: 0, answer: "skewers", options: ["skewers", "salads", "bowls", "chips"] },
              { position: 1, answer: "cheese", options: ["cheese", "bread", "flour", "butter"] },
              { position: 2, answer: "basil", options: ["basil", "garlic", "mint", "onion"] }
            ],
            explanation: "본문의 핵심 단어들로 빈칸을 채워 봅시다."
          }
        ]
      },
      {
        id: 2,
        character: "Mina",
        characterDesc: "한국 출신 셰프 — 두부 칩",
        page: 33,
        text: "Hi, I'm Mina from Korea, and I'm baking tofu chips. Unlike other chips, my tofu chips are healthy. Why? I don't fry my chips but bake them. I don't use any flour, either. I use only tofu. Eat the tofu chips with honey or garlic powder. They'll taste good.",
        translation: "안녕하세요, 저는 한국에서 온 미나이고, 두부 칩을 굽고 있어요. 다른 칩들과는 다르게, 제 두부 칩은 건강에 좋아요. 왜냐고요? 저는 두부 칩을 튀기지 않고 굽거든요. 저는 밀가루도 사용하지 않아요. 두부만 사용해요. 두부 칩을 꿀이나 마늘 가루와 같이 먹어 보세요. 맛이 좋을 거예요.",
        audioKey: "para_2",
        vocabulary: [
          { word: "unlike", korean: "~와 달리", audioKey: "vocab_unlike" },
          { word: "fry", korean: "튀기다", audioKey: "vocab_fry" },
          { word: "bake", korean: "(빵, 과자 등을) 굽다", audioKey: "vocab_bake" },
          { word: "flour", korean: "밀가루", audioKey: "vocab_flour" },
          { word: "either", korean: "(부정문에서) ~도", audioKey: "vocab_either" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "Why are Mina's tofu chips healthy?",
            audioKey: "quiz_2_1",
            options: ["Because she uses special flour.", "Because she adds vitamins.", "Because she doesn't fry but bakes them, and she doesn't use any flour.", "Because she uses organic tofu."],
            answer: 2,
            explanation: "'I don't fry my chips but bake them. I don't use any flour, either.'에서 알 수 있어요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "What can you eat the tofu chips with?",
            audioKey: "quiz_2_2",
            options: ["ketchup or mustard", "honey or garlic powder", "salt or pepper", "cheese or butter"],
            answer: 1,
            explanation: "'Eat the tofu chips with honey or garlic powder.'에서 알 수 있어요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "Mina uses flour to make her tofu chips.",
            audioKey: "quiz_2_3",
            answer: false,
            explanation: "'I don't use any flour, either. I use only tofu.'라고 했어요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "I don't _____ my chips but _____ them. I don't use any _____, either.",
            audioKey: "quiz_2_4",
            blanks: [
              { position: 0, answer: "fry", options: ["fry", "boil", "steam", "grill"] },
              { position: 1, answer: "bake", options: ["bake", "cook", "mix", "cut"] },
              { position: 2, answer: "flour", options: ["flour", "sugar", "salt", "oil"] }
            ],
            explanation: "본문의 핵심 단어들로 빈칸을 채워 봅시다."
          }
        ]
      },
      {
        id: 3,
        character: "Miguel",
        characterDesc: "브라질 출신 셰프 — 아사이 볼",
        page: 34,
        text: "Hello, everyone. I'm Miguel from Brazil. I'm making an acai bowl right now. It's a thick acai berry smoothie in a bowl. You can add other healthy foods like nuts and bananas, and it'll taste really good. Acai berries are a superfood, and people all over the world enjoy them.",
        translation: "안녕하세요, 여러분. 저는 브라질에서 온 Miguel입니다. 지금 저는 아사이 볼을 만들고 있어요. 아사이 볼은 걸쭉한 아사이베리 스무디를 그릇에 담은 거예요. 여러분은 견과류나 바나나 같은 다른 건강한 음식을 추가할 수 있는데, 그러면 맛이 아주 좋을 거예요. 아사이베리는 슈퍼 푸드이고, 전 세계 사람들이 그것을 즐겨 먹어요.",
        audioKey: "para_3",
        vocabulary: [
          { word: "thick", korean: "걸쭉한, 진한", audioKey: "vocab_thick" },
          { word: "smoothie", korean: "스무디", audioKey: "vocab_smoothie" },
          { word: "add", korean: "추가하다", audioKey: "vocab_add" },
          { word: "nut", korean: "견과류", audioKey: "vocab_nut" },
          { word: "superfood", korean: "슈퍼 푸드", audioKey: "vocab_superfood" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "What is an acai bowl?",
            audioKey: "quiz_3_1",
            options: ["It's a thick acai berry smoothie in a bowl.", "It's a fruit salad in a bowl.", "It's a bowl of ice cream.", "It's a bowl of cereal."],
            answer: 0,
            explanation: "'It's a thick acai berry smoothie in a bowl.'에서 알 수 있어요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "What can you add to the acai bowl?",
            audioKey: "quiz_3_2",
            options: ["chocolate and cookies", "flour and sugar", "nuts and bananas", "cheese and bread"],
            answer: 2,
            explanation: "'You can add other healthy foods like nuts and bananas.'에서 알 수 있어요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "Acai berries are only popular in Brazil.",
            audioKey: "quiz_3_3",
            answer: false,
            explanation: "'People all over the world enjoy them.'이라고 했어요. 전 세계에서 즐겨 먹어요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "It's a _____ acai berry smoothie in a _____. Acai berries are a _____, and people all over the world enjoy them.",
            audioKey: "quiz_3_4",
            blanks: [
              { position: 0, answer: "thick", options: ["thick", "thin", "sweet", "cold"] },
              { position: 1, answer: "bowl", options: ["bowl", "cup", "plate", "glass"] },
              { position: 2, answer: "superfood", options: ["superfood", "dessert", "snack", "meal"] }
            ],
            explanation: "본문의 핵심 단어들로 빈칸을 채워 봅시다."
          }
        ]
      }
    ],

    bonusQuizzes: [
      { type: "multiple_choice", question: "Where is Bella from?", options: ["Italy", "Korea", "Brazil", "France"], answer: 0, explanation: "Bella는 이탈리아에서 왔어요." },
      { type: "multiple_choice", question: "What does Mina bake?", options: ["caprese skewers", "tofu chips", "an acai bowl", "cookies"], answer: 1, explanation: "미나는 두부 칩을 굽고 있어요." },
      { type: "multiple_choice", question: "Acai berries are a _____.", options: ["snack", "meal", "superfood", "drink"], answer: 2, explanation: "아사이베리는 슈퍼 푸드예요." },
      { type: "multiple_choice", question: "The name of the show is _____.", options: ["Chef's Table", "Teens' Kitchen", "Food Lab", "Cooking Star"], answer: 1, explanation: "쇼의 이름은 Teens' Kitchen이에요." }
    ]
  },

  {
    id: 3,
    title: "Different Attitudes, Different Results",
    caseCount: 3,

    passages: [
      {
        id: 1,
        character: "Yuna's Team",
        characterDesc: "댄스 대회 참가를 결심한 유나의 팀",
        page: 48,
        text: "Every year, Yuna's school holds a dance contest. This year's contest is next month.\nYuna: Let's make a team and enter the contest.\nSuho: Are you kidding? We're all terrible dancers.\nBora: I know, but I'm interested.\nMinsu: Me, too. It'll be fun.\nYuna: Let's do it. Sounds good, Suho?\nSuho: I guess so.\nWhat will happen next? Read the following two different situations.",
        translation: "매년 유나의 학교는 댄스 대회를 개최한다. 올해 대회는 다음 달에 있다.\n유나: 우리 팀을 만들어서 대회에 참가하자.\n수호: 농담하는 거지? 우리는 모두 춤을 못 추잖아.\n보라: 알아, 그렇지만 나는 관심이 가.\n민수: 나도. 재미있을 거야.\n유나: 한번 해 보자. 괜찮은 생각이지, 수호야?\n수호: 그런 것 같아.\n그다음에는 무슨 일이 일어날까? 다음 두 가지 다른 상황을 읽어 보자.",
        audioKey: "para_1",
        vocabulary: [
          { word: "attitude", korean: "태도", audioKey: "vocab_attitude" },
          { word: "result", korean: "결과", audioKey: "vocab_result" },
          { word: "kid", korean: "농담하다", audioKey: "vocab_kid" },
          { word: "terrible", korean: "끔찍한, 서투른", audioKey: "vocab_terrible" },
          { word: "interested", korean: "관심이 있는", audioKey: "vocab_interested" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "When is the dance contest this year?",
            audioKey: "quiz_1_1",
            options: ["It's this week.", "It's next week.", "It's next month.", "It's next year."],
            answer: 2,
            explanation: "본문에 'This year's contest is next month.'라고 나와 있어요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "What does Minsu think about entering the contest?",
            audioKey: "quiz_1_2",
            options: ["He thinks it will be boring.", "He thinks it will be fun.", "He thinks it will be hard.", "He thinks it will be scary."],
            answer: 1,
            explanation: "민수가 'Me, too. It'll be fun.'이라고 했어요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "Yuna and her friends are good dancers.",
            audioKey: "quiz_1_3",
            answer: false,
            explanation: "수호가 'We're all terrible dancers.'라고 했어요. 모두 춤을 잘 못 춰요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "Yuna's school holds a dance _____ every year. Suho says they are all _____ dancers, but Bora is _____ in the team.",
            audioKey: "quiz_1_4",
            blanks: [
              { position: 0, answer: "contest", options: ["contest", "concert", "festival", "party"] },
              { position: 1, answer: "terrible", options: ["terrible", "great", "famous", "lucky"] },
              { position: 2, answer: "interested", options: ["interested", "tired", "angry", "scared"] }
            ],
            explanation: "본문의 핵심 단어들로 빈칸을 채워 봅시다."
          }
        ]
      },
      {
        id: 2,
        character: "Situation 1",
        characterDesc: "가망 없이 포기한 유나의 팀",
        page: 49,
        text: "D-14 Yuna and her teammates are in the practice room, but no one looks happy.\nSuho: We're making too many mistakes.\nBora: Yeah. We're hopeless.\nSuho: By the way, where's Minsu?\nYuna: Well, he's sick. He texted me.\nBora: Really? I saw him last night, and he was all right.\nD-1 The contest is tomorrow, but Yuna and her teammates are not practicing.\nSuho: I'm so tired.\nMinsu: Me, too. We're not getting anywhere.\nBora: Yeah. We're just wasting our time.\nYuna: The dance contest was not a good idea.\nSuho: I agree, but it's not your fault.\nYuna: Why don't we just quit?\nAfter weeks of unhappy practices, they finally quit. They felt hopeless.",
        translation: "D-14 유나와 팀원들은 연습실에 있지만, 아무도 즐거워 보이지 않는다.\n수호: 우리는 실수를 너무 많이 하고 있어.\n보라: 맞아. 우리는 가망이 없어.\n수호: 그나저나, 민수는 어딨어?\n유나: 글쎄, 아프대. 나한테 문자했어.\n보라: 정말? 내가 어젯밤에 민수를 봤는데 괜찮았어.\nD-1 대회는 내일인데, 유나와 팀원들은 연습을 하고 있지 않다.\n수호: 나 너무 피곤해.\n민수: 나도야. 우리는 더 나아지지 않고 있어.\n보라: 맞아. 우리는 시간 낭비만 하는 거라니까.\n유나: 댄스 대회는 좋지 못한 생각이었어.\n수호: 나도 동의하지만, 그게 네 잘못은 아니야.\n유나: 우리 그냥 그만두는 게 어때?\n몇 주간의 불만족스러운 연습 후에, 그들은 마침내 관뒀다. 그들은 가망이 없다고 느꼈다.",
        audioKey: "para_2",
        vocabulary: [
          { word: "hopeless", korean: "형편없는, 가망 없는", audioKey: "vocab_hopeless" },
          { word: "by the way", korean: "그런데, 그나저나", audioKey: "vocab_by_the_way" },
          { word: "waste", korean: "낭비하다", audioKey: "vocab_waste" },
          { word: "fault", korean: "잘못", audioKey: "vocab_fault" },
          { word: "quit", korean: "그만두다", audioKey: "vocab_quit" },
          { word: "finally", korean: "마침내", audioKey: "vocab_finally" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "Who didn't come to the practice on D-14?",
            audioKey: "quiz_2_1",
            options: ["Yuna didn't come.", "Suho didn't come.", "Bora didn't come.", "Minsu didn't come."],
            answer: 3,
            explanation: "수호가 'Where's Minsu?'라고 묻자 유나가 '아프대'라고 답했어요. D-14에 민수는 오지 않았어요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "Why didn't Bora think Minsu was really sick?",
            audioKey: "quiz_2_2",
            options: ["She talked to Minsu's mom.", "She saw Minsu last night, and he was all right.", "Minsu didn't text her back.", "Minsu was at school in the morning."],
            answer: 1,
            explanation: "보라가 'I saw him last night, and he was all right.'라고 했어요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "Yuna's team won the dance contest.",
            audioKey: "quiz_2_3",
            answer: false,
            explanation: "Situation 1에서 그들은 대회 전에 'finally quit' 했어요. 대회에 나가지도 않았어요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "Yuna's team made too many mistakes and felt _____. After weeks of unhappy practices, they _____ quit. They thought they were _____ their time.",
            audioKey: "quiz_2_4",
            blanks: [
              { position: 0, answer: "hopeless", options: ["hopeless", "hopeful", "excited", "proud"] },
              { position: 1, answer: "finally", options: ["finally", "happily", "loudly", "carefully"] },
              { position: 2, answer: "wasting", options: ["wasting", "spending", "saving", "enjoying"] }
            ],
            explanation: "본문의 핵심 단어들로 빈칸을 채워 봅시다."
          }
        ]
      },
      {
        id: 3,
        character: "Situation 2",
        characterDesc: "서로 응원하며 끝까지 해낸 유나의 팀",
        page: 50,
        text: "D-14 Yuna and her teammates are practicing hard in the practice room.\nSuho: I made a mistake again. I'm sorry.\nYuna: Cheer up! You can do it.\nMinsu: Yes. Don't worry, Suho. We all make mistakes.\nBora: Come on. Let's do it one more time! We're almost there.\nD-Day The contest is over now. Yuna's team didn't win any prizes, but they all look happy.\nYuna: Good job! We made it.\nMinsu: Yeah! We finished the dance without a big mistake. I feel great!\nBora: We did our best, and I'm so proud of all of us.\nSuho: Thank you for your support, everyone.",
        translation: "D-14 유나와 팀원들은 연습실에서 열심히 연습을 하고 있다.\n수호: 난 또 실수했어. 미안해.\n유나: 힘내! 너는 할 수 있어.\n민수: 맞아. 걱정하지 마, 수호야. 우리는 모두 실수해.\n보라: 자. 한 번 더 해 보자! 거의 다 왔어.\nD-Day 대회는 지금 끝이 났다. 유나의 팀은 아무런 상도 받지 못했지만, 그들은 모두 행복해 보인다.\n유나: 잘했어! 우리가 해냈어.\n민수: 맞아! 우리는 큰 실수 없이 춤을 끝냈어. 나는 기분이 좋아!\n보라: 우리는 최선을 다했고, 난 우리 모두가 정말 자랑스러워.\n수호: 모두들 응원해 줘서 고마워.",
        audioKey: "para_3",
        vocabulary: [
          { word: "make a mistake", korean: "실수하다", audioKey: "vocab_make_a_mistake" },
          { word: "worry", korean: "걱정하다", audioKey: "vocab_worry" },
          { word: "prize", korean: "상", audioKey: "vocab_prize" },
          { word: "do one's best", korean: "최선을 다하다", audioKey: "vocab_do_ones_best" },
          { word: "be proud of", korean: "~을 자랑으로 여기다", audioKey: "vocab_be_proud_of" },
          { word: "support", korean: "지지, 응원", audioKey: "vocab_support" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "Why did Minsu feel great after the contest?",
            audioKey: "quiz_3_1",
            options: ["Because the team won first prize.", "Because they finished the dance without a big mistake.", "Because the contest was canceled.", "Because Minsu got a solo part."],
            answer: 1,
            explanation: "민수가 'We finished the dance without a big mistake. I feel great!'이라고 했어요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "How did Yuna's team look after the contest?",
            audioKey: "quiz_3_2",
            options: ["They looked tired.", "They looked angry.", "They all looked happy.", "They looked disappointed."],
            answer: 2,
            explanation: "본문에 'they all look happy'라고 나와 있어요. 상은 못 받았지만 모두 행복해 보였어요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "Yuna's team won a prize at the dance contest.",
            audioKey: "quiz_3_3",
            answer: false,
            explanation: "'Yuna's team didn't win any prizes'라고 했어요. 상은 받지 못했지만 최선을 다해서 자랑스러워했어요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "When Suho made a mistake, Yuna said \"_____ up!\". After the contest, Bora said \"We did our _____, and I'm so _____ of all of us.\"",
            audioKey: "quiz_3_4",
            blanks: [
              { position: 0, answer: "Cheer", options: ["Cheer", "Wake", "Get", "Stand"] },
              { position: 1, answer: "best", options: ["best", "worst", "homework", "dance"] },
              { position: 2, answer: "proud", options: ["proud", "tired", "scared", "shy"] }
            ],
            explanation: "본문의 핵심 단어들로 빈칸을 채워 봅시다."
          }
        ]
      }
    ],

    bonusQuizzes: [
      { type: "multiple_choice", question: "The big idea of this lesson is: Different attitudes lead to different _____.", options: ["results", "schools", "songs", "prizes"], answer: 0, explanation: "이 단원의 큰 주제는 '다른 태도, 다른 결과'예요." },
      { type: "multiple_choice", question: "In Situation 1, Yuna's team felt _____ and quit before the contest.", options: ["hopeful", "hopeless", "excited", "proud"], answer: 1, explanation: "Situation 1에서 그들은 가망이 없다고 느끼고 마침내 그만뒀어요." },
      { type: "multiple_choice", question: "When Suho made a mistake, Yuna said \"_____ up! You can do it.\"", options: ["Wake", "Stand", "Cheer", "Get"], answer: 2, explanation: "유나는 '힘내!'라는 뜻의 'Cheer up!'으로 수호를 격려했어요." },
      { type: "multiple_choice", question: "After the contest, Bora said: \"We did our _____, and I'm so proud of all of us.\"", options: ["best", "worst", "dance", "homework"], answer: 0, explanation: "'do one's best'는 '최선을 다하다'라는 뜻이에요." }
    ]
  },

  {
    id: 4,
    title: "The Colorful Villages of the World",
    caseCount: 3,

    passages: [
      {
        id: 1,
        character: "Minji in Ronda",
        characterDesc: "스페인 론다의 절벽 마을에서 수미에게 편지를 쓰는 민지",
        page: 65,
        text: "Hi Sumi,\nYesterday, my family and I came to Ronda in Spain. Most buildings here are white, and they are so beautiful against the blue sky. And the views! Ronda is on cliffs, so the views are fantastic. Now, we're eating lunch on the terrace of a restaurant. All the food here is great, but I especially like the churros. After lunch, we're going to visit the Ernest Hemingway Walk. Hemingway loved Ronda and spent many summers here.\nYour friend,\nMinji",
        translation: "안녕, 수미야.\n어제 우리 가족과 나는 스페인의 론다에 왔어. 여기에 있는 대부분의 건물들은 하얀색이고, 파란 하늘과 대비되어 정말 아름다워. 그리고 경치도! 론다는 절벽 위에 있어서 경치가 환상적이야. 지금, 우리는 식당 테라스에서 점심을 먹고 있어. 이곳의 모든 음식이 훌륭하지만, 나는 특히 추로스가 좋아. 점심 후에, 우리는 Ernest Hemingway 산책로를 방문할 예정이야. Hemingway는 론다를 매우 좋아했고 이곳에서 여러 번의 여름을 보냈어.\n너의 친구,\n민지가",
        audioKey: "para_1",
        vocabulary: [
          { word: "village", korean: "마을", audioKey: "vocab_village" },
          { word: "view", korean: "경치", audioKey: "vocab_view" },
          { word: "cliff", korean: "절벽", audioKey: "vocab_cliff" },
          { word: "fantastic", korean: "환상적인", audioKey: "vocab_fantastic" },
          { word: "terrace", korean: "테라스", audioKey: "vocab_terrace" },
          { word: "especially", korean: "특히, 특별히", audioKey: "vocab_especially" },
          { word: "spend", korean: "(시간을) 보내다", audioKey: "vocab_spend" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "What color are most buildings in Ronda?",
            audioKey: "quiz_1_1",
            options: ["They're blue.", "They're white.", "They're purple.", "They're yellow."],
            answer: 1,
            explanation: "본문에 'Most buildings here are white'라고 나와 있어요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "What are Minji and her family doing in Ronda?",
            audioKey: "quiz_1_2",
            options: ["They're shopping at a souvenir store.", "They're walking on a cliff.", "They're eating lunch on the terrace of a restaurant.", "They're visiting the Ernest Hemingway Walk."],
            answer: 2,
            explanation: "본문에 \"Now, we're eating lunch on the terrace of a restaurant.\"라고 나와 있어요. Hemingway Walk는 점심 후 갈 예정이에요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "Ernest Hemingway spent many summers in Ronda.",
            audioKey: "quiz_1_3",
            answer: true,
            explanation: "본문에 'Hemingway loved Ronda and spent many summers here.'라고 나와 있어요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "Ronda is in _____. Most buildings are _____. Ronda is on _____, so the views are fantastic.",
            audioKey: "quiz_1_4",
            blanks: [
              { position: 0, answer: "Spain", options: ["Spain", "Morocco", "Korea", "France"] },
              { position: 1, answer: "white", options: ["white", "blue", "purple", "yellow"] },
              { position: 2, answer: "cliffs", options: ["cliffs", "hills", "rivers", "islands"] }
            ],
            explanation: "After You Read의 Read and Complete 활동을 본문에서 확인해 봅시다."
          }
        ]
      },
      {
        id: 2,
        character: "Uncle Jay in Chefchaouen",
        characterDesc: "모로코 쉐프샤우엔, '푸른 진주'에서 인호에게 편지를 쓰는 Jay 삼촌",
        page: 67,
        text: "Hi Inho,\nI'm in Chefchaouen, the Blue Pearl of Morocco. All day long, I enjoyed taking pictures of the blue streets and blue buildings. I also enjoyed walking through the narrow streets. They were full of interesting shops, and I bought some souvenirs. Now, I'm drinking mint tea at a tea house, just like the locals. Chefchaouen is famous for its sunrises.\nTomorrow, I'm going to get up early and enjoy a beautiful sunrise.\nBest,\nUncle Jay",
        translation: "안녕, 인호야.\n나는 모로코의 푸른 진주, 쉐프샤우엔에 있어. 하루 종일 나는 파란색 길과 파란색 건물들의 사진을 찍는 것을 즐겼어. 나는 좁은 길 사이를 걸어 다니는 것도 즐거웠어. 그곳은 흥미로운 가게들로 가득 차 있었고, 나는 기념품도 몇 개 샀지. 지금 나는 현지인들처럼 찻집에서 민트 차를 마시고 있어. 쉐프샤우엔은 일출로 유명해.\n내일 나는 일찍 일어나서 아름다운 일출을 즐겨 보려고 해.\n안부를 전하며,\nJay 삼촌이",
        audioKey: "para_2",
        vocabulary: [
          { word: "pearl", korean: "진주", audioKey: "vocab_pearl" },
          { word: "narrow", korean: "좁은", audioKey: "vocab_narrow" },
          { word: "be full of", korean: "~으로 가득 차다", audioKey: "vocab_be_full_of" },
          { word: "souvenir", korean: "기념품", audioKey: "vocab_souvenir" },
          { word: "tea", korean: "차", audioKey: "vocab_tea" },
          { word: "local", korean: "주민, 현지인", audioKey: "vocab_local" },
          { word: "famous", korean: "유명한", audioKey: "vocab_famous" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "What did Uncle Jay buy in the shops?",
            audioKey: "quiz_2_1",
            options: ["He bought some books.", "He bought some clothes.", "He bought some souvenirs.", "He bought some food."],
            answer: 2,
            explanation: "본문에 'I bought some souvenirs.'라고 나와 있어요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "What is Uncle Jay drinking at a tea house?",
            audioKey: "quiz_2_2",
            options: ["He is drinking coffee.", "He is drinking mint tea.", "He is drinking orange juice.", "He is drinking water."],
            answer: 1,
            explanation: "본문에 \"I'm drinking mint tea at a tea house, just like the locals.\"라고 나와 있어요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "Chefchaouen is famous for its sunsets.",
            audioKey: "quiz_2_3",
            answer: false,
            explanation: "본문에 'Chefchaouen is famous for its sunrises.'라고 했어요. 일출(sunrise)로 유명하지 일몰(sunset)이 아니에요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "Chefchaouen is in _____. Its color is _____. The narrow streets are full of interesting _____.",
            audioKey: "quiz_2_4",
            blanks: [
              { position: 0, answer: "Morocco", options: ["Morocco", "Spain", "Korea", "Egypt"] },
              { position: 1, answer: "blue", options: ["blue", "white", "purple", "red"] },
              { position: 2, answer: "shops", options: ["shops", "schools", "cars", "trees"] }
            ],
            explanation: "After You Read의 Read and Complete 활동을 본문에서 확인해 봅시다."
          }
        ]
      },
      {
        id: 3,
        character: "Amy on Purple Island",
        characterDesc: "한국의 보라섬에서 엄마에게 편지를 쓰는 Amy",
        page: 68,
        text: "Dear Mom,\nI'm on Purple Island in Korea. Almost everything here is purple - the houses, the buses, and even the bridges. Purple is my favorite color, so the island is just perfect for me. I didn't even pay the entrance fee to the island. Why? I was wearing a purple T-shirt. Now, I'm on my way to a bike rental shop. The island is not big, so I'm going to explore it by bicycle. I'm especially looking forward to visiting the Lavender Garden.\nLove,\nAmy",
        translation: "엄마에게,\n저는 한국의 보라섬에 있어요. 이곳은 거의 모든 것이 보라색이에요 — 집, 버스, 그리고 심지어 다리까지요. 보라색은 제가 제일 좋아하는 색이라, 이 섬은 저에게 완벽한 곳이에요. 저는 이 섬의 입장료도 내지 않았어요. 왜냐고요? 보라색 티셔츠를 입고 있었기 때문이에요. 지금, 저는 자전거 대여소로 가는 중이에요. 이 섬은 크지 않아서, 자전거로 돌아다니면서 답사할 거예요. 저는 특히 라벤더 정원에 방문하는 것이 기대돼요.\n사랑을 담아,\nAmy 올림",
        audioKey: "para_3",
        vocabulary: [
          { word: "purple", korean: "보라색의, 보라색", audioKey: "vocab_purple" },
          { word: "island", korean: "섬", audioKey: "vocab_island" },
          { word: "fee", korean: "요금", audioKey: "vocab_fee" },
          { word: "on one's way to", korean: "~로 가는 길에", audioKey: "vocab_on_ones_way_to" },
          { word: "rental", korean: "대여, 임대", audioKey: "vocab_rental" },
          { word: "explore", korean: "탐험하다, 답사하다", audioKey: "vocab_explore" },
          { word: "bicycle", korean: "자전거", audioKey: "vocab_bicycle" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "Why didn't Amy pay the entrance fee to the island?",
            audioKey: "quiz_3_1",
            options: ["She was very young.", "She was a local resident.", "She was wearing a purple T-shirt.", "She was a tour guide."],
            answer: 2,
            explanation: "본문에 'Why? I was wearing a purple T-shirt.'라고 나와 있어요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "How is Amy going to explore the island?",
            audioKey: "quiz_3_2",
            options: ["She is going to explore the island on foot.", "She is going to explore the island by bicycle.", "She is going to explore the island by bus.", "She is going to explore the island by boat."],
            answer: 1,
            explanation: "본문에 \"I'm going to explore it by bicycle.\"라고 나와 있어요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "Amy is most excited about visiting the Lavender Garden.",
            audioKey: "quiz_3_3",
            answer: true,
            explanation: "본문에 \"I'm especially looking forward to visiting the Lavender Garden.\"이라고 했어요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "Purple Island is in _____. Its color is _____. The island is not big, so visitors can explore it by _____.",
            audioKey: "quiz_3_4",
            blanks: [
              { position: 0, answer: "Korea", options: ["Korea", "Spain", "Morocco", "Japan"] },
              { position: 1, answer: "purple", options: ["purple", "white", "blue", "green"] },
              { position: 2, answer: "bicycle", options: ["bicycle", "bus", "car", "boat"] }
            ],
            explanation: "After You Read의 Read and Complete 활동을 본문에서 확인해 봅시다."
          }
        ]
      }
    ],

    bonusQuizzes: [
      { type: "multiple_choice", question: "The big idea of this lesson is: Three travelers visit colorful villages around the _____.", options: ["world", "city", "town", "school"], answer: 0, explanation: "단원 제목 'The Colorful Villages of the World'에서 알 수 있어요." },
      { type: "multiple_choice", question: "Which of these is NOT mentioned in any of the three letters?", options: ["churros", "mint tea", "Lavender Garden", "blue mountains"], answer: 3, explanation: "추로스(론다), 민트 차(쉐프샤우엔), 라벤더 정원(보라섬)은 본문에 있지만, '파란 산'은 본문에 없어요." },
      { type: "multiple_choice", question: "In Ronda, Minji's family is going to visit the _____ Walk after lunch.", options: ["Picasso", "Ernest Hemingway", "Don Quixote", "Cervantes"], answer: 1, explanation: "본문에 \"we're going to visit the Ernest Hemingway Walk.\"라고 나와 있어요." },
      { type: "multiple_choice", question: "Chefchaouen is called the Blue _____ of Morocco.", options: ["Star", "Ocean", "Pearl", "Sky"], answer: 2, explanation: "본문에 'Chefchaouen, the Blue Pearl of Morocco.'라고 나와 있어요." }
    ]
  },
  {
    id: 5,
    title: "Who Threw a Cake at the Monalisa?",
    caseCount: 3,

    passages: [
      {
        id: 1,
        character: "Ann & Carlos",
        characterDesc: "사건 현장의 두 목격자 — 방문객 Ann과 청소부 Carlos",
        page: 82,
        text: "Last Saturday, someone threw a cake at the Monalisa in the Botero Museum in Bogota, Colombia. There were four eyewitnesses. What did they say? Read the following, and find the criminal.\nAnn Jones, a visitor\nI was looking at the Monalisa, and someone threw a cake at the painting. I turned around and saw an old man. He was standing in front of a wheelchair. I'm about 170 cm tall, and he was a little taller than me.\nCarlos Diaz, a janitor\nAn old man with gray hair was running away, and something fell off his head. It was his wig. I ran after him, but I couldn't catch him. He was faster than me. In fact, the old man was not old. He was a young man with long brown hair.",
        translation: "지난 토요일, 누군가가 콜롬비아 보고타에 있는 보테로 박물관의 '모나리자'에 케이크를 던졌다. 네 명의 목격자가 있었다. 그들이 뭐라고 말했을까? 다음을 읽고, 범인을 찾아보자.\nAnn Jones, 방문객\n저는 '모나리자'를 보고 있었는데, 누군가가 그림을 향해 케이크를 던졌어요. 저는 뒤를 돌아봤고 한 노인을 봤어요. 그는 휠체어 앞에 서 있었어요. 저는 키가 약 170cm 정도인데, 그는 저보다 조금 더 컸어요.\nCarlos Diaz, 청소부\n회색 머리의 한 노인이 도망가고 있었고, 그의 머리에서 뭔가가 떨어졌어요. 그것은 그의 가발이었어요. 저는 그를 뒤쫓았지만, 잡지 못했어요. 그는 저보다 더 빨랐어요. 사실, 그 노인은 나이 든 사람이 아니었어요. 그는 긴 갈색 머리의 젊은 남자였어요.",
        audioKey: "para_1",
        vocabulary: [
          { word: "throw", korean: "던지다 (-threw)", audioKey: "vocab_throw" },
          { word: "eyewitness", korean: "목격자", audioKey: "vocab_eyewitness" },
          { word: "criminal", korean: "범인, 범죄자", audioKey: "vocab_criminal" },
          { word: "wheelchair", korean: "휠체어", audioKey: "vocab_wheelchair" },
          { word: "janitor", korean: "청소부, 관리인", audioKey: "vocab_janitor" },
          { word: "run away", korean: "도망치다", audioKey: "vocab_run_away" },
          { word: "wig", korean: "가발", audioKey: "vocab_wig" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "How tall was the old man?",
            audioKey: "quiz_1_1",
            options: ["He was shorter than 170 cm.", "He was exactly 170 cm.", "He was a little taller than 170 cm.", "He was 182 cm tall."],
            answer: 2,
            explanation: "Ann이 'I'm about 170 cm tall, and he was a little taller than me.'라고 했어요. 170cm보다 조금 큰 키예요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "Why couldn't Carlos catch the man?",
            audioKey: "quiz_1_2",
            options: ["The man was faster than Carlos.", "The man hid in the museum.", "Carlos fell down.", "A guard stopped Carlos."],
            answer: 0,
            explanation: "Carlos가 'He was faster than me.'라고 했어요. 그 남자가 더 빨라서 잡지 못했어요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "The old man with gray hair was really an old man.",
            audioKey: "quiz_1_3",
            answer: false,
            explanation: "Carlos가 'In fact, the old man was not old. He was a young man with long brown hair.'라고 했어요. 노인은 변장한 젊은 남자였어요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "The man was a little _____ than 170 cm. His _____ fell off his head. He was really a _____ man.",
            audioKey: "quiz_1_4",
            blanks: [
              { position: 0, answer: "taller", options: ["taller", "shorter", "older", "slower"] },
              { position: 1, answer: "wig", options: ["wig", "hat", "bag", "phone"] },
              { position: 2, answer: "young", options: ["young", "old", "tall", "kind"] }
            ],
            explanation: "목격자들의 증언을 정리하면, 범인은 170cm보다 조금 크고, 가발이 떨어졌으며, 사실 젊은 남자였어요."
          }
        ]
      },
      {
        id: 2,
        character: "Diego & Camila",
        characterDesc: "범죄 현장을 조사한 경비원 Diego와 빵집 주인 Camila",
        page: 83,
        text: "Diego Perez, a guard\nI went to the crime scene, and there were pieces of cake all over the painting. There was also a wheelchair near the painting, and I found a cake box next to the wheelchair. The box was from Camila's Bakery.\nCamila Santos, the owner of Camila's Bakery\nLast Friday, a young man came in. I spoke to him in Spanish, but he didn't understand me. He spoke only English. We had a lot of different cakes, but he just wanted the smallest one. We sold only one cake on that day, so I remember him clearly. Oh, he had blue eyes.",
        translation: "Diego Perez, 경비원\n저는 범죄 현장에 갔는데, 그림 곳곳에 케이크 조각들이 있었어요. 그림 주변에는 휠체어도 있었고, 저는 휠체어 옆에 있는 케이크 상자를 발견했어요. 그 상자는 Camila 빵집의 상자였어요.\nCamila Santos, Camila 빵집의 주인\n지난 금요일, 한 젊은 남자가 들어왔어요. 저는 그에게 스페인어로 말했지만, 그는 제 말을 이해하지 못했어요. 그는 영어로만 말했어요. 우리 가게에는 각각 다른 많은 케이크들이 있었는데, 그는 그냥 가장 작은 것을 원했어요. 우리는 그날 케이크를 딱 한 개 팔았어요. 그래서 그를 똑똑히 기억해요. 아, 그의 눈은 파란색이었어요.",
        audioKey: "para_2",
        vocabulary: [
          { word: "guard", korean: "경비원", audioKey: "vocab_guard" },
          { word: "crime scene", korean: "범죄 현장", audioKey: "vocab_crime_scene" },
          { word: "piece", korean: "조각", audioKey: "vocab_piece" },
          { word: "bakery", korean: "빵집", audioKey: "vocab_bakery" },
          { word: "owner", korean: "주인", audioKey: "vocab_owner" },
          { word: "understand", korean: "이해하다 (-understood)", audioKey: "vocab_understand" },
          { word: "clearly", korean: "분명히, 똑똑히", audioKey: "vocab_clearly" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "What did Diego find next to the wheelchair?",
            audioKey: "quiz_2_1",
            options: ["He found a cake box.", "He found a wig.", "He found a phone.", "He found a painting."],
            answer: 0,
            explanation: "Diego가 'I found a cake box next to the wheelchair.'라고 했어요."
          },
          {
            type: "multiple_choice",
            source: "more_q",
            question: "What language did the young man speak?",
            audioKey: "quiz_2_2",
            options: ["He spoke only Spanish.", "He spoke only English.", "He spoke Spanish and English.", "He spoke only French."],
            answer: 1,
            explanation: "Camila가 'He spoke only English.'라고 했어요. 스페인어는 이해하지 못했어요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "Camila sold many cakes on that day.",
            audioKey: "quiz_2_3",
            answer: false,
            explanation: "Camila가 'We sold only one cake on that day, so I remember him clearly.'라고 했어요. 그날 케이크를 딱 한 개 팔았어요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "Diego found a _____ box next to the wheelchair. The man spoke only _____. He had _____ eyes.",
            audioKey: "quiz_2_4",
            blanks: [
              { position: 0, answer: "cake", options: ["cake", "music", "tool", "gift"] },
              { position: 1, answer: "English", options: ["English", "Spanish", "French", "Korean"] },
              { position: 2, answer: "blue", options: ["blue", "brown", "green", "black"] }
            ],
            explanation: "케이크 상자, 영어만 사용, 파란 눈 — 이 단서들이 범인을 찾는 열쇠예요."
          }
        ]
      },
      {
        id: 3,
        character: "The Suspects",
        characterDesc: "네 명의 용의자 정보 — 단서를 모아 진짜 범인을 찾아라",
        page: 84,
        text: "Now, look at the information about the suspects. Who threw the cake at the Monalisa?\nAndres Lozano - Height: 176 cm; Hair: long, black; Languages: Spanish, English; Eyes: brown\nLarry Johnson - Height: 173 cm; Hair: long, brown; Languages: English; Eyes: blue\nTim Baker - Height: 182 cm; Hair: long, brown; Languages: English; Eyes: green\nLuca Ferez - Height: 166 cm; Hair: short, gray; Languages: Spanish; Eyes: blue",
        translation: "이제, 용의자들에 대한 정보를 봐라. 누가 '모나리자'에 케이크를 던졌을까?\nAndres Lozano - 키: 176cm, 머리: 긴 머리·검은색, 언어: 스페인어·영어, 눈: 갈색\nLarry Johnson - 키: 173cm, 머리: 긴 머리·갈색, 언어: 영어, 눈: 파란색\nTim Baker - 키: 182cm, 머리: 긴 머리·갈색, 언어: 영어, 눈: 초록색\nLuca Ferez - 키: 166cm, 머리: 짧은 머리·회색, 언어: 스페인어, 눈: 파란색",
        audioKey: "para_3",
        vocabulary: [
          { word: "suspect", korean: "용의자", audioKey: "vocab_suspect" },
          { word: "height", korean: "키", audioKey: "vocab_height" },
          { word: "language", korean: "언어", audioKey: "vocab_language" },
          { word: "information", korean: "정보", audioKey: "vocab_information" }
        ],
        quizzes: [
          {
            type: "multiple_choice",
            source: "textbook_q",
            question: "After reading all the clues, who threw the cake at the Monalisa?",
            audioKey: "quiz_3_1",
            options: ["Andres Lozano", "Larry Johnson", "Tim Baker", "Luca Ferez"],
            answer: 1,
            explanation: "범인은 170cm보다 조금 큰 키(173cm), 긴 갈색 머리, 영어만 사용, 파란 눈을 모두 만족해요. 그 사람은 Larry Johnson이에요."
          },
          {
            type: "multiple_choice",
            source: "custom",
            question: "Camila said the man spoke ONLY English. Which clue rules OUT Andres Lozano?",
            audioKey: "quiz_3_2",
            options: ["He speaks both Spanish and English.", "He is 176 cm tall.", "He has long hair.", "He bought a cake."],
            answer: 0,
            explanation: "범인은 영어만 말하는데, Andres Lozano는 스페인어와 영어를 모두 해요. 그래서 범인이 아니에요."
          },
          {
            type: "true_false",
            source: "custom",
            question: "Tim Baker cannot be the criminal because he has green eyes.",
            audioKey: "quiz_3_3",
            answer: true,
            explanation: "범인은 파란 눈을 가졌는데, Tim Baker는 초록색 눈이에요. 그래서 범인이 될 수 없어요."
          },
          {
            type: "fill_blank",
            source: "after_read",
            question: "The criminal is a little taller than _____ cm. He speaks only _____. He has _____ eyes.",
            audioKey: "quiz_3_4",
            blanks: [
              { position: 0, answer: "170", options: ["170", "160", "180", "190"] },
              { position: 1, answer: "English", options: ["English", "Spanish", "French", "Korean"] },
              { position: 2, answer: "blue", options: ["blue", "brown", "green", "gray"] }
            ],
            explanation: "세 가지 핵심 단서(170cm보다 조금 큰 키, 영어만 사용, 파란 눈)가 Larry Johnson을 가리켜요."
          }
        ]
      }
    ],

    bonusQuizzes: [
      { type: "multiple_choice", question: "This lesson asks you to think like the famous detective _____.", options: ["Sherlock Holmes", "Harry Potter", "James Bond", "Peter Pan"], answer: 0, explanation: "단원 제목 'Think like Sherlock Holmes!'에서 알 수 있어요." },
      { type: "multiple_choice", question: "How many eyewitnesses were there in this case?", options: ["two", "three", "four", "five"], answer: 2, explanation: "본문에 'There were four eyewitnesses.'라고 나와 있어요. 네 명이에요." },
      { type: "multiple_choice", question: "The criminal wore a wig and stood by a wheelchair to look like an _____ man.", options: ["old", "young", "rich", "famous"], answer: 0, explanation: "범인은 회색 가발을 쓰고 휠체어 앞에 서서 노인처럼 변장했어요." },
      { type: "multiple_choice", question: "Which news headline best fits this case?", options: ["Famous Painter Botero Missing", "Man Steals Botero's Monalisa", "Man Damages Monalisa in Botero Museum", "Bakery Sells Out of Cakes"], answer: 2, explanation: "After You Read의 정답이에요. 누군가 케이크를 던져 그림을 훼손한(damage) 사건이에요." }
    ]
  }
];
