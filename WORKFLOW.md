# Story Detective 통합 앱 제작 워크플로우

## 개요

Story Detective L1/L2 독립 앱을 하나의 통합 앱으로 병합. 레슨 선택 화면에서 원하는 레슨을 선택하여 플레이.

## 파일 구조

```
story-detective/
├── index.html              통합 게임 엔진 (L1 기반 + 레슨 선택 추가)
├── lessons_data.js         STORY_LESSONS[] 배열 (L1+L2 데이터)
├── sfx_data.js             공유 효과음 (9개, L1에서 복사)
├── audio_L1.js             var AUDIO_L1 = {...} (L1 TTS, ~9.5MB)
├── audio_L2.js             var AUDIO_L2 = {...} (L2 TTS, ~9.3MB)
├── briefing_bg_L1.png      L1 브리핑 배경
├── briefing_bg_L2.png      L2 브리핑 배경
└── WORKFLOW.md             이 문서
```

## 통합 패턴

- 데이터: `STORY_LESSONS` 배열 (Word Bomb/Grammar Potion과 동일 패턴)
- 오디오: 레슨별 `audio_L<N>.js` 지연 로딩 (`var` 선언 필수)
- 배경: 레슨별 `briefing_bg_L<N>.png` 동적 전환
- 점수: localStorage 키 `storydetective_scores`
- 핵심 메커니즘: `D = activeLesson` 할당으로 기존 엔진 코드 재사용

## 새 레슨 추가 방법

1. `lessons_data.js`의 `STORY_LESSONS` 배열에 새 레슨 객체 추가
2. TTS 음성 생성 → `audio_L<N>.js` 생성 (`var AUDIO_L<N> = {...};`)
3. 브리핑 배경 생성 → `briefing_bg_L<N>.png`
4. `git add && git commit && git push` (index.html 수정 불필요)

## 배포

- URL: https://engccer.github.io/story-detective/
- 레거시: story-detective-L1/, story-detective-L2/ (독립 레포 유지)
