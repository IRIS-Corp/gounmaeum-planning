# 개발자용 읽는 순서

IRIS 콘솔을 처음 받는 개발자가 이 순서로 읽으면 됩니다. 기준 화면은 **[iris-console/iris-console-v0.3.4.html](../iris-console/iris-console-v0.3.4.html)** 입니다.

| 순서 | 문서 | 무엇 | 상태 |
|---|---|---|---|
| 1 | [`functional-spec.md`](functional-spec.md) | 기능 명세 — 화면 목록 · 기능 ID · 상태 전이 · 권한 · 필요 API · 미정 목록 | ⚠️ v0.3.3 기준 · D9~D24 미반영 (아래) |
| 2 | [`../iris-console/iris-console-v0.3.4.html`](../iris-console/iris-console-v0.3.4.html) | 화면 시안. 내려받아서 브라우저로 여세요 | 최신 |
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
| [`decisions.md`](decisions.md) | 결정 기록 D1~D24 (왜 이렇게 됐는지) · **정책은 이 문서가 기준** |
| [`policy-review-1012.md`](policy-review-1012.md) | 10/12 정책 질의 10건 답변 (D9~D18의 근거) |
| [`meeting-2026-10-02.md`](meeting-2026-10-02.md) | 회의록 · v3.1 반영 항목 |
| [`../iris-console/CHANGELOG.md`](../iris-console/CHANGELOG.md) | 버전별 변경 |

## `functional-spec.md`에서 주의할 것

**명세서는 v0.3.3 기준입니다. v0.3.4(2026-10-12)에서 정해진 D9~D24가 아직 안 들어가 있습니다.** 아래 항목은 명세서보다 [`decisions.md`](decisions.md)가 맞습니다.

| 주제 | 명세서에 있는 것 | 실제 결정 |
|---|---|---|
| 복지 정책 변경 이력 | "1차 제외" | **복구.** 버전별 읽기 전용 보기 + 전 → 후 비교. 불러오기(되돌리기)만 1차 제외 (D20) |
| 정책 적용 시점 | "이후 등록 건부터" | 저장할 때 **적용일을 고름** (기본 다음 날 0시 · 즉시 · 날짜 지정). 기준은 경조사 발생일 (D23) |
| 정책 수정 권한 | 언급 없음 | Owner와 관리자 **모두 직접 수정 · 저장**. 승인 단계 없이 저장 시 Owner에게 알림 (D22) |
| 회사 정보 | "회사명 · 사업자번호 수정 요청" | 결과 박스 · 검토 중 배지 · 요청 이력 · 등록증 첨부. 사업자 정보는 Owner만, 주소 · 연락처는 관리자도 (D9~D12) |
| 퇴사 | "퇴사 처리" 1단 | **"퇴사 처리 중 → 퇴사 완료" 2단** + 퇴사 예정일(미래 날짜 · 당일 자동 · 그 전 취소) (D7 · D14) |
| 임직원 삭제 | 언급 없음 | 이력이 있으면 **삭제 불가**, 퇴사 처리로 안내. 퇴사자 정보는 퇴사 취소 후에만 수정 (D15 · D17) |
| 번호 변경 (F-EMP-7) | 전용 창 · 중복 확인 | 여러 회사에 소속된 번호는 **콘솔에서 막고 고객센터 안내** (D16) |
| 조직 | 언급 없음 | 본부 순서를 ↑ ↓ 로 변경 · CSV 순서 유지 · 숫자 자연 정렬 (D13) |
| 경조금 산정 | 관계별 정책 금액 | 1차는 **금액 직접 입력 + 직급별 차등**. 기본급 % 방식은 HRIS 연동 후 2차 (D24) |

`decisions.md` **D22에 "본부 담당 · 뷰어는 보기만"** 이라고 적혀 있는데, 명세서 4장은 v0.3.0 결정에 따라 역할을 **Owner + 관리자 2단**으로 줄였습니다. 두 문서가 어긋나니 구현 전에 확인하세요.

그 밖에 금액 · 한도 · 정책 값은 **전부 가안**입니다 (명세서 9장). 9장의 Q3 · Q4 · Q5 · Q6 · Q9 · Q10도 아직 미정이고, 특히 Q10(경조사 "서류 확인"을 별도 단계로 둘지)은 구현 순서에 영향을 줍니다.

## 여기 없는 것

`design_handoff_iris_console/`(이전 핸드오프 패키지)와 `iris-tokens.css`는 올리지 않았습니다. 토큰은 [`../iris-ds/`](../iris-ds/)로 대체됐고, 핸드오프 패키지는 보관 대상입니다. 옛 토큰 파일을 기준으로 구현하면 값이 어긋납니다.
