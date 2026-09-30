# IRIS 콘솔 v3 · 사용 중인 컴포넌트 상태값

기준 파일: `IRIS 콘솔 v3 (쉬운 버전).dc.html` · 디자인 시스템: IRIS 디자인 시스템 (코드 패키지 `@wanteddev/wds`)
개수는 코드에 배치된 인스턴스 수입니다(템플릿 + 로직에서 만드는 것 합계, 2026-09 v3 기준 재집계). "상태"는 실제로 코드에서 바뀌는 값만 적었고, 키보드 focus는 시안 범위에서 뺐습니다(컴포넌트 기본 동작을 따름).
상태별 모습은 `IRIS 컴포넌트 상태 시트.dc.html`에 그려 두었습니다.

## 1. 액션

| 컴포넌트 | 개수 | 속성(variant) | 상태 | 쓰는 규칙 |
|---|---|---|---|---|
| Button | 95 | variant: solid · outlined / color: primary · assistive / size: large · medium · small / fullWidth | default · hover · pressed · **disabled** | 화면당 파란(solid primary) 1개. 조건이 안 맞으면 disabled (예: 휴대폰 번호 미완성 → 인증번호 받기, 예금주 미조회 → 이체하기). 조회 완료 후엔 outlined assistive + 체크 아이콘으로 바뀜 |
| TextButton | 27 | color: primary · assistive / size: small | default · hover · **disabled** | "전체 보기", "변경", "모두 읽음". 읽을 알림이 없으면 disabled |
| IconButton | 4 | variant: normal · outlined / size: medium · small | default · hover · pressed | 알림 종, 캘린더 이전·다음, 더보기 |
| Chip | 13 | variant: solid · outlined / size: medium · small | default · **active** | 목록/캘린더 전환(solid, 켜진 쪽 검정), 관계·경조금 종류 선택(outlined) |
| FilterButton | 1 (필터 전체에서 재사용) | variant: outlined / size: medium | default · **active**(값 선택됨, 선택값 굵게) | 상태·기간·본부·직급·정렬 필터 |

## 2. 입력

| 컴포넌트 | 개수 | 속성 | 상태 | 쓰는 규칙 |
|---|---|---|---|---|
| TextField | 51 | type: text · tel · password | default · **invalid** · **positive** · **disabled** · **readOnly** | 아래 표 참고 |
| SearchField | 11 | size: medium · small | default · 입력 중(지우기 x) | 받는 사람·부고·대상자·추가 수신인·모달 검색 |
| Select | 16 | — | default · open · 선택됨 | 은행, 관계, 본부, 발신 명의 등 |
| TextArea | 8 | — | default · 값 있음 | 사유, 안내 문구, 서식 본문 |
| Checkbox | 12 | size: small | unchecked · **checked** · **indeterminate** · **disabled** | 수신인 "전체 선택"은 일부만 고르면 indeterminate |
| Radio | 1 | size: medium | unchecked · **checked** | 경조금 종류 |
| Switch | 13 | size: small | off · **on** | 규칙·안내·공개 설정 |
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
| ContentBadge | 105 (템플릿 22 · 로직 83) | color: neutral · accent / accentColor: blue · red · orange · green / size: small · medium / variant: outlined | 상태별 색 고정 (진행 중 blue · 긴급·실패 red · 대기 orange · 완료 green · 일반 neutral) |
| PushBadge | 1 | variant: number / size: small | 숫자 0이면 숨김 |
| Avatar | 16 | variant: person · company / size: small · medium · large | 이미지 없음 → 이니셜 |
| ListCell | 8 | verticalPadding: small · medium · large / divider | default · hover · **선택됨**(옅은 파랑 채움) |
| Table | 10 | interactive / footer | 행 hover · 클릭 · **빈 상태**(FallbackView) |
| SectionHeader | 10 | size: small | — |
| SectionMessage | 13 | variant: info · positive · cautionary | 톤별 배경·테두리 고정 |
| FallbackView | 16 | padding: compact | 빈 상태 전용 |
| Divider | 4 | — | — |
| Card (+Thumbnail·Content·Title·Caption) | 1세트 | Thumbnail ratio 4:3 | hover |

## 4. 탐색 · 피드백 · 진행

| 컴포넌트 | 개수 | 속성 | 상태 |
|---|---|---|---|
| Tab | 5 | size: large · medium | 선택된 탭 1개 · 탭 옆 건수 |
| Menu | 14 | — | closed · open · 항목 hover |
| Pagination | 2 | — | 현재 페이지 · 처음/끝에서 이전·다음 비활성 |
| Modal | 7 | size: small · medium · large / navigationVariant: emphasized / hideClose | open · closed |
| Alert | 5 | actions (normal · assistive · negative) | open · closed |
| ActionArea | 7 | variant: neutral · sub | 주 버튼 disabled 가능 |
| ProgressTracker | 2 | direction: horizontal | 완료 · 현재 · 예정 |
| ProgressStepIndicator | 1 | — | 현재 단계 |
| Icon | 55 (템플릿 22 · 로직 33) | — | 색은 토큰 사용 (label · status · accent) |

## 5. 컴포넌트가 아닌 요소 (의도적으로 유지)

| 요소 | 이유 |
|---|---|
| 사이드바 메뉴 · 프로필 메뉴 항목 · 선택 목록 줄 · 선택 카드 (17곳) | 줄 전체를 누르는 영역. 모두 같은 회색 hover(`fill-normal`) |
| 막대그래프 2곳 (예산 진척 · 카드 한도) | IRIS ProgressIndicator는 2px. 요청에 따라 10px 유지, 색은 토큰 |
| 카드 제목 49곳 | 카드 여백 유지를 위해 글자 스타일(17 / 24 / 600)로만 통일 → 피그마 텍스트 스타일로 등록 |

## 6. 글자 · 자간

- 글자 스타일 26종은 상태 시트의 Typography 표에 있습니다(콘솔에서 실제로 그려진 값만).
- 자간은 컴포넌트 안팎 구분 없이 하나: 11~13px −0.004em · 14px −0.008em · 15~16px −0.012em · 17px 이상은 스타일 값.
- 표 합계 행은 15 / 22 · 600 (700 쓰지 않음).
