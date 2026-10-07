# 개발자용 읽는 순서

IRIS 콘솔을 처음 받는 개발자가 이 순서로 읽으면 됩니다. 기준 화면은 **[iris-console/iris-console-v0.3.1.html](../iris-console/iris-console-v0.3.1.html)** 입니다.

| 순서 | 문서 | 무엇 | 상태 |
|---|---|---|---|
| 1 | [`functional-spec.md`](functional-spec.md) | 기능 명세 — 화면 목록 · 기능 ID · 상태 전이 · 권한 · 필요 API · 미정 목록 | ⚠️ 일부 갱신 필요 (아래) |
| 2 | [`../iris-console/iris-console-v0.3.1.html`](../iris-console/iris-console-v0.3.1.html) | 화면 시안. 내려받아서 브라우저로 여세요 | 최신 |
| 3 | [`login-flow.md`](login-flow.md) | 로그인 · 계정 발급 정책 | 최신 |
| 4 | [`validation-ui.md`](validation-ui.md) | 오류 · 확인 창 · 토스트 쓰는 규칙 | 최신 |
| 5 | [`../iris-component-states/component-states.md`](../iris-component-states/component-states.md) | 쓰는 컴포넌트와 상태값 ([그림](../iris-component-states/iris-component-states-v0.1.1.html)) | 최신 |
| 6 | [`../iris-ds/README.md`](../iris-ds/README.md) | 토큰 · 컴포넌트 불러오는 법 | 최신 |
| 7 | [`type-scale.md`](type-scale.md) · [`token-diff.md`](token-diff.md) | 글자 7단계 · WDS 원본과 다른 토큰 값 | 최신 |

## 맥락이 필요할 때

| 문서 | 무엇 |
|---|---|
| [`prd.md`](prd.md) | 서비스 정의 · 사용자 · 어기면 안 되는 것 |
| [`design-principles.md`](design-principles.md) | 화면 설계 원칙 |
| [`decisions.md`](decisions.md) | 결정 기록 (왜 이렇게 됐는지) |
| [`meeting-2026-10-02.md`](meeting-2026-10-02.md) | 회의록 · v3.1 반영 항목 |
| [`../iris-console/CHANGELOG.md`](../iris-console/CHANGELOG.md) | 버전별 변경 |

## `functional-spec.md`에서 주의할 것

이 문서는 프로토타입 v0.1.0 기준으로 쓰였고, 그 뒤 v0.3.0에서 뒤집힌 결정이 아직 남아 있습니다. 아래 3개는 **명세서가 아니라 CHANGELOG 쪽이 맞습니다.**

| 명세서에 남은 것 | v0.3.0 이후 결정 |
|---|---|
| 법인카드 한도 초과 승인 흐름 (5곳) | 삭제. 월 한도 도달 시 사용 중지 + 문의 |
| 거래처 수신 거부 · 분류 (2곳) | 삭제 |
| 부고장 서식 편집 (P2) | 1차 제외. 아이리스 기존 부고장을 그대로 사용 |

경조사 진행 단계도 **접수 → 결재 → 진행 → 완료** 4단계가 맞습니다. 명세서에는 아직 안 들어가 있습니다.

그 밖에 금액 · 한도 · 정책 값은 **전부 가안**입니다. 회사마다 설정으로 정합니다 (명세서 9장 미정 목록).

## 여기 없는 것

`design_handoff_iris_console/`(이전 핸드오프 패키지)와 `iris-tokens.css`는 올리지 않았습니다. 토큰은 [`../iris-ds/`](../iris-ds/)로 대체됐고, 핸드오프 패키지는 보관 대상입니다. 옛 토큰 파일을 기준으로 구현하면 값이 어긋납니다.
