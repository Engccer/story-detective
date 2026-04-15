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
  }
];
