# Story Detective 통합 앱 제작 워크플로우

## 개요

Story Detective L1/L2 독립 앱을 하나의 통합 앱으로 병합. 레슨 선택 화면에서 원하는 레슨을 선택하여 플레이. 이후 레슨(L3~)은 통합 앱에 직접 추가한다.

## 파일 구조

```
story-detective/
├── index.html              통합 게임 엔진 (L1 기반 + 레슨 선택 추가)
├── lessons_data.js         STORY_LESSONS[] 배열 (L1~L6 데이터)
├── sfx_data.js             공유 효과음 (9개, L1에서 복사)
├── audio_L<N>.js           var AUDIO_L<N> = {...} (레슨별 TTS 번들, 각 9~14MB)
├── briefing_bg_L<N>.png    레슨별 브리핑 배경
├── audio/L<N>/             원본 WAV 백업 (git 제외)
├── _generate_tts_L<N>.py   레슨별 TTS 생성 스크립트 (git 제외)
├── _bundle_L<N>.mjs        레슨별 번들 스크립트 (git 제외)
└── WORKFLOW.md             이 문서
```

## 레슨 목록

| ID | 제목 | 교과서 |
|----|------|--------|
| 1 | Who Is in Your Heart? | p.16~18 |
| 2 | Healthy and Yummy Snacks for You | p.30~32 |
| 3 | Different Attitudes, Different Results | p.44~46 |
| 4 | The Colorful Villages of the World | p.68~70 |
| 5 | Who Threw a Cake at the Monalisa? | p.82~84 |
| 6 | Join the Zero-Waste Challenge | p.98~100 |

## 통합 패턴

- 데이터: `STORY_LESSONS` 배열 (Word Bomb/Grammar Potion과 동일 패턴)
- 오디오: 레슨별 `audio_L<N>.js` 지연 로딩 (`var` 선언 필수)
- 배경: 레슨별 `briefing_bg_L<N>.png` 동적 전환
- 점수: localStorage 키 `storydetective_scores`
- 핵심 메커니즘: `D = activeLesson` 할당으로 기존 엔진 코드 재사용

## 새 레슨 추가 방법

1. `lessons_data.js`의 `STORY_LESSONS` 배열에 새 레슨 객체 추가 (패시지 3개 × 퀴즈 4문항 + 보너스 4문항)
2. `_generate_tts_L<N>.py` 작성 → `audio/L<N>/*.wav` 생성 (Gemini Kore, 7초 간격)
   - vocab 키는 영어만: 단일 단어 `"Word. Word."`, 다단어 구 `"Eat out."` 1회
   - 본문 낭독은 숫자·약어를 낭독형으로 풀어 씀 (`FYI` → `F Y I`, `Challenge 01` → `Challenge one`)
3. `python stt_verify.py` 로 DRIFT/SUS 0건 확인 (특히 vocab_*)
4. `node _bundle_L<N>.mjs` → `audio_L<N>.js` 생성 (`var` 필수, briefing_1~3·case_select는 직전 레슨 번들에서 재사용)
5. 브리핑 배경 생성 → `briefing_bg_L<N>.png`
   - `gemini-image-gen.mjs --aspect 16:9`, 느와르 탐정 책상 씬. 프롬프트에 담배·술·무기 배제를 명시할 것 (기본 프롬프트로 재떨이가 들어온 사례)
6. 로컬 서버로 전체 흐름 확인 후 `git add && git commit && git push` (index.html 수정 불필요)

## 배포

- URL: https://engccer.github.io/story-detective/
- 레거시: story-detective-L1/, story-detective-L2/ (독립 레포 유지)
