/* ObitLive — IRIS 부고장 (한지 Light / 먹 Dark). Hand-drawn from the Figma ThemeLight / ThemeDark frames. Props: theme, data. */
(function () {
  const h = React.createElement;
  const T = {
    light: { bg: '#F4EEE0', card: '#E8DCC7', cardLine: 'transparent', text: '#241A10', sub: '#7A6B52', gold: '#9A7536', leaf: '#9A7536', photo: '#EBE2CF', photoShadow: 'none', btn: '#FFFFFF', btnText: '#241A10', cta: '#241A10', ctaText: '#FFFFFF', line: 'rgba(36,26,16,0.10)', chip: '#241A10' },
    dark:  { bg: '#24201B', card: '#322D27', cardLine: 'rgba(255,255,255,0.10)', text: '#F6EEDC', sub: '#B6B0A2', gold: '#CBA86A', leaf: '#B6B0A2', photo: '#2B2722', photoShadow: '0 12px 32px rgba(0,0,0,0.45)', btn: '#322D27', btnText: '#F6EEDC', cta: '#CBA86A', ctaText: '#1B1712', line: 'rgba(255,255,255,0.10)', chip: '#F6EEDC' }
  };
  const serif = "'Noto Serif KR', 'Nanum Myeongjo', serif";
  const sans = "'Noto Sans KR', 'Pretendard Variable', sans-serif";
  const STEM = 'M 17.077 45.363 C 17.285 45.396 17.48 45.254 17.513 45.046 C 17.545 44.839 17.404 44.643 17.196 44.61 L 17.136 44.987 L 17.077 45.363 Z M 1.633 11.256 L 1.275 11.126 L 1.275 11.126 L 1.633 11.256 Z M 10.345 0.302 C 10.511 0.173 10.542 -0.066 10.413 -0.233 C 10.284 -0.4 10.045 -0.43 9.879 -0.302 L 10.112 0 L 10.345 0.302 Z M 17.136 44.987 L 17.196 44.61 C 9.856 43.45 4.924 38.3 2.386 31.837 C -0.155 25.367 -0.274 17.623 1.991 11.386 L 1.633 11.256 L 1.275 11.126 C -1.056 17.543 -0.93 25.478 1.676 32.116 C 4.286 38.761 9.403 44.15 17.077 45.363 L 17.136 44.987 Z M 1.633 11.256 L 1.991 11.386 C 3.598 6.962 6.618 3.181 10.345 0.302 L 10.112 0 L 9.879 -0.302 C 6.057 2.651 2.939 6.545 1.275 11.126 L 1.633 11.256 Z';
  const LEAF = 'M 2.577 14.091 C 2.577 14.091 6.188 8.272 0.928 0 C 0.731 0.443 -1.855 7.69 2.577 14.091 Z';
  // leaf base sits on the stem; tip points outward-up, alternating sides
  const SPOTS = [[8.6, 3.4, 35, 1], [5.6, 6.2, -55, 0], [3.4, 10.6, 25, 1], [2.0, 15.2, -70, 0], [1.2, 20.6, 15, 1], [1.4, 26.0, -85, 0], [2.4, 31.2, 5, 1], [4.6, 36.0, -100, 0], [8.0, 40.0, -5, 1], [12.0, 43.2, -115, 0]];
  const leaf = (c, flip) => h('svg', { width: 28, height: 52, viewBox: '-8 -6 34 58', style: { transform: flip ? 'scaleX(-1)' : 'none', opacity: 0.5, overflow: 'visible' } },
    h('path', { d: STEM, fill: c }),
    SPOTS.map(([x, y, ang], i) => h('path', { key: i, d: LEAF, fill: c, transform: 'translate(' + x + ' ' + y + ') rotate(' + ang + ') translate(-2.6 -14.1) scale(0.8)' })));
  function ObitLive(props) {
    const c = T[props.theme === 'dark' ? 'dark' : 'light'];
    const d = props.data || {};
    const name = d.title || ('故' + (d.name || '○○○') + '님');
    const lead = d.lead != null ? d.lead : ('故 ' + (d.name || '○○○') + '님께서');
    const card = (style, ...kids) => h('div', { style: Object.assign({ background: c.card, borderRadius: 12, boxShadow: c.cardLine !== 'transparent' ? 'inset 0 0 0 1px ' + c.cardLine : 'none', padding: '16px 20px' }, style) }, ...kids);
    const secTitle = (t) => h('p', { style: { margin: '0 0 12px', fontFamily: serif, fontSize: 18, fontWeight: 700, color: c.text } }, t);
    const row = (k, v) => h('div', { style: { display: 'flex', gap: 16, padding: '10px 0', borderTop: '1px solid ' + c.line, fontSize: 14, lineHeight: '20px' } },
      h('span', { style: { width: 64, flexShrink: 0, color: c.sub } }, k), h('span', { style: { flex: 1, color: c.text, fontWeight: 500 } }, v));
    const btn = (label) => h('div', { style: { flex: 1, height: 44, borderRadius: 10, background: c.btn, color: c.btnText, boxShadow: 'inset 0 0 0 1px ' + c.line, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600 } }, label);
    return h('div', { style: { width: 360, background: c.bg, color: c.text, fontFamily: sans, padding: '20px 20px 0', boxSizing: 'border-box' } },
      card({ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 14px', borderRadius: 10 },
        h('span', { style: { width: 16, height: 16, borderRadius: 9999, background: c.text, color: c.bg, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' } }, 'i'),
        h('span', { style: { flex: 1, fontSize: 13, fontWeight: 700 } }, d.roomNote || '빈소 정보를 입력하면 입실 안내가 나옵니다'),
        h('span', { style: { fontSize: 13, fontWeight: 600, color: c.gold } }, '안내')),
      h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, padding: '20px 0 16px' } }, h('span', { style: { fontFamily: serif, fontSize: 38, fontWeight: 700, letterSpacing: '0.2em' } }, '訃告')),
      h('div', { style: { textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 } },
        h('p', { style: { margin: 0, fontFamily: serif, fontSize: 28, fontWeight: 700, lineHeight: '36px' } }, name),
        d.sub ? h('p', { style: { margin: 0, fontSize: 15, color: c.sub } }, d.sub) : null,
        h('p', { style: { margin: 0, fontSize: 15, lineHeight: '24px', color: c.sub } }, lead + ' ', d.date ? h('b', { style: { color: c.text } }, d.date + ' ') : null, '별세하셨기에', h('br'), '삼가 알려드립니다.')),
      h('div', { style: { display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 } },
        card({ textAlign: 'center', padding: '18px 20px' },
          h('p', { style: { margin: 0, fontSize: 14, fontWeight: 600, color: c.gold } }, d.place || '장례식장 미정'),
          d.room ? h('p', { style: { margin: '4px 0 0', fontFamily: serif, fontSize: 22, fontWeight: 600 } }, d.room) : null)),
      h('div', { style: { marginBottom: 28 } }, secTitle('상 주'), h('div', null, row(d.rel || '상주', d.chief || '—'))),
      h('div', { style: { display: 'flex', gap: 8, marginBottom: 12 } }, btn('카카오톡 공유'), btn('문자 공유')),
      card({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 },
        h('div', null, h('p', { style: { margin: 0, fontSize: 15, fontWeight: 700 } }, '부의금 보내기'), h('p', { style: { margin: '2px 0 0', fontSize: 13, color: c.sub } }, '간편하게 마음 전하기')),
        h('span', { style: { fontSize: 18, color: c.sub } }, '›')),
      h('div', { style: { marginBottom: 28 } }, secTitle('장례 일정'), row('발인', d.bury || '미정'), d.ipgwan ? row('입관', d.ipgwan) : null, row('장지', d.jangji || '미정')),
      h('div', { style: { marginBottom: 28 } }, secTitle('빈소 위치'),
        h('div', { style: { height: 140, borderRadius: 12, background: c.photo, boxShadow: 'inset 0 0 0 1px ' + c.line, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: c.sub, marginBottom: 10 } }, '장례식장 위치 지도'),
        d.addr ? h('p', { style: { margin: '0 0 10px', fontSize: 14, lineHeight: '20px' } }, d.addr) : null,
        h('div', { style: { display: 'flex', gap: 8 } }, btn('주소복사'), btn('전화하기'), btn('오시는 길'))),
      h('div', { style: { position: 'sticky', bottom: 0, margin: '0 -20px', padding: '12px 20px 16px', background: c.bg, boxShadow: '0 -1px 0 ' + c.line, display: 'flex', gap: 8 } },
        h('div', { style: { flex: 1, height: 48, borderRadius: 10, background: c.btn, color: c.btnText, boxShadow: 'inset 0 0 0 1px ' + c.line, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700 } }, '근조화환 보내기'),
        h('div', { style: { flex: 1, height: 48, borderRadius: 10, background: c.cta, color: c.ctaText, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700 } }, '부의금 보내기')));
  }
  window.ObitLive = ObitLive;
})();
