# iris-ds

IRIS 콘솔이 쓰는 디자인 토큰 · 컴포넌트 · 아이콘입니다. 콘솔 프로토타입(`iris-console/*.html`)은 이 값들을 파일 안에 복사해 넣은 단일 HTML이라 이 폴더를 참조하지 않습니다. 실제 구현에서는 이 폴더를 씁니다.

## 불러오는 순서

`styles.css` 하나만 불러오면 아래 순서로 전부 들어옵니다.

```html
<link rel="stylesheet" href="iris-ds/styles.css">
<script src="iris-ds/iris-bundle.js"></script>
```

| # | 파일 | 내용 |
|---|---|---|
| 1 | `fonts/pretendard.css` | 폰트 선언 (온라인 로드) |
| 2 | `tokens/atomic.css` | 원색 팔레트. 화면에서 직접 쓰지 않습니다 |
| 3 | `tokens/semantic.css` | 용도별 색. **화면에서 쓰는 것은 이 파일** |
| 4 | `tokens/opacity.css` · `spacing.css` · `radius.css` | 투명도 · 간격 · 모서리 |
| 5 | `tokens/typography.css` | 글자 크기 · 줄높이 · 자간 |
| 6 | `tokens/base.css` | 기본 초기화 · body 기본값 |

순서를 바꾸면 안 됩니다. `semantic.css`는 `atomic.css`의 값을 참조하고, `base.css`는 앞의 토큰을 모두 참조합니다.

## 쓰는 규칙

- 색은 항상 `semantic` 토큰으로 씁니다. `atomic` 값을 화면에서 직접 쓰지 않습니다.
- 순수 검정(`#000`)은 쓰지 않습니다. 가장 진한 글자는 `--semantic-label-normal`.
- WDS 원본과 값이 다른 토큰은 [`../docs/token-diff.md`](../docs/token-diff.md)에 정리돼 있습니다. 피그마 변수는 이 파일 기준으로 만듭니다.
- 글자 단계는 [`../docs/type-scale.md`](../docs/type-scale.md).
- 컴포넌트의 상태별 모양은 [`../iris-component-states/component-states.md`](../iris-component-states/component-states.md).

## 폴더

| 경로 | 내용 |
|---|---|
| `styles.css` | 토큰 전체를 불러오는 입구 |
| `tokens/` | 토큰 6종 |
| `fonts/` | 폰트 선언 |
| `iris-bundle.js` | 컴포넌트 (React, 빌드 없이 쓰는 번들) |
| `assets/icons/` | 아이콘 10개 |
| `NOTICE.md` | 출처 · 라이선스 |

## 버전

이 폴더는 버전을 붙이지 않고 덮어씁니다. 어느 콘솔 버전에서 무엇이 바뀌었는지는 [`../iris-console/CHANGELOG.md`](../iris-console/CHANGELOG.md)를 보세요.
