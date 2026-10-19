# 개발자용 읽는 순서

IRIS 콘솔을 처음 받는 개발자가 이 순서로 읽으면 됩니다. 기준 화면은 **[iris-console-v0.3.9.html](../iris-console/iris-console-v0.3.9.html)** 입니다.

| 순서 | 문서 | 무엇 |
|---|---|---|
| 1 | [`functional-spec.md`](functional-spec.md) | 기능 명세 — 화면 목록 · 기능 ID · 상태 전이 · 권한 · 필요 API · 미정 목록 |
| 2 | [`iris-console-v0.3.9.html`](../iris-console/iris-console-v0.3.9.html) | 화면 시안. 내려받아서 브라우저로 여세요 (26MB) |
| 3 | [`login-flow.md`](login-flow.md) | 로그인 · 계정 발급 정책 |
| 4 | [`validation-ui.md`](validation-ui.md) | 오류 · 확인 창 · 토스트 쓰는 규칙 |
| 5 | [`component-states.md`](../iris-component-states/component-states.md) | 쓰는 컴포넌트와 상태값 ([그림](../iris-component-states/iris-component-states-v0.1.1.html)) |
| 6 | [`iris-ds/README.md`](../iris-ds/README.md) | 토큰 · 컴포넌트 불러오는 법 ([글자 단계](../iris-ds/type-scale.md) · [토큰 차이](../iris-ds/token-diff.md)) |

[`decisions.md`](decisions.md)는 **정책의 기준**입니다 (D1~D29). 명세서와 다르게 보이면 이 문서가 맞습니다.

## 맥락이 필요할 때

| 문서 | 무엇 |
|---|---|
| [`reference/prd.md`](reference/prd.md) | 서비스 정의 · 사용자 · 어기면 안 되는 것 |
| [`reference/design-principles.md`](reference/design-principles.md) | 화면 설계 원칙 |
| [`reference/ux-writing.md`](reference/ux-writing.md) | 문구 원칙 · **용어 사전** · 바꾼 문구 기록 |
| [`reference/policy-review-1012.md`](reference/policy-review-1012.md) | 10/12 정책 질의 10건 답변 (D9~D18의 근거) |
| [`reference/notion-qna-2026-10-16.md`](reference/notion-qna-2026-10-16.md) | 10/16 서류 첨부 · 부고장 발송 기준 Q&A |
| [`reference/meeting-2026-10-02.md`](reference/meeting-2026-10-02.md) | 10-02 회의록 |
| [`CHANGELOG.md`](../iris-console/CHANGELOG.md) | 버전별 변경 |
| [`obit/`](../obit/) | 부고장 피그마 원본 프레임 · 토큰 |

## 구현 전에 알아야 할 것

**역할은 대표 · 관리자 · 일반 셋입니다.** 2026-10-15에 이름을 통일했습니다 — 전에 쓰던 `Owner` · `오너` · `루트`는 **대표**, `어드민`은 **관리자**, `뷰어`는 **일반**입니다. 데이터 값은 `role = owner / admin / viewer` 그대로입니다. 용어 사전은 [`reference/ux-writing.md`](reference/ux-writing.md).

**화면에 있지만 만들지 않는 것이 있습니다.**

| 항목 | 상태 |
|---|---|
| 부재 시 대행 (대행자 지정 · 24시간 미처리 이관) | **MVP 제외** (D27). 프로토타입 v0.3.9에는 아직 화면이 남아 있습니다 |
| 장례케어 (고운마음 후불 상조) | **MVP 제외 · 참고용** (D28). 상품 4종은 명세서 끝 절에 |
| 인사 시스템 동기화 | 제외 (D8). 대신 "마지막 업데이트 날짜" 표시 |
| 부고장 서식 편집 | 1차 제외. 아이리스 기존 부고장에 테마만 고름 |

**금액 · 한도 · 정책 값은 전부 가안입니다.** 회사마다 설정으로 정합니다. 아직 안 정해진 7건은 명세서 9장에 있고, 그중 **Q10**(경조사 "서류 확인"을 별도 단계로 둘지)은 구현 순서에 영향을 줍니다.

**프로토타입 쪽에 남은 낡은 문구 2곳** — 설정 › 법인카드 권한 안내 모달의 "본부 담당"(없어진 역할), 같은 탭 설명의 "초과 시 Owner 승인"(삭제된 흐름). 문서가 맞고 화면 문구가 낡았습니다.

## 여기 없는 것

`design_handoff_iris_console/`(이전 핸드오프 패키지)와 `iris-tokens.css`는 올리지 않았습니다. 토큰은 [`../iris-ds/`](../iris-ds/)가 기준입니다. 옛 토큰 파일로 구현하면 값이 어긋납니다.
