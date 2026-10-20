# gounmaeum-planning

고운마음 기획 HTML (기획자 업로드용)

**개발자라면 [`docs/README.md`](docs/README.md)부터 읽으세요.** 읽는 순서가 정리돼 있습니다.

## 폴더

| 폴더 | 내용 | 최신 버전 |
|---|---|---|
| [`iris-console/`](iris-console/) | 콘솔 프로토타입 — **공유용 단일 파일**(오프라인) | [v0.3.11](iris-console/iris-console-v0.3.11.html) (21MB) · [변경 기록](iris-console/CHANGELOG.md) |
| [`iris-component-states/`](iris-component-states/) | 콘솔에서 쓰는 컴포넌트의 상태별 모양 · 토큰 시트 | [v0.1.1](iris-component-states/iris-component-states-v0.1.1.html) · [상태값 표](iris-component-states/component-states.md) |
| [`iris-ds/`](iris-ds/) | 콘솔이 쓰는 디자인 토큰 · 컴포넌트 · 아이콘 | [읽는 법](iris-ds/README.md) · [토큰](iris-ds/tokens/semantic.css) |
| [`docs/`](docs/) | 기능 명세 · 로그인 · 결정 기록 | [읽는 순서](docs/README.md) · [기능 명세](docs/functional-spec.md) |
| [`docs/reference/`](docs/reference/) | 맥락 · 근거 (PRD · 원칙 · 용어 사전 · 회의록) | [용어 사전](docs/reference/ux-writing.md) |
| [`prototype-dev/`](prototype-dev/) | **개발자용 프로토타입** — 라이브러리를 import로 불러오는 가벼운 버전 | [v0.3.11](prototype-dev/iris-console-v0.3.11.html) (827KB) |
| [`obit/`](obit/) | 아이리스 부고장 — 피그마 원본 프레임 · 토큰 | [실제 화면](obit/ObitLive.js) · [토큰](obit/fig-tokens.css) |
| [`archive/`](archive/) | 지난 버전 (기록용) | [목록](archive/README.md) |

## 여는 법

**공유용** (`iris-console/`) — 파일 하나로 끝납니다.

1. 파일 화면에서 **Download raw file**로 HTML을 받습니다.
2. 더블클릭해 브라우저에서 엽니다. 서버 · 인터넷 없이 열립니다 (폰트 포함 21MB).

**개발자용** (`prototype-dev/`) — 폴더째 받아야 합니다.

1. 레포를 clone하거나 `prototype-dev/` 폴더를 통째로 내려받습니다.
2. `iris-console-v0.3.11.html`을 엽니다. 같은 폴더의 `support.js` · `iris-ds/` · `obit/`를 참조합니다.
3. React · 폰트 · 우편번호 API는 CDN에서 불러오므로 **인터넷이 필요**합니다.

GitHub 웹에서는 HTML이 화면이 아니라 코드로 보입니다. 꼭 내려받아서 여세요.

## 올리는 규칙

- 파일 이름: `{폴더명}-v{버전}.html` (예: `iris-console-v0.1.0.html`)
- 새 버전을 올릴 때는 이전 파일을 지우지 않고 새 파일을 추가합니다.
- 바뀐 내용은 같은 폴더의 `CHANGELOG.md`에 적습니다.
- `iris-ds/`와 `docs/`는 버전을 붙이지 않고 같은 파일을 덮어씁니다. 어느 콘솔 버전에서 바뀐 값인지는 `iris-console/CHANGELOG.md`를 보세요.
