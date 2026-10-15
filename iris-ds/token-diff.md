# IRIS 토큰 · WDS 원본과 다른 값

기준: `iris-ds/tokens/semantic.css` (light). 피그마 변수는 이 파일 값으로 만든다.
이유: WCAG AA(본문 4.5:1) 충족. 나머지 토큰은 WDS 원본과 동일.

| 토큰 | WDS 원본 | IRIS |
|---|---|---|
| --semantic-label-strong | #000000 | #171719 (순수 검정 쓰지 않음 · label-normal과 같은 값) |
| --semantic-label-alternative | rgba(55,56,60,0.61) | rgba(55,56,60,0.74) |
| --semantic-label-assistive | rgba(55,56,60,0.28) | rgba(55,56,60,0.74) |
| --semantic-primary-normal | #0066FF | #005EEB |
| --semantic-primary-strong | #005EEB | #0052CC |
| --semantic-primary-heavy | #0054D1 | #0047B3 |
| --semantic-accent-foreground-blue | #005EEB | #0049B8 |
| --semantic-status-negative | #FF4242 | #D92B2B |
| --semantic-accent-foreground-red | #E52222 | #C11717 |
| --semantic-accent-foreground-orange | #D17600 | #8A4B00 |
| --semantic-accent-foreground-green | #009632 | #006B24 |
| --semantic-status-positive | #00BF40 | #00A336 |
| --semantic-status-cautionary | #FF9200 | #B35F00 |

## 새로 추가한 토큰
| 토큰 | 값 | 용도 |
|---|---|---|
| --semantic-line-normal-strong | rgba(112,115,124,0.52) | 선택 안 된 토글 버튼 · 강조 구분선 |

## 토큰을 쓰지 않는 색 (의도)
| 값 | 쓰인 곳 | 이유 |
|---|---|---|
| #7DF5A5 | 토스트 체크 아이콘 | 검은 토스트 바 위 대비용 |
| #1B1C1E · #1B2A4A · #3B3530 | 부고장 다크 테마 미리보기 | 부고장 콘텐츠 색 (UI 토큰 아님) |

## 콘솔에서 바꾼 것
- `<helmet>` 스타일의 색도 토큰으로 교체: 링크 hover → `primary-strong`, 비활성 버튼 → `label-disable` · `interaction-disable`, 본문색 → `label-normal` · `label-neutral`, 흰 바탕 → `static-white`, 진한 파랑 → `primary-heavy`.
- `<helmet>`에 남긴 값 2개: 포커스 링 `rgba(0,102,255,0.43)`(WDS 규칙 primary@43%), 토스트 위 흰색 40% 구분선.
- 콘솔 `<helmet>`의 덮어쓰기 블록 삭제 → 값은 토큰 파일에서만 온다.
- 직접 넣은 색 189곳을 토큰으로 교체 (#FFFFFF 155곳 → `--semantic-static-white` 등).
