# IRIS 콘솔 v3 · 사용 중인 컴포넌트 상태값

기준 파일: `IRIS 콘솔 v3.1.dc.html` (2026-10-07 스타일 재정리) · 디자인 시스템: IRIS 디자인 시스템 (코드 패키지 `@wanteddev/wds`)
개수는 코드에 배치된 인스턴스 수입니다(템플릿 + 로직에서 만드는 것 합계, 2026-10-07 v3.1 기준 재집계). "상태"는 실제로 코드에서 바뀌는 값만 적었고, 키보드 focus는 시안 범위에서 뺐습니다(컴포넌트 기본 동작을 따름).
상태별 모습은 `IRIS 컴포넌트 상태 시트.dc.html`에 그려 두었습니다.

## 1. 액션

| 컴포넌트 | 개수 | 속성(variant) | 상태 | 쓰는 규칙 |
|---|---|---|---|---|
| Button | 107 (템플릿 90 · 로직 17) | variant: solid · outlined / color: primary · assistive / size: large · medium · small / fullWidth | default · hover · pressed · **disabled** | 화면당 파란(solid primary) 1개. 조건이 안 맞으면 disabled (예: 휴대폰 번호 미완성 → 인증번호 받기, 예금주 미조회 → 이체하기). 조회 완료 후엔 outlined assistive + 체크 아이콘으로 바뀜 |
| TextButton | 34 (템플릿 28 · 로직 6) | color: primary · assistive / size: small | default · hover · **disabled** | "전체 보기", "변경", "모두 읽음". 읽을 알림이 없으면 disabled |
| IconButton | 6 (템플릿 3 · 로직 3) | variant: normal · outlined / size: medium · small | default · hover · pressed | 알림 종, 캘린더 이전·다음, 더보기 |
| Chip | 20 (템플릿 16 · 로직 4) | variant: solid · outlined / size: medium · small | default · **active** | 목록/캘린더 전환(solid, 켜진 쪽 검정), 관계·경조금 종류 선택(outlined) |
| FilterButton | 1 (템플릿 0 · 로직 1) | variant: outlined / size: medium | **기본** = 라벨만 ("기간") · **active** = 기본값에서 바꿨을 때만, 라벨 + 선택값 굵게 ("기간 지난 달"). 스타일 덮어쓰기 금지 | 상태·기간·본부·직급·정렬 필터 |

## 2. 입력

| 컴포넌트 | 개수 | 속성 | 상태 | 쓰는 규칙 |
|---|---|---|---|---|
| TextField | 52 (템플릿 51 · 로직 1) | type: text · tel · password | default · **invalid** · **positive** · **disabled** · **readOnly** | 아래 표 참고 |
| SearchField | 16 | size: medium · small | default · 입력 중(지우기 x) | 받는 사람·부고·대상자·추가 수신인·모달 검색 |
| Select | 24 | — | default · open · 선택됨 | 은행, 관계, 본부, 발신 명의 등 |
| TextArea | 8 | — | default · 값 있음 | 사유, 안내 문구, 서식 본문 |
| Checkbox | 15 (템플릿 12 · 로직 3) | size: small | unchecked · **checked** · **indeterminate** · **disabled** | 수신인 "전체 선택"은 일부만 고르면 indeterminate |
| Radio | 7 (템플릿 5 · 로직 2) | size: medium | unchecked · **checked** | 경조금 종류 |
| Switch | 10 | size: small | off · **on** | 규칙·안내·공개 설정 |
| SegmentedControl | 8 | size: medium · small | 선택된 항목 1개 | 받는 사람 출처, 부고장 서식 톤 등 |

### TextField 상태 연결표

| 필드 | invalid (빨간 테두리) | positive (초록 체크) | disabled |
|---|---|---|---|
| 휴대폰 번호 (로그인·인증) | 형식 오류 | 010 형식 완성 | — |
| 인증번호 | 틀린 번호 | 6자리 입력 | 인증번호 받기 전 |
| 새 비밀번호 | 8자 이상인데 영문·숫자 미혼합 | 조건 충족 | — |
| 비밀번호 확인 | 불일치 | 일치 | — |
| 계좌번호 (3곳) | — | 예금주 조회 완료 | 은행 선택 전 |
| 추가 수신인 전화번호 | 형식 오류 | 형식 완성 | — |
| 경조금 금액 | 0원 | — | — |
| 마일리지 사용 | 보유량·상품가 초과 | — | — |
| 회사명 · 사업자등록번호 | — | — | readOnly |

## 3. 표시

| 컴포넌트 | 개수 | 속성 | 상태 |
|---|---|---|---|
| ContentBadge | 106 (템플릿 21 · 로직 85) | color: neutral · accent / accentColor: blue · red · orange · green / size: small · medium / variant: outlined | 상태별 색 고정 (진행 중 blue · 긴급·실패 red · 대기 orange · 완료 green · 일반 neutral) |
| PushBadge | 1 | variant: number / size: small | 숫자 0이면 숨김 |
| Avatar | 19 (템플릿 6 · 로직 13) | variant: person · company / size: small · medium · large | 이미지 없음 → 이니셜 |
| ListCell | 6 | verticalPadding: small · medium · large / divider | default · hover · **선택됨**(회색 채움 `fill-normal`) |
| Table | 16 | interactive / footer | 행 hover · 클릭 · **빈 상태**(FallbackView) |
| SectionHeader | 10 | size: small | — |
| SectionMessage | 14 | variant: info · positive · cautionary | 톤별 배경·테두리 고정 |
| FallbackView | 18 | padding: compact | 빈 상태 전용 |
| Divider | 2 | — | — |
| Card (+Thumbnail·Content·Title·Caption) | 1 | Thumbnail ratio 4:3 | hover |

## 4. 탐색 · 피드백 · 진행

| 컴포넌트 | 개수 | 속성 | 상태 |
|---|---|---|---|
| Tab | 5 | size: large · medium | 선택된 탭 1개(글자 · 밑줄 `label-normal` #171719 — 순수 검정 쓰지 않음) · 탭 옆 건수 |
| Menu | 14 (템플릿 13 · 로직 1) | — | closed · open · 항목 hover |
| Pagination | 7 (표 footer · 상품 선택에서 재사용) | — | 현재 페이지(채움 1칸) · 처음/끝에서 이전·다음 비활성(바탕 없이 흐린 아이콘) |
| Modal | 9 | size: small · medium · large / navigationVariant: emphasized / hideClose | open · closed |
| Alert | 6 | actions (normal · assistive · negative) | open · closed |
| ActionArea | 8 (템플릿 0 · 로직 8) | variant: neutral · sub | 주 버튼 disabled 가능 |
| ProgressTracker | 1 | direction: horizontal | 완료 · 현재 · 예정 |
| ProgressStepIndicator | 1 | — | 현재 단계 |
| Icon | 67 (템플릿 22 · 로직 45) | — | 색은 토큰 사용 (label · status · accent) |
| Tooltip | 8 (ⓘ 용어 설명) | size: small / placement: top | hover · focus 시 표시 |
| DateCalendar | 4 | — | 오늘 · 선택됨 · 범위 밖 비활성 |

## 5. 컴포넌트가 아닌 요소 (의도적으로 유지)

| 요소 | 이유 |
|---|---|
| 사이드바 메뉴 · 프로필 메뉴 항목 · 선택 목록 줄 · 선택 카드 (17곳) | 줄 전체를 누르는 영역. 모두 같은 회색 hover(`fill-normal`) |
| 막대그래프 2곳 (예산 진척 · 카드 한도) | IRIS ProgressIndicator는 2px. 요청에 따라 10px 유지, 색은 토큰 |
| 섹션 · 카드 제목 | 글자 스타일 18 / 26 / 700으로 통일 (`docs/type-scale.md`) |

## 6. 공통 스타일 (모든 컴포넌트 공통)

### 테두리
| 대상 | 기본 | 입력 · 열림 · 포커스 | 비활성 |
|---|---|---|---|
| TextField · SearchField · TextArea · Select 트리거 | `line-solid-normal` #E1E2E4 · 흰 바탕 | `primary-normal` 1px | `line-normal-neutral` (16%) |
| Button outlined · FilterButton · Chip outlined | `line-solid-normal` #E1E2E4 | — | `line-normal-neutral` |
| 카드 · 표 · 모달 안 박스 | `line-normal-neutral` (16%) | — | — |
| SNB · 상단 바 구분선 | `line-normal-normal` (22%) | — | — |

### 호버 · 누름 (WithInteraction)
| variant | hover | pressed |
|---|---|---|
| normal (solid 버튼 · 목록 줄) | 8% | 12% |
| light (outlined · 텍스트 버튼) | 6% | 10% |
| 줄 전체 선택 영역 | `fill-normal` 회색 | — |

### 선택됨
- 목록 줄 · 선택 카드: `fill-normal` 회색 채움, 글자색은 그대로(파란 글자 쓰지 않음).
- Chip · FilterButton active: 컴포넌트 기본값 그대로(덮어쓰기 금지).

### 글자
- 단계는 `docs/type-scale.md` 7단계. 가장 진한 글자는 `label-normal` #171719.
- 자간: 11~13px −0.004em · 14px −0.008em · 15~16px −0.012em · 18px 이상 −0.012em~−0.0194em.
- 보조 글자 `label-alternative` rgba(55,56,60,0.74) · 대비 4.5:1 이상.

### 색
- 모든 값은 `iris-ds/tokens/semantic.css`. 원본과 다른 값은 `docs/token-diff.md`.
- 토큰이 아닌 색은 부고장 테마 미리보기 · 토스트 체크 아이콘뿐.

## 페이지네이션 규칙

**언제 나오나**
- 목록 표에서 전체 건수가 **10건을 넘을 때만** 표 아래에 나옵니다. 10건 이하면 숨깁니다.
- 한 페이지 **10행** 고정 (행 수 선택 없음).

**쓰는 곳 (7곳)**
| 화면 | 기준 |
|---|---|
| 경조사 목록 | 탭(진행 중 · 승인 대기 · 완료 · 전체)별 건수 |
| 신청 · 승인 | 상태 필터 적용 후 건수 |
| 결제 내역 | 기간 · 본부 필터 적용 후 건수 |
| 활동 로그 | 하위 칩(발송 기록 · 승인 · 변경 이력) 적용 후 건수 |
| 임직원 | 본부 · 직급 · 검색 적용 후 건수 |
| 거래처 | 검색 적용 후 건수 |
| 화환 · 경조금 · 부고장 목록 | 탭별 건수 |

**쓰지 않는 곳**
- 홈 처리할 일, 다가오는 일정, 모달 안 목록(수신인 · 대상자 선택 등)은 페이지를 나누지 않고 **스크롤** (모달 목록 최대 높이 264px).
- 화환 상품 선택은 카드 6개 단위 페이지네이션 (예외 · 상품 그리드).

**동작**
- 탭 · 필터 · 검색을 바꾸면 **1페이지로** 돌아갑니다.
- 페이지를 바꾸면 표 맨 위로 스크롤합니다.
- 처음 페이지에서 "첫 페이지 · 이전", 마지막 페이지에서 "다음 · 마지막"은 비활성(누를 수 없음 · 바탕 없음).
- 페이지 번호는 최대 5개 보이고, 넘으면 현재 페이지 기준으로 밀려 보입니다.
- 빈 상태(0건)면 페이지네이션 대신 빈 상태 안내가 나옵니다.
