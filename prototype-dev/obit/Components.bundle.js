if (!window.__obitBundle) { window.__obitBundle = true;
// Components bundle — 5 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 2805:1588 Ratio/Vertical (4 variants)
const __venc_RatioVertical = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_RatioVertical = p => "ratio=" + __venc_RatioVertical(p.ratio);
function RatioVertical(_p = {}) {
  const props = {
    ..._p,
    ratio: _p.ratio ?? "1:1"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 100,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.943,-0.333,0.333,0.943,0,14.645)",
      transformOrigin: "0 0",
      height: 100,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1,
      height: 100,
      background: "rgba(112,115,124,0.12)", borderRadius: 4, overflow: "hidden"
    }
  }, null)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 100,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.999,-0.044,0.044,0.999,0,1.588)",
      transformOrigin: "0 0",
      height: 100,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1,
      height: 100,
      background: "rgba(112,115,124,0.12)", borderRadius: 4, overflow: "hidden"
    }
  }, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 100,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1,
      height: 100,
      background: "rgba(112,115,124,0.12)", borderRadius: 4, overflow: "hidden"
    }
  }, null));
  const __impls = {
    // figma: Ratio=1:1
    "ratio=1:1": __body0,
    // figma: Ratio=3:4
    "ratio=3:4": __body1,
    // figma: Ratio=2:3
    "ratio=2:3": __body2,
    // figma: Ratio=1:2
    "ratio=1:2": __body2
  };
  return (__impls[__vkey_RatioVertical(props)] ?? __body0)();
}

// figma node: 3641:76 Icon (148 variants)
const __venc_Icon7 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Icon7 = p => "name=" + __venc_Icon7(p.name) + '|' + "theme=" + __venc_Icon7(p.theme);
function Icon7(_p = {}) {
  const props = {
    ..._p,
    name: _p.name ?? "Airplane",
    theme: _p.theme ?? "light"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19,
    height: 20,
    viewBox: "0 0 19 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2,
      width: 19,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19 14 L 19 12 L 11 7 L 11 1.5 C 11 1.102 10.842 0.721 10.561 0.439 C 10.279 0.158 9.898 0 9.5 0 C 9.102 0 8.721 0.158 8.439 0.439 C 8.158 0.721 8 1.102 8 1.5 L 8 7 L 0 12 L 0 14 L 8 11.5 L 8 17 L 6 18.5 L 6 20 L 9.5 19 L 13 20 L 13 18.5 L 11 17 L 11 11.5 L 19 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 14,
    viewBox: "0 0 7 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.5,
      top: 5,
      width: 7,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.293 14.707 C 6.683 15.098 7.317 15.098 7.707 14.707 C 8.098 14.317 8.098 13.683 7.707 13.293 L 7 14 L 6.293 14.707 Z M 0 7 L -0.707 6.293 C -1.098 6.683 -1.098 7.317 -0.707 7.707 L 0 7 Z M 7.707 0.707 C 8.098 0.317 8.098 -0.317 7.707 -0.707 C 7.317 -1.098 6.683 -1.098 6.293 -0.707 L 7 0 L 7.707 0.707 Z M 7 14 L 7.707 13.293 L 0.707 6.293 L 0 7 L -0.707 7.707 L 6.293 14.707 L 7 14 Z M 0 7 L 0.707 7.707 L 7.707 0.707 L 7 0 L 6.293 -0.707 L -0.707 6.293 L 0 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 12,
    viewBox: "0 0 6 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 6,
      width: 6,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.399 12.601 C 5.731 12.933 6.269 12.933 6.601 12.601 C 6.933 12.269 6.933 11.731 6.601 11.399 L 6 12 L 5.399 12.601 Z M 0 6 L -0.601 5.399 C -0.933 5.731 -0.933 6.269 -0.601 6.601 L 0 6 Z M 6.601 0.601 C 6.933 0.269 6.933 -0.269 6.601 -0.601 C 6.269 -0.933 5.731 -0.933 5.399 -0.601 L 6 0 L 6.601 0.601 Z M 6 12 L 6.601 11.399 L 0.601 5.399 L 0 6 L -0.601 6.601 L 5.399 12.601 L 6 12 Z M 0 6 L 0.601 6.601 L 6.601 0.601 L 6 0 L 5.399 -0.601 L -0.601 5.399 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.692,
    height: 12.604,
    viewBox: "0 0 15.692 12.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.154,
      top: 5.698,
      width: 15.692,
      height: 12.604
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.091 4.022 C -0.237 4.227 -0.337 4.659 -0.132 4.986 C 0.073 5.314 0.505 5.414 0.833 5.209 L 0.462 4.615 L 0.091 4.022 Z M 7.846 0 L 8.217 -0.594 C 7.99 -0.735 7.702 -0.735 7.475 -0.594 L 7.846 0 Z M 14.86 5.209 C 15.188 5.414 15.619 5.314 15.824 4.986 C 16.029 4.659 15.93 4.227 15.602 4.022 L 15.231 4.615 L 14.86 5.209 Z M 2.085 4.615 C 2.085 4.229 1.771 3.915 1.385 3.915 C 0.998 3.915 0.685 4.229 0.685 4.615 L 1.385 4.615 L 2.085 4.615 Z M 0.685 12 C 0.685 12.387 0.998 12.7 1.385 12.7 C 1.771 12.7 2.085 12.387 2.085 12 L 1.385 12 L 0.685 12 Z M 15.008 4.615 C 15.008 4.229 14.694 3.915 14.308 3.915 C 13.921 3.915 13.608 4.229 13.608 4.615 L 14.308 4.615 L 15.008 4.615 Z M 13.608 12 C 13.608 12.387 13.921 12.7 14.308 12.7 C 14.694 12.7 15.008 12.387 15.008 12 L 14.308 12 L 13.608 12 Z M 5.777 4.615 C 5.777 4.229 5.464 3.915 5.077 3.915 C 4.69 3.915 4.377 4.229 4.377 4.615 L 5.077 4.615 L 5.777 4.615 Z M 4.377 12 C 4.377 12.387 4.69 12.7 5.077 12.7 C 5.464 12.7 5.777 12.387 5.777 12 L 5.077 12 L 4.377 12 Z M 11.315 4.615 C 11.315 4.229 11.002 3.915 10.615 3.915 C 10.229 3.915 9.915 4.229 9.915 4.615 L 10.615 4.615 L 11.315 4.615 Z M 9.915 12 C 9.915 12.387 10.229 12.7 10.615 12.7 C 11.002 12.7 11.315 12.387 11.315 12 L 10.615 12 L 9.915 12 Z M 0 11.904 C -0.387 11.904 -0.7 12.217 -0.7 12.604 C -0.7 12.99 -0.387 13.304 0 13.304 L 0 12.604 L 0 11.904 Z M 15.692 13.304 C 16.079 13.304 16.392 12.99 16.392 12.604 C 16.392 12.217 16.079 11.904 15.692 11.904 L 15.692 12.604 L 15.692 13.304 Z M 0.462 4.615 L 0.833 5.209 L 8.217 0.594 L 7.846 0 L 7.475 -0.594 L 0.091 4.022 L 0.462 4.615 Z M 7.846 0 L 7.475 0.594 L 14.86 5.209 L 15.231 4.615 L 15.602 4.022 L 8.217 -0.594 L 7.846 0 Z M 1.385 4.615 L 0.685 4.615 L 0.685 12 L 1.385 12 L 2.085 12 L 2.085 4.615 L 1.385 4.615 Z M 14.308 4.615 L 13.608 4.615 L 13.608 12 L 14.308 12 L 15.008 12 L 15.008 4.615 L 14.308 4.615 Z M 5.077 4.615 L 4.377 4.615 L 4.377 12 L 5.077 12 L 5.777 12 L 5.777 4.615 L 5.077 4.615 Z M 10.615 4.615 L 9.915 4.615 L 9.915 12 L 10.615 12 L 11.315 12 L 11.315 4.615 L 10.615 4.615 Z M 0 12.604 L 0 13.304 L 15.692 13.304 L 15.692 12.604 L 15.692 11.904 L 0 11.904 L 0 12.604 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 19,
    viewBox: "0 0 16 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2.5,
      width: 16,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14 C 0 14.88 0.39 15.67 1 16.22 L 1 18 C 1 18.265 1.105 18.52 1.293 18.707 C 1.48 18.895 1.735 19 2 19 L 3 19 C 3.265 19 3.52 18.895 3.707 18.707 C 3.895 18.52 4 18.265 4 18 L 4 17 L 12 17 L 12 18 C 12 18.265 12.105 18.52 12.293 18.707 C 12.48 18.895 12.735 19 13 19 L 14 19 C 14.265 19 14.52 18.895 14.707 18.707 C 14.895 18.52 15 18.265 15 18 L 15 16.22 C 15.61 15.67 16 14.88 16 14 L 16 4 C 16 0.5 12.42 0 8 0 C 3.58 0 0 0.5 0 4 L 0 14 Z M 3.5 15 C 3.102 15 2.721 14.842 2.439 14.561 C 2.158 14.279 2 13.898 2 13.5 C 2 13.102 2.158 12.721 2.439 12.439 C 2.721 12.158 3.102 12 3.5 12 C 3.898 12 4.279 12.158 4.561 12.439 C 4.842 12.721 5 13.102 5 13.5 C 5 13.898 4.842 14.279 4.561 14.561 C 4.279 14.842 3.898 15 3.5 15 Z M 12.5 15 C 12.102 15 11.721 14.842 11.439 14.561 C 11.158 14.279 11 13.898 11 13.5 C 11 13.102 11.158 12.721 11.439 12.439 C 11.721 12.158 12.102 12 12.5 12 C 12.898 12 13.279 12.158 13.561 12.439 C 13.842 12.721 14 13.102 14 13.5 C 14 13.898 13.842 14.279 13.561 14.561 C 13.279 14.842 12.898 15 12.5 15 Z M 14 8 L 2 8 L 2 4 L 14 4 L 14 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 16,
    viewBox: "0 0 18 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 4,
      width: 18,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.92 1.01 C 15.72 0.42 15.16 0 14.5 0 L 3.5 0 C 2.84 0 2.29 0.42 2.08 1.01 L 0 7 L 0 15 C 0 15.55 0.45 16 1 16 L 2 16 C 2.55 16 3 15.55 3 15 L 3 14 L 15 14 L 15 15 C 15 15.55 15.45 16 16 16 L 17 16 C 17.55 16 18 15.55 18 15 L 18 7 L 15.92 1.01 Z M 3.5 11 C 3.102 11 2.721 10.842 2.439 10.561 C 2.158 10.279 2 9.898 2 9.5 C 2 9.102 2.158 8.721 2.439 8.439 C 2.721 8.158 3.102 8 3.5 8 C 3.898 8 4.279 8.158 4.561 8.439 C 4.842 8.721 5 9.102 5 9.5 C 5 9.898 4.842 10.279 4.561 10.561 C 4.279 10.842 3.898 11 3.5 11 Z M 14.5 11 C 14.102 11 13.721 10.842 13.439 10.561 C 13.158 10.279 13 9.898 13 9.5 C 13 9.102 13.158 8.721 13.439 8.439 C 13.721 8.158 14.102 8 14.5 8 C 14.898 8 15.279 8.158 15.561 8.439 C 15.842 8.721 16 9.102 16 9.5 C 16 9.898 15.842 10.279 15.561 10.561 C 15.279 10.842 14.898 11 14.5 11 Z M 2 6 L 3.5 1.5 L 14.5 1.5 L 16 6 L 2 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 10.050,
    viewBox: "0 0 15 10.050",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 6.975,
      width: 15,
      height: 10.05
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.636 4.614 C 0.285 4.262 -0.285 4.262 -0.636 4.614 C -0.988 4.965 -0.988 5.535 -0.636 5.886 L 0 5.25 L 0.636 4.614 Z M 4.8 10.05 L 4.164 10.686 C 4.513 11.036 5.079 11.038 5.432 10.691 L 4.8 10.05 Z M 15.632 0.641 C 15.986 0.292 15.99 -0.278 15.641 -0.632 C 15.292 -0.986 14.722 -0.99 14.368 -0.641 L 15 0 L 15.632 0.641 Z M 0 5.25 L -0.636 5.886 L 4.164 10.686 L 4.8 10.05 L 5.436 9.414 L 0.636 4.614 L 0 5.25 Z M 4.8 10.05 L 5.432 10.691 L 15.632 0.641 L 15 0 L 14.368 -0.641 L 4.168 9.409 L 4.8 10.05 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 6,
    viewBox: "0 0 12 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 9,
      width: 12,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.566 -0.566 C 0.253 -0.878 -0.253 -0.878 -0.566 -0.566 C -0.878 -0.253 -0.878 0.253 -0.566 0.566 L 0 0 L 0.566 -0.566 Z M 6 6 L 5.434 6.566 C 5.747 6.878 6.253 6.878 6.566 6.566 L 6 6 Z M 12.566 0.566 C 12.878 0.253 12.878 -0.253 12.566 -0.566 C 12.253 -0.878 11.747 -0.878 11.434 -0.566 L 12 0 L 12.566 0.566 Z M 0 0 L -0.566 0.566 L 5.434 6.566 L 6 6 L 6.566 5.434 L 0.566 -0.566 L 0 0 Z M 6 6 L 6.566 6.566 L 12.566 0.566 L 12 0 L 11.434 -0.566 L 5.434 5.434 L 6 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-label)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 8,
    viewBox: "0 0 4 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 8,
      width: 4,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 4 4 L 4.53 4.53 C 4.823 4.237 4.823 3.763 4.53 3.47 L 4 4 Z M -0.53 7.47 C -0.823 7.763 -0.823 8.237 -0.53 8.53 C -0.237 8.823 0.237 8.823 0.53 8.53 L 0 8 L -0.53 7.47 Z M 0 0 L -0.53 0.53 L 3.47 4.53 L 4 4 L 4.53 3.47 L 0.53 -0.53 L 0 0 Z M 4 4 L 3.47 3.47 L -0.53 7.47 L 0 8 L 0.53 8.53 L 4.53 4.53 L 4 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-label)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.566 -0.566 C 0.253 -0.878 -0.253 -0.878 -0.566 -0.566 C -0.878 -0.253 -0.878 0.253 -0.566 0.566 L 0 0 L 0.566 -0.566 Z M 11.434 12.566 C 11.747 12.878 12.253 12.878 12.566 12.566 C 12.878 12.253 12.878 11.747 12.566 11.434 L 12 12 L 11.434 12.566 Z M 12.566 0.566 C 12.878 0.253 12.878 -0.253 12.566 -0.566 C 12.253 -0.878 11.747 -0.878 11.434 -0.566 L 12 0 L 12.566 0.566 Z M -0.566 11.434 C -0.878 11.747 -0.878 12.253 -0.566 12.566 C -0.253 12.878 0.253 12.878 0.566 12.566 L 0 12 L -0.566 11.434 Z M 0 0 L -0.566 0.566 L 11.434 12.566 L 12 12 L 12.566 11.434 L 0.566 -0.566 L 0 0 Z M 12 0 L 11.434 -0.566 L -0.566 11.434 L 0 12 L 0.566 12.566 L 12.566 0.566 L 12 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 5.169,
    viewBox: "0 0 12 5.169",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 5,
      width: 12,
      height: 5.169
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 2.585 L 11.25 2.585 C 11.25 2.689 11.204 2.851 10.993 3.065 C 10.779 3.283 10.433 3.514 9.946 3.723 C 8.974 4.142 7.58 4.419 6 4.419 L 6 5.169 L 6 5.919 C 7.734 5.919 9.339 5.618 10.539 5.101 C 11.138 4.843 11.67 4.517 12.064 4.116 C 12.46 3.712 12.75 3.194 12.75 2.585 L 12 2.585 Z M 6 5.169 L 6 4.419 C 4.42 4.419 3.026 4.142 2.054 3.723 C 1.567 3.514 1.221 3.283 1.007 3.065 C 0.796 2.851 0.75 2.689 0.75 2.585 L 0 2.585 L -0.75 2.585 C -0.75 3.194 -0.46 3.712 -0.064 4.116 C 0.33 4.517 0.862 4.843 1.461 5.101 C 2.661 5.618 4.266 5.919 6 5.919 L 6 5.169 Z M 0 2.585 L 0.75 2.585 C 0.75 2.48 0.796 2.319 1.007 2.104 C 1.221 1.886 1.567 1.656 2.054 1.446 C 3.026 1.027 4.42 0.75 6 0.75 L 6 0 L 6 -0.75 C 4.266 -0.75 2.661 -0.449 1.461 0.068 C 0.862 0.326 0.33 0.653 -0.064 1.053 C -0.46 1.457 -0.75 1.975 -0.75 2.585 L 0 2.585 Z M 6 0 L 6 0.75 C 7.58 0.75 8.974 1.027 9.946 1.446 C 10.433 1.656 10.779 1.886 10.993 2.104 C 11.204 2.319 11.25 2.48 11.25 2.585 L 12 2.585 L 12.75 2.585 C 12.75 1.975 12.46 1.457 12.064 1.053 C 11.67 0.653 11.138 0.326 10.539 0.068 C 9.339 -0.449 7.734 -0.75 6 -0.75 L 6 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 11.815,
    viewBox: "0 0 12 11.815",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 7.678,
      width: 12,
      height: 11.815
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -0.75 0 L -0.75 4.615 L 0 4.615 L 0.75 4.615 L 0.75 0 L 0 0 Z M 0 4.615 L -0.75 4.615 C -0.75 5.224 -0.462 5.743 -0.066 6.148 C 0.327 6.549 0.859 6.875 1.457 7.133 C 2.656 7.65 4.262 7.95 6 7.95 L 6 7.2 L 6 6.45 C 4.415 6.45 3.021 6.173 2.051 5.755 C 1.564 5.546 1.219 5.316 1.006 5.098 C 0.797 4.884 0.75 4.722 0.75 4.615 L 0 4.615 Z M 6 7.2 L 6 7.95 C 7.738 7.95 9.344 7.65 10.543 7.133 C 11.141 6.875 11.673 6.549 12.066 6.148 C 12.462 5.743 12.75 5.224 12.75 4.615 L 12 4.615 L 11.25 4.615 C 11.25 4.722 11.203 4.884 10.994 5.098 C 10.781 5.316 10.436 5.546 9.949 5.755 C 8.979 6.173 7.585 6.45 6 6.45 L 6 7.2 Z M 12 4.615 L 12.75 4.615 L 12.75 0 L 12 0 L 11.25 0 L 11.25 4.615 L 12 4.615 Z M 0 4.615 L -0.75 4.615 L -0.75 9.231 L 0 9.231 L 0.75 9.231 L 0.75 4.615 L 0 4.615 Z M 0 9.231 L -0.75 9.231 C -0.75 9.839 -0.462 10.358 -0.066 10.763 C 0.327 11.164 0.859 11.491 1.457 11.748 C 2.656 12.265 4.262 12.565 6 12.565 L 6 11.815 L 6 11.065 C 4.415 11.065 3.021 10.789 2.051 10.371 C 1.564 10.161 1.219 9.931 1.006 9.714 C 0.797 9.5 0.75 9.337 0.75 9.231 L 0 9.231 Z M 6 11.815 L 6 12.565 C 7.738 12.565 9.344 12.265 10.543 11.748 C 11.141 11.491 11.673 11.164 12.066 10.763 C 12.462 10.358 12.75 9.839 12.75 9.231 L 12 9.231 L 11.25 9.231 C 11.25 9.337 11.203 9.5 10.994 9.714 C 10.781 9.931 10.436 10.161 9.949 10.371 C 8.979 10.789 7.585 11.065 6 11.065 L 6 11.815 Z M 12 9.231 L 12.75 9.231 L 12.75 4.615 L 12 4.615 L 11.25 4.615 L 11.25 9.231 L 12 9.231 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.25 0 L 2.25 0.835 L 9.75 0.835 L 9.75 0 L 9.75 -0.835 L 2.25 -0.835 L 2.25 0 Z M 9.75 0 L 9.75 0.835 C 10.531 0.835 11.165 1.469 11.165 2.25 L 12 2.25 L 12.835 2.25 C 12.835 0.546 11.454 -0.835 9.75 -0.835 L 9.75 0 Z M 12 2.25 L 11.165 2.25 L 11.165 9.75 L 12 9.75 L 12.835 9.75 L 12.835 2.25 L 12 2.25 Z M 12 9.75 L 11.165 9.75 C 11.165 10.531 10.531 11.165 9.75 11.165 L 9.75 12 L 9.75 12.835 C 11.454 12.835 12.835 11.454 12.835 9.75 L 12 9.75 Z M 9.75 12 L 9.75 11.165 L 2.25 11.165 L 2.25 12 L 2.25 12.835 L 9.75 12.835 L 9.75 12 Z M 2.25 12 L 2.25 11.165 C 1.469 11.165 0.835 10.531 0.835 9.75 L 0 9.75 L -0.835 9.75 C -0.835 11.454 0.546 12.835 2.25 12.835 L 2.25 12 Z M 0 9.75 L 0.835 9.75 L 0.835 2.25 L 0 2.25 L -0.835 2.25 L -0.835 9.75 L 0 9.75 Z M 0 2.25 L 0.835 2.25 C 0.835 1.469 1.469 0.835 2.25 0.835 L 2.25 0 L 2.25 -0.835 C 0.546 -0.835 -0.835 0.546 -0.835 2.25 L 0 2.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.835 12 C -0.835 12.461 -0.461 12.835 0 12.835 C 0.461 12.835 0.835 12.461 0.835 12 L 0 12 L -0.835 12 Z M 0.75 0 L 0.75 0.835 L 0.75 0 Z M 12 0.835 C 12.461 0.835 12.835 0.461 12.835 0 C 12.835 -0.461 12.461 -0.835 12 -0.835 L 12 0 L 12 0.835 Z M 0 12 L 0.835 12 L 0.835 0.75 L 0 0.75 L -0.835 0.75 L -0.835 12 L 0 12 Z M 0 0.75 L 0.835 0.75 C 0.835 0.773 0.826 0.794 0.81 0.81 L 0.22 0.22 L -0.371 -0.371 C -0.668 -0.074 -0.835 0.33 -0.835 0.75 L 0 0.75 Z M 0.22 0.22 L 0.81 0.81 C 0.794 0.826 0.773 0.835 0.75 0.835 L 0.75 0 L 0.75 -0.835 C 0.33 -0.835 -0.074 -0.668 -0.371 -0.371 L 0.22 0.22 Z M 0.75 0 L 0.75 0.835 L 12 0.835 L 12 0 L 12 -0.835 L 0.75 -0.835 L 0.75 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.538,
    height: 12.923,
    viewBox: "0 0 17.538 12.923",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.231,
      top: 5.538,
      width: 17.538,
      height: 12.923
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.308 0 L 2.308 0.75 L 15.231 0.75 L 15.231 0 L 15.231 -0.75 L 2.308 -0.75 L 2.308 0 Z M 15.231 0 L 15.231 0.75 C 16.091 0.75 16.788 1.447 16.788 2.308 L 17.538 2.308 L 18.288 2.308 C 18.288 0.619 16.919 -0.75 15.231 -0.75 L 15.231 0 Z M 17.538 2.308 L 16.788 2.308 L 16.788 10.615 L 17.538 10.615 L 18.288 10.615 L 18.288 2.308 L 17.538 2.308 Z M 17.538 10.615 L 16.788 10.615 C 16.788 11.476 16.091 12.173 15.231 12.173 L 15.231 12.923 L 15.231 13.673 C 16.919 13.673 18.288 12.304 18.288 10.615 L 17.538 10.615 Z M 15.231 12.923 L 15.231 12.173 L 2.308 12.173 L 2.308 12.923 L 2.308 13.673 L 15.231 13.673 L 15.231 12.923 Z M 2.308 12.923 L 2.308 12.173 C 1.447 12.173 0.75 11.476 0.75 10.615 L 0 10.615 L -0.75 10.615 C -0.75 12.304 0.619 13.673 2.308 13.673 L 2.308 12.923 Z M 0 10.615 L 0.75 10.615 L 0.75 2.308 L 0 2.308 L -0.75 2.308 L -0.75 10.615 L 0 10.615 Z M 0 2.308 L 0.75 2.308 C 0.75 1.447 1.447 0.75 2.308 0.75 L 2.308 0 L 2.308 -0.75 C 0.619 -0.75 -0.75 0.619 -0.75 2.308 L 0 2.308 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.538,
    height: 1.500,
    viewBox: "0 -0.750 17.538 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.231,
      top: 10,
      width: 17.538,
      height: 1.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.75 L 17.538 0.75 L 17.538 0 L 17.538 -0.75 L 0 -0.75 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 12,
    viewBox: "0 0 16 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 6,
      width: 16,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.778 0 L 1.778 0.8 L 14.222 0.8 L 14.222 0 L 14.222 -0.8 L 1.778 -0.8 L 1.778 0 Z M 14.222 0 L 14.222 0.8 C 14.705 0.8 15.2 1.242 15.2 1.92 L 16 1.92 L 16.8 1.92 C 16.8 0.477 15.703 -0.8 14.222 -0.8 L 14.222 0 Z M 16 1.92 L 15.2 1.92 L 15.2 10.08 L 16 10.08 L 16.8 10.08 L 16.8 1.92 L 16 1.92 Z M 16 10.08 L 15.2 10.08 C 15.2 10.758 14.705 11.2 14.222 11.2 L 14.222 12 L 14.222 12.8 C 15.703 12.8 16.8 11.523 16.8 10.08 L 16 10.08 Z M 14.222 12 L 14.222 11.2 L 1.778 11.2 L 1.778 12 L 1.778 12.8 L 14.222 12.8 L 14.222 12 Z M 1.778 12 L 1.778 11.2 C 1.295 11.2 0.8 10.758 0.8 10.08 L 0 10.08 L -0.8 10.08 C -0.8 11.523 0.297 12.8 1.778 12.8 L 1.778 12 Z M 0 10.08 L 0.8 10.08 L 0.8 1.92 L 0 1.92 L -0.8 1.92 L -0.8 10.08 L 0 10.08 Z M 0 1.92 L 0.8 1.92 C 0.8 1.242 1.295 0.8 1.778 0.8 L 1.778 0 L 1.778 -0.8 C 0.297 -0.8 -0.8 0.477 -0.8 1.92 L 0 1.92 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 4,
    viewBox: "0 0 16 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 10,
      width: 16,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.358 -0.716 C -0.037 -0.913 -0.518 -0.753 -0.716 -0.358 C -0.913 0.037 -0.753 0.518 -0.358 0.716 L 0 0 L 0.358 -0.716 Z M 8 4 L 7.642 4.716 C 7.867 4.828 8.133 4.828 8.358 4.716 L 8 4 Z M 16.358 0.716 C 16.753 0.518 16.913 0.037 16.716 -0.358 C 16.518 -0.753 16.037 -0.913 15.642 -0.716 L 16 0 L 16.358 0.716 Z M 0 0 L -0.358 0.716 L 7.642 4.716 L 8 4 L 8.358 3.284 L 0.358 -0.716 L 0 0 Z M 8 4 L 8.358 4.716 L 16.358 0.716 L 16 0 L 15.642 -0.716 L 7.642 3.284 L 8 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 13,
    viewBox: "0 0 12 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 5.5,
      width: 12,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 5.25 C 7.586 5.25 7.25 5.586 7.25 6 C 7.25 6.414 7.586 6.75 8 6.75 L 8 6 L 8 5.25 Z M 4 6.75 C 4.414 6.75 4.75 6.414 4.75 6 C 4.75 5.586 4.414 5.25 4 5.25 L 4 6 L 4 6.75 Z M 5.25 13 C 5.25 13.414 5.586 13.75 6 13.75 C 6.414 13.75 6.75 13.414 6.75 13 L 6 13 L 5.25 13 Z M 3 12.25 C 2.586 12.25 2.25 12.586 2.25 13 C 2.25 13.414 2.586 13.75 3 13.75 L 3 13 L 3 12.25 Z M 9 13.75 C 9.414 13.75 9.75 13.414 9.75 13 C 9.75 12.586 9.414 12.25 9 12.25 L 9 13 L 9 13.75 Z M 6 4 L 6.75 4 C 6.75 3.041 7.034 2.203 7.465 1.622 C 7.893 1.044 8.437 0.75 9 0.75 L 9 0 L 9 -0.75 C 7.863 -0.75 6.907 -0.144 6.26 0.728 C 5.616 1.597 5.25 2.759 5.25 4 L 6 4 Z M 9 0 L 9 0.75 C 10.286 0.75 11.25 1.714 11.25 3 L 12 3 L 12.75 3 C 12.75 0.886 11.114 -0.75 9 -0.75 L 9 0 Z M 12 3 L 11.25 3 C 11.25 3.563 10.956 4.107 10.378 4.535 C 9.797 4.966 8.959 5.25 8 5.25 L 8 6 L 8 6.75 C 9.241 6.75 10.403 6.384 11.272 5.74 C 12.144 5.093 12.75 4.137 12.75 3 L 12 3 Z M 6 4 L 6.75 4 C 6.75 2.759 6.384 1.597 5.74 0.728 C 5.093 -0.144 4.137 -0.75 3 -0.75 L 3 0 L 3 0.75 C 3.563 0.75 4.107 1.044 4.535 1.622 C 4.966 2.203 5.25 3.041 5.25 4 L 6 4 Z M 3 0 L 3 -0.75 C 0.886 -0.75 -0.75 0.886 -0.75 3 L 0 3 L 0.75 3 C 0.75 1.714 1.714 0.75 3 0.75 L 3 0 Z M 0 3 L -0.75 3 C -0.75 4.137 -0.144 5.093 0.728 5.74 C 1.597 6.384 2.759 6.75 4 6.75 L 4 6 L 4 5.25 C 3.041 5.25 2.203 4.966 1.622 4.535 C 1.044 4.107 0.75 3.563 0.75 3 L 0 3 Z M 6 4 L 5.25 4 L 5.25 13 L 6 13 L 6.75 13 L 6.75 4 L 6 4 Z M 3 13 L 3 13.75 L 9 13.75 L 9 13 L 9 12.25 L 3 12.25 L 3 13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 7.313,
    viewBox: "0 0 18 7.313",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3.047,
      width: 18,
      height: 7.313
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.568 6.614 C -0.953 6.927 -1.012 7.494 -0.699 7.88 C -0.385 8.266 0.182 8.324 0.568 8.011 L 0 7.313 L -0.568 6.614 Z M 9 0 L 9.568 -0.699 C 9.237 -0.967 8.763 -0.967 8.432 -0.699 L 9 0 Z M 17.432 8.011 C 17.818 8.324 18.385 8.266 18.699 7.88 C 19.012 7.494 18.953 6.927 18.568 6.614 L 18 7.313 L 17.432 8.011 Z M 0 7.313 L 0.568 8.011 L 9.568 0.699 L 9 0 L 8.432 -0.699 L -0.568 6.614 L 0 7.313 Z M 9 0 L 8.432 0.699 L 17.432 8.011 L 18 7.313 L 18.568 6.614 L 9.568 -0.699 L 9 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.500,
    height: 11.813,
    viewBox: "0 0 13.500 11.813",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.25,
      top: 8.391,
      width: 13.5,
      height: 11.813
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 0 C 0.9 -0.497 0.497 -0.9 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 L 0.9 0 Z M 0 11.813 L -0.9 11.813 C -0.9 12.31 -0.497 12.712 0 12.712 L 0 11.813 Z M 13.5 11.813 L 13.5 12.712 C 13.997 12.712 14.4 12.31 14.4 11.813 L 13.5 11.813 Z M 14.4 0 C 14.4 -0.497 13.997 -0.9 13.5 -0.9 C 13.003 -0.9 12.6 -0.497 12.6 0 L 13.5 0 L 14.4 0 Z M 0 0 L -0.9 0 L -0.9 11.813 L 0 11.813 L 0.9 11.813 L 0.9 0 L 0 0 Z M 0 11.813 L 0 12.712 L 13.5 12.712 L 13.5 11.813 L 13.5 10.913 L 0 10.913 L 0 11.813 Z M 13.5 11.813 L 14.4 11.813 L 14.4 0 L 13.5 0 L 12.6 0 L 12.6 11.813 L 13.5 11.813 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.500,
    height: 5.625,
    viewBox: "0 0 4.500 5.625",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.75,
      top: 14.297,
      width: 4.5,
      height: 5.625
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.9 5.625 C -0.9 6.122 -0.497 6.525 0 6.525 C 0.497 6.525 0.9 6.122 0.9 5.625 L 0 5.625 L -0.9 5.625 Z M 0 0 L 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 Z M 4.5 0 L 5.4 0 C 5.4 -0.497 4.997 -0.9 4.5 -0.9 L 4.5 0 Z M 3.6 5.625 C 3.6 6.122 4.003 6.525 4.5 6.525 C 4.997 6.525 5.4 6.122 5.4 5.625 L 4.5 5.625 L 3.6 5.625 Z M 0 5.625 L 0.9 5.625 L 0.9 0 L 0 0 L -0.9 0 L -0.9 5.625 L 0 5.625 Z M 0 0 L 0 0.9 L 4.5 0.9 L 4.5 0 L 4.5 -0.9 L 0 -0.9 L 0 0 Z M 4.5 0 L 3.6 0 L 3.6 5.625 L 4.5 5.625 L 5.4 5.625 L 5.4 0 L 4.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      color: "rgb(254,229,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 24 C 18.627 24 24 18.627 24 12 C 24 5.373 18.627 0 12 0 C 5.373 0 0 5.373 0 12 C 0 18.627 5.373 24 12 24 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 11.757,
    viewBox: "0 0 12 11.757",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 6.122,
      width: 12,
      height: 11.757,
      color: "rgb(60,30,30)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 0 C 2.688 0 0 2.148 0 4.8 C 0 6.48 1.116 7.968 2.808 8.808 L 2.088 11.448 C 2.028 11.664 2.28 11.844 2.484 11.712 L 5.436 9.732 C 5.616 9.744 5.808 9.756 6 9.756 C 9.312 9.756 12 7.608 12 4.956 C 12 2.304 9.312 0.156 6 0.156 L 6 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.999,
    height: 16.252,
    viewBox: "0 0 17.999 16.252",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.001,
      top: 3.874,
      width: 17.999,
      height: 16.252
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 0.012 C 4.038 0.012 0 3.173 0 7.073 C 0 9.588 1.685 11.803 4.223 13.05 C 4.038 13.707 3.554 15.473 3.461 15.842 C 3.346 16.303 3.623 16.303 3.808 16.188 C 3.958 16.073 6.161 14.584 7.119 13.938 C 7.719 14.03 8.342 14.076 9 14.076 C 13.961 14.076 17.999 10.915 17.999 7.038 C 17.999 3.15 13.961 0 9 0 L 9 0.012 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--neutral-black)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.231,
    height: 18.268,
    viewBox: "0 0 18.231 18.268",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.884,
      top: 2.866,
      width: 18.231,
      height: 18.268
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.231 13.677 L 18.231 16.427 C 18.232 16.682 18.18 16.935 18.077 17.169 C 17.975 17.403 17.825 17.613 17.637 17.785 C 17.449 17.958 17.227 18.089 16.985 18.171 C 16.743 18.253 16.487 18.283 16.232 18.26 C 13.412 17.951 10.703 16.988 8.322 15.446 C 6.107 14.039 4.229 12.161 2.822 9.946 C 1.275 7.553 0.311 4.831 0.007 1.998 C -0.015 1.745 0.015 1.489 0.096 1.248 C 0.177 1.007 0.308 0.785 0.479 0.597 C 0.651 0.409 0.86 0.259 1.093 0.156 C 1.325 0.054 1.577 0 1.832 0 L 4.582 0 C 5.026 -0.004 5.458 0.153 5.795 0.443 C 6.132 0.733 6.353 1.136 6.415 1.577 C 6.531 2.457 6.747 3.321 7.057 4.153 C 7.18 4.481 7.207 4.837 7.134 5.18 C 7.06 5.523 6.891 5.838 6.644 6.087 L 5.48 7.251 C 6.785 9.546 8.685 11.446 10.98 12.751 L 12.144 11.587 C 12.393 11.34 12.708 11.17 13.051 11.097 C 13.394 11.024 13.75 11.051 14.078 11.174 C 14.91 11.484 15.774 11.7 16.654 11.816 C 17.099 11.879 17.506 12.103 17.797 12.446 C 18.087 12.789 18.242 13.227 18.231 13.677 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.231,
    height: 18.268,
    viewBox: "0 0 18.231 18.268",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.884,
      top: 2.866,
      width: 18.231,
      height: 18.268
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.231 13.677 L 17.396 13.656 C 17.396 13.663 17.396 13.67 17.396 13.677 L 18.231 13.677 Z M 18.231 16.427 L 17.396 16.427 L 17.396 16.43 L 18.231 16.427 Z M 16.232 18.26 L 16.142 19.09 C 16.147 19.091 16.152 19.091 16.157 19.092 L 16.232 18.26 Z M 8.322 15.446 L 8.775 14.745 L 8.769 14.741 L 8.322 15.446 Z M 2.822 9.946 L 3.526 9.498 L 3.523 9.493 L 2.822 9.946 Z M 0.007 1.998 L -0.824 2.074 L -0.823 2.087 L 0.007 1.998 Z M 1.832 0 L 1.832 -0.835 L 1.831 -0.835 L 1.832 0 Z M 4.582 0 L 4.582 0.835 L 4.59 0.835 L 4.582 0 Z M 6.415 1.577 L 7.243 1.467 L 7.242 1.46 L 6.415 1.577 Z M 7.057 4.153 L 6.274 4.444 L 6.275 4.446 L 7.057 4.153 Z M 6.644 6.087 L 7.235 6.677 L 7.238 6.674 L 6.644 6.087 Z M 5.48 7.251 L 4.89 6.66 C 4.624 6.926 4.568 7.337 4.754 7.664 L 5.48 7.251 Z M 10.98 12.751 L 10.567 13.477 C 10.894 13.663 11.305 13.607 11.57 13.341 L 10.98 12.751 Z M 12.144 11.587 L 11.557 10.993 L 11.554 10.996 L 12.144 11.587 Z M 14.078 11.174 L 13.784 11.956 L 13.787 11.957 L 14.078 11.174 Z M 16.654 11.816 L 16.771 10.989 L 16.764 10.988 L 16.654 11.816 Z M 18.231 13.677 L 17.396 13.677 L 17.396 16.427 L 18.231 16.427 L 19.066 16.427 L 19.066 13.677 L 18.231 13.677 Z M 18.231 16.427 L 17.396 16.43 C 17.396 16.569 17.368 16.707 17.312 16.834 L 18.077 17.169 L 18.842 17.503 C 18.991 17.163 19.067 16.795 19.066 16.423 L 18.231 16.427 Z M 18.077 17.169 L 17.312 16.834 C 17.256 16.962 17.175 17.076 17.072 17.17 L 17.637 17.785 L 18.201 18.4 C 18.475 18.149 18.693 17.844 18.842 17.503 L 18.077 17.169 Z M 17.637 17.785 L 17.072 17.17 C 16.97 17.264 16.849 17.335 16.717 17.38 L 16.985 18.171 L 17.252 18.962 C 17.604 18.843 17.928 18.652 18.201 18.4 L 17.637 17.785 Z M 16.985 18.171 L 16.717 17.38 C 16.586 17.424 16.446 17.441 16.308 17.428 L 16.232 18.26 L 16.157 19.092 C 16.527 19.125 16.9 19.081 17.252 18.962 L 16.985 18.171 Z M 16.232 18.26 L 16.323 17.43 C 13.632 17.135 11.048 16.216 8.775 14.745 L 8.322 15.446 L 7.868 16.147 C 10.359 17.759 13.192 18.767 16.142 19.09 L 16.232 18.26 Z M 8.322 15.446 L 8.769 14.741 C 6.658 13.4 4.868 11.609 3.526 9.498 L 2.822 9.946 L 2.117 10.394 C 3.59 12.712 5.555 14.678 7.874 16.151 L 8.322 15.446 Z M 2.822 9.946 L 3.523 9.493 C 2.047 7.21 1.127 4.612 0.838 1.91 L 0.007 1.998 L -0.823 2.087 C -0.506 5.05 0.502 7.897 2.12 10.399 L 2.822 9.946 Z M 0.007 1.998 L 0.839 1.923 C 0.827 1.785 0.843 1.646 0.887 1.515 L 0.096 1.248 L -0.695 0.982 C -0.814 1.333 -0.858 1.705 -0.824 2.074 L 0.007 1.998 Z M 0.096 1.248 L 0.887 1.515 C 0.931 1.383 1.003 1.263 1.096 1.16 L 0.479 0.597 L -0.137 0.034 C -0.387 0.308 -0.577 0.631 -0.695 0.982 L 0.096 1.248 Z M 0.479 0.597 L 1.096 1.16 C 1.189 1.058 1.303 0.976 1.43 0.92 L 1.093 0.156 L 0.755 -0.607 C 0.416 -0.458 0.112 -0.239 -0.137 0.034 L 0.479 0.597 Z M 1.093 0.156 L 1.43 0.92 C 1.557 0.864 1.694 0.835 1.832 0.835 L 1.832 0 L 1.831 -0.835 C 1.46 -0.835 1.094 -0.757 0.755 -0.607 L 1.093 0.156 Z M 1.832 0 L 1.832 0.835 L 4.582 0.835 L 4.582 0 L 4.582 -0.835 L 1.832 -0.835 L 1.832 0 Z M 4.582 0 L 4.59 0.835 C 4.832 0.833 5.067 0.918 5.251 1.076 L 5.795 0.443 L 6.34 -0.19 C 5.849 -0.612 5.221 -0.841 4.573 -0.835 L 4.582 0 Z M 5.795 0.443 L 5.251 1.076 C 5.434 1.234 5.554 1.454 5.588 1.694 L 6.415 1.577 L 7.242 1.46 C 7.151 0.819 6.83 0.232 6.34 -0.19 L 5.795 0.443 Z M 6.415 1.577 L 5.587 1.686 C 5.712 2.629 5.942 3.554 6.274 4.444 L 7.057 4.153 L 7.839 3.861 C 7.551 3.088 7.351 2.285 7.243 1.467 L 6.415 1.577 Z M 7.057 4.153 L 6.275 4.446 C 6.342 4.625 6.357 4.819 6.317 5.006 L 7.134 5.18 L 7.95 5.354 C 8.057 4.855 8.018 4.336 7.838 3.859 L 7.057 4.153 Z M 7.134 5.18 L 6.317 5.006 C 6.277 5.193 6.185 5.364 6.05 5.5 L 6.644 6.087 L 7.238 6.674 C 7.597 6.311 7.844 5.853 7.95 5.354 L 7.134 5.18 Z M 6.644 6.087 L 6.054 5.496 L 4.89 6.66 L 5.48 7.251 L 6.07 7.841 L 7.235 6.677 L 6.644 6.087 Z M 5.48 7.251 L 4.754 7.664 C 6.133 10.089 8.142 12.098 10.567 13.477 L 10.98 12.751 L 11.393 12.025 C 9.228 10.794 7.436 9.002 6.206 6.838 L 5.48 7.251 Z M 10.98 12.751 L 11.57 13.341 L 12.735 12.177 L 12.144 11.587 L 11.554 10.996 L 10.39 12.16 L 10.98 12.751 Z M 12.144 11.587 L 12.731 12.18 C 12.867 12.046 13.038 11.954 13.225 11.914 L 13.051 11.097 L 12.877 10.281 C 12.378 10.387 11.92 10.634 11.557 10.993 L 12.144 11.587 Z M 13.051 11.097 L 13.225 11.914 C 13.412 11.874 13.606 11.889 13.784 11.956 L 14.078 11.174 L 14.372 10.393 C 13.895 10.213 13.376 10.174 12.877 10.281 L 13.051 11.097 Z M 14.078 11.174 L 13.787 11.957 C 14.677 12.288 15.602 12.519 16.545 12.644 L 16.654 11.816 L 16.764 10.988 C 15.946 10.88 15.143 10.68 14.37 10.392 L 14.078 11.174 Z M 16.654 11.816 L 16.537 12.643 C 16.78 12.677 17.001 12.799 17.16 12.986 L 17.797 12.446 L 18.434 11.906 C 18.011 11.407 17.419 11.081 16.771 10.989 L 16.654 11.816 Z M 17.797 12.446 L 17.16 12.986 C 17.318 13.173 17.402 13.411 17.396 13.656 L 18.231 13.677 L 19.066 13.697 C 19.082 13.043 18.857 12.406 18.434 11.906 L 17.797 12.446 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16.001,
    viewBox: "0 0 16 16.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 7.718 L 15.294 7.718 L 15.294 7.718 L 16 7.718 Z M 8.188 15.436 L 8.197 14.73 L 8.186 14.73 L 8.188 15.436 Z M 4.8 14.702 L 5.094 14.06 C 4.944 13.991 4.775 13.977 4.616 14.02 L 4.8 14.702 Z M 0 16.001 L -0.671 15.782 C -0.751 16.028 -0.69 16.299 -0.512 16.487 C -0.333 16.675 -0.066 16.75 0.184 16.682 L 0 16.001 Z M 1.186 12.368 L 1.857 12.587 C 1.916 12.406 1.899 12.208 1.811 12.04 L 1.186 12.368 Z M 0.376 7.718 L 1.076 7.816 C 1.08 7.783 1.082 7.751 1.082 7.718 L 0.376 7.718 Z M 8.188 0.001 L 8.18 0.706 C 8.185 0.706 8.191 0.706 8.197 0.706 L 8.188 0.001 Z M 16 7.718 L 15.294 7.718 C 15.294 8.646 15.11 9.565 14.752 10.421 L 15.404 10.694 L 16.055 10.966 C 16.485 9.937 16.706 8.833 16.706 7.718 L 16 7.718 Z M 15.404 10.694 L 14.752 10.421 C 14.395 11.278 13.87 12.055 13.21 12.707 L 13.706 13.209 L 14.202 13.711 C 14.996 12.928 15.625 11.994 16.055 10.966 L 15.404 10.694 Z M 13.706 13.209 L 13.21 12.707 C 12.55 13.359 11.767 13.874 10.906 14.221 L 11.171 14.876 L 11.435 15.53 C 12.469 15.113 13.409 14.495 14.202 13.711 L 13.706 13.209 Z M 11.171 14.876 L 10.906 14.221 C 10.046 14.568 9.125 14.741 8.197 14.73 L 8.188 15.436 L 8.18 16.142 C 9.294 16.155 10.401 15.947 11.435 15.53 L 11.171 14.876 Z M 8.188 15.436 L 8.186 14.73 C 7.119 14.733 6.064 14.504 5.094 14.06 L 4.8 14.702 L 4.506 15.344 C 5.662 15.873 6.919 16.145 8.19 16.142 L 8.188 15.436 Z M 4.8 14.702 L 4.616 14.02 L -0.184 15.319 L 0 16.001 L 0.184 16.682 L 4.984 15.383 L 4.8 14.702 Z M 0 16.001 L 0.671 16.22 L 1.857 12.587 L 1.186 12.368 L 0.515 12.149 L -0.671 15.782 L 0 16.001 Z M 1.186 12.368 L 1.811 12.04 C 1.131 10.743 0.874 9.266 1.076 7.816 L 0.376 7.718 L -0.323 7.621 C -0.565 9.363 -0.256 11.138 0.561 12.696 L 1.186 12.368 Z M 0.376 7.718 L 1.082 7.718 C 1.082 6.79 1.266 5.871 1.624 5.015 L 0.973 4.743 L 0.321 4.471 C -0.108 5.5 -0.329 6.603 -0.329 7.718 L 0.376 7.718 Z M 0.973 4.743 L 1.624 5.015 C 1.982 4.159 2.506 3.382 3.166 2.73 L 2.67 2.227 L 2.174 1.725 C 1.381 2.509 0.751 3.442 0.321 4.471 L 0.973 4.743 Z M 2.67 2.227 L 3.166 2.73 C 3.826 2.077 4.609 1.563 5.47 1.215 L 5.206 0.561 L 4.942 -0.094 C 3.908 0.323 2.967 0.942 2.174 1.725 L 2.67 2.227 Z M 5.206 0.561 L 5.47 1.215 C 6.331 0.868 7.252 0.695 8.18 0.706 L 8.188 0.001 L 8.197 -0.705 C 7.082 -0.719 5.976 -0.511 4.942 -0.094 L 5.206 0.561 Z M 8.188 0.001 L 8.197 0.706 C 9.125 0.695 10.046 0.868 10.906 1.215 L 11.171 0.561 L 11.435 -0.094 C 10.401 -0.511 9.294 -0.719 8.18 -0.705 L 8.188 0.001 Z M 11.171 0.561 L 10.906 1.215 C 11.767 1.563 12.55 2.077 13.21 2.73 L 13.706 2.227 L 14.202 1.725 C 13.409 0.942 12.469 0.323 11.435 -0.094 L 11.171 0.561 Z M 13.706 2.227 L 13.21 2.73 C 13.87 3.382 14.395 4.159 14.752 5.015 L 15.404 4.743 L 16.055 4.471 C 15.625 3.442 14.996 2.509 14.202 1.725 L 13.706 2.227 Z M 15.404 4.743 L 14.752 5.015 C 15.11 5.871 15.294 6.79 15.294 7.718 L 16 7.718 L 16.706 7.718 C 16.706 6.603 16.485 5.5 16.055 4.471 L 15.404 4.743 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 3,
    viewBox: "0 0 6 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 10.5,
      width: 6,
      height: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 6 0.75 C 6.414 0.75 6.75 0.414 6.75 0 C 6.75 -0.414 6.414 -0.75 6 -0.75 L 6 0 L 6 0.75 Z M 0 2.25 C -0.414 2.25 -0.75 2.586 -0.75 3 C -0.75 3.414 -0.414 3.75 0 3.75 L 0 3 L 0 2.25 Z M 3.6 3.75 C 4.014 3.75 4.35 3.414 4.35 3 C 4.35 2.586 4.014 2.25 3.6 2.25 L 3.6 3 L 3.6 3.75 Z M 0 0 L 0 0.75 L 6 0.75 L 6 0 L 6 -0.75 L 0 -0.75 L 0 0 Z M 0 3 L 0 3.75 L 3.6 3.75 L 3.6 3 L 3.6 2.25 L 0 2.25 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--section-foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 20,
    viewBox: "0 0 16 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2,
      width: 16,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.5 C 0 16.43 1.57 18 3.5 18 L 2 19.5 L 2 20 L 14 20 L 14 19.5 L 12.5 18 C 14.43 18 16 16.43 16 14.5 L 16 4 C 16 0.5 12.42 0 8 0 C 3.58 0 0 0.5 0 4 L 0 14.5 Z M 3.5 15.5 C 3.102 15.5 2.721 15.342 2.439 15.061 C 2.158 14.779 2 14.398 2 14 C 2 13.602 2.158 13.221 2.439 12.939 C 2.721 12.658 3.102 12.5 3.5 12.5 C 3.898 12.5 4.279 12.658 4.561 12.939 C 4.842 13.221 5 13.602 5 14 C 5 14.398 4.842 14.779 4.561 15.061 C 4.279 15.342 3.898 15.5 3.5 15.5 Z M 12.5 15.5 C 12.102 15.5 11.721 15.342 11.439 15.061 C 11.158 14.779 11 14.398 11 14 C 11 13.602 11.158 13.221 11.439 12.939 C 11.721 12.658 12.102 12.5 12.5 12.5 C 12.898 12.5 13.279 12.658 13.561 12.939 C 13.842 13.221 14 13.602 14 14 C 14 14.398 13.842 14.779 13.561 15.061 C 13.279 15.342 12.898 15.5 12.5 15.5 Z M 14 9 L 2 9 L 2 4 L 14 4 L 14 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.103 0 L 7.803 0 C 7.965 0.094 8.104 0.117 8.165 0.341 C 8.181 0.398 8.186 0.461 8.178 0.521 C 8.098 0.881 7.936 1.284 7.757 1.603 C 7.563 1.948 7.321 2.172 7.089 2.458 C 7.558 2.545 8.285 2.914 8.592 3.302 C 8.654 3.381 8.682 3.531 8.656 3.627 C 8.575 3.917 8.052 4.302 7.819 4.455 C 7.431 4.712 6.742 4.909 6.278 4.885 C 6.227 5.064 6.187 5.206 6.114 5.378 C 5.857 5.979 5.35 6.541 4.781 6.857 C 4.706 6.899 4.63 6.939 4.553 6.977 C 4.809 7.906 4.73 8.732 4.249 9.581 C 4.19 9.686 4.114 9.797 4.058 9.897 C 4.108 9.967 4.16 10.031 4.211 10.099 C 4.616 10.648 4.837 11.316 4.827 12.001 C 4.825 12.166 4.801 12.348 4.779 12.512 C 5.641 12.998 6.284 13.601 6.561 14.59 C 6.571 14.626 6.58 14.661 6.589 14.697 C 6.793 14.703 7.029 14.702 7.227 14.737 C 7.855 14.849 8.497 15.182 8.937 15.648 C 9.452 16.194 9.745 16.917 9.756 17.672 C 9.917 17.676 10.079 17.677 10.241 17.675 C 10.235 17.581 10.25 17.42 10.262 17.323 C 10.335 16.734 10.582 16.18 10.971 15.735 C 11.532 15.103 12.32 14.725 13.16 14.685 C 13.252 14.68 13.346 14.68 13.438 14.681 C 13.498 14.49 13.556 14.283 13.634 14.101 C 13.937 13.4 14.451 12.906 15.116 12.558 L 15.236 12.496 C 15.034 11.688 15.307 10.742 15.834 10.118 C 15.877 10.067 15.938 9.995 15.974 9.941 C 15.37 9.14 15.147 8.221 15.373 7.239 C 15.384 7.192 15.43 7.033 15.409 6.996 C 15.351 6.943 15.212 6.88 15.139 6.838 C 15.045 6.784 14.998 6.752 14.912 6.686 C 14.318 6.232 13.891 5.592 13.697 4.867 C 13.464 4.853 13.247 4.842 13.018 4.786 C 12.547 4.67 12.143 4.445 11.775 4.131 C 11.419 3.832 11.104 3.498 11.579 3.107 C 11.85 2.885 12.13 2.724 12.453 2.59 C 12.59 2.533 12.746 2.503 12.889 2.467 L 12.882 2.458 C 12.792 2.339 12.685 2.226 12.591 2.104 C 12.297 1.72 12.105 1.319 11.967 0.855 C 11.881 0.565 11.784 0.291 12.077 0.066 C 12.113 0.038 12.155 0.023 12.189 0 L 12.82 0 C 12.912 0.041 13.051 0.042 13.153 0.066 C 13.285 0.096 13.417 0.128 13.547 0.17 C 14.387 0.447 15.1 1.023 15.469 1.843 C 15.649 2.241 15.768 2.805 15.705 3.234 C 15.773 3.307 15.873 3.378 15.948 3.446 C 16.049 3.537 16.14 3.63 16.232 3.729 C 16.303 3.286 16.447 2.905 16.68 2.525 C 16.797 2.334 16.996 2.003 17.27 2.075 C 17.578 2.154 17.908 2.618 18.093 2.87 C 18.554 3.566 18.756 4.372 18.596 5.2 C 18.512 5.633 18.33 6.04 18.065 6.39 C 17.999 6.479 17.833 6.674 17.792 6.755 C 17.839 6.955 17.89 7.17 17.945 7.368 C 17.997 7.264 18.057 7.192 18.12 7.1 C 18.304 6.828 18.528 6.592 18.779 6.382 C 18.878 6.299 18.995 6.171 19.119 6.135 C 19.477 6.032 19.66 6.264 19.732 6.581 C 19.782 6.799 19.86 7.012 19.911 7.231 C 19.932 7.307 19.971 7.52 20 7.577 L 20 8.074 C 19.953 8.193 19.955 8.344 19.928 8.47 C 19.76 9.251 19.309 9.994 18.656 10.453 C 18.596 10.496 18.539 10.542 18.474 10.578 C 18.385 10.631 18.272 10.683 18.195 10.747 C 18.179 10.818 18.096 11.273 18.112 11.314 C 18.149 11.312 18.325 11.205 18.375 11.179 C 18.559 11.082 18.747 11.007 18.943 10.935 C 19.355 10.766 19.751 10.591 20 11.122 L 20 11.544 C 19.962 11.637 19.946 11.808 19.923 11.914 C 19.848 12.27 19.742 12.565 19.589 12.893 C 19.288 13.539 18.817 14.051 18.166 14.343 C 17.81 14.507 17.225 14.65 16.829 14.61 C 16.708 14.779 16.602 14.964 16.481 15.127 C 16.939 15.097 17.443 15.203 17.873 15.352 C 18.121 15.438 18.378 15.556 18.389 15.862 C 18.399 16.147 18.074 16.472 17.892 16.671 C 17.345 17.27 16.563 17.753 15.738 17.763 C 15.101 17.771 14.749 17.584 14.211 17.287 C 13.969 17.415 13.738 17.572 13.486 17.702 C 13.949 17.881 14.359 18.218 14.706 18.562 C 15.322 19.173 14.904 19.458 14.311 19.721 C 13.568 20.05 12.714 20.102 11.955 19.801 C 11.483 19.613 11.065 19.309 10.737 18.918 C 10.699 18.874 10.48 18.575 10.479 18.575 C 10.314 18.526 9.705 18.561 9.537 18.549 C 9.421 18.705 9.341 18.847 9.212 19 C 8.793 19.492 8.15 19.879 7.506 19.961 C 6.839 20.046 6.131 19.93 5.53 19.628 C 5.306 19.515 5.049 19.449 5.017 19.155 C 4.997 18.971 5.076 18.826 5.189 18.688 C 5.541 18.271 5.954 17.949 6.441 17.709 C 6.309 17.599 6.04 17.423 5.888 17.328 C 5.71 17.414 5.559 17.495 5.371 17.564 C 4.73 17.802 4.099 17.817 3.452 17.588 C 2.834 17.374 2.313 16.955 1.908 16.444 C 1.823 16.331 1.726 16.221 1.665 16.093 C 1.522 15.792 1.697 15.524 1.977 15.412 C 2.368 15.255 2.764 15.161 3.183 15.131 C 3.303 15.123 3.409 15.113 3.531 15.116 C 3.435 14.978 3.256 14.747 3.182 14.608 C 2.937 14.593 2.691 14.576 2.452 14.528 C 1.9 14.42 1.261 14.097 0.889 13.667 C 0.494 13.211 0.229 12.626 0.102 12.038 C 0.083 11.955 0.019 11.591 0 11.555 L 0 11.165 C 0.022 11.134 0.04 11.08 0.057 11.045 C 0.284 10.573 0.767 10.821 1.099 10.96 C 1.394 11.084 1.648 11.218 1.926 11.336 C 1.868 11.142 1.851 10.909 1.771 10.724 C 1.759 10.697 1.701 10.666 1.674 10.65 C 1.483 10.541 1.295 10.424 1.128 10.279 C 0.606 9.833 0.236 9.235 0.076 8.563 C 0.055 8.475 0.038 8.287 0 8.216 L 0 7.587 C 0.039 7.521 0.044 7.237 0.072 7.127 C 0.151 6.826 0.215 6.353 0.494 6.173 C 0.782 5.988 1.031 6.245 1.228 6.421 C 1.551 6.709 1.858 7.017 2.078 7.395 C 2.119 7.173 2.172 6.972 2.228 6.753 C 2.153 6.65 2.044 6.532 1.964 6.432 C 1.209 5.49 1.148 4.193 1.743 3.154 C 1.902 2.876 2.379 2.179 2.698 2.092 C 2.807 2.061 2.924 2.076 3.022 2.133 C 3.266 2.274 3.519 2.871 3.615 3.142 C 3.677 3.315 3.746 3.592 3.791 3.773 C 3.886 3.633 4.018 3.505 4.132 3.379 C 4.187 3.318 4.247 3.266 4.295 3.198 C 4.33 2.663 4.376 2.197 4.591 1.695 C 4.93 0.906 5.616 0.385 6.425 0.155 C 6.548 0.12 6.672 0.09 6.797 0.064 C 6.872 0.049 7.039 0.028 7.103 0 Z M 3.152 6.428 C 3.219 6.423 3.303 6.418 3.367 6.406 C 3.88 6.349 4.299 6.21 4.699 5.869 C 5.129 5.502 5.323 5.108 5.443 4.562 C 5.384 4.563 5.309 4.561 5.251 4.565 C 4.641 4.605 4.028 4.892 3.656 5.387 C 3.419 5.703 3.289 6.061 3.152 6.428 Z M 8.526 18.459 C 8.244 18.385 7.786 18.307 7.497 18.348 C 6.965 18.39 6.525 18.595 6.12 18.94 C 6.494 19.057 6.773 19.117 7.17 19.1 C 7.283 19.092 7.408 19.082 7.517 19.054 C 7.829 18.973 8.328 18.719 8.526 18.459 Z M 15.246 13.525 C 14.434 14.02 14.015 14.954 14.322 15.882 C 14.338 15.928 14.372 16.05 14.399 16.079 C 14.927 15.663 15.313 15.244 15.405 14.539 C 15.442 14.253 15.394 13.81 15.268 13.534 C 15.264 13.525 15.256 13.526 15.246 13.525 Z M 5.306 2.532 C 5.495 2.433 5.685 2.359 5.875 2.265 C 6.299 2.056 6.686 1.698 6.901 1.272 C 6.927 1.22 7.064 0.976 7.056 0.94 C 7.034 0.933 7.042 0.934 7.018 0.939 C 6.921 0.95 6.826 0.976 6.731 0.998 C 6.291 1.104 5.924 1.31 5.636 1.668 C 5.467 1.878 5.348 2.125 5.29 2.389 C 5.282 2.428 5.265 2.489 5.273 2.527 C 5.295 2.539 5.284 2.538 5.306 2.532 Z M 11.498 18.451 C 11.917 18.931 12.556 19.135 13.176 19.1 C 13.462 19.073 13.567 19.042 13.84 18.94 C 13.327 18.526 12.838 18.3 12.158 18.329 C 11.842 18.355 11.783 18.392 11.498 18.451 Z M 17.532 13.648 C 18.371 13.452 18.887 12.657 19.061 11.851 L 19.056 11.833 C 19.048 11.832 19.038 11.831 19.031 11.833 C 18.553 11.976 18.048 12.42 17.808 12.857 C 17.769 12.927 17.5 13.578 17.5 13.64 L 17.515 13.651 L 17.532 13.648 Z M 4.738 13.51 C 4.521 14.035 4.496 14.48 4.709 15.016 C 4.901 15.499 5.221 15.778 5.61 16.101 C 5.659 16.066 5.728 15.721 5.742 15.641 C 5.827 15.136 5.734 14.593 5.431 14.175 C 5.31 14.008 4.918 13.599 4.738 13.51 Z M 4.563 16.845 C 4.753 16.82 4.85 16.779 5.024 16.739 C 4.545 16.282 3.918 15.971 3.248 15.992 C 3.235 15.993 3.221 15.993 3.208 15.994 C 3.058 15.999 2.872 16.031 2.724 16.067 C 3.208 16.578 3.842 16.936 4.563 16.845 Z M 17.521 5.621 C 17.778 5.104 17.859 4.582 17.674 4.025 C 17.63 3.894 17.378 3.352 17.258 3.296 C 17.217 3.422 17.166 3.537 17.129 3.665 C 17.021 4.047 17.004 4.45 17.12 4.832 C 17.204 5.112 17.367 5.353 17.473 5.622 C 17.481 5.641 17.472 5.628 17.49 5.647 C 17.516 5.637 17.505 5.644 17.521 5.621 Z M 19.021 7.394 C 18.764 7.705 18.577 7.936 18.462 8.336 C 18.359 8.695 18.392 9.018 18.391 9.385 C 18.391 9.424 18.375 9.523 18.391 9.551 C 18.421 9.546 18.429 9.533 18.45 9.506 C 18.928 9.02 19.33 8.13 19.043 7.411 C 19.04 7.405 19.027 7.398 19.021 7.394 Z M 0.907 7.313 C 0.772 8.168 0.973 8.903 1.592 9.515 C 1.61 9.5 1.612 9.505 1.613 9.477 C 1.614 9.358 1.606 9.218 1.613 9.101 C 1.647 8.467 1.544 8.005 1.12 7.519 C 1.082 7.475 0.953 7.334 0.907 7.313 Z M 0.922 11.818 C 1.08 12.613 1.563 13.395 2.371 13.608 C 2.426 13.622 2.507 13.656 2.562 13.652 C 2.261 12.886 1.871 12.232 1.084 11.881 C 1.037 11.86 0.97 11.83 0.922 11.818 Z M 14.998 16.741 C 15.261 16.859 15.492 16.9 15.779 16.881 C 16.393 16.833 16.833 16.506 17.262 16.087 C 16.979 16.045 16.778 16.013 16.486 16.033 C 16.195 16.056 15.877 16.123 15.618 16.261 C 15.394 16.381 15.2 16.587 14.998 16.741 Z M 2.685 3.325 C 2.609 3.46 2.52 3.586 2.448 3.724 C 2.141 4.311 2.147 5.011 2.49 5.582 C 2.5 5.578 2.509 5.574 2.518 5.57 C 2.957 4.894 3.062 4.133 2.733 3.384 C 2.72 3.354 2.715 3.341 2.685 3.325 Z M 3.442 13.373 L 3.458 13.393 C 3.487 13.386 3.488 13.367 3.514 13.327 C 4.037 12.495 4.159 11.432 3.517 10.629 C 3.513 10.628 3.51 10.627 3.507 10.625 C 3.399 10.773 3.284 10.91 3.191 11.068 C 2.98 11.427 2.896 11.883 2.957 12.294 C 3.009 12.643 3.215 13.101 3.442 13.373 Z M 12.933 0.926 C 13.25 1.637 13.595 2.057 14.313 2.381 C 14.416 2.428 14.721 2.597 14.808 2.614 C 14.789 2.395 14.649 2.088 14.528 1.908 C 14.161 1.361 13.573 1.027 12.933 0.926 Z M 6.301 3.226 C 5.881 3.254 5.582 3.407 5.255 3.661 C 5.599 3.935 6.084 4.044 6.516 3.999 C 6.903 3.961 7.219 3.78 7.532 3.567 C 7.134 3.337 6.774 3.191 6.301 3.226 Z M 16.244 7.478 C 16.108 8.087 16.16 8.646 16.499 9.186 C 16.701 9.509 16.977 9.779 17.304 9.972 C 17.35 9.999 17.422 10.043 17.47 10.06 C 17.511 9.873 17.515 9.748 17.523 9.563 C 17.542 9.138 17.504 8.76 17.269 8.393 C 17.057 8.063 16.789 7.803 16.457 7.598 C 16.41 7.57 16.291 7.496 16.244 7.478 Z M 2.547 10.063 C 2.698 9.956 2.857 9.854 2.998 9.734 C 3.402 9.39 3.672 8.912 3.76 8.386 C 3.802 8.146 3.815 7.658 3.717 7.43 L 3.695 7.417 C 3.424 7.606 3.2 7.777 2.989 8.032 C 2.554 8.558 2.371 9.209 2.491 9.885 C 2.501 9.941 2.505 10.023 2.547 10.063 Z M 13.415 3.236 C 13.17 3.274 13.018 3.299 12.785 3.406 C 12.688 3.45 12.575 3.516 12.482 3.555 C 12.839 3.81 13.098 3.939 13.549 3.987 C 13.64 3.996 13.801 4.001 13.891 3.986 C 14.3 3.942 14.49 3.832 14.841 3.639 C 14.454 3.344 13.897 3.191 13.415 3.236 Z M 16.535 10.597 C 16.498 10.647 16.463 10.697 16.427 10.747 C 15.843 11.575 15.916 12.582 16.577 13.345 L 16.592 13.361 C 16.632 13.345 16.773 13.046 16.848 12.879 C 17.177 12.15 17.073 11.205 16.543 10.598 C 16.541 10.598 16.538 10.597 16.535 10.597 Z M 6.829 15.573 C 6.863 16.075 7.179 16.653 7.553 16.973 C 7.885 17.258 8.441 17.533 8.881 17.573 C 8.882 17.494 8.85 17.34 8.832 17.262 C 8.735 16.835 8.555 16.521 8.255 16.206 C 7.96 15.898 7.577 15.691 7.16 15.614 C 7.055 15.594 6.917 15.592 6.829 15.573 Z M 13.118 15.581 C 12.917 15.605 12.747 15.633 12.554 15.697 C 11.808 15.946 11.279 16.572 11.165 17.358 C 11.159 17.399 11.131 17.544 11.15 17.575 L 11.17 17.581 C 11.787 17.492 12.374 17.17 12.751 16.664 C 12.983 16.355 13.118 15.984 13.14 15.597 L 13.129 15.581 L 13.118 15.581 Z M 14.592 4.554 C 14.583 4.766 14.791 5.244 14.906 5.421 C 15.276 5.993 15.93 6.373 16.607 6.406 C 16.674 6.409 16.743 6.409 16.81 6.411 C 16.796 6.247 16.723 6.038 16.656 5.889 C 16.245 4.975 15.515 4.652 14.592 4.554 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 13.673,
    viewBox: "0 0 18 13.673",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 7.665,
      width: 18,
      height: 13.673
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.033 13.673 L 1.967 13.673 C 0.883 13.673 0 12.791 0 11.706 L 0 1.967 C 0 0.882 0.883 0 1.967 0 L 2.407 0 C 2.602 0 2.759 0.157 2.759 0.352 C 2.759 0.546 2.602 0.703 2.407 0.703 L 1.967 0.703 C 1.27 0.703 0.703 1.27 0.703 1.967 L 0.703 11.706 C 0.703 12.403 1.27 12.969 1.967 12.969 L 16.033 12.969 C 16.73 12.969 17.297 12.403 17.297 11.706 L 17.297 1.967 C 17.297 1.27 16.73 0.703 16.033 0.703 L 15.593 0.703 C 15.398 0.703 15.241 0.546 15.241 0.352 C 15.241 0.157 15.398 0 15.593 0 L 16.033 0 C 17.117 0 18 0.882 18 1.967 L 18 11.706 C 18 12.791 17.117 13.673 16.033 13.673 L 16.033 13.673 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 16.033 13.673 L 16.351 13.673 L 16.351 13.355 L 16.033 13.355 L 16.033 13.673 Z M 16.033 13.673 L 15.715 13.673 L 15.715 13.991 L 16.033 13.991 L 16.033 13.673 Z M 16.033 13.673 L 16.033 13.355 L 1.967 13.355 L 1.967 13.673 L 1.967 13.99 L 16.033 13.99 L 16.033 13.673 Z M 1.967 13.673 L 1.967 13.355 C 1.058 13.355 0.318 12.615 0.318 11.706 L 0 11.706 L -0.318 11.706 C -0.318 12.966 0.707 13.99 1.967 13.99 L 1.967 13.673 Z M 0 11.706 L 0.318 11.706 L 0.318 1.967 L 0 1.967 L -0.318 1.967 L -0.318 11.706 L 0 11.706 Z M 0 1.967 L 0.318 1.967 C 0.318 1.058 1.058 0.318 1.967 0.318 L 1.967 0 L 1.967 -0.318 C 0.707 -0.318 -0.318 0.707 -0.318 1.967 L 0 1.967 Z M 1.967 0 L 1.967 0.318 L 2.407 0.318 L 2.407 0 L 2.407 -0.318 L 1.967 -0.318 L 1.967 0 Z M 2.407 0 L 2.407 0.318 C 2.426 0.318 2.441 0.333 2.441 0.352 L 2.759 0.352 L 3.077 0.352 C 3.077 -0.018 2.777 -0.318 2.407 -0.318 L 2.407 0 Z M 2.759 0.352 L 2.441 0.352 C 2.441 0.371 2.426 0.386 2.407 0.386 L 2.407 0.703 L 2.407 1.021 C 2.777 1.021 3.077 0.722 3.077 0.352 L 2.759 0.352 Z M 2.407 0.703 L 2.407 0.386 L 1.967 0.386 L 1.967 0.703 L 1.967 1.021 L 2.407 1.021 L 2.407 0.703 Z M 1.967 0.703 L 1.967 0.386 C 1.095 0.386 0.386 1.095 0.386 1.967 L 0.703 1.967 L 1.021 1.967 C 1.021 1.445 1.445 1.021 1.967 1.021 L 1.967 0.703 Z M 0.703 1.967 L 0.386 1.967 L 0.386 11.706 L 0.703 11.706 L 1.021 11.706 L 1.021 1.967 L 0.703 1.967 Z M 0.703 11.706 L 0.386 11.706 C 0.386 12.578 1.095 13.287 1.967 13.287 L 1.967 12.969 L 1.967 12.652 C 1.445 12.652 1.021 12.227 1.021 11.706 L 0.703 11.706 Z M 1.967 12.969 L 1.967 13.287 L 16.033 13.287 L 16.033 12.969 L 16.033 12.652 L 1.967 12.652 L 1.967 12.969 Z M 16.033 12.969 L 16.033 13.287 C 16.905 13.287 17.614 12.578 17.614 11.706 L 17.297 11.706 L 16.979 11.706 C 16.979 12.227 16.554 12.652 16.033 12.652 L 16.033 12.969 Z M 17.297 11.706 L 17.614 11.706 L 17.614 1.967 L 17.297 1.967 L 16.979 1.967 L 16.979 11.706 L 17.297 11.706 Z M 17.297 1.967 L 17.614 1.967 C 17.614 1.094 16.905 0.386 16.033 0.386 L 16.033 0.703 L 16.033 1.021 C 16.554 1.021 16.979 1.446 16.979 1.967 L 17.297 1.967 Z M 16.033 0.703 L 16.033 0.386 L 15.593 0.386 L 15.593 0.703 L 15.593 1.021 L 16.033 1.021 L 16.033 0.703 Z M 15.593 0.703 L 15.593 0.386 C 15.574 0.386 15.559 0.371 15.559 0.352 L 15.241 0.352 L 14.923 0.352 C 14.923 0.722 15.223 1.021 15.593 1.021 L 15.593 0.703 Z M 15.241 0.352 L 15.559 0.352 C 15.559 0.333 15.574 0.318 15.593 0.318 L 15.593 0 L 15.593 -0.318 C 15.223 -0.318 14.923 -0.018 14.923 0.352 L 15.241 0.352 Z M 15.593 0 L 15.593 0.318 L 16.033 0.318 L 16.033 0 L 16.033 -0.318 L 15.593 -0.318 L 15.593 0 Z M 16.033 0 L 16.033 0.318 C 16.942 0.318 17.682 1.058 17.682 1.967 L 18 1.967 L 18.318 1.967 C 18.318 0.707 17.293 -0.318 16.033 -0.318 L 16.033 0 Z M 18 1.967 L 17.682 1.967 L 17.682 11.706 L 18 11.706 L 18.318 11.706 L 18.318 1.967 L 18 1.967 Z M 18 11.706 L 17.682 11.706 C 17.682 12.615 16.942 13.356 16.033 13.356 L 16.033 13.673 L 16.033 13.991 C 17.293 13.991 18.318 12.966 18.318 11.706 L 18 11.706 Z M 16.033 13.673 L 16.351 13.673 L 16.351 13.673 L 16.033 13.673 L 15.715 13.673 L 15.715 13.673 L 16.033 13.673 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.995,
    height: 8.424,
    viewBox: "0 0 17.995 8.424",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 12.913,
      width: 17.995,
      height: 8.424
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.703 6.133 L 0.703 6.457 C 0.703 7.154 1.27 7.721 1.967 7.721 L 16.028 7.721 C 16.724 7.721 17.291 7.154 17.291 6.457 L 17.291 6.133 L 10.762 1.622 L 9.783 0.947 C 9.314 0.621 8.68 0.621 8.206 0.947 L 7.233 1.622 L 0.703 6.133 Z M 16.028 8.424 L 1.967 8.424 C 0.883 8.424 0 7.542 0 6.458 L 0 5.949 C 0 5.833 0.057 5.725 0.152 5.659 L 6.833 1.044 L 7.806 0.369 C 8.52 -0.123 9.476 -0.123 10.184 0.369 L 11.162 1.044 L 17.843 5.659 C 17.938 5.725 17.995 5.833 17.995 5.948 L 17.995 6.457 C 17.995 7.542 17.112 8.424 16.028 8.424 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.703 6.133 L 0.523 5.871 L 0.386 5.966 L 0.386 6.133 L 0.703 6.133 Z M 17.291 6.133 L 17.609 6.133 L 17.609 5.966 L 17.472 5.871 L 17.291 6.133 Z M 10.762 1.622 L 10.943 1.361 L 10.943 1.361 L 10.762 1.622 Z M 9.783 0.947 L 9.602 1.208 L 9.603 1.208 L 9.783 0.947 Z M 8.206 0.947 L 8.026 0.685 L 8.025 0.686 L 8.206 0.947 Z M 7.233 1.622 L 7.414 1.883 L 7.414 1.883 L 7.233 1.622 Z M 0.152 5.659 L -0.028 5.398 L -0.029 5.398 L 0.152 5.659 Z M 6.833 1.044 L 7.013 1.305 L 7.014 1.305 L 6.833 1.044 Z M 7.806 0.369 L 7.626 0.107 L 7.625 0.108 L 7.806 0.369 Z M 10.184 0.369 L 10.003 0.63 L 10.004 0.63 L 10.184 0.369 Z M 11.162 1.044 L 11.343 0.782 L 11.342 0.782 L 11.162 1.044 Z M 17.843 5.659 L 18.023 5.398 L 18.023 5.397 L 17.843 5.659 Z M 0.703 6.133 L 0.386 6.133 L 0.386 6.457 L 0.703 6.457 L 1.021 6.457 L 1.021 6.133 L 0.703 6.133 Z M 0.703 6.457 L 0.386 6.457 C 0.386 7.329 1.095 8.038 1.967 8.038 L 1.967 7.721 L 1.967 7.403 C 1.445 7.403 1.021 6.979 1.021 6.457 L 0.703 6.457 Z M 1.967 7.721 L 1.967 8.038 L 16.028 8.038 L 16.028 7.721 L 16.028 7.403 L 1.967 7.403 L 1.967 7.721 Z M 16.028 7.721 L 16.028 8.038 C 16.9 8.038 17.609 7.329 17.609 6.457 L 17.291 6.457 L 16.974 6.457 C 16.974 6.978 16.549 7.403 16.028 7.403 L 16.028 7.721 Z M 17.291 6.457 L 17.609 6.457 L 17.609 6.133 L 17.291 6.133 L 16.974 6.133 L 16.974 6.457 L 17.291 6.457 Z M 17.291 6.133 L 17.472 5.871 L 10.943 1.361 L 10.762 1.622 L 10.582 1.883 L 17.111 6.394 L 17.291 6.133 Z M 10.762 1.622 L 10.943 1.361 L 9.964 0.685 L 9.783 0.947 L 9.603 1.208 L 10.582 1.884 L 10.762 1.622 Z M 9.783 0.947 L 9.965 0.686 C 9.385 0.284 8.608 0.285 8.026 0.685 L 8.206 0.947 L 8.386 1.209 C 8.752 0.957 9.242 0.958 9.602 1.208 L 9.783 0.947 Z M 8.206 0.947 L 8.025 0.686 L 7.052 1.361 L 7.233 1.622 L 7.414 1.883 L 8.387 1.208 L 8.206 0.947 Z M 7.233 1.622 L 7.052 1.36 L 0.523 5.871 L 0.703 6.133 L 0.884 6.394 L 7.414 1.883 L 7.233 1.622 Z M 16.028 8.424 L 16.028 8.107 L 1.967 8.107 L 1.967 8.424 L 1.967 8.742 L 16.028 8.742 L 16.028 8.424 Z M 1.967 8.424 L 1.967 8.107 C 1.058 8.107 0.318 7.367 0.318 6.458 L 0 6.458 L -0.318 6.458 C -0.318 7.718 0.707 8.742 1.967 8.742 L 1.967 8.424 Z M 0 6.458 L 0.318 6.458 L 0.318 5.949 L 0 5.949 L -0.318 5.949 L -0.318 6.458 L 0 6.458 Z M 0 5.949 L 0.318 5.949 C 0.318 5.938 0.323 5.927 0.333 5.92 L 0.152 5.659 L -0.029 5.398 C -0.209 5.523 -0.318 5.728 -0.318 5.949 L 0 5.949 Z M 0.152 5.659 L 0.333 5.921 L 7.013 1.305 L 6.833 1.044 L 6.652 0.783 L -0.028 5.398 L 0.152 5.659 Z M 6.833 1.044 L 7.014 1.305 L 7.987 0.63 L 7.806 0.369 L 7.625 0.108 L 6.652 0.783 L 6.833 1.044 Z M 7.806 0.369 L 7.986 0.63 C 8.592 0.213 9.404 0.214 10.003 0.63 L 10.184 0.369 L 10.365 0.108 C 9.547 -0.46 8.448 -0.459 7.626 0.107 L 7.806 0.369 Z M 10.184 0.369 L 10.004 0.63 L 10.982 1.305 L 11.162 1.044 L 11.342 0.782 L 10.365 0.107 L 10.184 0.369 Z M 11.162 1.044 L 10.982 1.305 L 17.662 5.92 L 17.843 5.659 L 18.023 5.397 L 11.343 0.782 L 11.162 1.044 Z M 17.843 5.659 L 17.662 5.92 C 17.672 5.927 17.677 5.938 17.677 5.948 L 17.995 5.948 L 18.312 5.948 C 18.312 5.728 18.204 5.522 18.023 5.398 L 17.843 5.659 Z M 17.995 5.948 L 17.677 5.948 L 17.677 6.457 L 17.995 6.457 L 18.312 6.457 L 18.312 5.948 L 17.995 5.948 Z M 17.995 6.457 L 17.677 6.457 C 17.677 7.366 16.937 8.107 16.028 8.107 L 16.028 8.424 L 16.028 8.742 C 17.288 8.742 18.312 7.717 18.312 6.457 L 17.995 6.457 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.380,
    height: 6.934,
    viewBox: "0 0 7.380 6.934",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.006,
      top: 7.665,
      width: 7.38,
      height: 6.934
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.027 6.934 C 6.958 6.934 6.888 6.913 6.827 6.871 L 2.202 3.676 L 0.152 2.256 C 0.056 2.19 0 2.082 0 1.967 C 0 0.882 0.882 0 1.967 0 L 2.407 0 C 2.602 0 2.759 0.157 2.759 0.352 C 2.759 0.546 2.602 0.703 2.407 0.703 L 1.967 0.703 C 1.33 0.703 0.801 1.177 0.715 1.791 L 2.603 3.097 L 7.228 6.293 C 7.388 6.403 7.427 6.623 7.317 6.783 C 7.249 6.881 7.139 6.934 7.027 6.934 L 7.027 6.934 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.027 6.934 L 7.251 6.709 L 7.158 6.616 L 7.027 6.616 L 7.027 6.934 Z M 6.827 6.871 L 6.647 7.133 L 6.647 7.133 L 6.827 6.871 Z M 2.202 3.676 L 2.021 3.937 L 2.022 3.937 L 2.202 3.676 Z M 0.152 2.256 L 0.332 1.994 L 0.332 1.994 L 0.152 2.256 Z M 0.715 1.791 L 0.401 1.747 L 0.374 1.941 L 0.535 2.052 L 0.715 1.791 Z M 2.603 3.097 L 2.422 3.358 L 2.422 3.358 L 2.603 3.097 Z M 7.228 6.293 L 7.047 6.554 L 7.047 6.554 L 7.228 6.293 Z M 7.317 6.783 L 7.056 6.602 L 7.055 6.603 L 7.317 6.783 Z M 7.027 6.934 L 6.803 7.159 L 6.896 7.252 L 7.027 7.252 L 7.027 6.934 Z M 7.027 6.934 L 7.027 6.616 C 7.021 6.616 7.014 6.614 7.008 6.61 L 6.827 6.871 L 6.647 7.133 C 6.762 7.212 6.896 7.251 7.027 7.251 L 7.027 6.934 Z M 6.827 6.871 L 7.008 6.61 L 2.383 3.414 L 2.202 3.676 L 2.022 3.937 L 6.647 7.133 L 6.827 6.871 Z M 2.202 3.676 L 2.383 3.414 L 0.332 1.994 L 0.152 2.256 L -0.029 2.517 L 2.021 3.937 L 2.202 3.676 Z M 0.152 2.256 L 0.332 1.994 C 0.323 1.988 0.318 1.978 0.318 1.967 L 0 1.967 L -0.318 1.967 C -0.318 2.187 -0.21 2.392 -0.029 2.517 L 0.152 2.256 Z M 0 1.967 L 0.318 1.967 C 0.318 1.058 1.058 0.318 1.967 0.318 L 1.967 0 L 1.967 -0.318 C 0.707 -0.318 -0.318 0.707 -0.318 1.967 L 0 1.967 Z M 1.967 0 L 1.967 0.318 L 2.407 0.318 L 2.407 0 L 2.407 -0.318 L 1.967 -0.318 L 1.967 0 Z M 2.407 0 L 2.407 0.318 C 2.426 0.318 2.441 0.333 2.441 0.352 L 2.759 0.352 L 3.077 0.352 C 3.077 -0.018 2.777 -0.318 2.407 -0.318 L 2.407 0 Z M 2.759 0.352 L 2.441 0.352 C 2.441 0.371 2.426 0.386 2.407 0.386 L 2.407 0.703 L 2.407 1.021 C 2.777 1.021 3.077 0.722 3.077 0.352 L 2.759 0.352 Z M 2.407 0.703 L 2.407 0.386 L 1.967 0.386 L 1.967 0.703 L 1.967 1.021 L 2.407 1.021 L 2.407 0.703 Z M 1.967 0.703 L 1.967 0.386 C 1.169 0.386 0.508 0.979 0.401 1.747 L 0.715 1.791 L 1.03 1.835 C 1.094 1.376 1.49 1.021 1.967 1.021 L 1.967 0.703 Z M 0.715 1.791 L 0.535 2.052 L 2.422 3.358 L 2.603 3.097 L 2.783 2.836 L 0.896 1.53 L 0.715 1.791 Z M 2.603 3.097 L 2.422 3.358 L 7.047 6.554 L 7.228 6.293 L 7.408 6.032 L 2.783 2.836 L 2.603 3.097 Z M 7.228 6.293 L 7.047 6.554 C 7.062 6.564 7.067 6.586 7.056 6.602 L 7.317 6.783 L 7.579 6.963 C 7.788 6.659 7.713 6.242 7.408 6.031 L 7.228 6.293 Z M 7.317 6.783 L 7.055 6.603 C 7.05 6.61 7.04 6.616 7.027 6.616 L 7.027 6.934 L 7.027 7.252 C 7.238 7.252 7.448 7.152 7.579 6.963 L 7.317 6.783 Z M 7.027 6.934 L 7.252 6.709 L 7.251 6.709 L 7.027 6.934 L 6.802 7.158 L 6.803 7.159 L 7.027 6.934 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.351,
    height: 6.835,
    viewBox: "0 0 7.351 6.835",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.648,
      top: 7.665,
      width: 7.351,
      height: 6.835
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.352 6.835 C 0.24 6.835 0.131 6.782 0.063 6.683 C -0.048 6.523 -0.008 6.305 0.152 6.194 L 4.744 3.097 L 6.635 1.79 C 6.549 1.177 6.021 0.703 5.384 0.703 L 4.944 0.703 C 4.75 0.703 4.593 0.546 4.593 0.352 C 4.593 0.157 4.75 0 4.944 0 L 5.384 0 C 6.469 0 7.351 0.882 7.351 1.967 C 7.351 2.082 7.294 2.19 7.199 2.256 L 5.144 3.676 L 0.552 6.773 C 0.491 6.816 0.421 6.835 0.352 6.835 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.063 6.683 L -0.199 6.864 L -0.199 6.864 L 0.063 6.683 Z M 0.152 6.194 L -0.026 5.931 L -0.028 5.933 L 0.152 6.194 Z M 4.744 3.097 L 4.922 3.36 L 4.925 3.358 L 4.744 3.097 Z M 6.635 1.79 L 6.816 2.052 L 6.977 1.94 L 6.95 1.746 L 6.635 1.79 Z M 7.199 2.256 L 7.38 2.518 L 7.38 2.517 L 7.199 2.256 Z M 5.144 3.676 L 5.322 3.939 L 5.324 3.937 L 5.144 3.676 Z M 0.552 6.773 L 0.374 6.51 L 0.371 6.512 L 0.552 6.773 Z M 0.352 6.835 L 0.352 6.517 C 0.346 6.517 0.34 6.516 0.336 6.514 C 0.332 6.511 0.327 6.508 0.324 6.502 L 0.063 6.683 L -0.199 6.864 C -0.068 7.052 0.14 7.153 0.352 7.153 L 0.352 6.835 Z M 0.063 6.683 L 0.324 6.503 C 0.313 6.487 0.317 6.466 0.332 6.456 L 0.152 6.194 L -0.028 5.933 C -0.333 6.143 -0.408 6.56 -0.199 6.864 L 0.063 6.683 Z M 0.152 6.194 L 0.33 6.458 L 4.922 3.36 L 4.744 3.097 L 4.566 2.833 L -0.026 5.931 L 0.152 6.194 Z M 4.744 3.097 L 4.925 3.358 L 6.816 2.052 L 6.635 1.79 L 6.455 1.529 L 4.564 2.835 L 4.744 3.097 Z M 6.635 1.79 L 6.95 1.746 C 6.842 0.978 6.182 0.386 5.384 0.386 L 5.384 0.703 L 5.384 1.021 C 5.861 1.021 6.256 1.375 6.321 1.835 L 6.635 1.79 Z M 5.384 0.703 L 5.384 0.386 L 4.944 0.386 L 4.944 0.703 L 4.944 1.021 L 5.384 1.021 L 5.384 0.703 Z M 4.944 0.703 L 4.944 0.386 C 4.925 0.386 4.91 0.371 4.91 0.352 L 4.593 0.352 L 4.275 0.352 C 4.275 0.722 4.574 1.021 4.944 1.021 L 4.944 0.703 Z M 4.593 0.352 L 4.91 0.352 C 4.91 0.333 4.925 0.318 4.944 0.318 L 4.944 0 L 4.944 -0.318 C 4.574 -0.318 4.275 -0.018 4.275 0.352 L 4.593 0.352 Z M 4.944 0 L 4.944 0.318 L 5.384 0.318 L 5.384 0 L 5.384 -0.318 L 4.944 -0.318 L 4.944 0 Z M 5.384 0 L 5.384 0.318 C 6.293 0.318 7.034 1.058 7.034 1.967 L 7.351 1.967 L 7.669 1.967 C 7.669 0.707 6.644 -0.318 5.384 -0.318 L 5.384 0 Z M 7.351 1.967 L 7.034 1.967 C 7.034 1.977 7.028 1.988 7.019 1.995 L 7.199 2.256 L 7.38 2.517 C 7.56 2.392 7.669 2.187 7.669 1.967 L 7.351 1.967 Z M 7.199 2.256 L 7.019 1.995 L 4.963 3.414 L 5.144 3.676 L 5.324 3.937 L 7.38 2.518 L 7.199 2.256 Z M 5.144 3.676 L 4.966 3.412 L 0.374 6.51 L 0.552 6.773 L 0.729 7.037 L 5.322 3.939 L 5.144 3.676 Z M 0.552 6.773 L 0.371 6.512 C 0.368 6.514 0.366 6.515 0.363 6.516 C 0.361 6.517 0.357 6.517 0.352 6.517 L 0.352 6.835 L 0.352 7.153 C 0.481 7.153 0.614 7.116 0.732 7.034 L 0.552 6.773 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 8.322,
    viewBox: "0 0 12 8.322",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 2.969,
      width: 12,
      height: 8.322
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.696 8.322 C 11.528 8.322 11.392 8.192 11.392 8.031 L 11.392 1.739 C 11.392 1.1 10.849 0.581 10.182 0.581 L 1.818 0.581 C 1.151 0.581 0.608 1.1 0.608 1.739 L 0.608 8.031 C 0.608 8.192 0.472 8.322 0.304 8.322 C 0.136 8.322 0 8.192 0 8.031 L 0 1.739 C 0 0.78 0.816 0 1.817 0 L 10.182 0 C 11.184 0 12 0.78 12 1.739 L 12 8.031 C 12 8.192 11.864 8.322 11.696 8.322 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 8.031 L 0.318 8.031 L 0 8.031 Z M 0 1.739 L 0.318 1.739 L 0.318 1.738 L 0 1.739 Z M 11.696 8.322 L 11.696 8.004 C 11.695 8.004 11.697 8.004 11.701 8.007 C 11.702 8.009 11.705 8.012 11.707 8.016 C 11.709 8.021 11.71 8.026 11.71 8.031 L 11.392 8.031 L 11.075 8.031 C 11.075 8.381 11.366 8.64 11.696 8.64 L 11.696 8.322 Z M 11.392 8.031 L 11.71 8.031 L 11.71 1.739 L 11.392 1.739 L 11.075 1.739 L 11.075 8.031 L 11.392 8.031 Z M 11.392 1.739 L 11.71 1.739 C 11.71 0.912 11.011 0.264 10.182 0.264 L 10.182 0.581 L 10.182 0.899 C 10.688 0.899 11.075 1.289 11.075 1.739 L 11.392 1.739 Z M 10.182 0.581 L 10.182 0.264 L 1.818 0.264 L 1.818 0.581 L 1.818 0.899 L 10.182 0.899 L 10.182 0.581 Z M 1.818 0.581 L 1.818 0.264 C 0.989 0.264 0.29 0.912 0.29 1.739 L 0.608 1.739 L 0.925 1.739 C 0.925 1.289 1.312 0.899 1.818 0.899 L 1.818 0.581 Z M 0.608 1.739 L 0.29 1.739 L 0.29 8.031 L 0.608 8.031 L 0.925 8.031 L 0.925 1.739 L 0.608 1.739 Z M 0.608 8.031 L 0.29 8.031 C 0.29 8.026 0.291 8.021 0.293 8.016 C 0.295 8.012 0.298 8.009 0.299 8.007 C 0.303 8.004 0.305 8.004 0.304 8.004 L 0.304 8.322 L 0.304 8.64 C 0.634 8.64 0.925 8.381 0.925 8.031 L 0.608 8.031 Z M 0.304 8.322 L 0.304 8.004 C 0.303 8.004 0.305 8.004 0.309 8.007 C 0.31 8.009 0.312 8.011 0.314 8.016 C 0.316 8.02 0.318 8.026 0.318 8.031 L 0 8.031 L -0.318 8.031 C -0.318 8.381 -0.025 8.64 0.304 8.64 L 0.304 8.322 Z M 0 8.031 L 0.318 8.031 L 0.318 1.739 L 0 1.739 L -0.318 1.739 L -0.318 8.031 L 0 8.031 Z M 0 1.739 L 0.318 1.738 C 0.317 0.969 0.977 0.318 1.817 0.318 L 1.817 0 L 1.817 -0.318 C 0.654 -0.318 -0.318 0.591 -0.318 1.739 L 0 1.739 Z M 1.817 0 L 1.817 0.318 L 10.182 0.318 L 10.182 0 L 10.182 -0.318 L 1.817 -0.318 L 1.817 0 Z M 10.182 0 L 10.182 0.318 C 11.023 0.318 11.682 0.969 11.682 1.739 L 12 1.739 L 12.318 1.739 C 12.318 0.591 11.346 -0.318 10.182 -0.318 L 10.182 0 Z M 12 1.739 L 11.682 1.739 L 11.682 8.031 L 12 8.031 L 12.318 8.031 L 12.318 1.739 L 12 1.739 Z M 12 8.031 L 11.682 8.031 C 11.682 8.026 11.684 8.021 11.686 8.016 C 11.688 8.012 11.69 8.009 11.692 8.007 C 11.695 8.004 11.697 8.004 11.696 8.004 L 11.696 8.322 L 11.696 8.64 C 12.026 8.64 12.318 8.381 12.318 8.031 L 12 8.031 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.800,
    height: 9.800,
    viewBox: "0 0 17.800 9.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.1,
      top: 7.1,
      width: 17.8,
      height: 9.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 0.264 C 0.615 -0.088 1.185 -0.088 1.536 0.264 L 8.9 7.627 L 16.264 0.264 C 16.615 -0.088 17.185 -0.088 17.536 0.264 C 17.888 0.615 17.888 1.185 17.536 1.536 L 9.536 9.536 C 9.185 9.888 8.615 9.888 8.264 9.536 L 0.264 1.536 C -0.088 1.185 -0.088 0.615 0.264 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.600,
    height: 10.600,
    viewBox: "0 0 18.600 10.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.7,
      top: 7.2,
      width: 18.6,
      height: 10.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.381 0.381 C 0.888 -0.127 1.712 -0.127 2.219 0.381 L 9.3 7.462 L 16.381 0.381 C 16.888 -0.127 17.712 -0.127 18.219 0.381 C 18.727 0.888 18.727 1.712 18.219 2.219 L 10.219 10.219 C 9.712 10.727 8.888 10.727 8.381 10.219 L 0.381 2.219 C -0.127 1.712 -0.127 0.888 0.381 0.381 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.800,
    height: 8.800,
    viewBox: "0 0 15.800 8.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.1,
      top: 8.1,
      width: 15.8,
      height: 8.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 0.264 C 0.615 -0.088 1.185 -0.088 1.536 0.264 L 7.9 6.627 L 14.264 0.264 C 14.615 -0.088 15.185 -0.088 15.536 0.264 C 15.888 0.615 15.888 1.185 15.536 1.536 L 8.536 8.536 C 8.185 8.888 7.615 8.888 7.264 8.536 L 0.264 1.536 C -0.088 1.185 -0.088 0.615 0.264 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.600,
    height: 9.600,
    viewBox: "0 0 16.600 9.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.7,
      top: 7.7,
      width: 16.6,
      height: 9.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.381 0.381 C 0.888 -0.127 1.712 -0.127 2.219 0.381 L 8.3 6.462 L 14.381 0.381 C 14.888 -0.127 15.712 -0.127 16.219 0.381 C 16.727 0.888 16.727 1.712 16.219 2.219 L 9.219 9.219 C 8.712 9.727 7.888 9.727 7.381 9.219 L 0.381 2.219 C -0.127 1.712 -0.127 0.888 0.381 0.381 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.800,
    height: 9.800,
    viewBox: "0 0 17.800 9.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.1,
      top: 6.6,
      width: 17.8,
      height: 9.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 9.536 C 0.615 9.888 1.185 9.888 1.536 9.536 L 8.9 2.173 L 16.264 9.536 C 16.615 9.888 17.185 9.888 17.536 9.536 C 17.888 9.185 17.888 8.615 17.536 8.264 L 9.536 0.264 C 9.185 -0.088 8.615 -0.088 8.264 0.264 L 0.264 8.264 C -0.088 8.615 -0.088 9.185 0.264 9.536 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.600,
    height: 10.600,
    viewBox: "0 0 18.600 10.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.7,
      top: 6.2,
      width: 18.6,
      height: 10.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.381 10.219 C 0.888 10.727 1.712 10.727 2.219 10.219 L 9.3 3.138 L 16.381 10.219 C 16.888 10.727 17.712 10.727 18.219 10.219 C 18.727 9.712 18.727 8.888 18.219 8.381 L 10.219 0.381 C 9.712 -0.127 8.888 -0.127 8.381 0.381 L 0.381 8.381 C -0.127 8.888 -0.127 9.712 0.381 10.219 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.800,
    height: 8.800,
    viewBox: "0 0 15.800 8.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.1,
      top: 7.1,
      width: 15.8,
      height: 8.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 8.536 C 0.615 8.888 1.185 8.888 1.536 8.536 L 7.9 2.173 L 14.264 8.536 C 14.615 8.888 15.185 8.888 15.536 8.536 C 15.888 8.185 15.888 7.615 15.536 7.264 L 8.536 0.264 C 8.185 -0.088 7.615 -0.088 7.264 0.264 L 0.264 7.264 C -0.088 7.615 -0.088 8.185 0.264 8.536 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.600,
    height: 9.600,
    viewBox: "0 0 16.600 9.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.7,
      top: 6.7,
      width: 16.6,
      height: 9.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.381 9.219 C 0.888 9.727 1.712 9.727 2.219 9.219 L 8.3 3.138 L 14.381 9.219 C 14.888 9.727 15.712 9.727 16.219 9.219 C 16.727 8.712 16.727 7.888 16.219 7.381 L 9.219 0.381 C 8.712 -0.127 7.888 -0.127 7.381 0.381 L 0.381 7.381 C -0.127 7.888 -0.127 8.712 0.381 9.219 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.800,
    height: 17.800,
    viewBox: "0 0 9.800 17.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.6,
      top: 3.099,
      width: 9.8,
      height: 17.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.536 0.264 C 9.888 0.615 9.888 1.185 9.536 1.536 L 2.173 8.9 L 9.536 16.264 C 9.888 16.615 9.888 17.185 9.536 17.536 C 9.185 17.888 8.615 17.888 8.264 17.536 L 0.264 9.536 C -0.088 9.185 -0.088 8.615 0.264 8.264 L 8.264 0.264 C 8.615 -0.088 9.185 -0.088 9.536 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.600,
    height: 18.600,
    viewBox: "0 0 10.600 18.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.2,
      top: 2.699,
      width: 10.6,
      height: 18.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.219 0.381 C 10.727 0.888 10.727 1.712 10.219 2.219 L 3.138 9.3 L 10.219 16.381 C 10.727 16.888 10.727 17.712 10.219 18.219 C 9.712 18.727 8.888 18.727 8.381 18.219 L 0.381 10.219 C -0.127 9.712 -0.127 8.888 0.381 8.381 L 8.381 0.381 C 8.888 -0.127 9.712 -0.127 10.219 0.381 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.800,
    height: 17.800,
    viewBox: "0 0 9.800 17.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 3.1,
      width: 9.8,
      height: 17.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.536 0.264 C 9.888 0.615 9.888 1.185 9.536 1.536 L 2.173 8.9 L 9.536 16.264 C 9.888 16.615 9.888 17.185 9.536 17.536 C 9.185 17.888 8.615 17.888 8.264 17.536 L 0.264 9.536 C -0.088 9.185 -0.088 8.615 0.264 8.264 L 8.264 0.264 C 8.615 -0.088 9.185 -0.088 9.536 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.600,
    height: 18.600,
    viewBox: "0 0 10.600 18.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 2.699,
      width: 10.6,
      height: 18.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.219 0.381 C 10.727 0.888 10.727 1.712 10.219 2.219 L 3.138 9.3 L 10.219 16.381 C 10.727 16.888 10.727 17.712 10.219 18.219 C 9.712 18.727 8.888 18.727 8.381 18.219 L 0.381 10.219 C -0.127 9.712 -0.127 8.888 0.381 8.381 L 8.381 0.381 C 8.888 -0.127 9.712 -0.127 10.219 0.381 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.300,
    height: 14.800,
    viewBox: "0 0 8.300 14.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.1,
      top: 4.6,
      width: 8.3,
      height: 14.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.036 0.264 C 8.388 0.615 8.388 1.185 8.036 1.536 L 2.173 7.4 L 8.036 13.264 C 8.388 13.615 8.388 14.185 8.036 14.536 C 7.685 14.888 7.115 14.888 6.764 14.536 L 0.264 8.036 C -0.088 7.685 -0.088 7.115 0.264 6.764 L 6.764 0.264 C 7.115 -0.088 7.685 -0.088 8.036 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.600,
    height: 15.600,
    viewBox: "0 0 10.600 15.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.7,
      top: 4.2,
      width: 10.6,
      height: 15.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.156 0.381 C 10.748 0.888 10.748 1.712 10.156 2.219 L 3.656 7.8 L 10.156 13.381 C 10.748 13.888 10.748 14.712 10.156 15.219 C 9.565 15.727 8.606 15.727 8.015 15.219 L 0.444 8.719 C -0.148 8.212 -0.148 7.388 0.444 6.881 L 8.015 0.381 C 8.606 -0.127 9.565 -0.127 10.156 0.381 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.800,
    height: 14.800,
    viewBox: "0 0 9.800 14.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.199,
      top: 4.6,
      width: 9.8,
      height: 14.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.489 0.264 C 9.904 0.615 9.904 1.185 9.489 1.536 L 2.565 7.4 L 9.489 13.264 C 9.904 13.615 9.904 14.185 9.489 14.536 C 9.074 14.888 8.401 14.888 7.986 14.536 L 0.311 8.036 C -0.104 7.685 -0.104 7.115 0.311 6.764 L 7.986 0.264 C 8.401 -0.088 9.074 -0.088 9.489 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 16,
    viewBox: "0 0 9 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 4,
      width: 9,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.623 0.391 C 9.126 0.911 9.126 1.755 8.623 2.276 L 3.104 8 L 8.623 13.724 C 9.126 14.245 9.126 15.089 8.623 15.609 C 8.121 16.13 7.307 16.13 6.805 15.609 L 0.377 8.943 C -0.126 8.422 -0.126 7.578 0.377 7.057 L 6.805 0.391 C 7.307 -0.13 8.121 -0.13 8.623 0.391 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.800,
    height: 17.800,
    viewBox: "0 0 9.800 17.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.6,
      top: 3.099,
      width: 9.8,
      height: 17.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 0.264 C -0.088 0.615 -0.088 1.185 0.264 1.536 L 7.627 8.9 L 0.264 16.264 C -0.088 16.615 -0.088 17.185 0.264 17.536 C 0.615 17.888 1.185 17.888 1.536 17.536 L 9.536 9.536 C 9.888 9.185 9.888 8.615 9.536 8.264 L 1.536 0.264 C 1.185 -0.088 0.615 -0.088 0.264 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.600,
    height: 18.600,
    viewBox: "0 0 10.600 18.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.201,
      top: 2.699,
      width: 10.6,
      height: 18.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.381 0.381 C -0.127 0.888 -0.127 1.712 0.381 2.219 L 7.462 9.3 L 0.381 16.381 C -0.127 16.888 -0.127 17.712 0.381 18.219 C 0.888 18.727 1.712 18.727 2.219 18.219 L 10.219 10.219 C 10.727 9.712 10.727 8.888 10.219 8.381 L 2.219 0.381 C 1.712 -0.127 0.888 -0.127 0.381 0.381 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.800,
    height: 17.800,
    viewBox: "0 0 9.800 17.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 3.1,
      width: 9.8,
      height: 17.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 0.264 C -0.088 0.615 -0.088 1.185 0.264 1.536 L 7.627 8.9 L 0.264 16.264 C -0.088 16.615 -0.088 17.185 0.264 17.536 C 0.615 17.888 1.185 17.888 1.536 17.536 L 9.536 9.536 C 9.888 9.185 9.888 8.615 9.536 8.264 L 1.536 0.264 C 1.185 -0.088 0.615 -0.088 0.264 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 18,
    viewBox: "0 0 10 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 3,
      width: 10,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.359 0.368 C -0.12 0.86 -0.12 1.656 0.359 2.148 L 7.039 9 L 0.359 15.852 C -0.12 16.344 -0.12 17.14 0.359 17.632 C 0.838 18.123 1.615 18.123 2.094 17.632 L 9.641 9.89 C 10.12 9.398 10.12 8.602 9.641 8.11 L 2.094 0.368 C 1.615 -0.123 0.838 -0.123 0.359 0.368 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.300,
    height: 14.800,
    viewBox: "0 0 8.300 14.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.6,
      top: 4.6,
      width: 8.3,
      height: 14.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 0.264 C -0.088 0.615 -0.088 1.185 0.264 1.536 L 6.127 7.4 L 0.264 13.264 C -0.088 13.615 -0.088 14.185 0.264 14.536 C 0.615 14.888 1.185 14.888 1.536 14.536 L 8.036 8.036 C 8.388 7.685 8.388 7.115 8.036 6.764 L 1.536 0.264 C 1.185 -0.088 0.615 -0.088 0.264 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.100,
    height: 15.600,
    viewBox: "0 0 9.100 15.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.2,
      top: 4.2,
      width: 9.1,
      height: 15.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.381 0.381 C -0.127 0.888 -0.127 1.712 0.381 2.219 L 5.962 7.8 L 0.381 13.381 C -0.127 13.888 -0.127 14.712 0.381 15.219 C 0.888 15.727 1.712 15.727 2.219 15.219 L 8.719 8.719 C 9.227 8.212 9.227 7.388 8.719 6.881 L 2.219 0.381 C 1.712 -0.127 0.888 -0.127 0.381 0.381 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.800,
    height: 14.800,
    viewBox: "0 0 9.800 14.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.2,
      top: 4.6,
      width: 9.8,
      height: 14.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.311 0.264 C -0.104 0.615 -0.104 1.185 0.311 1.536 L 7.235 7.4 L 0.311 13.264 C -0.104 13.615 -0.104 14.185 0.311 14.536 C 0.726 14.888 1.399 14.888 1.814 14.536 L 9.489 8.036 C 9.904 7.685 9.904 7.115 9.489 6.764 L 1.814 0.264 C 1.399 -0.088 0.726 -0.088 0.311 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexGrow: 1,
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.600,
    height: 15.600,
    viewBox: "0 0 10.600 15.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.4,
      top: 4.2,
      width: 10.6,
      height: 15.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.444 0.381 C -0.148 0.888 -0.148 1.712 0.444 2.219 L 6.944 7.8 L 0.444 13.381 C -0.148 13.888 -0.148 14.712 0.444 15.219 C 1.035 15.727 1.994 15.727 2.585 15.219 L 10.156 8.719 C 10.748 8.212 10.748 7.388 10.156 6.881 L 2.585 0.381 C 1.994 -0.127 1.035 -0.127 0.444 0.381 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.697,
    height: 7.121,
    viewBox: "0 0 9.697 7.121",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.152,
      top: 9,
      width: 9.697,
      height: 7.121
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.711 5.707 C 6.073 6.493 5.754 6.885 5.37 7.028 C 5.034 7.153 4.663 7.153 4.327 7.028 C 3.943 6.885 3.624 6.493 2.986 5.707 L 1.528 3.913 C 0.512 2.662 0.003 2.037 0 1.51 C -0.003 1.051 0.204 0.617 0.562 0.33 C 0.973 0 1.779 0 3.391 0 L 6.306 0 C 7.918 0 8.724 0 9.136 0.33 C 9.493 0.617 9.7 1.051 9.697 1.51 C 9.694 2.037 9.185 2.662 8.169 3.913 L 6.711 5.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.697,
    height: 7.121,
    viewBox: "0 0 9.697 7.121",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.152,
      top: 7.879,
      width: 9.697,
      height: 7.121
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.711 1.414 C 6.073 0.629 5.754 0.236 5.37 0.094 C 5.034 -0.031 4.663 -0.031 4.327 0.094 C 3.943 0.236 3.624 0.629 2.986 1.414 L 1.528 3.208 C 0.512 4.459 0.003 5.085 0 5.612 C -0.003 6.07 0.204 6.505 0.562 6.791 C 0.973 7.121 1.779 7.121 3.391 7.121 L 6.306 7.121 C 7.918 7.121 8.724 7.121 9.135 6.791 C 9.493 6.505 9.7 6.07 9.697 5.612 C 9.694 5.085 9.185 4.459 8.169 3.208 L 6.711 1.414 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.857,
    height: 17.691,
    viewBox: "0 0 18.857 17.691",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.572,
      top: 3.154,
      width: 18.857,
      height: 17.691
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.429 0 C 4.224 0 0 3.281 0 7.317 C 0 9.834 1.631 12.031 4.12 13.37 L 3.074 17.207 C 3.054 17.283 3.058 17.364 3.085 17.438 C 3.113 17.512 3.162 17.576 3.227 17.621 C 3.291 17.666 3.368 17.69 3.447 17.691 C 3.526 17.691 3.603 17.667 3.668 17.622 L 8.25 14.577 C 8.637 14.577 9.033 14.643 9.429 14.643 C 14.633 14.643 18.857 11.361 18.857 7.317 C 18.857 3.272 14.633 0 9.429 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 11.591,
    viewBox: "0 0 15 11.591",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 6.203,
      width: 15,
      height: 11.591
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.079 0 C 2.678 0 2.336 0 2.055 0.023 C 1.761 0.047 1.474 0.1 1.2 0.239 C 0.786 0.45 0.45 0.786 0.239 1.2 C 0.1 1.474 0.047 1.761 0.023 2.055 C 0 2.336 0 2.678 0 3.079 L 0 8.512 C 0 8.913 0 9.255 0.023 9.536 C 0.047 9.83 0.1 10.117 0.239 10.391 C 0.45 10.805 0.786 11.141 1.2 11.351 C 1.474 11.491 1.761 11.544 2.055 11.568 C 2.336 11.591 2.678 11.591 3.079 11.591 L 11.921 11.591 C 12.322 11.591 12.664 11.591 12.945 11.568 C 13.239 11.544 13.526 11.491 13.8 11.351 C 14.214 11.141 14.55 10.805 14.761 10.391 C 14.9 10.117 14.953 9.83 14.977 9.536 C 15 9.255 15 8.913 15 8.512 L 15 3.079 C 15 2.678 15 2.336 14.977 2.055 C 14.953 1.761 14.9 1.474 14.761 1.2 C 14.55 0.786 14.214 0.45 13.8 0.239 C 13.526 0.1 13.239 0.047 12.945 0.023 C 12.664 0 12.322 0 11.921 0 L 3.079 0 Z M 1.939 1.405 C 2.039 1.373 2.186 1.365 2.803 1.365 L 12.197 1.365 C 12.814 1.365 12.961 1.373 13.061 1.405 C 13.314 1.488 13.513 1.687 13.596 1.94 C 13.619 2.014 13.63 2.112 13.634 2.403 L 8.47 5.847 C 7.94 6.201 7.814 6.273 7.698 6.301 C 7.57 6.331 7.437 6.331 7.309 6.301 C 7.193 6.273 7.068 6.201 6.537 5.848 L 1.366 2.402 C 1.37 2.112 1.381 2.013 1.404 1.94 C 1.487 1.687 1.686 1.488 1.939 1.405 Z M 1.364 4.04 L 1.364 8.789 C 1.364 9.406 1.372 9.553 1.404 9.652 C 1.487 9.906 1.686 10.105 1.939 10.188 C 2.039 10.22 2.186 10.228 2.803 10.228 L 12.197 10.228 C 12.814 10.228 12.961 10.22 13.061 10.188 C 13.314 10.105 13.513 9.906 13.596 9.652 C 13.628 9.553 13.636 9.406 13.636 8.789 L 13.636 4.04 L 9.146 7.036 C 8.741 7.307 8.4 7.535 8.016 7.627 C 7.679 7.708 7.329 7.708 6.992 7.627 C 6.608 7.535 6.267 7.308 5.862 7.037 L 1.364 4.04 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.800,
    height: 18.800,
    viewBox: "0 0 15.800 18.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,2.600,19.900)",
      transformOrigin: "0 0",
      width: 15.8,
      height: 18.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.536 0.264 C 8.185 -0.088 7.615 -0.088 7.264 0.264 L 0.264 7.264 C -0.088 7.615 -0.088 8.185 0.264 8.536 C 0.615 8.888 1.185 8.888 1.536 8.536 L 7 3.073 L 7 17.9 C 7 18.397 7.403 18.8 7.9 18.8 C 8.397 18.8 8.8 18.397 8.8 17.9 L 8.8 3.073 L 14.264 8.536 C 14.615 8.888 15.185 8.888 15.536 8.536 C 15.888 8.185 15.888 7.615 15.536 7.264 L 8.536 0.264 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.600,
    height: 19.600,
    viewBox: "0 0 16.600 19.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,2.200,20.300)",
      transformOrigin: "0 0",
      width: 16.6,
      height: 19.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.219 0.381 C 8.712 -0.127 7.888 -0.127 7.381 0.381 L 0.381 7.381 C -0.127 7.888 -0.127 8.712 0.381 9.219 C 0.888 9.727 1.712 9.727 2.219 9.219 L 7 4.438 L 7 18.3 C 7 19.018 7.582 19.6 8.3 19.6 C 9.018 19.6 9.6 19.018 9.6 18.3 L 9.6 4.438 L 14.381 9.219 C 14.888 9.727 15.712 9.727 16.219 9.219 C 16.727 8.712 16.727 7.888 16.219 7.381 L 9.219 0.381 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body54 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.800,
    height: 15.800,
    viewBox: "0 0 18.800 15.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.6,
      top: 4.1,
      width: 18.8,
      height: 15.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.536 8.536 C 18.888 8.185 18.888 7.615 18.536 7.264 L 11.536 0.264 C 11.185 -0.088 10.615 -0.088 10.264 0.264 C 9.912 0.615 9.912 1.185 10.264 1.536 L 15.727 7 L 0.9 7 C 0.403 7 0 7.403 0 7.9 C 0 8.397 0.403 8.8 0.9 8.8 L 15.727 8.8 L 10.264 14.264 C 9.912 14.615 9.912 15.185 10.264 15.536 C 10.615 15.888 11.185 15.888 11.536 15.536 L 18.536 8.536 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body55 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.600,
    height: 16.600,
    viewBox: "0 0 19.600 16.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.2,
      top: 3.7,
      width: 19.6,
      height: 16.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.219 7.381 C 19.727 7.888 19.727 8.712 19.219 9.219 L 12.219 16.219 C 11.712 16.727 10.888 16.727 10.381 16.219 C 9.873 15.712 9.873 14.888 10.381 14.381 L 15.161 9.6 L 1.3 9.6 C 0.582 9.6 0 9.018 0 8.3 C 0 7.582 0.582 7 1.3 7 L 15.161 7 L 10.381 2.219 C 9.873 1.712 9.873 0.888 10.381 0.381 C 10.888 -0.127 11.712 -0.127 12.219 0.381 L 19.219 7.381 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body56 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.800,
    height: 18.800,
    viewBox: "0 0 15.800 18.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.1,
      top: 2.6,
      width: 15.8,
      height: 18.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.264 18.536 C 7.615 18.888 8.185 18.888 8.536 18.536 L 15.536 11.536 C 15.888 11.185 15.888 10.615 15.536 10.264 C 15.185 9.912 14.615 9.912 14.264 10.264 L 8.8 15.727 L 8.8 0.9 C 8.8 0.403 8.397 0 7.9 0 C 7.403 0 7 0.403 7 0.9 L 7 15.727 L 1.536 10.264 C 1.185 9.912 0.615 9.912 0.264 10.264 C -0.088 10.615 -0.088 11.185 0.264 11.536 L 7.264 18.536 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body57 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.600,
    height: 19.600,
    viewBox: "0 0 16.600 19.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.7,
      top: 2.2,
      width: 16.6,
      height: 19.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.381 19.219 C 7.888 19.727 8.712 19.727 9.219 19.219 L 16.219 12.219 C 16.727 11.712 16.727 10.888 16.219 10.381 C 15.711 9.873 14.888 9.873 14.381 10.381 L 9.6 15.162 L 9.6 1.3 C 9.6 0.582 9.018 0 8.3 0 C 7.582 0 7 0.582 7 1.3 L 7 15.162 L 2.219 10.381 C 1.712 9.873 0.888 9.873 0.381 10.381 C -0.127 10.888 -0.127 11.712 0.381 12.219 L 7.381 19.219 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body58 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.800,
    height: 18.800,
    viewBox: "0 0 15.800 18.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.1,
      top: 2.6,
      width: 15.8,
      height: 18.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.536 0.264 C 8.185 -0.088 7.615 -0.088 7.264 0.264 L 0.264 7.264 C -0.088 7.615 -0.088 8.185 0.264 8.536 C 0.615 8.888 1.185 8.888 1.536 8.536 L 7 3.073 L 7 17.9 C 7 18.397 7.403 18.8 7.9 18.8 C 8.397 18.8 8.8 18.397 8.8 17.9 L 8.8 3.073 L 14.264 8.536 C 14.615 8.888 15.185 8.888 15.536 8.536 C 15.888 8.185 15.888 7.615 15.536 7.264 L 8.536 0.264 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body59 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.600,
    height: 19.600,
    viewBox: "0 0 16.600 19.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.7,
      top: 2.2,
      width: 16.6,
      height: 19.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.381 0.381 C 7.888 -0.127 8.712 -0.127 9.219 0.381 L 16.219 7.381 C 16.727 7.888 16.727 8.712 16.219 9.219 C 15.711 9.727 14.888 9.727 14.381 9.219 L 9.6 4.438 L 9.6 18.3 C 9.6 19.018 9.018 19.6 8.3 19.6 C 7.582 19.6 7 19.018 7 18.3 L 7 4.438 L 2.219 9.219 C 1.712 9.727 0.888 9.727 0.381 9.219 C -0.127 8.712 -0.127 7.888 0.381 7.381 L 7.381 0.381 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body60 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.65 1.8 C 5.315 1.8 1.8 5.315 1.8 9.65 C 1.8 13.985 5.315 17.5 9.65 17.5 C 11.011 17.5 12.289 17.154 13.403 16.547 C 13.607 16.435 13.847 16.407 14.071 16.468 L 16.185 17.045 C 16.645 17.17 16.93 17.247 17.139 17.284 C 17.213 17.297 17.261 17.302 17.287 17.303 C 17.293 17.298 17.298 17.293 17.303 17.287 C 17.302 17.261 17.297 17.214 17.284 17.139 C 17.247 16.93 17.17 16.645 17.045 16.185 L 16.468 14.071 C 16.407 13.847 16.435 13.607 16.546 13.403 C 17.154 12.289 17.5 11.011 17.5 9.65 C 17.5 5.315 13.985 1.8 9.65 1.8 Z M 0 9.65 C 0 4.32 4.32 0 9.65 0 C 14.979 0 19.3 4.32 19.3 9.65 C 19.3 11.188 18.939 12.645 18.297 13.937 L 18.792 15.75 C 18.904 16.16 19.003 16.526 19.057 16.826 C 19.11 17.131 19.147 17.517 19 17.903 C 18.807 18.408 18.408 18.807 17.902 19 C 17.517 19.147 17.131 19.11 16.826 19.057 C 16.526 19.004 16.16 18.904 15.75 18.792 L 13.937 18.298 C 12.645 18.939 11.188 19.3 9.65 19.3 C 4.32 19.3 0 14.98 0 9.65 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body61 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.65 0 C 4.32 0 0 4.32 0 9.65 C 0 14.979 4.32 19.3 9.65 19.3 C 11.188 19.3 12.645 18.939 13.937 18.297 L 15.749 18.792 C 16.16 18.904 16.525 19.003 16.826 19.057 C 17.131 19.11 17.517 19.147 17.902 19 C 18.408 18.807 18.807 18.408 19 17.902 C 19.147 17.517 19.11 17.131 19.056 16.826 C 19.003 16.526 18.904 16.16 18.792 15.75 L 18.297 13.937 C 18.939 12.645 19.3 11.188 19.3 9.65 C 19.3 4.32 14.979 0 9.65 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body62 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.800,
    height: 19.800,
    viewBox: "0 0 19.800 19.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.1,
      top: 2.1,
      width: 19.8,
      height: 19.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.9 5.9 C 10.9 6.452 10.452 6.9 9.9 6.9 C 9.348 6.9 8.9 6.452 8.9 5.9 C 8.9 5.348 9.348 4.9 9.9 4.9 C 10.452 4.9 10.9 5.348 10.9 5.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10.8 9.4 C 10.8 8.903 10.397 8.5 9.9 8.5 C 9.403 8.5 9 8.903 9 9.4 L 9 13.9 C 9 14.397 9.403 14.8 9.9 14.8 C 10.397 14.8 10.8 14.397 10.8 13.9 L 10.8 9.4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.368 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.368 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z M 9.9 1.8 C 5.426 1.8 1.8 5.426 1.8 9.9 C 1.8 14.374 5.426 18 9.9 18 C 14.373 18 18 14.374 18 9.9 C 18 5.426 14.373 1.8 9.9 1.8 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body63 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.800,
    height: 19.800,
    viewBox: "0 0 19.800 19.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.1,
      top: 2.1,
      width: 19.8,
      height: 19.8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9.9 C 0 4.432 4.432 0 9.9 0 C 15.367 0 19.8 4.432 19.8 9.9 C 19.8 15.368 15.367 19.8 9.9 19.8 C 4.432 19.8 0 15.368 0 9.9 Z M 10.9 5.9 C 10.9 6.452 10.452 6.9 9.9 6.9 C 9.348 6.9 8.9 6.452 8.9 5.9 C 8.9 5.348 9.348 4.9 9.9 4.9 C 10.452 4.9 10.9 5.348 10.9 5.9 Z M 9.9 8.5 C 10.397 8.5 10.8 8.903 10.8 9.4 L 10.8 13.9 C 10.8 14.397 10.397 14.8 9.9 14.8 C 9.403 14.8 9 14.397 9 13.9 L 9 9.4 C 9 8.903 9.403 8.5 9.9 8.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body64 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.800,
    height: 20.048,
    viewBox: "0 0 16.800 20.048",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.6,
      top: 2.35,
      width: 16.8,
      height: 20.048
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.803 16.53 C 11.83 17.555 10.86 18.393 10.134 18.974 C 9.735 19.294 9.328 19.608 8.904 19.896 C 8.604 20.099 8.194 20.098 7.894 19.895 C 7.471 19.608 7.065 19.293 6.666 18.974 C 5.94 18.393 4.97 17.555 3.997 16.53 C 2.091 14.521 0 11.613 0 8.4 C 0 3.761 3.761 0 8.4 0 C 13.039 0 16.8 3.761 16.8 8.4 C 16.8 11.613 14.709 14.521 12.803 16.53 Z M 8.4 1.8 C 4.755 1.8 1.8 4.755 1.8 8.4 C 1.8 10.881 3.459 13.348 5.303 15.291 C 6.514 16.567 7.736 17.544 8.4 18.041 C 9.064 17.544 10.286 16.567 11.497 15.291 C 13.341 13.348 15 10.881 15 8.4 C 15 4.755 12.045 1.8 8.4 1.8 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.4 4.75 C 6.384 4.75 4.75 6.384 4.75 8.4 C 4.75 10.416 6.384 12.05 8.4 12.05 C 10.416 12.05 12.05 10.416 12.05 8.4 C 12.05 6.384 10.416 4.75 8.4 4.75 Z M 6.55 8.4 C 6.55 7.378 7.378 6.55 8.4 6.55 C 9.422 6.55 10.25 7.378 10.25 8.4 C 10.25 9.422 9.422 10.25 8.4 10.25 C 7.378 10.25 6.55 9.422 6.55 8.4 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body65 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--label-normal)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(RatioVertical, {
    ratio: "1:1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.800,
    height: 20.048,
    viewBox: "0 0 16.800 20.048",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.6,
      top: 2.349,
      width: 16.8,
      height: 20.048
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.134 18.974 C 10.86 18.393 11.83 17.555 12.803 16.53 C 14.709 14.521 16.8 11.613 16.8 8.4 C 16.8 3.761 13.039 0 8.4 0 C 3.761 0 0 3.761 0 8.4 C 0 11.613 2.091 14.521 3.997 16.53 C 4.97 17.555 5.94 18.393 6.666 18.974 C 7.065 19.293 7.471 19.608 7.894 19.895 C 8.194 20.098 8.604 20.099 8.904 19.896 C 9.328 19.608 9.735 19.294 10.134 18.974 Z M 11.15 8.4 C 11.15 9.919 9.919 11.15 8.4 11.15 C 6.881 11.15 5.65 9.919 5.65 8.4 C 5.65 6.881 6.881 5.65 8.4 5.65 C 9.919 5.65 11.15 6.881 11.15 8.4 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body66 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--foreground-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body67 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21,
    height: 18.643,
    viewBox: "0 0 21 18.643",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.5,
      top: 3.1,
      width: 21,
      height: 18.643
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.3 C 0 2.837 2.67 0 6.1 0 C 7.842 0 9.397 0.737 10.5 1.919 C 11.603 0.737 13.157 0 14.9 0 C 18.33 0 21 2.837 21 6.3 C 21 7.94 20.406 9.321 19.479 10.603 C 18.569 11.861 17.303 13.068 15.912 14.36 L 15.908 14.363 L 12.169 17.791 C 11.996 17.95 11.83 18.102 11.679 18.22 C 11.514 18.349 11.312 18.482 11.056 18.56 C 10.693 18.671 10.306 18.671 9.944 18.56 C 9.688 18.482 9.486 18.349 9.321 18.22 C 9.17 18.102 9.004 17.95 8.831 17.791 L 5.092 14.363 L 5.088 14.36 C 3.697 13.068 2.431 11.861 1.521 10.603 C 0.594 9.321 0 7.94 0 6.3 Z M 6.1 1.8 C 3.73 1.8 1.8 3.763 1.8 6.3 C 1.8 7.46 2.206 8.479 2.979 9.547 C 3.769 10.639 4.902 11.731 6.31 13.038 L 10.432 16.817 C 10.471 16.852 10.529 16.852 10.568 16.817 L 14.69 13.038 C 16.098 11.731 17.231 10.639 18.021 9.547 C 18.793 8.479 19.2 7.46 19.2 6.3 C 19.2 3.763 17.27 1.8 14.9 1.8 C 13.367 1.8 12.032 2.613 11.269 3.869 C 11.106 4.137 10.814 4.301 10.5 4.301 C 10.186 4.301 9.894 4.137 9.731 3.869 C 8.968 2.613 7.633 1.8 6.1 1.8 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body68 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21,
    height: 18.643,
    viewBox: "0 0 21 18.643",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.5,
      top: 3.1,
      width: 21,
      height: 18.643
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.1 0 C 2.67 0 0 2.837 0 6.3 C 0 7.94 0.594 9.321 1.521 10.603 C 2.431 11.861 3.697 13.068 5.088 14.36 L 5.092 14.363 L 8.831 17.791 C 9.004 17.95 9.17 18.102 9.321 18.22 C 9.486 18.349 9.688 18.482 9.944 18.56 C 10.306 18.671 10.693 18.671 11.056 18.56 C 11.312 18.482 11.514 18.349 11.679 18.22 C 11.83 18.102 11.996 17.95 12.169 17.791 L 15.908 14.363 L 15.912 14.36 C 17.303 13.068 18.569 11.861 19.479 10.603 C 20.406 9.321 21 7.94 21 6.3 C 21 2.837 18.33 0 14.9 0 C 13.157 0 11.603 0.737 10.5 1.919 C 9.397 0.737 7.842 0 6.1 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body69 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.1,
      top: 2.1,
      width: 19.3,
      height: 19.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.9 0 C 3.537 0 0 3.537 0 7.9 C 0 12.263 3.537 15.8 7.9 15.8 C 9.757 15.8 11.465 15.159 12.814 14.086 L 17.764 19.036 C 18.115 19.388 18.685 19.388 19.036 19.036 C 19.388 18.685 19.388 18.115 19.036 17.764 L 14.086 12.813 C 15.159 11.465 15.8 9.757 15.8 7.9 C 15.8 3.537 12.263 0 7.9 0 Z M 1.8 7.9 C 1.8 4.531 4.531 1.8 7.9 1.8 C 11.269 1.8 14 4.531 14 7.9 C 14 11.269 11.269 14 7.9 14 C 4.531 14 1.8 11.269 1.8 7.9 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body70 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 19.694,
    viewBox: "0 0 22 19.694",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 2,
      width: 22,
      height: 19.694
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 10 C 8.53 10.14 8.85 10.69 8.71 11.22 L 7.41 16.05 C 7.27 16.59 6.72 16.9 6.19 16.76 C 6.063 16.728 5.943 16.671 5.839 16.591 C 5.735 16.512 5.648 16.412 5.583 16.298 C 5.519 16.184 5.478 16.058 5.464 15.928 C 5.449 15.797 5.462 15.665 5.5 15.54 L 6.78 10.71 C 6.92 10.17 7.47 9.86 8 10 Z M 12 10 C 12.53 10.14 12.85 10.69 12.71 11.22 L 10.64 18.95 C 10.5 19.5 9.95 19.8 9.41 19.66 C 8.88 19.5 8.56 18.97 8.7 18.43 L 10.78 10.71 C 10.92 10.17 11.47 9.86 12 10 Z M 16 10 C 16.53 10.14 16.85 10.69 16.71 11.22 L 15.41 16.05 C 15.27 16.59 14.72 16.9 14.19 16.76 C 14.063 16.728 13.943 16.671 13.839 16.591 C 13.735 16.512 13.648 16.412 13.583 16.298 C 13.519 16.184 13.478 16.058 13.464 15.928 C 13.449 15.797 13.462 15.665 13.5 15.54 L 14.78 10.71 C 14.92 10.17 15.47 9.86 16 10 Z M 16 8 L 16 7 C 16 5.674 15.473 4.402 14.536 3.464 C 13.598 2.527 12.326 2 11 2 C 8.5 2 6.45 3.82 6.06 6.19 C 5.73 6.07 5.37 6 5 6 C 4.204 6 3.441 6.316 2.879 6.879 C 2.316 7.441 2 8.204 2 9 C 2 10.11 2.6 11.08 3.5 11.6 L 3.5 11.59 C 4 11.87 4.14 12.5 3.87 12.96 C 3.59 13.43 3 13.6 2.5 13.32 L 2.5 13.33 C 1.739 12.893 1.106 12.262 0.667 11.501 C 0.228 10.741 -0.002 9.878 0 9 C 0 7.674 0.527 6.402 1.464 5.464 C 2.402 4.527 3.674 4 5 4 C 6 1.65 8.3 0 11 0 C 14.43 0 17.24 2.66 17.5 6.03 L 18 6 C 19.061 6 20.078 6.421 20.828 7.172 C 21.579 7.922 22 8.939 22 10 C 22 11.5 21.2 12.77 20 13.46 C 19.5 13.73 18.91 13.57 18.63 13.09 C 18.36 12.61 18.5 12 19 11.72 L 19 11.73 C 19.6 11.39 20 10.74 20 10 C 20 9.47 19.789 8.961 19.414 8.586 C 19.039 8.211 18.53 8 18 8 L 16 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body71 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.500,
    height: 18,
    viewBox: "0 0 16.500 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.75,
      top: 3,
      width: 16.5,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.25 C -0.414 5.25 -0.75 5.586 -0.75 6 C -0.75 6.414 -0.414 6.75 0 6.75 L 0 6 L 0 5.25 Z M 16.5 6.75 C 16.914 6.75 17.25 6.414 17.25 6 C 17.25 5.586 16.914 5.25 16.5 5.25 L 16.5 6 L 16.5 6.75 Z M 11.25 3 C 11.25 3.414 11.586 3.75 12 3.75 C 12.414 3.75 12.75 3.414 12.75 3 L 12 3 L 11.25 3 Z M 12.75 0 C 12.75 -0.414 12.414 -0.75 12 -0.75 C 11.586 -0.75 11.25 -0.414 11.25 0 L 12 0 L 12.75 0 Z M 3.75 3 C 3.75 3.414 4.086 3.75 4.5 3.75 C 4.914 3.75 5.25 3.414 5.25 3 L 4.5 3 L 3.75 3 Z M 5.25 0 C 5.25 -0.414 4.914 -0.75 4.5 -0.75 C 4.086 -0.75 3.75 -0.414 3.75 0 L 4.5 0 L 5.25 0 Z M 15 1.5 L 15 0.75 L 15 1.5 Z M 1.5 1.5 L 1.5 0.75 L 1.5 1.5 Z M 0 3 L -0.75 3 L 0 3 Z M 0 16.5 L -0.75 16.5 L 0 16.5 Z M 0 6 L 0 6.75 L 16.5 6.75 L 16.5 6 L 16.5 5.25 L 0 5.25 L 0 6 Z M 12 3 L 12.75 3 L 12.75 0 L 12 0 L 11.25 0 L 11.25 3 L 12 3 Z M 4.5 3 L 5.25 3 L 5.25 0 L 4.5 0 L 3.75 0 L 3.75 3 L 4.5 3 Z M 1.5 18 L 1.5 18.75 L 15 18.75 L 15 18 L 15 17.25 L 1.5 17.25 L 1.5 18 Z M 15 18 L 15 18.75 C 15.597 18.75 16.169 18.513 16.591 18.091 L 16.061 17.561 L 15.53 17.03 C 15.39 17.171 15.199 17.25 15 17.25 L 15 18 Z M 16.061 17.561 L 16.591 18.091 C 17.013 17.669 17.25 17.097 17.25 16.5 L 16.5 16.5 L 15.75 16.5 C 15.75 16.699 15.671 16.89 15.53 17.03 L 16.061 17.561 Z M 16.5 16.5 L 17.25 16.5 L 17.25 3 L 16.5 3 L 15.75 3 L 15.75 16.5 L 16.5 16.5 Z M 16.5 3 L 17.25 3 C 17.25 2.403 17.013 1.831 16.591 1.409 L 16.061 1.939 L 15.53 2.47 C 15.671 2.61 15.75 2.801 15.75 3 L 16.5 3 Z M 16.061 1.939 L 16.591 1.409 C 16.169 0.987 15.597 0.75 15 0.75 L 15 1.5 L 15 2.25 C 15.199 2.25 15.39 2.329 15.53 2.47 L 16.061 1.939 Z M 15 1.5 L 15 0.75 L 1.5 0.75 L 1.5 1.5 L 1.5 2.25 L 15 2.25 L 15 1.5 Z M 1.5 1.5 L 1.5 0.75 C 0.903 0.75 0.331 0.987 -0.091 1.409 L 0.439 1.939 L 0.97 2.47 C 1.11 2.329 1.301 2.25 1.5 2.25 L 1.5 1.5 Z M 0.439 1.939 L -0.091 1.409 C -0.513 1.831 -0.75 2.403 -0.75 3 L 0 3 L 0.75 3 C 0.75 2.801 0.829 2.61 0.97 2.47 L 0.439 1.939 Z M 0 3 L -0.75 3 L -0.75 16.5 L 0 16.5 L 0.75 16.5 L 0.75 3 L 0 3 Z M 0 16.5 L -0.75 16.5 C -0.75 17.097 -0.513 17.669 -0.091 18.091 L 0.439 17.561 L 0.97 17.03 C 0.829 16.89 0.75 16.699 0.75 16.5 L 0 16.5 Z M 0.439 17.561 L -0.091 18.091 C 0.331 18.513 0.903 18.75 1.5 18.75 L 1.5 18 L 1.5 17.25 C 1.301 17.25 1.11 17.171 0.97 17.03 L 0.439 17.561 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body72 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.311,
    height: 18,
    viewBox: "0 0 17.311 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.002,
      top: 2.992,
      width: 17.311,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.998 0.008 L 8.248 0.008 C 8.248 0.422 8.584 0.758 8.998 0.758 L 8.998 0.008 Z M 9.391 0.008 L 9.901 0.557 C 10.127 0.348 10.202 0.021 10.089 -0.266 C 9.976 -0.553 9.699 -0.742 9.391 -0.742 L 9.391 0.008 Z M 17.311 12.454 L 18.003 12.742 C 18.119 12.463 18.056 12.141 17.844 11.926 C 17.631 11.711 17.31 11.645 17.029 11.759 L 17.311 12.454 Z M 8.998 0 L 9.748 0 C 9.748 -0.199 9.669 -0.39 9.528 -0.53 C 9.387 -0.671 9.197 -0.75 8.998 -0.75 L 8.998 0 Z M 8.998 0.008 L 8.998 0.758 L 9.391 0.758 L 9.391 0.008 L 9.391 -0.742 L 8.998 -0.742 L 8.998 0.008 Z M 9.391 0.008 L 8.88 -0.541 C 7.467 0.772 6.559 2.538 6.313 4.452 L 7.057 4.547 L 7.801 4.643 C 8.002 3.077 8.745 1.632 9.901 0.557 L 9.391 0.008 Z M 7.057 4.547 L 6.313 4.452 C 6.068 6.365 6.5 8.304 7.536 9.931 L 8.169 9.529 L 8.801 9.126 C 7.954 7.795 7.6 6.208 7.801 4.643 L 7.057 4.547 Z M 8.169 9.529 L 7.536 9.931 C 8.571 11.559 10.145 12.772 11.982 13.36 L 12.21 12.645 L 12.439 11.931 C 10.936 11.45 9.649 10.458 8.801 9.126 L 8.169 9.529 Z M 12.21 12.645 L 11.982 13.36 C 13.819 13.948 15.804 13.873 17.592 13.149 L 17.311 12.454 L 17.029 11.759 C 15.566 12.351 13.942 12.412 12.439 11.931 L 12.21 12.645 Z M 17.311 12.454 L 16.618 12.166 C 16.045 13.545 15.108 14.743 13.908 15.631 L 14.354 16.234 L 14.8 16.837 C 16.219 15.787 17.326 14.372 18.003 12.742 L 17.311 12.454 Z M 14.354 16.234 L 13.908 15.631 C 12.707 16.52 11.288 17.066 9.802 17.211 L 9.875 17.957 L 9.948 18.704 C 11.704 18.532 13.381 17.887 14.8 16.837 L 14.354 16.234 Z M 9.875 17.957 L 9.802 17.211 C 8.315 17.356 6.817 17.095 5.468 16.456 L 5.147 17.133 L 4.826 17.811 C 6.421 18.567 8.191 18.875 9.948 18.704 L 9.875 17.957 Z M 5.147 17.133 L 5.468 16.456 C 4.118 15.816 2.967 14.822 2.138 13.58 L 1.514 13.997 L 0.891 14.413 C 1.871 15.881 3.231 17.056 4.826 17.811 L 5.147 17.133 Z M 1.514 13.997 L 2.138 13.58 C 1.309 12.338 0.833 10.894 0.76 9.402 L 0.011 9.439 L -0.738 9.476 C -0.652 11.238 -0.089 12.945 0.891 14.413 L 1.514 13.997 Z M 0.011 9.439 L 0.76 9.402 C 0.687 7.911 1.02 6.427 1.725 5.11 L 1.063 4.757 L 0.402 4.403 C -0.43 5.959 -0.824 7.713 -0.738 9.476 L 0.011 9.439 Z M 1.063 4.757 L 1.725 5.11 C 2.429 3.793 3.477 2.692 4.758 1.924 L 4.373 1.281 L 3.987 0.637 C 2.473 1.545 1.234 2.846 0.402 4.403 L 1.063 4.757 Z M 4.373 1.281 L 4.758 1.924 C 6.039 1.156 7.505 0.75 8.998 0.75 L 8.998 0 L 8.998 -0.75 C 7.233 -0.75 5.501 -0.27 3.987 0.637 L 4.373 1.281 Z M 8.998 0 L 8.248 0 L 8.248 0.008 L 8.998 0.008 L 9.748 0.008 L 9.748 0 L 8.998 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body73 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--accent)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 4,
      width: 20,
      height: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 5,
    viewBox: "0 0 15 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 11,
      width: 15,
      height: 5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 2.5 L 15.75 2.5 L 15 2.5 Z M 5 2.5 L 4.25 2.5 L 5 2.5 Z M 15 2.5 L 14.25 2.5 C 14.25 2.964 14.066 3.409 13.737 3.737 L 14.268 4.268 L 14.798 4.798 C 15.408 4.189 15.75 3.362 15.75 2.5 L 15 2.5 Z M 14.268 4.268 L 13.737 3.737 C 13.409 4.066 12.964 4.25 12.5 4.25 L 12.5 5 L 12.5 5.75 C 13.362 5.75 14.189 5.408 14.798 4.798 L 14.268 4.268 Z M 12.5 5 L 12.5 4.25 C 12.036 4.25 11.591 4.066 11.263 3.737 L 10.732 4.268 L 10.202 4.798 C 10.811 5.408 11.638 5.75 12.5 5.75 L 12.5 5 Z M 10.732 4.268 L 11.263 3.737 C 10.934 3.409 10.75 2.964 10.75 2.5 L 10 2.5 L 9.25 2.5 C 9.25 3.362 9.592 4.189 10.202 4.798 L 10.732 4.268 Z M 10 2.5 L 10.75 2.5 C 10.75 2.036 10.934 1.591 11.263 1.263 L 10.732 0.732 L 10.202 0.202 C 9.592 0.811 9.25 1.638 9.25 2.5 L 10 2.5 Z M 10.732 0.732 L 11.263 1.263 C 11.591 0.934 12.036 0.75 12.5 0.75 L 12.5 0 L 12.5 -0.75 C 11.638 -0.75 10.811 -0.408 10.202 0.202 L 10.732 0.732 Z M 12.5 0 L 12.5 0.75 C 12.964 0.75 13.409 0.934 13.737 1.263 L 14.268 0.732 L 14.798 0.202 C 14.189 -0.408 13.362 -0.75 12.5 -0.75 L 12.5 0 Z M 14.268 0.732 L 13.737 1.263 C 14.066 1.591 14.25 2.036 14.25 2.5 L 15 2.5 L 15.75 2.5 C 15.75 1.638 15.408 0.811 14.798 0.202 L 14.268 0.732 Z M 5 2.5 L 4.25 2.5 C 4.25 2.964 4.066 3.409 3.737 3.737 L 4.268 4.268 L 4.798 4.798 C 5.408 4.189 5.75 3.362 5.75 2.5 L 5 2.5 Z M 4.268 4.268 L 3.737 3.737 C 3.409 4.066 2.964 4.25 2.5 4.25 L 2.5 5 L 2.5 5.75 C 3.362 5.75 4.189 5.408 4.798 4.798 L 4.268 4.268 Z M 2.5 5 L 2.5 4.25 C 2.036 4.25 1.591 4.066 1.263 3.737 L 0.732 4.268 L 0.202 4.798 C 0.811 5.408 1.638 5.75 2.5 5.75 L 2.5 5 Z M 0.732 4.268 L 1.263 3.737 C 0.934 3.409 0.75 2.964 0.75 2.5 L 0 2.5 L -0.75 2.5 C -0.75 3.362 -0.408 4.189 0.202 4.798 L 0.732 4.268 Z M 0 2.5 L 0.75 2.5 C 0.75 2.036 0.934 1.591 1.263 1.263 L 0.732 0.732 L 0.202 0.202 C -0.408 0.811 -0.75 1.638 -0.75 2.5 L 0 2.5 Z M 0.732 0.732 L 1.263 1.263 C 1.591 0.934 2.036 0.75 2.5 0.75 L 2.5 0 L 2.5 -0.75 C 1.638 -0.75 0.811 -0.408 0.202 0.202 L 0.732 0.732 Z M 2.5 0 L 2.5 0.75 C 2.964 0.75 3.409 0.934 3.737 1.263 L 4.268 0.732 L 4.798 0.202 C 4.189 -0.408 3.362 -0.75 2.5 -0.75 L 2.5 0 Z M 4.268 0.732 L 3.737 1.263 C 4.066 1.591 4.25 2.036 4.25 2.5 L 5 2.5 L 5.75 2.5 C 5.75 1.638 5.408 0.811 4.798 0.202 L 4.268 0.732 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 13.500,
    viewBox: "0 0 20 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.5 14.25 C 12.914 14.25 13.25 13.914 13.25 13.5 C 13.25 13.086 12.914 12.75 12.5 12.75 L 12.5 13.5 L 12.5 14.25 Z M 7.5 12.75 C 7.086 12.75 6.75 13.086 6.75 13.5 C 6.75 13.914 7.086 14.25 7.5 14.25 L 7.5 13.5 L 7.5 12.75 Z M 17.5 12.75 C 17.086 12.75 16.75 13.086 16.75 13.5 C 16.75 13.914 17.086 14.25 17.5 14.25 L 17.5 13.5 L 17.5 12.75 Z M 18.685 13.488 L 18.592 12.744 L 18.588 12.744 L 18.685 13.488 Z M 19.988 12.186 L 19.244 12.09 L 19.244 12.093 L 19.988 12.186 Z M 20 9 L 20.75 9 L 20 9 Z M 13.5 1.75 C 13.086 1.75 12.75 2.086 12.75 2.5 C 12.75 2.914 13.086 3.25 13.5 3.25 L 13.5 2.5 L 13.5 1.75 Z M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 12.56 0.44 L 12.029 0.97 L 12.031 0.972 L 12.56 0.44 Z M 12.25 11.5 C 12.25 11.914 12.586 12.25 13 12.25 C 13.414 12.25 13.75 11.914 13.75 11.5 L 13 11.5 L 12.25 11.5 Z M 0.75 8.75 C 0.75 8.336 0.414 8 0 8 C -0.414 8 -0.75 8.336 -0.75 8.75 L 0 8.75 L 0.75 8.75 Z M 0.201 12.75 L 0.851 12.375 L 0.85 12.375 L 0.201 12.75 Z M 0.75 13.299 L 1.125 12.65 L 1.125 12.649 L 0.75 13.299 Z M 2.5 14.25 C 2.914 14.25 3.25 13.914 3.25 13.5 C 3.25 13.086 2.914 12.75 2.5 12.75 L 2.5 13.5 L 2.5 14.25 Z M 0 2.25 C -0.414 2.25 -0.75 2.586 -0.75 3 C -0.75 3.414 -0.414 3.75 0 3.75 L 0 3 L 0 2.25 Z M 6 3.75 C 6.414 3.75 6.75 3.414 6.75 3 C 6.75 2.586 6.414 2.25 6 2.25 L 6 3 L 6 3.75 Z M 0 5.25 C -0.414 5.25 -0.75 5.586 -0.75 6 C -0.75 6.414 -0.414 6.75 0 6.75 L 0 6 L 0 5.25 Z M 4 6.75 C 4.414 6.75 4.75 6.414 4.75 6 C 4.75 5.586 4.414 5.25 4 5.25 L 4 6 L 4 6.75 Z M 12.5 13.5 L 12.5 12.75 L 7.5 12.75 L 7.5 13.5 L 7.5 14.25 L 12.5 14.25 L 12.5 13.5 Z M 17.5 13.5 L 17.5 14.25 L 18.263 14.25 L 18.263 13.5 L 18.263 12.75 L 17.5 12.75 L 17.5 13.5 Z M 18.263 13.5 L 18.263 14.25 C 18.459 14.25 18.63 14.252 18.782 14.232 L 18.685 13.488 L 18.588 12.744 C 18.556 12.748 18.507 12.75 18.263 12.75 L 18.263 13.5 Z M 18.685 13.488 L 18.778 14.232 C 19.274 14.17 19.736 13.945 20.09 13.591 L 19.56 13.061 L 19.03 12.53 C 18.912 12.648 18.758 12.723 18.592 12.744 L 18.685 13.488 Z M 19.56 13.061 L 20.09 13.591 C 20.444 13.237 20.67 12.776 20.732 12.279 L 19.988 12.186 L 19.244 12.093 C 19.223 12.258 19.148 12.412 19.03 12.53 L 19.56 13.061 Z M 19.988 12.186 L 20.732 12.282 C 20.752 12.129 20.75 11.96 20.75 11.763 L 20 11.763 L 19.25 11.763 C 19.25 12.006 19.248 12.057 19.244 12.09 L 19.988 12.186 Z M 20 11.763 L 20.75 11.763 L 20.75 9 L 20 9 L 19.25 9 L 19.25 11.763 L 20 11.763 Z M 20 9 L 20.75 9 C 20.75 7.077 19.986 5.233 18.627 3.873 L 18.096 4.404 L 17.566 4.934 C 18.644 6.012 19.25 7.475 19.25 9 L 20 9 Z M 18.096 4.404 L 18.627 3.873 C 17.267 2.514 15.423 1.75 13.5 1.75 L 13.5 2.5 L 13.5 3.25 C 15.025 3.25 16.488 3.856 17.566 4.934 L 18.096 4.404 Z M 0 0 L 0 0.75 L 10 0.75 L 10 0 L 10 -0.75 L 0 -0.75 L 0 0 Z M 10 0 L 10 0.75 C 10.728 0.75 11.199 0.752 11.546 0.798 C 11.871 0.842 11.972 0.913 12.029 0.97 L 12.56 0.44 L 13.091 -0.09 C 12.709 -0.473 12.237 -0.622 11.746 -0.688 C 11.276 -0.752 10.686 -0.75 10 -0.75 L 10 0 Z M 12.56 0.44 L 12.031 0.972 C 12.087 1.028 12.158 1.129 12.202 1.454 C 12.248 1.8 12.25 2.271 12.25 3 L 13 3 L 13.75 3 C 13.75 2.314 13.752 1.724 13.688 1.254 C 13.622 0.762 13.473 0.29 13.089 -0.092 L 12.56 0.44 Z M 13 3 L 12.25 3 L 12.25 11.5 L 13 11.5 L 13.75 11.5 L 13.75 3 L 13 3 Z M 0 8.75 L -0.75 8.75 L -0.75 11 L 0 11 L 0.75 11 L 0.75 8.75 L 0 8.75 Z M 0 11 L -0.75 11 C -0.75 11.454 -0.751 11.844 -0.722 12.163 C -0.692 12.492 -0.626 12.818 -0.448 13.125 L 0.201 12.75 L 0.85 12.375 C 0.827 12.334 0.792 12.252 0.772 12.027 C 0.751 11.792 0.75 11.481 0.75 11 L 0 11 Z M 0.201 12.75 L -0.449 13.125 C -0.251 13.467 0.033 13.751 0.375 13.949 L 0.75 13.299 L 1.125 12.649 C 1.011 12.584 0.916 12.489 0.851 12.375 L 0.201 12.75 Z M 0.75 13.299 L 0.375 13.948 C 0.682 14.126 1.008 14.192 1.337 14.222 C 1.656 14.251 2.046 14.25 2.5 14.25 L 2.5 13.5 L 2.5 12.75 C 2.019 12.75 1.708 12.749 1.473 12.728 C 1.248 12.708 1.166 12.673 1.125 12.65 L 0.75 13.299 Z M 0 3 L 0 3.75 L 6 3.75 L 6 3 L 6 2.25 L 0 2.25 L 0 3 Z M 0 6 L 0 6.75 L 4 6.75 L 4 6 L 4 5.25 L 0 5.25 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body74 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19,
    height: 20,
    viewBox: "0 0 19 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2,
      width: 19,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19 14 L 19 12 L 11 7 L 11 1.5 C 11 1.102 10.842 0.721 10.561 0.439 C 10.279 0.158 9.898 0 9.5 0 C 9.102 0 8.721 0.158 8.439 0.439 C 8.158 0.721 8 1.102 8 1.5 L 8 7 L 0 12 L 0 14 L 8 11.5 L 8 17 L 6 18.5 L 6 20 L 9.5 19 L 13 20 L 13 18.5 L 11 17 L 11 11.5 L 19 14 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body75 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 14,
    viewBox: "0 0 7 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.5,
      top: 5,
      width: 7,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.293 14.707 C 6.683 15.098 7.317 15.098 7.707 14.707 C 8.098 14.317 8.098 13.683 7.707 13.293 L 7 14 L 6.293 14.707 Z M 0 7 L -0.707 6.293 C -1.098 6.683 -1.098 7.317 -0.707 7.707 L 0 7 Z M 7.707 0.707 C 8.098 0.317 8.098 -0.317 7.707 -0.707 C 7.317 -1.098 6.683 -1.098 6.293 -0.707 L 7 0 L 7.707 0.707 Z M 7 14 L 7.707 13.293 L 0.707 6.293 L 0 7 L -0.707 7.707 L 6.293 14.707 L 7 14 Z M 0 7 L 0.707 7.707 L 7.707 0.707 L 7 0 L 6.293 -0.707 L -0.707 6.293 L 0 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body76 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 12,
    viewBox: "0 0 6 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 6,
      width: 6,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.399 12.601 C 5.731 12.933 6.269 12.933 6.601 12.601 C 6.933 12.269 6.933 11.731 6.601 11.399 L 6 12 L 5.399 12.601 Z M 0 6 L -0.601 5.399 C -0.933 5.731 -0.933 6.269 -0.601 6.601 L 0 6 Z M 6.601 0.601 C 6.933 0.269 6.933 -0.269 6.601 -0.601 C 6.269 -0.933 5.731 -0.933 5.399 -0.601 L 6 0 L 6.601 0.601 Z M 6 12 L 6.601 11.399 L 0.601 5.399 L 0 6 L -0.601 6.601 L 5.399 12.601 L 6 12 Z M 0 6 L 0.601 6.601 L 6.601 0.601 L 6 0 L 5.399 -0.601 L -0.601 5.399 L 0 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body77 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.692,
    height: 12.604,
    viewBox: "0 0 15.692 12.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.154,
      top: 5.698,
      width: 15.692,
      height: 12.604
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.091 4.022 C -0.237 4.227 -0.337 4.659 -0.132 4.986 C 0.073 5.314 0.505 5.414 0.833 5.209 L 0.462 4.615 L 0.091 4.022 Z M 7.846 0 L 8.217 -0.594 C 7.99 -0.735 7.702 -0.735 7.475 -0.594 L 7.846 0 Z M 14.86 5.209 C 15.188 5.414 15.619 5.314 15.824 4.986 C 16.029 4.659 15.93 4.227 15.602 4.022 L 15.231 4.615 L 14.86 5.209 Z M 2.085 4.615 C 2.085 4.229 1.771 3.915 1.385 3.915 C 0.998 3.915 0.685 4.229 0.685 4.615 L 1.385 4.615 L 2.085 4.615 Z M 0.685 12 C 0.685 12.387 0.998 12.7 1.385 12.7 C 1.771 12.7 2.085 12.387 2.085 12 L 1.385 12 L 0.685 12 Z M 15.008 4.615 C 15.008 4.229 14.694 3.915 14.308 3.915 C 13.921 3.915 13.608 4.229 13.608 4.615 L 14.308 4.615 L 15.008 4.615 Z M 13.608 12 C 13.608 12.387 13.921 12.7 14.308 12.7 C 14.694 12.7 15.008 12.387 15.008 12 L 14.308 12 L 13.608 12 Z M 5.777 4.615 C 5.777 4.229 5.464 3.915 5.077 3.915 C 4.69 3.915 4.377 4.229 4.377 4.615 L 5.077 4.615 L 5.777 4.615 Z M 4.377 12 C 4.377 12.387 4.69 12.7 5.077 12.7 C 5.464 12.7 5.777 12.387 5.777 12 L 5.077 12 L 4.377 12 Z M 11.315 4.615 C 11.315 4.229 11.002 3.915 10.615 3.915 C 10.229 3.915 9.915 4.229 9.915 4.615 L 10.615 4.615 L 11.315 4.615 Z M 9.915 12 C 9.915 12.387 10.229 12.7 10.615 12.7 C 11.002 12.7 11.315 12.387 11.315 12 L 10.615 12 L 9.915 12 Z M 0 11.904 C -0.387 11.904 -0.7 12.217 -0.7 12.604 C -0.7 12.99 -0.387 13.304 0 13.304 L 0 12.604 L 0 11.904 Z M 15.692 13.304 C 16.079 13.304 16.392 12.99 16.392 12.604 C 16.392 12.217 16.079 11.904 15.692 11.904 L 15.692 12.604 L 15.692 13.304 Z M 0.462 4.615 L 0.833 5.209 L 8.217 0.594 L 7.846 0 L 7.475 -0.594 L 0.091 4.022 L 0.462 4.615 Z M 7.846 0 L 7.475 0.594 L 14.86 5.209 L 15.231 4.615 L 15.602 4.022 L 8.217 -0.594 L 7.846 0 Z M 1.385 4.615 L 0.685 4.615 L 0.685 12 L 1.385 12 L 2.085 12 L 2.085 4.615 L 1.385 4.615 Z M 14.308 4.615 L 13.608 4.615 L 13.608 12 L 14.308 12 L 15.008 12 L 15.008 4.615 L 14.308 4.615 Z M 5.077 4.615 L 4.377 4.615 L 4.377 12 L 5.077 12 L 5.777 12 L 5.777 4.615 L 5.077 4.615 Z M 10.615 4.615 L 9.915 4.615 L 9.915 12 L 10.615 12 L 11.315 12 L 11.315 4.615 L 10.615 4.615 Z M 0 12.604 L 0 13.304 L 15.692 13.304 L 15.692 12.604 L 15.692 11.904 L 0 11.904 L 0 12.604 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body78 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 19,
    viewBox: "0 0 16 19",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2.5,
      width: 16,
      height: 19
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14 C 0 14.88 0.39 15.67 1 16.22 L 1 18 C 1 18.265 1.105 18.52 1.293 18.707 C 1.48 18.895 1.735 19 2 19 L 3 19 C 3.265 19 3.52 18.895 3.707 18.707 C 3.895 18.52 4 18.265 4 18 L 4 17 L 12 17 L 12 18 C 12 18.265 12.105 18.52 12.293 18.707 C 12.48 18.895 12.735 19 13 19 L 14 19 C 14.265 19 14.52 18.895 14.707 18.707 C 14.895 18.52 15 18.265 15 18 L 15 16.22 C 15.61 15.67 16 14.88 16 14 L 16 4 C 16 0.5 12.42 0 8 0 C 3.58 0 0 0.5 0 4 L 0 14 Z M 3.5 15 C 3.102 15 2.721 14.842 2.439 14.561 C 2.158 14.279 2 13.898 2 13.5 C 2 13.102 2.158 12.721 2.439 12.439 C 2.721 12.158 3.102 12 3.5 12 C 3.898 12 4.279 12.158 4.561 12.439 C 4.842 12.721 5 13.102 5 13.5 C 5 13.898 4.842 14.279 4.561 14.561 C 4.279 14.842 3.898 15 3.5 15 Z M 12.5 15 C 12.102 15 11.721 14.842 11.439 14.561 C 11.158 14.279 11 13.898 11 13.5 C 11 13.102 11.158 12.721 11.439 12.439 C 11.721 12.158 12.102 12 12.5 12 C 12.898 12 13.279 12.158 13.561 12.439 C 13.842 12.721 14 13.102 14 13.5 C 14 13.898 13.842 14.279 13.561 14.561 C 13.279 14.842 12.898 15 12.5 15 Z M 14 8 L 2 8 L 2 4 L 14 4 L 14 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body79 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 16,
    viewBox: "0 0 18 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 4,
      width: 18,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.92 1.01 C 15.72 0.42 15.16 0 14.5 0 L 3.5 0 C 2.84 0 2.29 0.42 2.08 1.01 L 0 7 L 0 15 C 0 15.55 0.45 16 1 16 L 2 16 C 2.55 16 3 15.55 3 15 L 3 14 L 15 14 L 15 15 C 15 15.55 15.45 16 16 16 L 17 16 C 17.55 16 18 15.55 18 15 L 18 7 L 15.92 1.01 Z M 3.5 11 C 3.102 11 2.721 10.842 2.439 10.561 C 2.158 10.279 2 9.898 2 9.5 C 2 9.102 2.158 8.721 2.439 8.439 C 2.721 8.158 3.102 8 3.5 8 C 3.898 8 4.279 8.158 4.561 8.439 C 4.842 8.721 5 9.102 5 9.5 C 5 9.898 4.842 10.279 4.561 10.561 C 4.279 10.842 3.898 11 3.5 11 Z M 14.5 11 C 14.102 11 13.721 10.842 13.439 10.561 C 13.158 10.279 13 9.898 13 9.5 C 13 9.102 13.158 8.721 13.439 8.439 C 13.721 8.158 14.102 8 14.5 8 C 14.898 8 15.279 8.158 15.561 8.439 C 15.842 8.721 16 9.102 16 9.5 C 16 9.898 15.842 10.279 15.561 10.561 C 15.279 10.842 14.898 11 14.5 11 Z M 2 6 L 3.5 1.5 L 14.5 1.5 L 16 6 L 2 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body80 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 10.050,
    viewBox: "0 0 15 10.050",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 6.975,
      width: 15,
      height: 10.05
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.636 4.614 C 0.285 4.262 -0.285 4.262 -0.636 4.614 C -0.988 4.965 -0.988 5.535 -0.636 5.886 L 0 5.25 L 0.636 4.614 Z M 4.8 10.05 L 4.164 10.686 C 4.513 11.036 5.079 11.038 5.432 10.691 L 4.8 10.05 Z M 15.632 0.641 C 15.986 0.292 15.99 -0.278 15.641 -0.632 C 15.292 -0.986 14.722 -0.99 14.368 -0.641 L 15 0 L 15.632 0.641 Z M 0 5.25 L -0.636 5.886 L 4.164 10.686 L 4.8 10.05 L 5.436 9.414 L 0.636 4.614 L 0 5.25 Z M 4.8 10.05 L 5.432 10.691 L 15.632 0.641 L 15 0 L 14.368 -0.641 L 4.168 9.409 L 4.8 10.05 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body81 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 6,
    viewBox: "0 0 12 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 9,
      width: 12,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.566 -0.566 C 0.253 -0.878 -0.253 -0.878 -0.566 -0.566 C -0.878 -0.253 -0.878 0.253 -0.566 0.566 L 0 0 L 0.566 -0.566 Z M 6 6 L 5.434 6.566 C 5.747 6.878 6.253 6.878 6.566 6.566 L 6 6 Z M 12.566 0.566 C 12.878 0.253 12.878 -0.253 12.566 -0.566 C 12.253 -0.878 11.747 -0.878 11.434 -0.566 L 12 0 L 12.566 0.566 Z M 0 0 L -0.566 0.566 L 5.434 6.566 L 6 6 L 6.566 5.434 L 0.566 -0.566 L 0 0 Z M 6 6 L 6.566 6.566 L 12.566 0.566 L 12 0 L 11.434 -0.566 L 5.434 5.434 L 6 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body82 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 5.169,
    viewBox: "0 0 12 5.169",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 5,
      width: 12,
      height: 5.169
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 2.585 L 11.25 2.585 C 11.25 2.689 11.204 2.851 10.993 3.065 C 10.779 3.283 10.433 3.514 9.946 3.723 C 8.974 4.142 7.58 4.419 6 4.419 L 6 5.169 L 6 5.919 C 7.734 5.919 9.339 5.618 10.539 5.101 C 11.138 4.843 11.67 4.517 12.064 4.116 C 12.46 3.712 12.75 3.194 12.75 2.585 L 12 2.585 Z M 6 5.169 L 6 4.419 C 4.42 4.419 3.026 4.142 2.054 3.723 C 1.567 3.514 1.221 3.283 1.007 3.065 C 0.796 2.851 0.75 2.689 0.75 2.585 L 0 2.585 L -0.75 2.585 C -0.75 3.194 -0.46 3.712 -0.064 4.116 C 0.33 4.517 0.862 4.843 1.461 5.101 C 2.661 5.618 4.266 5.919 6 5.919 L 6 5.169 Z M 0 2.585 L 0.75 2.585 C 0.75 2.48 0.796 2.319 1.007 2.104 C 1.221 1.886 1.567 1.656 2.054 1.446 C 3.026 1.027 4.42 0.75 6 0.75 L 6 0 L 6 -0.75 C 4.266 -0.75 2.661 -0.449 1.461 0.068 C 0.862 0.326 0.33 0.653 -0.064 1.053 C -0.46 1.457 -0.75 1.975 -0.75 2.585 L 0 2.585 Z M 6 0 L 6 0.75 C 7.58 0.75 8.974 1.027 9.946 1.446 C 10.433 1.656 10.779 1.886 10.993 2.104 C 11.204 2.319 11.25 2.48 11.25 2.585 L 12 2.585 L 12.75 2.585 C 12.75 1.975 12.46 1.457 12.064 1.053 C 11.67 0.653 11.138 0.326 10.539 0.068 C 9.339 -0.449 7.734 -0.75 6 -0.75 L 6 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 11.815,
    viewBox: "0 0 12 11.815",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 7.678,
      width: 12,
      height: 11.815
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L -0.75 0 L -0.75 4.615 L 0 4.615 L 0.75 4.615 L 0.75 0 L 0 0 Z M 0 4.615 L -0.75 4.615 C -0.75 5.224 -0.462 5.743 -0.066 6.148 C 0.327 6.549 0.859 6.875 1.457 7.133 C 2.656 7.65 4.262 7.95 6 7.95 L 6 7.2 L 6 6.45 C 4.415 6.45 3.021 6.173 2.051 5.755 C 1.564 5.546 1.219 5.316 1.006 5.098 C 0.797 4.884 0.75 4.722 0.75 4.615 L 0 4.615 Z M 6 7.2 L 6 7.95 C 7.738 7.95 9.344 7.65 10.543 7.133 C 11.141 6.875 11.673 6.549 12.066 6.148 C 12.462 5.743 12.75 5.224 12.75 4.615 L 12 4.615 L 11.25 4.615 C 11.25 4.722 11.203 4.884 10.994 5.098 C 10.781 5.316 10.436 5.546 9.949 5.755 C 8.979 6.173 7.585 6.45 6 6.45 L 6 7.2 Z M 12 4.615 L 12.75 4.615 L 12.75 0 L 12 0 L 11.25 0 L 11.25 4.615 L 12 4.615 Z M 0 4.615 L -0.75 4.615 L -0.75 9.231 L 0 9.231 L 0.75 9.231 L 0.75 4.615 L 0 4.615 Z M 0 9.231 L -0.75 9.231 C -0.75 9.839 -0.462 10.358 -0.066 10.763 C 0.327 11.164 0.859 11.491 1.457 11.748 C 2.656 12.265 4.262 12.565 6 12.565 L 6 11.815 L 6 11.065 C 4.415 11.065 3.021 10.789 2.051 10.371 C 1.564 10.161 1.219 9.931 1.006 9.714 C 0.797 9.5 0.75 9.337 0.75 9.231 L 0 9.231 Z M 6 11.815 L 6 12.565 C 7.738 12.565 9.344 12.265 10.543 11.748 C 11.141 11.491 11.673 11.164 12.066 10.763 C 12.462 10.358 12.75 9.839 12.75 9.231 L 12 9.231 L 11.25 9.231 C 11.25 9.337 11.203 9.5 10.994 9.714 C 10.781 9.931 10.436 10.161 9.949 10.371 C 8.979 10.789 7.585 11.065 6 11.065 L 6 11.815 Z M 12 9.231 L 12.75 9.231 L 12.75 4.615 L 12 4.615 L 11.25 4.615 L 11.25 9.231 L 12 9.231 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body83 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.538,
    height: 12.923,
    viewBox: "0 0 17.538 12.923",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.231,
      top: 5.538,
      width: 17.538,
      height: 12.923
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.308 0 L 2.308 0.75 L 15.231 0.75 L 15.231 0 L 15.231 -0.75 L 2.308 -0.75 L 2.308 0 Z M 15.231 0 L 15.231 0.75 C 16.091 0.75 16.788 1.447 16.788 2.308 L 17.538 2.308 L 18.288 2.308 C 18.288 0.619 16.919 -0.75 15.231 -0.75 L 15.231 0 Z M 17.538 2.308 L 16.788 2.308 L 16.788 10.615 L 17.538 10.615 L 18.288 10.615 L 18.288 2.308 L 17.538 2.308 Z M 17.538 10.615 L 16.788 10.615 C 16.788 11.476 16.091 12.173 15.231 12.173 L 15.231 12.923 L 15.231 13.673 C 16.919 13.673 18.288 12.304 18.288 10.615 L 17.538 10.615 Z M 15.231 12.923 L 15.231 12.173 L 2.308 12.173 L 2.308 12.923 L 2.308 13.673 L 15.231 13.673 L 15.231 12.923 Z M 2.308 12.923 L 2.308 12.173 C 1.447 12.173 0.75 11.476 0.75 10.615 L 0 10.615 L -0.75 10.615 C -0.75 12.304 0.619 13.673 2.308 13.673 L 2.308 12.923 Z M 0 10.615 L 0.75 10.615 L 0.75 2.308 L 0 2.308 L -0.75 2.308 L -0.75 10.615 L 0 10.615 Z M 0 2.308 L 0.75 2.308 C 0.75 1.447 1.447 0.75 2.308 0.75 L 2.308 0 L 2.308 -0.75 C 0.619 -0.75 -0.75 0.619 -0.75 2.308 L 0 2.308 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.538,
    height: 1.500,
    viewBox: "0 -0.750 17.538 1.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.231,
      top: 10,
      width: 17.538,
      height: 1.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 0.75 L 17.538 0.75 L 17.538 0 L 17.538 -0.75 L 0 -0.75 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body84 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 12,
    viewBox: "0 0 16 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 6,
      width: 16,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.778 0 L 1.778 0.8 L 14.222 0.8 L 14.222 0 L 14.222 -0.8 L 1.778 -0.8 L 1.778 0 Z M 14.222 0 L 14.222 0.8 C 14.705 0.8 15.2 1.242 15.2 1.92 L 16 1.92 L 16.8 1.92 C 16.8 0.477 15.703 -0.8 14.222 -0.8 L 14.222 0 Z M 16 1.92 L 15.2 1.92 L 15.2 10.08 L 16 10.08 L 16.8 10.08 L 16.8 1.92 L 16 1.92 Z M 16 10.08 L 15.2 10.08 C 15.2 10.758 14.705 11.2 14.222 11.2 L 14.222 12 L 14.222 12.8 C 15.703 12.8 16.8 11.523 16.8 10.08 L 16 10.08 Z M 14.222 12 L 14.222 11.2 L 1.778 11.2 L 1.778 12 L 1.778 12.8 L 14.222 12.8 L 14.222 12 Z M 1.778 12 L 1.778 11.2 C 1.295 11.2 0.8 10.758 0.8 10.08 L 0 10.08 L -0.8 10.08 C -0.8 11.523 0.297 12.8 1.778 12.8 L 1.778 12 Z M 0 10.08 L 0.8 10.08 L 0.8 1.92 L 0 1.92 L -0.8 1.92 L -0.8 10.08 L 0 10.08 Z M 0 1.92 L 0.8 1.92 C 0.8 1.242 1.295 0.8 1.778 0.8 L 1.778 0 L 1.778 -0.8 C 0.297 -0.8 -0.8 0.477 -0.8 1.92 L 0 1.92 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 4,
    viewBox: "0 0 16 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 10,
      width: 16,
      height: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.358 -0.716 C -0.037 -0.913 -0.518 -0.753 -0.716 -0.358 C -0.913 0.037 -0.753 0.518 -0.358 0.716 L 0 0 L 0.358 -0.716 Z M 8 4 L 7.642 4.716 C 7.867 4.828 8.133 4.828 8.358 4.716 L 8 4 Z M 16.358 0.716 C 16.753 0.518 16.913 0.037 16.716 -0.358 C 16.518 -0.753 16.037 -0.913 15.642 -0.716 L 16 0 L 16.358 0.716 Z M 0 0 L -0.358 0.716 L 7.642 4.716 L 8 4 L 8.358 3.284 L 0.358 -0.716 L 0 0 Z M 8 4 L 8.358 4.716 L 16.358 0.716 L 16 0 L 15.642 -0.716 L 7.642 3.284 L 8 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body85 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.231,
    height: 18.268,
    viewBox: "0 0 18.231 18.268",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.884,
      top: 2.866,
      width: 18.231,
      height: 18.268
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.231 13.677 L 17.396 13.656 C 17.396 13.663 17.396 13.67 17.396 13.677 L 18.231 13.677 Z M 18.231 16.427 L 17.396 16.427 L 17.396 16.43 L 18.231 16.427 Z M 16.232 18.26 L 16.142 19.09 C 16.147 19.091 16.152 19.091 16.157 19.092 L 16.232 18.26 Z M 8.322 15.446 L 8.775 14.745 L 8.769 14.741 L 8.322 15.446 Z M 2.822 9.946 L 3.526 9.498 L 3.523 9.493 L 2.822 9.946 Z M 0.007 1.998 L -0.824 2.074 L -0.823 2.087 L 0.007 1.998 Z M 1.832 0 L 1.832 -0.835 L 1.831 -0.835 L 1.832 0 Z M 4.582 0 L 4.582 0.835 L 4.59 0.835 L 4.582 0 Z M 6.415 1.577 L 7.243 1.467 L 7.242 1.46 L 6.415 1.577 Z M 7.057 4.153 L 6.274 4.444 L 6.275 4.446 L 7.057 4.153 Z M 6.644 6.087 L 7.235 6.677 L 7.238 6.674 L 6.644 6.087 Z M 5.48 7.251 L 4.89 6.66 C 4.624 6.926 4.568 7.337 4.754 7.664 L 5.48 7.251 Z M 10.98 12.751 L 10.567 13.477 C 10.894 13.663 11.305 13.607 11.57 13.341 L 10.98 12.751 Z M 12.144 11.587 L 11.557 10.993 L 11.554 10.996 L 12.144 11.587 Z M 14.078 11.174 L 13.784 11.956 L 13.787 11.957 L 14.078 11.174 Z M 16.654 11.816 L 16.771 10.989 L 16.764 10.988 L 16.654 11.816 Z M 18.231 13.677 L 17.396 13.677 L 17.396 16.427 L 18.231 16.427 L 19.066 16.427 L 19.066 13.677 L 18.231 13.677 Z M 18.231 16.427 L 17.396 16.43 C 17.396 16.569 17.368 16.707 17.312 16.834 L 18.077 17.169 L 18.842 17.503 C 18.991 17.163 19.067 16.795 19.066 16.423 L 18.231 16.427 Z M 18.077 17.169 L 17.312 16.834 C 17.256 16.962 17.175 17.076 17.072 17.17 L 17.637 17.785 L 18.201 18.4 C 18.475 18.149 18.693 17.844 18.842 17.503 L 18.077 17.169 Z M 17.637 17.785 L 17.072 17.17 C 16.97 17.264 16.849 17.335 16.717 17.38 L 16.985 18.171 L 17.252 18.962 C 17.604 18.843 17.928 18.652 18.201 18.4 L 17.637 17.785 Z M 16.985 18.171 L 16.717 17.38 C 16.586 17.424 16.446 17.441 16.308 17.428 L 16.232 18.26 L 16.157 19.092 C 16.527 19.125 16.9 19.081 17.252 18.962 L 16.985 18.171 Z M 16.232 18.26 L 16.323 17.43 C 13.632 17.135 11.048 16.216 8.775 14.745 L 8.322 15.446 L 7.868 16.147 C 10.359 17.759 13.192 18.767 16.142 19.09 L 16.232 18.26 Z M 8.322 15.446 L 8.769 14.741 C 6.658 13.4 4.868 11.609 3.526 9.498 L 2.822 9.946 L 2.117 10.394 C 3.59 12.712 5.555 14.678 7.874 16.151 L 8.322 15.446 Z M 2.822 9.946 L 3.523 9.493 C 2.047 7.21 1.127 4.612 0.838 1.91 L 0.007 1.998 L -0.823 2.087 C -0.506 5.05 0.502 7.897 2.12 10.399 L 2.822 9.946 Z M 0.007 1.998 L 0.839 1.923 C 0.827 1.785 0.843 1.646 0.887 1.515 L 0.096 1.248 L -0.695 0.982 C -0.814 1.333 -0.858 1.705 -0.824 2.074 L 0.007 1.998 Z M 0.096 1.248 L 0.887 1.515 C 0.931 1.383 1.003 1.263 1.096 1.16 L 0.479 0.597 L -0.137 0.034 C -0.387 0.308 -0.577 0.631 -0.695 0.982 L 0.096 1.248 Z M 0.479 0.597 L 1.096 1.16 C 1.189 1.058 1.303 0.976 1.43 0.92 L 1.093 0.156 L 0.755 -0.607 C 0.416 -0.458 0.112 -0.239 -0.137 0.034 L 0.479 0.597 Z M 1.093 0.156 L 1.43 0.92 C 1.557 0.864 1.694 0.835 1.832 0.835 L 1.832 0 L 1.831 -0.835 C 1.46 -0.835 1.094 -0.757 0.755 -0.607 L 1.093 0.156 Z M 1.832 0 L 1.832 0.835 L 4.582 0.835 L 4.582 0 L 4.582 -0.835 L 1.832 -0.835 L 1.832 0 Z M 4.582 0 L 4.59 0.835 C 4.832 0.833 5.067 0.918 5.251 1.076 L 5.795 0.443 L 6.34 -0.19 C 5.849 -0.612 5.221 -0.841 4.573 -0.835 L 4.582 0 Z M 5.795 0.443 L 5.251 1.076 C 5.434 1.234 5.554 1.454 5.588 1.694 L 6.415 1.577 L 7.242 1.46 C 7.151 0.819 6.83 0.232 6.34 -0.19 L 5.795 0.443 Z M 6.415 1.577 L 5.587 1.686 C 5.712 2.629 5.942 3.554 6.274 4.444 L 7.057 4.153 L 7.839 3.861 C 7.551 3.088 7.351 2.285 7.243 1.467 L 6.415 1.577 Z M 7.057 4.153 L 6.275 4.446 C 6.342 4.625 6.357 4.819 6.317 5.006 L 7.134 5.18 L 7.95 5.354 C 8.057 4.855 8.018 4.336 7.838 3.859 L 7.057 4.153 Z M 7.134 5.18 L 6.317 5.006 C 6.277 5.193 6.185 5.364 6.05 5.5 L 6.644 6.087 L 7.238 6.674 C 7.597 6.311 7.844 5.853 7.95 5.354 L 7.134 5.18 Z M 6.644 6.087 L 6.054 5.496 L 4.89 6.66 L 5.48 7.251 L 6.07 7.841 L 7.235 6.677 L 6.644 6.087 Z M 5.48 7.251 L 4.754 7.664 C 6.133 10.089 8.142 12.098 10.567 13.477 L 10.98 12.751 L 11.393 12.025 C 9.228 10.794 7.436 9.002 6.206 6.838 L 5.48 7.251 Z M 10.98 12.751 L 11.57 13.341 L 12.735 12.177 L 12.144 11.587 L 11.554 10.996 L 10.39 12.16 L 10.98 12.751 Z M 12.144 11.587 L 12.731 12.18 C 12.867 12.046 13.038 11.954 13.225 11.914 L 13.051 11.097 L 12.877 10.281 C 12.378 10.387 11.92 10.634 11.557 10.993 L 12.144 11.587 Z M 13.051 11.097 L 13.225 11.914 C 13.412 11.874 13.606 11.889 13.784 11.956 L 14.078 11.174 L 14.372 10.393 C 13.895 10.213 13.376 10.174 12.877 10.281 L 13.051 11.097 Z M 14.078 11.174 L 13.787 11.957 C 14.677 12.288 15.602 12.519 16.545 12.644 L 16.654 11.816 L 16.764 10.988 C 15.946 10.88 15.143 10.68 14.37 10.392 L 14.078 11.174 Z M 16.654 11.816 L 16.537 12.643 C 16.78 12.677 17.001 12.799 17.16 12.986 L 17.797 12.446 L 18.434 11.906 C 18.011 11.407 17.419 11.081 16.771 10.989 L 16.654 11.816 Z M 17.797 12.446 L 17.16 12.986 C 17.318 13.173 17.402 13.411 17.396 13.656 L 18.231 13.677 L 19.066 13.697 C 19.082 13.043 18.857 12.406 18.434 11.906 L 17.797 12.446 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body86 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 20,
    viewBox: "0 0 16 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 2,
      width: 16,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.5 C 0 16.43 1.57 18 3.5 18 L 2 19.5 L 2 20 L 14 20 L 14 19.5 L 12.5 18 C 14.43 18 16 16.43 16 14.5 L 16 4 C 16 0.5 12.42 0 8 0 C 3.58 0 0 0.5 0 4 L 0 14.5 Z M 3.5 15.5 C 3.102 15.5 2.721 15.342 2.439 15.061 C 2.158 14.779 2 14.398 2 14 C 2 13.602 2.158 13.221 2.439 12.939 C 2.721 12.658 3.102 12.5 3.5 12.5 C 3.898 12.5 4.279 12.658 4.561 12.939 C 4.842 13.221 5 13.602 5 14 C 5 14.398 4.842 14.779 4.561 15.061 C 4.279 15.342 3.898 15.5 3.5 15.5 Z M 12.5 15.5 C 12.102 15.5 11.721 15.342 11.439 15.061 C 11.158 14.779 11 14.398 11 14 C 11 13.602 11.158 13.221 11.439 12.939 C 11.721 12.658 12.102 12.5 12.5 12.5 C 12.898 12.5 13.279 12.658 13.561 12.939 C 13.842 13.221 14 13.602 14 14 C 14 14.398 13.842 14.779 13.561 15.061 C 13.279 15.342 12.898 15.5 12.5 15.5 Z M 14 9 L 2 9 L 2 4 L 14 4 L 14 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body87 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(36,29,20)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.300,
    height: 19.300,
    viewBox: "0 0 19.300 19.300",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.35,
      top: 2.35,
      width: 19.3,
      height: 19.3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 0.9 C 6.995 0.403 7.398 0 7.895 0 L 11.392 0 C 11.889 0 12.292 0.403 12.292 0.9 C 12.292 1.397 11.889 1.8 11.392 1.8 L 7.895 1.8 C 7.398 1.8 6.995 1.397 6.995 0.9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 5.297 0.886 C 5.312 1.383 4.921 1.797 4.425 1.813 C 3.568 1.839 3.211 1.906 2.957 2.037 L 2.948 2.042 C 2.562 2.235 2.241 2.557 2.023 2.972 C 1.893 3.226 1.825 3.584 1.8 4.438 C 1.785 4.934 1.37 5.325 0.873 5.31 C 0.376 5.295 -0.015 4.88 0 4.383 C 0.026 3.53 0.088 2.799 0.423 2.146 L 0.426 2.141 C 0.804 1.419 1.387 0.811 2.138 0.434 C 2.789 0.101 3.519 0.039 4.37 0.013 C 4.867 -0.002 5.282 0.389 5.297 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.99 0.886 C 14.005 0.389 14.42 -0.002 14.917 0.013 C 15.768 0.039 16.498 0.101 17.149 0.434 C 17.9 0.811 18.483 1.419 18.861 2.141 L 18.864 2.146 C 19.199 2.799 19.261 3.53 19.287 4.383 C 19.302 4.88 18.911 5.295 18.414 5.31 C 17.917 5.325 17.502 4.934 17.487 4.438 C 17.462 3.584 17.394 3.226 17.264 2.972 C 17.046 2.557 16.725 2.235 16.339 2.042 L 16.33 2.037 C 16.076 1.906 15.719 1.839 14.862 1.813 C 14.366 1.797 13.975 1.383 13.99 0.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 6.995 C 1.397 6.995 1.8 7.398 1.8 7.895 L 1.8 11.392 C 1.8 11.889 1.397 12.292 0.9 12.292 C 0.403 12.292 0 11.889 0 11.392 L 0 7.895 C 0 7.398 0.403 6.995 0.9 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.387 6.995 C 18.884 6.995 19.287 7.398 19.287 7.895 L 19.287 11.392 C 19.287 11.889 18.884 12.292 18.387 12.292 C 17.89 12.292 17.487 11.889 17.487 11.392 L 17.487 7.895 C 17.487 7.398 17.89 6.995 18.387 6.995 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.427 13.99 C 18.924 14.005 19.315 14.42 19.3 14.917 C 19.274 15.77 19.212 16.501 18.876 17.154 L 18.874 17.159 C 18.496 17.881 17.913 18.489 17.162 18.866 C 16.51 19.199 15.781 19.261 14.93 19.287 C 14.433 19.302 14.018 18.911 14.003 18.414 C 13.988 17.917 14.378 17.503 14.875 17.487 C 15.732 17.461 16.089 17.394 16.343 17.263 L 16.352 17.258 C 16.738 17.065 17.059 16.743 17.277 16.328 C 17.407 16.074 17.474 15.716 17.5 14.862 C 17.515 14.366 17.93 13.975 18.427 13.99 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 14.003 C 1.37 13.988 1.785 14.379 1.8 14.875 C 1.826 15.732 1.893 16.089 2.024 16.343 L 2.029 16.352 C 2.222 16.738 2.544 17.059 2.959 17.277 C 3.213 17.407 3.571 17.475 4.425 17.5 C 4.921 17.515 5.312 17.93 5.297 18.427 C 5.282 18.924 4.867 19.315 4.37 19.3 C 3.517 19.274 2.786 19.212 2.133 18.877 L 2.128 18.874 C 1.406 18.496 0.798 17.913 0.421 17.162 C 0.088 16.511 0.026 15.781 0 14.93 C -0.015 14.433 0.376 14.018 0.873 14.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.995 18.387 C 6.995 17.89 7.398 17.487 7.895 17.487 L 11.392 17.487 C 11.889 17.487 12.292 17.89 12.292 18.387 C 12.292 18.884 11.889 19.287 11.392 19.287 L 7.895 19.287 C 7.398 19.287 6.995 18.884 6.995 18.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Name=Airplane, Theme=Light
    "name=Airplane|theme=light": __body0,
    // figma: Name=BackArrow, Theme=Light
    "name=BackArrow|theme=light": __body1,
    // figma: Name=BackChevron, Theme=Light
    "name=BackChevron|theme=light": __body2,
    // figma: Name=Bank, Theme=Light
    "name=Bank|theme=light": __body3,
    // figma: Name=Bus, Theme=Light
    "name=Bus|theme=light": __body4,
    // figma: Name=Car, Theme=Light
    "name=Car|theme=light": __body5,
    // figma: Name=Checkmark, Theme=Light
    "name=Checkmark|theme=light": __body6,
    // figma: Name=ChevronDown, Theme=Light
    "name=ChevronDown|theme=light": __body7,
    // figma: Name=ChevronRight, Theme=Light
    "name=ChevronRight|theme=light": __body8,
    // figma: Name=CloseX, Theme=Light
    "name=CloseX|theme=light": __body9,
    // figma: Name=Coins, Theme=Light
    "name=Coins|theme=light": __body10,
    // figma: Name=Copy, Theme=Light
    "name=Copy|theme=light": __body11,
    // figma: Name=CreditCard, Theme=Light
    "name=CreditCard|theme=light": __body12,
    // figma: Name=Envelope, Theme=Light
    "name=Envelope|theme=light": __body13,
    // figma: Name=Flower, Theme=Light
    "name=Flower|theme=light": __body14,
    // figma: Name=Home, Theme=Light
    "name=Home|theme=light": __body15,
    // figma: Name=KakaoNavi, Theme=Light
    "name=KakaoNavi|theme=light": __body16,
    // figma: Name=KakaoTalk, Theme=Light
    "name=KakaoTalk|theme=light": __body17,
    // figma: Name=Phone, Theme=Light
    "name=Phone|theme=light": __body18,
    // figma: Name=Phoneline, Theme=Light
    "name=Phoneline|theme=light": __body19,
    // figma: Name=SMS, Theme=Light
    "name=SMS|theme=light": __body20,
    // figma: Name=Train, Theme=Light
    "name=Train|theme=light": __body21,
    // figma: Name=WreathGuide, Theme=Light
    "name=WreathGuide|theme=light": __body22,
    // figma: Name=envelope, Theme=Light
    "name=envelope|theme=light": __body23,
    // figma: Name=chevronDown, Theme=Light
    "name=chevronDown|theme=light": __body24,
    // figma: Name=chevronDownThick, Theme=Light
    "name=chevronDownThick|theme=light": __body25,
    // figma: Name=chevronDownSmall, Theme=Light
    "name=chevronDownSmall|theme=light": __body26,
    // figma: Name=chevronDownThickSmall, Theme=Light
    "name=chevronDownThickSmall|theme=light": __body27,
    // figma: Name=chevronUp, Theme=Light
    "name=chevronUp|theme=light": __body28,
    // figma: Name=chevronUpThick, Theme=Light
    "name=chevronUpThick|theme=light": __body29,
    // figma: Name=chevronUpSmall, Theme=Light
    "name=chevronUpSmall|theme=light": __body30,
    // figma: Name=chevronUpThickSmall, Theme=Light
    "name=chevronUpThickSmall|theme=light": __body31,
    // figma: Name=chevronLeft, Theme=Light
    "name=chevronLeft|theme=light": __body32,
    // figma: Name=chevronLeftThick, Theme=Light
    "name=chevronLeftThick|theme=light": __body33,
    // figma: Name=chevronLeftTight, Theme=Light
    "name=chevronLeftTight|theme=light": __body34,
    // figma: Name=chevronLeftTightThick, Theme=Light
    "name=chevronLeftTightThick|theme=light": __body35,
    // figma: Name=chevronLeftSmall, Theme=Light
    "name=chevronLeftSmall|theme=light": __body36,
    // figma: Name=chevronLeftThickSmall, Theme=Light
    "name=chevronLeftThickSmall|theme=light": __body37,
    // figma: Name=chevronLeftTightSmall, Theme=Light
    "name=chevronLeftTightSmall|theme=light": __body38,
    // figma: Name=chevronLeftTightThickSmall, Theme=Light
    "name=chevronLeftTightThickSmall|theme=light": __body39,
    // figma: Name=chevronRight, Theme=Light
    "name=chevronRight|theme=light": __body40,
    // figma: Name=chevronRightThick, Theme=Light
    "name=chevronRightThick|theme=light": __body41,
    // figma: Name=chevronRightTight, Theme=Light
    "name=chevronRightTight|theme=light": __body42,
    // figma: Name=chevronRightTightThick, Theme=Light
    "name=chevronRightTightThick|theme=light": __body43,
    // figma: Name=chevronRightSmall, Theme=Light
    "name=chevronRightSmall|theme=light": __body44,
    // figma: Name=chevronRightThickSmall, Theme=Light
    "name=chevronRightThickSmall|theme=light": __body45,
    // figma: Name=chevronRightTightSmall, Theme=Light
    "name=chevronRightTightSmall|theme=light": __body46,
    // figma: Name=chevronRightTightThickSmall, Theme=Light
    "name=chevronRightTightThickSmall|theme=light": __body47,
    // figma: Name=caretDown, Theme=Light
    "name=caretDown|theme=light": __body48,
    // figma: Name=caretUp, Theme=Light
    "name=caretUp|theme=light": __body49,
    // figma: Name=logoKakao, Theme=Light
    "name=logoKakao|theme=light": __body50,
    // figma: Name=mail, Theme=Light
    "name=mail|theme=light": __body51,
    // figma: Name=arrowLeft, Theme=Light
    "name=arrowLeft|theme=light": __body52,
    // figma: Name=arrowLeftThick, Theme=Light
    "name=arrowLeftThick|theme=light": __body53,
    // figma: Name=arrowRight, Theme=Light
    "name=arrowRight|theme=light": __body54,
    // figma: Name=arrowRightThick, Theme=Light
    "name=arrowRightThick|theme=light": __body55,
    // figma: Name=arrowDown, Theme=Light
    "name=arrowDown|theme=light": __body56,
    // figma: Name=arrowDownThick, Theme=Light
    "name=arrowDownThick|theme=light": __body57,
    // figma: Name=arrowUp, Theme=Light
    "name=arrowUp|theme=light": __body58,
    // figma: Name=arrowUpThick, Theme=Light
    "name=arrowUpThick|theme=light": __body59,
    // figma: Name=bubble, Theme=Light
    "name=bubble|theme=light": __body60,
    // figma: Name=bubbleFill, Theme=Light
    "name=bubbleFill|theme=light": __body61,
    // figma: Name=circleInfo, Theme=Light
    "name=circleInfo|theme=light": __body62,
    // figma: Name=circleInfoFill, Theme=Light
    "name=circleInfoFill|theme=light": __body63,
    // figma: Name=location, Theme=Light
    "name=location|theme=light": __body64,
    // figma: Name=locationFill, Theme=Light
    "name=locationFill|theme=light": __body65,
    // figma: Name=Default, Theme=Light
    "name=Default|theme=light": __body66,
    // figma: Name=heart, Theme=Light
    "name=heart|theme=light": __body67,
    // figma: Name=heartfill, Theme=Light
    "name=heartfill|theme=light": __body68,
    // figma: Name=Search, Theme=Light
    "name=Search|theme=light": __body69,
    // figma: Name=Weather-rain, Theme=Light
    "name=Weather-rain|theme=light": __body70,
    // figma: Name=Schedule, Theme=Light
    "name=Schedule|theme=light": __body71,
    // figma: Name=Moon, Theme=Light
    "name=Moon|theme=light": __body72,
    // figma: Name=delivery, Theme=Light
    "name=delivery|theme=light": __body73,
    // figma: Name=Airplane, Theme=Dark
    "name=Airplane|theme=dark": __body74,
    // figma: Name=BackArrow, Theme=Dark
    "name=BackArrow|theme=dark": __body75,
    // figma: Name=BackChevron, Theme=Dark
    "name=BackChevron|theme=dark": __body76,
    // figma: Name=Bank, Theme=Dark
    "name=Bank|theme=dark": __body77,
    // figma: Name=Bus, Theme=Dark
    "name=Bus|theme=dark": __body78,
    // figma: Name=Car, Theme=Dark
    "name=Car|theme=dark": __body79,
    // figma: Name=Checkmark, Theme=Dark
    "name=Checkmark|theme=dark": __body80,
    // figma: Name=ChevronDown, Theme=Dark
    "name=ChevronDown|theme=dark": __body81,
    // figma: Name=ChevronRight, Theme=Dark
    "name=ChevronRight|theme=dark": __body8,
    // figma: Name=CloseX, Theme=Dark
    "name=CloseX|theme=dark": __body9,
    // figma: Name=Coins, Theme=Dark
    "name=Coins|theme=dark": __body82,
    // figma: Name=Copy, Theme=Dark
    "name=Copy|theme=dark": __body11,
    // figma: Name=CreditCard, Theme=Dark
    "name=CreditCard|theme=dark": __body83,
    // figma: Name=Envelope, Theme=Dark
    "name=Envelope|theme=dark": __body84,
    // figma: Name=Flower, Theme=Dark
    "name=Flower|theme=dark": __body14,
    // figma: Name=Home, Theme=Dark
    "name=Home|theme=dark": __body15,
    // figma: Name=KakaoNavi, Theme=Dark
    "name=KakaoNavi|theme=dark": __body16,
    // figma: Name=KakaoTalk, Theme=Dark
    "name=KakaoTalk|theme=dark": __body17,
    // figma: Name=Phone, Theme=Dark
    "name=Phone|theme=dark": __body18,
    // figma: Name=Phoneline, Theme=Dark
    "name=Phoneline|theme=dark": __body85,
    // figma: Name=SMS, Theme=Dark
    "name=SMS|theme=dark": __body20,
    // figma: Name=Train, Theme=Dark
    "name=Train|theme=dark": __body86,
    // figma: Name=WreathGuide, Theme=Dark
    "name=WreathGuide|theme=dark": __body22,
    // figma: Name=envelope, Theme=Dark
    "name=envelope|theme=dark": __body23,
    // figma: Name=chevronDown, Theme=Dark
    "name=chevronDown|theme=dark": __body24,
    // figma: Name=chevronDownThick, Theme=Dark
    "name=chevronDownThick|theme=dark": __body25,
    // figma: Name=chevronDownSmall, Theme=Dark
    "name=chevronDownSmall|theme=dark": __body26,
    // figma: Name=chevronDownThickSmall, Theme=Dark
    "name=chevronDownThickSmall|theme=dark": __body27,
    // figma: Name=chevronUp, Theme=Dark
    "name=chevronUp|theme=dark": __body28,
    // figma: Name=chevronUpThick, Theme=Dark
    "name=chevronUpThick|theme=dark": __body29,
    // figma: Name=chevronUpSmall, Theme=Dark
    "name=chevronUpSmall|theme=dark": __body30,
    // figma: Name=chevronUpThickSmall, Theme=Dark
    "name=chevronUpThickSmall|theme=dark": __body31,
    // figma: Name=chevronLeft, Theme=Dark
    "name=chevronLeft|theme=dark": __body32,
    // figma: Name=chevronLeftThick, Theme=Dark
    "name=chevronLeftThick|theme=dark": __body33,
    // figma: Name=chevronLeftTight, Theme=Dark
    "name=chevronLeftTight|theme=dark": __body34,
    // figma: Name=chevronLeftTightThick, Theme=Dark
    "name=chevronLeftTightThick|theme=dark": __body35,
    // figma: Name=chevronLeftSmall, Theme=Dark
    "name=chevronLeftSmall|theme=dark": __body36,
    // figma: Name=chevronLeftThickSmall, Theme=Dark
    "name=chevronLeftThickSmall|theme=dark": __body37,
    // figma: Name=chevronLeftTightSmall, Theme=Dark
    "name=chevronLeftTightSmall|theme=dark": __body38,
    // figma: Name=chevronLeftTightThickSmall, Theme=Dark
    "name=chevronLeftTightThickSmall|theme=dark": __body39,
    // figma: Name=chevronRight, Theme=Dark
    "name=chevronRight|theme=dark": __body40,
    // figma: Name=chevronRightThick, Theme=Dark
    "name=chevronRightThick|theme=dark": __body41,
    // figma: Name=chevronRightTight, Theme=Dark
    "name=chevronRightTight|theme=dark": __body42,
    // figma: Name=chevronRightTightThick, Theme=Dark
    "name=chevronRightTightThick|theme=dark": __body43,
    // figma: Name=chevronRightSmall, Theme=Dark
    "name=chevronRightSmall|theme=dark": __body44,
    // figma: Name=chevronRightThickSmall, Theme=Dark
    "name=chevronRightThickSmall|theme=dark": __body45,
    // figma: Name=chevronRightTightSmall, Theme=Dark
    "name=chevronRightTightSmall|theme=dark": __body46,
    // figma: Name=chevronRightTightThickSmall, Theme=Dark
    "name=chevronRightTightThickSmall|theme=dark": __body47,
    // figma: Name=caretDown, Theme=Dark
    "name=caretDown|theme=dark": __body48,
    // figma: Name=caretUp, Theme=Dark
    "name=caretUp|theme=dark": __body49,
    // figma: Name=logoKakao, Theme=Dark
    "name=logoKakao|theme=dark": __body50,
    // figma: Name=mail, Theme=Dark
    "name=mail|theme=dark": __body51,
    // figma: Name=arrowLeft, Theme=Dark
    "name=arrowLeft|theme=dark": __body52,
    // figma: Name=arrowLeftThick, Theme=Dark
    "name=arrowLeftThick|theme=dark": __body53,
    // figma: Name=arrowRight, Theme=Dark
    "name=arrowRight|theme=dark": __body54,
    // figma: Name=arrowRightThick, Theme=Dark
    "name=arrowRightThick|theme=dark": __body55,
    // figma: Name=arrowDown, Theme=Dark
    "name=arrowDown|theme=dark": __body56,
    // figma: Name=arrowDownThick, Theme=Dark
    "name=arrowDownThick|theme=dark": __body57,
    // figma: Name=arrowUp, Theme=Dark
    "name=arrowUp|theme=dark": __body58,
    // figma: Name=arrowUpThick, Theme=Dark
    "name=arrowUpThick|theme=dark": __body59,
    // figma: Name=bubble, Theme=Dark
    "name=bubble|theme=dark": __body60,
    // figma: Name=bubbleFill, Theme=Dark
    "name=bubbleFill|theme=dark": __body61,
    // figma: Name=circleInfo, Theme=Dark
    "name=circleInfo|theme=dark": __body62,
    // figma: Name=circleInfoFill, Theme=Dark
    "name=circleInfoFill|theme=dark": __body63,
    // figma: Name=location, Theme=Dark
    "name=location|theme=dark": __body64,
    // figma: Name=locationFill, Theme=Dark
    "name=locationFill|theme=dark": __body65,
    // figma: Name=Default, Theme=Dark
    "name=Default|theme=dark": __body87,
    // figma: Name=heart, Theme=Dark
    "name=heart|theme=dark": __body67,
    // figma: Name=heartfill, Theme=Dark
    "name=heartfill|theme=dark": __body68,
    // figma: Name=Search, Theme=Dark
    "name=Search|theme=dark": __body69,
    // figma: Name=Weather-rain, Theme=Dark
    "name=Weather-rain|theme=dark": __body70,
    // figma: Name=Schedule, Theme=Dark
    "name=Schedule|theme=dark": __body71,
    // figma: Name=Moon, Theme=Dark
    "name=Moon|theme=dark": __body72,
    // figma: Name=delivery, Theme=Dark
    "name=delivery|theme=dark": __body73
  };
  return (__impls[__vkey_Icon7(props)] ?? __body0)();
}

// figma node: 4700:27929 Ratio/Vertical (8 variants)
const __venc_RatioVertical4 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_RatioVertical4 = p => "ratio=" + __venc_RatioVertical4(p.ratio) + '|' + "theme=" + __venc_RatioVertical4(p.theme);
function RatioVertical4(_p = {}) {
  const props = {
    ..._p,
    ratio: _p.ratio ?? "1:1",
    theme: _p.theme ?? "light"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 100,
      height: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  });
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 75,
      height: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  });
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 66.67,
      height: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  });
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 50,
      height: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  });
  const __impls = {
    // figma: Ratio=1:1, Theme=Light
    "ratio=1:1|theme=light": __body0,
    // figma: Ratio=3:4, Theme=Light
    "ratio=3:4|theme=light": __body1,
    // figma: Ratio=2:3, Theme=Light
    "ratio=2:3|theme=light": __body2,
    // figma: Ratio=1:2, Theme=Light
    "ratio=1:2|theme=light": __body3,
    // figma: Ratio=1:1, Theme=Dark
    "ratio=1:1|theme=dark": __body0,
    // figma: Ratio=3:4, Theme=Dark
    "ratio=3:4|theme=dark": __body1,
    // figma: Ratio=2:3, Theme=Dark
    "ratio=2:3|theme=dark": __body2,
    // figma: Ratio=1:2, Theme=Dark
    "ratio=1:2|theme=dark": __body3
  };
  return (__impls[__vkey_RatioVertical4(props)] ?? __body0)();
}

// figma node: 4511:10583 부고장_v2_한지_Light
function V2Light(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 360,
      height: 2676,
      backgroundColor: "rgb(254,251,244)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 56,
      backgroundColor: "rgb(244,238,224)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 360,
      overflow: "hidden",
      backgroundColor: "rgb(254,251,244)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      backgroundColor: "rgb(154,117,54)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 18px 0px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.931,
    height: 12.068,
    viewBox: "0 0 13.931 12.068",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.035,
      top: 1.932,
      width: 13.931,
      height: 12.068,
      color: "rgb(251,243,226)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.825 0.642 L 5.291 0.318 L 5.289 0.321 L 5.825 0.642 Z M 0.179 10.068 L -0.358 9.747 L -0.363 9.756 L 0.179 10.068 Z M 1.319 12.068 L 1.312 12.693 L 1.319 12.693 L 1.319 12.068 Z M 12.612 12.068 L 12.612 12.694 L 12.619 12.693 L 12.612 12.068 Z M 13.752 10.068 L 14.293 9.756 L 14.288 9.747 L 13.752 10.068 Z M 8.105 0.642 L 8.642 0.321 L 8.64 0.318 L 8.105 0.642 Z M 6.965 0 L 6.965 -0.625 L 6.965 0 Z M 5.825 0.642 L 5.289 0.321 L -0.357 9.747 L 0.179 10.068 L 0.715 10.39 L 6.362 0.963 L 5.825 0.642 Z M 0.179 10.068 L -0.363 9.756 C -0.534 10.052 -0.624 10.388 -0.625 10.73 L 0 10.732 L 0.625 10.733 C 0.625 10.61 0.658 10.488 0.72 10.381 L 0.179 10.068 Z M 0 10.732 L -0.625 10.73 C -0.626 11.072 -0.537 11.408 -0.368 11.705 L 0.175 11.396 L 0.718 11.086 C 0.657 10.979 0.625 10.857 0.625 10.733 L 0 10.732 Z M 0.175 11.396 L -0.368 11.705 C -0.199 12.002 0.045 12.25 0.34 12.423 L 0.657 11.884 L 0.974 11.346 C 0.868 11.283 0.779 11.193 0.718 11.086 L 0.175 11.396 Z M 0.657 11.884 L 0.34 12.423 C 0.635 12.596 0.97 12.69 1.312 12.693 L 1.319 12.068 L 1.326 11.444 C 1.202 11.442 1.081 11.408 0.974 11.346 L 0.657 11.884 Z M 1.319 12.068 L 1.319 12.693 L 12.612 12.693 L 12.612 12.068 L 12.612 11.443 L 1.319 11.443 L 1.319 12.068 Z M 12.612 12.068 L 12.619 12.693 C 12.961 12.69 13.296 12.596 13.591 12.423 L 13.274 11.884 L 12.957 11.346 C 12.85 11.408 12.729 11.442 12.605 11.444 L 12.612 12.068 Z M 13.274 11.884 L 13.591 12.423 C 13.885 12.25 14.129 12.002 14.299 11.705 L 13.756 11.396 L 13.213 11.086 C 13.151 11.193 13.063 11.283 12.957 11.346 L 13.274 11.884 Z M 13.756 11.396 L 14.299 11.705 C 14.468 11.408 14.557 11.072 14.556 10.73 L 13.931 10.732 L 13.306 10.733 C 13.306 10.857 13.274 10.979 13.213 11.086 L 13.756 11.396 Z M 13.931 10.732 L 14.556 10.73 C 14.555 10.388 14.464 10.052 14.293 9.756 L 13.752 10.068 L 13.211 10.381 C 13.273 10.488 13.305 10.61 13.306 10.733 L 13.931 10.732 Z M 13.752 10.068 L 14.288 9.747 L 8.642 0.321 L 8.105 0.642 L 7.569 0.963 L 13.216 10.39 L 13.752 10.068 Z M 8.105 0.642 L 8.64 0.318 C 8.465 0.03 8.219 -0.208 7.926 -0.373 L 7.619 0.171 L 7.313 0.716 C 7.419 0.776 7.508 0.862 7.571 0.966 L 8.105 0.642 Z M 7.619 0.171 L 7.926 -0.373 C 7.633 -0.538 7.302 -0.625 6.965 -0.625 L 6.965 0 L 6.965 0.625 C 7.087 0.625 7.207 0.656 7.313 0.716 L 7.619 0.171 Z M 6.965 0 L 6.965 -0.625 C 6.629 -0.625 6.298 -0.538 6.005 -0.373 L 6.311 0.171 L 6.618 0.716 C 6.724 0.656 6.844 0.625 6.965 0.625 L 6.965 0 Z M 6.311 0.171 L 6.005 -0.373 C 5.711 -0.208 5.466 0.03 5.291 0.318 L 5.825 0.642 L 6.36 0.966 C 6.423 0.862 6.512 0.776 6.618 0.716 L 6.311 0.171 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.250,
    height: 2.667,
    viewBox: "-0.625 0 1.250 2.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 6,
      width: 1.25,
      height: 2.667,
      color: "rgb(251,243,226)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.625 0 C 0.625 -0.345 0.345 -0.625 0 -0.625 C -0.345 -0.625 -0.625 -0.345 -0.625 0 L 0 0 L 0.625 0 Z M -0.625 2.667 C -0.625 3.012 -0.345 3.292 0 3.292 C 0.345 3.292 0.625 3.012 0.625 2.667 L 0 2.667 L -0.625 2.667 Z M 0 0 L -0.625 0 L -0.625 2.667 L 0 2.667 L 0.625 2.667 L 0.625 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.006,
    height: 1.250,
    viewBox: "0 -0.625 0.006 1.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 11.333,
      width: 0.006,
      height: 1.25,
      color: "rgb(251,243,226)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.625 C -0.345 -0.625 -0.625 -0.345 -0.625 0 C -0.625 0.345 -0.345 0.625 0 0.625 L 0 0 L 0 -0.625 Z M 0.006 0.625 C 0.351 0.625 0.631 0.345 0.631 0 C 0.631 -0.345 0.351 -0.625 0.006 -0.625 L 0.006 0 L 0.006 0.625 Z M 0 0 L 0 0.625 L 0.006 0.625 L 0.006 0 L 0.006 -0.625 L 0 -0.625 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.3849999904632568,
      letterSpacing: "-0.200px",
      color: "rgb(251,243,226)",
      flexShrink: 0
    }
  }, "\uC8FC\uCC28 \uACF5\uAC04\uC774 \uBD80\uC871\uD558\uC624\uB2C8 \uB300\uC911\uAD50\uD1B5 \uC774\uC6A9\uC744 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(243,236,224)",
      display: "flex",
      flexDirection: "column",
      padding: "20px 20px 32px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 420,
      maxHeight: null,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(232,220,200)",
      boxShadow: "inset 0 0 0 1px rgb(227,221,208)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.200,
    height: 13.200,
    viewBox: "0 0 13.200 13.200",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.4,
      top: 1.4,
      width: 13.2,
      height: 13.2,
      color: "var(--section-foreground-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.6 C 0 2.955 2.955 0 6.6 0 C 10.245 0 13.2 2.955 13.2 6.6 C 13.2 10.245 10.245 13.2 6.6 13.2 C 2.955 13.2 0 10.245 0 6.6 Z M 7.267 3.933 C 7.267 4.301 6.968 4.6 6.6 4.6 C 6.232 4.6 5.933 4.301 5.933 3.933 C 5.933 3.565 6.232 3.267 6.6 3.267 C 6.968 3.267 7.267 3.565 7.267 3.933 Z M 6.6 5.667 C 6.931 5.667 7.2 5.935 7.2 6.267 L 7.2 9.267 C 7.2 9.598 6.931 9.867 6.6 9.867 C 6.269 9.867 6 9.598 6 9.267 L 6 6.267 C 6 5.935 6.269 5.667 6.6 5.667 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 32,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "5px 2px 5px 2px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.88,
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1.4290000200271606,
      letterSpacing: "-0.200px",
      color: "var(--section-foreground-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "0\uC6D4 00\uC77C 00:00\uBD80\uD130 000\uD638\uC2E4 \uC785\uC2E4 \uC608\uC815"))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.88,
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      overflow: "hidden",
      lineHeight: 1.4290000200271606,
      letterSpacing: "-0.200px",
      color: "var(--section-chip-text)",
      textDecoration: "underline",
      flexShrink: 0
    }
  }, "\uC548\uB0B4"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 324,
      display: "flex",
      flexDirection: "row",
      gap: 18,
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28.107,
      height: 52,
      opacity: 0.3,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.136,
    height: 44.987,
    viewBox: "0 0 17.136 44.987",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.833,
      top: 7.013,
      width: 17.136,
      height: 44.987,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.077 45.363 C 17.285 45.396 17.48 45.254 17.513 45.046 C 17.545 44.839 17.404 44.643 17.196 44.61 L 17.136 44.987 L 17.077 45.363 Z M 1.633 11.256 L 1.275 11.126 L 1.275 11.126 L 1.633 11.256 Z M 10.345 0.302 C 10.511 0.173 10.542 -0.066 10.413 -0.233 C 10.284 -0.4 10.045 -0.43 9.879 -0.302 L 10.112 0 L 10.345 0.302 Z M 17.136 44.987 L 17.196 44.61 C 9.856 43.45 4.924 38.3 2.386 31.837 C -0.155 25.367 -0.274 17.623 1.991 11.386 L 1.633 11.256 L 1.275 11.126 C -1.056 17.543 -0.93 25.478 1.676 32.116 C 4.286 38.761 9.403 44.15 17.077 45.363 L 17.136 44.987 Z M 1.633 11.256 L 1.991 11.386 C 3.598 6.962 6.618 3.181 10.345 0.302 L 10.112 0 L 9.879 -0.302 C 6.057 2.651 2.939 6.545 1.275 11.126 L 1.633 11.256 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28.107,
      height: 50.198,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.786,
    height: 14.091,
    viewBox: "0 0 3.786 14.091",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.577,
      top: 36.107,
      width: 3.786,
      height: 14.091,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.577 14.091 C 2.577 14.091 6.188 8.272 0.928 0 C 0.731 0.443 -1.855 7.69 2.577 14.091 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.998,
    height: 5.891,
    viewBox: "0 0 12.998 5.891",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.711,
      top: 42.127,
      width: 12.998,
      height: 5.891,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.998 5.71 C 12.998 5.71 6.379 7.467 0 0.025 C 0.481 -0.036 8.168 -0.395 12.998 5.71 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.894,
    height: 10.167,
    viewBox: "0 0 9.894 10.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 29.252,
      width: 9.894,
      height: 10.167,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.894 10.167 C 9.894 10.167 3.102 9.299 0 0 C 0.468 0.125 7.723 2.692 9.894 10.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.117,
    height: 12.807,
    viewBox: "0 0 6.117 12.807",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.605,
      top: 17.273,
      width: 6.117,
      height: 12.807,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.103 12.807 C 6.103 12.807 -0.051 9.802 0 0 C 0.403 0.27 6.449 5.03 6.103 12.807 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.926,
    height: 13.974,
    viewBox: "0 0 3.926 13.974",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.469,
      top: 6.224,
      width: 3.926,
      height: 13.974,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.221 13.974 C 3.221 13.974 -1.902 9.43 0.774 0 C 1.09 0.368 5.639 6.574 3.221 13.974 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.897,
    height: 13.164,
    viewBox: "0 0 3.897 13.164",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.11,
      top: 0,
      width: 3.897,
      height: 13.164,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.754 13.164 C 0.754 13.164 -2.143 7.275 3.419 0 C 3.567 0.439 5.394 7.574 0.754 13.164 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.279,
    height: 15.220,
    viewBox: "0 0 4.279 15.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.544,
      top: 28.606,
      width: 4.279,
      height: 15.22,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.704 15.22 C 0.704 15.22 6.279 10.161 3.504 0 C 3.156 0.403 -1.801 6.927 0.704 15.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.066,
    height: 13.198,
    viewBox: "0 0 6.066 13.198",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.206,
      top: 19.293,
      width: 6.066,
      height: 13.198,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 13.198 C 0 13.198 5.846 9.883 6.066 0 C 5.646 0.286 0.014 4.699 0 13.198 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.472,
    height: 10.537,
    viewBox: "0 0 10.472 10.537",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.909,
      top: 9.694,
      width: 10.472,
      height: 10.537,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.879 2.632 C 6.555 1.415 8.483 0.576 10.472 0 C 10.468 0.413 10.411 0.824 10.304 1.223 C 10.17 1.716 9.96 2.186 9.729 2.641 C 7.876 6.281 4.111 9.729 0 10.537 C 0.013 10.074 0.326 9.454 0.455 9 C 1.2 6.374 2.656 4.248 4.88 2.632 L 4.879 2.632 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.130,
    height: 6.130,
    viewBox: "0 0 12.130 6.130",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.976,
      top: 2.505,
      width: 12.13,
      height: 6.13,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.384 3.439 C 5.115 1.232 8.616 -0.004 12.127 0 C 12.211 1.104 10.757 2.123 9.995 2.699 C 8.25 4.018 6.414 4.917 4.28 5.493 C 2.967 5.847 1.491 6.133 0.127 6.13 C 0.086 6.13 0.04 6.127 0.015 6.095 C -0.021 6.049 0.014 5.983 0.048 5.936 C 0.318 5.561 0.666 5.253 0.95 4.889 C 1.374 4.346 1.849 3.872 2.385 3.439 L 2.384 3.439 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Serif KR\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 40,
      whiteSpace: "nowrap",
      lineHeight: 1.3580000400543213,
      letterSpacing: "-2.360px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\u8A03  \u544A"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,1,0,0)",
      width: 28.107,
      height: 52,
      opacity: 0.3,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.136,
    height: 44.987,
    viewBox: "0 0 17.136 44.987",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.833,
      top: 7.013,
      width: 17.136,
      height: 44.987,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.077 45.363 C 17.285 45.396 17.48 45.254 17.513 45.046 C 17.545 44.839 17.404 44.643 17.196 44.61 L 17.136 44.987 L 17.077 45.363 Z M 1.633 11.256 L 1.275 11.126 L 1.275 11.126 L 1.633 11.256 Z M 10.345 0.302 C 10.511 0.173 10.542 -0.066 10.413 -0.233 C 10.284 -0.4 10.045 -0.43 9.879 -0.302 L 10.112 0 L 10.345 0.302 Z M 17.136 44.987 L 17.196 44.61 C 9.856 43.45 4.924 38.3 2.386 31.837 C -0.155 25.367 -0.274 17.623 1.991 11.386 L 1.633 11.256 L 1.275 11.126 C -1.056 17.543 -0.93 25.478 1.676 32.116 C 4.286 38.761 9.403 44.15 17.077 45.363 L 17.136 44.987 Z M 1.633 11.256 L 1.991 11.386 C 3.598 6.962 6.618 3.181 10.345 0.302 L 10.112 0 L 9.879 -0.302 C 6.057 2.651 2.939 6.545 1.275 11.126 L 1.633 11.256 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28.107,
      height: 50.198,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.786,
    height: 14.091,
    viewBox: "0 0 3.786 14.091",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.577,
      top: 36.107,
      width: 3.786,
      height: 14.091,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.577 14.091 C 2.577 14.091 6.188 8.272 0.928 0 C 0.731 0.443 -1.855 7.69 2.577 14.091 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.998,
    height: 5.891,
    viewBox: "0 0 12.998 5.891",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.711,
      top: 42.127,
      width: 12.998,
      height: 5.891,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.998 5.71 C 12.998 5.71 6.379 7.467 0 0.025 C 0.481 -0.036 8.168 -0.395 12.998 5.71 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.894,
    height: 10.167,
    viewBox: "0 0 9.894 10.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 29.252,
      width: 9.894,
      height: 10.167,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.894 10.167 C 9.894 10.167 3.102 9.299 0 0 C 0.468 0.125 7.723 2.692 9.894 10.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.117,
    height: 12.807,
    viewBox: "0 0 6.117 12.807",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.605,
      top: 17.273,
      width: 6.117,
      height: 12.807,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.103 12.807 C 6.103 12.807 -0.051 9.802 0 0 C 0.403 0.27 6.449 5.03 6.103 12.807 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.926,
    height: 13.974,
    viewBox: "0 0 3.926 13.974",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.469,
      top: 6.224,
      width: 3.926,
      height: 13.974,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.221 13.974 C 3.221 13.974 -1.902 9.43 0.774 0 C 1.09 0.368 5.639 6.574 3.221 13.974 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.897,
    height: 13.164,
    viewBox: "0 0 3.897 13.164",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.11,
      top: 0,
      width: 3.897,
      height: 13.164,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.754 13.164 C 0.754 13.164 -2.143 7.275 3.419 0 C 3.567 0.439 5.394 7.574 0.754 13.164 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.279,
    height: 15.220,
    viewBox: "0 0 4.279 15.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.544,
      top: 28.606,
      width: 4.279,
      height: 15.22,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.704 15.22 C 0.704 15.22 6.279 10.161 3.504 0 C 3.156 0.403 -1.801 6.927 0.704 15.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.066,
    height: 13.198,
    viewBox: "0 0 6.066 13.198",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.206,
      top: 19.293,
      width: 6.066,
      height: 13.198,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 13.198 C 0 13.198 5.846 9.883 6.066 0 C 5.646 0.286 0.014 4.699 0 13.198 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.472,
    height: 10.537,
    viewBox: "0 0 10.472 10.537",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.909,
      top: 9.694,
      width: 10.472,
      height: 10.537,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.879 2.632 C 6.555 1.415 8.483 0.576 10.472 0 C 10.468 0.413 10.411 0.824 10.304 1.223 C 10.17 1.716 9.96 2.186 9.729 2.641 C 7.876 6.281 4.111 9.729 0 10.537 C 0.013 10.074 0.326 9.454 0.455 9 C 1.2 6.374 2.656 4.248 4.88 2.632 L 4.879 2.632 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.130,
    height: 6.130,
    viewBox: "0 0 12.130 6.130",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.976,
      top: 2.505,
      width: 12.13,
      height: 6.13,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.384 3.439 C 5.115 1.232 8.616 -0.004 12.127 0 C 12.211 1.104 10.757 2.123 9.995 2.699 C 8.25 4.018 6.414 4.917 4.28 5.493 C 2.967 5.847 1.491 6.133 0.127 6.13 C 0.086 6.13 0.04 6.127 0.015 6.095 C -0.021 6.049 0.014 5.983 0.048 5.936 C 0.318 5.561 0.666 5.253 0.95 4.889 C 1.374 4.346 1.849 3.872 2.385 3.439 L 2.384 3.439 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 324,
      display: "flex",
      flexDirection: "row",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 120,
    height: 160,
    viewBox: "0 0 120 160",
    fill: "none",
    style: {
      position: "relative",
      width: 120,
      height: 160,
      overflow: "hidden",
      borderRadius: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 C 0 3.582 3.582 0 8 0 L 112 0 C 116.418 0 120 3.582 120 8 L 120 152 C 120 156.418 116.418 160 112 160 L 8 160 C 3.582 160 0 156.418 0 152 L 0 8 Z",
    fill: "rgba(112,115,124,0.16)",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 324,
      height: 158,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 30,
      whiteSpace: "pre-wrap",
      lineHeight: "100%",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(36,26,16)",
      fontSize: 32
    }
  }, "故테스트"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "rgb(36,26,16)",
      fontSize: 18,
      textTransform: "none",
      fontVariant: "normal"
    }
  }, "(세나)"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "rgb(36,26,16)",
      fontSize: 18
    }
  }, "님")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(122,107,82)",
      flexShrink: 0
    }
  }, "0\uC138 \xB7 \uC5EC\uC131")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.92,
      display: "flex",
      flexDirection: "column",
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(94,68,38)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(94,68,38)"
    }
  }, "故 테스트님께서"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(94,68,38)"
    }
  }, " 6월 4일"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(94,68,38)"
    }
  }, " 선종하셨기에"), "\n", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(94,68,38)"
    }
  }, "삼가 알려드립니다.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(232,220,200)",
      borderTop: "1px solid rgb(227,221,208)",
      borderRight: "1px solid rgb(227,221,208)",
      borderBottom: "1px solid rgb(227,221,208)",
      borderLeft: "1px solid rgb(227,221,208)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "12px 16px 12px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.943,-0.333,0.333,0.943,0,3.515)",
      transformOrigin: "0 0",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1,
      height: 24,
      background: "rgba(112,115,124,0.12)", borderRadius: 4, overflow: "hidden"
    }
  }, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.867,
    height: 12.867,
    viewBox: "0 0 12.867 12.867",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.567,
      top: 1.567,
      width: 12.867,
      height: 12.867,
      color: "rgb(138,124,98)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.433 0 C 2.88 0 0 2.88 0 6.433 C 0 9.986 2.88 12.867 6.433 12.867 C 7.459 12.867 8.43 12.626 9.291 12.198 L 10.5 12.528 C 10.773 12.602 11.017 12.669 11.217 12.704 C 11.42 12.74 11.678 12.765 11.935 12.666 C 12.272 12.538 12.538 12.272 12.666 11.935 C 12.765 11.678 12.74 11.42 12.704 11.217 C 12.669 11.017 12.602 10.773 12.528 10.5 L 12.198 9.291 C 12.626 8.43 12.866 7.459 12.866 6.433 C 12.866 2.88 9.986 0 6.433 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexGrow: 1
    }
  }, "\uC548\uB0B4 \uBA54\uC138\uC9C0")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 101,
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px 10px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(232,220,200)",
      borderTop: "1px solid rgb(227,221,208)",
      borderRight: "1px solid rgb(227,221,208)",
      borderBottom: "1px solid rgb(227,221,208)",
      borderLeft: "1px solid rgb(227,221,208)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "14px 18px 14px 18px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(154,117,54)",
      flexShrink: 0
    }
  }, "\uC544\uC774\uB9AC\uC2A4\uC2A4\uB9C8\uD2B8 \uC7A5\uB840\uC2DD\uC7A5"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "28.500px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "VIP 1\uD638\uC2E4")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "32px 20px 32px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 1,
    viewBox: "0 0 20 1",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 1,
      flexShrink: 0,
      color: "rgb(138,124,98)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 20 0 L 20 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "4px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uC0C1 \uC8FC")), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 1,
    viewBox: "0 0 20 1",
    fill: "none",
    style: {
      position: "relative",
      width: 20,
      height: 1,
      flexShrink: 0,
      color: "rgb(138,124,98)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 20 0 L 20 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 250,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(235,226,207)",
      borderRight: "1px solid rgb(235,226,207)",
      borderBottom: "1px solid rgb(235,226,207)",
      borderLeft: "1px solid rgb(235,226,207)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(138,124,98)",
      flexShrink: 0
    }
  }, "\uC544\uB4E4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uAE40\uBBFC\uC900, \uAE40\uB3C4\uD604, \uAE40\uC11C\uC900"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(235,226,207)",
      borderRight: "1px solid rgb(235,226,207)",
      borderBottom: "1px solid rgb(235,226,207)",
      borderLeft: "1px solid rgb(235,226,207)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(138,124,98)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uBC30\uC6B0\uC790")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uAE40\uC2B9\uD604"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(235,226,207)",
      borderRight: "1px solid rgb(235,226,207)",
      borderBottom: "1px solid rgb(235,226,207)",
      borderLeft: "1px solid rgb(235,226,207)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(138,124,98)",
      flexShrink: 0
    }
  }, "\uB538")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uAE40\uC9C0\uC6B0, \uAE40\uC11C\uC5F0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(235,226,207)",
      borderRight: "1px solid rgb(235,226,207)",
      borderBottom: "1px solid rgb(235,226,207)",
      borderLeft: "1px solid rgb(235,226,207)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(138,124,98)",
      flexShrink: 0
    }
  }, "\uC790\uBD80")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uBC15\uD558\uB098 "), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      borderRadius: 1123.875,
      backgroundColor: "rgb(154,117,54)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.231,
    height: 18.268,
    viewBox: "0 0 18.231 18.268",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.884,
      top: 2.866,
      width: 18.231,
      height: 18.268,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.546 6.411 L 8.546 7.7 C 8.546 7.82 8.522 7.938 8.474 8.048 C 8.426 8.157 8.355 8.256 8.267 8.337 C 8.179 8.418 8.075 8.479 7.962 8.518 C 7.848 8.556 7.728 8.57 7.609 8.559 C 6.287 8.415 5.017 7.963 3.901 7.24 C 2.863 6.581 1.982 5.7 1.323 4.662 C 0.597 3.541 0.146 2.265 0.003 0.937 C -0.007 0.818 0.007 0.698 0.045 0.585 C 0.083 0.472 0.144 0.368 0.225 0.28 C 0.305 0.192 0.403 0.122 0.512 0.073 C 0.621 0.025 0.739 0 0.859 0 L 2.148 0 C 2.356 -0.002 2.558 0.072 2.716 0.208 C 2.875 0.344 2.978 0.533 3.007 0.739 C 3.062 1.152 3.163 1.557 3.308 1.947 C 3.366 2.1 3.378 2.267 3.344 2.428 C 3.31 2.589 3.23 2.736 3.114 2.853 L 2.569 3.399 C 3.18 4.475 4.071 5.365 5.147 5.977 L 5.693 5.431 C 5.809 5.316 5.957 5.236 6.118 5.202 C 6.278 5.168 6.445 5.18 6.599 5.238 C 6.989 5.383 7.394 5.484 7.807 5.539 C 8.015 5.568 8.206 5.673 8.342 5.834 C 8.478 5.995 8.551 6.2 8.546 6.411 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, ", \uBC15\uB450\uC6B8, \uBC15\uC138\uC5E3 "), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      borderRadius: 1123.875,
      backgroundColor: "rgb(154,117,54)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.231,
    height: 18.268,
    viewBox: "0 0 18.231 18.268",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.884,
      top: 2.866,
      width: 18.231,
      height: 18.268,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.546 6.411 L 8.546 7.7 C 8.546 7.82 8.522 7.938 8.474 8.048 C 8.426 8.157 8.355 8.256 8.267 8.337 C 8.179 8.418 8.075 8.479 7.962 8.518 C 7.848 8.556 7.728 8.57 7.609 8.559 C 6.287 8.415 5.017 7.963 3.901 7.24 C 2.863 6.581 1.982 5.7 1.323 4.662 C 0.597 3.541 0.146 2.265 0.003 0.937 C -0.007 0.818 0.007 0.698 0.045 0.585 C 0.083 0.472 0.144 0.368 0.225 0.28 C 0.305 0.192 0.403 0.122 0.512 0.073 C 0.621 0.025 0.739 0 0.859 0 L 2.148 0 C 2.356 -0.002 2.558 0.072 2.716 0.208 C 2.875 0.344 2.978 0.533 3.007 0.739 C 3.062 1.152 3.163 1.557 3.308 1.947 C 3.366 2.1 3.378 2.267 3.344 2.428 C 3.31 2.589 3.23 2.736 3.114 2.853 L 2.569 3.399 C 3.18 4.475 4.071 5.365 5.147 5.977 L 5.693 5.431 C 5.809 5.316 5.957 5.236 6.118 5.202 C 6.278 5.168 6.445 5.18 6.599 5.238 C 6.989 5.383 7.394 5.484 7.807 5.539 C 8.015 5.568 8.206 5.673 8.342 5.834 C 8.478 5.995 8.551 6.2 8.546 6.411 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(138,124,98)",
      flexShrink: 0
    }
  }, "\uC0AC\uC704")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uC815\uD558\uB098 "), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      borderRadius: 999,
      backgroundColor: "rgb(232,220,200)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.231,
    height: 18.268,
    viewBox: "0 0 18.231 18.268",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.884,
      top: 2.866,
      width: 18.231,
      height: 18.268,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.546 6.411 L 8.546 7.7 C 8.546 7.82 8.522 7.938 8.474 8.048 C 8.426 8.157 8.355 8.256 8.267 8.337 C 8.179 8.418 8.075 8.479 7.962 8.518 C 7.848 8.556 7.728 8.57 7.609 8.559 C 6.287 8.415 5.017 7.963 3.901 7.24 C 2.863 6.581 1.982 5.7 1.323 4.662 C 0.597 3.541 0.146 2.265 0.003 0.937 C -0.007 0.818 0.007 0.698 0.045 0.585 C 0.083 0.472 0.144 0.368 0.225 0.28 C 0.305 0.192 0.403 0.122 0.512 0.073 C 0.621 0.025 0.739 0 0.859 0 L 2.148 0 C 2.356 -0.002 2.558 0.072 2.716 0.208 C 2.875 0.344 2.978 0.533 3.007 0.739 C 3.062 1.152 3.163 1.557 3.308 1.947 C 3.366 2.1 3.378 2.267 3.344 2.428 C 3.31 2.589 3.23 2.736 3.114 2.853 L 2.569 3.399 C 3.18 4.475 4.071 5.365 5.147 5.977 L 5.693 5.431 C 5.809 5.316 5.957 5.236 6.118 5.202 C 6.278 5.168 6.445 5.18 6.599 5.238 C 6.989 5.383 7.394 5.484 7.807 5.539 C 8.015 5.568 8.206 5.673 8.342 5.834 C 8.478 5.995 8.551 6.2 8.546 6.411 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, ", \uC815\uB450\uC6B8")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 154,
      height: 110,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,217,197), 0px 1px 2px -1px rgba(23,23,23,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 18px 16px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "rgb(243,236,224)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(RatioVertical4, {
    style: {
      position: "relative",
      width: 24,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1",
    theme: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.857,
    height: 17.691,
    viewBox: "0 0 18.857 17.691",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.572,
      top: 3.154,
      width: 18.857,
      height: 17.691,
      color: "var(--label-normal)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.429 0 C 4.224 0 0 3.281 0 7.317 C 0 9.834 1.631 12.031 4.12 13.37 L 3.074 17.207 C 3.054 17.283 3.058 17.364 3.085 17.438 C 3.113 17.512 3.162 17.576 3.227 17.621 C 3.291 17.666 3.368 17.69 3.447 17.691 C 3.526 17.691 3.603 17.667 3.668 17.622 L 8.25 14.577 C 8.637 14.577 9.033 14.643 9.429 14.643 C 14.633 14.643 18.857 11.361 18.857 7.317 C 18.857 3.272 14.633 0 9.429 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 154,
      height: 110,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,217,197), 0px 1px 2px -1px rgba(23,23,23,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 18px 16px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "rgb(243,236,224)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16.001,
    viewBox: "0 0 16 16.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16.001,
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 7.718 L 15.294 7.718 L 15.294 7.718 L 16 7.718 Z M 8.188 15.436 L 8.197 14.73 L 8.186 14.73 L 8.188 15.436 Z M 4.8 14.702 L 5.094 14.06 C 4.944 13.991 4.775 13.977 4.616 14.02 L 4.8 14.702 Z M 0 16.001 L -0.671 15.782 C -0.751 16.028 -0.69 16.299 -0.512 16.487 C -0.333 16.675 -0.066 16.75 0.184 16.682 L 0 16.001 Z M 1.186 12.368 L 1.857 12.587 C 1.916 12.406 1.899 12.208 1.811 12.04 L 1.186 12.368 Z M 0.376 7.718 L 1.076 7.816 C 1.08 7.783 1.082 7.751 1.082 7.718 L 0.376 7.718 Z M 8.188 0.001 L 8.18 0.706 C 8.185 0.706 8.191 0.706 8.197 0.706 L 8.188 0.001 Z M 16 7.718 L 15.294 7.718 C 15.294 8.646 15.11 9.565 14.752 10.421 L 15.404 10.694 L 16.055 10.966 C 16.485 9.937 16.706 8.833 16.706 7.718 L 16 7.718 Z M 15.404 10.694 L 14.752 10.421 C 14.395 11.278 13.87 12.055 13.21 12.707 L 13.706 13.209 L 14.202 13.711 C 14.996 12.928 15.625 11.994 16.055 10.966 L 15.404 10.694 Z M 13.706 13.209 L 13.21 12.707 C 12.55 13.359 11.767 13.874 10.906 14.221 L 11.171 14.876 L 11.435 15.53 C 12.469 15.113 13.409 14.495 14.202 13.711 L 13.706 13.209 Z M 11.171 14.876 L 10.906 14.221 C 10.046 14.568 9.125 14.741 8.197 14.73 L 8.188 15.436 L 8.18 16.142 C 9.294 16.155 10.401 15.947 11.435 15.53 L 11.171 14.876 Z M 8.188 15.436 L 8.186 14.73 C 7.119 14.733 6.064 14.504 5.094 14.06 L 4.8 14.702 L 4.506 15.344 C 5.662 15.873 6.919 16.145 8.19 16.142 L 8.188 15.436 Z M 4.8 14.702 L 4.616 14.02 L -0.184 15.319 L 0 16.001 L 0.184 16.682 L 4.984 15.383 L 4.8 14.702 Z M 0 16.001 L 0.671 16.22 L 1.857 12.587 L 1.186 12.368 L 0.515 12.149 L -0.671 15.782 L 0 16.001 Z M 1.186 12.368 L 1.811 12.04 C 1.131 10.743 0.874 9.266 1.076 7.816 L 0.376 7.718 L -0.323 7.621 C -0.565 9.363 -0.256 11.138 0.561 12.696 L 1.186 12.368 Z M 0.376 7.718 L 1.082 7.718 C 1.082 6.79 1.266 5.871 1.624 5.015 L 0.973 4.743 L 0.321 4.471 C -0.108 5.5 -0.329 6.603 -0.329 7.718 L 0.376 7.718 Z M 0.973 4.743 L 1.624 5.015 C 1.982 4.159 2.506 3.382 3.166 2.73 L 2.67 2.227 L 2.174 1.725 C 1.381 2.509 0.751 3.442 0.321 4.471 L 0.973 4.743 Z M 2.67 2.227 L 3.166 2.73 C 3.826 2.077 4.609 1.563 5.47 1.215 L 5.206 0.561 L 4.942 -0.094 C 3.908 0.323 2.967 0.942 2.174 1.725 L 2.67 2.227 Z M 5.206 0.561 L 5.47 1.215 C 6.331 0.868 7.252 0.695 8.18 0.706 L 8.188 0.001 L 8.197 -0.705 C 7.082 -0.719 5.976 -0.511 4.942 -0.094 L 5.206 0.561 Z M 8.188 0.001 L 8.197 0.706 C 9.125 0.695 10.046 0.868 10.906 1.215 L 11.171 0.561 L 11.435 -0.094 C 10.401 -0.511 9.294 -0.719 8.18 -0.705 L 8.188 0.001 Z M 11.171 0.561 L 10.906 1.215 C 11.767 1.563 12.55 2.077 13.21 2.73 L 13.706 2.227 L 14.202 1.725 C 13.409 0.942 12.469 0.323 11.435 -0.094 L 11.171 0.561 Z M 13.706 2.227 L 13.21 2.73 C 13.87 3.382 14.395 4.159 14.752 5.015 L 15.404 4.743 L 16.055 4.471 C 15.625 3.442 14.996 2.509 14.202 1.725 L 13.706 2.227 Z M 15.404 4.743 L 14.752 5.015 C 15.11 5.871 15.294 6.79 15.294 7.718 L 16 7.718 L 16.706 7.718 C 16.706 6.603 16.485 5.5 16.055 4.471 L 15.404 4.743 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 3,
    viewBox: "0 0 6 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 10.5,
      width: 6,
      height: 3,
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 6 0.75 C 6.414 0.75 6.75 0.414 6.75 0 C 6.75 -0.414 6.414 -0.75 6 -0.75 L 6 0 L 6 0.75 Z M 0 2.25 C -0.414 2.25 -0.75 2.586 -0.75 3 C -0.75 3.414 -0.414 3.75 0 3.75 L 0 3 L 0 2.25 Z M 3.6 3.75 C 4.014 3.75 4.35 3.414 4.35 3 C 4.35 2.586 4.014 2.25 3.6 2.25 L 3.6 3 L 3.6 3.75 Z M 0 0 L 0 0.75 L 6 0.75 L 6 0 L 6 -0.75 L 0 -0.75 L 0 0 Z M 0 3 L 0 3.75 L 3.6 3.75 L 3.6 3 L 3.6 2.25 L 0 2.25 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uBB38\uC790 \uACF5\uC720"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 90,
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(229,217,197)",
      borderRight: "1px solid rgb(229,217,197)",
      borderBottom: "1px solid rgb(229,217,197)",
      borderLeft: "1px solid rgb(229,217,197)",
      boxShadow: "0px 1px 2px -1px rgba(23,23,23,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      padding: "16px 18px 16px 18px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "rgb(243,236,224)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon7, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    name: "envelope",
    theme: "light"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uBD80\uC758\uAE08 \uBCF4\uB0B4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(138,124,98)",
      flexShrink: 0
    }
  }, "\uAC04\uD3B8\uD558\uAC8C \uB9C8\uC74C \uC804\uD558\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.300,
    height: 14.800,
    viewBox: "0 0 8.300 14.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.6,
      top: 4.6,
      width: 8.3,
      height: 14.8,
      color: "var(--section-foreground-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 0.264 C -0.088 0.615 -0.088 1.185 0.264 1.536 L 6.127 7.4 L 0.264 13.264 C -0.088 13.615 -0.088 14.185 0.264 14.536 C 0.615 14.888 1.185 14.888 1.536 14.536 L 8.036 8.036 C 8.388 7.685 8.388 7.115 8.036 6.764 L 1.536 0.264 C 1.185 -0.088 0.615 -0.088 0.264 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("svg", {
    height: 8,
    viewBox: "0 0 360 8",
    fill: "none",
    style: {
      position: "relative",
      height: 8,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(250,246,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 360 0 L 360 8 L 0 8 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "32px 20px 32px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(138,124,98)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "4px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uC7A5\uB840 \uC77C\uC815")), /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(138,124,98)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 114,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(138,124,98)",
      flexShrink: 0
    }
  }, "\uBC1C\uC778")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      whiteSpace: "nowrap",
      lineHeight: 1.4119999408721924,
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "03\uC6D4 15\uC77C(\uD1A0) 05:30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(138,124,98)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC785\uAD00 2026.03.14(\uAE08) 15:00")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(138,124,98)",
      flexShrink: 0
    }
  }, "\uC77C\uD3EC 2026.03.14(\uAE08)"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(235,226,207)",
      borderRight: "1px solid rgb(235,226,207)",
      borderBottom: "1px solid rgb(235,226,207)",
      borderLeft: "1px solid rgb(235,226,207)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(138,124,98)",
      flexShrink: 0
    }
  }, "\uC7A5\uC9C0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 9,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(237,223,194)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 10px 3px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.4290000200271606,
      letterSpacing: "-0.200px",
      color: "rgb(94,68,38)",
      flexShrink: 0
    }
  }, "1\uCC28\uC7A5\uC9C0")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uCDA9\uC8FC\uD654\uC7A5\uC7A5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(237,223,194)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 10px 3px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.4290000200271606,
      letterSpacing: "-0.200px",
      color: "rgb(94,68,38)",
      flexShrink: 0
    }
  }, "2\uCC28\uC7A5\uC9C0")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uCDA9\uC8FC\uACF5\uC6D0\uBB18\uC9C0"))))), /*#__PURE__*/React.createElement("svg", {
    height: 8,
    viewBox: "0 0 360 8",
    fill: "none",
    style: {
      position: "relative",
      height: 8,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(250,246,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 360 0 L 360 8 L 0 8 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "32px 20px 32px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(138,124,98)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "4px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uBE48\uC18C \uC704\uCE58")), /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(138,124,98)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 176,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 160,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(237,223,194)",
      boxShadow: "inset 0 0 0 1px rgb(232,220,200)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 93,
      top: 72,
      width: 115,
      height: 22,
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(138,124,98)"
    }
  }, "\uC7A5\uB840\uC2DD\uC7A5 \uC704\uCE58 \uC9C0\uB3C4"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 256,
    height: 256,
    viewBox: "0 0 256 256",
    fill: "none",
    style: {
      position: "absolute",
      left: -34,
      top: 245,
      width: 256,
      height: 256,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 256 0 L 256 256 L 0 256 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 256,
    height: 256,
    viewBox: "0 0 256 256",
    fill: "none",
    style: {
      position: "absolute",
      left: 222,
      top: -11,
      width: 256,
      height: 256,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 256 0 L 256 256 L 0 256 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 256,
    height: 256,
    viewBox: "0 0 256 256",
    fill: "none",
    style: {
      position: "absolute",
      left: -34,
      top: -11,
      width: 256,
      height: 256,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 256 0 L 256 256 L 0 256 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 256,
    height: 256,
    viewBox: "0 0 256 256",
    fill: "none",
    style: {
      position: "absolute",
      left: 222,
      top: 245,
      width: 256,
      height: 256,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 256 0 L 256 256 L 0 256 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 256,
    height: 256,
    viewBox: "0 0 256 256",
    fill: "none",
    style: {
      position: "absolute",
      left: 478,
      top: -11,
      width: 256,
      height: 256,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 256 0 L 256 256 L 0 256 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 256,
    height: 256,
    viewBox: "0 0 256 256",
    fill: "none",
    style: {
      position: "absolute",
      left: 478,
      top: 245,
      width: 256,
      height: 256,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 256 0 L 256 256 L 0 256 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 171,
      top: 118,
      height: 32,
      overflow: "hidden",
      borderRadius: 50,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 14px 27px 0px rgba(0,0,0,0.14)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      height: 28,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.4290000200271606,
      letterSpacing: "-0.200px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uD2F0\uB9F5 \uBC14\uB85C\uAC00\uAE30")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC11C\uC6B8 \uC601\uB4F1\uD3EC\uAD6C \uAD6D\uC81C\uAE08\uC735\uB85C2\uAE38 37\uC11C\uC6B8 \uC601\uB4F1\uD3EC\uAD6C \uAD6D\uC81C\uAE08\uC735\uB85C2\uAE38 37")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.4290000200271606,
      letterSpacing: "-0.200px",
      color: "rgb(138,124,98)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "[\uC9C0\uBC88] \uC5EC\uC758\uB3C4\uB3D9 26 S-TRENUE[\uC9C0\uBC88] \uC5EC\uC758\uB3C4\uB3D9 26 S-TRENUE[\uC9C0\uBC88] \uC5EC\uC758\uB3C4\uB3D9 26 S-TRENUE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(220,208,180)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.667,
      top: 6.667,
      width: 10,
      height: 10,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.875 0 L 1.875 0.65 L 8.125 0.65 L 8.125 0 L 8.125 -0.65 L 1.875 -0.65 L 1.875 0 Z M 8.125 0 L 8.125 0.65 C 8.802 0.65 9.35 1.198 9.35 1.875 L 10 1.875 L 10.65 1.875 C 10.65 0.48 9.52 -0.65 8.125 -0.65 L 8.125 0 Z M 10 1.875 L 9.35 1.875 L 9.35 8.125 L 10 8.125 L 10.65 8.125 L 10.65 1.875 L 10 1.875 Z M 10 8.125 L 9.35 8.125 C 9.35 8.802 8.802 9.35 8.125 9.35 L 8.125 10 L 8.125 10.65 C 9.52 10.65 10.65 9.52 10.65 8.125 L 10 8.125 Z M 8.125 10 L 8.125 9.35 L 1.875 9.35 L 1.875 10 L 1.875 10.65 L 8.125 10.65 L 8.125 10 Z M 1.875 10 L 1.875 9.35 C 1.198 9.35 0.65 8.802 0.65 8.125 L 0 8.125 L -0.65 8.125 C -0.65 9.52 0.48 10.65 1.875 10.65 L 1.875 10 Z M 0 8.125 L 0.65 8.125 L 0.65 1.875 L 0 1.875 L -0.65 1.875 L -0.65 8.125 L 0 8.125 Z M 0 1.875 L 0.65 1.875 C 0.65 1.198 1.198 0.65 1.875 0.65 L 1.875 0 L 1.875 -0.65 C 0.48 -0.65 -0.65 0.48 -0.65 1.875 L 0 1.875 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.333,
      top: 3.333,
      width: 10,
      height: 10,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.65 10 C -0.65 10.359 -0.359 10.65 0 10.65 C 0.359 10.65 0.65 10.359 0.65 10 L 0 10 L -0.65 10 Z M 0.625 0 L 0.625 0.65 L 0.625 0 Z M 10 0.65 C 10.359 0.65 10.65 0.359 10.65 0 C 10.65 -0.359 10.359 -0.65 10 -0.65 L 10 0 L 10 0.65 Z M 0 10 L 0.65 10 L 0.65 0.625 L 0 0.625 L -0.65 0.625 L -0.65 10 L 0 10 Z M 0 0.625 L 0.65 0.625 C 0.65 0.632 0.647 0.638 0.643 0.643 L 0.183 0.183 L -0.277 -0.277 C -0.516 -0.037 -0.65 0.287 -0.65 0.625 L 0 0.625 Z M 0.183 0.183 L 0.643 0.643 C 0.638 0.647 0.632 0.65 0.625 0.65 L 0.625 0 L 0.625 -0.65 C 0.287 -0.65 -0.037 -0.516 -0.277 -0.277 L 0.183 0.183 Z M 0.625 0 L 0.625 0.65 L 10 0.65 L 10 0 L 10 -0.65 L 0.625 -0.65 L 0.625 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: 1.2730000019073486,
      color: "rgb(154,117,54)",
      flexShrink: 0
    }
  }, "\uC8FC\uC18C\uBCF5\uC0AC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,217,197), 0px 1px 2px -1px rgba(23,23,23,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "rgb(243,236,224)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.231,
    height: 18.268,
    viewBox: "0 0 18.231 18.268",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.884,
      top: 2.866,
      width: 18.231,
      height: 18.268,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.231 13.677 L 17.396 13.656 C 17.396 13.663 17.396 13.67 17.396 13.677 L 18.231 13.677 Z M 18.231 16.427 L 17.396 16.427 L 17.396 16.43 L 18.231 16.427 Z M 16.232 18.26 L 16.142 19.09 C 16.147 19.091 16.152 19.091 16.157 19.092 L 16.232 18.26 Z M 8.322 15.446 L 8.775 14.745 L 8.769 14.741 L 8.322 15.446 Z M 2.822 9.946 L 3.526 9.498 L 3.523 9.493 L 2.822 9.946 Z M 0.007 1.998 L -0.824 2.074 L -0.823 2.087 L 0.007 1.998 Z M 1.832 0 L 1.832 -0.835 L 1.831 -0.835 L 1.832 0 Z M 4.582 0 L 4.582 0.835 L 4.59 0.835 L 4.582 0 Z M 6.415 1.577 L 7.243 1.467 L 7.242 1.46 L 6.415 1.577 Z M 7.057 4.153 L 6.274 4.444 L 6.275 4.446 L 7.057 4.153 Z M 6.644 6.087 L 7.235 6.677 L 7.238 6.674 L 6.644 6.087 Z M 5.48 7.251 L 4.89 6.66 C 4.624 6.926 4.568 7.337 4.754 7.664 L 5.48 7.251 Z M 10.98 12.751 L 10.567 13.477 C 10.894 13.663 11.305 13.607 11.57 13.341 L 10.98 12.751 Z M 12.144 11.587 L 11.557 10.993 L 11.554 10.996 L 12.144 11.587 Z M 14.078 11.174 L 13.784 11.956 L 13.787 11.957 L 14.078 11.174 Z M 16.654 11.816 L 16.771 10.989 L 16.764 10.988 L 16.654 11.816 Z M 18.231 13.677 L 17.396 13.677 L 17.396 16.427 L 18.231 16.427 L 19.066 16.427 L 19.066 13.677 L 18.231 13.677 Z M 18.231 16.427 L 17.396 16.43 C 17.396 16.569 17.368 16.707 17.312 16.834 L 18.077 17.169 L 18.842 17.503 C 18.991 17.163 19.067 16.795 19.066 16.423 L 18.231 16.427 Z M 18.077 17.169 L 17.312 16.834 C 17.256 16.962 17.175 17.076 17.072 17.17 L 17.637 17.785 L 18.201 18.4 C 18.475 18.149 18.693 17.844 18.842 17.503 L 18.077 17.169 Z M 17.637 17.785 L 17.072 17.17 C 16.97 17.264 16.849 17.335 16.717 17.38 L 16.985 18.171 L 17.252 18.962 C 17.604 18.843 17.928 18.652 18.201 18.4 L 17.637 17.785 Z M 16.985 18.171 L 16.717 17.38 C 16.586 17.424 16.446 17.441 16.308 17.428 L 16.232 18.26 L 16.157 19.092 C 16.527 19.125 16.9 19.081 17.252 18.962 L 16.985 18.171 Z M 16.232 18.26 L 16.323 17.43 C 13.632 17.135 11.048 16.216 8.775 14.745 L 8.322 15.446 L 7.868 16.147 C 10.359 17.759 13.192 18.767 16.142 19.09 L 16.232 18.26 Z M 8.322 15.446 L 8.769 14.741 C 6.658 13.4 4.868 11.609 3.526 9.498 L 2.822 9.946 L 2.117 10.394 C 3.59 12.712 5.555 14.678 7.874 16.151 L 8.322 15.446 Z M 2.822 9.946 L 3.523 9.493 C 2.047 7.21 1.127 4.612 0.838 1.91 L 0.007 1.998 L -0.823 2.087 C -0.506 5.05 0.502 7.897 2.12 10.399 L 2.822 9.946 Z M 0.007 1.998 L 0.839 1.923 C 0.827 1.785 0.843 1.646 0.887 1.515 L 0.096 1.248 L -0.695 0.982 C -0.814 1.333 -0.858 1.705 -0.824 2.074 L 0.007 1.998 Z M 0.096 1.248 L 0.887 1.515 C 0.931 1.383 1.003 1.263 1.096 1.16 L 0.479 0.597 L -0.137 0.034 C -0.387 0.308 -0.577 0.631 -0.695 0.982 L 0.096 1.248 Z M 0.479 0.597 L 1.096 1.16 C 1.189 1.058 1.303 0.976 1.43 0.92 L 1.093 0.156 L 0.755 -0.607 C 0.416 -0.458 0.112 -0.239 -0.137 0.034 L 0.479 0.597 Z M 1.093 0.156 L 1.43 0.92 C 1.557 0.864 1.694 0.835 1.832 0.835 L 1.832 0 L 1.831 -0.835 C 1.46 -0.835 1.094 -0.757 0.755 -0.607 L 1.093 0.156 Z M 1.832 0 L 1.832 0.835 L 4.582 0.835 L 4.582 0 L 4.582 -0.835 L 1.832 -0.835 L 1.832 0 Z M 4.582 0 L 4.59 0.835 C 4.832 0.833 5.067 0.918 5.251 1.076 L 5.795 0.443 L 6.34 -0.19 C 5.849 -0.612 5.221 -0.841 4.573 -0.835 L 4.582 0 Z M 5.795 0.443 L 5.251 1.076 C 5.434 1.234 5.554 1.454 5.588 1.694 L 6.415 1.577 L 7.242 1.46 C 7.151 0.819 6.83 0.232 6.34 -0.19 L 5.795 0.443 Z M 6.415 1.577 L 5.587 1.686 C 5.712 2.629 5.942 3.554 6.274 4.444 L 7.057 4.153 L 7.839 3.861 C 7.551 3.088 7.351 2.285 7.243 1.467 L 6.415 1.577 Z M 7.057 4.153 L 6.275 4.446 C 6.342 4.625 6.357 4.819 6.317 5.006 L 7.134 5.18 L 7.95 5.354 C 8.057 4.855 8.018 4.336 7.838 3.859 L 7.057 4.153 Z M 7.134 5.18 L 6.317 5.006 C 6.277 5.193 6.185 5.364 6.05 5.5 L 6.644 6.087 L 7.238 6.674 C 7.597 6.311 7.844 5.853 7.95 5.354 L 7.134 5.18 Z M 6.644 6.087 L 6.054 5.496 L 4.89 6.66 L 5.48 7.251 L 6.07 7.841 L 7.235 6.677 L 6.644 6.087 Z M 5.48 7.251 L 4.754 7.664 C 6.133 10.089 8.142 12.098 10.567 13.477 L 10.98 12.751 L 11.393 12.025 C 9.228 10.794 7.436 9.002 6.206 6.838 L 5.48 7.251 Z M 10.98 12.751 L 11.57 13.341 L 12.735 12.177 L 12.144 11.587 L 11.554 10.996 L 10.39 12.16 L 10.98 12.751 Z M 12.144 11.587 L 12.731 12.18 C 12.867 12.046 13.038 11.954 13.225 11.914 L 13.051 11.097 L 12.877 10.281 C 12.378 10.387 11.92 10.634 11.557 10.993 L 12.144 11.587 Z M 13.051 11.097 L 13.225 11.914 C 13.412 11.874 13.606 11.889 13.784 11.956 L 14.078 11.174 L 14.372 10.393 C 13.895 10.213 13.376 10.174 12.877 10.281 L 13.051 11.097 Z M 14.078 11.174 L 13.787 11.957 C 14.677 12.288 15.602 12.519 16.545 12.644 L 16.654 11.816 L 16.764 10.988 C 15.946 10.88 15.143 10.68 14.37 10.392 L 14.078 11.174 Z M 16.654 11.816 L 16.537 12.643 C 16.78 12.677 17.001 12.799 17.16 12.986 L 17.797 12.446 L 18.434 11.906 C 18.011 11.407 17.419 11.081 16.771 10.989 L 16.654 11.816 Z M 17.797 12.446 L 17.16 12.986 C 17.318 13.173 17.402 13.411 17.396 13.656 L 18.231 13.677 L 19.066 13.697 C 19.082 13.043 18.857 12.406 18.434 11.906 L 17.797 12.446 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uC804\uD654\uD558\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,217,197), 0px 1px 2px -1px rgba(23,23,23,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "rgb(243,236,224)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(RatioVertical4, {
    style: {
      position: "relative",
      width: 24,
      flexGrow: 1,
      height: "auto"
    },
    ratio: "1:1",
    theme: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.800,
    height: 20.048,
    viewBox: "0 0 16.800 20.048",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.6,
      top: 2.35,
      width: 16.8,
      height: 20.048,
      color: "var(--label-normal)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.803 16.53 C 11.83 17.555 10.86 18.393 10.134 18.974 C 9.735 19.294 9.328 19.608 8.904 19.896 C 8.604 20.099 8.194 20.098 7.894 19.895 C 7.471 19.608 7.065 19.293 6.666 18.974 C 5.94 18.393 4.97 17.555 3.997 16.53 C 2.091 14.521 0 11.613 0 8.4 C 0 3.761 3.761 0 8.4 0 C 13.039 0 16.8 3.761 16.8 8.4 C 16.8 11.613 14.709 14.521 12.803 16.53 Z M 8.4 1.8 C 4.755 1.8 1.8 4.755 1.8 8.4 C 1.8 10.881 3.459 13.348 5.303 15.291 C 6.514 16.567 7.736 17.544 8.4 18.041 C 9.064 17.544 10.286 16.567 11.497 15.291 C 13.341 13.348 15 10.881 15 8.4 C 15 4.755 12.045 1.8 8.4 1.8 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.4 4.75 C 6.384 4.75 4.75 6.384 4.75 8.4 C 4.75 10.416 6.384 12.05 8.4 12.05 C 10.416 12.05 12.05 10.416 12.05 8.4 C 12.05 6.384 10.416 4.75 8.4 4.75 Z M 6.55 8.4 C 6.55 7.378 7.378 6.55 8.4 6.55 C 9.422 6.55 10.25 7.378 10.25 8.4 C 10.25 9.422 9.422 10.25 8.4 10.25 C 7.378 10.25 6.55 9.422 6.55 8.4 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uC624\uC2DC\uB294\uAE38"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,217,197), 0px 1px 2px -1px rgba(23,23,23,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "14px 18px 14px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "rgb(243,236,224)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 7.313,
    viewBox: "0 0 18 7.313",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3.047,
      width: 18,
      height: 7.313,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.568 6.614 C -0.953 6.927 -1.012 7.494 -0.699 7.88 C -0.385 8.266 0.182 8.324 0.568 8.011 L 0 7.313 L -0.568 6.614 Z M 9 0 L 9.568 -0.699 C 9.237 -0.967 8.763 -0.967 8.432 -0.699 L 9 0 Z M 17.432 8.011 C 17.818 8.324 18.385 8.266 18.699 7.88 C 19.012 7.494 18.953 6.927 18.568 6.614 L 18 7.313 L 17.432 8.011 Z M 0 7.313 L 0.568 8.011 L 9.568 0.699 L 9 0 L 8.432 -0.699 L -0.568 6.614 L 0 7.313 Z M 9 0 L 8.432 0.699 L 17.432 8.011 L 18 7.313 L 18.568 6.614 L 9.568 -0.699 L 9 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.500,
    height: 11.813,
    viewBox: "0 0 13.500 11.813",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.25,
      top: 8.391,
      width: 13.5,
      height: 11.813,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.9 0 C 0.9 -0.497 0.497 -0.9 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 L 0.9 0 Z M 0 11.813 L -0.9 11.813 C -0.9 12.31 -0.497 12.712 0 12.712 L 0 11.813 Z M 13.5 11.813 L 13.5 12.712 C 13.997 12.712 14.4 12.31 14.4 11.813 L 13.5 11.813 Z M 14.4 0 C 14.4 -0.497 13.997 -0.9 13.5 -0.9 C 13.003 -0.9 12.6 -0.497 12.6 0 L 13.5 0 L 14.4 0 Z M 0 0 L -0.9 0 L -0.9 11.813 L 0 11.813 L 0.9 11.813 L 0.9 0 L 0 0 Z M 0 11.813 L 0 12.712 L 13.5 12.712 L 13.5 11.813 L 13.5 10.913 L 0 10.913 L 0 11.813 Z M 13.5 11.813 L 14.4 11.813 L 14.4 0 L 13.5 0 L 12.6 0 L 12.6 11.813 L 13.5 11.813 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.500,
    height: 5.625,
    viewBox: "0 0 4.500 5.625",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.75,
      top: 14.297,
      width: 4.5,
      height: 5.625,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.9 5.625 C -0.9 6.122 -0.497 6.525 0 6.525 C 0.497 6.525 0.9 6.122 0.9 5.625 L 0 5.625 L -0.9 5.625 Z M 0 0 L 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 L 0 0 Z M 4.5 0 L 5.4 0 C 5.4 -0.497 4.997 -0.9 4.5 -0.9 L 4.5 0 Z M 3.6 5.625 C 3.6 6.122 4.003 6.525 4.5 6.525 C 4.997 6.525 5.4 6.122 5.4 5.625 L 4.5 5.625 L 3.6 5.625 Z M 0 5.625 L 0.9 5.625 L 0.9 0 L 0 0 L -0.9 0 L -0.9 5.625 L 0 5.625 Z M 0 0 L 0 0.9 L 4.5 0.9 L 4.5 0 L 4.5 -0.9 L 0 -0.9 L 0 0 Z M 4.5 0 L 3.6 0 L 3.6 5.625 L 4.5 5.625 L 5.4 5.625 L 5.4 0 L 4.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uD648\uD398\uC774\uC9C0")))))), /*#__PURE__*/React.createElement("svg", {
    height: 8,
    viewBox: "0 0 360 8",
    fill: "none",
    style: {
      position: "relative",
      height: 8,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(250,246,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 360 0 L 360 8 L 0 8 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "32px 20px 32px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(138,124,98)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uAF43\uC73C\uB85C \uB9C8\uC74C\uC744 \uBCF4\uB0B4\uC2E0 \uBD84")), /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(138,124,98)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.3849999904632568,
      color: "rgb(122,107,82)",
      flexShrink: 0
    }
  }, "\uCD1D"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.3849999904632568,
      color: "rgb(154,117,54)",
      flexShrink: 0
    }
  }, "2"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.3849999904632568,
      color: "rgb(122,107,82)",
      flexShrink: 0
    }
  }, "\uBA85"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 88,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(235,226,207)",
      borderRight: "1px solid rgb(235,226,207)",
      borderBottom: "1px solid rgb(235,226,207)",
      borderLeft: "1px solid rgb(235,226,207)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "rgb(243,236,224)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 936.5625,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.879 0 L 9.754 0 C 9.957 0.118 10.13 0.146 10.207 0.426 C 10.226 0.497 10.233 0.576 10.223 0.651 C 10.122 1.101 9.92 1.605 9.696 2.004 C 9.454 2.435 9.152 2.716 8.861 3.072 C 9.447 3.181 10.356 3.643 10.74 4.128 C 10.817 4.226 10.853 4.414 10.819 4.534 C 10.719 4.896 10.065 5.377 9.774 5.569 C 9.288 5.89 8.428 6.136 7.848 6.107 C 7.783 6.33 7.734 6.507 7.642 6.722 C 7.321 7.474 6.688 8.176 5.977 8.571 C 5.883 8.623 5.788 8.673 5.691 8.721 C 6.011 9.882 5.912 10.915 5.312 11.976 C 5.238 12.107 5.142 12.247 5.073 12.372 C 5.135 12.459 5.2 12.539 5.263 12.624 C 5.77 13.31 6.047 14.145 6.034 15.001 C 6.031 15.208 6.001 15.435 5.973 15.64 C 7.052 16.248 7.855 17.001 8.201 18.237 C 8.213 18.282 8.225 18.327 8.237 18.372 C 8.491 18.379 8.787 18.378 9.034 18.421 C 9.819 18.561 10.621 18.977 11.171 19.559 C 11.815 20.243 12.181 21.146 12.195 22.089 C 12.397 22.095 12.599 22.096 12.801 22.094 C 12.794 21.976 12.812 21.775 12.827 21.654 C 12.918 20.917 13.227 20.226 13.714 19.668 C 14.414 18.879 15.4 18.406 16.45 18.356 C 16.565 18.35 16.682 18.35 16.797 18.351 C 16.872 18.113 16.945 17.854 17.043 17.626 C 17.421 16.75 18.064 16.132 18.895 15.697 L 19.044 15.62 C 18.793 14.61 19.133 13.428 19.793 12.647 C 19.846 12.584 19.923 12.494 19.968 12.426 C 19.213 11.425 18.934 10.276 19.217 9.048 C 19.23 8.99 19.288 8.791 19.261 8.745 C 19.189 8.679 19.015 8.6 18.923 8.547 C 18.807 8.48 18.748 8.44 18.64 8.358 C 17.898 7.79 17.364 6.991 17.121 6.084 C 16.83 6.067 16.559 6.052 16.272 5.982 C 15.684 5.838 15.179 5.557 14.718 5.164 C 14.274 4.79 13.879 4.372 14.474 3.884 C 14.812 3.606 15.162 3.406 15.567 3.237 C 15.737 3.166 15.932 3.128 16.111 3.084 L 16.102 3.072 C 15.99 2.924 15.856 2.783 15.738 2.63 C 15.371 2.15 15.131 1.648 14.959 1.068 C 14.851 0.706 14.731 0.363 15.097 0.082 C 15.141 0.047 15.194 0.029 15.237 0 L 16.025 0 C 16.14 0.051 16.314 0.052 16.441 0.082 C 16.607 0.121 16.771 0.161 16.934 0.212 C 17.983 0.559 18.875 1.279 19.336 2.303 C 19.561 2.801 19.71 3.507 19.632 4.043 C 19.716 4.134 19.841 4.223 19.935 4.308 C 20.061 4.421 20.175 4.538 20.29 4.661 C 20.379 4.108 20.559 3.631 20.85 3.156 C 20.996 2.917 21.245 2.504 21.588 2.593 C 21.972 2.693 22.385 3.273 22.616 3.587 C 23.192 4.458 23.445 5.465 23.245 6.5 C 23.14 7.041 22.913 7.55 22.581 7.988 C 22.498 8.098 22.291 8.343 22.24 8.444 C 22.299 8.694 22.362 8.962 22.432 9.21 C 22.496 9.08 22.571 8.99 22.649 8.875 C 22.88 8.535 23.16 8.24 23.474 7.977 C 23.597 7.874 23.744 7.714 23.899 7.669 C 24.346 7.54 24.575 7.83 24.665 8.226 C 24.728 8.499 24.825 8.765 24.889 9.038 C 24.915 9.134 24.964 9.4 25 9.471 L 25 10.092 C 24.941 10.241 24.943 10.431 24.91 10.588 C 24.701 11.563 24.136 12.492 23.321 13.067 C 23.244 13.12 23.174 13.177 23.092 13.222 C 22.982 13.288 22.84 13.354 22.744 13.434 C 22.724 13.523 22.621 14.092 22.64 14.142 C 22.686 14.139 22.906 14.007 22.969 13.974 C 23.199 13.852 23.434 13.759 23.678 13.669 C 24.194 13.457 24.689 13.238 25 13.902 L 25 14.43 C 24.953 14.546 24.932 14.76 24.904 14.892 C 24.81 15.338 24.678 15.707 24.486 16.117 C 24.11 16.924 23.522 17.564 22.708 17.929 C 22.263 18.133 21.531 18.313 21.037 18.263 C 20.885 18.474 20.752 18.705 20.602 18.909 C 21.174 18.872 21.804 19.004 22.342 19.19 C 22.652 19.297 22.972 19.445 22.986 19.827 C 22.999 20.184 22.592 20.59 22.365 20.839 C 21.682 21.588 20.704 22.191 19.672 22.203 C 18.876 22.214 18.436 21.98 17.764 21.609 C 17.462 21.768 17.173 21.965 16.857 22.127 C 17.437 22.352 17.949 22.773 18.383 23.203 C 19.153 23.966 18.63 24.323 17.889 24.651 C 16.959 25.063 15.892 25.127 14.944 24.752 C 14.354 24.516 13.831 24.137 13.421 23.648 C 13.374 23.592 13.1 23.219 13.098 23.219 C 12.892 23.158 12.131 23.201 11.922 23.186 C 11.777 23.381 11.677 23.559 11.516 23.75 C 10.991 24.365 10.187 24.848 9.382 24.951 C 8.548 25.058 7.664 24.913 6.913 24.535 C 6.632 24.393 6.311 24.311 6.271 23.944 C 6.246 23.713 6.345 23.532 6.486 23.36 C 6.927 22.838 7.443 22.437 8.051 22.136 C 7.887 21.999 7.55 21.778 7.36 21.66 C 7.137 21.768 6.948 21.869 6.714 21.955 C 5.913 22.252 5.123 22.272 4.315 21.985 C 3.542 21.717 2.891 21.193 2.385 20.555 C 2.279 20.413 2.158 20.277 2.082 20.116 C 1.903 19.74 2.122 19.405 2.471 19.265 C 2.96 19.069 3.455 18.951 3.979 18.914 C 4.129 18.903 4.262 18.891 4.414 18.895 C 4.293 18.722 4.07 18.434 3.977 18.259 C 3.672 18.241 3.364 18.22 3.064 18.161 C 2.375 18.025 1.576 17.621 1.111 17.084 C 0.618 16.514 0.287 15.782 0.127 15.048 C 0.104 14.943 0.024 14.488 0 14.444 L 0 13.956 C 0.028 13.918 0.049 13.85 0.071 13.806 C 0.354 13.217 0.959 13.526 1.374 13.7 C 1.742 13.855 2.06 14.022 2.407 14.17 C 2.335 13.927 2.314 13.637 2.213 13.404 C 2.199 13.371 2.126 13.332 2.093 13.313 C 1.854 13.176 1.619 13.03 1.41 12.849 C 0.757 12.292 0.295 11.544 0.095 10.704 C 0.069 10.594 0.048 10.358 0 10.27 L 0 9.483 C 0.048 9.402 0.055 9.046 0.09 8.909 C 0.189 8.532 0.269 7.941 0.618 7.716 C 0.977 7.485 1.288 7.806 1.535 8.026 C 1.939 8.387 2.323 8.771 2.597 9.243 C 2.648 8.966 2.715 8.714 2.785 8.441 C 2.691 8.312 2.555 8.166 2.455 8.04 C 1.511 6.862 1.435 5.242 2.179 3.942 C 2.378 3.595 2.973 2.723 3.372 2.614 C 3.509 2.576 3.655 2.595 3.778 2.666 C 4.082 2.842 4.399 3.588 4.519 3.927 C 4.596 4.144 4.682 4.489 4.739 4.716 C 4.858 4.542 5.022 4.381 5.165 4.224 C 5.234 4.147 5.309 4.083 5.369 3.997 C 5.412 3.329 5.47 2.747 5.739 2.119 C 6.162 1.132 7.02 0.481 8.032 0.194 C 8.185 0.15 8.34 0.113 8.496 0.08 C 8.59 0.062 8.799 0.035 8.879 0 Z M 3.941 8.035 C 4.023 8.028 4.129 8.023 4.209 8.008 C 4.85 7.936 5.374 7.762 5.874 7.336 C 6.412 6.877 6.653 6.385 6.804 5.702 C 6.729 5.703 6.636 5.702 6.564 5.707 C 5.801 5.757 5.035 6.115 4.571 6.734 C 4.274 7.129 4.111 7.577 3.941 8.035 Z M 10.657 23.074 C 10.305 22.981 9.732 22.884 9.371 22.935 C 8.706 22.987 8.156 23.243 7.65 23.675 C 8.118 23.821 8.466 23.896 8.963 23.875 C 9.104 23.865 9.26 23.852 9.396 23.817 C 9.787 23.717 10.41 23.399 10.657 23.074 Z M 19.057 16.906 C 18.042 17.525 17.519 18.692 17.903 19.852 C 17.922 19.91 17.965 20.062 17.999 20.099 C 18.658 19.579 19.141 19.055 19.256 18.173 C 19.303 17.816 19.242 17.263 19.085 16.918 C 19.08 16.906 19.07 16.908 19.057 16.906 Z M 6.633 3.164 C 6.869 3.041 7.107 2.949 7.344 2.832 C 7.874 2.569 8.357 2.123 8.627 1.59 C 8.659 1.525 8.829 1.22 8.82 1.175 C 8.793 1.166 8.802 1.167 8.772 1.174 C 8.651 1.187 8.532 1.22 8.414 1.248 C 7.864 1.38 7.405 1.638 7.045 2.085 C 6.833 2.347 6.685 2.656 6.613 2.986 C 6.603 3.035 6.581 3.112 6.592 3.159 C 6.618 3.174 6.604 3.172 6.633 3.164 Z M 14.373 23.064 C 14.896 23.664 15.695 23.919 16.47 23.875 C 16.828 23.841 16.959 23.803 17.301 23.675 C 16.659 23.158 16.048 22.875 15.198 22.911 C 14.803 22.943 14.728 22.99 14.373 23.064 Z M 21.915 17.06 C 22.964 16.815 23.609 15.821 23.826 14.814 L 23.82 14.791 C 23.81 14.79 23.797 14.789 23.788 14.791 C 23.192 14.97 22.56 15.525 22.259 16.072 C 22.211 16.159 21.874 16.973 21.876 17.05 L 21.894 17.064 L 21.915 17.06 Z M 5.922 16.887 C 5.651 17.544 5.62 18.1 5.886 18.77 C 6.126 19.374 6.527 19.723 7.012 20.126 C 7.073 20.083 7.16 19.652 7.177 19.552 C 7.283 18.92 7.167 18.241 6.789 17.719 C 6.638 17.511 6.147 16.999 5.922 16.887 Z M 5.704 21.056 C 5.941 21.025 6.063 20.974 6.28 20.923 C 5.682 20.353 4.897 19.964 4.061 19.99 C 4.043 19.991 4.026 19.991 4.009 19.992 C 3.822 19.998 3.59 20.039 3.405 20.084 C 4.01 20.723 4.802 21.171 5.704 21.056 Z M 21.901 7.027 C 22.223 6.38 22.324 5.727 22.092 5.031 C 22.037 4.867 21.722 4.189 21.572 4.121 C 21.522 4.277 21.457 4.421 21.412 4.581 C 21.276 5.059 21.255 5.562 21.4 6.04 C 21.505 6.39 21.709 6.692 21.841 7.027 C 21.851 7.051 21.84 7.035 21.863 7.058 C 21.895 7.046 21.881 7.055 21.901 7.027 Z M 23.777 9.243 C 23.455 9.631 23.221 9.92 23.078 10.419 C 22.948 10.869 22.991 11.273 22.989 11.731 C 22.989 11.781 22.968 11.903 22.989 11.939 C 23.026 11.933 23.036 11.916 23.063 11.883 C 23.66 11.275 24.162 10.162 23.803 9.264 C 23.8 9.256 23.783 9.247 23.777 9.243 Z M 1.134 9.141 C 0.965 10.21 1.216 11.129 1.99 11.894 C 2.013 11.875 2.016 11.881 2.016 11.847 C 2.018 11.698 2.008 11.523 2.016 11.377 C 2.059 10.584 1.93 10.006 1.4 9.399 C 1.352 9.344 1.191 9.167 1.134 9.141 Z M 1.152 14.772 C 1.35 15.767 1.954 16.743 2.963 17.009 C 3.033 17.028 3.133 17.071 3.202 17.065 C 2.827 16.107 2.339 15.29 1.355 14.851 C 1.296 14.825 1.213 14.788 1.152 14.772 Z M 18.748 20.927 C 19.076 21.074 19.365 21.125 19.724 21.101 C 20.491 21.042 21.042 20.633 21.578 20.108 C 21.224 20.056 20.972 20.016 20.607 20.041 C 20.243 20.07 19.846 20.153 19.522 20.326 C 19.242 20.476 19 20.734 18.748 20.927 Z M 3.357 4.156 C 3.261 4.325 3.15 4.483 3.06 4.655 C 2.676 5.389 2.684 6.264 3.113 6.978 C 3.125 6.973 3.136 6.968 3.148 6.963 C 3.697 6.117 3.828 5.166 3.416 4.23 C 3.4 4.192 3.394 4.176 3.357 4.156 Z M 4.303 16.716 L 4.323 16.742 C 4.359 16.732 4.36 16.709 4.392 16.659 C 5.047 15.619 5.199 14.29 4.396 13.287 C 4.392 13.285 4.388 13.283 4.384 13.281 C 4.249 13.466 4.105 13.637 3.989 13.835 C 3.725 14.284 3.621 14.853 3.697 15.367 C 3.761 15.803 4.018 16.376 4.303 16.716 Z M 16.166 1.157 C 16.562 2.047 16.993 2.571 17.891 2.977 C 18.02 3.035 18.401 3.246 18.511 3.267 C 18.487 2.994 18.311 2.61 18.16 2.384 C 17.701 1.701 16.966 1.283 16.166 1.157 Z M 7.877 4.032 C 7.351 4.067 6.978 4.258 6.569 4.576 C 6.999 4.919 7.605 5.055 8.145 4.999 C 8.629 4.952 9.024 4.726 9.416 4.459 C 8.918 4.171 8.468 3.989 7.877 4.032 Z M 20.305 9.348 C 20.135 10.109 20.199 10.808 20.623 11.482 C 20.876 11.887 21.222 12.224 21.63 12.466 C 21.688 12.499 21.778 12.554 21.838 12.575 C 21.889 12.341 21.894 12.185 21.904 11.953 C 21.927 11.422 21.88 10.949 21.586 10.492 C 21.322 10.078 20.987 9.753 20.572 9.498 C 20.513 9.462 20.364 9.37 20.305 9.348 Z M 3.184 12.579 C 3.372 12.445 3.571 12.318 3.747 12.167 C 4.252 11.737 4.59 11.141 4.7 10.483 C 4.752 10.183 4.769 9.572 4.646 9.288 L 4.619 9.271 C 4.28 9.507 4.001 9.721 3.736 10.041 C 3.193 10.697 2.963 11.512 3.114 12.356 C 3.126 12.426 3.131 12.529 3.184 12.579 Z M 16.769 4.046 C 16.462 4.092 16.273 4.123 15.981 4.257 C 15.86 4.313 15.719 4.394 15.603 4.444 C 16.048 4.763 16.373 4.924 16.936 4.983 C 17.051 4.995 17.251 5.001 17.364 4.983 C 17.875 4.927 18.113 4.79 18.551 4.549 C 18.067 4.18 17.371 3.989 16.769 4.046 Z M 20.669 13.246 C 20.623 13.308 20.579 13.371 20.534 13.434 C 19.804 14.469 19.895 15.727 20.721 16.681 L 20.74 16.702 C 20.79 16.681 20.966 16.308 21.06 16.098 C 21.472 15.187 21.342 14.007 20.679 13.248 C 20.676 13.247 20.672 13.246 20.669 13.246 Z M 8.536 19.467 C 8.578 20.093 8.974 20.816 9.441 21.216 C 9.857 21.572 10.552 21.916 11.101 21.967 C 11.103 21.867 11.063 21.675 11.041 21.578 C 10.919 21.044 10.694 20.651 10.318 20.258 C 9.95 19.873 9.471 19.614 8.95 19.517 C 8.819 19.493 8.646 19.49 8.536 19.467 Z M 16.398 19.476 C 16.146 19.506 15.934 19.541 15.692 19.621 C 14.76 19.932 14.098 20.715 13.956 21.697 C 13.948 21.749 13.913 21.93 13.937 21.969 L 13.962 21.976 C 14.733 21.865 15.467 21.462 15.938 20.83 C 16.229 20.444 16.398 19.979 16.425 19.496 L 16.411 19.476 L 16.398 19.476 Z M 18.24 5.692 C 18.228 5.957 18.489 6.556 18.632 6.776 C 19.095 7.491 19.913 7.966 20.759 8.007 C 20.842 8.011 20.929 8.011 21.013 8.013 C 20.995 7.809 20.904 7.548 20.82 7.361 C 20.306 6.218 19.394 5.815 18.24 5.692 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uD55C\uC758\uC0AC \uC815\uD604\uADDC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(138,124,98)",
      flexShrink: 0
    }
  }, "\uC0BC\uAC00 \u6545\u4EBA\uC758 \u51A5\u798F\uC744 \uBE55\uB2C8\uB2E4"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "rgb(243,236,224)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 936.5625,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      color: "rgb(154,117,54)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.879 0 L 9.754 0 C 9.957 0.118 10.13 0.146 10.207 0.426 C 10.226 0.497 10.233 0.576 10.223 0.651 C 10.122 1.101 9.92 1.605 9.696 2.004 C 9.454 2.435 9.152 2.716 8.861 3.072 C 9.447 3.181 10.356 3.643 10.74 4.128 C 10.817 4.226 10.853 4.414 10.819 4.534 C 10.719 4.896 10.065 5.377 9.774 5.569 C 9.288 5.89 8.428 6.136 7.848 6.107 C 7.783 6.33 7.734 6.507 7.642 6.722 C 7.321 7.474 6.688 8.176 5.977 8.571 C 5.883 8.623 5.788 8.673 5.691 8.721 C 6.011 9.882 5.912 10.915 5.312 11.976 C 5.238 12.107 5.142 12.247 5.073 12.372 C 5.135 12.459 5.2 12.539 5.263 12.624 C 5.77 13.31 6.047 14.145 6.034 15.001 C 6.031 15.208 6.001 15.435 5.973 15.64 C 7.052 16.248 7.855 17.001 8.201 18.237 C 8.213 18.282 8.225 18.327 8.237 18.372 C 8.491 18.379 8.787 18.378 9.034 18.421 C 9.819 18.561 10.621 18.977 11.171 19.559 C 11.815 20.243 12.181 21.146 12.195 22.089 C 12.397 22.095 12.599 22.096 12.801 22.094 C 12.794 21.976 12.812 21.775 12.827 21.654 C 12.918 20.917 13.227 20.226 13.714 19.668 C 14.414 18.879 15.4 18.406 16.45 18.356 C 16.565 18.35 16.682 18.35 16.797 18.351 C 16.872 18.113 16.945 17.854 17.043 17.626 C 17.421 16.75 18.064 16.132 18.895 15.697 L 19.044 15.62 C 18.793 14.61 19.133 13.428 19.793 12.647 C 19.846 12.584 19.923 12.494 19.968 12.426 C 19.213 11.425 18.934 10.276 19.217 9.048 C 19.23 8.99 19.288 8.791 19.261 8.745 C 19.189 8.679 19.015 8.6 18.923 8.547 C 18.807 8.48 18.748 8.44 18.64 8.358 C 17.898 7.79 17.364 6.991 17.121 6.084 C 16.83 6.067 16.559 6.052 16.272 5.982 C 15.684 5.838 15.179 5.557 14.718 5.164 C 14.274 4.79 13.879 4.372 14.474 3.884 C 14.812 3.606 15.162 3.406 15.567 3.237 C 15.737 3.166 15.932 3.128 16.111 3.084 L 16.102 3.072 C 15.99 2.924 15.856 2.783 15.738 2.63 C 15.371 2.15 15.131 1.648 14.959 1.068 C 14.851 0.706 14.731 0.363 15.097 0.082 C 15.141 0.047 15.194 0.029 15.237 0 L 16.025 0 C 16.14 0.051 16.314 0.052 16.441 0.082 C 16.607 0.121 16.771 0.161 16.934 0.212 C 17.983 0.559 18.875 1.279 19.336 2.303 C 19.561 2.801 19.71 3.507 19.632 4.043 C 19.716 4.134 19.841 4.223 19.935 4.308 C 20.061 4.421 20.175 4.538 20.29 4.661 C 20.379 4.108 20.559 3.631 20.85 3.156 C 20.996 2.917 21.245 2.504 21.588 2.593 C 21.972 2.693 22.385 3.273 22.616 3.587 C 23.192 4.458 23.445 5.465 23.245 6.5 C 23.14 7.041 22.913 7.55 22.581 7.988 C 22.498 8.098 22.291 8.343 22.24 8.444 C 22.299 8.694 22.362 8.962 22.432 9.21 C 22.496 9.08 22.571 8.99 22.649 8.875 C 22.88 8.535 23.16 8.24 23.474 7.977 C 23.597 7.874 23.744 7.714 23.899 7.669 C 24.346 7.54 24.575 7.83 24.665 8.226 C 24.728 8.499 24.825 8.765 24.889 9.038 C 24.915 9.134 24.964 9.4 25 9.471 L 25 10.092 C 24.941 10.241 24.943 10.431 24.91 10.588 C 24.701 11.563 24.136 12.492 23.321 13.067 C 23.244 13.12 23.174 13.177 23.092 13.222 C 22.982 13.288 22.84 13.354 22.744 13.434 C 22.724 13.523 22.621 14.092 22.64 14.142 C 22.686 14.139 22.906 14.007 22.969 13.974 C 23.199 13.852 23.434 13.759 23.678 13.669 C 24.194 13.457 24.689 13.238 25 13.902 L 25 14.43 C 24.953 14.546 24.932 14.76 24.904 14.892 C 24.81 15.338 24.678 15.707 24.486 16.117 C 24.11 16.924 23.522 17.564 22.708 17.929 C 22.263 18.133 21.531 18.313 21.037 18.263 C 20.885 18.474 20.752 18.705 20.602 18.909 C 21.174 18.872 21.804 19.004 22.342 19.19 C 22.652 19.297 22.972 19.445 22.986 19.827 C 22.999 20.184 22.592 20.59 22.365 20.839 C 21.682 21.588 20.704 22.191 19.672 22.203 C 18.876 22.214 18.436 21.98 17.764 21.609 C 17.462 21.768 17.173 21.965 16.857 22.127 C 17.437 22.352 17.949 22.773 18.383 23.203 C 19.153 23.966 18.63 24.323 17.889 24.651 C 16.959 25.063 15.892 25.127 14.944 24.752 C 14.354 24.516 13.831 24.137 13.421 23.648 C 13.374 23.592 13.1 23.219 13.098 23.219 C 12.892 23.158 12.131 23.201 11.922 23.186 C 11.777 23.381 11.677 23.559 11.516 23.75 C 10.991 24.365 10.187 24.848 9.382 24.951 C 8.548 25.058 7.664 24.913 6.913 24.535 C 6.632 24.393 6.311 24.311 6.271 23.944 C 6.246 23.713 6.345 23.532 6.486 23.36 C 6.927 22.838 7.443 22.437 8.051 22.136 C 7.887 21.999 7.55 21.778 7.36 21.66 C 7.137 21.768 6.948 21.869 6.714 21.955 C 5.913 22.252 5.123 22.272 4.315 21.985 C 3.542 21.717 2.891 21.193 2.385 20.555 C 2.279 20.413 2.158 20.277 2.082 20.116 C 1.903 19.74 2.122 19.405 2.471 19.265 C 2.96 19.069 3.455 18.951 3.979 18.914 C 4.129 18.903 4.262 18.891 4.414 18.895 C 4.293 18.722 4.07 18.434 3.977 18.259 C 3.672 18.241 3.364 18.22 3.064 18.161 C 2.375 18.025 1.576 17.621 1.111 17.084 C 0.618 16.514 0.287 15.782 0.127 15.048 C 0.104 14.943 0.024 14.488 0 14.444 L 0 13.956 C 0.028 13.918 0.049 13.85 0.071 13.806 C 0.354 13.217 0.959 13.526 1.374 13.7 C 1.742 13.855 2.06 14.022 2.407 14.17 C 2.335 13.927 2.314 13.637 2.213 13.404 C 2.199 13.371 2.126 13.332 2.093 13.313 C 1.854 13.176 1.619 13.03 1.41 12.849 C 0.757 12.292 0.295 11.544 0.095 10.704 C 0.069 10.594 0.048 10.358 0 10.27 L 0 9.483 C 0.048 9.402 0.055 9.046 0.09 8.909 C 0.189 8.532 0.269 7.941 0.618 7.716 C 0.977 7.485 1.288 7.806 1.535 8.026 C 1.939 8.387 2.323 8.771 2.597 9.243 C 2.648 8.966 2.715 8.714 2.785 8.441 C 2.691 8.312 2.555 8.166 2.455 8.04 C 1.511 6.862 1.435 5.242 2.179 3.942 C 2.378 3.595 2.973 2.723 3.372 2.614 C 3.509 2.576 3.655 2.595 3.778 2.666 C 4.082 2.842 4.399 3.588 4.519 3.927 C 4.596 4.144 4.682 4.489 4.739 4.716 C 4.858 4.542 5.022 4.381 5.165 4.224 C 5.234 4.147 5.309 4.083 5.369 3.997 C 5.412 3.329 5.47 2.747 5.739 2.119 C 6.162 1.132 7.02 0.481 8.032 0.194 C 8.185 0.15 8.34 0.113 8.496 0.08 C 8.59 0.062 8.799 0.035 8.879 0 Z M 3.941 8.035 C 4.023 8.028 4.129 8.023 4.209 8.008 C 4.85 7.936 5.374 7.762 5.874 7.336 C 6.412 6.877 6.653 6.385 6.804 5.702 C 6.729 5.703 6.636 5.702 6.564 5.707 C 5.801 5.757 5.035 6.115 4.571 6.734 C 4.274 7.129 4.111 7.577 3.941 8.035 Z M 10.657 23.074 C 10.305 22.981 9.732 22.884 9.371 22.935 C 8.706 22.987 8.156 23.243 7.65 23.675 C 8.118 23.821 8.466 23.896 8.963 23.875 C 9.104 23.865 9.26 23.852 9.396 23.817 C 9.787 23.717 10.41 23.399 10.657 23.074 Z M 19.057 16.906 C 18.042 17.525 17.519 18.692 17.903 19.852 C 17.922 19.91 17.965 20.062 17.999 20.099 C 18.658 19.579 19.141 19.055 19.256 18.173 C 19.303 17.816 19.242 17.263 19.085 16.918 C 19.08 16.906 19.07 16.908 19.057 16.906 Z M 6.633 3.164 C 6.869 3.041 7.107 2.949 7.344 2.832 C 7.874 2.569 8.357 2.123 8.627 1.59 C 8.659 1.525 8.829 1.22 8.82 1.175 C 8.793 1.166 8.802 1.167 8.772 1.174 C 8.651 1.187 8.532 1.22 8.414 1.248 C 7.864 1.38 7.405 1.638 7.045 2.085 C 6.833 2.347 6.685 2.656 6.613 2.986 C 6.603 3.035 6.581 3.112 6.592 3.159 C 6.618 3.174 6.604 3.172 6.633 3.164 Z M 14.373 23.064 C 14.896 23.664 15.695 23.919 16.47 23.875 C 16.828 23.841 16.959 23.803 17.301 23.675 C 16.659 23.158 16.048 22.875 15.198 22.911 C 14.803 22.943 14.728 22.99 14.373 23.064 Z M 21.915 17.06 C 22.964 16.815 23.609 15.821 23.826 14.814 L 23.82 14.791 C 23.81 14.79 23.797 14.789 23.788 14.791 C 23.192 14.97 22.56 15.525 22.259 16.072 C 22.211 16.159 21.874 16.973 21.876 17.05 L 21.894 17.064 L 21.915 17.06 Z M 5.922 16.887 C 5.651 17.544 5.62 18.1 5.886 18.77 C 6.126 19.374 6.527 19.723 7.012 20.126 C 7.073 20.083 7.16 19.652 7.177 19.552 C 7.283 18.92 7.167 18.241 6.789 17.719 C 6.638 17.511 6.147 16.999 5.922 16.887 Z M 5.704 21.056 C 5.941 21.025 6.063 20.974 6.28 20.923 C 5.682 20.353 4.897 19.964 4.061 19.99 C 4.043 19.991 4.026 19.991 4.009 19.992 C 3.822 19.998 3.59 20.039 3.405 20.084 C 4.01 20.723 4.802 21.171 5.704 21.056 Z M 21.901 7.027 C 22.223 6.38 22.324 5.727 22.092 5.031 C 22.037 4.867 21.722 4.189 21.572 4.121 C 21.522 4.277 21.457 4.421 21.412 4.581 C 21.276 5.059 21.255 5.562 21.4 6.04 C 21.505 6.39 21.709 6.692 21.841 7.027 C 21.851 7.051 21.84 7.035 21.863 7.058 C 21.895 7.046 21.881 7.055 21.901 7.027 Z M 23.777 9.243 C 23.455 9.631 23.221 9.92 23.078 10.419 C 22.948 10.869 22.991 11.273 22.989 11.731 C 22.989 11.781 22.968 11.903 22.989 11.939 C 23.026 11.933 23.036 11.916 23.063 11.883 C 23.66 11.275 24.162 10.162 23.803 9.264 C 23.8 9.256 23.783 9.247 23.777 9.243 Z M 1.134 9.141 C 0.965 10.21 1.216 11.129 1.99 11.894 C 2.013 11.875 2.016 11.881 2.016 11.847 C 2.018 11.698 2.008 11.523 2.016 11.377 C 2.059 10.584 1.93 10.006 1.4 9.399 C 1.352 9.344 1.191 9.167 1.134 9.141 Z M 1.152 14.772 C 1.35 15.767 1.954 16.743 2.963 17.009 C 3.033 17.028 3.133 17.071 3.202 17.065 C 2.827 16.107 2.339 15.29 1.355 14.851 C 1.296 14.825 1.213 14.788 1.152 14.772 Z M 18.748 20.927 C 19.076 21.074 19.365 21.125 19.724 21.101 C 20.491 21.042 21.042 20.633 21.578 20.108 C 21.224 20.056 20.972 20.016 20.607 20.041 C 20.243 20.07 19.846 20.153 19.522 20.326 C 19.242 20.476 19 20.734 18.748 20.927 Z M 3.357 4.156 C 3.261 4.325 3.15 4.483 3.06 4.655 C 2.676 5.389 2.684 6.264 3.113 6.978 C 3.125 6.973 3.136 6.968 3.148 6.963 C 3.697 6.117 3.828 5.166 3.416 4.23 C 3.4 4.192 3.394 4.176 3.357 4.156 Z M 4.303 16.716 L 4.323 16.742 C 4.359 16.732 4.36 16.709 4.392 16.659 C 5.047 15.619 5.199 14.29 4.396 13.287 C 4.392 13.285 4.388 13.283 4.384 13.281 C 4.249 13.466 4.105 13.637 3.989 13.835 C 3.725 14.284 3.621 14.853 3.697 15.367 C 3.761 15.803 4.018 16.376 4.303 16.716 Z M 16.166 1.157 C 16.562 2.047 16.993 2.571 17.891 2.977 C 18.02 3.035 18.401 3.246 18.511 3.267 C 18.487 2.994 18.311 2.61 18.16 2.384 C 17.701 1.701 16.966 1.283 16.166 1.157 Z M 7.877 4.032 C 7.351 4.067 6.978 4.258 6.569 4.576 C 6.999 4.919 7.605 5.055 8.145 4.999 C 8.629 4.952 9.024 4.726 9.416 4.459 C 8.918 4.171 8.468 3.989 7.877 4.032 Z M 20.305 9.348 C 20.135 10.109 20.199 10.808 20.623 11.482 C 20.876 11.887 21.222 12.224 21.63 12.466 C 21.688 12.499 21.778 12.554 21.838 12.575 C 21.889 12.341 21.894 12.185 21.904 11.953 C 21.927 11.422 21.88 10.949 21.586 10.492 C 21.322 10.078 20.987 9.753 20.572 9.498 C 20.513 9.462 20.364 9.37 20.305 9.348 Z M 3.184 12.579 C 3.372 12.445 3.571 12.318 3.747 12.167 C 4.252 11.737 4.59 11.141 4.7 10.483 C 4.752 10.183 4.769 9.572 4.646 9.288 L 4.619 9.271 C 4.28 9.507 4.001 9.721 3.736 10.041 C 3.193 10.697 2.963 11.512 3.114 12.356 C 3.126 12.426 3.131 12.529 3.184 12.579 Z M 16.769 4.046 C 16.462 4.092 16.273 4.123 15.981 4.257 C 15.86 4.313 15.719 4.394 15.603 4.444 C 16.048 4.763 16.373 4.924 16.936 4.983 C 17.051 4.995 17.251 5.001 17.364 4.983 C 17.875 4.927 18.113 4.79 18.551 4.549 C 18.067 4.18 17.371 3.989 16.769 4.046 Z M 20.669 13.246 C 20.623 13.308 20.579 13.371 20.534 13.434 C 19.804 14.469 19.895 15.727 20.721 16.681 L 20.74 16.702 C 20.79 16.681 20.966 16.308 21.06 16.098 C 21.472 15.187 21.342 14.007 20.679 13.248 C 20.676 13.247 20.672 13.246 20.669 13.246 Z M 8.536 19.467 C 8.578 20.093 8.974 20.816 9.441 21.216 C 9.857 21.572 10.552 21.916 11.101 21.967 C 11.103 21.867 11.063 21.675 11.041 21.578 C 10.919 21.044 10.694 20.651 10.318 20.258 C 9.95 19.873 9.471 19.614 8.95 19.517 C 8.819 19.493 8.646 19.49 8.536 19.467 Z M 16.398 19.476 C 16.146 19.506 15.934 19.541 15.692 19.621 C 14.76 19.932 14.098 20.715 13.956 21.697 C 13.948 21.749 13.913 21.93 13.937 21.969 L 13.962 21.976 C 14.733 21.865 15.467 21.462 15.938 20.83 C 16.229 20.444 16.398 19.979 16.425 19.496 L 16.411 19.476 L 16.398 19.476 Z M 18.24 5.692 C 18.228 5.957 18.489 6.556 18.632 6.776 C 19.095 7.491 19.913 7.966 20.759 8.007 C 20.842 8.011 20.929 8.011 21.013 8.013 C 20.995 7.809 20.904 7.548 20.82 7.361 C 20.306 6.218 19.394 5.815 18.24 5.692 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uD55C\uC758\uC0AC \uC815\uD604\uADDC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(138,124,98)",
      flexShrink: 0
    }
  }, "\uC0BC\uAC00 \u6545\u4EBA\uC758 \u51A5\u798F\uC744 \uBE55\uB2C8\uB2E4")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(224,205,162)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 13px 0px 13px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.3339999914169312,
      color: "rgb(138,124,98)",
      flexShrink: 0
    }
  }, "\uB354\uBCF4\uAE30 (12)")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(42,33,23)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "22px 22px 22px 22px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "13px",
      color: "rgb(203,168,106)",
      flexShrink: 0
    }
  }, "\uCC98\uC74C\uC774\uC154\uB3C4 \uAD1C\uCC2E\uC2B5\uB2C8\uB2E4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 264,
      height: 63,
      display: "flex",
      flexDirection: "column",
      padding: "9px 0px 9px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 19,
      lineHeight: "26.600px",
      color: "rgb(244,238,224)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "조문 예절,\n미리 알아두세요"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72.004,
      height: 72.001,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.764,
    height: 20.901,
    viewBox: "0 0 8.764 20.901",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.951,0.310,-0.313,0.950,33.871,44.588)",
      transformOrigin: "0 0",
      width: 8.764,
      height: 20.901
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.764 20.901 L 8.731 20.76 L 2.569 0 L 0 1.267 L 6.822 20.901 L 8.764 20.901 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.951,0.310,-0.313,0.950,43.500,35.009)",
      transformOrigin: "0 0",
      width: 29.982,
      height: 29.157,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.982,
    height: 29.157,
    viewBox: "0 0 29.982 29.157",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.982,
      height: 29.157
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.112 27.205 C 0.655 25.734 1.749 24.527 2.337 23.009 C 2.859 21.662 4.207 20.267 3.944 18.696 C 3.752 17.546 2.064 15.946 2.53 14.873 C 3.091 13.579 4.688 14.697 5.594 14.877 C 6.47 15.052 6.844 15.185 7.506 14.407 C 7.772 14.094 7.632 13.566 7.802 13.324 C 8.336 12.567 9.689 12.273 9.767 11.129 C 9.794 10.73 8.998 9.537 8.899 9.019 C 8.753 8.267 8.723 7.957 8.977 7.349 C 9.78 5.423 11.735 4.155 13.261 2.945 C 13.928 2.417 14.643 1.668 15.737 2.135 C 16.378 2.409 16.459 3.254 17.01 3.635 C 18.863 4.915 21.78 1.518 23.241 0.664 C 25.196 -0.477 26.778 -0.23 28.313 2.053 C 27.79 3.395 24.843 4.592 25.698 6.415 C 26.627 8.395 28.96 6.579 29.982 8.622 C 28.876 10.538 26.199 11.2 24.318 12.14 C 25.096 13.207 26.776 12.265 27.822 13.269 C 29.39 14.774 26.811 16.073 25.619 16.621 C 23.331 17.671 20.594 17.761 18.498 19.155 C 15.968 20.838 13.078 21.144 9.822 21.397 C 8.454 21.504 6.997 21.044 5.832 21.652 C 4.502 22.345 3.751 24.102 2.826 25.237 C 2.274 25.914 1.685 26.424 1.473 27.325 C 1.395 27.654 1.636 28.647 1.373 28.896 C 0.59 29.641 -0.322 28.703 0.112 27.204 L 0.112 27.205 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.379,
      top: 2.791,
      width: 24.314,
      height: 25.079,
      opacity: 0.45,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.314,
    height: 25.079,
    viewBox: "0 0 24.314 25.079",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.314,
      height: 25.079,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.113 25.079 L 0 24.996 C 0.034 24.939 3.395 19.199 8.041 13.281 C 12.332 7.815 18.629 1.073 24.259 0 L 24.314 0.123 C 18.711 1.191 12.43 7.918 8.148 13.372 C 3.505 19.286 0.147 25.021 0.113 25.079 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.617,
    height: 3.501,
    viewBox: "0 0 15.617 3.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.633,
      top: 10.485,
      width: 15.617,
      height: 3.501,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.617 0.126 C 14.583 0.248 13.542 0.39 12.537 0.527 C 10.56 0.797 8.516 1.076 6.439 1.213 C 3.951 1.376 2.236 2.264 0.083 3.501 L 0 3.388 C 2.094 2.185 3.893 1.252 6.398 1.087 C 8.47 0.95 10.512 0.671 12.487 0.402 C 13.494 0.264 14.535 0.122 15.57 0 L 15.617 0.125 L 15.617 0.126 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.972,
    height: 1.465,
    viewBox: "0 0 9.972 1.465",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.646,
      top: 5.494,
      width: 9.972,
      height: 1.465,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.878 0.686 C 9.335 -0.044 8.35 0.104 7.559 0.222 C 7.388 0.247 7.227 0.272 7.083 0.285 C 6.611 0.327 6.111 0.357 5.582 0.389 C 3.649 0.505 1.455 0.634 0.084 1.465 L 0 1.352 C 0.019 1.341 0.038 1.329 0.058 1.318 C 1.454 0.508 3.623 0.378 5.541 0.263 C 6.069 0.232 6.569 0.201 7.039 0.159 C 7.18 0.146 7.34 0.122 7.509 0.097 C 8.294 -0.02 9.368 -0.182 9.972 0.63 L 9.879 0.685 L 9.878 0.686 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.269,
    height: 5.410,
    viewBox: "0 0 2.269 5.410",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.385,
      top: 2.646,
      width: 2.269,
      height: 5.41,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.118 5.41 L 0 5.335 C 0.261 4.734 0.423 4.04 0.579 3.369 C 0.876 2.098 1.183 0.784 2.175 0 L 2.269 0.106 C 1.298 0.873 0.995 2.171 0.702 3.428 C 0.545 4.103 0.382 4.801 0.118 5.41 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.951,0.310,-0.313,0.950,4.357,42.289)",
      transformOrigin: "0 0",
      width: 34.135,
      height: 13.936,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.135,
    height: 13.936,
    viewBox: "0 0 34.135 13.936",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 34.135,
      height: 13.936
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.114 11.927 C 5.648 12.758 5.351 13.346 5.025 13.936 L 17.622 13.936 C 17.826 13.832 18.035 13.739 18.255 13.66 C 20.71 12.769 22.265 10.883 23.946 8.709 C 24.652 7.796 24.961 6.516 25.962 6.015 C 27.104 5.444 28.806 5.854 30.106 5.808 C 30.881 5.78 31.544 5.636 32.338 5.969 C 32.628 6.092 33.286 6.795 33.599 6.742 C 34.533 6.587 34.222 5.437 32.866 4.939 C 31.48 4.535 30.048 4.663 28.605 4.265 C 27.324 3.912 25.632 4.12 24.536 3.09 C 23.735 2.337 23.267 0.28 22.223 0.034 C 20.966 -0.263 21.103 1.47 20.828 2.209 C 20.564 2.925 20.496 3.261 19.593 3.313 C 19.228 3.335 18.885 2.951 18.62 2.942 C 17.791 2.915 16.947 3.717 16.027 3.158 C 15.705 2.963 15.145 1.758 14.79 1.409 C 14.275 0.901 14.048 0.715 13.462 0.568 C 11.605 0.103 9.733 0.809 8.101 1.242 C 7.388 1.431 6.482 1.537 6.346 2.564 C 6.266 3.166 6.883 3.677 6.926 4.272 C 7.072 6.273 3.113 6.518 1.786 7.097 C 0.012 7.87 -0.518 9.125 0.548 11.44 C 1.825 11.79 4.095 10.342 5.115 11.927 L 5.114 11.927 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.355,
      top: 4.133,
      width: 21.338,
      height: 8.655,
      opacity: 0.45,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.338,
    height: 6.565,
    viewBox: "0 0 21.338 6.565",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.273,
      width: 21.338,
      height: 6.565,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.338 0.088 C 20.947 0.321 20.356 0.393 19.834 0.456 C 19.678 0.475 19.531 0.493 19.397 0.514 C 19.054 0.568 18.701 0.609 18.358 0.65 C 18.178 0.671 17.998 0.692 17.819 0.715 C 17.468 0.76 17.108 0.793 16.76 0.823 C 16.182 0.874 15.583 0.927 15.015 1.042 C 14.564 1.133 14.111 1.207 13.674 1.279 C 12.404 1.486 11.203 1.682 10.039 2.269 C 9.847 2.366 9.66 2.471 9.479 2.572 C 8.988 2.847 8.525 3.106 7.965 3.227 C 7.054 3.423 6.004 3.674 5.079 4.168 C 4.358 4.552 3.602 4.877 2.87 5.191 C 1.927 5.596 0.95 6.015 0.047 6.565 L 0 6.475 C 0.907 5.924 1.885 5.504 2.83 5.098 C 3.561 4.784 4.316 4.46 5.035 4.077 C 5.965 3.581 7.02 3.329 7.935 3.131 C 8.486 3.012 8.946 2.755 9.434 2.482 C 9.616 2.38 9.803 2.276 9.995 2.179 C 11.167 1.588 12.371 1.391 13.646 1.183 C 14.083 1.112 14.534 1.038 14.985 0.948 C 15.557 0.832 16.157 0.779 16.737 0.727 C 17.084 0.696 17.444 0.665 17.794 0.62 C 17.972 0.597 18.153 0.576 18.333 0.554 C 18.675 0.515 19.029 0.473 19.37 0.419 C 19.505 0.398 19.653 0.38 19.808 0.361 C 20.325 0.298 20.911 0.228 21.291 0 L 21.337 0.09 L 21.338 0.088 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.903,
    height: 8.655,
    viewBox: "0 0 6.903 8.655",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.864,
      top: 0,
      width: 6.903,
      height: 8.655,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.432 8.636 C 0.421 8.643 0.41 8.649 0.399 8.655 L 0.355 8.564 C 0.639 8.408 0.845 8.066 1.043 7.737 C 1.158 7.546 1.277 7.348 1.408 7.194 C 1.582 6.99 1.745 6.762 1.902 6.542 C 2.112 6.248 2.33 5.943 2.58 5.687 C 2.91 5.347 3.29 5.056 3.657 4.776 C 3.996 4.516 4.348 4.247 4.649 3.946 C 5.32 3.273 6.064 2.664 6.704 2.263 C 6.529 2.2 6.429 2.241 6.309 2.29 C 6.229 2.324 6.137 2.361 6.011 2.368 C 5.856 2.376 5.698 2.315 5.531 2.25 C 5.444 2.215 5.354 2.18 5.264 2.156 C 4.649 1.989 4.165 1.764 3.626 1.478 C 3.072 1.184 2.512 0.951 1.841 0.693 C 1.701 0.639 1.546 0.567 1.381 0.492 C 0.917 0.277 0.39 0.035 0.03 0.112 L 0 0.016 C 0.38 -0.066 0.917 0.182 1.391 0.401 C 1.555 0.477 1.71 0.548 1.847 0.601 C 2.52 0.86 3.082 1.093 3.641 1.39 C 4.175 1.674 4.654 1.896 5.262 2.061 C 5.355 2.087 5.447 2.122 5.536 2.157 C 5.695 2.22 5.847 2.279 5.988 2.271 C 6.105 2.264 6.188 2.23 6.268 2.197 C 6.41 2.14 6.543 2.084 6.811 2.215 L 6.903 2.259 L 6.828 2.303 C 6.173 2.701 5.399 3.329 4.703 4.027 C 4.401 4.331 4.047 4.601 3.706 4.862 C 3.341 5.142 2.963 5.431 2.634 5.767 C 2.388 6.021 2.171 6.323 1.963 6.615 C 1.805 6.836 1.641 7.065 1.466 7.271 C 1.337 7.421 1.226 7.608 1.107 7.805 C 0.913 8.129 0.712 8.463 0.43 8.635 L 0.432 8.636 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.792,
    height: 5.791,
    viewBox: "0 0 5.792 5.791",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.338,
      top: 1.062,
      width: 5.792,
      height: 5.791,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.07 5.791 L 0 5.728 C 1.674 2.219 5.708 0.022 5.748 0 L 5.792 0.091 C 5.752 0.113 1.734 2.3 0.07 5.791 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.951,0.310,-0.313,0.950,16.066,0.000)",
      transformOrigin: "0 0",
      width: 54.201,
      height: 47.896,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.459,
      top: 8.223,
      width: 33.249,
      height: 29.545,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 33.249053955078125,
      height: 29.544898986816406,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -2.899,
      top: -2.616,
      width: 39.018,
      height: 34.76,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 37.772,
    height: 33.484,
    viewBox: "0 0 37.772 33.484",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.64,
      top: 0.644,
      width: 37.772,
      height: 33.484,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.772 0 L 0 0 L 0 33.484 L 37.772 33.484 L 37.772 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 15.021 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 15.021 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(255,255,254)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 15.412 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 15.412 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(255,255,253)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 15.802 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 15.802 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(254,254,252)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 16.194 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 16.194 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(254,254,251)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 16.584 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 16.584 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(254,254,250)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 16.975 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 16.975 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(254,254,249)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 17.365 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 17.365 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(253,253,247)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 17.756 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 17.756 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(253,253,246)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 18.146 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 18.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(253,253,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 18.537 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 18.537 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(253,253,244)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 18.928 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 18.928 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(252,252,243)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 19.319 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 19.319 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(252,252,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 19.71 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 19.71 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(252,252,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 20.1 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 20.1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(252,252,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 20.267 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 20.267 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(252,252,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 20.434 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 20.434 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(252,252,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 20.6 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 20.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(251,251,241)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 20.767 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 20.767 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.170,
    height: 33.863,
    viewBox: "0 0 38.170 33.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.327,
      top: 0.345,
      width: 38.17,
      height: 33.863,
      color: "rgb(251,251,241)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.17 21.15 L 38.17 33.863 L 0.234 33.863 L 0.234 0.744 L 0 0.744 C 0.167 0.493 0.336 0.245 0.508 0 L 0.508 0.217 L 38.17 0.217 L 38.17 21.15 L 38.17 21.15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.128,
    height: 34.005,
    viewBox: "0 0 38.128 34.005",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.366,
      top: 0.205,
      width: 38.128,
      height: 34.005,
      color: "rgb(251,251,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.128 21.459 L 38.128 34.005 L 0.192 34.005 L 0.192 2.191 L 0 2.191 C 0.317 1.689 0.644 1.196 0.981 0.714 C 1.15 0.474 1.322 0.236 1.495 0 L 1.495 0.357 L 38.128 0.357 L 38.128 21.458 L 38.128 21.459 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.495,
    height: 34.100,
    viewBox: "0 0 38.495 34.100",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0.109,
      width: 38.495,
      height: 34.1,
      color: "rgb(250,250,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.495 21.72 L 38.495 34.1 L 0.559 34.1 L 0.559 4.34 L 0 4.34 C 0.579 3.315 1.2 2.328 1.862 1.384 C 2.193 0.912 2.535 0.45 2.886 0 L 2.886 0.453 L 38.495 0.453 L 38.495 21.72 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.943,
    height: 34.152,
    viewBox: "0 0 37.943 34.152",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.551,
      top: 0.058,
      width: 37.943,
      height: 34.152,
      color: "rgb(250,250,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.943 21.939 L 37.943 34.152 L 0.007 34.152 L 0.007 4.906 L 0 4.906 C 0.567 3.902 1.176 2.935 1.825 2.01 C 2.149 1.548 2.484 1.095 2.828 0.654 C 3 0.433 3.175 0.215 3.352 0 L 3.352 0.506 L 37.943 0.506 L 37.943 21.94 L 37.943 21.939 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.193,
    height: 34.163,
    viewBox: "0 0 38.193 34.163",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.302,
      top: 0.046,
      width: 38.193,
      height: 34.163,
      color: "rgb(249,249,239)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.193 22.117 L 38.193 34.163 L 0.257 34.163 L 0.257 6.934 L 0 6.934 C 0.257 6.425 0.525 5.923 0.802 5.431 C 1.358 4.447 1.954 3.5 2.589 2.593 C 3.225 1.686 3.9 0.821 4.613 0 L 4.613 0.515 L 38.193 0.515 L 38.193 22.116 L 38.193 22.117 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.349,
    height: 34.130,
    viewBox: "0 0 38.349 34.130",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.144,
      top: 0.081,
      width: 38.349,
      height: 34.13,
      color: "rgb(249,249,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.349 22.25 L 38.349 34.13 L 0.413 34.13 L 0.413 8.907 L 0 8.907 C 0.924 6.843 2.015 4.908 3.26 3.133 C 3.883 2.246 4.543 1.398 5.241 0.594 C 5.415 0.394 5.592 0.196 5.771 0 L 5.771 0.483 L 38.349 0.483 L 38.349 22.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.412,
    height: 34.055,
    viewBox: "0 0 38.412 34.055",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.081,
      top: 0.155,
      width: 38.412,
      height: 34.055,
      color: "rgb(248,248,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.412 22.342 L 38.412 34.055 L 0.476 34.055 L 0.476 10.821 L 0 10.821 C 0.205 10.3 0.421 9.788 0.647 9.283 C 1.552 7.263 2.62 5.369 3.838 3.632 C 4.446 2.763 5.094 1.934 5.776 1.147 C 6.118 0.754 6.468 0.371 6.827 0 L 6.827 0.408 L 38.412 0.408 L 38.412 22.342 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.387,
    height: 33.938,
    viewBox: "0 0 38.387 33.938",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.107,
      top: 0.271,
      width: 38.387,
      height: 33.938,
      color: "rgb(248,248,237)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.386 22.392 L 38.386 33.938 L 0.45 33.938 L 0.45 12.67 L 0 12.67 C 0.36 11.624 0.763 10.605 1.205 9.617 C 2.089 7.641 3.134 5.789 4.326 4.089 C 4.922 3.24 5.555 2.428 6.223 1.659 C 6.557 1.274 6.9 0.899 7.251 0.537 C 7.427 0.355 7.605 0.176 7.785 0 L 7.785 0.292 L 38.387 0.292 L 38.387 22.392 L 38.386 22.392 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.273,
    height: 33.783,
    viewBox: "0 0 38.273 33.783",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.222,
      top: 0.426,
      width: 38.273,
      height: 33.783,
      color: "rgb(247,247,237)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.273 22.404 L 38.273 33.783 L 0.337 33.783 L 0.337 14.452 L 0 14.452 C 0.155 13.927 0.322 13.409 0.498 12.898 C 0.85 11.874 1.243 10.879 1.675 9.912 C 3.405 6.048 5.762 2.667 8.643 0 L 8.643 0.136 L 38.273 0.136 L 38.273 22.404 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.077,
    height: 34.051,
    viewBox: "0 0 38.077 34.051",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.418,
      top: 0.158,
      width: 38.077,
      height: 34.051,
      color: "rgb(246,246,236)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.077 22.838 L 38.077 34.051 L 0.141 34.051 L 0.141 16.623 L 0 16.623 C 0.526 14.527 1.218 12.52 2.063 10.631 C 3.753 6.855 6.056 3.551 8.872 0.944 C 9.224 0.618 9.584 0.303 9.951 0 L 9.951 0.405 L 38.076 0.405 L 38.076 22.839 L 38.077 22.838 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.489,
    height: 34.550,
    viewBox: "0 0 38.489 34.550",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.003,
      top: 0,
      width: 38.489,
      height: 34.55,
      color: "rgb(246,246,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.489 23.165 L 38.489 34.21 L 0.564 34.21 L 0.564 34.55 C 0.512 34.259 0.462 33.969 0.416 33.679 L 0.553 33.679 L 0.553 23.474 L 0 23.474 C 0.356 19.08 1.408 14.93 3.059 11.241 C 4.71 7.552 6.96 4.325 9.71 1.778 C 10.397 1.142 11.116 0.548 11.865 0 L 11.865 0.563 L 38.489 0.563 L 38.489 23.165 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.487,
    height: 34.121,
    viewBox: "0 0 38.487 34.121",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.531,
      top: 0.324,
      width: 38.487,
      height: 34.121,
      color: "rgb(245,245,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.964 23.006 L 37.964 33.886 L 0.682 33.886 L 0.682 34.121 C 0.631 33.837 0.582 33.554 0.537 33.271 C 0.356 32.139 0.221 31.013 0.132 29.894 C -0.046 27.658 -0.042 25.453 0.132 23.309 C 0.48 19.02 1.507 14.968 3.119 11.366 C 4.73 7.765 6.926 4.615 9.61 2.129 C 10.281 1.508 10.983 0.928 11.714 0.393 C 11.896 0.259 12.081 0.128 12.267 0 L 12.267 0.238 L 37.298 0.238 L 37.298 0.058 C 37.699 0.309 38.095 0.572 38.487 0.846 L 37.964 0.846 L 37.964 23.006 L 37.964 23.006 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.549,
    height: 34.335,
    viewBox: "0 0 37.549 34.335",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.19,
      top: 0.005,
      width: 37.549,
      height: 34.335,
      color: "rgb(244,244,234)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.305 23.492 L 37.305 34.205 L 0.666 34.205 L 0.666 34.335 C 0.616 34.059 0.568 33.782 0.524 33.507 C 0.347 32.403 0.216 31.303 0.129 30.212 C -0.045 28.03 -0.041 25.88 0.129 23.788 C 0.468 19.603 1.47 15.65 3.042 12.137 C 4.615 8.624 6.757 5.551 9.376 3.126 C 10.686 1.913 12.115 0.863 13.651 0 L 13.651 0.559 L 35.205 0.559 L 35.205 0.402 C 35.603 0.625 35.999 0.859 36.389 1.105 C 36.78 1.35 37.166 1.606 37.549 1.874 L 37.305 1.874 L 37.305 23.493 L 37.305 23.492 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.168,
    height: 34.073,
    viewBox: "0 0 37.168 34.073",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.848,
      top: 0.163,
      width: 37.168,
      height: 34.073,
      color: "rgb(243,243,233)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 36.644 23.501 L 36.644 34.047 L 0.649 34.047 L 0.649 34.073 C 0.6 33.803 0.554 33.534 0.511 33.265 C 0.339 32.189 0.211 31.117 0.126 30.053 C -0.044 27.926 -0.04 25.829 0.126 23.789 C 0.456 19.709 1.434 15.855 2.967 12.43 C 4.499 9.004 6.588 6.008 9.142 3.643 C 10.419 2.461 11.812 1.437 13.311 0.596 C 13.685 0.386 14.066 0.187 14.454 0 L 14.454 0.4 L 33.15 0.4 L 33.15 0.369 C 33.94 0.759 34.719 1.195 35.481 1.673 C 35.862 1.912 36.239 2.163 36.612 2.423 C 36.798 2.553 36.983 2.686 37.168 2.821 L 36.646 2.821 L 36.646 23.502 L 36.644 23.501 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 36.214,
    height: 34.242,
    viewBox: "0 0 36.214 34.242",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.511,
      top: 0.284,
      width: 36.214,
      height: 34.242,
      color: "rgb(243,243,232)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 35.985 23.547 L 35.985 33.927 L 0.706 33.927 L 0.706 34.242 C 0.681 34.111 0.656 33.98 0.632 33.848 C 0.585 33.586 0.54 33.323 0.498 33.061 C 0.33 32.013 0.205 30.968 0.122 29.932 C -0.043 27.859 -0.039 25.816 0.122 23.828 C 0.445 19.853 1.397 16.097 2.89 12.76 C 4.384 9.422 6.419 6.503 8.907 4.199 C 10.151 3.046 11.509 2.048 12.968 1.23 C 13.698 0.82 14.454 0.455 15.233 0.138 L 15.233 0.281 L 29.952 0.281 L 29.952 0 C 30.745 0.291 31.528 0.627 32.299 1.008 C 33.069 1.389 33.827 1.813 34.57 2.279 C 34.941 2.512 35.309 2.755 35.672 3.01 C 35.854 3.137 36.035 3.266 36.214 3.398 L 35.985 3.398 L 35.985 23.548 L 35.985 23.547 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 35.782,
    height: 34.056,
    viewBox: "0 0 35.782 34.056",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.17,
      top: 0.354,
      width: 35.782,
      height: 34.056,
      color: "rgb(242,242,231)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 35.325 23.642 L 35.325 33.855 L 0.687 33.855 L 0.687 34.056 C 0.663 33.928 0.639 33.8 0.616 33.672 C 0.569 33.416 0.526 33.161 0.485 32.906 C 0.321 31.885 0.2 30.868 0.119 29.858 C -0.041 27.839 -0.038 25.851 0.119 23.916 C 0.433 20.045 1.36 16.388 2.814 13.138 C 5.723 6.639 10.741 1.767 17.178 0.064 L 17.178 0.207 L 26.821 0.207 L 26.821 0 C 29.976 0.767 33.018 2.281 35.782 4.414 L 35.325 4.414 L 35.325 23.642 L 35.325 23.642 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 34.816,
    height: 34.068,
    viewBox: "0 0 34.816 34.068",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.832,
      top: 0.601,
      width: 34.816,
      height: 34.068,
      color: "rgb(241,241,230)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 34.664 23.562 L 34.664 33.608 L 0.741 33.608 L 0.741 34.068 C 0.641 33.57 0.551 33.071 0.471 32.575 C 0.312 31.582 0.194 30.592 0.116 29.61 C -0.04 27.646 -0.037 25.711 0.116 23.828 C 0.421 20.061 1.323 16.504 2.738 13.342 C 5.568 7.019 10.45 2.278 16.714 0.622 C 19.846 -0.207 23.027 -0.187 26.097 0.56 C 29.167 1.307 32.126 2.779 34.816 4.854 L 34.666 4.854 L 34.666 23.562 L 34.664 23.562 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 34.335,
    height: 33.122,
    viewBox: "0 0 34.335 33.122",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.492,
      top: 1.422,
      width: 34.335,
      height: 33.122,
      color: "rgb(240,240,229)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 34.004 22.908 L 34.004 32.787 L 0.721 32.787 L 0.721 33.122 C 0.624 32.637 0.536 32.153 0.458 31.67 C 0.304 30.705 0.188 29.743 0.113 28.788 C -0.039 26.878 -0.036 24.997 0.113 23.166 C 0.409 19.504 1.287 16.046 2.662 12.972 C 5.414 6.824 10.161 2.216 16.25 0.604 C 22.34 -1.007 28.618 0.684 33.848 4.72 C 34.012 4.846 34.174 4.974 34.335 5.105 L 34.004 5.105 L 34.004 22.908 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 33.822,
    height: 32.176,
    viewBox: "0 0 33.822 32.176",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.151,
      top: 2.243,
      width: 33.822,
      height: 32.176,
      color: "rgb(239,239,229)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.345 22.254 L 33.345 31.966 L 0.7 31.966 L 0.7 32.176 C 0.606 31.705 0.52 31.235 0.445 30.766 C 0.295 29.828 0.183 28.894 0.11 27.966 C -0.038 26.111 -0.035 24.283 0.11 22.505 C 0.398 18.948 1.25 15.588 2.586 12.602 C 5.259 6.63 9.87 2.153 15.786 0.587 C 21.701 -0.978 27.801 0.665 32.881 4.585 C 33.199 4.831 33.512 5.084 33.822 5.347 L 33.346 5.347 L 33.346 22.254 L 33.345 22.254 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 32.826,
    height: 31.229,
    viewBox: "0 0 32.826 31.229",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.811,
      top: 3.065,
      width: 32.826,
      height: 31.229,
      color: "rgb(238,238,228)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32.684 21.599 L 32.684 31.144 L 0.679 31.144 L 0.679 31.229 C 0.587 30.772 0.505 30.316 0.432 29.861 C 0.286 28.95 0.177 28.043 0.106 27.143 C -0.037 25.342 -0.034 23.569 0.106 21.843 C 0.386 18.39 1.213 15.129 2.51 12.23 C 5.104 6.434 9.579 2.089 15.321 0.57 C 21.062 -0.949 26.983 0.645 31.913 4.45 C 32.222 4.688 32.525 4.935 32.826 5.19 L 32.684 5.19 L 32.684 21.6 L 32.684 21.599 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 32.265,
    height: 30.617,
    viewBox: "0 0 32.265 30.617",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.47,
      top: 3.885,
      width: 32.265,
      height: 30.617,
      color: "rgb(237,237,227)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32.025 20.946 L 32.025 30.325 L 0.728 30.325 L 0.728 30.617 C 0.704 30.506 0.681 30.395 0.659 30.284 C 0.57 29.841 0.489 29.398 0.419 28.956 C 0.277 28.073 0.173 27.194 0.103 26.321 C -0.036 24.575 -0.033 22.855 0.103 21.181 C 0.374 17.833 1.176 14.671 2.434 11.86 C 4.95 6.239 9.289 2.026 14.857 0.553 C 20.424 -0.921 26.166 0.625 30.947 4.316 C 31.246 4.547 31.541 4.786 31.832 5.033 C 31.977 5.157 32.121 5.282 32.265 5.409 L 32.025 5.409 L 32.025 20.945 L 32.025 20.946 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 31.672,
    height: 29.982,
    viewBox: "0 0 31.672 29.982",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.132,
      top: 4.706,
      width: 31.672,
      height: 29.982,
      color: "rgb(236,236,226)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 31.365 20.291 L 31.365 29.503 L 0.775 29.503 L 0.775 29.982 C 0.728 29.767 0.682 29.552 0.639 29.338 C 0.552 28.909 0.475 28.48 0.406 28.052 C 0.269 27.196 0.167 26.344 0.1 25.499 C -0.035 23.807 -0.032 22.141 0.1 20.519 C 0.363 17.276 1.139 14.212 2.358 11.49 C 4.795 6.044 9 1.963 14.393 0.535 C 19.786 -0.892 25.348 0.605 29.98 4.18 C 30.559 4.627 31.124 5.107 31.672 5.616 L 31.366 5.616 L 31.366 20.289 L 31.365 20.291 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 31.044,
    height: 29.015,
    viewBox: "0 0 31.044 29.015",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.791,
      top: 5.527,
      width: 31.044,
      height: 29.015,
      color: "rgb(235,235,225)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.705 19.637 L 30.705 28.682 L 0.75 28.682 L 0.75 29.015 C 0.704 28.807 0.66 28.599 0.618 28.391 C 0.535 27.976 0.459 27.561 0.393 27.147 C 0.26 26.319 0.162 25.495 0.097 24.676 C -0.033 23.039 -0.031 21.426 0.097 19.857 C 0.351 16.718 1.103 13.753 2.282 11.119 C 4.641 5.849 8.709 1.899 13.928 0.518 C 19.148 -0.863 24.53 0.587 29.012 4.046 C 29.573 4.478 30.119 4.942 30.649 5.436 C 30.782 5.559 30.913 5.685 31.044 5.812 L 30.705 5.812 L 30.705 19.636 L 30.705 19.637 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 30.385,
    height: 28.047,
    viewBox: "0 0 30.385 28.047",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.447,
      top: 6.35,
      width: 30.385,
      height: 28.047,
      color: "rgb(234,234,223)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.045 18.981 L 30.045 27.861 L 0.725 27.861 L 0.725 28.047 C 0.68 27.846 0.638 27.645 0.598 27.445 C 0.517 27.044 0.445 26.642 0.38 26.242 C 0.252 25.442 0.157 24.645 0.094 23.854 C -0.032 22.272 -0.03 20.713 0.094 19.195 C 0.339 16.161 1.066 13.295 2.206 10.748 C 4.486 5.654 8.419 1.835 13.464 0.501 C 18.51 -0.834 23.712 0.567 28.046 3.911 C 28.588 4.329 29.116 4.778 29.628 5.255 C 29.884 5.493 30.136 5.739 30.385 5.992 L 30.046 5.992 L 30.046 18.981 L 30.045 18.981 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 29.694,
    height: 27.081,
    viewBox: "0 0 29.694 27.081",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.107,
      top: 7.169,
      width: 29.694,
      height: 27.081,
      color: "rgb(233,233,222)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.386 18.328 L 29.386 27.04 L 0.701 27.04 L 0.701 27.081 C 0.657 26.887 0.616 26.693 0.577 26.499 C 0.499 26.112 0.429 25.724 0.367 25.338 C 0.243 24.565 0.151 23.796 0.09 23.032 C -0.032 21.504 -0.028 19.999 0.09 18.534 C 0.328 15.605 1.029 12.837 2.13 10.378 C 4.331 5.459 8.128 1.773 13 0.484 C 17.871 -0.806 22.895 0.547 27.079 3.776 C 27.602 4.18 28.112 4.613 28.607 5.074 C 28.854 5.304 29.098 5.542 29.338 5.785 C 29.458 5.908 29.577 6.031 29.694 6.156 L 29.386 6.156 L 29.386 18.327 L 29.386 18.328 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.970,
    height: 26.674,
    viewBox: "0 0 28.970 26.674",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.769,
      top: 7.992,
      width: 28.97,
      height: 26.674,
      color: "rgb(232,232,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28.726 17.672 L 28.726 26.217 L 0.806 26.217 L 0.806 26.674 C -2.112 14.685 3.14 2.952 12.536 0.466 C 17.233 -0.777 22.078 0.527 26.112 3.641 C 27.12 4.42 28.078 5.311 28.97 6.305 L 28.726 6.305 L 28.726 17.672 L 28.726 17.672 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.530,
    height: 25.686,
    viewBox: "0 0 28.530 25.686",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.428,
      top: 8.814,
      width: 28.53,
      height: 25.686,
      color: "rgb(231,231,220)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28.066 17.018 L 28.066 25.396 L 0.776 25.396 L 0.776 25.686 C -2.033 14.142 3.024 2.843 12.071 0.449 C 16.595 -0.748 21.26 0.508 25.145 3.506 C 26.116 4.255 27.038 5.114 27.898 6.071 C 28.113 6.31 28.323 6.555 28.53 6.806 L 28.066 6.806 L 28.066 17.018 L 28.066 17.018 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 27.433,
    height: 24.699,
    viewBox: "0 0 27.433 24.699",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.09,
      top: 9.635,
      width: 27.433,
      height: 24.699,
      color: "rgb(230,230,219)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 27.406 16.362 L 27.406 24.575 L 0.746 24.575 L 0.746 24.699 C -1.955 13.598 2.908 2.733 11.607 0.432 C 15.957 -0.719 20.442 0.489 24.177 3.371 C 25.111 4.092 25.998 4.917 26.824 5.837 C 27.031 6.067 27.234 6.303 27.433 6.544 L 27.406 6.544 L 27.406 16.362 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26.896,
    height: 24.207,
    viewBox: "0 0 26.896 24.207",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.746,
      top: 10.457,
      width: 26.896,
      height: 24.207,
      color: "rgb(229,229,218)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 26.746 15.709 L 26.746 23.753 L 0.843 23.753 L 0.843 24.207 C 0.799 24.042 0.757 23.877 0.717 23.71 C -1.877 13.054 2.791 2.624 11.142 0.414 C 15.318 -0.69 19.624 0.469 23.21 3.237 C 24.106 3.929 24.958 4.721 25.751 5.604 C 26.148 6.045 26.529 6.509 26.896 6.994 L 26.746 6.994 L 26.746 15.709 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26.289,
    height: 23.199,
    viewBox: "0 0 26.289 23.199",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.409,
      top: 11.276,
      width: 26.289,
      height: 23.199,
      color: "rgb(228,228,217)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 26.086 15.055 L 26.086 22.933 L 0.808 22.933 L 0.808 23.199 C 0.766 23.042 0.726 22.883 0.686 22.723 C -1.798 12.51 2.674 2.515 10.678 0.397 C 14.679 -0.662 18.805 0.45 22.243 3.102 C 23.102 3.765 23.918 4.524 24.678 5.371 C 25.058 5.794 25.425 6.238 25.775 6.703 C 25.95 6.935 26.122 7.173 26.289 7.416 L 26.085 7.416 L 26.085 15.055 L 26.086 15.055 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 25.614,
    height: 22.640,
    viewBox: "0 0 25.614 22.640",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.069,
      top: 12.098,
      width: 25.614,
      height: 22.64,
      color: "rgb(227,227,215)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 25.426 14.399 L 25.426 22.111 L 0.896 22.111 L 0.896 22.64 C 0.811 22.342 0.731 22.04 0.657 21.735 C -1.72 11.967 2.559 2.406 10.214 0.38 C 14.042 -0.633 17.989 0.43 21.276 2.967 C 22.919 4.236 24.398 5.873 25.614 7.804 L 25.426 7.804 L 25.426 14.4 L 25.426 14.399 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 25.273,
    height: 21.611,
    viewBox: "0 0 25.273 21.611",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.729,
      top: 12.92,
      width: 25.273,
      height: 21.611,
      color: "rgb(226,226,214)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.765 13.745 L 24.765 21.29 L 0.855 21.29 L 0.855 21.611 C 0.773 21.326 0.697 21.038 0.627 20.747 C -1.642 11.422 2.442 2.296 9.75 0.363 C 13.403 -0.604 17.171 0.411 20.309 2.832 C 21.878 4.043 23.29 5.605 24.45 7.448 C 24.741 7.909 25.015 8.386 25.273 8.881 L 24.766 8.881 L 24.766 13.745 L 24.765 13.745 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.424,
    height: 20.582,
    viewBox: "0 0 24.424 20.582",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.388,
      top: 13.742,
      width: 24.424,
      height: 20.582,
      color: "rgb(224,224,213)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.106 13.09 L 24.106 20.468 L 0.815 20.468 L 0.815 20.582 C 0.737 20.31 0.664 20.036 0.597 19.759 C -1.564 10.879 2.326 2.187 9.285 0.345 C 12.765 -0.575 16.353 0.391 19.342 2.697 C 20.836 3.85 22.18 5.338 23.286 7.094 C 23.562 7.532 23.824 7.988 24.069 8.459 C 24.192 8.694 24.311 8.933 24.424 9.177 L 24.106 9.177 L 24.106 13.09 L 24.106 13.09 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23.516,
    height: 19.937,
    viewBox: "0 0 23.516 19.937",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.046,
      top: 14.563,
      width: 23.516,
      height: 19.937,
      color: "rgb(223,223,212)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.446 12.436 L 23.446 19.647 L 0.888 19.647 L 0.888 19.937 C 0.849 19.809 0.811 19.681 0.774 19.553 C 0.7 19.295 0.632 19.034 0.567 18.771 C -1.486 10.334 2.21 2.077 8.821 0.328 C 12.126 -0.547 15.535 0.371 18.374 2.562 C 19.793 3.658 21.071 5.072 22.121 6.739 C 22.646 7.572 23.114 8.469 23.516 9.422 L 23.446 9.422 L 23.446 12.436 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23.219,
    height: 19.247,
    viewBox: "0 0 23.219 19.247",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.709,
      top: 15.383,
      width: 23.219,
      height: 19.247,
      color: "rgb(222,222,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.786 11.781 L 22.786 18.827 L 0.955 18.827 L 0.955 19.247 C 0.798 18.771 0.658 18.283 0.537 17.783 C -1.407 9.791 2.093 1.968 8.356 0.311 C 14.62 -1.346 21.274 3.789 23.219 11.781 L 22.786 11.781 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.437,
    height: 18.178,
    viewBox: "0 0 22.437 18.178",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.371,
      top: 16.203,
      width: 22.437,
      height: 18.178,
      color: "rgb(221,221,209)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.929 11.127 C 22.389 13.014 22.526 14.891 22.382 16.67 L 22.126 16.67 L 22.126 18.005 L 0.903 18.005 L 0.903 18.178 C 0.754 17.728 0.622 17.268 0.507 16.795 C -1.329 9.247 1.977 1.859 7.893 0.294 C 13.808 -1.272 20.093 3.579 21.929 11.127 L 21.929 11.127 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21.117,
    height: 17.735,
    viewBox: "0 0 21.117 17.735",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.026,
      top: 17.025,
      width: 21.117,
      height: 17.735,
      color: "rgb(219,219,208)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.639 10.473 C 21.071 12.249 21.201 14.016 21.066 15.69 C 21.032 16.108 20.981 16.52 20.915 16.926 C 20.881 17.13 20.845 17.33 20.804 17.529 L 20.804 17.184 L 1.071 17.184 L 1.071 17.735 C 0.994 17.529 0.92 17.32 0.85 17.108 C 0.71 16.685 0.586 16.251 0.478 15.807 C -1.251 8.703 1.861 1.749 7.428 0.276 C 12.996 -1.197 18.911 3.368 20.639 10.472 L 20.639 10.473 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.798,
    height: 16.627,
    viewBox: "0 0 19.798 16.627",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.689,
      top: 17.847,
      width: 19.798,
      height: 16.627,
      color: "rgb(218,218,206)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.35 9.817 C 19.755 11.483 19.877 13.139 19.749 14.708 C 19.717 15.101 19.67 15.488 19.608 15.868 C 19.577 16.058 19.541 16.246 19.503 16.433 L 19.503 16.363 L 1.003 16.363 L 1.003 16.627 C 0.931 16.434 0.862 16.238 0.796 16.039 C 0.665 15.642 0.549 15.235 0.448 14.819 C -1.173 8.159 1.744 1.64 6.964 0.259 C 12.184 -1.122 17.729 3.158 19.349 9.817 L 19.35 9.817 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.477,
    height: 16.052,
    viewBox: "0 0 18.477 16.052",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.35,
      top: 18.668,
      width: 18.477,
      height: 16.052,
      color: "rgb(217,217,205)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.059 9.163 C 18.437 10.717 18.551 12.263 18.432 13.727 C 18.372 14.46 18.255 15.171 18.084 15.855 L 18.084 15.542 L 1.149 15.542 L 1.149 16.052 C 0.853 15.351 0.607 14.608 0.418 13.831 C -1.095 7.615 1.628 1.53 6.499 0.242 C 11.371 -1.047 16.546 2.947 18.059 9.163 L 18.059 9.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.158,
    height: 14.905,
    viewBox: "0 0 17.158 14.905",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.008,
      top: 19.489,
      width: 17.158,
      height: 14.905,
      color: "rgb(215,215,203)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.77 8.509 C 17.121 9.953 17.227 11.388 17.116 12.748 C 17.062 13.428 16.953 14.089 16.793 14.723 L 16.793 14.72 L 1.067 14.72 L 1.067 14.905 C 0.792 14.254 0.564 13.565 0.388 12.843 C -1.016 7.071 1.512 1.422 6.035 0.224 C 10.558 -0.973 15.364 2.737 16.769 8.508 L 16.77 8.509 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.838,
    height: 14.449,
    viewBox: "0 0 15.838 14.449",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.667,
      top: 20.31,
      width: 15.838,
      height: 14.449,
      color: "rgb(214,214,202)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.479 7.855 C 15.803 9.187 15.901 10.512 15.799 11.767 C 15.748 12.395 15.648 13.005 15.501 13.591 C 15.428 13.883 15.343 14.17 15.247 14.449 L 15.247 13.9 L 1.183 13.9 L 1.183 14.204 C 1.114 14.058 1.049 13.91 0.985 13.76 C 0.731 13.158 0.52 12.522 0.358 11.856 C -0.938 6.528 1.396 1.312 5.571 0.207 C 9.747 -0.898 14.183 2.526 15.48 7.854 L 15.479 7.855 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.518,
    height: 13.414,
    viewBox: "0 0 14.518 13.414",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.325,
      top: 21.132,
      width: 14.518,
      height: 13.414,
      color: "rgb(213,213,201)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.19 7.2 C 14.487 8.421 14.576 9.636 14.483 10.786 C 14.436 11.362 14.344 11.921 14.209 12.458 C 14.142 12.726 14.065 12.989 13.976 13.244 L 13.976 13.078 L 1.28 13.078 L 1.28 13.414 C 1.145 13.155 1.019 12.888 0.903 12.612 C 0.67 12.061 0.477 11.478 0.328 10.867 C -0.86 5.983 1.279 1.203 5.107 0.19 C 8.935 -0.823 13.001 2.316 14.19 7.199 L 14.19 7.2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.198,
    height: 12.717,
    viewBox: "0 0 13.198 12.717",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.987,
      top: 21.954,
      width: 13.198,
      height: 12.717,
      color: "rgb(211,211,199)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.9 6.544 C 13.44 8.765 13.224 10.961 12.437 12.717 L 12.437 12.256 L 1.353 12.256 L 1.353 12.542 C 1.288 12.428 1.225 12.312 1.164 12.194 C 1.041 11.959 0.926 11.716 0.821 11.465 C 0.609 10.964 0.434 10.434 0.298 9.879 C -0.782 5.439 1.163 1.093 4.643 0.173 C 8.123 -0.748 11.819 2.105 12.9 6.545 L 12.9 6.544 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.878,
    height: 11.590,
    viewBox: "0 0 11.878 11.590",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.648,
      top: 22.774,
      width: 11.878,
      height: 11.59,
      color: "rgb(210,210,198)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.609 5.891 C 12.096 7.889 11.901 9.866 11.194 11.447 L 11.194 11.435 L 1.4 11.435 L 1.4 11.59 C 0.902 10.801 0.512 9.891 0.269 8.892 C -0.704 4.895 1.047 0.985 4.178 0.155 C 7.31 -0.673 10.637 1.895 11.609 5.89 L 11.609 5.891 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.559,
    height: 11.158,
    viewBox: "0 0 10.559 11.158",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.305,
      top: 23.595,
      width: 10.559,
      height: 11.158,
      color: "rgb(208,208,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.32 5.237 C 10.752 7.013 10.579 8.77 9.95 10.175 C 9.793 10.527 9.607 10.856 9.395 11.158 L 9.395 10.615 L 1.593 10.615 L 1.593 10.809 C 1.471 10.647 1.355 10.478 1.244 10.302 C 0.802 9.6 0.455 8.791 0.239 7.903 C -0.625 4.351 0.93 0.874 3.714 0.138 C 6.497 -0.598 9.455 1.684 10.319 5.236 L 10.32 5.237 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.238,
    height: 10.141,
    viewBox: "0 0 9.238 10.141",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.964,
      top: 24.418,
      width: 9.238,
      height: 10.141,
      color: "rgb(207,207,195)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.029 4.581 C 9.407 6.135 9.256 7.672 8.706 8.902 C 8.568 9.209 8.405 9.497 8.22 9.762 C 8.128 9.894 8.029 10.021 7.926 10.141 L 7.926 9.793 L 1.728 9.793 L 1.728 9.863 C 1.496 9.605 1.282 9.321 1.089 9.015 C 0.702 8.401 0.398 7.693 0.209 6.916 C -0.547 3.807 0.814 0.766 3.25 0.121 C 5.686 -0.523 8.274 1.474 9.03 4.581 L 9.029 4.581 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.919,
    height: 9.045,
    viewBox: "0 0 7.919 9.045",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.629,
      top: 25.237,
      width: 7.919,
      height: 9.045,
      color: "rgb(206,206,193)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.74 3.927 C 8.064 5.259 7.934 6.577 7.462 7.631 C 7.226 8.157 6.905 8.619 6.512 8.983 L 6.512 8.971 L 2.116 8.971 L 2.116 9.045 C 1.22 8.353 0.503 7.26 0.179 5.927 C -0.469 3.263 0.698 0.656 2.786 0.103 C 4.873 -0.449 7.091 1.263 7.74 3.927 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.599,
    height: 8.212,
    viewBox: "0 0 6.599 8.212",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.287,
      top: 26.059,
      width: 6.599,
      height: 8.212,
      color: "rgb(204,204,191)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.449 3.272 C 6.99 5.493 6.017 7.665 4.277 8.126 C 2.537 8.586 0.689 7.159 0.149 4.94 C -0.391 2.719 0.581 0.547 2.321 0.086 C 4.061 -0.374 5.909 1.053 6.449 3.272 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.279,
    height: 6.570,
    viewBox: "0 0 5.279 6.570",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.948,
      top: 26.88,
      width: 5.279,
      height: 6.57,
      color: "rgb(203,203,190)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.16 2.618 C 5.592 4.394 4.815 6.133 3.422 6.501 C 2.03 6.87 0.552 5.728 0.119 3.952 C -0.313 2.176 0.466 0.438 1.857 0.069 C 3.249 -0.299 4.727 0.842 5.16 2.618 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.959,
    height: 4.927,
    viewBox: "0 0 3.959 4.927",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.61,
      top: 27.7,
      width: 3.959,
      height: 4.927,
      color: "rgb(201,201,188)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.87 1.963 C 4.194 3.296 3.61 4.599 2.567 4.875 C 1.523 5.152 0.414 4.295 0.09 2.964 C -0.235 1.631 0.349 0.328 1.392 0.052 C 2.436 -0.225 3.546 0.632 3.87 1.963 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.605,
    height: 3.311,
    viewBox: "0 0 2.605 3.311",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.980,-0.201,0.202,0.979,25.978,28.794)",
      transformOrigin: "0 0",
      width: 2.605,
      height: 3.311,
      color: "rgb(200,200,187)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.303 3.311 C 2.022 3.311 2.605 2.57 2.605 1.656 C 2.605 0.741 2.022 0 1.303 0 C 0.583 0 0 0.741 0 1.656 C 0 2.57 0.583 3.311 1.303 3.311 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.320,
    height: 1.642,
    viewBox: "0 0 1.320 1.642",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.927,
      top: 29.344,
      width: 1.32,
      height: 1.642,
      color: "rgb(198,198,185)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.29 0.654 C 1.398 1.099 1.203 1.532 0.856 1.624 C 0.508 1.717 0.138 1.431 0.03 0.988 C -0.078 0.543 0.117 0.109 0.464 0.017 C 0.812 -0.075 1.182 0.211 1.29 0.654 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 15.530,
    height: 9.131,
    viewBox: "0 0 15.530 9.131",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.658,
      top: 36.869,
      width: 15.53,
      height: 9.131
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.707 0.418 C 10.074 0.577 5.788 3.315 2.768 5.228 C 1.115 6.275 -2.227 9.454 2.21 9.105 C 3.926 8.969 4.754 8.912 5.986 8.035 C 7.792 6.748 9.432 5.188 11.409 4.121 C 12.886 3.324 14.989 2.178 15.53 0.265 C 15.309 -0.062 15.063 -0.165 13.708 0.418 L 13.707 0.418 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.906,
      top: 0.63,
      width: 3.003,
      height: 7.923,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.0027740001678467,
      height: 7.9226603507995605,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.002,
      height: 7.922,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.002,
    height: 7.922,
    viewBox: "0 0 3.002 7.922",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.002,
      height: 7.922
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.747 4.369 C 2.469 2.887 1.822 1.419 0.906 0.194 C 0.828 0.089 0.715 -0.029 0.616 0.006 C 0.56 0.026 0.531 0.088 0.507 0.147 C -0.365 2.263 -0.096 5.134 1.191 7.464 C 1.276 7.618 1.375 7.781 1.515 7.86 C 1.601 7.909 1.693 7.922 1.782 7.922 C 2.483 7.927 2.94 7.199 2.995 6.407 C 3.05 5.616 2.795 4.774 2.545 3.964",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.792,
      top: 0,
      width: 4.854,
      height: 8.714,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.854034900665283,
      height: 8.714438438415527,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 4.854,
      height: 8.715,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.854,
    height: 8.715,
    viewBox: "0 0 4.854 8.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.854,
      height: 8.715
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.768 3.489 C 4.247 2.003 3.144 0.758 1.753 0.088 C 1.662 0.044 1.567 0.002 1.464 0 C 1.29 -0.004 1.13 0.11 1.003 0.239 C 0.708 0.54 0.531 0.938 0.393 1.337 C -0.379 3.585 0.005 6.177 1.385 8.012 C 1.622 8.326 1.913 8.636 2.298 8.702 C 2.906 8.806 3.459 8.272 3.809 7.734 C 4.663 6.423 5.018 4.792 4.782 3.268",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25.745,
      top: 2.903,
      width: 2.827,
      height: 6.617,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.826814651489258,
      height: 6.617166519165039,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.001,
      top: 0.002,
      width: 2.826,
      height: 6.618,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.826,
    height: 6.618,
    viewBox: "0 0 2.826 6.618",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.826,
      height: 6.618
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.069 4.175 C 0.006 3.047 -0.014 1.925 0.01 0.815 C 0.017 0.492 0.058 0.118 0.311 0.021 C 0.493 -0.049 0.726 0.064 0.892 0.238 C 1.058 0.413 1.173 0.639 1.283 0.86 C 1.553 1.4 1.823 1.94 2.093 2.48 C 2.25 2.795 2.408 3.111 2.534 3.438 C 2.977 4.589 2.952 5.975 2.206 6.618 C 1.476 5.683 0.745 4.748 0.015 3.813",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.74,
      top: 4.458,
      width: 2.423,
      height: 3.31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.422516345977783,
      height: 3.3098063468933105,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 2.423,
      height: 3.309,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.423,
    height: 3.309,
    viewBox: "0 0 2.423 3.309",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.423,
      height: 3.309
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.119 2.442 C -0.029 1.828 -0.039 1.2 0.091 0.642 C 0.163 0.335 0.315 0.018 0.601 0.001 C 0.879 -0.016 1.152 0.26 1.361 0.527 C 1.705 0.965 2.006 1.447 2.253 1.954 C 2.35 2.155 2.444 2.378 2.418 2.581 C 2.383 2.866 2.136 3.002 1.913 3.106 C 1.65 3.227 1.373 3.351 1.066 3.296 C 0.594 3.211 0.147 2.648 0.127 2.109",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.84,
      top: 1.776,
      width: 4.471,
      height: 9.17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.471015453338623,
      height: 9.170259475708008,
      clipPath: "inset(-0.000px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.471,
      height: 9.17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.471,
    height: 9.170,
    viewBox: "0 0 4.471 9.170",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.471,
      height: 9.17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.204 6.085 C 0.342 4.911 0.481 3.737 0.62 2.562 C 0.737 1.564 0.935 0.437 1.729 0.054 C 1.817 0.012 1.917 -0.02 2.017 0.015 C 2.193 0.076 2.289 0.301 2.357 0.495 C 2.905 2.057 3.453 3.618 4 5.181 C 4.191 5.725 4.384 6.277 4.449 6.837 C 4.532 7.552 4.383 8.28 3.964 8.736 C 3.543 9.192 2.832 9.323 2.242 8.963 C 1.955 8.787 1.716 8.517 1.494 8.239 C 0.908 7.505 0.403 6.691 0 5.829",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.281,
      top: 5.095,
      width: 4.445,
      height: 5.77,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.444826126098633,
      height: 5.769941329956055,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 4.445,
      height: 5.769,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.445,
    height: 5.769,
    viewBox: "0 0 4.445 5.769",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.445,
      height: 5.769
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.007 2.826 C 0.693 2.027 0.378 1.228 0.064 0.429 C 0.021 0.319 -0.023 0.195 0.013 0.1 C 0.08 -0.078 0.329 0.014 0.501 0.125 C 1.302 0.648 2.108 1.243 2.693 2.082 C 2.947 2.448 3.152 2.849 3.355 3.248 C 3.677 3.88 3.999 4.512 4.321 5.143 C 4.432 5.36 4.522 5.687 4.344 5.758 C 4.273 5.787 4.186 5.755 4.106 5.724 C 3.266 5.397 2.372 5.029 1.752 4.236 C 1.553 3.981 1.392 3.693 1.233 3.407 C 1.1 3.169 0.967 2.93 0.834 2.692",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.797,
      top: 6.889,
      width: 3.54,
      height: 3.95,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.539656400680542,
      height: 3.9499142169952393,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.002,
      width: 3.54,
      height: 3.95,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.540,
    height: 3.950,
    viewBox: "0 0 3.540 3.950",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.54,
      height: 3.95
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.46 2.695 C 0.326 2.085 0.192 1.473 0.058 0.862 C -0.003 0.581 -0.054 0.247 0.115 0.085 C 0.276 -0.069 0.545 0.016 0.774 0.106 C 1.235 0.288 1.708 0.478 2.111 0.83 C 2.721 1.363 3.08 2.182 3.41 2.958 C 3.477 3.116 3.546 3.282 3.539 3.443 C 3.532 3.636 3.414 3.78 3.273 3.859 C 2.798 4.122 2.156 3.764 1.617 3.416 C 1.205 3.15 0.791 2.885 0.379 2.619",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.263,
      top: 4.817,
      width: 3.156,
      height: 4.018,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.155818462371826,
      height: 4.018409729003906,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.155,
      height: 4.018,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.155,
    height: 4.018,
    viewBox: "0 0 3.155 4.018",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.155,
      height: 4.018
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.953 3.382 C 2.426 2.255 1.747 1.196 0.953 0.263 C 0.835 0.125 0.684 -0.024 0.539 0.003 C 0.478 0.015 0.429 0.058 0.387 0.104 C 0.114 0.398 -0.009 0.852 0 1.323 C 0.009 1.793 0.142 2.28 0.331 2.739 C 0.425 2.967 0.537 3.197 0.706 3.366 C 0.932 3.594 1.222 3.683 1.497 3.755 C 1.78 3.83 2.061 3.899 2.344 3.961 C 2.632 4.024 2.951 4.073 3.155 3.889",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.046,
      top: 3.609,
      width: 3.851,
      height: 5.686,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.850654363632202,
      height: 5.685952186584473,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 3.851,
      height: 5.685,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.851,
    height: 5.685,
    viewBox: "0 0 3.851 5.685",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.851,
      height: 5.685
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.805 3.068 C 3.084 2.693 2.54 2.026 1.982 1.41 C 1.424 0.793 0.79 0.188 0.011 0 C -0.07 1.774 0.289 3.582 1.042 5.194 C 1.146 5.417 1.297 5.664 1.528 5.684 C 1.646 5.694 1.757 5.64 1.862 5.587 C 2.379 5.326 2.902 5.048 3.299 4.613 C 3.696 4.177 3.949 3.55 3.815 2.948",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.782,
      top: 6.362,
      width: 5.284,
      height: 5.743,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.283703804016113,
      height: 5.743031978607178,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.001,
      width: 5.284,
      height: 5.744,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.284,
    height: 5.744,
    viewBox: "0 0 5.284 5.744",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.284,
      height: 5.744
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 3.212 C -0.616 1.127 0.062 -0.498 0.968 0.141 C 1.021 0.178 1.043 0.053 1.098 0.046 C 1.154 0.04 1.213 0.072 1.269 0.103 C 2.358 0.726 3.399 1.512 4.352 2.431 C 4.775 2.838 5.216 3.345 5.277 3.926 C 5.344 4.575 4.913 5.029 4.508 5.385 C 4.305 5.564 4.081 5.749 3.801 5.744 C 3.55 5.74 3.295 5.583 3.065 5.407 C 2.664 5.1 2.304 4.72 1.945 4.342 C 1.588 3.965 1.231 3.589 0.874 3.213",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.45,
      top: 3.965,
      width: 2.961,
      height: 5.795,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.9610350131988525,
      height: 5.795219421386719,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.004,
      top: -0.001,
      width: 2.961,
      height: 5.794,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.961,
    height: 5.794,
    viewBox: "0 0 2.961 5.794",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.961,
      height: 5.794
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.537 3.965 C 0.733 3.549 0.656 2.983 0.503 2.469 C 0.351 1.955 0.128 1.452 0.032 0.933 C 0.003 0.779 -0.013 0.624 0.013 0.482 C 0.088 0.081 0.504 -0.082 0.88 0.039 C 1.256 0.16 1.585 0.494 1.854 0.851 C 2.899 2.242 3.251 4.207 2.709 5.625 C 2.68 5.699 2.644 5.778 2.572 5.792 C 2.5 5.807 2.42 5.751 2.351 5.696 C 1.697 5.184 1.091 4.574 0.557 3.894",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.063,
      top: 9.741,
      width: 4.766,
      height: 7.773,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.766464710235596,
      height: 7.772623538970947,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.767,
      height: 7.772,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.767,
    height: 7.772,
    viewBox: "0 0 4.767 7.772",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.767,
      height: 7.772
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.013 5.588 C 2.57 4.569 2.105 3.517 1.366 2.721 C 1.073 2.406 0.739 2.132 0.504 1.762 C 0.258 1.374 0.145 0.92 0.038 0.48 C 0.004 0.338 -0.028 0.176 0.041 0.075 C 0.15 -0.084 0.401 0.04 0.581 0.17 C 1.682 0.961 2.839 1.815 3.521 3.085 C 3.725 3.463 3.878 3.867 4.022 4.27 C 4.201 4.771 4.366 5.277 4.518 5.784 C 4.706 6.411 4.872 7.096 4.684 7.641 C 4.663 7.703 4.63 7.767 4.57 7.772 C 4.499 7.778 4.431 7.7 4.38 7.629 C 3.873 6.939 3.4 6.219 2.966 5.474",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 4.071,
    height: 2.958,
    viewBox: "0 0 4.071 2.958",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.914,
      top: 10.248,
      width: 4.071,
      height: 2.958
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.876 0.854 C 3.502 0.406 2.971 0.218 2.477 0.117 C 1.768 -0.028 1.058 -0.045 0.398 0.105 C 0.233 0.143 0.052 0.211 0.009 0.396 C -0.024 0.542 0.04 0.714 0.111 0.865 C 0.767 2.249 2.248 3.161 3.445 2.918 C 3.724 2.861 4.014 2.713 4.064 2.392 C 4.085 2.255 4.059 2.105 4.032 1.958 C 3.967 1.595 3.902 1.232 3.837 0.869",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.333,
      top: 8.778,
      width: 4.452,
      height: 2.656,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.452192783355713,
      height: 2.655836582183838,
      clipPath: "inset(0px 0px 0px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.452,
      height: 2.655,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.452,
    height: 2.655,
    viewBox: "0 0 4.452 2.655",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.452,
      height: 2.655
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.248 2.182 C 4.058 1.685 3.64 1.27 3.196 1.136 C 2.84 1.028 2.486 1.091 2.13 0.987 C 1.533 0.812 1.019 0.198 0.422 0.022 C 0.342 -0.002 0.255 -0.016 0.196 0.03 C 0.156 0.06 0.134 0.112 0.116 0.164 C -0.01 0.522 -0.034 0.943 0.048 1.362 C 0.094 1.599 0.195 1.865 0.39 1.984 C 0.577 2.098 0.778 2.037 0.958 1.986 C 2.052 1.683 3.335 1.929 4.452 2.655",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.864,
      top: 7.084,
      width: 4.826,
      height: 6.004,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.826209545135498,
      height: 6.00396728515625,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.826,
      height: 6.003,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.826,
    height: 6.003,
    viewBox: "0 0 4.826 6.003",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.826,
      height: 6.003
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.547 4.263 C 4.396 3.609 3.917 3.067 3.454 2.589 C 2.664 1.772 1.844 0.994 0.999 0.26 C 0.857 0.136 0.699 0.007 0.537 0 C 0.339 -0.008 0.202 0.17 0.125 0.362 C -0.105 0.935 0.018 1.679 0.211 2.362 C 0.409 3.061 0.696 3.782 1.195 4.296 C 1.455 4.563 1.758 4.759 2.056 4.952 C 2.337 5.133 2.619 5.314 2.899 5.495 C 3.19 5.683 3.486 5.873 3.795 5.959 C 4.106 6.046 4.437 6.012 4.635 5.787 C 4.988 5.385 4.783 4.62 4.564 4",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.896,
    height: 2.984,
    viewBox: "0 0 3.896 2.984",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.055,
      top: 8.416,
      width: 3.896,
      height: 2.984
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.779 2.596 C 3.856 2.076 3.63 1.644 3.281 1.341 C 2.932 1.039 2.467 0.849 2.007 0.661 C 1.485 0.449 0.962 0.236 0.44 0.024 C 0.398 0.007 0.351 -0.01 0.296 0.007 C 0.215 0.031 0.156 0.112 0.122 0.182 C -0.041 0.51 -0.006 0.823 0.032 1.116 C 0.102 1.649 0.2 2.222 0.691 2.457 C 0.823 2.519 0.976 2.554 1.131 2.588 C 1.806 2.734 2.495 2.86 3.195 2.965 C 3.324 2.984 3.462 3.001 3.61 2.951 C 3.758 2.899 3.911 2.753 3.895 2.638",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.691,
      top: 7.358,
      width: 1.689,
      height: 4.178,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.6892138719558716,
      height: 4.1782331466674805,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 1.688,
      height: 4.179,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.688,
    height: 4.179,
    viewBox: "0 0 1.688 4.179",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.688,
      height: 4.179
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.688 1.198 C 1.482 1.079 1.328 0.775 1.114 0.764 C 0.966 0.756 0.868 0.91 0.859 1.078 C 0.851 1.246 0.911 1.422 0.97 1.59 C 1.123 2.031 1.276 2.471 1.429 2.911 C 1.575 3.332 1.724 3.786 1.642 4.179 C 1.353 4.147 1.138 3.782 0.997 3.464 C 0.549 2.455 0.219 1.398 0.017 0.338 C 0.004 0.268 -0.009 0.194 0.008 0.132 C 0.039 0.019 0.159 -0.02 0.268 0.009 C 0.378 0.04 0.479 0.123 0.573 0.206 C 0.803 0.408 1.024 0.627 1.235 0.857",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 2.228,
    height: 4.285,
    viewBox: "0 0 2.228 4.285",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.109,
      top: 5.78,
      width: 2.228,
      height: 4.285
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.845 1.566 C 1.505 0.942 1.003 0.412 0.438 0.082 C 0.334 0.021 0.208 -0.034 0.123 0.025 C 0.054 0.073 0.037 0.18 0.028 0.279 C -0.052 1.11 0.041 1.999 0.297 2.859 C 0.465 3.424 0.771 4.05 1.262 4.242 C 1.381 4.288 1.508 4.304 1.61 4.256 C 1.713 4.207 1.78 4.101 1.843 3.998 C 2.025 3.699 2.213 3.383 2.227 2.99 C 2.238 2.696 2.15 2.387 2.062 2.087 C 1.979 1.804 1.897 1.52 1.814 1.237",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.249,
    height: 6.890,
    viewBox: "0 0 5.249 6.890",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.584,
      top: 7.312,
      width: 5.249,
      height: 6.89
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.218 3.908 C 0.66 2.76 0.252 1.54 0.017 0.315 C 0.002 0.236 -0.012 0.152 0.017 0.089 C 0.054 0.011 0.145 -0.004 0.228 0.001 C 0.838 0.036 1.321 0.778 1.865 1.228 C 2.416 1.685 3.068 1.853 3.683 2.126 C 4.298 2.398 4.954 2.862 5.196 3.569 C 5.241 3.7 5.269 3.843 5.232 3.96 C 5.179 4.127 5.014 4.186 4.888 4.283 C 4.265 4.759 4.655 6.078 4.205 6.762 C 4.165 6.823 4.113 6.881 4.041 6.889 C 3.955 6.898 3.864 6.832 3.785 6.767 C 2.759 5.934 1.958 4.77 1.179 3.631",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.996,
      top: 0.584,
      width: 5.904,
      height: 9.269,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.904065132141113,
      height: 9.268924713134766,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.904,
      height: 9.269,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.904,
    height: 9.269,
    viewBox: "0 0 5.904 9.269",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.904,
      height: 9.269
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.22 4.087 C 0.237 2.332 0.698 0.973 1.535 0.204 C 1.719 0.035 1.952 -0.104 2.292 0.106 C 2.729 0.375 3.145 1.087 3.481 1.714 C 4.036 2.753 4.569 3.8 5.08 4.851 C 5.453 5.618 5.83 6.444 5.894 7.102 C 5.938 7.55 5.829 7.863 5.721 8.163 C 5.492 8.801 5.191 9.473 4.478 9.212 C 3.923 9.009 3.274 8.291 2.692 7.578 C 1.751 6.429 0.846 5.184 0 3.88",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32.054,
      top: 1.683,
      width: 4.187,
      height: 10.104,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.1870245933532715,
      height: 10.10391902923584,
      clipPath: "inset(0px 0px 0px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.187,
      height: 10.104,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.187,
    height: 10.104,
    viewBox: "0 0 4.187 10.104",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.187,
      height: 10.104
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.04 3.416 C -0.03 2.67 -0.008 1.912 0.237 1.268 C 0.483 0.624 0.976 0.106 1.614 0.012 C 1.793 -0.014 1.99 -0.004 2.163 0.103 C 2.457 0.287 2.588 0.683 2.681 1.037 C 3.141 2.786 3.419 4.559 3.698 6.326 C 3.899 7.607 4.645 9.041 3.775 10.104 C 3.048 9.305 2.594 8.264 2.159 7.254 C 1.44 5.583 0.72 3.912 0 2.242",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.778,
    height: 8.234,
    viewBox: "0 0 3.778 8.234",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.711,
      top: 5.019,
      width: 3.778,
      height: 8.234
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.246 4.86 C -0.058 4.059 -0.014 3.219 0.035 2.42 C 0.077 1.749 0.119 1.077 0.161 0.406 C 0.166 0.31 0.174 0.211 0.216 0.135 C 0.292 0.002 0.459 -0.021 0.612 0.016 C 1.117 0.138 1.482 0.74 1.748 1.284 C 2.823 3.493 3.52 5.879 3.778 8.234 C 3.637 8.243 3.49 8.138 3.359 8.035 C 2.177 7.107 1.101 5.963 0.198 4.673",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.929,
      top: 6.05,
      width: 4.487,
      height: 9.589,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.4873833656311035,
      height: 9.589386940002441,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.488,
      height: 9.59,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.488,
    height: 9.590,
    viewBox: "0 0 4.488 9.590",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.488,
      height: 9.59
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.344 0.975 C 0.077 0.95 -0.077 0.586 0.039 0.334 C 0.154 0.081 0.457 -0.037 0.721 0.01 C 0.986 0.056 1.214 0.233 1.397 0.437 C 2.104 1.227 2.249 2.393 2.777 3.323 C 3.064 3.828 3.46 4.256 3.768 4.747 C 4.661 6.166 4.729 8.106 3.939 9.59 C 2.803 8.482 2.033 7.016 1.517 5.485 C 1 3.954 0.622 2.573 0.345 0.975",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 6.215,
    height: 8.868,
    viewBox: "0 0 6.215 8.868",
    fill: "none",
    style: {
      position: "absolute",
      left: 44.695,
      top: 11.716,
      width: 6.215,
      height: 8.868
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.611 1.427 C 4.269 0.989 4.926 0.549 5.584 0.11 C 5.694 0.037 5.829 -0.038 5.951 0.022 C 6.036 0.063 6.084 0.159 6.117 0.25 C 6.286 0.72 6.208 1.237 6.096 1.715 C 5.344 4.933 3.071 7.661 0.137 8.868 C -0.138 8.275 0.051 7.587 0.272 6.989 C 1.069 4.835 2.24 2.846 3.713 1.145",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.287,
    height: 12.156,
    viewBox: "0 0 8.287 12.156",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.076,
      top: 7.94,
      width: 8.287,
      height: 12.156
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.334 3.453 C 4.995 2.72 5.656 1.989 6.317 1.257 C 6.737 0.79 7.173 0.313 7.734 0.049 C 7.81 0.013 7.898 -0.019 7.977 0.013 C 8.079 0.054 8.124 0.176 8.152 0.285 C 8.32 0.929 8.331 1.61 8.184 2.247 C 8.034 2.895 7.727 3.484 7.396 4.048 C 5.65 7.025 2.927 10.473 0 12.156 C 0.015 9.679 1.751 6.609 3.185 4.696 C 3.63 4.103 4.076 3.509 4.599 2.992",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 42.215,
      top: 7.83,
      width: 7.806,
      height: 11.265,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.806066989898682,
      height: 11.265083312988281,
      clipPath: "inset(-0.000px 0px 0.000px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 7.807,
      height: 11.266,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.807,
    height: 11.266,
    viewBox: "0 0 7.807 11.266",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.807,
      height: 11.266
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.949 0.199 C 7.494 0.559 7.78 1.253 7.804 1.915 C 7.83 2.578 7.63 3.217 7.395 3.821 C 6.175 6.951 3.871 9.568 0.994 11.092 C 0.822 11.184 0.638 11.273 0.442 11.265 C 0.245 11.257 0.034 11.118 0.004 10.914 C -0.033 10.667 0.188 10.482 0.382 10.348 C 2.648 8.775 4.562 6.668 5.949 4.217 C 6.664 2.953 7.254 1.455 6.866 0",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 6.472,
    height: 11.691,
    viewBox: "0 0 6.472 11.691",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.748,
      top: 3.204,
      width: 6.472,
      height: 11.691
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.17 7.302 C 1.141 6.032 1.396 4.349 2.179 2.953 C 2.923 1.627 4.155 0.588 5.591 0.078 C 5.869 -0.02 6.25 -0.066 6.403 0.192 C 6.463 0.291 6.469 0.413 6.471 0.528 C 6.499 2.346 5.986 4.115 5.406 5.826 C 4.999 7.026 4.551 8.223 3.861 9.28 C 3.172 10.337 2.214 11.254 1.027 11.691 C 0.254 10.248 -0.099 8.588 0.024 6.97",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.21,
      top: 3.302,
      width: 5.753,
      height: 11.643,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.752657890319824,
      height: 11.643442153930664,
      clipPath: "inset(0px 0.000px 0px -0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 5.753,
      height: 11.643,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.753,
    height: 11.643,
    viewBox: "0 0 5.753 11.643",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.753,
      height: 11.643
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.121 10.277 C 1.744 8.471 3.402 6.607 4.237 4.319 C 4.759 2.892 4.945 1.331 5.672 0 C 5.856 1.263 5.701 2.545 5.466 3.792 C 5.166 5.383 4.73 6.966 3.942 8.373 C 3.154 9.779 1.986 11.006 0.504 11.643 C 0.094 11.263 -0.09 10.655 0.042 10.119",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.743,
      top: 8.539,
      width: 1.914,
      height: 9.458,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.9142792224884033,
      height: 9.45810317993164,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 1.915,
      height: 9.458,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.915,
    height: 9.458,
    viewBox: "0 0 1.915 9.458",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.915,
      height: 9.458
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.868 C 0.073 1.431 0.185 1.011 0.334 0.616 C 0.474 0.246 0.774 -0.146 1.142 0.054 C 1.307 0.144 1.426 0.331 1.516 0.516 C 2.179 1.873 1.822 3.346 1.793 4.762 C 1.776 5.592 1.881 6.447 1.859 7.275 C 1.837 8.102 1.67 8.932 1.188 9.458 C 0.679 9.075 0.503 8.33 0.403 7.682 C 0.087 5.62 -0.026 3.561 0.069 1.56",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.967,
    height: 10.898,
    viewBox: "0 0 3.967 10.898",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.141,
      top: 0.958,
      width: 3.967,
      height: 10.898
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.008 3.22 C 0.229 2.25 0.593 1.344 1.082 0.545 C 1.296 0.196 1.668 -0.159 2.044 0.076 C 2.295 0.232 2.4 0.575 2.478 0.876 C 2.914 2.567 3.349 4.256 3.784 5.947 C 3.886 6.34 3.988 6.743 3.963 7.13 C 3.933 7.573 3.74 7.953 3.55 8.317 C 3.124 9.137 2.698 9.957 2.272 10.777 C 2.244 10.83 2.211 10.888 2.154 10.897 C 2.107 10.904 2.057 10.875 2.013 10.845 C 1.269 10.339 0.939 9.318 0.738 8.399 C 0.347 6.608 0.174 4.803 0 3.005",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.597,
      top: 0.686,
      width: 4.451,
      height: 16.962,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.450555801391602,
      height: 16.961637496948242,
      clipPath: "inset(0.000px 0px 0px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.451,
      height: 16.962,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.451,
    height: 16.962,
    viewBox: "0 0 4.451 16.962",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.451,
      height: 16.962
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.648 12.408 C 0.319 10.888 1.02 9.528 1.233 8.072 C 1.558 5.844 0.731 3.443 0.089 1.137 C -0.03 0.705 -0.082 0.12 0.276 0.014 C 0.566 -0.072 0.87 0.252 1.077 0.55 C 1.995 1.87 2.642 3.377 3.189 4.895 C 3.932 6.958 4.515 9.124 4.445 11.217 C 4.37 13.494 3.49 15.589 2.034 16.962 C 1.118 15.467 0.595 13.711 0.563 12.022",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 37.544,
      top: 10.888,
      width: 3.205,
      height: 7.194,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.204923629760742,
      height: 7.193671703338623,
      clipPath: "inset(-0.000px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 3.205,
      height: 7.194,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.205,
    height: 7.194,
    viewBox: "0 0 3.205 7.194",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.205,
      height: 7.194
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.129 5.768 C 0.495 4.447 0.653 3.01 0.574 1.533 C 0.554 1.163 0.521 0.779 0.63 0.459 C 0.739 0.138 1.04 -0.094 1.359 0.037 C 1.649 0.156 1.837 0.509 1.986 0.828 C 2.183 1.246 2.373 1.667 2.558 2.089 C 2.894 2.856 3.22 3.67 3.204 4.456 C 3.181 5.593 2.452 6.399 1.656 6.929 C 1.273 7.184 0.714 7.364 0.331 6.938 C 0.098 6.678 0.041 6.298 0 5.956",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.737,
    height: 6.276,
    viewBox: "0 0 3.737 6.276",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.296,
      top: 7.223,
      width: 3.737,
      height: 6.276
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.166 2.473 C 2.445 1.564 1.601 0.78 0.689 0.173 C 0.527 0.064 0.339 -0.042 0.184 0.016 C -0.089 0.12 -0.011 0.599 0.115 0.945 C 0.758 2.716 1.631 4.423 2.69 5.98 C 2.78 6.112 2.891 6.257 3.026 6.275 C 3.149 6.291 3.241 6.19 3.31 6.088 C 3.978 5.091 3.788 3.497 3.255 2.148",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.521,
      top: 5.967,
      width: 5.255,
      height: 7.097,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.255059719085693,
      height: 7.096636772155762,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.003,
      top: -0.003,
      width: 5.256,
      height: 7.096,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.256,
    height: 7.096,
    viewBox: "0 0 5.256 7.096",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.256,
      height: 7.096
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.756 4.368 C 0.603 3.849 0.451 3.329 0.298 2.81 C 0.068 2.029 -0.159 1.173 0.151 0.391 C 0.196 0.277 0.254 0.164 0.35 0.089 C 0.642 -0.139 1.028 0.114 1.281 0.358 C 2.255 1.299 3.228 2.24 4.202 3.18 C 4.473 3.442 4.749 3.711 4.917 4.053 C 5.117 4.46 5.148 4.936 5.175 5.398 C 5.201 5.838 5.226 6.278 5.253 6.718 C 5.258 6.815 5.262 6.92 5.204 7 C 5.088 7.159 4.849 7.092 4.684 7.005 C 3.346 6.298 2.111 5.404 1.021 4.354",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.842,
      top: 8.574,
      width: 8.011,
      height: 6.739,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.010671615600586,
      height: 6.739480972290039,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.009,
      height: 6.739,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.009,
    height: 6.739,
    viewBox: "0 0 8.009 6.739",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.009,
      height: 6.739
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.12 3.558 C 5.108 3.009 3.571 1.467 1.775 0.434 C 1.297 0.159 0.752 -0.088 0.197 0.031 C -0.192 0.685 0.062 1.498 0.386 2.149 C 1.265 3.912 2.606 5.417 4.242 6.475 C 4.406 6.581 4.577 6.685 4.77 6.722 C 4.956 6.758 5.152 6.731 5.344 6.703 C 6.06 6.601 6.777 6.499 7.494 6.396 C 7.674 6.37 7.882 6.325 7.969 6.159 C 8.022 6.057 8.012 5.938 7.998 5.827 C 7.89 4.953 7.62 4.108 7.207 3.349",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.184,
      top: 9.103,
      width: 10.691,
      height: 10.922,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.69098949432373,
      height: 10.92179012298584,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.001,
      top: 0.002,
      width: 10.69,
      height: 10.922,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.922,
    viewBox: "0 0 10.690 10.922",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.69,
      height: 10.922
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.622 2.927 C 3.96 1.609 2.044 0.612 0 0 C 0.083 1.146 0.666 2.158 1.235 3.126 C 2.071 4.549 2.907 5.972 3.743 7.395 C 4.146 8.082 4.559 8.78 5.148 9.309 C 5.627 9.738 6.204 10.039 6.782 10.321 C 7.391 10.618 8.029 10.904 8.717 10.921 C 9.405 10.938 10.162 10.626 10.501 9.996 C 10.961 9.142 10.501 8.135 9.988 7.366 C 8.731 5.483 7.12 3.855 5.262 2.586",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.364,
      top: 9.042,
      width: 5.164,
      height: 7.83,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.164215564727783,
      height: 7.829702377319336,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.164,
      height: 7.83,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.164,
    height: 7.830,
    viewBox: "0 0 5.164 7.830",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.164,
      height: 7.83
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.777 4.669 C 3.952 4.411 3.225 3.676 2.644 2.881 C 2.063 2.086 1.584 1.205 0.981 0.431 C 0.822 0.226 0.625 0.014 0.409 0.001 C 0.187 -0.012 0.032 0.205 0.005 0.451 C -0.021 0.696 0.052 0.963 0.129 1.217 C 0.757 3.291 1.738 5.295 2.993 7.069 C 3.232 7.408 3.528 7.769 3.877 7.823 C 4.104 7.858 4.307 7.75 4.473 7.609 C 5.234 6.968 5.39 5.565 4.824 4.448",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 4.680,
    height: 5.591,
    viewBox: "0 0 4.680 5.591",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.129,
      top: 14.376,
      width: 4.68,
      height: 5.591
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.559 2.586 C 2.292 1.981 1.274 0.649 0.016 0 C -0.108 0.974 0.497 2.022 1.089 2.91 C 1.554 3.607 2.045 4.305 2.656 4.831 C 3.266 5.357 4.023 5.697 4.68 5.561 C 4.55 4.521 4.181 3.468 3.622 2.541",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.318,
      top: 14.355,
      width: 5.74,
      height: 6.598,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.740381717681885,
      height: 6.598411560058594,
      clipPath: "inset(0.000px 0px 0px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.739,
      height: 6.598,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.739,
    height: 6.598,
    viewBox: "0 0 5.739 6.598",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.739,
      height: 6.598
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.87 0.027 C 0.341 -0.135 -0.05 0.463 0.005 1.072 C 0.059 1.68 0.409 2.258 0.745 2.795 C 1.202 3.528 1.661 4.262 2.118 4.995 C 2.36 5.382 2.618 5.786 2.974 6.015 C 3.226 6.178 3.502 6.236 3.771 6.29 C 4.228 6.383 4.686 6.477 5.142 6.57 C 5.373 6.617 5.663 6.63 5.728 6.393 C 5.754 6.296 5.732 6.181 5.707 6.073 C 5.6 5.595 5.454 5.12 5.272 4.658 C 5.236 4.563 5.196 4.466 5.133 4.386 C 5.049 4.277 4.934 4.21 4.822 4.145 C 3.379 3.292 2.056 2.056 1.009 0.581",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 11.972,
    height: 13.849,
    viewBox: "0 0 11.972 13.849",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.969,
      top: 14.976,
      width: 11.972,
      height: 13.849
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.117 6.332 C 6.697 5.117 8.567 2.746 10.497 0.595 C 10.688 0.383 10.889 0.165 11.148 0.058 C 11.408 -0.05 11.742 -0.013 11.888 0.218 C 11.992 0.382 11.98 0.597 11.956 0.797 C 11.677 3.104 10.327 5.161 9.016 7.111 C 7.313 9.648 5.446 12.325 2.683 13.514 C 1.937 13.834 1.051 14.023 0.38 13.618 C 0.218 13.519 0.068 13.379 0.019 13.191 C -0.057 12.907 0.11 12.609 0.268 12.353 C 1.577 10.231 2.886 8.11 4.195 5.988",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40.891,
      top: 14.963,
      width: 12.604,
      height: 14.071,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.603632926940918,
      height: 14.070955276489258,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 12.605,
      height: 14.071,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.605,
    height: 14.071,
    viewBox: "0 0 12.605 14.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.605,
      height: 14.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.299 0.368 C 11.416 -0.091 12.131 -0.111 12.402 0.254 C 12.673 0.62 12.621 1.14 12.541 1.605 C 12.094 4.196 11.083 6.727 9.503 8.86 C 7.924 10.993 5.769 12.714 3.328 13.63 C 2.368 13.991 1.316 14.228 0.36 13.948 C 0.254 13.917 0.145 13.877 0.075 13.792 C -0.161 13.506 0.207 13.092 0.527 12.878 C 4.298 10.349 7.585 7.043 10.115 3.232 C 10.702 2.348 11.269 1.367 11.249 0.325",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.977,
      top: 13.343,
      width: 12.851,
      height: 11.96,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.850794792175293,
      height: 11.959824562072754,
      clipPath: "inset(0px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.85,
      height: 11.96,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.850,
    height: 11.960,
    viewBox: "0 0 12.850 11.960",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.85,
      height: 11.96
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.841 9.837 C 3.734 7.639 1.201 4.083 0 0.237 C 0.413 -0.184 1.131 0.037 1.742 0.275 C 3.86 1.097 5.979 1.919 8.096 2.742 C 8.742 2.993 9.413 3.261 9.951 3.804 C 10.423 4.282 10.742 4.923 11.027 5.554 C 11.693 7.026 12.248 8.545 12.685 10.082 C 12.877 10.761 12.992 11.627 12.505 11.891 C 12.204 12.055 11.802 11.897 11.443 11.739 C 9.749 10.998 8.055 10.258 6.362 9.517",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.684,
      top: 24.384,
      width: 16.278,
      height: 5.794,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.27832794189453,
      height: 5.793588161468506,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.001,
      width: 16.276,
      height: 5.793,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.276,
    height: 5.793,
    viewBox: "0 0 16.276 5.793",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.276,
      height: 5.793
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.849 0.491 C 0.036 0.816 -0.263 2.11 0.262 3.036 C 0.878 4.125 2.138 4.353 3.201 4.427 C 5.951 4.62 8.704 4.665 11.46 5.262 C 12.937 5.581 14.484 6.058 15.842 5.611 C 15.997 5.559 16.157 5.487 16.233 5.328 C 16.358 5.069 16.189 4.819 16.029 4.538 C 14.677 2.166 12.373 0.368 10.049 0.061 C 8.794 -0.106 7.573 0.108 6.351 0.238 C 4.535 0.431 2.721 0.513 0.859 0.336",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.101,
      top: 18.281,
      width: 13.303,
      height: 12.42,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.302558898925781,
      height: 12.41972541809082,
      clipPath: "inset(0.000px 0px 0px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.303,
      height: 12.42,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.303,
    height: 12.420,
    viewBox: "0 0 13.303 12.420",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.303,
      height: 12.42
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.945 4.759 C 0.975 4.367 -0.105 2.855 0.008 1.57 C 0.065 0.927 0.402 0.513 0.791 0.282 C 2.133 -0.513 3.985 0.516 5.645 1.58 C 8.152 3.186 10.84 5.144 12.541 8.494 C 12.89 9.183 13.195 9.943 13.281 10.692 C 13.368 11.441 13.192 12.169 12.754 12.364 C 12.385 12.528 11.915 12.303 11.478 12.067 C 8.127 10.256 4.821 7.617 1.771 4.319",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 13.470,
    height: 11.337,
    viewBox: "0 0 13.470 11.337",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.432,
      top: 18.833,
      width: 13.47,
      height: 11.337
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.712 2.88 C 7.431 0.987 4.646 -0.059 2.042 0.003 C 1.529 0.015 1.007 0.073 0.596 0.346 C 0.185 0.618 -0.091 1.15 0.028 1.723 C 0.216 2.622 1.18 3.124 1.989 3.427 C 4.566 4.394 7.342 5.313 9.286 7.569 C 10.206 8.636 10.884 9.952 11.921 10.876 C 12.24 11.16 12.643 11.414 12.991 11.316 C 13.305 11.227 13.471 10.863 13.47 10.492 C 13.47 10.121 13.335 9.743 13.197 9.377 C 12.337 7.098 11.241 4.887 9.941 2.806",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.372,
      top: 33.152,
      width: 9.094,
      height: 4.748,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.094257354736328,
      height: 4.748214244842529,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.095,
      height: 4.748,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.095,
    height: 4.748,
    viewBox: "0 0 9.095 4.748",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.095,
      height: 4.748
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.264 4.671 C 5.883 4.608 4.482 4.52 3.184 4.029 C 1.886 3.538 0.683 2.59 0.124 1.206 C 0.023 0.954 -0.056 0.657 0.051 0.401 C 0.159 0.147 0.425 0.011 0.676 0.001 C 0.926 -0.009 1.167 0.083 1.402 0.17 C 3.332 0.882 5.353 1.312 7.399 1.443 C 7.68 1.461 7.987 1.485 8.189 1.696 C 8.299 1.811 8.363 1.968 8.425 2.121 C 8.635 2.638 8.844 3.154 9.053 3.671 C 9.079 3.735 9.105 3.805 9.091 3.875 C 9.073 3.958 9.002 4.013 8.935 4.059 C 8.327 4.473 7.627 4.712 6.923 4.748",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 13.381,
    height: 3.729,
    viewBox: "0 0 13.381 3.729",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.076,
      top: 31.836,
      width: 13.381,
      height: 3.729
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.591 0.136 C 8.185 1.447 5.475 2.025 2.843 1.789 C 1.896 1.704 0.95 1.516 0 1.626 C 0.703 2.503 1.775 2.89 2.814 3.161 C 6.219 4.053 10.004 4.03 13.129 2.113 C 13.225 2.054 13.328 1.984 13.366 1.871 C 13.434 1.667 13.26 1.478 13.103 1.358 C 12.356 0.79 11.538 0.333 10.677 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.771,
    height: 2.887,
    viewBox: "0 0 14.771 2.887",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 30.173,
      width: 14.771,
      height: 2.887
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.567 2.444 C -0.979 2.62 0.95 0.234 2.613 0.517 C 5.278 0.442 7.561 0.148 10.226 0.074 C 11.593 -0.08 14.025 -0.115 14.7 1.24 C 15.556 2.244 8.4 2.62 7.749 2.823 C 5.423 2.906 2.819 3.005 0.566 2.444",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.063,
      top: 31.633,
      width: 16.373,
      height: 3.163,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.373266220092773,
      height: 3.1630301475524902,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 16.373,
      height: 3.163,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.373,
    height: 3.163,
    viewBox: "0 0 16.373 3.163",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.373,
      height: 3.163
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.946 2.98 C 3.336 2.975 2.138 2.469 0.281 1.27 C 0.053 1.123 -0.084 0.753 0.057 0.498 C 0.123 0.379 0.242 0.31 0.361 0.266 C 0.885 0.07 1.443 0.264 1.97 0.409 C 4.359 1.07 6.9 0.718 9.363 0.3 C 10.379 0.127 11.404 -0.057 12.422 0.017 C 13.44 0.091 15.655 0.026 16.373 0.808 C 16.272 1.101 14.804 1.686 14.545 1.811 C 11.345 3.35 9.397 3.304 4.946 2.981",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.814,
      top: 37.253,
      width: 12.968,
      height: 4.787,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.967826843261719,
      height: 4.7865400314331055,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 12.968,
      height: 4.64,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.968,
    height: 4.640,
    viewBox: "0 0 12.968 4.640",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.968,
      height: 4.64
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.851 1.859 C 9.936 2.42 8.34 3.513 6.497 4.198 C 5.016 4.749 1.882 4.878 0 4.037 C 0.396 3.345 1.341 3.373 2.181 3.332 C 5.537 3.165 8.065 1.398 10.902 0.231 C 11.325 0.058 11.785 -0.103 12.351 0.083 C 12.516 0.138 12.707 0.239 12.831 0.422 C 12.947 0.593 12.97 0.782 12.968 0.941 C 12.957 1.671 12.532 2.156 11.898 2.161",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 11.601,
    height: 5.819,
    viewBox: "0 0 11.601 5.819",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.688,
      top: 35.357,
      width: 11.601,
      height: 5.819
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.809 5.682 C 0.676 5.906 0.271 5.812 0 5.495 C 0.142 5.008 0.525 4.753 0.898 4.513 C 3.135 3.074 5.371 1.636 7.608 0.196 C 7.779 0.086 7.96 -0.026 8.203 0.005 C 8.413 0.032 8.646 0.164 8.871 0.304 C 9.832 0.904 10.774 1.723 11.601 2.678 C 8.401 4.343 4.861 5.395 0.897 5.819",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.602,
    height: 3.557,
    viewBox: "0 0 14.602 3.557",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.261,
      top: 34.012,
      width: 14.602,
      height: 3.557
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.146 0.193 C 7.634 -0.172 6.069 0.19 4.541 0.438 C 3.013 0.686 1.356 0.796 0 0 C 0.497 1.19 1.402 2.189 2.509 2.769 C 3.826 3.46 5.345 3.549 6.813 3.556 C 7.818 3.561 8.823 3.534 9.828 3.507 C 11.53 3.461 13.411 3.339 14.602 2.073 C 12.994 1.134 11.249 0.457 9.449 0.073",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.492,
      top: 28.792,
      width: 13.311,
      height: 4.595,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.310744285583496,
      height: 4.59491491317749,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.001,
      top: 0.001,
      width: 13.311,
      height: 4.595,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.311,
    height: 4.595,
    viewBox: "0 0 13.311 4.595",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.311,
      height: 4.595
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.529 2.015 C 9.699 2.086 8.869 2.158 8.039 2.23 C 7.478 2.279 6.911 2.327 6.33 2.232 C 4.323 1.906 2.368 -0.074 0.41 0.002 C 0.269 0.008 0.116 0.033 0.044 0.16 C -0.013 0.26 -0.005 0.401 0.014 0.534 C 0.159 1.532 0.855 2.457 1.652 3.019 C 2.447 3.581 3.334 3.836 4.199 4.031 C 5.65 4.358 7.1 4.544 8.529 4.587 C 9.512 4.617 10.5 4.577 11.374 4.229 C 12.249 3.882 13.009 3.195 13.311 2.188 C 12.329 1.746 11.28 2.486 10.368 1.815",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 17.063,
    height: 6.544,
    viewBox: "0 0 17.063 6.544",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.043,
      top: 26.292,
      width: 17.063,
      height: 6.544
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.164 0.143 C 3.963 -0.036 2.76 -0.047 1.587 0.111 C 0.879 0.206 0.039 0.546 0.001 1.429 C -0.038 2.342 0.807 3.001 1.52 3.373 C 5.835 5.624 10.459 6.71 14.942 6.523 C 15.804 6.487 16.83 6.242 17.031 5.229 C 17.087 4.943 17.065 4.63 17.003 4.33 C 16.852 3.595 16.461 2.908 15.941 2.466 C 15.488 2.081 14.961 1.886 14.444 1.714 C 11.466 0.723 8.415 0.254 5.422 0.329",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.344,
    height: 6.271,
    viewBox: "0 0 7.344 6.271",
    fill: "none",
    style: {
      position: "absolute",
      left: 46.725,
      top: 25.093,
      width: 7.344,
      height: 6.271
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.889 1.188 C 7.04 1.057 7.193 0.928 7.344 0.797 C 7.202 0.435 6.825 0.282 6.521 0.212 C 4.404 -0.272 2.365 0.079 0.794 1.196 C 0.541 1.376 0.294 1.583 0.155 1.898 C 0.009 2.228 -0.007 2.649 0.002 3.067 C 0.018 3.841 0.115 4.64 0.288 5.441 C 0.324 5.607 0.365 5.78 0.461 5.927 C 0.683 6.267 1.064 6.303 1.355 6.253 C 2.791 6.003 3.779 4.807 4.701 3.651 C 5.358 2.828 6.014 2.006 6.671 1.183",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 47.486,
      top: 25.625,
      width: 6.715,
      height: 5.798,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.715117931365967,
      height: 5.797665119171143,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.714,
      height: 5.798,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.714,
    height: 5.798,
    viewBox: "0 0 6.714 5.798",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.714,
      height: 5.798
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.234 5.606 C 0.619 5.548 0.891 5.24 1.12 4.914 C 1.896 3.811 2.373 2.398 3.186 1.338 C 3.999 0.277 5.307 -0.406 6.714 0.269 C 6.623 0.932 6.29 1.434 5.943 1.89 C 4.944 3.199 3.759 4.293 2.428 5.137 C 1.724 5.584 0.921 5.967 0 5.72",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 10.878,
    height: 4.603,
    viewBox: "0 0 10.878 4.603",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.725,
      top: 36.907,
      width: 10.878,
      height: 4.603
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.837 0 C 10.412 0.79 9.754 1.357 9.069 1.849 C 6.935 3.382 4.426 4.318 1.755 4.577 C 1.269 4.624 0.74 4.638 0.271 4.325 C 0.18 4.264 0.088 4.186 0.039 4.08 C -0.098 3.786 0.153 3.542 0.376 3.417 C 1.887 2.566 3.4 1.716 4.911 0.866 C 5.239 0.682 5.568 0.497 5.931 0.391 C 6.342 0.271 6.785 0.254 7.225 0.239 C 8.443 0.196 9.661 0.152 10.878 0.109",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.081,
    height: 7.698,
    viewBox: "0 0 9.081 7.698",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.328,
      top: 34.703,
      width: 9.081,
      height: 7.698
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.017 0 C 8.811 0.934 8.339 1.711 7.827 2.42 C 6.229 4.631 4.15 6.35 1.768 7.429 C 1.335 7.626 0.855 7.802 0.354 7.626 C 0.256 7.592 0.156 7.54 0.085 7.447 C -0.109 7.19 0.065 6.865 0.24 6.669 C 1.427 5.343 2.613 4.016 3.799 2.689 C 4.056 2.402 4.315 2.114 4.622 1.894 C 4.97 1.646 5.372 1.495 5.77 1.345 C 6.873 0.929 7.977 0.512 9.081 0.095",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.330,
    height: 11.131,
    viewBox: "0 0 5.330 11.131",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.887,
      top: 36.746,
      width: 5.33,
      height: 11.131
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.418 0.065 C 3.714 0.109 2.952 0.386 2.357 1.29 C 2.063 1.738 1.829 2.31 1.608 2.884 C 1.164 4.037 0.753 5.229 0.377 6.452 C 0.225 6.947 0.076 7.461 0.021 7.998 C -0.035 8.535 0.018 9.107 0.224 9.41 C 0.514 9.836 1.044 9.677 1.218 10.292 C 1.296 10.567 1.293 10.975 1.447 11.099 C 1.562 11.191 1.709 11.072 1.836 10.949 C 2.981 9.837 4.01 8.167 4.773 6.181 C 4.943 5.74 5.101 5.278 5.197 4.783 C 5.345 4.019 5.335 3.231 5.324 2.468 C 5.315 1.864 5.304 1.241 5.163 0.736 C 5.022 0.231 4.718 -0.127 4.391 0.042",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.763,
    height: 5.090,
    viewBox: "0 0 8.763 5.090",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.139,
      top: 33.319,
      width: 8.763,
      height: 5.09
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.953 0 C 4.541 1.345 6.199 2.444 7.854 3.25 C 8.069 3.355 8.295 3.463 8.488 3.673 C 8.681 3.883 8.823 4.23 8.738 4.42 C 8.699 4.507 8.62 4.546 8.539 4.571 C 7.637 4.851 6.186 3.753 5.544 4.471 C 5.389 4.643 5.303 4.909 5.113 5.025 C 4.748 5.247 4.163 4.857 3.678 4.458 C 2.382 3.394 1.139 2.132 0 0.726 C 1.138 0.494 2.277 0.263 3.416 0.032",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 33.813,
      top: 33.446,
      width: 10.74,
      height: 7.526,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.740094184875488,
      height: 7.525547981262207,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.74,
      height: 7.527,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.740,
    height: 7.527,
    viewBox: "0 0 10.740 7.527",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.74,
      height: 7.527
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.193 0.171 C 1.562 1.81 2.932 3.449 4.3 5.089 C 4.843 5.739 5.4 6.403 6.019 6.856 C 7.48 7.924 8.905 7.562 9.942 6.836 C 10.309 6.578 10.667 6.25 10.733 5.671 C 10.798 5.092 10.442 4.205 9.915 3.928 C 9.649 4.128 9.218 3.947 8.829 3.792 C 7.805 3.383 6.795 3.16 5.843 3.132 C 5.496 3.122 5.144 3.135 4.769 2.953 C 4.004 2.582 3.393 1.545 2.68 0.862 C 1.765 -0.014 0.642 -0.254 0 0.289",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 13.694,
    height: 5.079,
    viewBox: "0 0 13.694 5.079",
    fill: "none",
    style: {
      position: "absolute",
      left: 36.058,
      top: 28.192,
      width: 13.694,
      height: 5.079
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.51 0.404 C 3.539 -0.095 4.703 0.06 5.754 0.385 C 6.806 0.709 7.822 1.194 8.912 1.335 C 10.283 1.513 11.676 1.137 13.046 0.815 C 13.265 0.763 13.54 0.738 13.653 0.947 C 13.776 1.174 13.597 1.465 13.43 1.668 C 12.396 2.927 11.266 4.252 9.802 4.655 C 9.217 4.816 8.614 4.818 8.017 4.869 C 7.236 4.937 6.456 5.093 5.677 5.078 C 3.576 5.037 1.712 3.768 0 2.476 C 0.908 1.626 1.834 0.801 2.776 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.113,
      top: 29.289,
      width: 13.474,
      height: 4.026,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.473611831665039,
      height: 4.0257487297058105,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.474,
      height: 4.026,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.474,
    height: 4.026,
    viewBox: "0 0 13.474 4.026",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.474,
      height: 4.026
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.58 1.077 C 1.184 0.925 1.768 1.259 2.345 1.467 C 3.85 2.011 5.52 1.704 7.095 1.953 C 8.013 2.098 8.964 2.427 9.851 2.058 C 10.327 1.859 10.727 1.477 11.153 1.158 C 11.729 0.727 12.362 0.407 12.99 0.089 C 13.151 0.008 13.368 -0.062 13.474 0.088 C 12.732 0.988 11.96 1.856 11.159 2.69 C 10.845 3.017 10.52 3.344 10.133 3.544 C 9.762 3.737 9.354 3.803 8.953 3.857 C 7.425 4.06 5.875 4.115 4.377 3.822 C 2.88 3.528 1.431 2.873 0.296 1.772 C 0.163 1.643 0.028 1.493 0.003 1.296 C -0.023 1.099 0.128 0.859 0.302 0.895",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 8.768,
    height: 5.232,
    viewBox: "0 0 8.768 5.232",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.735,
      top: 25.155,
      width: 8.768,
      height: 5.232
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.056 2.632 C 1.132 2.767 2.383 3.929 3.558 4.571 C 5.095 5.409 6.482 5.335 7.678 4.981 C 8.215 4.822 8.768 4.537 8.768 3.73 C 8.768 3.556 8.734 3.346 8.624 3.156 C 8.378 2.737 7.998 2.741 7.732 2.798 C 6.362 3.092 4.534 2.52 2.905 0.851 C 2.517 0.452 2.067 -0.044 1.729 0.003 C 1.625 0.018 1.546 0.085 1.472 0.155 C 0.882 0.702 0.388 1.391 0 2.203",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.577,
      top: 27.688,
      width: 15.633,
      height: 8.963,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.633413314819336,
      height: 8.963141441345215,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.633,
      height: 8.963,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.633,
    height: 8.963,
    viewBox: "0 0 15.633 8.963",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.633,
      height: 8.963
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.555 0.579 C 2.767 2.919 5.422 4.675 8.159 5.605 C 9.115 5.931 10.077 6.156 11.037 6.382 C 12.331 6.685 13.625 6.988 14.918 7.292 C 15.202 7.358 15.56 7.502 15.633 7.827 C 14.36 9.037 12.427 9.131 10.592 8.794 C 7.4 8.207 4.178 6.419 1.554 3.777 C 1.126 3.345 0.703 2.879 0.422 2.32 C 0.052 1.587 -0.042 0.757 0.016 0 C 0.216 0.169 0.416 0.338 0.617 0.507",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 15.561,
    height: 10.680,
    viewBox: "0 0 15.561 10.680",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.558,
      top: 25.017,
      width: 15.561,
      height: 10.68
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.653 1.655 C 4.578 3.598 5.906 5.285 7.429 6.452 C 9.987 8.413 12.921 8.837 15.561 10.542 C 14.859 10.809 14.049 10.636 13.269 10.462 C 12.155 10.212 11.04 9.964 9.927 9.71 C 8.898 9.476 7.862 9.236 6.853 8.76 C 4.415 7.61 2.314 5.165 0.618 2.493 C 0.209 1.85 -0.203 0.953 0.11 0.383 C 0.285 0.066 0.633 -0.012 0.962 0.002 C 1.948 0.044 2.95 0.736 3.783 1.618",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.443,
      top: 36.046,
      width: 10.652,
      height: 10.102,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.374,
    height: 9.418,
    viewBox: "0 0 10.374 9.418",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.374,
      height: 9.418
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.067 0.128 C 5.854 1.774 5.136 3.32 4.18 4.599 C 3.223 5.878 2.035 6.906 0.788 7.789 C 0.448 8.03 0.065 8.321 0 8.77 C 0.319 9.247 0.88 9.448 1.413 9.414 C 1.947 9.38 2.459 9.139 2.945 8.865 C 5.127 7.634 6.955 5.682 8.596 3.607 C 9.238 2.794 9.864 1.946 10.287 0.967 C 10.346 0.829 10.402 0.671 10.358 0.53 C 10.293 0.325 10.062 0.281 9.871 0.267 C 8.554 0.179 7.236 0.09 5.92 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.237,
      top: 0.647,
      width: 10.414,
      height: 9.456,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.414363861083984,
      height: 9.455657958984375,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.415,
      height: 9.455,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.415,
    height: 9.455,
    viewBox: "0 0 10.415 9.455",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.415,
      height: 9.455
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.429 7.739 C -0.003 7.834 -0.127 8.57 0.141 8.955 C 0.41 9.341 0.885 9.439 1.321 9.453 C 3.049 9.51 4.753 8.653 6.172 7.452 C 7.956 5.941 9.381 3.864 10.233 1.526 C 10.341 1.23 10.442 0.914 10.408 0.602 C 10.373 0.29 10.157 -0.011 9.881 0 C 9.662 0.009 9.48 0.201 9.323 0.383 C 7.384 2.628 5.635 5.376 3.044 6.378 C 2.067 6.755 0.907 6.944 0.33 7.935",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30.616,
      top: 33.575,
      width: 7.241,
      height: 14.321,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.512,
    height: 14.293,
    viewBox: "0 0 6.512 14.293",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.512,
      height: 14.293
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.133 4.136 C 1.39 5.121 2.458 6.569 3.263 8.131 C 4.068 9.694 4.625 11.371 5.054 13.04 C 5.171 13.496 5.318 14.018 5.659 14.293 C 6.106 14.196 6.386 13.726 6.474 13.173 C 6.562 12.62 6.483 11.991 6.371 11.373 C 5.869 8.599 4.719 5.844 3.432 3.219 C 2.927 2.192 2.392 1.163 1.709 0.279 C 1.612 0.155 1.499 0.024 1.378 0.003 C 1.201 -0.028 1.117 0.183 1.066 0.37 C 0.71 1.654 0.355 2.939 0 4.223",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.413,
      top: 0.01,
      width: 5.828,
      height: 14.311,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.8279523849487305,
      height: 14.310691833496094,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.829,
      height: 14.31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.829,
    height: 14.310,
    viewBox: "0 0 5.829 14.310",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.829,
      height: 14.31
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.088 13.439 C 4.07 13.919 4.626 14.388 4.988 14.3 C 5.351 14.211 5.532 13.779 5.637 13.346 C 6.056 11.632 5.746 9.515 5.102 7.523 C 4.293 5.019 2.956 2.612 1.292 0.658 C 1.08 0.41 0.853 0.161 0.598 0.049 C 0.344 -0.062 0.059 0.014 0.008 0.297 C -0.032 0.522 0.08 0.795 0.191 1.039 C 1.549 4.045 3.344 7.094 3.577 10.17 C 3.664 11.331 3.562 12.588 4.222 13.633",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.952,
      top: 34.694,
      width: 11.087,
      height: 5.571,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.087106704711914,
      height: 5.570977210998535,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: 0,
      width: 11.086,
      height: 5.57,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.086,
    height: 5.570,
    viewBox: "0 0 11.086 5.570",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.086,
      height: 5.57
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.088 2.17 C 9.051 3.029 7.999 3.649 6.962 4.508 C 6.528 4.868 6.086 5.232 5.556 5.409 C 5.189 5.532 4.788 5.563 4.387 5.569 C 3.627 5.581 2.837 5.508 2.074 5.176 C 1.31 4.844 0.57 4.223 0.154 3.39 C 0.075 3.233 0.008 3.064 0.001 2.898 C -0.013 2.57 0.206 2.343 0.432 2.193 C 1.524 1.466 3.003 1.671 4.378 1.76 C 6.374 1.89 7.563 1.097 9.433 0.66 C 9.49 0.646 10.963 -0.024 11.025 0.001 C 11.173 0.061 11.014 0.922 10.963 1.07 C 10.764 1.636 10.342 1.852 10.089 2.17",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 9.307,
    height: 3.893,
    viewBox: "0 0 9.307 3.893",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.658,
      top: 33.731,
      width: 9.307,
      height: 3.893
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.157 0.502 C 9.433 2.237 7.834 2.842 6.625 2.986 C 5.122 2.92 0.979 4.891 0.026 3.218 C -0.321 0.736 2.92 1.566 4.333 1.266 C 6.133 1.018 7.327 -1.332 9.307 1.077",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25.256,
      top: 12.631,
      width: 3.244,
      height: 2.285,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.2442073822021484,
      height: 2.284818172454834,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.244,
      height: 2.284,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.244,
    height: 2.284,
    viewBox: "0 0 3.244 2.284",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.244,
      height: 2.284
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.489 2.235 C 1.377 1.966 0.426 1.132 0 0.049 C 0.832 -0.122 1.663 0.185 2.442 0.487 C 2.64 0.564 2.843 0.644 2.996 0.792 C 3.235 1.024 3.311 1.416 3.18 1.736 C 3.048 2.057 2.716 2.284 2.382 2.284",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.227,
      top: 13.819,
      width: 2.098,
      height: 3.76,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.0984227657318115,
      height: 3.759920835494995,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.001,
      width: 2.099,
      height: 3.76,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.099,
    height: 3.760,
    viewBox: "0 0 2.099 3.760",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.099,
      height: 3.76
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.17 3.678 C 0.787 2.768 0.433 1.847 0.111 0.918 C 0.001 0.599 -0.083 0.181 0.142 0.039 C 0.343 -0.087 0.627 0.114 0.841 0.309 C 1.432 0.847 2.044 1.549 2.095 2.34 C 2.114 2.625 2.055 2.894 1.971 3.141 C 1.846 3.509 1.562 3.88 1.197 3.723",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.779,
      top: 12.919,
      width: 1.874,
      height: 3.871,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.8741761445999146,
      height: 3.8708183765411377,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 1.873,
      height: 3.871,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.873,
    height: 3.871,
    viewBox: "0 0 1.873 3.871",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.873,
      height: 3.871
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.608 3.742 C 0.405 3.279 0.237 2.801 0.109 2.318 C 0.054 2.11 0.005 1.897 0.001 1.69 C -0.014 1.122 0.289 0.684 0.586 0.295 C 0.726 0.111 0.93 -0.084 1.159 0.038 C 1.328 0.128 1.42 0.355 1.465 0.557 C 1.609 1.201 1.48 1.841 1.655 2.481 C 1.716 2.705 1.813 2.924 1.855 3.151 C 1.898 3.377 1.871 3.626 1.723 3.738 C 1.634 3.806 1.515 3.815 1.4 3.822 C 1.139 3.838 0.878 3.855 0.617 3.871",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25.756,
      top: 14.002,
      width: 2.23,
      height: 5.519,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.2301881313323975,
      height: 5.518790245056152,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.001,
      width: 2.23,
      height: 5.518,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.230,
    height: 5.518,
    viewBox: "0 0 2.230 5.518",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.23,
      height: 5.518
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.196 3.141 C 1.648 2.458 1.081 1.737 0.839 0.894 C 0.775 0.673 0.733 0.439 0.605 0.245 C 0.477 0.051 0.228 -0.077 0.093 0.052 C 0.006 0.136 -0.001 0.293 0 0.436 C 0.008 1.636 0.196 2.873 0.553 4.079 C 0.667 4.463 0.807 4.861 1.066 5.161 C 1.327 5.462 1.739 5.628 1.996 5.437 C 2.284 5.223 2.249 4.711 2.189 4.275 C 2.125 3.822 2.063 3.368 2 2.913",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 1.778,
    height: 3.370,
    viewBox: "0 0 1.778 3.370",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.628,
      top: 13.992,
      width: 1.778,
      height: 3.37
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.454 1.069 C 1.382 0.744 1.218 0.426 0.996 0.179 C 0.922 0.096 0.834 0.017 0.739 0.002 C 0.626 -0.015 0.535 0.063 0.463 0.145 C -0.102 0.79 -0.157 1.972 0.336 2.913 C 0.374 2.985 0.416 3.058 0.472 3.115 C 0.541 3.185 0.627 3.226 0.711 3.26 C 1.041 3.394 1.426 3.441 1.636 3.193 C 1.859 2.928 1.785 2.448 1.645 2.047 C 1.506 1.645 1.307 1.237 1.314 0.836",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.694,
      top: 13.567,
      width: 1.323,
      height: 2.382,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.3233813047409058,
      height: 2.3818538188934326,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 1.323,
      height: 2.382,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.323,
    height: 2.382,
    viewBox: "0 0 1.323 2.382",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.323,
      height: 2.382
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.185 2.372 C 0.698 2.462 0.095 1.928 0.012 1.333 C -0.04 0.962 0.085 0.627 0.249 0.351 C 0.364 0.158 0.53 -0.031 0.754 0.004 C 0.946 0.034 1.123 0.228 1.212 0.441 C 1.302 0.654 1.318 0.882 1.322 1.1 C 1.329 1.51 1.298 1.913 1.228 2.298",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.928,
      top: 15.597,
      width: 2.054,
      height: 3.04,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.0542285442352295,
      height: 3.0399010181427,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.054,
      height: 3.041,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.054,
    height: 3.041,
    viewBox: "0 0 2.054 3.041",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.054,
      height: 3.041
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.968 2.436 C 1.577 1.828 1.186 1.221 0.796 0.613 C 0.663 0.407 0.523 0.194 0.335 0.061 C 0.286 0.026 0.231 -0.003 0.18 0 C 0.064 0.008 0.026 0.159 0.015 0.291 C -0.05 1.037 0.096 1.85 0.426 2.591 C 0.469 2.688 0.518 2.787 0.594 2.854 C 0.675 2.925 0.774 2.947 0.869 2.968 C 1.131 3.023 1.401 3.078 1.64 3.009 C 1.879 2.94 2.077 2.712 2.051 2.412",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.736,
      top: 15.031,
      width: 2.225,
      height: 6.121,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.225277900695801,
      height: 6.120573043823242,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.002,
      width: 2.226,
      height: 6.12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.226,
    height: 6.120,
    viewBox: "0 0 2.226 6.120",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.226,
      height: 6.12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.226 3.804 C 1.981 3.438 0.958 1.087 0.875 0.663 C 0.826 0.415 0.76 0.097 0.546 0.016 C 0.345 -0.061 0.202 0.153 0.135 0.355 C -0.004 0.776 -0.027 1.869 0.028 2.355 C 0.136 3.309 0.117 3.579 0.279 3.728 C 0.467 3.901 1.339 6.213 1.524 6.117 C 1.71 6.022 1.933 3.709 2.061 3.532",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.501,
      top: 15.102,
      width: 2.163,
      height: 4.683,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.1630780696868896,
      height: 4.682981014251709,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.163,
      height: 4.683,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.163,
    height: 4.683,
    viewBox: "0 0 2.163 4.683",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.163,
      height: 4.683
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.192 2.911 C 0.007 1.934 -0.164 0.847 0.285 0.132 C 0.315 0.084 0.349 0.037 0.398 0.014 C 0.553 -0.057 0.745 0.147 0.841 0.341 C 1.022 0.7 1.089 1.103 1.271 1.462 C 1.553 2.017 2.107 2.472 2.159 3.067 C 2.174 3.238 2.144 3.398 2.113 3.555 C 2.077 3.743 2.04 3.931 2.004 4.118 C 1.955 4.378 1.861 4.679 1.622 4.683 C 1.427 4.686 1.244 4.482 1.102 4.291 C 0.735 3.8 0.409 3.273 0.129 2.721",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 2.612,
    height: 2.549,
    viewBox: "0 0 2.612 2.549",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.839,
      top: 11.706,
      width: 2.612,
      height: 2.549
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.161 0 C 2.326 0.096 2.505 0.218 2.579 0.411 C 2.652 0.601 2.594 0.799 2.498 0.937 C 2.401 1.074 2.269 1.172 2.169 1.305 C 1.981 1.556 1.916 1.915 1.738 2.176 C 1.52 2.498 1.112 2.642 0.723 2.485 C 0.333 2.329 -0.002 1.853 0 1.408 C 0 1.21 0.062 1.032 0.143 0.873 C 0.538 0.104 1.449 -0.206 2.292 0.143",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.566,
      top: 10.858,
      width: 2.864,
      height: 2.882,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.864461660385132,
      height: 2.8817083835601807,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.865,
      height: 2.881,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.865,
    height: 2.881,
    viewBox: "0 0 2.865 2.881",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.865,
      height: 2.881
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.871 2.753 C 0.764 2.814 0.653 2.875 0.526 2.881 C 0.398 2.886 0.249 2.822 0.169 2.688 C 0.117 2.602 0.1 2.499 0.086 2.402 C 0.022 1.963 -0.032 1.516 0.022 1.101 C 0.075 0.686 0.248 0.299 0.558 0.118 C 0.849 -0.052 1.229 -0.023 1.582 0.107 C 1.936 0.237 2.271 0.461 2.603 0.683 C 2.749 0.781 2.926 0.979 2.844 1.111 C 2.812 1.162 2.752 1.176 2.696 1.185 C 2.351 1.247 1.996 1.275 1.636 1.269 C 1.521 1.268 1.403 1.263 1.3 1.303 C 1.067 1.396 0.973 1.695 0.924 1.98 C 0.886 2.199 0.863 2.426 0.856 2.656",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.743,
      top: 14.851,
      width: 3.109,
      height: 4.04,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.109168767929077,
      height: 4.039611339569092,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 3.11,
      height: 4.04,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.110,
    height: 4.040,
    viewBox: "0 0 3.110 4.040",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.11,
      height: 4.04
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.219 3.937 C 0.507 3.741 -0.091 2.788 0.011 2.015 C 0.054 1.693 0.196 1.421 0.358 1.176 C 0.579 0.843 0.84 0.549 1.1 0.257 C 1.223 0.119 1.368 -0.028 1.559 0.005 C 1.846 0.053 2.023 0.452 2.111 0.781 C 2.316 1.549 2.445 2.369 2.9 3.028 C 2.982 3.148 3.079 3.27 3.103 3.411 C 3.155 3.707 2.875 3.852 2.64 3.916 C 2.122 4.059 1.493 4.169 1.024 3.707",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.96,
      top: 16.158,
      width: 3.097,
      height: 5.088,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.0968923568725586,
      height: 5.0882463455200195,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.004,
      top: -0.002,
      width: 3.098,
      height: 5.088,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.098,
    height: 5.088,
    viewBox: "0 0 3.098 5.088",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.098,
      height: 5.088
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.611 3.61 C 0.398 3.514 0.261 3.251 0.176 3.006 C -0.198 1.931 0.04 0.739 0.744 0.165 C 0.853 0.076 0.976 -0.001 1.121 0 C 1.357 0.002 1.597 0.213 1.743 0.46 C 1.89 0.707 1.965 0.988 2.048 1.261 C 2.238 1.892 2.485 2.513 2.78 3.11 C 2.94 3.435 3.124 3.785 3.095 4.119 C 3.078 4.325 2.98 4.493 2.878 4.647 C 2.747 4.844 2.591 5.04 2.364 5.08 C 2.039 5.138 1.688 4.86 1.403 4.579 C 1.083 4.262 0.784 3.917 0.509 3.549",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.11,
      top: 18.629,
      width: 3.386,
      height: 5.245,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.385793685913086,
      height: 5.244808197021484,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 3.386,
      height: 5.243,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.386,
    height: 5.243,
    viewBox: "0 0 3.386 5.243",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.386,
      height: 5.243
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.101 5.201 C 1.501 5.096 0.877 4.641 0.57 3.99 C 0.466 3.769 0.4 3.535 0.335 3.303 C 0.123 2.546 -0.092 1.748 0.041 1.042 C 0.114 0.656 0.292 0.317 0.549 0.082 C 0.605 0.03 0.675 -0.019 0.756 0.008 C 0.812 0.026 0.86 0.079 0.901 0.131 C 1.315 0.639 1.563 1.284 1.95 1.818 C 2.275 2.267 2.699 2.636 2.96 3.131 C 3.124 3.442 3.213 3.783 3.3 4.119 C 3.375 4.406 3.445 4.735 3.31 4.943 C 3.251 5.035 3.16 5.089 3.065 5.131 C 2.733 5.278 2.335 5.281 1.954 5.14",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.932,
    height: 5.815,
    viewBox: "0 0 3.932 5.815",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.8,
      top: 10.067,
      width: 3.932,
      height: 5.815
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.706 0.047 C 0.525 -0.056 0.326 0.021 0.218 0.172 C 0.109 0.323 0.07 0.532 0.037 0.735 C 0.008 0.908 -0.019 1.086 0.018 1.271 C 0.052 1.447 0.141 1.613 0.231 1.773 C 1.16 3.433 2.407 4.981 3.932 5.815 C 3.894 5.301 3.629 4.8 3.372 4.327 C 2.566 2.843 1.753 1.35 0.734 0.026",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.01,
      top: 13.246,
      width: 1.939,
      height: 2.667,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.938831090927124,
      height: 2.6672520637512207,
      clipPath: "inset(0px 0.000px 0px -0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.939,
      height: 2.668,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.939,
    height: 2.668,
    viewBox: "0 0 1.939 2.668",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.939,
      height: 2.668
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.925 1.535 C 1.559 0.841 0.956 0.283 0.307 0.037 C 0.225 0.005 0.132 -0.02 0.067 0.024 C -0.062 0.109 0.019 0.358 0.111 0.531 C 0.491 1.239 0.936 1.911 1.434 2.528 C 1.468 2.57 1.504 2.614 1.548 2.641 C 1.687 2.725 1.821 2.597 1.876 2.455 C 1.989 2.16 1.948 1.765 1.768 1.446",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.692,
      top: 14.154,
      width: 3.666,
      height: 6.63,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.6656932830810547,
      height: 6.630213260650635,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.001,
      width: 3.665,
      height: 6.63,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.665,
    height: 6.630,
    viewBox: "0 0 3.665 6.630",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.665,
      height: 6.63
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.665 5.079 C 3.331 3.979 2.892 2.898 2.361 1.865 C 1.974 1.112 1.473 0.324 0.777 0.034 C 0.695 -0.001 0.595 -0.024 0.544 0.041 C 0.513 0.081 0.51 0.144 0.511 0.202 C 0.513 0.49 0.546 0.784 0.608 1.076 C 0.431 0.974 0.231 1.037 0.124 1.184 C 0.017 1.332 -0.01 1.546 0.003 1.758 C 0.046 2.457 0.472 3.122 0.878 3.728 C 1.398 4.508 1.92 5.287 2.44 6.066 C 2.627 6.345 2.882 6.663 3.151 6.627 C 3.371 6.598 3.473 6.337 3.52 6.091 C 3.587 5.735 3.597 5.353 3.548 4.966",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.529,
    height: 10.103,
    viewBox: "0 0 3.529 10.103",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.237,
      top: 10.477,
      width: 3.529,
      height: 10.103
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.876 3.713 C 0.467 2.756 0.179 1.753 0.027 0.753 C -0.007 0.524 -0.029 0.268 0.091 0.117 C 0.215 -0.041 0.458 -0.027 0.654 0.086 C 0.851 0.198 1.013 0.39 1.168 0.576 C 1.784 1.311 2.399 2.045 3.014 2.78 C 3.193 2.994 3.38 3.224 3.445 3.494 C 3.508 3.758 3.441 4.01 3.367 4.24 C 3.193 4.783 2.979 5.302 2.729 5.792 C 3.107 7.222 3.375 8.667 3.529 10.103 C 3.173 10.101 2.819 9.8 2.55 9.466 C 1.881 8.632 1.553 7.546 1.364 6.506 C 1.176 5.465 1.157 4.746 0.877 3.714",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.789,
      top: 12.987,
      width: 2.656,
      height: 4.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.6557652950286865,
      height: 4.9952874183654785,
      clipPath: "inset(-0.000px 0.000px 0.000px -0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.655,
      height: 4.994,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.655,
    height: 4.994,
    viewBox: "0 0 2.655 4.994",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.655,
      height: 4.994
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.309 4.089 C 0.234 3.656 0.159 3.222 0.084 2.789 C 0.018 2.407 -0.048 2.008 0.049 1.67 C 0.128 1.394 0.309 1.19 0.497 1.01 C 0.789 0.734 1.109 0.498 1.432 0.266 C 1.614 0.136 1.805 0.005 2.035 0 C 2.265 -0.005 2.544 0.161 2.628 0.427 C 2.69 0.621 2.636 0.812 2.565 0.972 C 2.352 1.456 1.988 1.823 1.831 2.344 C 1.625 3.022 1.803 3.85 1.736 4.591 C 1.722 4.735 1.693 4.889 1.591 4.958 C 1.46 5.045 1.269 4.958 1.113 4.858 C 0.753 4.627 0.423 4.318 0.146 3.957",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.234,
      top: 10.851,
      width: 3.214,
      height: 9.587,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.2139265537261963,
      height: 9.586942672729492,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.213,
      height: 9.587,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.213,
    height: 9.587,
    viewBox: "0 0 3.213 9.587",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.213,
      height: 9.587
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.213 9.587 C 2.232 8.745 1.609 7.325 1.67 6.068 C 1.709 5.25 2.008 4.469 1.772 3.632 C 1.609 3.055 1.217 2.564 0.897 2.05 C 0.501 1.416 0.199 0.716 0.013 0 C -0.108 2.589 0.614 5.405 2.013 7.803",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.892,
      top: 16.494,
      width: 7.462,
      height: 10.065,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.462333679199219,
      height: 10.064781188964844,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.462,
      height: 10.065,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.462,
    height: 10.065,
    viewBox: "0 0 7.462 10.065",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.462,
      height: 10.065
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.401 7.651 C 2.816 7.426 2.342 6.844 1.936 6.27 C 0.763 4.613 -0.208 2.551 0.039 0.701 C 0.067 0.486 0.116 0.269 0.244 0.128 C 0.373 -0.013 0.6 -0.054 0.774 0.089 C 1.013 0.286 1.054 0.721 1.313 0.868 C 1.599 1.03 1.955 0.712 2.17 0.994 C 2.325 1.198 2.213 1.515 2.37 1.718 C 2.444 1.812 2.555 1.849 2.647 1.916 C 2.943 2.127 3.006 2.573 3.176 2.921 C 3.46 3.502 4.043 3.799 4.499 4.223 C 5.435 5.095 6.884 6.72 7.192 7.988 C 7.234 8.164 7.953 11.072 6.854 9.697 C 6.787 9.612 6.19 10.293 5.414 9.335 C 4.787 8.562 4.136 7.828 3.344 7.33",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25.217,
      top: 17.852,
      width: 2.918,
      height: 6.592,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.9176595211029053,
      height: 6.591888427734375,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.918,
      height: 6.592,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.918,
    height: 6.592,
    viewBox: "0 0 2.918 6.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.918,
      height: 6.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.213 4.193 C -0.129 2.924 -0.057 1.601 0.411 0.568 C 0.524 0.318 0.675 0.072 0.919 0 C 1.564 0.342 2.074 1.043 2.376 1.784 C 2.677 2.525 2.795 3.311 2.873 4.079 C 2.925 4.591 2.96 5.12 2.81 5.562 C 2.706 5.869 2.519 6.116 2.334 6.356 C 2.242 6.476 2.133 6.603 1.981 6.591 C 1.876 6.583 1.775 6.509 1.681 6.434 C 0.984 5.872 0.424 5.053 0.127 4.167",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 29.606,
      top: 12.077,
      width: 3.9,
      height: 7.826,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.899759531021118,
      height: 7.82643985748291,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.004,
      top: 0.001,
      width: 3.9,
      height: 7.827,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.900,
    height: 7.827,
    viewBox: "0 0 3.900 7.827",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.9,
      height: 7.827
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.421 3.574 C 2.651 2.407 1.775 1.32 0.818 0.346 C 0.691 0.217 0.557 0.085 0.403 0.026 C 0.249 -0.032 0.071 0.005 0.017 0.158 C -0.02 0.264 0.009 0.4 0.048 0.523 C 0.286 1.289 0.832 1.925 1.236 2.627 C 2.036 4.014 2.266 5.627 2.419 7.161 C 2.44 7.362 2.474 7.593 2.622 7.73 C 2.78 7.875 2.988 7.837 3.142 7.753 C 3.717 7.439 3.948 6.632 3.892 5.837 C 3.835 5.042 3.54 4.245 3.249 3.467",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 29.631,
      top: 10.586,
      width: 5.614,
      height: 7.81,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.614345073699951,
      height: 7.810131072998047,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.614,
      height: 7.811,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.614,
    height: 7.811,
    viewBox: "0 0 5.614 7.811",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.614,
      height: 7.811
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.336 2.088 C 2.825 1.719 2.374 1.235 1.886 0.819 C 1.398 0.403 0.845 0.044 0.291 0.002 C 0.192 -0.005 0.083 0.004 0.032 0.088 C -0.007 0.152 -0.004 0.243 0.009 0.328 C 0.109 1.018 0.69 1.553 1.19 2.037 C 2.132 2.948 2.968 4.012 3.656 5.174 C 4.093 5.911 4.47 6.686 4.927 7.409 C 5.067 7.63 5.292 7.879 5.481 7.794 C 5.659 7.714 5.627 7.409 5.567 7.17 C 5.094 5.316 4.275 3.506 3.186 1.911",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.854,
      top: 10.629,
      width: 4.298,
      height: 5.292,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.2983293533325195,
      height: 5.292102813720703,
      clipPath: "inset(0.000px 0.000px 0px -0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: 0,
      width: 4.298,
      height: 5.292,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.298,
    height: 5.292,
    viewBox: "0 0 4.298 5.292",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.298,
      height: 5.292
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.298 5.224 C 3.687 3.174 2.321 1.283 0.645 0.164 C 0.445 0.03 0.173 -0.086 0.05 0.087 C -0.033 0.205 0.003 0.397 0.046 0.564 C 0.383 1.849 1.121 3.189 2.209 3.747 C 2.592 3.943 2.999 4.033 3.373 4.263 C 3.748 4.494 4.075 4.864 4.281 5.292",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32.583,
      top: 12.112,
      width: 4.811,
      height: 9.352,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.8114776611328125,
      height: 9.35209846496582,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.002,
      width: 4.811,
      height: 9.351,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.811,
    height: 9.351,
    viewBox: "0 0 4.811 9.351",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.811,
      height: 9.351
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.454 0.096 C 0.323 -0.071 0.089 -0.004 0.027 0.171 C -0.036 0.347 0.022 0.57 0.092 0.772 C 0.326 1.439 0.71 2.067 1.19 2.566 C 1.483 2.872 1.812 3.131 2.088 3.458 C 2.365 3.784 2.593 4.207 2.587 4.616 C 2.582 4.926 2.443 5.19 2.446 5.502 C 2.447 5.791 2.569 6.086 2.686 6.367 C 3.056 7.247 3.43 8.126 3.809 9.003 C 3.85 9.097 3.894 9.196 3.966 9.263 C 4.07 9.359 4.207 9.366 4.318 9.332 C 4.611 9.241 4.778 8.906 4.806 8.548 C 4.834 8.189 4.746 7.807 4.652 7.436 C 4.317 6.115 3.883 4.806 3.358 3.529",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.603,
      top: 11.621,
      width: 1.267,
      height: 4.093,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.2669106721878052,
      height: 4.09261417388916,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.267,
      height: 4.092,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.267,
    height: 4.092,
    viewBox: "0 0 1.267 4.092",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.267,
      height: 4.092
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.134 3.274 C 0.007 2.181 0.185 1.111 0.633 0.262 C 0.717 0.104 0.86 -0.062 1.033 0.023 C 1.204 0.108 1.253 0.364 1.26 0.564 C 1.309 1.79 1.082 2.966 0.606 3.951 C 0.573 4.02 0.529 4.094 0.454 4.092 C 0.348 4.09 0.273 3.941 0.233 3.82 C 0.109 3.437 0.03 3.044 0 2.656",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.177,
      top: 11.972,
      width: 2.427,
      height: 9.378,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.42742657661438,
      height: 9.378193855285645,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.427,
      height: 9.378,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.427,
    height: 9.378,
    viewBox: "0 0 2.427 9.378",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.427,
      height: 9.378
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.33 0.134 C 0.524 -0.064 0.898 0.098 1.095 0.377 C 1.292 0.656 1.36 1.005 1.42 1.336 C 1.7 2.884 1.98 4.432 2.26 5.98 C 2.353 6.489 2.445 7.005 2.424 7.5 C 2.393 8.219 2.111 8.866 1.651 9.272 C 1.566 9.346 1.454 9.415 1.34 9.355 C 1.265 9.316 1.212 9.231 1.167 9.15 C 0.889 8.644 0.755 8.079 0.627 7.527 C 0.493 6.952 0.359 6.377 0.226 5.803 C 0.106 5.289 -0.015 4.765 0.001 4.263 C 0.021 3.652 0.242 3.121 0.371 2.551 C 0.553 1.757 0.556 0.875 0.381 0",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 38.296,
      top: 13.721,
      width: 2.849,
      height: 9.364,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.848912000656128,
      height: 9.36351490020752,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.849,
      height: 9.365,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.849,
    height: 9.365,
    viewBox: "0 0 2.849 9.365",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.849,
      height: 9.365
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.744 4.342 C 2.474 3.097 2.205 1.853 1.934 0.609 C 1.89 0.407 1.829 0.176 1.667 0.061 C 1.459 -0.085 1.236 0.057 1.086 0.215 C 0.058 1.293 -0.279 3.172 0.242 4.933 C 0.425 5.555 0.708 6.165 0.801 6.793 C 0.916 7.573 0.73 8.322 0.889 9.101 C 0.902 9.166 0.92 9.235 0.961 9.287 C 1.049 9.396 1.19 9.375 1.286 9.32 C 1.628 9.129 1.785 8.688 1.912 8.268 C 2.326 6.895 2.64 5.463 2.849 3.988",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 37.515,
      top: 27.7,
      width: 14.711,
      height: 6.13,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.171,
      top: 1.476,
      width: 14.54,
      height: 4.654,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.540007591247559,
      height: 4.654439926147461,
      clipPath: "inset(-0.000px 0.000px 0.000px -0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.54,
      height: 4.655,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.540,
    height: 4.655,
    viewBox: "0 0 14.540 4.655",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.54,
      height: 4.655
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.611 0.349 C 3.102 1.743 5.723 2.354 8.116 2.099 C 8.952 2.01 9.758 1.818 10.563 1.626 C 11.646 1.367 12.729 1.109 13.812 0.85 C 14.05 0.794 14.371 0.783 14.54 1.079 C 14.003 2.852 12.577 3.791 11.072 4.251 C 8.455 5.052 5.396 4.654 2.487 3.135 C 2.012 2.887 1.53 2.601 1.12 2.161 C 0.584 1.584 0.222 0.788 0 0 C 0.21 0.083 0.421 0.166 0.632 0.25",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 13.063,
    height: 4.931,
    viewBox: "0 0 13.063 4.931",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.063,
      height: 4.931
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.709 0.494 C 3.855 1.69 5.2 2.538 6.532 2.906 C 8.771 3.524 10.84 2.795 13.063 3.182 C 12.668 3.647 12.081 3.803 11.515 3.948 C 10.705 4.156 9.895 4.363 9.084 4.567 C 8.335 4.755 7.581 4.941 6.778 4.931 C 4.841 4.908 2.775 3.742 0.917 2.253 C 0.469 1.894 -0.049 1.337 0.004 0.775 C 0.033 0.462 0.244 0.274 0.467 0.167 C 1.136 -0.157 1.992 0.025 2.786 0.419",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 4.138,
    height: 2.458,
    viewBox: "0 0 4.138 2.458",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.938,
      top: 19.307,
      width: 4.138,
      height: 2.458
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.458 1.152 C 3.253 0.804 2.925 0.559 2.594 0.416 C 2.261 0.273 1.92 0.222 1.584 0.172 C 1.251 0.122 0.918 0.072 0.584 0.022 C 0.45 0.002 0.311 -0.018 0.192 0.027 C 0.073 0.072 -0.021 0.201 0.004 0.356 C 0.035 0.548 0.219 0.68 0.377 0.774 C 1.385 1.371 2.415 1.898 3.458 2.348 C 3.591 2.406 3.73 2.463 3.862 2.457 C 3.995 2.451 4.12 2.365 4.136 2.216 C 4.152 2.073 4.068 1.921 3.986 1.789 C 3.78 1.462 3.554 1.15 3.308 0.858",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.218,
      top: 19.755,
      width: 9.962,
      height: 6.424,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.961779594421387,
      height: 6.423911094665527,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.962,
      height: 6.424,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.962,
    height: 6.424,
    viewBox: "0 0 9.962 6.424",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.962,
      height: 6.424
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.804 0.269 C 1.5 0.264 1.22 0.113 0.927 0.037 C 0.633 -0.039 0.27 -0.012 0.093 0.246 C -0.15 0.602 0.129 1.079 0.404 1.407 C 1.591 2.829 2.782 4.105 4.291 5.164 C 5.021 5.676 7.389 6.709 8.292 6.35 C 8.931 6.096 10.023 5.183 9.959 4.393 C 9.833 2.839 6.498 2.422 5.468 1.728 C 4.342 0.971 2.946 1.007 1.805 0.269",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.181,
      top: 15.513,
      width: 4.626,
      height: 8.102,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.625696659088135,
      height: 8.10205364227295,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.626,
      height: 8.102,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.626,
    height: 8.102,
    viewBox: "0 0 4.626 8.102",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.626,
      height: 8.102
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.778 5.201 C 2.996 4.692 2.444 3.779 2.002 2.88 C 1.561 1.98 1.179 1.03 0.569 0.249 C 0.479 0.134 0.37 0.015 0.248 0.001 C -0.01 -0.027 -0.032 0.383 0.028 0.681 C 0.416 2.607 1.078 4.518 1.977 6.312 C 2.233 6.823 2.521 7.341 2.932 7.705 C 3.343 8.068 3.908 8.238 4.274 7.973 C 4.626 7.717 4.696 7.128 4.563 6.601 C 4.431 6.074 4.135 5.59 3.846 5.122",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.608,
      top: 18.889,
      width: 7.028,
      height: 7.283,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.027752876281738,
      height: 7.282552242279053,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.026,
      height: 7.282,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.026,
    height: 7.282,
    viewBox: "0 0 7.026 7.282",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.026,
      height: 7.282
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.041 1.299 C 1.55 0.922 1.059 0.544 0.568 0.166 C 0.458 0.082 0.337 -0.007 0.219 0 C -0.064 0.018 -0.031 0.493 0.086 0.82 C 0.484 1.931 1.094 2.963 1.737 3.954 C 2.418 5.005 3.166 6.048 4.108 6.775 C 4.33 6.946 4.564 7.1 4.809 7.188 C 5.311 7.368 5.806 7.255 6.274 7.142 C 6.572 7.069 6.904 6.965 6.999 6.638 C 7.055 6.446 7.015 6.216 6.973 5.999 C 6.83 5.252 6.664 4.466 6.219 3.833 C 5.937 3.432 5.564 3.127 5.2 2.829 C 4.712 2.432 4.475 2.56 3.945 2.272 C 3.283 1.912 2.825 1.814 2.216 1.314",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.844,
      top: 22.213,
      width: 4.989,
      height: 6.108,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.989073753356934,
      height: 6.10834264755249,
      clipPath: "inset(-0.000px 0px 0.000px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.99,
      height: 6.108,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.990,
    height: 6.108,
    viewBox: "0 0 4.990 6.108",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.99,
      height: 6.108
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.951 3.593 C 3.322 3.504 2.79 2.85 2.34 2.251 C 1.911 1.679 1.481 1.107 1.051 0.535 C 0.847 0.262 0.573 -0.045 0.303 0.006 C 0.12 0.04 0.013 0.243 0.001 0.46 C -0.01 0.677 0.056 0.906 0.129 1.126 C 0.527 2.324 1.142 3.45 1.757 4.561 C 1.92 4.857 2.088 5.158 2.316 5.398 C 2.884 5.996 3.665 6.071 4.363 6.105 C 4.57 6.115 4.803 6.113 4.916 5.939 C 4.984 5.833 4.994 5.685 4.989 5.541 C 4.963 4.764 4.562 3.933 3.967 3.425",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.868,
      top: 19.501,
      width: 2.87,
      height: 7.097,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.8701908588409424,
      height: 7.096636772155762,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 2.87,
      height: 7.097,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.870,
    height: 7.097,
    viewBox: "0 0 2.870 7.097",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.87,
      height: 7.097
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.331 5.98 C 0.48 4.36 -0.196 2.546 0.057 0.965 C 0.102 0.684 0.18 0.408 0.347 0.216 C 0.513 0.024 0.783 -0.065 1.039 0.054 C 1.331 0.19 1.521 0.542 1.681 0.863 C 1.904 1.311 2.127 1.758 2.35 2.206 C 2.574 2.657 2.805 3.125 2.858 3.608 C 2.902 4.006 2.822 4.38 2.742 4.743 C 2.59 5.438 2.437 6.136 2.183 6.771 C 2.138 6.885 2.085 7.001 1.99 7.058 C 1.835 7.15 1.62 7.062 1.438 6.958 C 0.965 6.688 0.524 6.306 0.157 5.848",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.511,
      top: 22.057,
      width: 5.005,
      height: 8.921,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.004624366760254,
      height: 8.920741081237793,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.005,
      height: 8.921,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.005,
    height: 8.921,
    viewBox: "0 0 5.005 8.921",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.005,
      height: 8.921
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.005 6.129 C 4.191 3.756 2.62 1.588 0.7 0.187 C 0.527 0.06 0.307 -0.064 0.159 0.038 C 0.068 0.1 0.035 0.233 0.019 0.361 C -0.078 1.122 0.219 1.957 0.519 2.737 C 1.259 4.657 2.063 6.557 2.928 8.429 C 3.025 8.639 3.16 8.881 3.352 8.917 C 3.454 8.936 3.545 8.888 3.626 8.834 C 4.5 8.258 4.817 7.009 4.99 5.811",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.208,
      top: 16.325,
      width: 4.692,
      height: 6.848,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.69198751449585,
      height: 6.847931385040283,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.001,
      width: 4.692,
      height: 6.848,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.692,
    height: 6.848,
    viewBox: "0 0 4.692 6.848",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.692,
      height: 6.848
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.066 4.459 C 0.556 3.099 -0.967 0.23 0.913 0 C 2.115 0.441 2.953 1.968 3.89 2.955 C 5.437 4.422 4.432 5.885 3.492 6.805 C 2.468 7.124 1.294 5.594 1.065 4.459",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 2.874,
    height: 6.664,
    viewBox: "0 0 2.874 6.664",
    fill: "none",
    style: {
      position: "absolute",
      left: 28.072,
      top: 21.588,
      width: 2.874,
      height: 6.664
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.167 5.687 C 0.125 4.706 -0.019 3.708 0.002 2.74 C 0.023 1.772 0.229 0.807 0.794 0.199 C 0.933 0.05 1.141 -0.076 1.336 0.054 C 1.416 0.107 1.477 0.195 1.533 0.279 C 1.925 0.861 2.266 1.483 2.548 2.128 C 2.683 2.436 2.805 2.754 2.852 3.077 C 2.899 3.404 2.864 3.721 2.817 4.028 C 2.682 4.892 2.441 5.713 2.102 6.46 C 2.069 6.534 2.031 6.61 1.965 6.644 C 1.9 6.676 1.819 6.663 1.743 6.646 C 1.191 6.517 0.645 6.162 0.226 5.664",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30.174,
      top: 18.94,
      width: 4.744,
      height: 6.949,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.7443671226501465,
      height: 6.949044227600098,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.001,
      width: 4.744,
      height: 6.949,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.744,
    height: 6.949,
    viewBox: "0 0 4.744 6.949",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.744,
      height: 6.949
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.092 5.333 C 0.118 3.496 0.558 1.761 1.363 0.336 C 1.427 0.223 1.496 0.108 1.602 0.047 C 1.893 -0.118 2.292 0.181 2.575 0.483 C 3.688 1.676 4.467 3.281 4.71 4.884 C 4.77 5.28 4.777 5.736 4.517 5.932 C 4.365 6.047 4.158 6.044 3.964 6.061 C 3.502 6.103 3.072 6.281 2.725 6.577 C 2.495 6.771 2.25 7.028 1.936 6.925 C 1.764 6.868 1.616 6.712 1.478 6.562 C 0.985 6.028 0.493 5.492 0 4.957",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 29.698,
      top: 23.427,
      width: 3.166,
      height: 5.918,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.1656394004821777,
      height: 5.917532920837402,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.165,
      height: 5.918,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.165,
    height: 5.918,
    viewBox: "0 0 3.165 5.918",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.165,
      height: 5.918
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.225 5.573 C 0.016 4.271 -0.048 2.969 0.036 1.713 C 0.081 1.032 0.225 0.279 0.76 0.058 C 1.147 -0.102 1.65 0.085 2.024 0.438 C 2.398 0.791 2.658 1.284 2.838 1.782 C 3.336 3.165 3.262 4.689 2.644 5.757 C 2.61 5.815 2.573 5.874 2.515 5.901 C 2.447 5.933 2.361 5.914 2.28 5.894 C 1.59 5.727 0.899 5.559 0.209 5.392",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.461,
    height: 8.340,
    viewBox: "0 0 3.461 8.340",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.924,
      top: 21.976,
      width: 3.461,
      height: 8.34
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 7.386 C 0.832 5.459 0.223 2.862 0.536 0.649 C 0.572 0.396 0.638 0.123 0.837 0.031 C 1.191 -0.13 1.604 0.369 1.852 0.797 C 2.095 1.216 2.333 1.637 2.567 2.062 C 2.889 2.649 3.207 3.255 3.358 3.897 C 3.676 5.256 3.194 6.499 2.721 7.621 C 2.586 7.941 2.415 8.292 2.093 8.335 C 1.895 8.362 1.681 8.264 1.478 8.168 C 0.909 7.899 0.263 7.544 0.025 6.89",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.786,
      top: 14.356,
      width: 4.998,
      height: 13.295,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.998076915740967,
      height: 13.294673919677734,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.998,
      height: 13.294,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.998,
    height: 13.294,
    viewBox: "0 0 4.998 13.294",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.998,
      height: 13.294
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.74 6.752 C 1.137 6.024 0.738 5.066 0.913 4.222 C 0.956 4.011 1.053 3.827 1.086 3.611 C 1.225 2.693 0.242 1.797 0.032 0.819 C -0.02 0.577 -0.017 0.317 0.107 0.153 C 0.402 -0.235 1.036 0.188 1.433 0.614 C 2.912 2.203 4.191 4.155 4.711 6.28 C 5.265 8.548 4.909 10.765 4.55 12.884 C 4.521 13.057 4.472 13.254 4.322 13.289 C 4.115 13.337 3.918 13.047 3.804 12.806 C 2.88 10.862 2.823 8.617 1.741 6.752",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.762,
      top: 19.062,
      width: 3.203,
      height: 9.538,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.20328688621521,
      height: 9.538016319274902,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: 0,
      width: 3.204,
      height: 9.538,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.204,
    height: 9.538,
    viewBox: "0 0 3.204 9.538",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.204,
      height: 9.538
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.174 9.402 C 0.119 7.868 0.065 6.335 0.01 4.801 C -0.014 4.124 -0.024 3.395 0.324 2.927 C 0.509 2.677 0.794 2.504 0.85 2.164 C 0.882 1.963 0.827 1.728 0.887 1.54 C 1.038 1.063 1.731 1.268 2.051 0.939 C 2.293 0.69 2.278 0.173 2.57 0 C 3.101 0.269 3.207 1.08 3.204 1.698 C 3.197 3.326 3.19 4.955 3.182 6.584 C 3.181 6.995 3.178 7.41 3.099 7.795 C 2.82 9.145 1.483 9.88 0.218 9.38",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30.369,
      top: 24.23,
      width: 2.891,
      height: 8.395,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.891469717025757,
      height: 8.394790649414062,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.001,
      width: 2.892,
      height: 8.395,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.892,
    height: 8.395,
    viewBox: "0 0 2.892 8.395",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.892,
      height: 8.395
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.288 7.56 C 0.12 7.493 0.031 7.259 0.01 7.064 C -0.102 6.045 0.794 5.442 0.885 4.466 C 0.942 3.859 0.68 3.211 0.516 2.581 C 0.334 1.881 0.271 1.167 0.329 0.492 C 0.343 0.327 0.37 0.151 0.48 0.06 C 0.739 -0.155 1.141 0.251 1.375 0.602 C 1.643 1.005 1.912 1.409 2.181 1.812 C 2.421 2.174 2.667 2.546 2.788 2.96 C 2.893 3.316 2.898 3.679 2.889 4.031 C 2.852 5.566 2.563 7.089 1.761 8.16 C 1.666 8.288 1.545 8.415 1.384 8.392 C 1.297 8.38 1.213 8.324 1.132 8.27 C 0.799 8.042 0.474 7.795 0.158 7.529",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 42.049,
      top: 10.871,
      width: 4.294,
      height: 10.229,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.29423713684082,
      height: 10.228679656982422,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.293,
      height: 10.228,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.293,
    height: 10.228,
    viewBox: "0 0 4.293 10.228",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.293,
      height: 10.228
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.892 0.33 C 3.013 -0.087 3.635 -0.095 3.933 0.228 C 4.232 0.551 4.283 1.035 4.291 1.476 C 4.304 2.163 4.255 2.847 4.176 3.526 C 4.047 4.619 3.84 5.699 3.556 6.752 C 3.342 7.547 3.076 8.342 2.609 8.999 C 2.141 9.656 1.442 10.167 0.649 10.224 C 0.526 10.233 0.396 10.23 0.285 10.17 C 0.012 10.022 -0.02 9.632 0.008 9.319 C 0.289 6.149 2.656 3.554 2.816 0.368",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.456,
    height: 4.261,
    viewBox: "0 0 3.456 4.261",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.299,
      top: 18.915,
      width: 3.456,
      height: 4.261
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.743 C 0.41 3.229 2.713 -1.302 3.421 0.368 C 3.842 1.523 0.336 5.71 0 3.743 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.707,
    height: 13.459,
    viewBox: "0 0 5.707 13.459",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.971,
      top: 29.619,
      width: 5.707,
      height: 13.459
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.17 0.611 C 1.416 3.413 2.736 5.905 3.328 9.011 C 3.472 9.774 3.607 14.069 5.118 13.385 C 5.775 13.088 5.762 10.981 5.645 10.212 C 5.422 8.739 4.708 7.269 4.089 5.904 C 3.283 4.128 1.883 0.873 0.163 0 C 0.018 0.265 -0.12 0.543 0.17 0.611 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 37.996,
      top: 16.885,
      width: 10.744,
      height: 11.151,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.744186401367188,
      height: 11.150924682617188,
      clipPath: "inset(0px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 10.745,
      height: 11.151,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.745,
    height: 11.151,
    viewBox: "0 0 10.745 11.151",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.745,
      height: 11.151
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.241 4.534 C 7.209 3.996 9.122 2.745 9.324 0.605 C 9.902 -0.619 10.976 0.219 10.7 1.303 C 10.498 4.015 9.818 7.129 7.152 8.508 C -4.323 14.446 0.307 9.192 5.218 4.347",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 4.175,
    height: 7.479,
    viewBox: "0 0 4.175 7.479",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.14,
      top: 10.934,
      width: 4.175,
      height: 7.479
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.158 6.929 C 0.954 5.361 2.131 -0.392 4.113 0.021 C 4.584 1.629 2.26 9.102 0 7.159",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 37.81,
      top: 15.954,
      width: 5.591,
      height: 11.39,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.590610980987549,
      height: 11.389843940734863,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 5.59,
      height: 11.39,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.590,
    height: 11.390,
    viewBox: "0 0 5.590 11.390",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.59,
      height: 11.39
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.648 2.564 C 3.18 1.573 3.185 0.695 4.075 0.075 C 6.481 -0.557 5.402 2.987 4.994 4.211 C 4.361 6.42 3.676 8.718 2.135 10.107 C 1.742 10.516 0.103 12.161 0 10.957 C 0.122 8.303 1.801 5.3 2.648 2.564",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 4.889,
    height: 2.540,
    viewBox: "0 0 4.889 2.540",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.369,
      top: 27.567,
      width: 4.889,
      height: 2.54
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.816 2.426 C 4.013 2.706 3.059 2.422 2.166 2.1 C 1.543 1.875 0.91 1.624 0.348 1.183 C 0.182 1.053 0.004 0.868 0 0.657 C -0.005 0.42 0.212 0.309 0.409 0.276 C 0.798 0.21 1.218 0.274 1.606 0.206 C 1.948 0.147 2.263 -0.013 2.621 0.001 C 3.048 0.018 3.487 0.287 3.846 0.641 C 4.204 0.995 4.494 1.43 4.78 1.86 C 4.832 1.937 4.886 2.022 4.889 2.11 C 4.893 2.198 4.815 2.274 4.744 2.224",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.554,
      top: 27.275,
      width: 15.859,
      height: 5.672,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.859297752380371,
      height: 5.672089576721191,
      clipPath: "inset(-0.000px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.859,
      height: 5.672,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.859,
    height: 5.672,
    viewBox: "0 0 15.859 5.672",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.859,
      height: 5.672
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.73 0 C 2.072 0.097 1.408 0.28 0.765 0.541 C 0.42 0.682 0.013 0.933 0 1.259 C -0.008 1.451 0.133 1.59 0.269 1.708 C 3.825 4.812 9.081 6.204 14.543 5.488 C 15.058 5.42 15.732 5.202 15.845 4.717 C 15.924 4.38 15.661 4.132 15.41 3.944 C 11.935 1.344 7.305 0.011 2.379 0.192",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.687,
      top: 27.451,
      width: 8.1,
      height: 5.41,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.09988021850586,
      height: 5.410338878631592,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.099,
      height: 5.411,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.099,
    height: 5.411,
    viewBox: "0 0 8.099 5.411",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.099,
      height: 5.411
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.092 2.706 C 4.977 2.263 2.858 1.415 0.854 0.209 C 0.598 0.055 0.272 -0.102 0.093 0.086 C -0.077 0.265 0.015 0.627 0.139 0.908 C 0.869 2.565 2.295 3.737 3.643 4.808 C 3.878 4.995 4.119 5.185 4.381 5.282 C 4.569 5.352 4.76 5.371 4.948 5.384 C 5.805 5.444 6.65 5.402 7.467 5.259 C 7.665 5.224 7.873 5.176 7.992 5.009 C 8.14 4.803 8.114 4.476 8.042 4.181 C 7.893 3.575 7.573 2.991 7.145 2.545",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.004,
      top: 22.938,
      width: 13.581,
      height: 4.794,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.58082389831543,
      height: 4.793878555297852,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.581,
      height: 4.794,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.581,
    height: 4.794,
    viewBox: "0 0 13.581 4.794",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.581,
      height: 4.794
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.099 0 C -0.493 1.393 1.712 2.604 3.057 2.798 C 4.987 3.208 15.199 6.782 13.36 3.248 C 10.133 3.89 3.489 0.768 0.099 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 5.705,
    height: 4.392,
    viewBox: "0 0 5.705 4.392",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.596,
      top: 29.03,
      width: 5.705,
      height: 4.392
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.024 0.19 C 0.811 0.989 1.637 1.772 2.566 2.261 C 3.495 2.75 4.553 2.913 5.332 2.447 C 5.423 2.393 5.552 2.34 5.634 2.445 C 5.663 2.481 5.677 2.529 5.686 2.575 C 5.754 2.923 5.633 3.243 5.469 3.494 C 5.107 4.046 4.517 4.376 3.865 4.392 C 3.214 4.407 2.508 4.108 1.947 3.577 C 1.585 3.236 1.288 2.809 1.006 2.38 C 0.525 1.65 0.058 0.837 0 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.563,
      top: 27.595,
      width: 4.591,
      height: 5.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.590504169464111,
      height: 5.994997501373291,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 4.59,
      height: 5.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.590,
    height: 5.995,
    viewBox: "0 0 4.590 5.995",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.59,
      height: 5.995
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.157 5.986 C 1.653 6.062 0.868 5.687 0.391 4.831 C 0.075 4.264 -0.004 3.672 0 3.185 C 0.009 2.092 0.334 1.276 0.656 0.483 C 0.757 0.233 0.878 -0.03 1.142 0.003 C 1.409 0.035 1.745 0.366 2.022 0.72 C 2.3 1.075 2.554 1.475 2.847 1.796 C 3.172 2.151 3.52 2.382 3.852 2.709 C 4.185 3.036 4.533 3.54 4.584 3.963 C 4.605 4.143 4.569 4.281 4.525 4.404 C 4.405 4.735 4.217 4.992 3.976 5.155 C 3.384 5.558 2.477 5.413 2.001 5.994",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 8.800,
    height: 6.413,
    viewBox: "0 0 8.800 6.413",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.678,
      top: 22.723,
      width: 8.8,
      height: 6.413
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.225 5.286 C 4.341 5.136 3.478 4.591 2.682 3.978 C 1.484 3.057 0.28 1.785 0.011 0.252 C -0.003 0.174 -0.011 0.086 0.032 0.037 C 0.068 -0.005 0.132 -0.003 0.19 0.004 C 1.414 0.144 2.519 1.45 3.748 1.759 C 4.162 1.864 4.583 1.852 4.988 2.043 C 5.724 2.391 6.189 3.289 6.578 4.104 C 6.806 4.581 8.986 6.013 8.787 6.413",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.867,
      top: 24.893,
      width: 7.336,
      height: 4.367,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.336295127868652,
      height: 4.36659574508667,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.336,
      height: 4.366,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.336,
    height: 4.366,
    viewBox: "0 0 7.336 4.366",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.336,
      height: 4.366
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.034 3.662 L 0.653 0.107 C 0.572 0.062 0.488 0.016 0.404 0.003 C 0.194 -0.028 0.032 0.166 0.005 0.396 C -0.022 0.626 0.057 0.878 0.158 1.11 C 0.675 2.3 1.728 3.116 2.74 3.78 C 3.017 3.963 3.3 4.142 3.596 4.244 C 3.966 4.373 4.339 4.377 4.701 4.359 C 5.612 4.314 6.499 4.143 7.336 3.849",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 6.379,
    height: 4.423,
    viewBox: "0 0 6.379 4.423",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.765,
      top: 25.787,
      width: 6.379,
      height: 4.423
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.234 C 2.123 4.743 4.245 4.214 5.717 2.811 C 5.972 2.568 6.213 2.289 6.318 1.913 C 6.479 1.336 6.29 0.643 6.102 0 C 5.028 0.136 3.984 0.394 2.99 0.767 C 2.38 0.996 1.751 1.273 1.062 1.11 C 0.952 1.084 0.829 1.049 0.749 1.116 C 0.701 1.156 0.679 1.226 0.66 1.293 C 0.392 2.251 0.316 3.316 0.438 4.395",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.015,
    height: 13.251,
    viewBox: "0 0 3.015 13.251",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.734,
      top: 32.378,
      width: 3.015,
      height: 13.251
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.481 0.479 C 1.485 3.371 1.692 6.063 0.93 8.817 C 0.744 9.493 -0.973 12.911 0.786 13.242 C 1.551 13.387 2.444 11.74 2.661 11.074 C 3.078 9.801 3.018 8.25 3.004 6.835 C 2.986 4.993 3.029 1.661 1.736 0 C 1.481 0.123 1.228 0.261 1.48 0.479 L 1.481 0.479 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.208,
    height: 10.704,
    viewBox: "0 0 8.208 10.704",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.154,
      top: 31.906,
      width: 8.208,
      height: 10.704
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.142 C 1.126 2.707 2.699 4.234 4.348 6.364 C 5.596 7.975 6.704 9.437 8.208 10.704 C 7.405 7.366 4.986 4.866 2.936 2.348 C 2.336 1.611 0.881 -0.573 0 0.142 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.313,
      top: 19.54,
      width: 8.058,
      height: 8.965,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.05813980102539,
      height: 8.964773178100586,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.057,
      height: 8.965,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.057,
    height: 8.965,
    viewBox: "0 0 8.057 8.965",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.057,
      height: 8.965
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.565 6.481 C 1.782 6.028 1.202 5.118 0.757 4.222 C 0.326 3.354 -0.038 2.398 0.003 1.514 C 0.045 0.63 0.615 -0.127 1.397 0.018 C 2.258 0.176 2.949 1.274 3.269 2.279 C 3.589 3.284 3.707 4.341 4.204 5.285 C 4.895 6.597 6.157 7.39 7.345 7.911 C 7.691 8.063 8.157 8.43 8.038 8.774 C 7.97 8.975 7.732 8.98 7.529 8.953 C 5.752 8.719 3.898 7.683 2.432 6.104",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.758,
      top: 22.909,
      width: 8.707,
      height: 6.268,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.707144737243652,
      height: 6.268165111541748,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 8.708,
      height: 6.268,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.708,
    height: 6.268,
    viewBox: "0 0 8.708 6.268",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.708,
      height: 6.268
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.029 0 C 0.782 1.212 1.883 2.102 3 2.823 C 4.116 3.544 7.625 5.423 8.708 6.228 C 8.336 6.505 5.481 5.241 4.991 5.112 C 4.5 4.983 4.025 4.712 3.565 4.418 C 2.521 3.75 1.501 2.931 0.737 1.847 C 0.349 1.297 0.023 0.65 0 0.008",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 43.83,
      top: 24.039,
      width: 3.351,
      height: 4.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.3506019115448,
      height: 4.676457405090332,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.351,
      height: 4.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.351,
    height: 4.676,
    viewBox: "0 0 3.351 4.676",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.351,
      height: 4.676
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.777 1.835 C 1.93 1.363 1.933 0.65 2.231 0.3 C 2.402 0.099 2.648 -0.086 2.913 0.043 C 3.152 0.159 3.287 0.482 3.328 0.765 C 3.421 1.395 3.213 1.961 3.009 2.491 C 2.865 2.864 2.722 3.238 2.578 3.611 C 2.524 3.75 2.47 3.892 2.386 4.006 C 2.273 4.16 2.115 4.258 1.956 4.345 C 1.41 4.644 0.735 4.844 0.104 4.48 C 0.067 4.459 0.028 4.433 0.01 4.391 C -0.009 4.342 0.001 4.285 0.025 4.25 C 0.659 3.357 1.083 3.153 1.776 1.835",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 10.562,
    height: 3.755,
    viewBox: "0 0 10.562 3.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.504,
      top: 31.508,
      width: 10.562,
      height: 3.755
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.534 3.195 C 1.688 2.788 0.905 2.099 0.318 1.246 C -0.514 0.105 0.456 -0.379 1.294 0.336 C 2.86 1.289 4.611 1.657 6.166 1.359 C 7.16 1.075 10.092 -0.158 10.562 1.543 C 9.279 3.669 4.826 4.386 2.543 3.148",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.376,
      top: 31.615,
      width: 9.981,
      height: 4.837,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.98060131072998,
      height: 4.837096214294434,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.98,
      height: 4.837,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.980,
    height: 4.837,
    viewBox: "0 0 9.980 4.837",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.98,
      height: 4.837
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.062 2.247 C 7.729 2.866 7.099 3.193 6.43 3.271 C 5.761 3.348 5.051 3.199 4.353 3.003 C 2.806 2.566 1.074 1.697 0.314 0.004 C 0.025 -0.048 -0.042 0.394 0.022 0.727 C 0.39 2.63 2.084 4.196 3.736 4.651 C 5.389 5.106 6.98 4.666 8.397 4.014 C 8.831 3.815 9.264 3.589 9.577 3.209 C 9.891 2.829 10.071 2.265 9.934 1.683 C 9.178 1.521 8.57 1.726 8.063 2.247",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 4.095,
    height: 1.921,
    viewBox: "0 0 4.095 1.921",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.75,
      top: 31.912,
      width: 4.095,
      height: 1.921
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.93 1.896 C 0.598 2.18 -1.121 -0.042 0.992 0.001 C 1.998 0.281 2.967 1.067 4.022 1.129 C 4.556 1.745 1.995 2.018 1.561 1.692",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.636,
      top: 32.376,
      width: 4.757,
      height: 3.501,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.7574615478515625,
      height: 3.5014305114746094,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.001,
      width: 4.758,
      height: 3.501,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.758,
    height: 3.501,
    viewBox: "0 0 4.758 3.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.758,
      height: 3.501
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.719 0.299 C 0.657 0.029 0.308 -0.085 0.144 0.07 C -0.019 0.224 -0.025 0.526 0.035 0.796 C 0.2 1.528 0.741 2.132 1.253 2.674 C 1.538 2.976 1.841 3.287 2.192 3.42 C 2.381 3.492 2.574 3.507 2.761 3.5 C 3.763 3.463 4.643 2.707 4.754 1.578 C 4.762 1.506 4.763 1.423 4.718 1.359 C 4.629 1.23 4.474 1.302 4.371 1.371 C 3.878 1.693 3.202 1.559 2.578 1.418 C 2.208 1.334 1.832 1.248 1.482 1.037 C 1.131 0.827 0.805 0.467 0.701 0.044",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.314,
      top: 23.125,
      width: 12.675,
      height: 8.565,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.674833297729492,
      height: 8.565215110778809,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.675,
      height: 8.565,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.675,
    height: 8.565,
    viewBox: "0 0 12.675 8.565",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.675,
      height: 8.565
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.996 6.088 C 2.384 6.236 3.778 6.384 5.144 6.328 C 6.24 6.283 7.376 6.074 8.103 5.296 C 8.736 4.619 8.967 3.614 9.374 2.749 C 9.919 1.592 10.809 0.659 11.906 0.097 C 12.036 0.029 12.187 -0.034 12.339 0.021 C 12.639 0.128 12.696 0.56 12.668 0.875 C 12.546 2.249 12.109 3.521 11.676 4.777 C 11.5 5.29 11.319 5.81 11.008 6.23 C 10.715 6.625 10.318 6.914 9.906 7.167 C 7.1 8.891 3.345 9.03 0 7.532 C 0.034 6.882 0.387 6.307 0.917 6.042",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.85,
      top: 23.675,
      width: 4.821,
      height: 7.817,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.821299076080322,
      height: 7.817471027374268,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 4.822,
      height: 7.818,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.822,
    height: 7.818,
    viewBox: "0 0 4.822 7.818",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.822,
      height: 7.818
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.263 4.131 C 1.492 2.56 2.148 1.828 2.842 0.54 C 3.013 0.225 3.283 -0.109 3.634 0.034 C 3.94 0.16 4.099 0.573 4.198 0.928 C 4.464 1.875 4.656 2.834 4.773 3.788 C 4.813 4.115 4.844 4.448 4.8 4.756 C 4.74 5.172 4.547 5.521 4.316 5.816 C 3.56 6.784 2.417 7.237 1.309 7.663 C 0.9 7.821 0.381 7.95 0 7.565 C 0.575 6.033 0.786 5.151 1.263 4.132",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.334,
      top: 24.006,
      width: 5.728,
      height: 6.807,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.728104591369629,
      height: 6.807160377502441,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.728,
      height: 6.807,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.728,
    height: 6.807,
    viewBox: "0 0 5.728 6.807",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.728,
      height: 6.807
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.027 3.753 C 2.603 2.478 3.425 1.752 4.409 0.585 C 4.649 0.299 4.996 -0.026 5.319 0.002 C 5.6 0.026 5.671 0.309 5.693 0.561 C 5.753 1.234 5.736 1.933 5.645 2.646 C 5.614 2.892 5.573 3.142 5.46 3.392 C 5.309 3.73 5.037 4.047 4.739 4.332 C 3.765 5.265 2.511 5.891 1.3 6.488 C 0.852 6.709 0.3 6.933 0 6.724 C 0.916 5.397 1.323 4.66 2.027 3.753 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 360,
      height: 56,
      backgroundColor: "rgb(254,251,244)",
      borderTop: "1px solid rgb(227,221,208)",
      borderRight: "1px solid rgb(227,221,208)",
      borderBottom: "1px solid rgb(227,221,208)",
      borderLeft: "1px solid rgb(227,221,208)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.500px",
      color: "rgb(36,26,16)",
      flexShrink: 0
    }
  }, "\uC544\uC774\uB9AC\uC2A4\uC2A4\uB9C8\uD2B8 \uC7A5\uB840\uC2DD\uC7A5"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2584,
      width: 360,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 16px 26px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 52,
      borderRadius: 12,
      backgroundColor: "rgb(94,68,38)",
      boxShadow: "0px 10px 22px 0px rgba(94,68,38,0.26)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(246,238,220)",
      flexShrink: 0
    }
  }, "\uADFC\uC870\uD654\uD658 \uBCF4\uB0B4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 52,
      borderRadius: 12,
      backgroundColor: "rgb(156,101,22)",
      boxShadow: "0px 10px 24px 0px rgba(156,101,22,0.44)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(252,244,226)",
      flexShrink: 0
    }
  }, "\uBD80\uC758\uAE08 \uBCF4\uB0B4\uAE30"))));
}

// figma node: 4459:7481 부고장_v2_먹_Dark
function V2Dark(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(244,238,224)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 360,
      overflow: "hidden",
      backgroundColor: "rgb(236,233,227)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      backgroundColor: "rgb(26,24,21)",
      borderTop: "1px solid rgb(58,53,48)",
      borderRight: "1px solid rgb(58,53,48)",
      borderBottom: "1px solid rgb(58,53,48)",
      borderLeft: "1px solid rgb(58,53,48)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "0.500px",
      color: "rgb(242,239,230)",
      flexShrink: 0
    }
  }, "\uC544\uC774\uB9AC\uC2A4\uC2A4\uB9C8\uD2B8 \uC7A5\uB840\uC2DD\uC7A5"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      backgroundColor: "rgb(204,138,62)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 18px 0px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 15,
      height: 15,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.060,
    height: 11.314,
    viewBox: "0 0 13.060 11.314",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.97,
      top: 1.811,
      width: 13.06,
      height: 11.314,
      color: "rgb(35,20,5)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.461 0.602 L 4.927 0.278 L 4.925 0.281 L 5.461 0.602 Z M 0.168 9.439 L -0.369 9.118 L -0.374 9.127 L 0.168 9.439 Z M 1.236 11.314 L 1.229 11.939 L 1.236 11.939 L 1.236 11.314 Z M 11.824 11.314 L 11.824 11.939 L 11.831 11.939 L 11.824 11.314 Z M 12.893 9.439 L 13.434 9.127 L 13.429 9.118 L 12.893 9.439 Z M 7.599 0.602 L 8.135 0.281 L 8.133 0.278 L 7.599 0.602 Z M 6.53 0 L 6.53 -0.625 L 6.53 0 Z M 5.461 0.602 L 4.925 0.281 L -0.369 9.118 L 0.168 9.439 L 0.704 9.76 L 5.997 0.923 L 5.461 0.602 Z M 0.168 9.439 L -0.374 9.127 C -0.537 9.41 -0.624 9.732 -0.625 10.059 L 0 10.061 L 0.625 10.063 C 0.625 9.953 0.654 9.846 0.709 9.752 L 0.168 9.439 Z M 0 10.061 L -0.625 10.059 C -0.626 10.386 -0.541 10.708 -0.379 10.993 L 0.164 10.683 L 0.707 10.374 C 0.653 10.279 0.625 10.172 0.625 10.063 L 0 10.061 Z M 0.164 10.683 L -0.379 10.993 C -0.217 11.277 0.017 11.514 0.299 11.68 L 0.616 11.142 L 0.933 10.603 C 0.839 10.548 0.761 10.469 0.707 10.374 L 0.164 10.683 Z M 0.616 11.142 L 0.299 11.68 C 0.581 11.846 0.902 11.936 1.229 11.939 L 1.236 11.314 L 1.243 10.689 C 1.134 10.688 1.027 10.658 0.933 10.603 L 0.616 11.142 Z M 1.236 11.314 L 1.236 11.939 L 11.824 11.939 L 11.824 11.314 L 11.824 10.689 L 1.236 10.689 L 1.236 11.314 Z M 11.824 11.314 L 11.831 11.939 C 12.158 11.936 12.479 11.846 12.761 11.68 L 12.444 11.142 L 12.127 10.603 C 12.033 10.658 11.926 10.688 11.817 10.689 L 11.824 11.314 Z M 12.444 11.142 L 12.761 11.68 C 13.043 11.514 13.277 11.277 13.439 10.993 L 12.896 10.683 L 12.353 10.374 C 12.299 10.469 12.221 10.548 12.127 10.603 L 12.444 11.142 Z M 12.896 10.683 L 13.439 10.993 C 13.601 10.708 13.686 10.386 13.685 10.059 L 13.06 10.061 L 12.435 10.063 C 12.435 10.172 12.407 10.279 12.353 10.374 L 12.896 10.683 Z M 13.06 10.061 L 13.685 10.059 C 13.684 9.732 13.597 9.41 13.434 9.127 L 12.893 9.439 L 12.351 9.752 C 12.406 9.846 12.435 9.953 12.435 10.063 L 13.06 10.061 Z M 12.893 9.439 L 13.429 9.118 L 8.135 0.281 L 7.599 0.602 L 7.063 0.923 L 12.356 9.76 L 12.893 9.439 Z M 7.599 0.602 L 8.133 0.278 C 7.966 0.002 7.731 -0.226 7.45 -0.384 L 7.143 0.161 L 6.837 0.705 C 6.93 0.758 7.009 0.834 7.064 0.926 L 7.599 0.602 Z M 7.143 0.161 L 7.45 -0.384 C 7.169 -0.542 6.852 -0.625 6.53 -0.625 L 6.53 0 L 6.53 0.625 C 6.637 0.625 6.743 0.653 6.837 0.705 L 7.143 0.161 Z M 6.53 0 L 6.53 -0.625 C 6.208 -0.625 5.891 -0.542 5.61 -0.384 L 5.917 0.161 L 6.223 0.705 C 6.317 0.653 6.423 0.625 6.53 0.625 L 6.53 0 Z M 5.917 0.161 L 5.61 -0.384 C 5.329 -0.226 5.094 0.002 4.927 0.278 L 5.461 0.602 L 5.996 0.926 C 6.051 0.834 6.13 0.758 6.223 0.705 L 5.917 0.161 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.250,
    height: 2.500,
    viewBox: "-0.625 0 1.250 2.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 5.625,
      width: 1.25,
      height: 2.5,
      color: "rgb(35,20,5)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.625 0 C 0.625 -0.345 0.345 -0.625 0 -0.625 C -0.345 -0.625 -0.625 -0.345 -0.625 0 L 0 0 L 0.625 0 Z M -0.625 2.5 C -0.625 2.845 -0.345 3.125 0 3.125 C 0.345 3.125 0.625 2.845 0.625 2.5 L 0 2.5 L -0.625 2.5 Z M 0 0 L -0.625 0 L -0.625 2.5 L 0 2.5 L 0.625 2.5 L 0.625 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.006,
    height: 1.250,
    viewBox: "0 -0.625 0.006 1.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 10.625,
      width: 0.006,
      height: 1.25,
      color: "rgb(35,20,5)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.625 C -0.345 -0.625 -0.625 -0.345 -0.625 0 C -0.625 0.345 -0.345 0.625 0 0.625 L 0 0 L 0 -0.625 Z M 0.006 0.625 C 0.351 0.625 0.631 0.345 0.631 0 C 0.631 -0.345 0.351 -0.625 0.006 -0.625 L 0.006 0 L 0.006 0.625 Z M 0 0 L 0 0.625 L 0.006 0.625 L 0.006 0 L 0.006 -0.625 L 0 -0.625 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.3849999904632568,
      letterSpacing: "-0.200px",
      color: "rgb(35,20,5)",
      flexShrink: 0
    }
  }, "\uC8FC\uCC28 \uACF5\uAC04\uC774 \uBD80\uC871\uD558\uC624\uB2C8 \uB300\uC911\uAD50\uD1B5 \uC774\uC6A9\uC744 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(34,31,26)",
      display: "flex",
      flexDirection: "column",
      padding: "20px 20px 32px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10,
      backgroundColor: "rgb(50,46,37)",
      borderTop: "1px solid rgb(58,53,48)",
      borderRight: "1px solid rgb(58,53,48)",
      borderBottom: "1px solid rgb(58,53,48)",
      borderLeft: "1px solid rgb(58,53,48)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "9px 9px 9px 13px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 15,
      height: 15,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.25,
      top: 1.25,
      width: 12.5,
      height: 12.5,
      color: "rgb(207,201,189)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.5 6.25 L 11.875 6.25 C 11.875 9.357 9.357 11.875 6.25 11.875 L 6.25 12.5 L 6.25 13.125 C 10.047 13.125 13.125 10.047 13.125 6.25 L 12.5 6.25 Z M 6.25 12.5 L 6.25 11.875 C 3.143 11.875 0.625 9.357 0.625 6.25 L 0 6.25 L -0.625 6.25 C -0.625 10.047 2.453 13.125 6.25 13.125 L 6.25 12.5 Z M 0 6.25 L 0.625 6.25 C 0.625 3.143 3.143 0.625 6.25 0.625 L 6.25 0 L 6.25 -0.625 C 2.453 -0.625 -0.625 2.453 -0.625 6.25 L 0 6.25 Z M 6.25 0 L 6.25 0.625 C 9.357 0.625 11.875 3.143 11.875 6.25 L 12.5 6.25 L 13.125 6.25 C 13.125 2.453 10.047 -0.625 6.25 -0.625 L 6.25 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.250,
    height: 2.500,
    viewBox: "-0.625 0 1.250 2.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 7.5,
      width: 1.25,
      height: 2.5,
      color: "rgb(207,201,189)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.625 2.5 C -0.625 2.845 -0.345 3.125 0 3.125 C 0.345 3.125 0.625 2.845 0.625 2.5 L 0 2.5 L -0.625 2.5 Z M 0.625 0 C 0.625 -0.345 0.345 -0.625 0 -0.625 C -0.345 -0.625 -0.625 -0.345 -0.625 0 L 0 0 L 0.625 0 Z M 0 2.5 L 0.625 2.5 L 0.625 0 L 0 0 L -0.625 0 L -0.625 2.5 L 0 2.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.006,
    height: 1.250,
    viewBox: "0 -0.625 0.006 1.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.5,
      top: 5,
      width: 0.006,
      height: 1.25,
      color: "rgb(207,201,189)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.625 C -0.345 -0.625 -0.625 -0.345 -0.625 0 C -0.625 0.345 -0.345 0.625 0 0.625 L 0 0 L 0 -0.625 Z M 0.006 0.625 C 0.351 0.625 0.631 0.345 0.631 0 C 0.631 -0.345 0.351 -0.625 0.006 -0.625 L 0.006 0 L 0.006 0.625 Z M 0 0 L 0 0.625 L 0.006 0.625 L 0.006 0 L 0.006 -0.625 L 0 -0.625 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.4290000200271606,
      letterSpacing: "-0.200px",
      color: "rgb(246,238,220)",
      flexShrink: 0
    }
  }, "0\uC6D4 00\uC77C 00:00\uBD80\uD130 000\uD638\uC2E4 \uC785\uC2E4 \uC608\uC815")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 7,
      backgroundColor: "rgb(50,46,37)",
      display: "flex",
      flexDirection: "column",
      padding: "5px 0px 5px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: 1.3849999904632568,
      letterSpacing: "-0.200px",
      color: "rgb(246,238,220)",
      flexShrink: 0
    }
  }, "\uC548\uB0B4"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 324,
      display: "flex",
      flexDirection: "row",
      gap: 18,
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28.107,
      height: 52,
      opacity: 0.3,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.136,
    height: 44.987,
    viewBox: "0 0 17.136 44.987",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.833,
      top: 7.013,
      width: 17.136,
      height: 44.987,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.077 45.363 C 17.285 45.396 17.48 45.254 17.513 45.046 C 17.545 44.839 17.404 44.643 17.196 44.61 L 17.136 44.987 L 17.077 45.363 Z M 1.633 11.256 L 1.275 11.126 L 1.275 11.126 L 1.633 11.256 Z M 10.345 0.302 C 10.511 0.173 10.542 -0.066 10.413 -0.233 C 10.284 -0.4 10.045 -0.43 9.879 -0.302 L 10.112 0 L 10.345 0.302 Z M 17.136 44.987 L 17.196 44.61 C 9.856 43.45 4.924 38.3 2.386 31.837 C -0.155 25.367 -0.274 17.623 1.991 11.386 L 1.633 11.256 L 1.275 11.126 C -1.056 17.543 -0.93 25.478 1.676 32.116 C 4.286 38.761 9.403 44.15 17.077 45.363 L 17.136 44.987 Z M 1.633 11.256 L 1.991 11.386 C 3.598 6.962 6.618 3.181 10.345 0.302 L 10.112 0 L 9.879 -0.302 C 6.057 2.651 2.939 6.545 1.275 11.126 L 1.633 11.256 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28.107,
      height: 50.198,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.786,
    height: 14.091,
    viewBox: "0 0 3.786 14.091",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.577,
      top: 36.107,
      width: 3.786,
      height: 14.091,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.577 14.091 C 2.577 14.091 6.188 8.272 0.928 0 C 0.731 0.443 -1.855 7.69 2.577 14.091 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.998,
    height: 5.891,
    viewBox: "0 0 12.998 5.891",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.711,
      top: 42.127,
      width: 12.998,
      height: 5.891,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.998 5.71 C 12.998 5.71 6.379 7.467 0 0.025 C 0.481 -0.036 8.168 -0.395 12.998 5.71 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.894,
    height: 10.167,
    viewBox: "0 0 9.894 10.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 29.252,
      width: 9.894,
      height: 10.167,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.894 10.167 C 9.894 10.167 3.102 9.299 0 0 C 0.468 0.125 7.723 2.692 9.894 10.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.117,
    height: 12.807,
    viewBox: "0 0 6.117 12.807",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.605,
      top: 17.273,
      width: 6.117,
      height: 12.807,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.103 12.807 C 6.103 12.807 -0.051 9.802 0 0 C 0.403 0.27 6.449 5.03 6.103 12.807 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.926,
    height: 13.974,
    viewBox: "0 0 3.926 13.974",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.469,
      top: 6.224,
      width: 3.926,
      height: 13.974,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.221 13.974 C 3.221 13.974 -1.902 9.43 0.774 0 C 1.09 0.368 5.639 6.574 3.221 13.974 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.897,
    height: 13.164,
    viewBox: "0 0 3.897 13.164",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.11,
      top: 0,
      width: 3.897,
      height: 13.164,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.754 13.164 C 0.754 13.164 -2.143 7.275 3.419 0 C 3.567 0.439 5.394 7.574 0.754 13.164 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.279,
    height: 15.220,
    viewBox: "0 0 4.279 15.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.544,
      top: 28.606,
      width: 4.279,
      height: 15.22,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.704 15.22 C 0.704 15.22 6.279 10.161 3.504 0 C 3.156 0.403 -1.801 6.927 0.704 15.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.066,
    height: 13.198,
    viewBox: "0 0 6.066 13.198",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.206,
      top: 19.293,
      width: 6.066,
      height: 13.198,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 13.198 C 0 13.198 5.846 9.883 6.066 0 C 5.646 0.286 0.014 4.699 0 13.198 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.472,
    height: 10.537,
    viewBox: "0 0 10.472 10.537",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.909,
      top: 9.694,
      width: 10.472,
      height: 10.537,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.879 2.632 C 6.555 1.415 8.483 0.576 10.472 0 C 10.468 0.413 10.411 0.824 10.304 1.223 C 10.17 1.716 9.96 2.186 9.729 2.641 C 7.876 6.281 4.111 9.729 0 10.537 C 0.013 10.074 0.326 9.454 0.455 9 C 1.2 6.374 2.656 4.248 4.88 2.632 L 4.879 2.632 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.130,
    height: 6.130,
    viewBox: "0 0 12.130 6.130",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.976,
      top: 2.505,
      width: 12.13,
      height: 6.13,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.384 3.439 C 5.115 1.232 8.616 -0.004 12.127 0 C 12.211 1.104 10.757 2.123 9.995 2.699 C 8.25 4.018 6.414 4.917 4.28 5.493 C 2.967 5.847 1.491 6.133 0.127 6.13 C 0.086 6.13 0.04 6.127 0.015 6.095 C -0.021 6.049 0.014 5.983 0.048 5.936 C 0.318 5.561 0.666 5.253 0.95 4.889 C 1.374 4.346 1.849 3.872 2.385 3.439 L 2.384 3.439 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Serif KR\", ui-serif, Georgia, \"Times New Roman\", serif",
      fontWeight: 700,
      fontSize: 40,
      whiteSpace: "nowrap",
      lineHeight: 1.3580000400543213,
      letterSpacing: "-2.360px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "\u8A03  \u544A"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,1,0,0)",
      width: 28.107,
      height: 52,
      opacity: 0.3,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.136,
    height: 44.987,
    viewBox: "0 0 17.136 44.987",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.833,
      top: 7.013,
      width: 17.136,
      height: 44.987,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.077 45.363 C 17.285 45.396 17.48 45.254 17.513 45.046 C 17.545 44.839 17.404 44.643 17.196 44.61 L 17.136 44.987 L 17.077 45.363 Z M 1.633 11.256 L 1.275 11.126 L 1.275 11.126 L 1.633 11.256 Z M 10.345 0.302 C 10.511 0.173 10.542 -0.066 10.413 -0.233 C 10.284 -0.4 10.045 -0.43 9.879 -0.302 L 10.112 0 L 10.345 0.302 Z M 17.136 44.987 L 17.196 44.61 C 9.856 43.45 4.924 38.3 2.386 31.837 C -0.155 25.367 -0.274 17.623 1.991 11.386 L 1.633 11.256 L 1.275 11.126 C -1.056 17.543 -0.93 25.478 1.676 32.116 C 4.286 38.761 9.403 44.15 17.077 45.363 L 17.136 44.987 Z M 1.633 11.256 L 1.991 11.386 C 3.598 6.962 6.618 3.181 10.345 0.302 L 10.112 0 L 9.879 -0.302 C 6.057 2.651 2.939 6.545 1.275 11.126 L 1.633 11.256 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28.107,
      height: 50.198,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.786,
    height: 14.091,
    viewBox: "0 0 3.786 14.091",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.577,
      top: 36.107,
      width: 3.786,
      height: 14.091,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.577 14.091 C 2.577 14.091 6.188 8.272 0.928 0 C 0.731 0.443 -1.855 7.69 2.577 14.091 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.998,
    height: 5.891,
    viewBox: "0 0 12.998 5.891",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.711,
      top: 42.127,
      width: 12.998,
      height: 5.891,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.998 5.71 C 12.998 5.71 6.379 7.467 0 0.025 C 0.481 -0.036 8.168 -0.395 12.998 5.71 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.894,
    height: 10.167,
    viewBox: "0 0 9.894 10.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 29.252,
      width: 9.894,
      height: 10.167,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.894 10.167 C 9.894 10.167 3.102 9.299 0 0 C 0.468 0.125 7.723 2.692 9.894 10.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.117,
    height: 12.807,
    viewBox: "0 0 6.117 12.807",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.605,
      top: 17.273,
      width: 6.117,
      height: 12.807,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.103 12.807 C 6.103 12.807 -0.051 9.802 0 0 C 0.403 0.27 6.449 5.03 6.103 12.807 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.926,
    height: 13.974,
    viewBox: "0 0 3.926 13.974",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.469,
      top: 6.224,
      width: 3.926,
      height: 13.974,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.221 13.974 C 3.221 13.974 -1.902 9.43 0.774 0 C 1.09 0.368 5.639 6.574 3.221 13.974 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.897,
    height: 13.164,
    viewBox: "0 0 3.897 13.164",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.11,
      top: 0,
      width: 3.897,
      height: 13.164,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.754 13.164 C 0.754 13.164 -2.143 7.275 3.419 0 C 3.567 0.439 5.394 7.574 0.754 13.164 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.279,
    height: 15.220,
    viewBox: "0 0 4.279 15.220",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.544,
      top: 28.606,
      width: 4.279,
      height: 15.22,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.704 15.22 C 0.704 15.22 6.279 10.161 3.504 0 C 3.156 0.403 -1.801 6.927 0.704 15.22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.066,
    height: 13.198,
    viewBox: "0 0 6.066 13.198",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.206,
      top: 19.293,
      width: 6.066,
      height: 13.198,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 13.198 C 0 13.198 5.846 9.883 6.066 0 C 5.646 0.286 0.014 4.699 0 13.198 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.472,
    height: 10.537,
    viewBox: "0 0 10.472 10.537",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.909,
      top: 9.694,
      width: 10.472,
      height: 10.537,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.879 2.632 C 6.555 1.415 8.483 0.576 10.472 0 C 10.468 0.413 10.411 0.824 10.304 1.223 C 10.17 1.716 9.96 2.186 9.729 2.641 C 7.876 6.281 4.111 9.729 0 10.537 C 0.013 10.074 0.326 9.454 0.455 9 C 1.2 6.374 2.656 4.248 4.88 2.632 L 4.879 2.632 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.130,
    height: 6.130,
    viewBox: "0 0 12.130 6.130",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.976,
      top: 2.505,
      width: 12.13,
      height: 6.13,
      color: "rgb(212,207,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.384 3.439 C 5.115 1.232 8.616 -0.004 12.127 0 C 12.211 1.104 10.757 2.123 9.995 2.699 C 8.25 4.018 6.414 4.917 4.28 5.493 C 2.967 5.847 1.491 6.133 0.127 6.13 C 0.086 6.13 0.04 6.127 0.015 6.095 C -0.021 6.049 0.014 5.983 0.048 5.936 C 0.318 5.561 0.666 5.253 0.95 4.889 C 1.374 4.346 1.849 3.872 2.385 3.439 L 2.384 3.439 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 324,
      display: "flex",
      flexDirection: "row",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 120,
    height: 160,
    viewBox: "0 0 120 160",
    fill: "none",
    style: {
      position: "relative",
      width: 120,
      height: 160,
      overflow: "hidden",
      borderRadius: 8,
      flexShrink: 0,
      filter: "drop-shadow(0px 8px 24px rgba(0,0,0,0.45))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 C 0 3.582 3.582 0 8 0 L 112 0 C 116.418 0 120 3.582 120 8 L 120 152 C 120 156.418 116.418 160 112 160 L 8 160 C 3.582 160 0 156.418 0 152 L 0 8 Z",
    fill: "rgba(112,115,124,0.16)",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 324,
      height: 158,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 30,
      whiteSpace: "pre-wrap",
      lineHeight: "100%",
      color: "rgb(243,240,231)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(243,240,231)",
      fontSize: 32
    }
  }, "故테스트"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(243,240,231)",
      fontSize: 18,
      textTransform: "none",
      fontVariant: "normal"
    }
  }, "(세나)"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(243,240,231)",
      fontSize: 18
    }
  }, "님")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(182,176,162)",
      flexShrink: 0
    }
  }, "0\uC138 \xB7 \uC5EC\uC131")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.92,
      display: "flex",
      flexDirection: "column",
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(243,240,231)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "故 테스트님께서 6월 4일 선종하셨기에\n삼가 알려드립니다."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10,
      backgroundColor: "rgb(50,46,37)",
      borderTop: "1px solid rgb(58,53,48)",
      borderRight: "1px solid rgb(58,53,48)",
      borderBottom: "1px solid rgb(58,53,48)",
      borderLeft: "1px solid rgb(58,53,48)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 16px 12px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.867,
    height: 12.867,
    viewBox: "0 0 12.867 12.867",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.567,
      top: 1.567,
      width: 12.867,
      height: 12.867,
      color: "rgb(36,26,16)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.433 0 C 2.88 0 0 2.88 0 6.433 C 0 9.986 2.88 12.867 6.433 12.867 C 7.459 12.867 8.43 12.626 9.291 12.198 L 10.5 12.528 C 10.773 12.602 11.017 12.669 11.217 12.704 C 11.42 12.74 11.678 12.765 11.935 12.666 C 12.272 12.538 12.538 12.272 12.666 11.935 C 12.765 11.678 12.74 11.42 12.704 11.217 C 12.669 11.017 12.602 10.773 12.528 10.5 L 12.198 9.291 C 12.626 8.43 12.866 7.459 12.866 6.433 C 12.866 2.88 9.986 0 6.433 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(252,244,226)",
      flexShrink: 0
    }
  }, "\uC548\uB0B4 \uBA54\uC138\uC9C0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 4.500,
    viewBox: "0 0 9 4.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 6.75,
      width: 9,
      height: 4.5,
      color: "rgb(207,201,189)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.53 -0.53 C 0.237 -0.823 -0.237 -0.823 -0.53 -0.53 C -0.823 -0.237 -0.823 0.237 -0.53 0.53 L 0 0 L 0.53 -0.53 Z M 4.5 4.5 L 3.97 5.03 C 4.263 5.323 4.737 5.323 5.03 5.03 L 4.5 4.5 Z M 9.53 0.53 C 9.823 0.237 9.823 -0.237 9.53 -0.53 C 9.237 -0.823 8.763 -0.823 8.47 -0.53 L 9 0 L 9.53 0.53 Z M 0 0 L -0.53 0.53 L 3.97 5.03 L 4.5 4.5 L 5.03 3.97 L 0.53 -0.53 L 0 0 Z M 4.5 4.5 L 5.03 5.03 L 9.53 0.53 L 9 0 L 8.47 -0.53 L 3.97 3.97 L 4.5 4.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 101,
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px 10px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10,
      backgroundColor: "rgb(26,20,16)",
      borderTop: "1px solid rgb(58,53,48)",
      borderRight: "1px solid rgb(58,53,48)",
      borderBottom: "1px solid rgb(58,53,48)",
      borderLeft: "1px solid rgb(58,53,48)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "14px 18px 14px 18px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "var(--gold-200-2)",
      flexShrink: 0
    }
  }, "\uC544\uC774\uB9AC\uC2A4\uC2A4\uB9C8\uD2B8 \uC7A5\uB840\uC2DD\uC7A5"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "28.500px",
      color: "rgb(243,240,231)",
      flexShrink: 0
    }
  }, "VIP 1\uD638\uC2E4")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "32px 20px 32px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(92,87,75)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "4px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uC0C1 \uC8FC")), /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(92,87,75)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 250,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(212,207,196)",
      borderRight: "1px solid rgb(212,207,196)",
      borderBottom: "1px solid rgb(212,207,196)",
      borderLeft: "1px solid rgb(212,207,196)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(92,87,75)",
      flexShrink: 0
    }
  }, "\uC544\uB4E4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uAE40\uBBFC\uC900, \uAE40\uB3C4\uD604, \uAE40\uC11C\uC900"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(212,207,196)",
      borderRight: "1px solid rgb(212,207,196)",
      borderBottom: "1px solid rgb(212,207,196)",
      borderLeft: "1px solid rgb(212,207,196)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(92,87,75)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uBC30\uC6B0\uC790")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uAE40\uC21C\uC790"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(212,207,196)",
      borderRight: "1px solid rgb(212,207,196)",
      borderBottom: "1px solid rgb(212,207,196)",
      borderLeft: "1px solid rgb(212,207,196)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(92,87,75)",
      flexShrink: 0
    }
  }, "\uB538")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uAE40\uC9C0\uC6B0, \uAE40\uC11C\uC5F0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(212,207,196)",
      borderRight: "1px solid rgb(212,207,196)",
      borderBottom: "1px solid rgb(212,207,196)",
      borderLeft: "1px solid rgb(212,207,196)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(92,87,75)",
      flexShrink: 0
    }
  }, "\uC790\uBD80")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uBC15\uD558\uB098 "), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: "rgb(115,85,37)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.500,
    height: 7.500,
    viewBox: "0 0 7.500 7.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.25,
      top: 1.25,
      width: 7.5,
      height: 7.5,
      color: "rgb(236,233,227)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.508 3.246 C 2.108 4.425 3.075 5.387 4.254 5.992 L 5.171 5.075 C 5.283 4.963 5.45 4.925 5.596 4.975 C 6.063 5.129 6.567 5.213 7.083 5.213 C 7.313 5.213 7.5 5.4 7.5 5.629 L 7.5 7.083 C 7.5 7.313 7.313 7.5 7.083 7.5 C 3.171 7.5 0 4.329 0 0.417 C 0 0.187 0.187 0 0.417 0 L 1.875 0 C 2.104 0 2.292 0.187 2.292 0.417 C 2.292 0.938 2.375 1.438 2.529 1.904 C 2.575 2.05 2.542 2.213 2.425 2.329 L 1.508 3.246 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, ", \uBC15\uB450\uC6B8, \uBC15\uC138\uC5E3 "), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: "rgb(115,85,37)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.500,
    height: 7.500,
    viewBox: "0 0 7.500 7.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.25,
      top: 1.25,
      width: 7.5,
      height: 7.5,
      color: "rgb(236,233,227)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.508 3.246 C 2.108 4.425 3.075 5.387 4.254 5.992 L 5.171 5.075 C 5.283 4.963 5.45 4.925 5.596 4.975 C 6.063 5.129 6.567 5.213 7.083 5.213 C 7.313 5.213 7.5 5.4 7.5 5.629 L 7.5 7.083 C 7.5 7.313 7.313 7.5 7.083 7.5 C 3.171 7.5 0 4.329 0 0.417 C 0 0.187 0.187 0 0.417 0 L 1.875 0 C 2.104 0 2.292 0.187 2.292 0.417 C 2.292 0.938 2.375 1.438 2.529 1.904 C 2.575 2.05 2.542 2.213 2.425 2.329 L 1.508 3.246 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(92,87,75)",
      flexShrink: 0
    }
  }, "\uC0AC\uC704")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uC815\uD558\uB098 "), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: "rgb(115,85,37)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.500,
    height: 7.500,
    viewBox: "0 0 7.500 7.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.25,
      top: 1.25,
      width: 7.5,
      height: 7.5,
      color: "rgb(236,233,227)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.508 3.246 C 2.108 4.425 3.075 5.387 4.254 5.992 L 5.171 5.075 C 5.283 4.963 5.45 4.925 5.596 4.975 C 6.063 5.129 6.567 5.213 7.083 5.213 C 7.313 5.213 7.5 5.4 7.5 5.629 L 7.5 7.083 C 7.5 7.313 7.313 7.5 7.083 7.5 C 3.171 7.5 0 4.329 0 0.417 C 0 0.187 0.187 0 0.417 0 L 1.875 0 C 2.104 0 2.292 0.187 2.292 0.417 C 2.292 0.938 2.375 1.438 2.529 1.904 C 2.575 2.05 2.542 2.213 2.425 2.329 L 1.508 3.246 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, ", \uC815\uB450\uC6B8")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 155,
      height: 110,
      borderRadius: 12,
      backgroundColor: "rgb(251,250,246)",
      boxShadow: "0px 1px 2px -1px rgba(23,23,23,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 18px 16px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "rgb(239,236,227)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.999,
    height: 16.252,
    viewBox: "0 0 17.999 16.252",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.001,
      top: 3.874,
      width: 17.999,
      height: 16.252,
      color: "rgb(115,85,37)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 0.012 C 4.038 0.012 0 3.173 0 7.073 C 0 9.588 1.685 11.803 4.223 13.05 C 4.038 13.707 3.554 15.473 3.461 15.842 C 3.346 16.303 3.623 16.303 3.808 16.188 C 3.958 16.073 6.161 14.584 7.119 13.938 C 7.719 14.03 8.342 14.076 9 14.076 C 13.961 14.076 17.999 10.915 17.999 7.038 C 17.999 3.15 13.961 0 9 0 L 9 0.012 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9 0.012 L 9 1.165 L 10.154 1.165 L 10.154 0.012 L 9 0.012 Z M 4.223 13.05 L 5.334 13.361 L 5.593 12.437 L 4.731 12.014 L 4.223 13.05 Z M 3.808 16.188 L 4.419 17.166 L 4.467 17.137 L 4.511 17.102 L 3.808 16.188 Z M 7.119 13.938 L 7.294 12.798 L 6.848 12.729 L 6.474 12.982 L 7.119 13.938 Z M 9 0 L 9 -1.154 L 7.846 -1.154 L 7.846 0 L 9 0 Z M 9 0.012 L 9 -1.142 C 3.678 -1.142 -1.154 2.29 -1.154 7.073 L 0 7.073 L 1.154 7.073 C 1.154 4.056 4.398 1.165 9 1.165 L 9 0.012 Z M 0 7.073 L -1.154 7.073 C -1.154 10.144 0.897 12.702 3.714 14.085 L 4.223 13.05 L 4.731 12.014 C 2.472 10.905 1.154 9.032 1.154 7.073 L 0 7.073 Z M 4.223 13.05 L 3.112 12.738 C 2.928 13.392 2.439 15.174 2.342 15.562 L 3.461 15.842 L 4.581 16.122 C 4.668 15.771 5.148 14.023 5.334 13.361 L 4.223 13.05 Z M 3.461 15.842 L 2.342 15.562 C 2.292 15.764 2.25 16.038 2.309 16.333 C 2.376 16.664 2.574 17.025 2.962 17.24 C 3.309 17.433 3.653 17.421 3.864 17.383 C 4.083 17.344 4.272 17.258 4.419 17.166 L 3.808 16.188 L 3.196 15.21 C 3.251 15.175 3.336 15.133 3.455 15.112 C 3.566 15.092 3.812 15.073 4.082 15.223 C 4.392 15.395 4.531 15.676 4.572 15.881 C 4.606 16.05 4.574 16.15 4.581 16.122 L 3.461 15.842 Z M 3.808 16.188 L 4.511 17.102 C 4.502 17.11 4.524 17.093 4.611 17.033 C 4.684 16.982 4.784 16.914 4.905 16.831 C 5.145 16.667 5.463 16.45 5.808 16.217 C 6.496 15.751 7.286 15.217 7.764 14.894 L 7.119 13.938 L 6.474 12.982 C 5.55 13.605 3.292 15.129 3.104 15.273 L 3.808 16.188 Z M 7.119 13.938 L 6.944 15.078 C 7.606 15.18 8.288 15.23 9 15.23 L 9 14.076 L 9 12.923 C 8.396 12.923 7.832 12.88 7.294 12.798 L 7.119 13.938 Z M 9 14.076 L 9 15.23 C 14.318 15.23 19.153 11.8 19.153 7.038 L 17.999 7.038 L 16.846 7.038 C 16.846 10.03 13.604 12.923 9 12.923 L 9 14.076 Z M 17.999 7.038 L 19.153 7.038 C 19.153 2.264 14.317 -1.154 9 -1.154 L 9 0 L 9 1.154 C 13.605 1.154 16.846 4.036 16.846 7.038 L 17.999 7.038 Z M 9 0 L 7.846 0 L 7.846 0.012 L 9 0.012 L 10.154 0.012 L 10.154 0 L 9 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 155,
      height: 110,
      borderRadius: 12,
      backgroundColor: "rgb(251,250,246)",
      boxShadow: "0px 1px 2px -1px rgba(23,23,23,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 18px 16px 18px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "rgb(239,236,227)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16.001,
    viewBox: "0 0 16 16.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16.001,
      color: "rgb(115,84,38)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 7.718 L 15.294 7.718 L 15.294 7.718 L 16 7.718 Z M 8.188 15.436 L 8.197 14.73 L 8.186 14.73 L 8.188 15.436 Z M 4.8 14.702 L 5.094 14.06 C 4.944 13.991 4.775 13.977 4.616 14.02 L 4.8 14.702 Z M 0 16.001 L -0.671 15.782 C -0.751 16.028 -0.69 16.299 -0.512 16.487 C -0.333 16.675 -0.066 16.75 0.184 16.682 L 0 16.001 Z M 1.186 12.368 L 1.857 12.587 C 1.916 12.406 1.899 12.208 1.811 12.04 L 1.186 12.368 Z M 0.376 7.718 L 1.076 7.816 C 1.08 7.783 1.082 7.751 1.082 7.718 L 0.376 7.718 Z M 8.188 0.001 L 8.18 0.706 C 8.185 0.706 8.191 0.706 8.197 0.706 L 8.188 0.001 Z M 16 7.718 L 15.294 7.718 C 15.294 8.646 15.11 9.565 14.752 10.421 L 15.404 10.694 L 16.055 10.966 C 16.485 9.937 16.706 8.833 16.706 7.718 L 16 7.718 Z M 15.404 10.694 L 14.752 10.421 C 14.395 11.278 13.87 12.055 13.21 12.707 L 13.706 13.209 L 14.202 13.711 C 14.996 12.928 15.625 11.994 16.055 10.966 L 15.404 10.694 Z M 13.706 13.209 L 13.21 12.707 C 12.55 13.359 11.767 13.874 10.906 14.221 L 11.171 14.876 L 11.435 15.53 C 12.469 15.113 13.409 14.495 14.202 13.711 L 13.706 13.209 Z M 11.171 14.876 L 10.906 14.221 C 10.046 14.568 9.125 14.741 8.197 14.73 L 8.188 15.436 L 8.18 16.142 C 9.294 16.155 10.401 15.947 11.435 15.53 L 11.171 14.876 Z M 8.188 15.436 L 8.186 14.73 C 7.119 14.733 6.064 14.504 5.094 14.06 L 4.8 14.702 L 4.506 15.344 C 5.662 15.873 6.919 16.145 8.19 16.142 L 8.188 15.436 Z M 4.8 14.702 L 4.616 14.02 L -0.184 15.319 L 0 16.001 L 0.184 16.682 L 4.984 15.383 L 4.8 14.702 Z M 0 16.001 L 0.671 16.22 L 1.857 12.587 L 1.186 12.368 L 0.515 12.149 L -0.671 15.782 L 0 16.001 Z M 1.186 12.368 L 1.811 12.04 C 1.131 10.743 0.874 9.266 1.076 7.816 L 0.376 7.718 L -0.323 7.621 C -0.565 9.363 -0.256 11.138 0.561 12.696 L 1.186 12.368 Z M 0.376 7.718 L 1.082 7.718 C 1.082 6.79 1.266 5.871 1.624 5.015 L 0.973 4.743 L 0.321 4.471 C -0.108 5.5 -0.329 6.603 -0.329 7.718 L 0.376 7.718 Z M 0.973 4.743 L 1.624 5.015 C 1.982 4.159 2.506 3.382 3.166 2.73 L 2.67 2.227 L 2.174 1.725 C 1.381 2.509 0.751 3.442 0.321 4.471 L 0.973 4.743 Z M 2.67 2.227 L 3.166 2.73 C 3.826 2.077 4.609 1.563 5.47 1.215 L 5.206 0.561 L 4.942 -0.094 C 3.908 0.323 2.967 0.942 2.174 1.725 L 2.67 2.227 Z M 5.206 0.561 L 5.47 1.215 C 6.331 0.868 7.252 0.695 8.18 0.706 L 8.188 0.001 L 8.197 -0.705 C 7.082 -0.719 5.976 -0.511 4.942 -0.094 L 5.206 0.561 Z M 8.188 0.001 L 8.197 0.706 C 9.125 0.695 10.046 0.868 10.906 1.215 L 11.171 0.561 L 11.435 -0.094 C 10.401 -0.511 9.294 -0.719 8.18 -0.705 L 8.188 0.001 Z M 11.171 0.561 L 10.906 1.215 C 11.767 1.563 12.55 2.077 13.21 2.73 L 13.706 2.227 L 14.202 1.725 C 13.409 0.942 12.469 0.323 11.435 -0.094 L 11.171 0.561 Z M 13.706 2.227 L 13.21 2.73 C 13.87 3.382 14.395 4.159 14.752 5.015 L 15.404 4.743 L 16.055 4.471 C 15.625 3.442 14.996 2.509 14.202 1.725 L 13.706 2.227 Z M 15.404 4.743 L 14.752 5.015 C 15.11 5.871 15.294 6.79 15.294 7.718 L 16 7.718 L 16.706 7.718 C 16.706 6.603 16.485 5.5 16.055 4.471 L 15.404 4.743 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 3,
    viewBox: "0 0 6 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 10.5,
      width: 6,
      height: 3,
      color: "rgb(115,84,38)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 6 0.75 C 6.414 0.75 6.75 0.414 6.75 0 C 6.75 -0.414 6.414 -0.75 6 -0.75 L 6 0 L 6 0.75 Z M 0 2.25 C -0.414 2.25 -0.75 2.586 -0.75 3 C -0.75 3.414 -0.414 3.75 0 3.75 L 0 3 L 0 2.25 Z M 3.6 3.75 C 4.014 3.75 4.35 3.414 4.35 3 C 4.35 2.586 4.014 2.25 3.6 2.25 L 3.6 3 L 3.6 3.75 Z M 0 0 L 0 0.75 L 6 0.75 L 6 0 L 6 -0.75 L 0 -0.75 L 0 0 Z M 0 3 L 0 3.75 L 3.6 3.75 L 3.6 3 L 3.6 2.25 L 0 2.25 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uBB38\uC790\uB85C \uACF5\uC720")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 88,
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(251,250,246)",
      boxShadow: "0px 1px 2px -1px rgba(23,23,23,0.08)",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      padding: "16px 18px 16px 18px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "rgb(239,236,227)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon7, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0,
      color: "rgb(115,84,38)"
    },
    name: "envelope",
    theme: "light"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uBD80\uC758\uAE08 \uBCF4\uB0B4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(111,105,92)",
      flexShrink: 0
    }
  }, "\uAC04\uD3B8\uD558\uAC8C \uB9C8\uC74C \uC804\uD558\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.300,
    height: 14.800,
    viewBox: "0 0 8.300 14.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.6,
      top: 4.6,
      width: 8.3,
      height: 14.8,
      color: "rgb(112,105,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.264 0.264 C -0.088 0.615 -0.088 1.185 0.264 1.536 L 6.127 7.4 L 0.264 13.264 C -0.088 13.615 -0.088 14.185 0.264 14.536 C 0.615 14.888 1.185 14.888 1.536 14.536 L 8.036 8.036 C 8.388 7.685 8.388 7.115 8.036 6.764 L 1.536 0.264 C 1.185 -0.088 0.615 -0.088 0.264 0.264 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("svg", {
    height: 8,
    viewBox: "0 0 360 8",
    fill: "none",
    style: {
      position: "relative",
      height: 8,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(226,222,215)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 360 0 L 360 8 L 0 8 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(51,44,34)",
      display: "flex",
      flexDirection: "column",
      padding: "32px 20px 32px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(182,176,162)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "4px",
      color: "rgb(243,240,231)",
      flexShrink: 0
    }
  }, "\uC7A5\uB840 \uC77C\uC815")), /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(182,176,162)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 110,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(182,176,162)",
      flexShrink: 0
    }
  }, "\uBC1C\uC778")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      whiteSpace: "nowrap",
      lineHeight: 1.4119999408721924,
      color: "rgb(243,240,231)",
      flexShrink: 0
    }
  }, "03\uC6D4 15\uC77C(\uD1A0) 05:30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(182,176,162)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC785\uAD00 2026.03.14(\uAE08) 15:00")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(182,176,162)",
      flexShrink: 0
    }
  }, "\uC77C\uD3EC 2026.03.14(\uAE08)"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(58,53,48)",
      borderRight: "1px solid rgb(58,53,48)",
      borderBottom: "1px solid rgb(58,53,48)",
      borderLeft: "1px solid rgb(58,53,48)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(182,176,162)",
      flexShrink: 0
    }
  }, "\uC7A5\uC9C0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 9,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(74,64,48)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 10px 3px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(226,201,141)",
      flexShrink: 0
    }
  }, "1\uCC28\uC7A5\uC9C0")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(243,240,231)",
      flexShrink: 0
    }
  }, "\uCDA9\uC8FC\uD654\uC7A5\uC7A5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgb(74,64,48)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 10px 3px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(226,201,141)",
      flexShrink: 0
    }
  }, "2\uCC28\uC7A5\uC9C0")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(243,240,231)",
      flexShrink: 0
    }
  }, "\uCDA9\uC8FC\uACF5\uC6D0\uBB18\uC9C0"))))), /*#__PURE__*/React.createElement("svg", {
    height: 8,
    viewBox: "0 0 360 8",
    fill: "none",
    style: {
      position: "relative",
      height: 8,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(226,222,215)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 360 0 L 360 8 L 0 8 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "32px 20px 32px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(92,87,75)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "4px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uBE48\uC18C \uC704\uCE58")), /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(92,87,75)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 176,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 160,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(74,64,48)",
      boxShadow: "inset 0 0 0 1px rgb(232,220,200)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 93,
      top: 72,
      width: 115,
      height: 22,
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(92,87,75)"
    }
  }, "\uC7A5\uB840\uC2DD\uC7A5 \uC704\uCE58 \uC9C0\uB3C4"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 256,
    height: 256,
    viewBox: "0 0 256 256",
    fill: "none",
    style: {
      position: "absolute",
      left: -34,
      top: 245,
      width: 256,
      height: 256,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 256 0 L 256 256 L 0 256 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 256,
    height: 256,
    viewBox: "0 0 256 256",
    fill: "none",
    style: {
      position: "absolute",
      left: 222,
      top: -11,
      width: 256,
      height: 256,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 256 0 L 256 256 L 0 256 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 256,
    height: 256,
    viewBox: "0 0 256 256",
    fill: "none",
    style: {
      position: "absolute",
      left: -34,
      top: -11,
      width: 256,
      height: 256,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 256 0 L 256 256 L 0 256 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 256,
    height: 256,
    viewBox: "0 0 256 256",
    fill: "none",
    style: {
      position: "absolute",
      left: 222,
      top: 245,
      width: 256,
      height: 256,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 256 0 L 256 256 L 0 256 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 256,
    height: 256,
    viewBox: "0 0 256 256",
    fill: "none",
    style: {
      position: "absolute",
      left: 478,
      top: -11,
      width: 256,
      height: 256,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 256 0 L 256 256 L 0 256 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 256,
    height: 256,
    viewBox: "0 0 256 256",
    fill: "none",
    style: {
      position: "absolute",
      left: 478,
      top: 245,
      width: 256,
      height: 256,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 256 0 L 256 256 L 0 256 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 171,
      top: 118,
      height: 32,
      overflow: "hidden",
      borderRadius: 50,
      backgroundColor: "rgb(251,250,246)",
      boxShadow: "0px 10px 15px -5px rgba(23,23,23,0.1), 0px 24px 38px -10px rgba(23,23,23,0.12)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      height: 28,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: 1.4290000200271606,
      letterSpacing: "-0.200px",
      color: "rgb(32,25,15)",
      flexShrink: 0
    }
  }, "\uD2F0\uB9F5 \uBC14\uB85C\uAC00\uAE30")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "16px 0px 16px 0px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(32,25,15)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC11C\uC6B8 \uC601\uB4F1\uD3EC\uAD6C \uAD6D\uC81C\uAE08\uC735\uB85C2\uAE38 37")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.4290000200271606,
      letterSpacing: "-0.200px",
      color: "rgb(92,87,75)",
      flexShrink: 0
    }
  }, "[\uC9C0\uBC88] \uC5EC\uC758\uB3C4\uB3D9 26 S-TRENUE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 6,
      backgroundColor: "rgb(251,250,246)",
      boxShadow: "inset 0 0 0 1px rgb(207,201,189)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.667,
      top: 6.667,
      width: 10,
      height: 10,
      color: "rgb(115,85,37)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.875 0 L 1.875 0.557 L 8.125 0.557 L 8.125 0 L 8.125 -0.557 L 1.875 -0.557 L 1.875 0 Z M 8.125 0 L 8.125 0.557 C 8.853 0.557 9.443 1.147 9.443 1.875 L 10 1.875 L 10.557 1.875 C 10.557 0.532 9.468 -0.557 8.125 -0.557 L 8.125 0 Z M 10 1.875 L 9.443 1.875 L 9.443 8.125 L 10 8.125 L 10.557 8.125 L 10.557 1.875 L 10 1.875 Z M 10 8.125 L 9.443 8.125 C 9.443 8.853 8.853 9.443 8.125 9.443 L 8.125 10 L 8.125 10.557 C 9.468 10.557 10.557 9.468 10.557 8.125 L 10 8.125 Z M 8.125 10 L 8.125 9.443 L 1.875 9.443 L 1.875 10 L 1.875 10.557 L 8.125 10.557 L 8.125 10 Z M 1.875 10 L 1.875 9.443 C 1.147 9.443 0.557 8.853 0.557 8.125 L 0 8.125 L -0.557 8.125 C -0.557 9.468 0.532 10.557 1.875 10.557 L 1.875 10 Z M 0 8.125 L 0.557 8.125 L 0.557 1.875 L 0 1.875 L -0.557 1.875 L -0.557 8.125 L 0 8.125 Z M 0 1.875 L 0.557 1.875 C 0.557 1.147 1.147 0.557 1.875 0.557 L 1.875 0 L 1.875 -0.557 C 0.532 -0.557 -0.557 0.532 -0.557 1.875 L 0 1.875 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.333,
      top: 3.333,
      width: 10,
      height: 10,
      color: "rgb(115,85,37)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.557 10 C -0.557 10.307 -0.307 10.557 0 10.557 C 0.307 10.557 0.557 10.307 0.557 10 L 0 10 L -0.557 10 Z M 0.625 0 L 0.625 0.557 L 0.625 0 Z M 10 0.557 C 10.307 0.557 10.557 0.307 10.557 0 C 10.557 -0.307 10.307 -0.557 10 -0.557 L 10 0 L 10 0.557 Z M 0 10 L 0.557 10 L 0.557 0.625 L 0 0.625 L -0.557 0.625 L -0.557 10 L 0 10 Z M 0 0.625 L 0.557 0.625 C 0.557 0.607 0.564 0.589 0.577 0.577 L 0.183 0.183 L -0.211 -0.211 C -0.432 0.011 -0.557 0.312 -0.557 0.625 L 0 0.625 Z M 0.183 0.183 L 0.577 0.577 C 0.589 0.564 0.607 0.557 0.625 0.557 L 0.625 0 L 0.625 -0.557 C 0.312 -0.557 0.011 -0.432 -0.211 -0.211 L 0.183 0.183 Z M 0.625 0 L 0.625 0.557 L 10 0.557 L 10 0 L 10 -0.557 L 0.625 -0.557 L 0.625 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.4290000200271606,
      letterSpacing: "-0.200px",
      color: "rgb(115,85,37)",
      flexShrink: 0
    }
  }, "\uACC4\uC88C\uBCF5\uC0AC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "16px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(251,250,246)",
      boxShadow: "inset 0 0 0 1px rgb(212,207,196), 0px 1px 2px -1px rgba(23,23,23,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      borderRadius: 12,
      backgroundColor: "rgb(239,236,227)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.917,
    height: 15,
    viewBox: "0 0 14.917 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 14.917,
      height: 15,
      color: "rgb(115,85,37)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 6.5 C 4.202 8.872 6.128 10.798 8.5 12 L 10.333 10.167 C 10.441 10.061 10.576 9.987 10.722 9.951 C 10.869 9.916 11.023 9.921 11.167 9.967 C 12.109 10.273 13.093 10.431 14.083 10.433 C 14.304 10.433 14.516 10.521 14.673 10.677 C 14.829 10.834 14.917 11.046 14.917 11.267 L 14.917 14.167 C 14.917 14.388 14.829 14.6 14.673 14.756 C 14.516 14.912 14.304 15 14.083 15 C 10.341 14.978 6.759 13.476 4.12 10.821 C 1.481 8.167 0 4.576 0 0.833 C 0 0.612 0.088 0.4 0.244 0.244 C 0.4 0.088 0.612 0 0.833 0 L 3.75 0 C 3.971 0 4.183 0.088 4.339 0.244 C 4.496 0.4 4.583 0.612 4.583 0.833 C 4.583 1.833 4.75 2.833 5.05 3.75 C 5.094 3.895 5.098 4.049 5.061 4.196 C 5.025 4.342 4.949 4.476 4.842 4.583 L 3.008 6.5 L 3 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20.800px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uC804\uD654\uD558\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(251,250,246)",
      boxShadow: "inset 0 0 0 1px rgb(212,207,196), 0px 1px 2px -1px rgba(23,23,23,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      borderRadius: 12,
      backgroundColor: "rgb(239,236,227)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.667,
    height: 16.667,
    viewBox: "0 0 11.667 16.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.167,
      top: 1.667,
      width: 11.667,
      height: 16.667,
      color: "rgb(115,85,37)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.833 L -0.833 5.833 L 0 5.833 Z M 5.833 16.667 L 5.206 17.215 L 5.833 17.932 L 6.46 17.215 L 5.833 16.667 Z M 5.833 0 L 5.833 -0.833 C 4.065 -0.833 2.37 -0.131 1.119 1.119 L 1.709 1.709 L 2.298 2.298 C 3.235 1.36 4.507 0.833 5.833 0.833 L 5.833 0 Z M 1.709 1.709 L 1.119 1.119 C -0.131 2.37 -0.833 4.065 -0.833 5.833 L 0 5.833 L 0.833 5.833 C 0.833 4.507 1.36 3.235 2.298 2.298 L 1.709 1.709 Z M 0 5.833 L -0.833 5.833 C -0.833 7.048 -0.414 8.373 0.152 9.627 C 0.724 10.894 1.48 12.159 2.223 13.275 C 2.969 14.393 3.712 15.375 4.269 16.077 C 4.547 16.429 4.78 16.712 4.944 16.907 C 5.026 17.005 5.09 17.081 5.135 17.133 C 5.157 17.159 5.175 17.179 5.187 17.193 C 5.193 17.2 5.197 17.205 5.201 17.209 C 5.202 17.211 5.204 17.212 5.204 17.213 C 5.205 17.214 5.205 17.214 5.206 17.215 C 5.206 17.215 5.206 17.215 5.206 17.215 C 5.206 17.215 5.206 17.215 5.833 16.667 C 6.46 16.118 6.461 16.118 6.461 16.118 C 6.461 16.118 6.461 16.118 6.461 16.118 C 6.46 16.118 6.46 16.118 6.46 16.117 C 6.46 16.117 6.459 16.116 6.458 16.115 C 6.455 16.112 6.452 16.108 6.446 16.102 C 6.436 16.09 6.421 16.072 6.401 16.048 C 6.36 16.001 6.299 15.93 6.222 15.837 C 6.066 15.652 5.843 15.381 5.575 15.042 C 5.038 14.365 4.323 13.42 3.61 12.35 C 2.895 11.278 2.192 10.096 1.671 8.941 C 1.143 7.772 0.833 6.702 0.833 5.833 L 0 5.833 Z M 5.833 16.667 C 6.46 17.215 6.461 17.215 6.461 17.215 C 6.461 17.215 6.461 17.215 6.461 17.215 C 6.461 17.214 6.462 17.214 6.462 17.213 C 6.463 17.212 6.464 17.211 6.466 17.209 C 6.469 17.205 6.474 17.2 6.48 17.193 C 6.492 17.179 6.509 17.159 6.532 17.133 C 6.576 17.081 6.641 17.005 6.723 16.907 C 6.887 16.712 7.119 16.429 7.398 16.077 C 7.955 15.375 8.698 14.393 9.443 13.275 C 10.187 12.159 10.942 10.894 11.515 9.627 C 12.081 8.373 12.5 7.048 12.5 5.833 L 11.667 5.833 L 10.833 5.833 C 10.833 6.702 10.523 7.772 9.996 8.941 C 9.474 10.096 8.771 11.278 8.057 12.35 C 7.344 13.42 6.629 14.365 6.092 15.042 C 5.823 15.381 5.6 15.652 5.445 15.837 C 5.368 15.93 5.307 16.001 5.266 16.048 C 5.246 16.072 5.23 16.09 5.22 16.102 C 5.215 16.108 5.211 16.112 5.209 16.115 C 5.208 16.116 5.207 16.117 5.207 16.117 C 5.206 16.118 5.206 16.118 5.206 16.118 C 5.206 16.118 5.206 16.118 5.206 16.118 C 5.206 16.118 5.206 16.118 5.833 16.667 Z M 11.667 5.833 L 12.5 5.833 C 12.5 4.065 11.798 2.37 10.547 1.119 L 9.958 1.709 L 9.369 2.298 C 10.307 3.235 10.833 4.507 10.833 5.833 L 11.667 5.833 Z M 9.958 1.709 L 10.547 1.119 C 9.297 -0.131 7.601 -0.833 5.833 -0.833 L 5.833 0 L 5.833 0.833 C 7.159 0.833 8.431 1.36 9.369 2.298 L 9.958 1.709 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.167,
    height: 4.167,
    viewBox: "0 0 4.167 4.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.917,
      top: 5.417,
      width: 4.167,
      height: 4.167,
      color: "rgb(115,85,37)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.167 2.083 L 3.333 2.083 C 3.333 2.774 2.774 3.333 2.083 3.333 L 2.083 4.167 L 2.083 5 C 3.694 5 5 3.694 5 2.083 L 4.167 2.083 Z M 2.083 4.167 L 2.083 3.333 C 1.393 3.333 0.833 2.774 0.833 2.083 L 0 2.083 L -0.833 2.083 C -0.833 3.694 0.473 5 2.083 5 L 2.083 4.167 Z M 0 2.083 L 0.833 2.083 C 0.833 1.393 1.393 0.833 2.083 0.833 L 2.083 0 L 2.083 -0.833 C 0.473 -0.833 -0.833 0.473 -0.833 2.083 L 0 2.083 Z M 2.083 0 L 2.083 0.833 C 2.774 0.833 3.333 1.393 3.333 2.083 L 4.167 2.083 L 5 2.083 C 5 0.473 3.694 -0.833 2.083 -0.833 L 2.083 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20.800px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uC624\uC2DC\uB294 \uAE38"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(251,250,246)",
      boxShadow: "inset 0 0 0 1px rgb(212,207,196), 0px 1px 2px -1px rgba(23,23,23,0.1)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "14px 16px 14px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      borderRadius: 12,
      backgroundColor: "rgb(239,236,227)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 15,
      height: 15,
      color: "rgb(115,85,37)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 7.5 L 14.167 7.5 C 14.167 11.182 11.182 14.167 7.5 14.167 L 7.5 15 L 7.5 15.833 C 12.102 15.833 15.833 12.102 15.833 7.5 L 15 7.5 Z M 7.5 15 L 7.5 14.167 C 3.818 14.167 0.833 11.182 0.833 7.5 L 0 7.5 L -0.833 7.5 C -0.833 12.102 2.898 15.833 7.5 15.833 L 7.5 15 Z M 0 7.5 L 0.833 7.5 C 0.833 3.818 3.818 0.833 7.5 0.833 L 7.5 0 L 7.5 -0.833 C 2.898 -0.833 -0.833 2.898 -0.833 7.5 L 0 7.5 Z M 7.5 0 L 7.5 0.833 C 11.182 0.833 14.167 3.818 14.167 7.5 L 15 7.5 L 15.833 7.5 C 15.833 2.898 12.102 -0.833 7.5 -0.833 L 7.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 1.667,
    viewBox: "0 -0.833 15 1.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 10,
      width: 15,
      height: 1.6666666269302368,
      color: "rgb(115,85,37)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.833 C -0.46 -0.833 -0.833 -0.46 -0.833 0 C -0.833 0.46 -0.46 0.833 0 0.833 L 0 0 L 0 -0.833 Z M 15 0.833 C 15.46 0.833 15.833 0.46 15.833 0 C 15.833 -0.46 15.46 -0.833 15 -0.833 L 15 0 L 15 0.833 Z M 0 0 L 0 0.833 L 15 0.833 L 15 0 L 15 -0.833 L 0 -0.833 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.460,
    height: 15,
    viewBox: "0 0 5.460 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.27,
      top: 2.5,
      width: 5.46,
      height: 15,
      color: "rgb(115,85,37)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.73 0 L 3.368 -0.536 L 2.73 -1.296 L 2.092 -0.536 L 2.73 0 Z M 5.46 7.5 L 6.294 7.5 L 5.46 7.5 Z M 2.73 15 L 2.092 15.536 L 2.73 16.296 L 3.368 15.536 L 2.73 15 Z M 2.73 0 L 2.092 0.536 C 3.729 2.487 4.627 4.953 4.627 7.5 L 5.46 7.5 L 6.294 7.5 C 6.294 4.561 5.258 1.716 3.368 -0.536 L 2.73 0 Z M 5.46 7.5 L 4.627 7.5 C 4.627 10.047 3.729 12.513 2.092 14.464 L 2.73 15 L 3.368 15.536 C 5.258 13.284 6.294 10.439 6.294 7.5 L 5.46 7.5 Z M 2.73 15 L 3.368 14.464 C 1.731 12.513 0.833 10.047 0.833 7.5 L 0 7.5 L -0.833 7.5 C -0.833 10.439 0.202 13.284 2.092 15.536 L 2.73 15 Z M 0 7.5 L 0.833 7.5 C 0.833 4.953 1.731 2.487 3.368 0.536 L 2.73 0 L 2.092 -0.536 C 0.202 1.716 -0.833 4.561 -0.833 7.5 L 0 7.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20.800px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uD648\uD398\uC774\uC9C0")))))), /*#__PURE__*/React.createElement("svg", {
    height: 8,
    viewBox: "0 0 360 8",
    fill: "none",
    style: {
      position: "relative",
      height: 8,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(226,222,215)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 360 0 L 360 8 L 0 8 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "32px 20px 32px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(92,87,75)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uAF43\uC73C\uB85C \uB9C8\uC74C\uC744 \uBCF4\uB0B4\uC2E0 \uBD84")), /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 1,
    viewBox: "0 0 22 1",
    fill: "none",
    style: {
      position: "relative",
      width: 22,
      height: 1,
      flexShrink: 0,
      color: "rgb(92,87,75)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 22 0 L 22 1 L 0 1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 88,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(212,207,196)",
      borderRight: "1px solid rgb(212,207,196)",
      borderBottom: "1px solid rgb(212,207,196)",
      borderLeft: "1px solid rgb(212,207,196)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      borderRadius: 12,
      backgroundColor: "rgb(226,222,215)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      borderRadius: 999,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      color: "rgb(115,85,37)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.524 0 L 9.363 0 C 9.558 0.113 9.725 0.14 9.798 0.409 C 9.817 0.477 9.824 0.553 9.814 0.625 C 9.718 1.057 9.523 1.541 9.308 1.924 C 9.076 2.338 8.786 2.607 8.507 2.949 C 9.069 3.054 9.942 3.497 10.31 3.963 C 10.385 4.057 10.419 4.237 10.387 4.352 C 10.291 4.7 9.662 5.162 9.383 5.347 C 8.917 5.654 8.091 5.891 7.534 5.862 C 7.472 6.077 7.425 6.247 7.337 6.453 C 7.029 7.175 6.421 7.849 5.738 8.229 C 5.647 8.279 5.556 8.326 5.464 8.372 C 5.77 9.487 5.676 10.478 5.099 11.497 C 5.028 11.623 4.936 11.757 4.87 11.877 C 4.929 11.961 4.992 12.037 5.053 12.119 C 5.539 12.778 5.805 13.579 5.793 14.401 C 5.79 14.6 5.761 14.817 5.734 15.015 C 6.77 15.598 7.541 16.321 7.873 17.508 C 7.885 17.551 7.896 17.594 7.907 17.637 C 8.152 17.643 8.435 17.643 8.672 17.685 C 9.426 17.818 10.197 18.218 10.724 18.777 C 11.343 19.433 11.694 20.3 11.707 21.206 C 11.901 21.211 12.095 21.213 12.289 21.21 C 12.282 21.097 12.3 20.904 12.314 20.788 C 12.402 20.081 12.698 19.417 13.165 18.882 C 13.838 18.123 14.784 17.67 15.792 17.622 C 15.902 17.616 16.015 17.616 16.125 17.617 C 16.197 17.388 16.267 17.14 16.361 16.921 C 16.724 16.08 17.342 15.487 18.14 15.069 L 18.283 14.995 C 18.041 14.025 18.368 12.891 19.001 12.141 C 19.052 12.081 19.126 11.994 19.169 11.929 C 18.444 10.968 18.176 9.865 18.448 8.686 C 18.461 8.631 18.516 8.44 18.491 8.395 C 18.422 8.332 18.254 8.256 18.167 8.206 C 18.054 8.141 17.998 8.102 17.894 8.024 C 17.182 7.479 16.669 6.711 16.436 5.841 C 16.157 5.824 15.896 5.81 15.622 5.743 C 15.057 5.604 14.571 5.334 14.13 4.957 C 13.703 4.599 13.324 4.197 13.895 3.729 C 14.22 3.462 14.556 3.269 14.944 3.107 C 15.107 3.039 15.295 3.003 15.466 2.961 L 15.458 2.95 C 15.35 2.807 15.221 2.672 15.109 2.525 C 14.756 2.064 14.526 1.582 14.361 1.026 C 14.257 0.677 14.141 0.349 14.493 0.079 C 14.536 0.045 14.586 0.028 14.627 0 L 15.384 0 C 15.494 0.049 15.661 0.05 15.783 0.079 C 15.942 0.116 16.101 0.154 16.257 0.203 C 17.264 0.536 18.12 1.227 18.563 2.211 C 18.778 2.689 18.922 3.366 18.847 3.881 C 18.928 3.968 19.047 4.054 19.138 4.135 C 19.258 4.244 19.368 4.356 19.478 4.475 C 19.564 3.943 19.737 3.486 20.016 3.03 C 20.156 2.801 20.395 2.404 20.724 2.489 C 21.093 2.585 21.49 3.142 21.711 3.444 C 22.264 4.279 22.507 5.247 22.315 6.24 C 22.215 6.759 21.997 7.248 21.678 7.668 C 21.598 7.775 21.399 8.009 21.351 8.106 C 21.407 8.346 21.468 8.604 21.534 8.841 C 21.596 8.717 21.668 8.631 21.743 8.52 C 21.965 8.194 22.234 7.91 22.535 7.658 C 22.653 7.559 22.794 7.405 22.943 7.362 C 23.372 7.239 23.592 7.517 23.679 7.897 C 23.739 8.159 23.832 8.414 23.894 8.677 C 23.919 8.769 23.965 9.024 24 9.092 L 24 9.689 C 23.943 9.831 23.946 10.013 23.913 10.164 C 23.713 11.101 23.171 11.992 22.388 12.544 C 22.315 12.595 22.247 12.65 22.169 12.694 C 22.063 12.757 21.926 12.819 21.834 12.897 C 21.815 12.982 21.716 13.528 21.734 13.576 C 21.778 13.574 21.99 13.446 22.05 13.415 C 22.271 13.298 22.497 13.208 22.731 13.122 C 23.226 12.919 23.702 12.709 24 13.346 L 24 13.853 C 23.954 13.964 23.935 14.17 23.908 14.297 C 23.817 14.724 23.691 15.078 23.507 15.472 C 23.145 16.247 22.581 16.861 21.799 17.212 C 21.372 17.408 20.67 17.58 20.195 17.532 C 20.049 17.735 19.922 17.957 19.778 18.152 C 20.327 18.117 20.932 18.243 21.448 18.422 C 21.746 18.525 22.053 18.667 22.067 19.034 C 22.079 19.377 21.689 19.766 21.47 20.006 C 20.814 20.724 19.876 21.304 18.885 21.315 C 18.121 21.326 17.698 21.101 17.054 20.745 C 16.763 20.897 16.486 21.086 16.183 21.242 C 16.739 21.458 17.231 21.862 17.648 22.275 C 18.387 23.007 17.884 23.35 17.173 23.665 C 16.281 24.061 15.256 24.122 14.346 23.762 C 13.78 23.535 13.278 23.171 12.885 22.702 C 12.839 22.649 12.576 22.29 12.574 22.29 C 12.376 22.231 11.646 22.273 11.445 22.259 C 11.305 22.445 11.209 22.617 11.055 22.8 C 10.551 23.39 9.78 23.855 9.007 23.953 C 8.206 24.055 7.358 23.916 6.636 23.553 C 6.367 23.418 6.059 23.339 6.021 22.986 C 5.996 22.765 6.091 22.591 6.226 22.426 C 6.65 21.925 7.145 21.539 7.729 21.25 C 7.571 21.119 7.248 20.907 7.065 20.793 C 6.852 20.897 6.67 20.994 6.445 21.077 C 5.676 21.362 4.918 21.381 4.142 21.106 C 3.401 20.848 2.776 20.345 2.29 19.732 C 2.188 19.597 2.071 19.466 1.998 19.312 C 1.827 18.95 2.037 18.629 2.372 18.494 C 2.841 18.306 3.317 18.193 3.82 18.158 C 3.964 18.147 4.091 18.135 4.237 18.139 C 4.121 17.973 3.907 17.697 3.818 17.529 C 3.525 17.511 3.229 17.491 2.942 17.434 C 2.28 17.304 1.513 16.916 1.067 16.4 C 0.593 15.853 0.275 15.151 0.122 14.446 C 0.1 14.346 0.023 13.909 0 13.866 L 0 13.398 C 0.026 13.361 0.047 13.296 0.068 13.253 C 0.34 12.688 0.921 12.985 1.319 13.152 C 1.672 13.301 1.978 13.461 2.311 13.603 C 2.242 13.37 2.221 13.091 2.125 12.868 C 2.111 12.836 2.041 12.799 2.009 12.78 C 1.78 12.649 1.554 12.509 1.354 12.335 C 0.727 11.8 0.283 11.082 0.091 10.276 C 0.066 10.17 0.046 9.944 0 9.859 L 0 9.104 C 0.046 9.026 0.053 8.685 0.087 8.552 C 0.181 8.191 0.259 7.623 0.593 7.408 C 0.938 7.185 1.237 7.493 1.474 7.705 C 1.861 8.051 2.23 8.42 2.493 8.874 C 2.542 8.608 2.606 8.366 2.674 8.104 C 2.583 7.98 2.453 7.839 2.356 7.718 C 1.451 6.587 1.378 5.032 2.092 3.784 C 2.283 3.451 2.854 2.615 3.237 2.51 C 3.368 2.473 3.509 2.491 3.627 2.559 C 3.919 2.728 4.223 3.445 4.339 3.77 C 4.412 3.978 4.495 4.31 4.549 4.527 C 4.664 4.36 4.821 4.206 4.958 4.055 C 5.025 3.981 5.097 3.919 5.155 3.837 C 5.196 3.196 5.251 2.637 5.509 2.035 C 5.915 1.087 6.739 0.462 7.711 0.186 C 7.858 0.144 8.006 0.108 8.156 0.077 C 8.247 0.059 8.447 0.034 8.524 0 Z M 3.783 7.714 C 3.862 7.707 3.964 7.702 4.04 7.688 C 4.656 7.619 5.159 7.452 5.639 7.043 C 6.155 6.602 6.387 6.13 6.532 5.474 C 6.46 5.475 6.371 5.474 6.301 5.479 C 5.569 5.526 4.833 5.87 4.388 6.464 C 4.103 6.844 3.947 7.274 3.783 7.714 Z M 10.231 22.151 C 9.892 22.062 9.343 21.968 8.997 22.018 C 8.358 22.068 7.83 22.314 7.344 22.728 C 7.793 22.868 8.128 22.94 8.604 22.92 C 8.739 22.911 8.89 22.898 9.02 22.865 C 9.395 22.768 9.993 22.463 10.231 22.151 Z M 18.295 16.23 C 17.32 16.824 16.818 17.945 17.187 19.058 C 17.205 19.114 17.246 19.26 17.279 19.295 C 17.912 18.796 18.375 18.293 18.486 17.446 C 18.531 17.104 18.473 16.572 18.322 16.241 C 18.317 16.23 18.308 16.232 18.295 16.23 Z M 6.368 3.038 C 6.595 2.919 6.823 2.831 7.05 2.719 C 7.559 2.467 8.023 2.038 8.281 1.527 C 8.313 1.464 8.476 1.171 8.467 1.128 C 8.441 1.12 8.45 1.121 8.421 1.127 C 8.305 1.14 8.191 1.171 8.078 1.198 C 7.549 1.325 7.109 1.572 6.764 2.001 C 6.56 2.253 6.418 2.549 6.349 2.867 C 6.339 2.913 6.318 2.987 6.328 3.033 C 6.353 3.047 6.34 3.046 6.368 3.038 Z M 13.798 22.141 C 14.301 22.717 15.068 22.962 15.812 22.92 C 16.155 22.887 16.281 22.851 16.609 22.728 C 15.993 22.231 15.406 21.96 14.59 21.995 C 14.211 22.025 14.139 22.07 13.798 22.141 Z M 21.038 16.377 C 22.046 16.143 22.664 15.189 22.873 14.221 L 22.867 14.199 C 22.857 14.199 22.845 14.197 22.837 14.199 C 22.264 14.371 21.658 14.904 21.369 15.429 C 21.323 15.513 20.999 16.294 21.001 16.368 L 21.018 16.381 L 21.038 16.377 Z M 5.685 16.211 C 5.425 16.842 5.395 17.376 5.651 18.019 C 5.881 18.599 6.266 18.934 6.732 19.321 C 6.79 19.279 6.874 18.866 6.89 18.769 C 6.992 18.164 6.88 17.511 6.517 17.01 C 6.372 16.81 5.902 16.319 5.685 16.211 Z M 5.476 20.214 C 5.704 20.184 5.82 20.135 6.029 20.086 C 5.454 19.538 4.701 19.166 3.898 19.191 C 3.882 19.191 3.865 19.192 3.849 19.193 C 3.669 19.198 3.446 19.238 3.269 19.281 C 3.85 19.894 4.61 20.324 5.476 20.214 Z M 21.025 6.746 C 21.334 6.124 21.431 5.498 21.208 4.83 C 21.156 4.672 20.853 4.022 20.709 3.956 C 20.661 4.106 20.599 4.244 20.555 4.398 C 20.425 4.857 20.405 5.339 20.544 5.799 C 20.645 6.134 20.84 6.424 20.968 6.746 C 20.977 6.769 20.966 6.754 20.988 6.776 C 21.019 6.764 21.006 6.773 21.025 6.746 Z M 22.826 8.873 C 22.517 9.245 22.292 9.523 22.155 10.003 C 22.03 10.435 22.071 10.822 22.069 11.262 C 22.069 11.309 22.05 11.427 22.069 11.461 C 22.105 11.455 22.114 11.439 22.14 11.407 C 22.713 10.824 23.196 9.756 22.851 8.893 C 22.848 8.886 22.832 8.877 22.826 8.873 Z M 1.089 8.776 C 0.927 9.802 1.167 10.684 1.911 11.418 C 1.932 11.4 1.935 11.406 1.935 11.373 C 1.937 11.23 1.928 11.062 1.935 10.921 C 1.976 10.161 1.853 9.606 1.344 9.023 C 1.298 8.971 1.143 8.8 1.089 8.776 Z M 1.106 14.181 C 1.296 15.136 1.876 16.074 2.845 16.329 C 2.911 16.347 3.008 16.388 3.074 16.382 C 2.714 15.463 2.245 14.678 1.301 14.257 C 1.244 14.232 1.164 14.197 1.106 14.181 Z M 17.998 20.09 C 18.313 20.231 18.59 20.28 18.935 20.257 C 19.671 20.2 20.2 19.808 20.715 19.304 C 20.375 19.254 20.133 19.215 19.783 19.239 C 19.434 19.267 19.052 19.347 18.741 19.513 C 18.472 19.657 18.24 19.904 17.998 20.09 Z M 3.222 3.99 C 3.131 4.152 3.024 4.304 2.938 4.469 C 2.569 5.174 2.577 6.014 2.988 6.698 C 3 6.694 3.011 6.689 3.022 6.684 C 3.549 5.873 3.674 4.959 3.28 4.061 C 3.264 4.024 3.258 4.009 3.222 3.99 Z M 4.131 16.048 L 4.15 16.072 C 4.185 16.063 4.186 16.041 4.216 15.992 C 4.845 14.994 4.991 13.719 4.22 12.755 C 4.216 12.754 4.212 12.752 4.208 12.75 C 4.079 12.927 3.941 13.092 3.829 13.282 C 3.576 13.713 3.476 14.259 3.549 14.753 C 3.611 15.171 3.858 15.721 4.131 16.048 Z M 15.519 1.111 C 15.9 1.965 16.314 2.468 17.176 2.858 C 17.299 2.913 17.665 3.116 17.77 3.136 C 17.747 2.874 17.579 2.506 17.433 2.289 C 16.993 1.633 16.287 1.232 15.519 1.111 Z M 7.562 3.871 C 7.057 3.904 6.699 4.088 6.306 4.393 C 6.719 4.722 7.3 4.852 7.819 4.799 C 8.284 4.754 8.663 4.537 9.039 4.28 C 8.561 4.004 8.129 3.829 7.562 3.871 Z M 19.493 8.974 C 19.329 9.705 19.391 10.376 19.798 11.023 C 20.041 11.411 20.373 11.735 20.765 11.967 C 20.821 11.999 20.907 12.052 20.964 12.072 C 21.013 11.848 21.019 11.697 21.028 11.475 C 21.05 10.965 21.004 10.511 20.723 10.072 C 20.469 9.675 20.147 9.363 19.749 9.118 C 19.692 9.083 19.55 8.995 19.493 8.974 Z M 3.056 12.076 C 3.237 11.947 3.429 11.825 3.597 11.681 C 4.082 11.268 4.407 10.695 4.512 10.064 C 4.562 9.775 4.578 9.189 4.46 8.917 L 4.434 8.9 C 4.108 9.127 3.84 9.332 3.587 9.639 C 3.065 10.269 2.845 11.051 2.989 11.862 C 3.001 11.929 3.006 12.028 3.056 12.076 Z M 16.098 3.884 C 15.804 3.929 15.622 3.958 15.342 4.087 C 15.225 4.14 15.09 4.219 14.979 4.266 C 15.406 4.572 15.718 4.727 16.259 4.784 C 16.369 4.795 16.561 4.801 16.669 4.784 C 17.16 4.73 17.388 4.598 17.809 4.367 C 17.344 4.013 16.676 3.829 16.098 3.884 Z M 19.842 12.716 C 19.798 12.776 19.755 12.836 19.713 12.897 C 19.012 13.891 19.099 15.098 19.893 16.014 L 19.911 16.034 C 19.958 16.013 20.127 15.655 20.218 15.454 C 20.613 14.58 20.488 13.446 19.852 12.718 C 19.849 12.717 19.845 12.717 19.842 12.716 Z M 8.195 18.688 C 8.235 19.29 8.615 19.984 9.063 20.367 C 9.462 20.709 10.13 21.04 10.657 21.088 C 10.659 20.992 10.62 20.808 10.599 20.714 C 10.482 20.202 10.266 19.825 9.906 19.447 C 9.552 19.078 9.092 18.83 8.592 18.736 C 8.466 18.713 8.3 18.711 8.195 18.688 Z M 15.742 18.697 C 15.5 18.726 15.296 18.759 15.065 18.836 C 14.17 19.135 13.534 19.886 13.398 20.83 C 13.39 20.879 13.357 21.053 13.38 21.09 L 13.404 21.097 C 14.144 20.99 14.848 20.604 15.301 19.996 C 15.579 19.626 15.742 19.18 15.768 18.716 L 15.754 18.697 L 15.742 18.697 Z M 17.51 5.464 C 17.499 5.719 17.75 6.293 17.887 6.505 C 18.331 7.191 19.116 7.647 19.928 7.687 C 20.009 7.691 20.092 7.69 20.173 7.693 C 20.155 7.496 20.068 7.246 19.987 7.067 C 19.494 5.97 18.618 5.582 17.51 5.464 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uD55C\uC758\uC0AC \uACFD\uD604\uBBFC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(92,87,75)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC0BC\uAC00 \u6545\u4EBA\uC758 \u51A5\u798F\uC744 \uBE55\uB2C8\uB2E4"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "11px 4px 11px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      height: 42,
      borderRadius: 12,
      backgroundColor: "rgb(226,222,215)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      borderRadius: 999,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      color: "rgb(115,85,37)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.524 0 L 9.363 0 C 9.558 0.113 9.725 0.14 9.798 0.409 C 9.817 0.477 9.824 0.553 9.814 0.625 C 9.718 1.057 9.523 1.541 9.308 1.924 C 9.076 2.338 8.786 2.607 8.507 2.949 C 9.069 3.054 9.942 3.497 10.31 3.963 C 10.385 4.057 10.419 4.237 10.387 4.352 C 10.291 4.7 9.662 5.162 9.383 5.347 C 8.917 5.654 8.091 5.891 7.534 5.862 C 7.472 6.077 7.425 6.247 7.337 6.453 C 7.029 7.175 6.421 7.849 5.738 8.229 C 5.647 8.279 5.556 8.326 5.464 8.372 C 5.77 9.487 5.676 10.478 5.099 11.497 C 5.028 11.623 4.936 11.757 4.87 11.877 C 4.929 11.961 4.992 12.037 5.053 12.119 C 5.539 12.778 5.805 13.579 5.793 14.401 C 5.79 14.6 5.761 14.817 5.734 15.015 C 6.77 15.598 7.541 16.321 7.873 17.508 C 7.885 17.551 7.896 17.594 7.907 17.637 C 8.152 17.643 8.435 17.643 8.672 17.685 C 9.426 17.818 10.197 18.218 10.724 18.777 C 11.343 19.433 11.694 20.3 11.707 21.206 C 11.901 21.211 12.095 21.213 12.289 21.21 C 12.282 21.097 12.3 20.904 12.314 20.788 C 12.402 20.081 12.698 19.417 13.165 18.882 C 13.838 18.123 14.784 17.67 15.792 17.622 C 15.902 17.616 16.015 17.616 16.125 17.617 C 16.197 17.388 16.267 17.14 16.361 16.921 C 16.724 16.08 17.342 15.487 18.14 15.069 L 18.283 14.995 C 18.041 14.025 18.368 12.891 19.001 12.141 C 19.052 12.081 19.126 11.994 19.169 11.929 C 18.444 10.968 18.176 9.865 18.448 8.686 C 18.461 8.631 18.516 8.44 18.491 8.395 C 18.422 8.332 18.254 8.256 18.167 8.206 C 18.054 8.141 17.998 8.102 17.894 8.024 C 17.182 7.479 16.669 6.711 16.436 5.841 C 16.157 5.824 15.896 5.81 15.622 5.743 C 15.057 5.604 14.571 5.334 14.13 4.957 C 13.703 4.599 13.324 4.197 13.895 3.729 C 14.22 3.462 14.556 3.269 14.944 3.107 C 15.107 3.039 15.295 3.003 15.466 2.961 L 15.458 2.95 C 15.35 2.807 15.221 2.672 15.109 2.525 C 14.756 2.064 14.526 1.582 14.361 1.026 C 14.257 0.677 14.141 0.349 14.493 0.079 C 14.536 0.045 14.586 0.028 14.627 0 L 15.384 0 C 15.494 0.049 15.661 0.05 15.783 0.079 C 15.942 0.116 16.101 0.154 16.257 0.203 C 17.264 0.536 18.12 1.227 18.563 2.211 C 18.778 2.689 18.922 3.366 18.847 3.881 C 18.928 3.968 19.047 4.054 19.138 4.135 C 19.258 4.244 19.368 4.356 19.478 4.475 C 19.564 3.943 19.737 3.486 20.016 3.03 C 20.156 2.801 20.395 2.404 20.724 2.489 C 21.093 2.585 21.49 3.142 21.711 3.444 C 22.264 4.279 22.507 5.247 22.315 6.24 C 22.215 6.759 21.997 7.248 21.678 7.668 C 21.598 7.775 21.399 8.009 21.351 8.106 C 21.407 8.346 21.468 8.604 21.534 8.841 C 21.596 8.717 21.668 8.631 21.743 8.52 C 21.965 8.194 22.234 7.91 22.535 7.658 C 22.653 7.559 22.794 7.405 22.943 7.362 C 23.372 7.239 23.592 7.517 23.679 7.897 C 23.739 8.159 23.832 8.414 23.894 8.677 C 23.919 8.769 23.965 9.024 24 9.092 L 24 9.689 C 23.943 9.831 23.946 10.013 23.913 10.164 C 23.713 11.101 23.171 11.992 22.388 12.544 C 22.315 12.595 22.247 12.65 22.169 12.694 C 22.063 12.757 21.926 12.819 21.834 12.897 C 21.815 12.982 21.716 13.528 21.734 13.576 C 21.778 13.574 21.99 13.446 22.05 13.415 C 22.271 13.298 22.497 13.208 22.731 13.122 C 23.226 12.919 23.702 12.709 24 13.346 L 24 13.853 C 23.954 13.964 23.935 14.17 23.908 14.297 C 23.817 14.724 23.691 15.078 23.507 15.472 C 23.145 16.247 22.581 16.861 21.799 17.212 C 21.372 17.408 20.67 17.58 20.195 17.532 C 20.049 17.735 19.922 17.957 19.778 18.152 C 20.327 18.117 20.932 18.243 21.448 18.422 C 21.746 18.525 22.053 18.667 22.067 19.034 C 22.079 19.377 21.689 19.766 21.47 20.006 C 20.814 20.724 19.876 21.304 18.885 21.315 C 18.121 21.326 17.698 21.101 17.054 20.745 C 16.763 20.897 16.486 21.086 16.183 21.242 C 16.739 21.458 17.231 21.862 17.648 22.275 C 18.387 23.007 17.884 23.35 17.173 23.665 C 16.281 24.061 15.256 24.122 14.346 23.762 C 13.78 23.535 13.278 23.171 12.885 22.702 C 12.839 22.649 12.576 22.29 12.574 22.29 C 12.376 22.231 11.646 22.273 11.445 22.259 C 11.305 22.445 11.209 22.617 11.055 22.8 C 10.551 23.39 9.78 23.855 9.007 23.953 C 8.206 24.055 7.358 23.916 6.636 23.553 C 6.367 23.418 6.059 23.339 6.021 22.986 C 5.996 22.765 6.091 22.591 6.226 22.426 C 6.65 21.925 7.145 21.539 7.729 21.25 C 7.571 21.119 7.248 20.907 7.065 20.793 C 6.852 20.897 6.67 20.994 6.445 21.077 C 5.676 21.362 4.918 21.381 4.142 21.106 C 3.401 20.848 2.776 20.345 2.29 19.732 C 2.188 19.597 2.071 19.466 1.998 19.312 C 1.827 18.95 2.037 18.629 2.372 18.494 C 2.841 18.306 3.317 18.193 3.82 18.158 C 3.964 18.147 4.091 18.135 4.237 18.139 C 4.121 17.973 3.907 17.697 3.818 17.529 C 3.525 17.511 3.229 17.491 2.942 17.434 C 2.28 17.304 1.513 16.916 1.067 16.4 C 0.593 15.853 0.275 15.151 0.122 14.446 C 0.1 14.346 0.023 13.909 0 13.866 L 0 13.398 C 0.026 13.361 0.047 13.296 0.068 13.253 C 0.34 12.688 0.921 12.985 1.319 13.152 C 1.672 13.301 1.978 13.461 2.311 13.603 C 2.242 13.37 2.221 13.091 2.125 12.868 C 2.111 12.836 2.041 12.799 2.009 12.78 C 1.78 12.649 1.554 12.509 1.354 12.335 C 0.727 11.8 0.283 11.082 0.091 10.276 C 0.066 10.17 0.046 9.944 0 9.859 L 0 9.104 C 0.046 9.026 0.053 8.685 0.087 8.552 C 0.181 8.191 0.259 7.623 0.593 7.408 C 0.938 7.185 1.237 7.493 1.474 7.705 C 1.861 8.051 2.23 8.42 2.493 8.874 C 2.542 8.608 2.606 8.366 2.674 8.104 C 2.583 7.98 2.453 7.839 2.356 7.718 C 1.451 6.587 1.378 5.032 2.092 3.784 C 2.283 3.451 2.854 2.615 3.237 2.51 C 3.368 2.473 3.509 2.491 3.627 2.559 C 3.919 2.728 4.223 3.445 4.339 3.77 C 4.412 3.978 4.495 4.31 4.549 4.527 C 4.664 4.36 4.821 4.206 4.958 4.055 C 5.025 3.981 5.097 3.919 5.155 3.837 C 5.196 3.196 5.251 2.637 5.509 2.035 C 5.915 1.087 6.739 0.462 7.711 0.186 C 7.858 0.144 8.006 0.108 8.156 0.077 C 8.247 0.059 8.447 0.034 8.524 0 Z M 3.783 7.714 C 3.862 7.707 3.964 7.702 4.04 7.688 C 4.656 7.619 5.159 7.452 5.639 7.043 C 6.155 6.602 6.387 6.13 6.532 5.474 C 6.46 5.475 6.371 5.474 6.301 5.479 C 5.569 5.526 4.833 5.87 4.388 6.464 C 4.103 6.844 3.947 7.274 3.783 7.714 Z M 10.231 22.151 C 9.892 22.062 9.343 21.968 8.997 22.018 C 8.358 22.068 7.83 22.314 7.344 22.728 C 7.793 22.868 8.128 22.94 8.604 22.92 C 8.739 22.911 8.89 22.898 9.02 22.865 C 9.395 22.768 9.993 22.463 10.231 22.151 Z M 18.295 16.23 C 17.32 16.824 16.818 17.945 17.187 19.058 C 17.205 19.114 17.246 19.26 17.279 19.295 C 17.912 18.796 18.375 18.293 18.486 17.446 C 18.531 17.104 18.473 16.572 18.322 16.241 C 18.317 16.23 18.308 16.232 18.295 16.23 Z M 6.368 3.038 C 6.595 2.919 6.823 2.831 7.05 2.719 C 7.559 2.467 8.023 2.038 8.281 1.527 C 8.313 1.464 8.476 1.171 8.467 1.128 C 8.441 1.12 8.45 1.121 8.421 1.127 C 8.305 1.14 8.191 1.171 8.078 1.198 C 7.549 1.325 7.109 1.572 6.764 2.001 C 6.56 2.253 6.418 2.549 6.349 2.867 C 6.339 2.913 6.318 2.987 6.328 3.033 C 6.353 3.047 6.34 3.046 6.368 3.038 Z M 13.798 22.141 C 14.301 22.717 15.068 22.962 15.812 22.92 C 16.155 22.887 16.281 22.851 16.609 22.728 C 15.993 22.231 15.406 21.96 14.59 21.995 C 14.211 22.025 14.139 22.07 13.798 22.141 Z M 21.038 16.377 C 22.046 16.143 22.664 15.189 22.873 14.221 L 22.867 14.199 C 22.857 14.199 22.845 14.197 22.837 14.199 C 22.264 14.371 21.658 14.904 21.369 15.429 C 21.323 15.513 20.999 16.294 21.001 16.368 L 21.018 16.381 L 21.038 16.377 Z M 5.685 16.211 C 5.425 16.842 5.395 17.376 5.651 18.019 C 5.881 18.599 6.266 18.934 6.732 19.321 C 6.79 19.279 6.874 18.866 6.89 18.769 C 6.992 18.164 6.88 17.511 6.517 17.01 C 6.372 16.81 5.902 16.319 5.685 16.211 Z M 5.476 20.214 C 5.704 20.184 5.82 20.135 6.029 20.086 C 5.454 19.538 4.701 19.166 3.898 19.191 C 3.882 19.191 3.865 19.192 3.849 19.193 C 3.669 19.198 3.446 19.238 3.269 19.281 C 3.85 19.894 4.61 20.324 5.476 20.214 Z M 21.025 6.746 C 21.334 6.124 21.431 5.498 21.208 4.83 C 21.156 4.672 20.853 4.022 20.709 3.956 C 20.661 4.106 20.599 4.244 20.555 4.398 C 20.425 4.857 20.405 5.339 20.544 5.799 C 20.645 6.134 20.84 6.424 20.968 6.746 C 20.977 6.769 20.966 6.754 20.988 6.776 C 21.019 6.764 21.006 6.773 21.025 6.746 Z M 22.826 8.873 C 22.517 9.245 22.292 9.523 22.155 10.003 C 22.03 10.435 22.071 10.822 22.069 11.262 C 22.069 11.309 22.05 11.427 22.069 11.461 C 22.105 11.455 22.114 11.439 22.14 11.407 C 22.713 10.824 23.196 9.756 22.851 8.893 C 22.848 8.886 22.832 8.877 22.826 8.873 Z M 1.089 8.776 C 0.927 9.802 1.167 10.684 1.911 11.418 C 1.932 11.4 1.935 11.406 1.935 11.373 C 1.937 11.23 1.928 11.062 1.935 10.921 C 1.976 10.161 1.853 9.606 1.344 9.023 C 1.298 8.971 1.143 8.8 1.089 8.776 Z M 1.106 14.181 C 1.296 15.136 1.876 16.074 2.845 16.329 C 2.911 16.347 3.008 16.388 3.074 16.382 C 2.714 15.463 2.245 14.678 1.301 14.257 C 1.244 14.232 1.164 14.197 1.106 14.181 Z M 17.998 20.09 C 18.313 20.231 18.59 20.28 18.935 20.257 C 19.671 20.2 20.2 19.808 20.715 19.304 C 20.375 19.254 20.133 19.215 19.783 19.239 C 19.434 19.267 19.052 19.347 18.741 19.513 C 18.472 19.657 18.24 19.904 17.998 20.09 Z M 3.222 3.99 C 3.131 4.152 3.024 4.304 2.938 4.469 C 2.569 5.174 2.577 6.014 2.988 6.698 C 3 6.694 3.011 6.689 3.022 6.684 C 3.549 5.873 3.674 4.959 3.28 4.061 C 3.264 4.024 3.258 4.009 3.222 3.99 Z M 4.131 16.048 L 4.15 16.072 C 4.185 16.063 4.186 16.041 4.216 15.992 C 4.845 14.994 4.991 13.719 4.22 12.755 C 4.216 12.754 4.212 12.752 4.208 12.75 C 4.079 12.927 3.941 13.092 3.829 13.282 C 3.576 13.713 3.476 14.259 3.549 14.753 C 3.611 15.171 3.858 15.721 4.131 16.048 Z M 15.519 1.111 C 15.9 1.965 16.314 2.468 17.176 2.858 C 17.299 2.913 17.665 3.116 17.77 3.136 C 17.747 2.874 17.579 2.506 17.433 2.289 C 16.993 1.633 16.287 1.232 15.519 1.111 Z M 7.562 3.871 C 7.057 3.904 6.699 4.088 6.306 4.393 C 6.719 4.722 7.3 4.852 7.819 4.799 C 8.284 4.754 8.663 4.537 9.039 4.28 C 8.561 4.004 8.129 3.829 7.562 3.871 Z M 19.493 8.974 C 19.329 9.705 19.391 10.376 19.798 11.023 C 20.041 11.411 20.373 11.735 20.765 11.967 C 20.821 11.999 20.907 12.052 20.964 12.072 C 21.013 11.848 21.019 11.697 21.028 11.475 C 21.05 10.965 21.004 10.511 20.723 10.072 C 20.469 9.675 20.147 9.363 19.749 9.118 C 19.692 9.083 19.55 8.995 19.493 8.974 Z M 3.056 12.076 C 3.237 11.947 3.429 11.825 3.597 11.681 C 4.082 11.268 4.407 10.695 4.512 10.064 C 4.562 9.775 4.578 9.189 4.46 8.917 L 4.434 8.9 C 4.108 9.127 3.84 9.332 3.587 9.639 C 3.065 10.269 2.845 11.051 2.989 11.862 C 3.001 11.929 3.006 12.028 3.056 12.076 Z M 16.098 3.884 C 15.804 3.929 15.622 3.958 15.342 4.087 C 15.225 4.14 15.09 4.219 14.979 4.266 C 15.406 4.572 15.718 4.727 16.259 4.784 C 16.369 4.795 16.561 4.801 16.669 4.784 C 17.16 4.73 17.388 4.598 17.809 4.367 C 17.344 4.013 16.676 3.829 16.098 3.884 Z M 19.842 12.716 C 19.798 12.776 19.755 12.836 19.713 12.897 C 19.012 13.891 19.099 15.098 19.893 16.014 L 19.911 16.034 C 19.958 16.013 20.127 15.655 20.218 15.454 C 20.613 14.58 20.488 13.446 19.852 12.718 C 19.849 12.717 19.845 12.717 19.842 12.716 Z M 8.195 18.688 C 8.235 19.29 8.615 19.984 9.063 20.367 C 9.462 20.709 10.13 21.04 10.657 21.088 C 10.659 20.992 10.62 20.808 10.599 20.714 C 10.482 20.202 10.266 19.825 9.906 19.447 C 9.552 19.078 9.092 18.83 8.592 18.736 C 8.466 18.713 8.3 18.711 8.195 18.688 Z M 15.742 18.697 C 15.5 18.726 15.296 18.759 15.065 18.836 C 14.17 19.135 13.534 19.886 13.398 20.83 C 13.39 20.879 13.357 21.053 13.38 21.09 L 13.404 21.097 C 14.144 20.99 14.848 20.604 15.301 19.996 C 15.579 19.626 15.742 19.18 15.768 18.716 L 15.754 18.697 L 15.742 18.697 Z M 17.51 5.464 C 17.499 5.719 17.75 6.293 17.887 6.505 C 18.331 7.191 19.116 7.647 19.928 7.687 C 20.009 7.691 20.092 7.69 20.173 7.693 C 20.155 7.496 20.068 7.246 19.987 7.067 C 19.494 5.97 18.618 5.582 17.51 5.464 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      letterSpacing: "-0.300px",
      color: "rgb(36,29,20)",
      flexShrink: 0
    }
  }, "\uD55C\uC758\uC0AC \uACFD\uD604\uBBFC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(92,87,75)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC0BC\uAC00 \u6545\u4EBA\uC758 \u51A5\u798F\uC744 \uBE55\uB2C8\uB2E4")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      borderRadius: 4,
      boxShadow: "inset 0 0 0 1px rgb(207,201,189)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 13px 0px 13px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: 1.4670000076293945,
      letterSpacing: "-0.300px",
      color: "rgb(111,105,92)",
      flexShrink: 0
    }
  }, "\uB354\uBCF4\uAE30")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(42,33,23)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "22px 22px 22px 22px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "13px",
      color: "rgb(203,168,106)",
      flexShrink: 0
    }
  }, "\uCC98\uC74C\uC774\uC154\uB3C4 \uAD1C\uCC2E\uC2B5\uB2C8\uB2E4")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 264,
      height: 63,
      display: "flex",
      flexDirection: "column",
      padding: "9px 0px 9px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "NanumMyeongjo, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 19,
      lineHeight: "26.600px",
      color: "rgb(236,233,227)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, "조문 예절,\n미리 알아두세요"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 72.004,
      height: 72.001,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.764,
    height: 20.901,
    viewBox: "0 0 8.764 20.901",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.951,0.310,-0.313,0.950,33.871,44.587)",
      transformOrigin: "0 0",
      width: 8.764,
      height: 20.901
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.764 20.901 L 8.731 20.76 L 2.569 0 L 0 1.267 L 6.822 20.901 L 8.764 20.901 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.951,0.310,-0.313,0.950,43.500,35.009)",
      transformOrigin: "0 0",
      width: 29.982,
      height: 29.157,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 29.982,
    height: 29.157,
    viewBox: "0 0 29.982 29.157",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 29.982,
      height: 29.157
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.112 27.205 C 0.655 25.734 1.749 24.527 2.337 23.009 C 2.859 21.662 4.207 20.267 3.944 18.696 C 3.752 17.546 2.064 15.946 2.53 14.873 C 3.091 13.579 4.688 14.697 5.594 14.877 C 6.47 15.052 6.844 15.185 7.506 14.407 C 7.772 14.094 7.632 13.566 7.802 13.324 C 8.336 12.567 9.689 12.273 9.767 11.129 C 9.794 10.73 8.998 9.537 8.899 9.019 C 8.753 8.267 8.723 7.957 8.977 7.349 C 9.78 5.423 11.735 4.155 13.261 2.945 C 13.928 2.417 14.643 1.668 15.737 2.135 C 16.378 2.409 16.459 3.254 17.01 3.635 C 18.863 4.915 21.78 1.518 23.241 0.664 C 25.196 -0.477 26.778 -0.23 28.313 2.053 C 27.79 3.395 24.843 4.592 25.698 6.415 C 26.627 8.395 28.96 6.579 29.982 8.622 C 28.876 10.538 26.199 11.2 24.318 12.14 C 25.096 13.207 26.776 12.265 27.822 13.269 C 29.39 14.774 26.811 16.073 25.619 16.621 C 23.331 17.671 20.594 17.761 18.498 19.155 C 15.968 20.838 13.078 21.144 9.822 21.397 C 8.454 21.504 6.997 21.044 5.832 21.652 C 4.502 22.345 3.751 24.102 2.826 25.237 C 2.274 25.914 1.685 26.424 1.473 27.325 C 1.395 27.654 1.636 28.647 1.373 28.896 C 0.59 29.641 -0.322 28.703 0.112 27.204 L 0.112 27.205 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.379,
      top: 2.791,
      width: 24.314,
      height: 25.079,
      opacity: 0.45,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.314,
    height: 25.079,
    viewBox: "0 0 24.314 25.079",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24.314,
      height: 25.079,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.113 25.079 L 0 24.996 C 0.034 24.939 3.395 19.199 8.041 13.281 C 12.332 7.815 18.629 1.073 24.259 0 L 24.314 0.123 C 18.711 1.191 12.43 7.918 8.148 13.372 C 3.505 19.286 0.147 25.021 0.113 25.079 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.617,
    height: 3.501,
    viewBox: "0 0 15.617 3.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.633,
      top: 10.485,
      width: 15.617,
      height: 3.501,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.617 0.126 C 14.583 0.248 13.542 0.39 12.537 0.527 C 10.56 0.797 8.516 1.076 6.439 1.213 C 3.951 1.376 2.236 2.264 0.083 3.501 L 0 3.388 C 2.094 2.185 3.893 1.252 6.398 1.087 C 8.47 0.95 10.512 0.671 12.487 0.402 C 13.494 0.264 14.535 0.122 15.57 0 L 15.617 0.125 L 15.617 0.126 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.972,
    height: 1.465,
    viewBox: "0 0 9.972 1.465",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.646,
      top: 5.494,
      width: 9.972,
      height: 1.465,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.878 0.686 C 9.335 -0.044 8.35 0.104 7.559 0.222 C 7.388 0.247 7.227 0.272 7.083 0.285 C 6.611 0.327 6.111 0.357 5.582 0.389 C 3.649 0.505 1.455 0.634 0.084 1.465 L 0 1.352 C 0.019 1.341 0.038 1.329 0.058 1.318 C 1.454 0.508 3.623 0.378 5.541 0.263 C 6.069 0.232 6.569 0.201 7.039 0.159 C 7.18 0.146 7.34 0.122 7.509 0.097 C 8.294 -0.02 9.368 -0.182 9.972 0.63 L 9.879 0.685 L 9.878 0.686 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.269,
    height: 5.410,
    viewBox: "0 0 2.269 5.410",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.385,
      top: 2.646,
      width: 2.269,
      height: 5.41,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.118 5.41 L 0 5.335 C 0.261 4.734 0.423 4.04 0.579 3.369 C 0.876 2.098 1.183 0.784 2.175 0 L 2.269 0.106 C 1.298 0.873 0.995 2.171 0.702 3.428 C 0.545 4.103 0.382 4.801 0.118 5.41 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.951,0.310,-0.313,0.950,4.357,42.288)",
      transformOrigin: "0 0",
      width: 34.135,
      height: 13.936,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.135,
    height: 13.936,
    viewBox: "0 0 34.135 13.936",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 34.135,
      height: 13.936
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.114 11.927 C 5.648 12.758 5.351 13.346 5.025 13.936 L 17.622 13.936 C 17.826 13.832 18.035 13.739 18.255 13.66 C 20.71 12.769 22.265 10.883 23.946 8.709 C 24.652 7.796 24.961 6.516 25.962 6.015 C 27.104 5.444 28.806 5.854 30.106 5.808 C 30.881 5.78 31.544 5.636 32.338 5.969 C 32.628 6.092 33.286 6.795 33.599 6.742 C 34.533 6.587 34.222 5.437 32.866 4.939 C 31.48 4.535 30.048 4.663 28.605 4.265 C 27.324 3.912 25.632 4.12 24.536 3.09 C 23.735 2.337 23.267 0.28 22.223 0.034 C 20.966 -0.263 21.103 1.47 20.828 2.209 C 20.564 2.925 20.496 3.261 19.593 3.313 C 19.228 3.335 18.885 2.951 18.62 2.942 C 17.791 2.915 16.947 3.717 16.027 3.158 C 15.705 2.963 15.145 1.758 14.79 1.409 C 14.275 0.901 14.048 0.715 13.462 0.568 C 11.605 0.103 9.733 0.809 8.101 1.242 C 7.388 1.431 6.482 1.537 6.346 2.564 C 6.266 3.166 6.883 3.677 6.926 4.272 C 7.072 6.273 3.113 6.518 1.786 7.097 C 0.012 7.87 -0.518 9.125 0.548 11.44 C 1.825 11.79 4.095 10.342 5.115 11.927 L 5.114 11.927 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.355,
      top: 4.133,
      width: 21.338,
      height: 8.655,
      opacity: 0.45,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 21.338,
    height: 6.565,
    viewBox: "0 0 21.338 6.565",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.273,
      width: 21.338,
      height: 6.565,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.338 0.088 C 20.947 0.321 20.356 0.393 19.834 0.456 C 19.678 0.475 19.531 0.493 19.397 0.514 C 19.054 0.568 18.701 0.609 18.358 0.65 C 18.178 0.671 17.998 0.692 17.819 0.715 C 17.468 0.76 17.108 0.793 16.76 0.823 C 16.182 0.874 15.583 0.927 15.015 1.042 C 14.564 1.133 14.111 1.207 13.674 1.279 C 12.404 1.486 11.203 1.682 10.039 2.269 C 9.847 2.366 9.66 2.471 9.479 2.572 C 8.988 2.847 8.525 3.106 7.965 3.227 C 7.054 3.423 6.004 3.674 5.079 4.168 C 4.358 4.552 3.602 4.877 2.87 5.191 C 1.927 5.596 0.95 6.015 0.047 6.565 L 0 6.475 C 0.907 5.924 1.885 5.504 2.83 5.098 C 3.561 4.784 4.316 4.46 5.035 4.077 C 5.965 3.581 7.02 3.329 7.935 3.131 C 8.486 3.012 8.946 2.755 9.434 2.482 C 9.616 2.38 9.803 2.276 9.995 2.179 C 11.167 1.588 12.371 1.391 13.646 1.183 C 14.083 1.112 14.534 1.038 14.985 0.948 C 15.557 0.832 16.157 0.779 16.737 0.727 C 17.084 0.696 17.444 0.665 17.794 0.62 C 17.972 0.597 18.153 0.576 18.333 0.554 C 18.675 0.515 19.029 0.473 19.37 0.419 C 19.505 0.398 19.653 0.38 19.808 0.361 C 20.325 0.298 20.911 0.228 21.291 0 L 21.337 0.09 L 21.338 0.088 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.903,
    height: 8.655,
    viewBox: "0 0 6.903 8.655",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.864,
      top: 0,
      width: 6.903,
      height: 8.655,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.432 8.636 C 0.421 8.643 0.41 8.649 0.399 8.655 L 0.355 8.564 C 0.639 8.408 0.845 8.066 1.043 7.737 C 1.158 7.546 1.277 7.348 1.408 7.194 C 1.582 6.99 1.745 6.762 1.902 6.542 C 2.112 6.248 2.33 5.943 2.58 5.687 C 2.91 5.347 3.29 5.056 3.657 4.776 C 3.996 4.516 4.348 4.247 4.649 3.946 C 5.32 3.273 6.064 2.664 6.704 2.263 C 6.529 2.2 6.429 2.241 6.309 2.29 C 6.229 2.324 6.137 2.361 6.011 2.368 C 5.856 2.376 5.698 2.315 5.531 2.25 C 5.444 2.215 5.354 2.18 5.264 2.156 C 4.649 1.989 4.165 1.764 3.626 1.478 C 3.072 1.184 2.512 0.951 1.841 0.693 C 1.701 0.639 1.546 0.567 1.381 0.492 C 0.917 0.277 0.39 0.035 0.03 0.112 L 0 0.016 C 0.38 -0.066 0.917 0.182 1.391 0.401 C 1.555 0.477 1.71 0.548 1.847 0.601 C 2.52 0.86 3.082 1.093 3.641 1.39 C 4.175 1.674 4.654 1.896 5.262 2.061 C 5.355 2.087 5.447 2.122 5.536 2.157 C 5.695 2.22 5.847 2.279 5.988 2.271 C 6.105 2.264 6.188 2.23 6.268 2.197 C 6.41 2.14 6.543 2.084 6.811 2.215 L 6.903 2.259 L 6.828 2.303 C 6.173 2.701 5.399 3.329 4.703 4.027 C 4.401 4.331 4.047 4.601 3.706 4.862 C 3.341 5.142 2.963 5.431 2.634 5.767 C 2.388 6.021 2.171 6.323 1.963 6.615 C 1.805 6.836 1.641 7.065 1.466 7.271 C 1.337 7.421 1.226 7.608 1.107 7.805 C 0.913 8.129 0.712 8.463 0.43 8.635 L 0.432 8.636 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.792,
    height: 5.791,
    viewBox: "0 0 5.792 5.791",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.338,
      top: 1.062,
      width: 5.792,
      height: 5.791,
      color: "rgb(33,66,15)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.07 5.791 L 0 5.728 C 1.674 2.219 5.708 0.022 5.748 0 L 5.792 0.091 C 5.752 0.113 1.734 2.3 0.07 5.791 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.951,0.310,-0.313,0.950,16.066,0)",
      transformOrigin: "0 0",
      width: 54.201,
      height: 47.896,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.459,
      top: 8.223,
      width: 33.249,
      height: 29.545,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 33.249053955078125,
      height: 29.544898986816406,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -2.899,
      top: -2.616,
      width: 39.018,
      height: 34.76,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 37.772,
    height: 33.484,
    viewBox: "0 0 37.772 33.484",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.64,
      top: 0.644,
      width: 37.772,
      height: 33.484,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.772 0 L 0 0 L 0 33.484 L 37.772 33.484 L 37.772 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 15.021 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 15.021 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(255,255,254)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 15.412 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 15.412 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(255,255,253)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 15.802 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 15.802 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(254,254,252)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 16.194 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 16.194 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(254,254,251)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 16.584 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 16.584 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(254,254,250)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 16.975 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 16.975 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(254,254,249)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 17.365 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 17.365 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(253,253,247)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 17.756 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 17.756 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(253,253,246)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 18.146 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 18.146 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(253,253,245)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 18.537 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 18.537 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(253,253,244)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 18.928 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 18.928 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(252,252,243)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 19.319 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 19.319 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(252,252,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 19.71 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 19.71 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(252,252,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 20.1 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 20.1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(252,252,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 20.267 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 20.267 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(252,252,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 20.434 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 20.434 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(252,252,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 20.6 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 20.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.936,
    height: 33.647,
    viewBox: "0 0 37.936 33.647",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.561,
      top: 0.562,
      width: 37.936,
      height: 33.647,
      color: "rgb(251,251,241)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.936 20.767 L 37.936 33.647 L 0 33.647 L 0 0 L 37.936 0 L 37.936 20.767 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.170,
    height: 33.863,
    viewBox: "0 0 38.170 33.863",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.327,
      top: 0.345,
      width: 38.17,
      height: 33.863,
      color: "rgb(251,251,241)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.17 21.15 L 38.17 33.863 L 0.234 33.863 L 0.234 0.744 L 0 0.744 C 0.167 0.493 0.336 0.245 0.508 0 L 0.508 0.217 L 38.17 0.217 L 38.17 21.15 L 38.17 21.15 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.128,
    height: 34.005,
    viewBox: "0 0 38.128 34.005",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.366,
      top: 0.205,
      width: 38.128,
      height: 34.005,
      color: "rgb(251,251,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.128 21.459 L 38.128 34.005 L 0.192 34.005 L 0.192 2.191 L 0 2.191 C 0.317 1.689 0.644 1.196 0.981 0.714 C 1.15 0.474 1.322 0.236 1.495 0 L 1.495 0.357 L 38.128 0.357 L 38.128 21.458 L 38.128 21.459 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.495,
    height: 34.100,
    viewBox: "0 0 38.495 34.100",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0.109,
      width: 38.495,
      height: 34.1,
      color: "rgb(250,250,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.495 21.72 L 38.495 34.1 L 0.559 34.1 L 0.559 4.34 L 0 4.34 C 0.579 3.315 1.2 2.328 1.862 1.384 C 2.193 0.912 2.535 0.45 2.886 0 L 2.886 0.453 L 38.495 0.453 L 38.495 21.72 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.943,
    height: 34.152,
    viewBox: "0 0 37.943 34.152",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.551,
      top: 0.058,
      width: 37.943,
      height: 34.152,
      color: "rgb(250,250,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.943 21.939 L 37.943 34.152 L 0.007 34.152 L 0.007 4.906 L 0 4.906 C 0.567 3.902 1.176 2.935 1.825 2.01 C 2.149 1.548 2.484 1.095 2.828 0.654 C 3 0.433 3.175 0.215 3.352 0 L 3.352 0.506 L 37.943 0.506 L 37.943 21.94 L 37.943 21.939 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.193,
    height: 34.163,
    viewBox: "0 0 38.193 34.163",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.302,
      top: 0.046,
      width: 38.193,
      height: 34.163,
      color: "rgb(249,249,239)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.193 22.117 L 38.193 34.163 L 0.257 34.163 L 0.257 6.934 L 0 6.934 C 0.257 6.425 0.525 5.923 0.802 5.431 C 1.358 4.447 1.954 3.5 2.589 2.593 C 3.225 1.686 3.9 0.821 4.613 0 L 4.613 0.515 L 38.193 0.515 L 38.193 22.116 L 38.193 22.117 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.349,
    height: 34.130,
    viewBox: "0 0 38.349 34.130",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.144,
      top: 0.081,
      width: 38.349,
      height: 34.13,
      color: "rgb(249,249,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.349 22.25 L 38.349 34.13 L 0.413 34.13 L 0.413 8.907 L 0 8.907 C 0.924 6.843 2.015 4.908 3.26 3.133 C 3.883 2.246 4.543 1.398 5.241 0.594 C 5.415 0.394 5.592 0.196 5.771 0 L 5.771 0.483 L 38.349 0.483 L 38.349 22.25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.412,
    height: 34.055,
    viewBox: "0 0 38.412 34.055",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.081,
      top: 0.155,
      width: 38.412,
      height: 34.055,
      color: "rgb(248,248,238)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.412 22.342 L 38.412 34.055 L 0.476 34.055 L 0.476 10.821 L 0 10.821 C 0.205 10.3 0.421 9.788 0.647 9.283 C 1.552 7.263 2.62 5.369 3.838 3.632 C 4.446 2.763 5.094 1.934 5.776 1.147 C 6.118 0.754 6.468 0.371 6.827 0 L 6.827 0.408 L 38.412 0.408 L 38.412 22.342 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.387,
    height: 33.938,
    viewBox: "0 0 38.387 33.938",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.107,
      top: 0.271,
      width: 38.387,
      height: 33.938,
      color: "rgb(248,248,237)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.386 22.392 L 38.386 33.938 L 0.45 33.938 L 0.45 12.67 L 0 12.67 C 0.36 11.624 0.763 10.605 1.205 9.617 C 2.089 7.641 3.134 5.789 4.326 4.089 C 4.922 3.24 5.555 2.428 6.223 1.659 C 6.557 1.274 6.9 0.899 7.251 0.537 C 7.427 0.355 7.605 0.176 7.785 0 L 7.785 0.292 L 38.387 0.292 L 38.387 22.392 L 38.386 22.392 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.273,
    height: 33.783,
    viewBox: "0 0 38.273 33.783",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.222,
      top: 0.426,
      width: 38.273,
      height: 33.783,
      color: "rgb(247,247,237)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.273 22.404 L 38.273 33.783 L 0.337 33.783 L 0.337 14.452 L 0 14.452 C 0.155 13.927 0.322 13.409 0.498 12.898 C 0.85 11.874 1.243 10.879 1.675 9.912 C 3.405 6.048 5.762 2.667 8.643 0 L 8.643 0.136 L 38.273 0.136 L 38.273 22.404 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.077,
    height: 34.051,
    viewBox: "0 0 38.077 34.051",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.418,
      top: 0.158,
      width: 38.077,
      height: 34.051,
      color: "rgb(246,246,236)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.077 22.838 L 38.077 34.051 L 0.141 34.051 L 0.141 16.623 L 0 16.623 C 0.526 14.527 1.218 12.52 2.063 10.631 C 3.753 6.855 6.056 3.551 8.872 0.944 C 9.224 0.618 9.584 0.303 9.951 0 L 9.951 0.405 L 38.076 0.405 L 38.076 22.839 L 38.077 22.838 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.489,
    height: 34.550,
    viewBox: "0 0 38.489 34.550",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.003,
      top: 0,
      width: 38.489,
      height: 34.55,
      color: "rgb(246,246,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.489 23.165 L 38.489 34.21 L 0.564 34.21 L 0.564 34.55 C 0.512 34.259 0.462 33.969 0.416 33.679 L 0.553 33.679 L 0.553 23.474 L 0 23.474 C 0.356 19.08 1.408 14.93 3.059 11.241 C 4.71 7.552 6.96 4.325 9.71 1.778 C 10.397 1.142 11.116 0.548 11.865 0 L 11.865 0.563 L 38.489 0.563 L 38.489 23.165 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 38.487,
    height: 34.121,
    viewBox: "0 0 38.487 34.121",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.531,
      top: 0.324,
      width: 38.487,
      height: 34.121,
      color: "rgb(245,245,235)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.964 23.006 L 37.964 33.886 L 0.682 33.886 L 0.682 34.121 C 0.631 33.837 0.582 33.554 0.537 33.271 C 0.356 32.139 0.221 31.013 0.132 29.894 C -0.046 27.658 -0.042 25.453 0.132 23.309 C 0.48 19.02 1.507 14.968 3.119 11.366 C 4.73 7.765 6.926 4.615 9.61 2.129 C 10.281 1.508 10.983 0.928 11.714 0.393 C 11.896 0.259 12.081 0.128 12.267 0 L 12.267 0.238 L 37.298 0.238 L 37.298 0.058 C 37.699 0.309 38.095 0.572 38.487 0.846 L 37.964 0.846 L 37.964 23.006 L 37.964 23.006 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.549,
    height: 34.335,
    viewBox: "0 0 37.549 34.335",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.19,
      top: 0.005,
      width: 37.549,
      height: 34.335,
      color: "rgb(244,244,234)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 37.305 23.492 L 37.305 34.205 L 0.666 34.205 L 0.666 34.335 C 0.616 34.059 0.568 33.782 0.524 33.507 C 0.347 32.403 0.216 31.303 0.129 30.212 C -0.045 28.03 -0.041 25.88 0.129 23.788 C 0.468 19.603 1.47 15.65 3.042 12.137 C 4.615 8.624 6.757 5.551 9.376 3.126 C 10.686 1.913 12.115 0.863 13.651 0 L 13.651 0.559 L 35.205 0.559 L 35.205 0.402 C 35.603 0.625 35.999 0.859 36.389 1.105 C 36.78 1.35 37.166 1.606 37.549 1.874 L 37.305 1.874 L 37.305 23.493 L 37.305 23.492 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 37.168,
    height: 34.073,
    viewBox: "0 0 37.168 34.073",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.848,
      top: 0.163,
      width: 37.168,
      height: 34.073,
      color: "rgb(243,243,233)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 36.644 23.501 L 36.644 34.047 L 0.649 34.047 L 0.649 34.073 C 0.6 33.803 0.554 33.534 0.511 33.265 C 0.339 32.189 0.211 31.117 0.126 30.053 C -0.044 27.926 -0.04 25.829 0.126 23.789 C 0.456 19.709 1.434 15.855 2.967 12.43 C 4.499 9.004 6.588 6.008 9.142 3.643 C 10.419 2.461 11.812 1.437 13.311 0.596 C 13.685 0.386 14.066 0.187 14.454 0 L 14.454 0.4 L 33.15 0.4 L 33.15 0.369 C 33.94 0.759 34.719 1.195 35.481 1.673 C 35.862 1.912 36.239 2.163 36.612 2.423 C 36.798 2.553 36.983 2.686 37.168 2.821 L 36.646 2.821 L 36.646 23.502 L 36.644 23.501 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 36.214,
    height: 34.242,
    viewBox: "0 0 36.214 34.242",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.511,
      top: 0.284,
      width: 36.214,
      height: 34.242,
      color: "rgb(243,243,232)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 35.985 23.547 L 35.985 33.927 L 0.706 33.927 L 0.706 34.242 C 0.681 34.111 0.656 33.98 0.632 33.848 C 0.585 33.586 0.54 33.323 0.498 33.061 C 0.33 32.013 0.205 30.968 0.122 29.932 C -0.043 27.859 -0.039 25.816 0.122 23.828 C 0.445 19.853 1.397 16.097 2.89 12.76 C 4.384 9.422 6.419 6.503 8.907 4.199 C 10.151 3.046 11.509 2.048 12.968 1.23 C 13.698 0.82 14.454 0.455 15.233 0.138 L 15.233 0.281 L 29.952 0.281 L 29.952 0 C 30.745 0.291 31.528 0.627 32.299 1.008 C 33.069 1.389 33.827 1.813 34.57 2.279 C 34.941 2.512 35.309 2.755 35.672 3.01 C 35.854 3.137 36.035 3.266 36.214 3.398 L 35.985 3.398 L 35.985 23.548 L 35.985 23.547 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 35.782,
    height: 34.056,
    viewBox: "0 0 35.782 34.056",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.17,
      top: 0.354,
      width: 35.782,
      height: 34.056,
      color: "rgb(242,242,231)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 35.325 23.642 L 35.325 33.855 L 0.687 33.855 L 0.687 34.056 C 0.663 33.928 0.639 33.8 0.616 33.672 C 0.569 33.416 0.526 33.161 0.485 32.906 C 0.321 31.885 0.2 30.868 0.119 29.858 C -0.041 27.839 -0.038 25.851 0.119 23.916 C 0.433 20.045 1.36 16.388 2.814 13.138 C 5.723 6.639 10.741 1.767 17.178 0.064 L 17.178 0.207 L 26.821 0.207 L 26.821 0 C 29.976 0.767 33.018 2.281 35.782 4.414 L 35.325 4.414 L 35.325 23.642 L 35.325 23.642 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 34.816,
    height: 34.068,
    viewBox: "0 0 34.816 34.068",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.832,
      top: 0.601,
      width: 34.816,
      height: 34.068,
      color: "rgb(241,241,230)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 34.664 23.562 L 34.664 33.608 L 0.741 33.608 L 0.741 34.068 C 0.641 33.57 0.551 33.071 0.471 32.575 C 0.312 31.582 0.194 30.592 0.116 29.61 C -0.04 27.646 -0.037 25.711 0.116 23.828 C 0.421 20.061 1.323 16.504 2.738 13.342 C 5.568 7.019 10.45 2.278 16.714 0.622 C 19.846 -0.207 23.027 -0.187 26.097 0.56 C 29.167 1.307 32.126 2.779 34.816 4.854 L 34.666 4.854 L 34.666 23.562 L 34.664 23.562 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 34.335,
    height: 33.122,
    viewBox: "0 0 34.335 33.122",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.492,
      top: 1.422,
      width: 34.335,
      height: 33.122,
      color: "rgb(240,240,229)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 34.004 22.908 L 34.004 32.787 L 0.721 32.787 L 0.721 33.122 C 0.624 32.637 0.536 32.153 0.458 31.67 C 0.304 30.705 0.188 29.743 0.113 28.788 C -0.039 26.878 -0.036 24.997 0.113 23.166 C 0.409 19.504 1.287 16.046 2.662 12.972 C 5.414 6.824 10.161 2.216 16.25 0.604 C 22.34 -1.007 28.618 0.684 33.848 4.72 C 34.012 4.846 34.174 4.974 34.335 5.105 L 34.004 5.105 L 34.004 22.908 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 33.822,
    height: 32.176,
    viewBox: "0 0 33.822 32.176",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.151,
      top: 2.243,
      width: 33.822,
      height: 32.176,
      color: "rgb(239,239,229)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.345 22.254 L 33.345 31.966 L 0.7 31.966 L 0.7 32.176 C 0.606 31.705 0.52 31.235 0.445 30.766 C 0.295 29.828 0.183 28.894 0.11 27.966 C -0.038 26.111 -0.035 24.283 0.11 22.505 C 0.398 18.948 1.25 15.588 2.586 12.602 C 5.259 6.63 9.87 2.153 15.786 0.587 C 21.701 -0.978 27.801 0.665 32.881 4.585 C 33.199 4.831 33.512 5.084 33.822 5.347 L 33.346 5.347 L 33.346 22.254 L 33.345 22.254 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 32.826,
    height: 31.229,
    viewBox: "0 0 32.826 31.229",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.811,
      top: 3.065,
      width: 32.826,
      height: 31.229,
      color: "rgb(238,238,228)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32.684 21.599 L 32.684 31.144 L 0.679 31.144 L 0.679 31.229 C 0.587 30.772 0.505 30.316 0.432 29.861 C 0.286 28.95 0.177 28.043 0.106 27.143 C -0.037 25.342 -0.034 23.569 0.106 21.843 C 0.386 18.39 1.213 15.129 2.51 12.23 C 5.104 6.434 9.579 2.089 15.321 0.57 C 21.062 -0.949 26.983 0.645 31.913 4.45 C 32.222 4.688 32.525 4.935 32.826 5.19 L 32.684 5.19 L 32.684 21.6 L 32.684 21.599 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 32.265,
    height: 30.617,
    viewBox: "0 0 32.265 30.617",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.47,
      top: 3.885,
      width: 32.265,
      height: 30.617,
      color: "rgb(237,237,227)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32.025 20.946 L 32.025 30.325 L 0.728 30.325 L 0.728 30.617 C 0.704 30.506 0.681 30.395 0.659 30.284 C 0.57 29.841 0.489 29.398 0.419 28.956 C 0.277 28.073 0.173 27.194 0.103 26.321 C -0.036 24.575 -0.033 22.855 0.103 21.181 C 0.374 17.833 1.176 14.671 2.434 11.86 C 4.95 6.239 9.289 2.026 14.857 0.553 C 20.424 -0.921 26.166 0.625 30.947 4.316 C 31.246 4.547 31.541 4.786 31.832 5.033 C 31.977 5.157 32.121 5.282 32.265 5.409 L 32.025 5.409 L 32.025 20.945 L 32.025 20.946 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 31.672,
    height: 29.982,
    viewBox: "0 0 31.672 29.982",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.132,
      top: 4.706,
      width: 31.672,
      height: 29.982,
      color: "rgb(236,236,226)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 31.365 20.291 L 31.365 29.503 L 0.775 29.503 L 0.775 29.982 C 0.728 29.767 0.682 29.552 0.639 29.338 C 0.552 28.909 0.475 28.48 0.406 28.052 C 0.269 27.196 0.167 26.344 0.1 25.499 C -0.035 23.807 -0.032 22.141 0.1 20.519 C 0.363 17.276 1.139 14.212 2.358 11.49 C 4.795 6.044 9 1.963 14.393 0.535 C 19.786 -0.892 25.348 0.605 29.98 4.18 C 30.559 4.627 31.124 5.107 31.672 5.616 L 31.366 5.616 L 31.366 20.289 L 31.365 20.291 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 31.044,
    height: 29.015,
    viewBox: "0 0 31.044 29.015",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.791,
      top: 5.527,
      width: 31.044,
      height: 29.015,
      color: "rgb(235,235,225)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.705 19.637 L 30.705 28.682 L 0.75 28.682 L 0.75 29.015 C 0.704 28.807 0.66 28.599 0.618 28.391 C 0.535 27.976 0.459 27.561 0.393 27.147 C 0.26 26.319 0.162 25.495 0.097 24.676 C -0.033 23.039 -0.031 21.426 0.097 19.857 C 0.351 16.718 1.103 13.753 2.282 11.119 C 4.641 5.849 8.709 1.899 13.928 0.518 C 19.148 -0.863 24.53 0.587 29.012 4.046 C 29.573 4.478 30.119 4.942 30.649 5.436 C 30.782 5.559 30.913 5.685 31.044 5.812 L 30.705 5.812 L 30.705 19.636 L 30.705 19.637 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 30.385,
    height: 28.047,
    viewBox: "0 0 30.385 28.047",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.447,
      top: 6.35,
      width: 30.385,
      height: 28.047,
      color: "rgb(234,234,223)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.045 18.981 L 30.045 27.861 L 0.725 27.861 L 0.725 28.047 C 0.68 27.846 0.638 27.645 0.598 27.445 C 0.517 27.044 0.445 26.642 0.38 26.242 C 0.252 25.442 0.157 24.645 0.094 23.854 C -0.032 22.272 -0.03 20.713 0.094 19.195 C 0.339 16.161 1.066 13.295 2.206 10.748 C 4.486 5.654 8.419 1.835 13.464 0.501 C 18.51 -0.834 23.712 0.567 28.046 3.911 C 28.588 4.329 29.116 4.778 29.628 5.255 C 29.884 5.493 30.136 5.739 30.385 5.992 L 30.046 5.992 L 30.046 18.981 L 30.045 18.981 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 29.694,
    height: 27.081,
    viewBox: "0 0 29.694 27.081",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.107,
      top: 7.169,
      width: 29.694,
      height: 27.081,
      color: "rgb(233,233,222)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 29.386 18.328 L 29.386 27.04 L 0.701 27.04 L 0.701 27.081 C 0.657 26.887 0.616 26.693 0.577 26.499 C 0.499 26.112 0.429 25.724 0.367 25.338 C 0.243 24.565 0.151 23.796 0.09 23.032 C -0.032 21.504 -0.028 19.999 0.09 18.534 C 0.328 15.605 1.029 12.837 2.13 10.378 C 4.331 5.459 8.128 1.773 13 0.484 C 17.871 -0.806 22.895 0.547 27.079 3.776 C 27.602 4.18 28.112 4.613 28.607 5.074 C 28.854 5.304 29.098 5.542 29.338 5.785 C 29.458 5.908 29.577 6.031 29.694 6.156 L 29.386 6.156 L 29.386 18.327 L 29.386 18.328 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.970,
    height: 26.674,
    viewBox: "0 0 28.970 26.674",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.769,
      top: 7.992,
      width: 28.97,
      height: 26.674,
      color: "rgb(232,232,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28.726 17.672 L 28.726 26.217 L 0.806 26.217 L 0.806 26.674 C -2.112 14.685 3.14 2.952 12.536 0.466 C 17.233 -0.777 22.078 0.527 26.112 3.641 C 27.12 4.42 28.078 5.311 28.97 6.305 L 28.726 6.305 L 28.726 17.672 L 28.726 17.672 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.530,
    height: 25.686,
    viewBox: "0 0 28.530 25.686",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.428,
      top: 8.814,
      width: 28.53,
      height: 25.686,
      color: "rgb(231,231,220)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28.066 17.018 L 28.066 25.396 L 0.776 25.396 L 0.776 25.686 C -2.033 14.142 3.024 2.843 12.071 0.449 C 16.595 -0.748 21.26 0.508 25.145 3.506 C 26.116 4.255 27.038 5.114 27.898 6.071 C 28.113 6.31 28.323 6.555 28.53 6.806 L 28.066 6.806 L 28.066 17.018 L 28.066 17.018 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 27.433,
    height: 24.699,
    viewBox: "0 0 27.433 24.699",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.09,
      top: 9.635,
      width: 27.433,
      height: 24.699,
      color: "rgb(230,230,219)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 27.406 16.362 L 27.406 24.575 L 0.746 24.575 L 0.746 24.699 C -1.955 13.598 2.908 2.733 11.607 0.432 C 15.957 -0.719 20.442 0.489 24.177 3.371 C 25.111 4.092 25.998 4.917 26.824 5.837 C 27.031 6.067 27.234 6.303 27.433 6.544 L 27.406 6.544 L 27.406 16.362 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26.896,
    height: 24.207,
    viewBox: "0 0 26.896 24.207",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.746,
      top: 10.457,
      width: 26.896,
      height: 24.207,
      color: "rgb(229,229,218)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 26.746 15.709 L 26.746 23.753 L 0.843 23.753 L 0.843 24.207 C 0.799 24.042 0.757 23.877 0.717 23.71 C -1.877 13.054 2.791 2.624 11.142 0.414 C 15.318 -0.69 19.624 0.469 23.21 3.237 C 24.106 3.929 24.958 4.721 25.751 5.604 C 26.148 6.045 26.529 6.509 26.896 6.994 L 26.746 6.994 L 26.746 15.709 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26.289,
    height: 23.199,
    viewBox: "0 0 26.289 23.199",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.409,
      top: 11.276,
      width: 26.289,
      height: 23.199,
      color: "rgb(228,228,217)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 26.086 15.055 L 26.086 22.933 L 0.808 22.933 L 0.808 23.199 C 0.766 23.042 0.726 22.883 0.686 22.723 C -1.798 12.51 2.674 2.515 10.678 0.397 C 14.679 -0.662 18.805 0.45 22.243 3.102 C 23.102 3.765 23.918 4.524 24.678 5.371 C 25.058 5.794 25.425 6.238 25.775 6.703 C 25.95 6.935 26.122 7.173 26.289 7.416 L 26.085 7.416 L 26.085 15.055 L 26.086 15.055 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 25.614,
    height: 22.640,
    viewBox: "0 0 25.614 22.640",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.069,
      top: 12.098,
      width: 25.614,
      height: 22.64,
      color: "rgb(227,227,215)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 25.426 14.399 L 25.426 22.111 L 0.896 22.111 L 0.896 22.64 C 0.811 22.342 0.731 22.04 0.657 21.735 C -1.72 11.967 2.559 2.406 10.214 0.38 C 14.042 -0.633 17.989 0.43 21.276 2.967 C 22.919 4.236 24.398 5.873 25.614 7.804 L 25.426 7.804 L 25.426 14.4 L 25.426 14.399 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 25.273,
    height: 21.611,
    viewBox: "0 0 25.273 21.611",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.729,
      top: 12.92,
      width: 25.273,
      height: 21.611,
      color: "rgb(226,226,214)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.765 13.745 L 24.765 21.29 L 0.855 21.29 L 0.855 21.611 C 0.773 21.326 0.697 21.038 0.627 20.747 C -1.642 11.422 2.442 2.296 9.75 0.363 C 13.403 -0.604 17.171 0.411 20.309 2.832 C 21.878 4.043 23.29 5.605 24.45 7.448 C 24.741 7.909 25.015 8.386 25.273 8.881 L 24.766 8.881 L 24.766 13.745 L 24.765 13.745 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 24.424,
    height: 20.582,
    viewBox: "0 0 24.424 20.582",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.388,
      top: 13.742,
      width: 24.424,
      height: 20.582,
      color: "rgb(224,224,213)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24.106 13.09 L 24.106 20.468 L 0.815 20.468 L 0.815 20.582 C 0.737 20.31 0.664 20.036 0.597 19.759 C -1.564 10.879 2.326 2.187 9.285 0.345 C 12.765 -0.575 16.353 0.391 19.342 2.697 C 20.836 3.85 22.18 5.338 23.286 7.094 C 23.562 7.532 23.824 7.988 24.069 8.459 C 24.192 8.694 24.311 8.933 24.424 9.177 L 24.106 9.177 L 24.106 13.09 L 24.106 13.09 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23.516,
    height: 19.937,
    viewBox: "0 0 23.516 19.937",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.046,
      top: 14.563,
      width: 23.516,
      height: 19.937,
      color: "rgb(223,223,212)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.446 12.436 L 23.446 19.647 L 0.888 19.647 L 0.888 19.937 C 0.849 19.809 0.811 19.681 0.774 19.553 C 0.7 19.295 0.632 19.034 0.567 18.771 C -1.486 10.334 2.21 2.077 8.821 0.328 C 12.126 -0.547 15.535 0.371 18.374 2.562 C 19.793 3.658 21.071 5.072 22.121 6.739 C 22.646 7.572 23.114 8.469 23.516 9.422 L 23.446 9.422 L 23.446 12.436 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 23.219,
    height: 19.247,
    viewBox: "0 0 23.219 19.247",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.709,
      top: 15.383,
      width: 23.219,
      height: 19.247,
      color: "rgb(222,222,210)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.786 11.781 L 22.786 18.827 L 0.955 18.827 L 0.955 19.247 C 0.798 18.771 0.658 18.283 0.537 17.783 C -1.407 9.791 2.093 1.968 8.356 0.311 C 14.62 -1.346 21.274 3.789 23.219 11.781 L 22.786 11.781 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.437,
    height: 18.178,
    viewBox: "0 0 22.437 18.178",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.371,
      top: 16.203,
      width: 22.437,
      height: 18.178,
      color: "rgb(221,221,209)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21.929 11.127 C 22.389 13.014 22.526 14.891 22.382 16.67 L 22.126 16.67 L 22.126 18.005 L 0.903 18.005 L 0.903 18.178 C 0.754 17.728 0.622 17.268 0.507 16.795 C -1.329 9.247 1.977 1.859 7.893 0.294 C 13.808 -1.272 20.093 3.579 21.929 11.127 L 21.929 11.127 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21.117,
    height: 17.735,
    viewBox: "0 0 21.117 17.735",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.026,
      top: 17.025,
      width: 21.117,
      height: 17.735,
      color: "rgb(219,219,208)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.639 10.473 C 21.071 12.249 21.201 14.016 21.066 15.69 C 21.032 16.108 20.981 16.52 20.915 16.926 C 20.881 17.13 20.845 17.33 20.804 17.529 L 20.804 17.184 L 1.071 17.184 L 1.071 17.735 C 0.994 17.529 0.92 17.32 0.85 17.108 C 0.71 16.685 0.586 16.251 0.478 15.807 C -1.251 8.703 1.861 1.749 7.428 0.276 C 12.996 -1.197 18.911 3.368 20.639 10.472 L 20.639 10.473 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.798,
    height: 16.627,
    viewBox: "0 0 19.798 16.627",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.689,
      top: 17.847,
      width: 19.798,
      height: 16.627,
      color: "rgb(218,218,206)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.35 9.817 C 19.755 11.483 19.877 13.139 19.749 14.708 C 19.717 15.101 19.67 15.488 19.608 15.868 C 19.577 16.058 19.541 16.246 19.503 16.433 L 19.503 16.363 L 1.003 16.363 L 1.003 16.627 C 0.931 16.434 0.862 16.238 0.796 16.039 C 0.665 15.642 0.549 15.235 0.448 14.819 C -1.173 8.159 1.744 1.64 6.964 0.259 C 12.184 -1.122 17.729 3.158 19.349 9.817 L 19.35 9.817 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18.477,
    height: 16.052,
    viewBox: "0 0 18.477 16.052",
    fill: "none",
    style: {
      position: "absolute",
      left: 18.35,
      top: 18.668,
      width: 18.477,
      height: 16.052,
      color: "rgb(217,217,205)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.059 9.163 C 18.437 10.717 18.551 12.263 18.432 13.727 C 18.372 14.46 18.255 15.171 18.084 15.855 L 18.084 15.542 L 1.149 15.542 L 1.149 16.052 C 0.853 15.351 0.607 14.608 0.418 13.831 C -1.095 7.615 1.628 1.53 6.499 0.242 C 11.371 -1.047 16.546 2.947 18.059 9.163 L 18.059 9.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.158,
    height: 14.905,
    viewBox: "0 0 17.158 14.905",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.008,
      top: 19.489,
      width: 17.158,
      height: 14.905,
      color: "rgb(215,215,203)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.77 8.509 C 17.121 9.953 17.227 11.388 17.116 12.748 C 17.062 13.428 16.953 14.089 16.793 14.723 L 16.793 14.72 L 1.067 14.72 L 1.067 14.905 C 0.792 14.254 0.564 13.565 0.388 12.843 C -1.016 7.071 1.512 1.422 6.035 0.224 C 10.558 -0.973 15.364 2.737 16.769 8.508 L 16.77 8.509 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.838,
    height: 14.449,
    viewBox: "0 0 15.838 14.449",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.667,
      top: 20.31,
      width: 15.838,
      height: 14.449,
      color: "rgb(214,214,202)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.479 7.855 C 15.803 9.187 15.901 10.512 15.799 11.767 C 15.748 12.395 15.648 13.005 15.501 13.591 C 15.428 13.883 15.343 14.17 15.247 14.449 L 15.247 13.9 L 1.183 13.9 L 1.183 14.204 C 1.114 14.058 1.049 13.91 0.985 13.76 C 0.731 13.158 0.52 12.522 0.358 11.856 C -0.938 6.528 1.396 1.312 5.571 0.207 C 9.747 -0.898 14.183 2.526 15.48 7.854 L 15.479 7.855 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.518,
    height: 13.414,
    viewBox: "0 0 14.518 13.414",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.325,
      top: 21.132,
      width: 14.518,
      height: 13.414,
      color: "rgb(213,213,201)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.19 7.2 C 14.487 8.421 14.576 9.636 14.483 10.786 C 14.436 11.362 14.344 11.921 14.209 12.458 C 14.142 12.726 14.065 12.989 13.976 13.244 L 13.976 13.078 L 1.28 13.078 L 1.28 13.414 C 1.145 13.155 1.019 12.888 0.903 12.612 C 0.67 12.061 0.477 11.478 0.328 10.867 C -0.86 5.983 1.279 1.203 5.107 0.19 C 8.935 -0.823 13.001 2.316 14.19 7.199 L 14.19 7.2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.198,
    height: 12.717,
    viewBox: "0 0 13.198 12.717",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.987,
      top: 21.954,
      width: 13.198,
      height: 12.717,
      color: "rgb(211,211,199)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.9 6.544 C 13.44 8.765 13.224 10.961 12.437 12.717 L 12.437 12.256 L 1.353 12.256 L 1.353 12.542 C 1.288 12.428 1.225 12.312 1.164 12.194 C 1.041 11.959 0.926 11.716 0.821 11.465 C 0.609 10.964 0.434 10.434 0.298 9.879 C -0.782 5.439 1.163 1.093 4.643 0.173 C 8.123 -0.748 11.819 2.105 12.9 6.545 L 12.9 6.544 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.878,
    height: 11.590,
    viewBox: "0 0 11.878 11.590",
    fill: "none",
    style: {
      position: "absolute",
      left: 21.648,
      top: 22.774,
      width: 11.878,
      height: 11.59,
      color: "rgb(210,210,198)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.609 5.891 C 12.096 7.889 11.901 9.866 11.194 11.447 L 11.194 11.435 L 1.4 11.435 L 1.4 11.59 C 0.902 10.801 0.512 9.891 0.269 8.892 C -0.704 4.895 1.047 0.985 4.178 0.155 C 7.31 -0.673 10.637 1.895 11.609 5.89 L 11.609 5.891 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.559,
    height: 11.158,
    viewBox: "0 0 10.559 11.158",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.305,
      top: 23.595,
      width: 10.559,
      height: 11.158,
      color: "rgb(208,208,196)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.32 5.237 C 10.752 7.013 10.579 8.77 9.95 10.175 C 9.793 10.527 9.607 10.856 9.395 11.158 L 9.395 10.615 L 1.593 10.615 L 1.593 10.809 C 1.471 10.647 1.355 10.478 1.244 10.302 C 0.802 9.6 0.455 8.791 0.239 7.903 C -0.625 4.351 0.93 0.874 3.714 0.138 C 6.497 -0.598 9.455 1.684 10.319 5.236 L 10.32 5.237 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.238,
    height: 10.141,
    viewBox: "0 0 9.238 10.141",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.964,
      top: 24.418,
      width: 9.238,
      height: 10.141,
      color: "rgb(207,207,195)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.029 4.581 C 9.407 6.135 9.256 7.672 8.706 8.902 C 8.568 9.209 8.405 9.497 8.22 9.762 C 8.128 9.894 8.029 10.021 7.926 10.141 L 7.926 9.793 L 1.728 9.793 L 1.728 9.863 C 1.496 9.605 1.282 9.321 1.089 9.015 C 0.702 8.401 0.398 7.693 0.209 6.916 C -0.547 3.807 0.814 0.766 3.25 0.121 C 5.686 -0.523 8.274 1.474 9.03 4.581 L 9.029 4.581 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.919,
    height: 9.045,
    viewBox: "0 0 7.919 9.045",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.629,
      top: 25.237,
      width: 7.919,
      height: 9.045,
      color: "rgb(206,206,193)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.74 3.927 C 8.064 5.259 7.934 6.577 7.462 7.631 C 7.226 8.157 6.905 8.619 6.512 8.983 L 6.512 8.971 L 2.116 8.971 L 2.116 9.045 C 1.22 8.353 0.503 7.26 0.179 5.927 C -0.469 3.263 0.698 0.656 2.786 0.103 C 4.873 -0.449 7.091 1.263 7.74 3.927 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.599,
    height: 8.212,
    viewBox: "0 0 6.599 8.212",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.287,
      top: 26.059,
      width: 6.599,
      height: 8.212,
      color: "rgb(204,204,191)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.449 3.272 C 6.99 5.493 6.017 7.665 4.277 8.126 C 2.537 8.586 0.689 7.159 0.149 4.94 C -0.391 2.719 0.581 0.547 2.321 0.086 C 4.061 -0.374 5.909 1.053 6.449 3.272 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.279,
    height: 6.570,
    viewBox: "0 0 5.279 6.570",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.948,
      top: 26.88,
      width: 5.279,
      height: 6.57,
      color: "rgb(203,203,190)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.16 2.618 C 5.592 4.394 4.815 6.133 3.422 6.501 C 2.03 6.87 0.552 5.728 0.119 3.952 C -0.313 2.176 0.466 0.438 1.857 0.069 C 3.249 -0.299 4.727 0.842 5.16 2.618 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.959,
    height: 4.927,
    viewBox: "0 0 3.959 4.927",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.61,
      top: 27.7,
      width: 3.959,
      height: 4.927,
      color: "rgb(201,201,188)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.87 1.963 C 4.194 3.296 3.61 4.599 2.567 4.875 C 1.523 5.152 0.414 4.295 0.09 2.964 C -0.235 1.631 0.349 0.328 1.392 0.052 C 2.436 -0.225 3.546 0.632 3.87 1.963 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.605,
    height: 3.311,
    viewBox: "0 0 2.605 3.311",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.980,-0.201,0.202,0.979,25.978,28.794)",
      transformOrigin: "0 0",
      width: 2.605,
      height: 3.311,
      color: "rgb(200,200,187)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.303 3.311 C 2.022 3.311 2.605 2.57 2.605 1.656 C 2.605 0.741 2.022 0 1.303 0 C 0.583 0 0 0.741 0 1.656 C 0 2.57 0.583 3.311 1.303 3.311 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1.320,
    height: 1.642,
    viewBox: "0 0 1.320 1.642",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.927,
      top: 29.344,
      width: 1.32,
      height: 1.642,
      color: "rgb(198,198,185)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.29 0.654 C 1.398 1.099 1.203 1.532 0.856 1.624 C 0.508 1.717 0.138 1.431 0.03 0.988 C -0.078 0.543 0.117 0.109 0.464 0.017 C 0.812 -0.075 1.182 0.211 1.29 0.654 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 15.530,
    height: 9.131,
    viewBox: "0 0 15.530 9.131",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.658,
      top: 36.869,
      width: 15.53,
      height: 9.131
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.707 0.418 C 10.074 0.577 5.788 3.315 2.768 5.228 C 1.115 6.275 -2.227 9.454 2.21 9.105 C 3.926 8.969 4.754 8.912 5.986 8.035 C 7.792 6.748 9.432 5.188 11.409 4.121 C 12.886 3.324 14.989 2.178 15.53 0.265 C 15.309 -0.062 15.063 -0.165 13.708 0.418 L 13.707 0.418 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.906,
      top: 0.63,
      width: 3.003,
      height: 7.923,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.0027740001678467,
      height: 7.9226603507995605,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.002,
      height: 7.922,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.002,
    height: 7.922,
    viewBox: "0 0 3.002 7.922",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.002,
      height: 7.922
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.747 4.369 C 2.469 2.887 1.822 1.419 0.906 0.194 C 0.828 0.089 0.715 -0.029 0.616 0.006 C 0.56 0.026 0.531 0.088 0.507 0.147 C -0.365 2.263 -0.096 5.134 1.191 7.464 C 1.276 7.618 1.375 7.781 1.515 7.86 C 1.601 7.909 1.693 7.922 1.782 7.922 C 2.483 7.927 2.94 7.199 2.995 6.407 C 3.05 5.616 2.795 4.774 2.545 3.964",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.792,
      top: 0,
      width: 4.854,
      height: 8.714,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.854034900665283,
      height: 8.714438438415527,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 4.854,
      height: 8.715,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.854,
    height: 8.715,
    viewBox: "0 0 4.854 8.715",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.854,
      height: 8.715
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.768 3.489 C 4.247 2.003 3.144 0.758 1.753 0.088 C 1.662 0.044 1.567 0.002 1.464 0 C 1.29 -0.004 1.13 0.11 1.003 0.239 C 0.708 0.54 0.531 0.938 0.393 1.337 C -0.379 3.585 0.005 6.177 1.385 8.012 C 1.622 8.326 1.913 8.636 2.298 8.702 C 2.906 8.806 3.459 8.272 3.809 7.734 C 4.663 6.423 5.018 4.792 4.782 3.268",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25.745,
      top: 2.904,
      width: 2.827,
      height: 6.617,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.826814651489258,
      height: 6.617166519165039,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.001,
      top: 0.002,
      width: 2.826,
      height: 6.618,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.826,
    height: 6.618,
    viewBox: "0 0 2.826 6.618",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.826,
      height: 6.618
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.069 4.175 C 0.006 3.047 -0.014 1.925 0.01 0.815 C 0.017 0.492 0.058 0.118 0.311 0.021 C 0.493 -0.049 0.726 0.064 0.892 0.238 C 1.058 0.413 1.173 0.639 1.283 0.86 C 1.553 1.4 1.823 1.94 2.093 2.48 C 2.25 2.795 2.408 3.111 2.534 3.438 C 2.977 4.589 2.952 5.975 2.206 6.618 C 1.476 5.683 0.745 4.748 0.015 3.813",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.74,
      top: 4.458,
      width: 2.423,
      height: 3.31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.422516345977783,
      height: 3.3098063468933105,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 2.423,
      height: 3.309,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.423,
    height: 3.309,
    viewBox: "0 0 2.423 3.309",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.423,
      height: 3.309
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.119 2.442 C -0.029 1.828 -0.039 1.2 0.091 0.642 C 0.163 0.335 0.315 0.018 0.601 0.001 C 0.879 -0.016 1.152 0.26 1.361 0.527 C 1.705 0.965 2.006 1.447 2.253 1.954 C 2.35 2.155 2.444 2.378 2.418 2.581 C 2.383 2.866 2.136 3.002 1.913 3.106 C 1.65 3.227 1.373 3.351 1.066 3.296 C 0.594 3.211 0.147 2.648 0.127 2.109",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.84,
      top: 1.776,
      width: 4.471,
      height: 9.17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.471015453338623,
      height: 9.170259475708008,
      clipPath: "inset(-0.000px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.471,
      height: 9.17,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.471,
    height: 9.170,
    viewBox: "0 0 4.471 9.170",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.471,
      height: 9.17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.204 6.085 C 0.342 4.911 0.481 3.737 0.62 2.562 C 0.737 1.564 0.935 0.437 1.729 0.054 C 1.817 0.012 1.917 -0.02 2.017 0.015 C 2.193 0.076 2.289 0.301 2.357 0.495 C 2.905 2.057 3.453 3.618 4 5.181 C 4.191 5.725 4.384 6.277 4.449 6.837 C 4.532 7.552 4.383 8.28 3.964 8.736 C 3.543 9.192 2.832 9.323 2.242 8.963 C 1.955 8.787 1.716 8.517 1.494 8.239 C 0.908 7.505 0.403 6.691 0 5.829",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.281,
      top: 5.095,
      width: 4.445,
      height: 5.77,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.444826126098633,
      height: 5.769941329956055,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 4.445,
      height: 5.769,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.445,
    height: 5.769,
    viewBox: "0 0 4.445 5.769",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.445,
      height: 5.769
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.007 2.826 C 0.693 2.027 0.378 1.228 0.064 0.429 C 0.021 0.319 -0.023 0.195 0.013 0.1 C 0.08 -0.078 0.329 0.014 0.501 0.125 C 1.302 0.648 2.108 1.243 2.693 2.082 C 2.947 2.448 3.152 2.849 3.355 3.248 C 3.677 3.88 3.999 4.512 4.321 5.143 C 4.432 5.36 4.522 5.687 4.344 5.758 C 4.273 5.787 4.186 5.755 4.106 5.724 C 3.266 5.397 2.372 5.029 1.752 4.236 C 1.553 3.981 1.392 3.693 1.233 3.407 C 1.1 3.169 0.967 2.93 0.834 2.692",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.797,
      top: 6.889,
      width: 3.54,
      height: 3.95,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.539656400680542,
      height: 3.9499142169952393,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.002,
      width: 3.54,
      height: 3.95,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.540,
    height: 3.950,
    viewBox: "0 0 3.540 3.950",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.54,
      height: 3.95
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.46 2.695 C 0.326 2.085 0.192 1.473 0.058 0.862 C -0.003 0.581 -0.054 0.247 0.115 0.085 C 0.276 -0.069 0.545 0.016 0.774 0.106 C 1.235 0.288 1.708 0.478 2.111 0.83 C 2.721 1.363 3.08 2.182 3.41 2.958 C 3.477 3.116 3.546 3.282 3.539 3.443 C 3.532 3.636 3.414 3.78 3.273 3.859 C 2.798 4.122 2.156 3.764 1.617 3.416 C 1.205 3.15 0.791 2.885 0.379 2.619",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.263,
      top: 4.817,
      width: 3.156,
      height: 4.018,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.155818462371826,
      height: 4.018409729003906,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.155,
      height: 4.018,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.155,
    height: 4.018,
    viewBox: "0 0 3.155 4.018",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.155,
      height: 4.018
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.953 3.382 C 2.426 2.255 1.747 1.196 0.953 0.263 C 0.835 0.125 0.684 -0.024 0.539 0.003 C 0.478 0.015 0.429 0.058 0.387 0.104 C 0.114 0.398 -0.009 0.852 0 1.323 C 0.009 1.793 0.142 2.28 0.331 2.739 C 0.425 2.967 0.537 3.197 0.706 3.366 C 0.932 3.594 1.222 3.683 1.497 3.755 C 1.78 3.83 2.061 3.899 2.344 3.961 C 2.632 4.024 2.951 4.073 3.155 3.889",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.046,
      top: 3.609,
      width: 3.851,
      height: 5.686,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.850654363632202,
      height: 5.685952186584473,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 3.851,
      height: 5.685,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.851,
    height: 5.685,
    viewBox: "0 0 3.851 5.685",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.851,
      height: 5.685
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.805 3.068 C 3.084 2.693 2.54 2.026 1.982 1.41 C 1.424 0.793 0.79 0.188 0.011 0 C -0.07 1.774 0.289 3.582 1.042 5.194 C 1.146 5.417 1.297 5.664 1.528 5.684 C 1.646 5.694 1.757 5.64 1.862 5.587 C 2.379 5.326 2.902 5.048 3.299 4.613 C 3.696 4.177 3.949 3.55 3.815 2.948",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.782,
      top: 6.363,
      width: 5.284,
      height: 5.743,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.283703804016113,
      height: 5.743031978607178,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.001,
      width: 5.284,
      height: 5.744,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.284,
    height: 5.744,
    viewBox: "0 0 5.284 5.744",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.284,
      height: 5.744
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.873 3.212 C -0.616 1.127 0.062 -0.498 0.968 0.141 C 1.021 0.178 1.043 0.053 1.098 0.046 C 1.154 0.04 1.213 0.072 1.269 0.103 C 2.358 0.726 3.399 1.512 4.352 2.431 C 4.775 2.838 5.216 3.345 5.277 3.926 C 5.344 4.575 4.913 5.029 4.508 5.385 C 4.305 5.564 4.081 5.749 3.801 5.744 C 3.55 5.74 3.295 5.583 3.065 5.407 C 2.664 5.1 2.304 4.72 1.945 4.342 C 1.588 3.965 1.231 3.589 0.874 3.213",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.45,
      top: 3.965,
      width: 2.961,
      height: 5.795,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.9610350131988525,
      height: 5.795219421386719,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.004,
      top: -0.001,
      width: 2.961,
      height: 5.794,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.961,
    height: 5.794,
    viewBox: "0 0 2.961 5.794",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.961,
      height: 5.794
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.537 3.965 C 0.733 3.549 0.656 2.983 0.503 2.469 C 0.351 1.955 0.128 1.452 0.032 0.933 C 0.003 0.779 -0.013 0.624 0.013 0.482 C 0.088 0.081 0.504 -0.082 0.88 0.039 C 1.256 0.16 1.585 0.494 1.854 0.851 C 2.899 2.242 3.251 4.207 2.709 5.625 C 2.68 5.699 2.644 5.778 2.572 5.792 C 2.5 5.807 2.42 5.751 2.351 5.696 C 1.697 5.184 1.091 4.574 0.557 3.894",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.063,
      top: 9.741,
      width: 4.766,
      height: 7.773,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.766464710235596,
      height: 7.772623538970947,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.767,
      height: 7.772,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.767,
    height: 7.772,
    viewBox: "0 0 4.767 7.772",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.767,
      height: 7.772
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.013 5.588 C 2.57 4.569 2.105 3.517 1.366 2.721 C 1.073 2.406 0.739 2.132 0.504 1.762 C 0.258 1.374 0.145 0.92 0.038 0.48 C 0.004 0.338 -0.028 0.176 0.041 0.075 C 0.15 -0.084 0.401 0.04 0.581 0.17 C 1.682 0.961 2.839 1.815 3.521 3.085 C 3.725 3.463 3.878 3.867 4.022 4.27 C 4.201 4.771 4.366 5.277 4.518 5.784 C 4.706 6.411 4.872 7.096 4.684 7.641 C 4.663 7.703 4.63 7.767 4.57 7.772 C 4.499 7.778 4.431 7.7 4.38 7.629 C 3.873 6.939 3.4 6.219 2.966 5.474",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 4.071,
    height: 2.958,
    viewBox: "0 0 4.071 2.958",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.914,
      top: 10.248,
      width: 4.071,
      height: 2.958
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.876 0.854 C 3.502 0.406 2.971 0.218 2.477 0.117 C 1.768 -0.028 1.058 -0.045 0.398 0.105 C 0.233 0.143 0.052 0.211 0.009 0.396 C -0.024 0.542 0.04 0.714 0.111 0.865 C 0.767 2.249 2.248 3.161 3.445 2.918 C 3.724 2.861 4.014 2.713 4.064 2.392 C 4.085 2.255 4.059 2.105 4.032 1.958 C 3.967 1.595 3.902 1.232 3.837 0.869",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.333,
      top: 8.778,
      width: 4.452,
      height: 2.656,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.452192783355713,
      height: 2.655836582183838,
      clipPath: "inset(0px 0px 0px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.452,
      height: 2.655,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.452,
    height: 2.655,
    viewBox: "0 0 4.452 2.655",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.452,
      height: 2.655
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.248 2.182 C 4.058 1.685 3.64 1.27 3.196 1.136 C 2.84 1.028 2.486 1.091 2.13 0.987 C 1.533 0.812 1.019 0.198 0.422 0.022 C 0.342 -0.002 0.255 -0.016 0.196 0.03 C 0.156 0.06 0.134 0.112 0.116 0.164 C -0.01 0.522 -0.034 0.943 0.048 1.362 C 0.094 1.599 0.195 1.865 0.39 1.984 C 0.577 2.098 0.778 2.037 0.958 1.986 C 2.052 1.683 3.335 1.929 4.452 2.655",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.864,
      top: 7.084,
      width: 4.826,
      height: 6.004,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.826209545135498,
      height: 6.00396728515625,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.826,
      height: 6.003,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.826,
    height: 6.003,
    viewBox: "0 0 4.826 6.003",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.826,
      height: 6.003
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.547 4.263 C 4.396 3.609 3.917 3.067 3.454 2.589 C 2.664 1.772 1.844 0.994 0.999 0.26 C 0.857 0.136 0.699 0.007 0.537 0 C 0.339 -0.008 0.202 0.17 0.125 0.362 C -0.105 0.935 0.018 1.679 0.211 2.362 C 0.409 3.061 0.696 3.782 1.195 4.296 C 1.455 4.563 1.758 4.759 2.056 4.952 C 2.337 5.133 2.619 5.314 2.899 5.495 C 3.19 5.683 3.486 5.873 3.795 5.959 C 4.106 6.046 4.437 6.012 4.635 5.787 C 4.988 5.385 4.783 4.62 4.564 4",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.896,
    height: 2.984,
    viewBox: "0 0 3.896 2.984",
    fill: "none",
    style: {
      position: "absolute",
      left: 29.055,
      top: 8.416,
      width: 3.896,
      height: 2.984
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.779 2.596 C 3.856 2.076 3.63 1.644 3.281 1.341 C 2.932 1.039 2.467 0.849 2.007 0.661 C 1.485 0.449 0.962 0.236 0.44 0.024 C 0.398 0.007 0.351 -0.01 0.296 0.007 C 0.215 0.031 0.156 0.112 0.122 0.182 C -0.041 0.51 -0.006 0.823 0.032 1.116 C 0.102 1.649 0.2 2.222 0.691 2.457 C 0.823 2.519 0.976 2.554 1.131 2.588 C 1.806 2.734 2.495 2.86 3.195 2.965 C 3.324 2.984 3.462 3.001 3.61 2.951 C 3.758 2.899 3.911 2.753 3.895 2.638",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.691,
      top: 7.358,
      width: 1.689,
      height: 4.178,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.6892138719558716,
      height: 4.1782331466674805,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 1.688,
      height: 4.179,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.688,
    height: 4.179,
    viewBox: "0 0 1.688 4.179",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.688,
      height: 4.179
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.688 1.198 C 1.482 1.079 1.328 0.775 1.114 0.764 C 0.966 0.756 0.868 0.91 0.859 1.078 C 0.851 1.246 0.911 1.422 0.97 1.59 C 1.123 2.031 1.276 2.471 1.429 2.911 C 1.575 3.332 1.724 3.786 1.642 4.179 C 1.353 4.147 1.138 3.782 0.997 3.464 C 0.549 2.455 0.219 1.398 0.017 0.338 C 0.004 0.268 -0.009 0.194 0.008 0.132 C 0.039 0.019 0.159 -0.02 0.268 0.009 C 0.378 0.04 0.479 0.123 0.573 0.206 C 0.803 0.408 1.024 0.627 1.235 0.857",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 2.228,
    height: 4.285,
    viewBox: "0 0 2.228 4.285",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.109,
      top: 5.78,
      width: 2.228,
      height: 4.285
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.845 1.566 C 1.505 0.942 1.003 0.412 0.438 0.082 C 0.334 0.021 0.208 -0.034 0.123 0.025 C 0.054 0.073 0.037 0.18 0.028 0.279 C -0.052 1.11 0.041 1.999 0.297 2.859 C 0.465 3.424 0.771 4.05 1.262 4.242 C 1.381 4.288 1.508 4.304 1.61 4.256 C 1.713 4.207 1.78 4.101 1.843 3.998 C 2.025 3.699 2.213 3.383 2.227 2.99 C 2.238 2.696 2.15 2.387 2.062 2.087 C 1.979 1.804 1.897 1.52 1.814 1.237",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.249,
    height: 6.890,
    viewBox: "0 0 5.249 6.890",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.584,
      top: 7.312,
      width: 5.249,
      height: 6.89
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.218 3.908 C 0.66 2.76 0.252 1.54 0.017 0.315 C 0.002 0.236 -0.012 0.152 0.017 0.089 C 0.054 0.011 0.145 -0.004 0.228 0.001 C 0.838 0.036 1.321 0.778 1.865 1.228 C 2.416 1.685 3.068 1.853 3.683 2.126 C 4.298 2.398 4.954 2.862 5.196 3.569 C 5.241 3.7 5.269 3.843 5.232 3.96 C 5.179 4.127 5.014 4.186 4.888 4.283 C 4.265 4.759 4.655 6.078 4.205 6.762 C 4.165 6.823 4.113 6.881 4.041 6.889 C 3.955 6.898 3.864 6.832 3.785 6.767 C 2.759 5.934 1.958 4.77 1.179 3.631",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.996,
      top: 0.584,
      width: 5.904,
      height: 9.269,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.904065132141113,
      height: 9.268924713134766,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.904,
      height: 9.269,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.904,
    height: 9.269,
    viewBox: "0 0 5.904 9.269",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.904,
      height: 9.269
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.22 4.087 C 0.237 2.332 0.698 0.973 1.535 0.204 C 1.719 0.035 1.952 -0.104 2.292 0.106 C 2.729 0.375 3.145 1.087 3.481 1.714 C 4.036 2.753 4.569 3.8 5.08 4.851 C 5.453 5.618 5.83 6.444 5.894 7.102 C 5.938 7.55 5.829 7.863 5.721 8.163 C 5.492 8.801 5.191 9.473 4.478 9.212 C 3.923 9.009 3.274 8.291 2.692 7.578 C 1.751 6.429 0.846 5.184 0 3.88",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32.054,
      top: 1.683,
      width: 4.187,
      height: 10.104,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.1870245933532715,
      height: 10.10391902923584,
      clipPath: "inset(0px 0px 0px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.187,
      height: 10.104,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.187,
    height: 10.104,
    viewBox: "0 0 4.187 10.104",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.187,
      height: 10.104
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.04 3.416 C -0.03 2.67 -0.008 1.912 0.237 1.268 C 0.483 0.624 0.976 0.106 1.614 0.012 C 1.793 -0.014 1.99 -0.004 2.163 0.103 C 2.457 0.287 2.588 0.683 2.681 1.037 C 3.141 2.786 3.419 4.559 3.698 6.326 C 3.899 7.607 4.645 9.041 3.775 10.104 C 3.048 9.305 2.594 8.264 2.159 7.254 C 1.44 5.583 0.72 3.912 0 2.242",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.778,
    height: 8.234,
    viewBox: "0 0 3.778 8.234",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.711,
      top: 5.019,
      width: 3.778,
      height: 8.234
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.246 4.86 C -0.058 4.059 -0.014 3.219 0.035 2.42 C 0.077 1.749 0.119 1.077 0.161 0.406 C 0.166 0.31 0.174 0.211 0.216 0.135 C 0.292 0.002 0.459 -0.021 0.612 0.016 C 1.117 0.138 1.482 0.74 1.748 1.284 C 2.823 3.493 3.52 5.879 3.778 8.234 C 3.637 8.243 3.49 8.138 3.359 8.035 C 2.177 7.107 1.101 5.963 0.198 4.673",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.929,
      top: 6.05,
      width: 4.487,
      height: 9.589,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.4873833656311035,
      height: 9.589386940002441,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.488,
      height: 9.59,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.488,
    height: 9.590,
    viewBox: "0 0 4.488 9.590",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.488,
      height: 9.59
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.344 0.975 C 0.077 0.95 -0.077 0.586 0.039 0.334 C 0.154 0.081 0.457 -0.037 0.721 0.01 C 0.986 0.056 1.214 0.233 1.397 0.437 C 2.104 1.227 2.249 2.393 2.777 3.323 C 3.064 3.828 3.46 4.256 3.768 4.747 C 4.661 6.166 4.729 8.106 3.939 9.59 C 2.803 8.482 2.033 7.016 1.517 5.485 C 1 3.954 0.622 2.573 0.345 0.975",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 6.215,
    height: 8.868,
    viewBox: "0 0 6.215 8.868",
    fill: "none",
    style: {
      position: "absolute",
      left: 44.695,
      top: 11.716,
      width: 6.215,
      height: 8.868
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.611 1.427 C 4.269 0.989 4.926 0.549 5.584 0.11 C 5.694 0.037 5.829 -0.038 5.951 0.022 C 6.036 0.063 6.084 0.159 6.117 0.25 C 6.286 0.72 6.208 1.237 6.096 1.715 C 5.344 4.933 3.071 7.661 0.137 8.868 C -0.138 8.275 0.051 7.587 0.272 6.989 C 1.069 4.835 2.24 2.846 3.713 1.145",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.287,
    height: 12.156,
    viewBox: "0 0 8.287 12.156",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.076,
      top: 7.94,
      width: 8.287,
      height: 12.156
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.334 3.453 C 4.995 2.72 5.656 1.989 6.317 1.257 C 6.737 0.79 7.173 0.313 7.734 0.049 C 7.81 0.013 7.898 -0.019 7.977 0.013 C 8.079 0.054 8.124 0.176 8.152 0.285 C 8.32 0.929 8.331 1.61 8.184 2.247 C 8.034 2.895 7.727 3.484 7.396 4.048 C 5.65 7.025 2.927 10.473 0 12.156 C 0.015 9.679 1.751 6.609 3.185 4.696 C 3.63 4.103 4.076 3.509 4.599 2.992",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 42.215,
      top: 7.83,
      width: 7.806,
      height: 11.265,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.806066989898682,
      height: 11.265083312988281,
      clipPath: "inset(-0.000px 0px 0.000px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 7.807,
      height: 11.266,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.807,
    height: 11.266,
    viewBox: "0 0 7.807 11.266",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.807,
      height: 11.266
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.949 0.199 C 7.494 0.559 7.78 1.253 7.804 1.915 C 7.83 2.578 7.63 3.217 7.395 3.821 C 6.175 6.951 3.871 9.568 0.994 11.092 C 0.822 11.184 0.638 11.273 0.442 11.265 C 0.245 11.257 0.034 11.118 0.004 10.914 C -0.033 10.667 0.188 10.482 0.382 10.348 C 2.648 8.775 4.562 6.668 5.949 4.217 C 6.664 2.953 7.254 1.455 6.866 0",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 6.472,
    height: 11.691,
    viewBox: "0 0 6.472 11.691",
    fill: "none",
    style: {
      position: "absolute",
      left: 38.748,
      top: 3.204,
      width: 6.472,
      height: 11.691
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.17 7.302 C 1.141 6.032 1.396 4.349 2.179 2.953 C 2.923 1.627 4.155 0.588 5.591 0.078 C 5.869 -0.02 6.25 -0.066 6.403 0.192 C 6.463 0.291 6.469 0.413 6.471 0.528 C 6.499 2.346 5.986 4.115 5.406 5.826 C 4.999 7.026 4.551 8.223 3.861 9.28 C 3.172 10.337 2.214 11.254 1.027 11.691 C 0.254 10.248 -0.099 8.588 0.024 6.97",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.21,
      top: 3.302,
      width: 5.753,
      height: 11.643,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.752657890319824,
      height: 11.643442153930664,
      clipPath: "inset(0px 0.000px 0px -0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 5.753,
      height: 11.643,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.753,
    height: 11.643,
    viewBox: "0 0 5.753 11.643",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.753,
      height: 11.643
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.121 10.277 C 1.744 8.471 3.402 6.607 4.237 4.319 C 4.759 2.892 4.945 1.331 5.672 0 C 5.856 1.263 5.701 2.545 5.466 3.792 C 5.166 5.383 4.73 6.966 3.942 8.373 C 3.154 9.779 1.986 11.006 0.504 11.643 C 0.094 11.263 -0.09 10.655 0.042 10.119",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.743,
      top: 8.539,
      width: 1.914,
      height: 9.458,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.9142792224884033,
      height: 9.45810317993164,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 1.915,
      height: 9.458,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.915,
    height: 9.458,
    viewBox: "0 0 1.915 9.458",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.915,
      height: 9.458
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.868 C 0.073 1.431 0.185 1.011 0.334 0.616 C 0.474 0.246 0.774 -0.146 1.142 0.054 C 1.307 0.144 1.426 0.331 1.516 0.516 C 2.179 1.873 1.822 3.346 1.793 4.762 C 1.776 5.592 1.881 6.447 1.859 7.275 C 1.837 8.102 1.67 8.932 1.188 9.458 C 0.679 9.075 0.503 8.33 0.403 7.682 C 0.087 5.62 -0.026 3.561 0.069 1.56",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.967,
    height: 10.898,
    viewBox: "0 0 3.967 10.898",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.141,
      top: 0.958,
      width: 3.967,
      height: 10.898
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.008 3.22 C 0.229 2.25 0.593 1.344 1.082 0.545 C 1.296 0.196 1.668 -0.159 2.044 0.076 C 2.295 0.232 2.4 0.575 2.478 0.876 C 2.914 2.567 3.349 4.256 3.784 5.947 C 3.886 6.34 3.988 6.743 3.963 7.13 C 3.933 7.573 3.74 7.953 3.55 8.317 C 3.124 9.137 2.698 9.957 2.272 10.777 C 2.244 10.83 2.211 10.888 2.154 10.897 C 2.107 10.904 2.057 10.875 2.013 10.845 C 1.269 10.339 0.939 9.318 0.738 8.399 C 0.347 6.608 0.174 4.803 0 3.005",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.597,
      top: 0.686,
      width: 4.451,
      height: 16.962,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.450555801391602,
      height: 16.961637496948242,
      clipPath: "inset(0.000px 0px 0px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.451,
      height: 16.962,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.451,
    height: 16.962,
    viewBox: "0 0 4.451 16.962",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.451,
      height: 16.962
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.648 12.408 C 0.319 10.888 1.02 9.528 1.233 8.072 C 1.558 5.844 0.731 3.443 0.089 1.137 C -0.03 0.705 -0.082 0.12 0.276 0.014 C 0.566 -0.072 0.87 0.252 1.077 0.55 C 1.995 1.87 2.642 3.377 3.189 4.895 C 3.932 6.958 4.515 9.124 4.445 11.217 C 4.37 13.494 3.49 15.589 2.034 16.962 C 1.118 15.467 0.595 13.711 0.563 12.022",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 37.544,
      top: 10.888,
      width: 3.205,
      height: 7.194,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.204923629760742,
      height: 7.193671703338623,
      clipPath: "inset(-0.000px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 3.205,
      height: 7.194,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.205,
    height: 7.194,
    viewBox: "0 0 3.205 7.194",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.205,
      height: 7.194
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.129 5.768 C 0.495 4.447 0.653 3.01 0.574 1.533 C 0.554 1.163 0.521 0.779 0.63 0.459 C 0.739 0.138 1.04 -0.094 1.359 0.037 C 1.649 0.156 1.837 0.509 1.986 0.828 C 2.183 1.246 2.373 1.667 2.558 2.089 C 2.894 2.856 3.22 3.67 3.204 4.456 C 3.181 5.593 2.452 6.399 1.656 6.929 C 1.273 7.184 0.714 7.364 0.331 6.938 C 0.098 6.678 0.041 6.298 0 5.956",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.737,
    height: 6.276,
    viewBox: "0 0 3.737 6.276",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.296,
      top: 7.223,
      width: 3.737,
      height: 6.276
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.166 2.473 C 2.445 1.564 1.601 0.78 0.689 0.173 C 0.527 0.064 0.339 -0.042 0.184 0.016 C -0.089 0.12 -0.011 0.599 0.115 0.945 C 0.758 2.716 1.631 4.423 2.69 5.98 C 2.78 6.112 2.891 6.257 3.026 6.275 C 3.149 6.291 3.241 6.19 3.31 6.088 C 3.978 5.091 3.788 3.497 3.255 2.148",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.521,
      top: 5.967,
      width: 5.255,
      height: 7.097,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.255059719085693,
      height: 7.096636772155762,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.003,
      top: -0.003,
      width: 5.256,
      height: 7.096,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.256,
    height: 7.096,
    viewBox: "0 0 5.256 7.096",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.256,
      height: 7.096
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.756 4.368 C 0.603 3.849 0.451 3.329 0.298 2.81 C 0.068 2.029 -0.159 1.173 0.151 0.391 C 0.196 0.277 0.254 0.164 0.35 0.089 C 0.642 -0.139 1.028 0.114 1.281 0.358 C 2.255 1.299 3.228 2.24 4.202 3.18 C 4.473 3.442 4.749 3.711 4.917 4.053 C 5.117 4.46 5.148 4.936 5.175 5.398 C 5.201 5.838 5.226 6.278 5.253 6.718 C 5.258 6.815 5.262 6.92 5.204 7 C 5.088 7.159 4.849 7.092 4.684 7.005 C 3.346 6.298 2.111 5.404 1.021 4.354",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.842,
      top: 8.574,
      width: 8.011,
      height: 6.739,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.010671615600586,
      height: 6.739480972290039,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.009,
      height: 6.739,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.009,
    height: 6.739,
    viewBox: "0 0 8.009 6.739",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.009,
      height: 6.739
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.12 3.558 C 5.108 3.009 3.571 1.467 1.775 0.434 C 1.297 0.159 0.752 -0.088 0.197 0.031 C -0.192 0.685 0.062 1.498 0.386 2.149 C 1.265 3.912 2.606 5.417 4.242 6.475 C 4.406 6.581 4.577 6.685 4.77 6.722 C 4.956 6.758 5.152 6.731 5.344 6.703 C 6.06 6.601 6.777 6.499 7.494 6.396 C 7.674 6.37 7.882 6.325 7.969 6.159 C 8.022 6.057 8.012 5.938 7.998 5.827 C 7.89 4.953 7.62 4.108 7.207 3.349",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.184,
      top: 9.103,
      width: 10.691,
      height: 10.922,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.69098949432373,
      height: 10.92179012298584,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.001,
      top: 0.002,
      width: 10.69,
      height: 10.922,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.690,
    height: 10.922,
    viewBox: "0 0 10.690 10.922",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.69,
      height: 10.922
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.622 2.927 C 3.96 1.609 2.044 0.612 0 0 C 0.083 1.146 0.666 2.158 1.235 3.126 C 2.071 4.549 2.907 5.972 3.743 7.395 C 4.146 8.082 4.559 8.78 5.148 9.309 C 5.627 9.738 6.204 10.039 6.782 10.321 C 7.391 10.618 8.029 10.904 8.717 10.921 C 9.405 10.938 10.162 10.626 10.501 9.996 C 10.961 9.142 10.501 8.135 9.988 7.366 C 8.731 5.483 7.12 3.855 5.262 2.586",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.364,
      top: 9.042,
      width: 5.164,
      height: 7.83,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.164215564727783,
      height: 7.829702377319336,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.164,
      height: 7.83,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.164,
    height: 7.830,
    viewBox: "0 0 5.164 7.830",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.164,
      height: 7.83
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.777 4.669 C 3.952 4.411 3.225 3.676 2.644 2.881 C 2.063 2.086 1.584 1.205 0.981 0.431 C 0.822 0.226 0.625 0.014 0.409 0.001 C 0.187 -0.012 0.032 0.205 0.005 0.451 C -0.021 0.696 0.052 0.963 0.129 1.217 C 0.757 3.291 1.738 5.295 2.993 7.069 C 3.232 7.408 3.528 7.769 3.877 7.823 C 4.104 7.858 4.307 7.75 4.473 7.609 C 5.234 6.968 5.39 5.565 4.824 4.448",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 4.680,
    height: 5.591,
    viewBox: "0 0 4.680 5.591",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.129,
      top: 14.376,
      width: 4.68,
      height: 5.591
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.559 2.586 C 2.292 1.981 1.274 0.649 0.016 0 C -0.108 0.974 0.497 2.022 1.089 2.91 C 1.554 3.607 2.045 4.305 2.656 4.831 C 3.266 5.357 4.023 5.697 4.68 5.561 C 4.55 4.521 4.181 3.468 3.622 2.541",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.318,
      top: 14.355,
      width: 5.74,
      height: 6.598,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.740381717681885,
      height: 6.598411560058594,
      clipPath: "inset(0.000px 0px 0px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.739,
      height: 6.598,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.739,
    height: 6.598,
    viewBox: "0 0 5.739 6.598",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.739,
      height: 6.598
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.87 0.027 C 0.341 -0.135 -0.05 0.463 0.005 1.072 C 0.059 1.68 0.409 2.258 0.745 2.795 C 1.202 3.528 1.661 4.262 2.118 4.995 C 2.36 5.382 2.618 5.786 2.974 6.015 C 3.226 6.178 3.502 6.236 3.771 6.29 C 4.228 6.383 4.686 6.477 5.142 6.57 C 5.373 6.617 5.663 6.63 5.728 6.393 C 5.754 6.296 5.732 6.181 5.707 6.073 C 5.6 5.595 5.454 5.12 5.272 4.658 C 5.236 4.563 5.196 4.466 5.133 4.386 C 5.049 4.277 4.934 4.21 4.822 4.145 C 3.379 3.292 2.056 2.056 1.009 0.581",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 11.972,
    height: 13.849,
    viewBox: "0 0 11.972 13.849",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.969,
      top: 14.976,
      width: 11.972,
      height: 13.849
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.117 6.332 C 6.697 5.117 8.567 2.746 10.497 0.595 C 10.688 0.383 10.889 0.165 11.148 0.058 C 11.408 -0.05 11.742 -0.013 11.888 0.218 C 11.992 0.382 11.98 0.597 11.956 0.797 C 11.677 3.104 10.327 5.161 9.016 7.111 C 7.313 9.648 5.446 12.325 2.683 13.514 C 1.937 13.834 1.051 14.023 0.38 13.618 C 0.218 13.519 0.068 13.379 0.019 13.191 C -0.057 12.907 0.11 12.609 0.268 12.353 C 1.577 10.231 2.886 8.11 4.195 5.988",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40.891,
      top: 14.963,
      width: 12.604,
      height: 14.071,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.603632926940918,
      height: 14.070955276489258,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 12.605,
      height: 14.071,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.605,
    height: 14.071,
    viewBox: "0 0 12.605 14.071",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.605,
      height: 14.071
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.299 0.368 C 11.416 -0.091 12.131 -0.111 12.402 0.254 C 12.673 0.62 12.621 1.14 12.541 1.605 C 12.094 4.196 11.083 6.727 9.503 8.86 C 7.924 10.993 5.769 12.714 3.328 13.63 C 2.368 13.991 1.316 14.228 0.36 13.948 C 0.254 13.917 0.145 13.877 0.075 13.792 C -0.161 13.506 0.207 13.092 0.527 12.878 C 4.298 10.349 7.585 7.043 10.115 3.232 C 10.702 2.348 11.269 1.367 11.249 0.325",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.977,
      top: 13.343,
      width: 12.851,
      height: 11.96,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.850794792175293,
      height: 11.959824562072754,
      clipPath: "inset(0px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.85,
      height: 11.96,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.850,
    height: 11.960,
    viewBox: "0 0 12.850 11.960",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.85,
      height: 11.96
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.841 9.837 C 3.734 7.639 1.201 4.083 0 0.237 C 0.413 -0.184 1.131 0.037 1.742 0.275 C 3.86 1.097 5.979 1.919 8.096 2.742 C 8.742 2.993 9.413 3.261 9.951 3.804 C 10.423 4.282 10.742 4.923 11.027 5.554 C 11.693 7.026 12.248 8.545 12.685 10.082 C 12.877 10.761 12.992 11.627 12.505 11.891 C 12.204 12.055 11.802 11.897 11.443 11.739 C 9.749 10.998 8.055 10.258 6.362 9.517",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.684,
      top: 24.384,
      width: 16.278,
      height: 5.794,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.27832794189453,
      height: 5.793588161468506,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.001,
      width: 16.276,
      height: 5.793,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.276,
    height: 5.793,
    viewBox: "0 0 16.276 5.793",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.276,
      height: 5.793
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.849 0.491 C 0.036 0.816 -0.263 2.11 0.262 3.036 C 0.878 4.125 2.138 4.353 3.201 4.427 C 5.951 4.62 8.704 4.665 11.46 5.262 C 12.937 5.581 14.484 6.058 15.842 5.611 C 15.997 5.559 16.157 5.487 16.233 5.328 C 16.358 5.069 16.189 4.819 16.029 4.538 C 14.677 2.166 12.373 0.368 10.049 0.061 C 8.794 -0.106 7.573 0.108 6.351 0.238 C 4.535 0.431 2.721 0.513 0.859 0.336",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2.101,
      top: 18.281,
      width: 13.303,
      height: 12.42,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.302558898925781,
      height: 12.41972541809082,
      clipPath: "inset(0.000px 0px 0px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.303,
      height: 12.42,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.303,
    height: 12.420,
    viewBox: "0 0 13.303 12.420",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.303,
      height: 12.42
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.945 4.759 C 0.975 4.367 -0.105 2.855 0.008 1.57 C 0.065 0.927 0.402 0.513 0.791 0.282 C 2.133 -0.513 3.985 0.516 5.645 1.58 C 8.152 3.186 10.84 5.144 12.541 8.494 C 12.89 9.183 13.195 9.943 13.281 10.692 C 13.368 11.441 13.192 12.169 12.754 12.364 C 12.385 12.528 11.915 12.303 11.478 12.067 C 8.127 10.256 4.821 7.617 1.771 4.319",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 13.470,
    height: 11.337,
    viewBox: "0 0 13.470 11.337",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.432,
      top: 18.833,
      width: 13.47,
      height: 11.337
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.712 2.88 C 7.431 0.987 4.646 -0.059 2.042 0.003 C 1.529 0.015 1.007 0.073 0.596 0.346 C 0.185 0.618 -0.091 1.15 0.028 1.723 C 0.216 2.622 1.18 3.124 1.989 3.427 C 4.566 4.394 7.342 5.313 9.286 7.569 C 10.206 8.636 10.884 9.952 11.921 10.876 C 12.24 11.16 12.643 11.414 12.991 11.316 C 13.305 11.227 13.471 10.863 13.47 10.492 C 13.47 10.121 13.335 9.743 13.197 9.377 C 12.337 7.098 11.241 4.887 9.941 2.806",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.372,
      top: 33.152,
      width: 9.094,
      height: 4.748,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.094257354736328,
      height: 4.748214244842529,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.095,
      height: 4.748,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.095,
    height: 4.748,
    viewBox: "0 0 9.095 4.748",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.095,
      height: 4.748
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.264 4.671 C 5.883 4.608 4.482 4.52 3.184 4.029 C 1.886 3.538 0.683 2.59 0.124 1.206 C 0.023 0.954 -0.056 0.657 0.051 0.401 C 0.159 0.147 0.425 0.011 0.676 0.001 C 0.926 -0.009 1.167 0.083 1.402 0.17 C 3.332 0.882 5.353 1.312 7.399 1.443 C 7.68 1.461 7.987 1.485 8.189 1.696 C 8.299 1.811 8.363 1.968 8.425 2.121 C 8.635 2.638 8.844 3.154 9.053 3.671 C 9.079 3.735 9.105 3.805 9.091 3.875 C 9.073 3.958 9.002 4.013 8.935 4.059 C 8.327 4.473 7.627 4.712 6.923 4.748",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 13.381,
    height: 3.729,
    viewBox: "0 0 13.381 3.729",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.076,
      top: 31.836,
      width: 13.381,
      height: 3.729
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.591 0.136 C 8.185 1.447 5.475 2.025 2.843 1.789 C 1.896 1.704 0.95 1.516 0 1.626 C 0.703 2.503 1.775 2.89 2.814 3.161 C 6.219 4.053 10.004 4.03 13.129 2.113 C 13.225 2.054 13.328 1.984 13.366 1.871 C 13.434 1.667 13.26 1.478 13.103 1.358 C 12.356 0.79 11.538 0.333 10.677 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.771,
    height: 2.887,
    viewBox: "0 0 14.771 2.887",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 30.173,
      width: 14.771,
      height: 2.887
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.567 2.444 C -0.979 2.62 0.95 0.234 2.613 0.517 C 5.278 0.442 7.561 0.148 10.226 0.074 C 11.593 -0.08 14.025 -0.115 14.7 1.24 C 15.556 2.244 8.4 2.62 7.749 2.823 C 5.423 2.906 2.819 3.005 0.566 2.444",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.063,
      top: 31.633,
      width: 16.373,
      height: 3.163,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.373266220092773,
      height: 3.1630301475524902,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 16.373,
      height: 3.163,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.373,
    height: 3.163,
    viewBox: "0 0 16.373 3.163",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.373,
      height: 3.163
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.946 2.98 C 3.336 2.975 2.138 2.469 0.281 1.27 C 0.053 1.123 -0.084 0.753 0.057 0.498 C 0.123 0.379 0.242 0.31 0.361 0.266 C 0.885 0.07 1.443 0.264 1.97 0.409 C 4.359 1.07 6.9 0.718 9.363 0.3 C 10.379 0.127 11.404 -0.057 12.422 0.017 C 13.44 0.091 15.655 0.026 16.373 0.808 C 16.272 1.101 14.804 1.686 14.545 1.811 C 11.345 3.35 9.397 3.304 4.946 2.981",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.814,
      top: 37.253,
      width: 12.968,
      height: 4.787,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.967826843261719,
      height: 4.7865400314331055,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 12.968,
      height: 4.64,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.968,
    height: 4.640,
    viewBox: "0 0 12.968 4.640",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.968,
      height: 4.64
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.851 1.859 C 9.936 2.42 8.34 3.513 6.497 4.198 C 5.016 4.749 1.882 4.878 0 4.037 C 0.396 3.345 1.341 3.373 2.181 3.332 C 5.537 3.165 8.065 1.398 10.902 0.231 C 11.325 0.058 11.785 -0.103 12.351 0.083 C 12.516 0.138 12.707 0.239 12.831 0.422 C 12.947 0.593 12.97 0.782 12.968 0.941 C 12.957 1.671 12.532 2.156 11.898 2.161",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 11.601,
    height: 5.819,
    viewBox: "0 0 11.601 5.819",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.688,
      top: 35.357,
      width: 11.601,
      height: 5.819
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.809 5.682 C 0.676 5.906 0.271 5.812 0 5.495 C 0.142 5.008 0.525 4.753 0.898 4.513 C 3.135 3.074 5.371 1.636 7.608 0.196 C 7.779 0.086 7.96 -0.026 8.203 0.005 C 8.413 0.032 8.646 0.164 8.871 0.304 C 9.832 0.904 10.774 1.723 11.601 2.678 C 8.401 4.343 4.861 5.395 0.897 5.819",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.602,
    height: 3.557,
    viewBox: "0 0 14.602 3.557",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.261,
      top: 34.012,
      width: 14.602,
      height: 3.557
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.146 0.193 C 7.634 -0.172 6.069 0.19 4.541 0.438 C 3.013 0.686 1.356 0.796 0 0 C 0.497 1.19 1.402 2.189 2.509 2.769 C 3.826 3.46 5.345 3.549 6.813 3.556 C 7.818 3.561 8.823 3.534 9.828 3.507 C 11.53 3.461 13.411 3.339 14.602 2.073 C 12.994 1.134 11.249 0.457 9.449 0.073",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.492,
      top: 28.792,
      width: 13.311,
      height: 4.595,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.310744285583496,
      height: 4.59491491317749,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.001,
      top: 0.001,
      width: 13.311,
      height: 4.595,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.311,
    height: 4.595,
    viewBox: "0 0 13.311 4.595",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.311,
      height: 4.595
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.529 2.015 C 9.699 2.086 8.869 2.158 8.039 2.23 C 7.478 2.279 6.911 2.327 6.33 2.232 C 4.323 1.906 2.368 -0.074 0.41 0.002 C 0.269 0.008 0.116 0.033 0.044 0.16 C -0.013 0.26 -0.005 0.401 0.014 0.534 C 0.159 1.532 0.855 2.457 1.652 3.019 C 2.447 3.581 3.334 3.836 4.199 4.031 C 5.65 4.358 7.1 4.544 8.529 4.587 C 9.512 4.617 10.5 4.577 11.374 4.229 C 12.249 3.882 13.009 3.195 13.311 2.188 C 12.329 1.746 11.28 2.486 10.368 1.815",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 17.063,
    height: 6.544,
    viewBox: "0 0 17.063 6.544",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.043,
      top: 26.292,
      width: 17.063,
      height: 6.544
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.164 0.143 C 3.963 -0.036 2.76 -0.047 1.587 0.111 C 0.879 0.206 0.039 0.546 0.001 1.429 C -0.038 2.342 0.807 3.001 1.52 3.373 C 5.835 5.624 10.459 6.71 14.942 6.523 C 15.804 6.487 16.83 6.242 17.031 5.229 C 17.087 4.943 17.065 4.63 17.003 4.33 C 16.852 3.595 16.461 2.908 15.941 2.466 C 15.488 2.081 14.961 1.886 14.444 1.714 C 11.466 0.723 8.415 0.254 5.422 0.329",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.344,
    height: 6.271,
    viewBox: "0 0 7.344 6.271",
    fill: "none",
    style: {
      position: "absolute",
      left: 46.725,
      top: 25.093,
      width: 7.344,
      height: 6.271
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.889 1.188 C 7.04 1.057 7.193 0.928 7.344 0.797 C 7.202 0.435 6.825 0.282 6.521 0.212 C 4.404 -0.272 2.365 0.079 0.794 1.196 C 0.541 1.376 0.294 1.583 0.155 1.898 C 0.009 2.228 -0.007 2.649 0.002 3.067 C 0.018 3.841 0.115 4.64 0.288 5.441 C 0.324 5.607 0.365 5.78 0.461 5.927 C 0.683 6.267 1.064 6.303 1.355 6.253 C 2.791 6.003 3.779 4.807 4.701 3.651 C 5.358 2.828 6.014 2.006 6.671 1.183",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 47.486,
      top: 25.626,
      width: 6.715,
      height: 5.798,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.715117931365967,
      height: 5.797665119171143,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.714,
      height: 5.798,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.714,
    height: 5.798,
    viewBox: "0 0 6.714 5.798",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.714,
      height: 5.798
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.234 5.606 C 0.619 5.548 0.891 5.24 1.12 4.914 C 1.896 3.811 2.373 2.398 3.186 1.338 C 3.999 0.277 5.307 -0.406 6.714 0.269 C 6.623 0.932 6.29 1.434 5.943 1.89 C 4.944 3.199 3.759 4.293 2.428 5.137 C 1.724 5.584 0.921 5.967 0 5.72",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 10.878,
    height: 4.603,
    viewBox: "0 0 10.878 4.603",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.725,
      top: 36.907,
      width: 10.878,
      height: 4.603
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.837 0 C 10.412 0.79 9.754 1.357 9.069 1.849 C 6.935 3.382 4.426 4.318 1.755 4.577 C 1.269 4.624 0.74 4.638 0.271 4.325 C 0.18 4.264 0.088 4.186 0.039 4.08 C -0.098 3.786 0.153 3.542 0.376 3.417 C 1.887 2.566 3.4 1.716 4.911 0.866 C 5.239 0.682 5.568 0.497 5.931 0.391 C 6.342 0.271 6.785 0.254 7.225 0.239 C 8.443 0.196 9.661 0.152 10.878 0.109",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.081,
    height: 7.698,
    viewBox: "0 0 9.081 7.698",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.328,
      top: 34.703,
      width: 9.081,
      height: 7.698
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.017 0 C 8.811 0.934 8.339 1.711 7.827 2.42 C 6.229 4.631 4.15 6.35 1.768 7.429 C 1.335 7.626 0.855 7.802 0.354 7.626 C 0.256 7.592 0.156 7.54 0.085 7.447 C -0.109 7.19 0.065 6.865 0.24 6.669 C 1.427 5.343 2.613 4.016 3.799 2.689 C 4.056 2.402 4.315 2.114 4.622 1.894 C 4.97 1.646 5.372 1.495 5.77 1.345 C 6.873 0.929 7.977 0.512 9.081 0.095",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.330,
    height: 11.131,
    viewBox: "0 0 5.330 11.131",
    fill: "none",
    style: {
      position: "absolute",
      left: 25.887,
      top: 36.746,
      width: 5.33,
      height: 11.131
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.418 0.065 C 3.714 0.109 2.952 0.386 2.357 1.29 C 2.063 1.738 1.829 2.31 1.608 2.884 C 1.164 4.037 0.753 5.229 0.377 6.452 C 0.225 6.947 0.076 7.461 0.021 7.998 C -0.035 8.535 0.018 9.107 0.224 9.41 C 0.514 9.836 1.044 9.677 1.218 10.292 C 1.296 10.567 1.293 10.975 1.447 11.099 C 1.562 11.191 1.709 11.072 1.836 10.949 C 2.981 9.837 4.01 8.167 4.773 6.181 C 4.943 5.74 5.101 5.278 5.197 4.783 C 5.345 4.019 5.335 3.231 5.324 2.468 C 5.315 1.864 5.304 1.241 5.163 0.736 C 5.022 0.231 4.718 -0.127 4.391 0.042",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.763,
    height: 5.090,
    viewBox: "0 0 8.763 5.090",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.139,
      top: 33.319,
      width: 8.763,
      height: 5.09
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.953 0 C 4.541 1.345 6.199 2.444 7.854 3.25 C 8.069 3.355 8.295 3.463 8.488 3.673 C 8.681 3.883 8.823 4.23 8.738 4.42 C 8.699 4.507 8.62 4.546 8.539 4.571 C 7.637 4.851 6.186 3.753 5.544 4.471 C 5.389 4.643 5.303 4.909 5.113 5.025 C 4.748 5.247 4.163 4.857 3.678 4.458 C 2.382 3.394 1.139 2.132 0 0.726 C 1.138 0.494 2.277 0.263 3.416 0.032",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 33.813,
      top: 33.446,
      width: 10.74,
      height: 7.526,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.740094184875488,
      height: 7.525547981262207,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.74,
      height: 7.527,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.740,
    height: 7.527,
    viewBox: "0 0 10.740 7.527",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.74,
      height: 7.527
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.193 0.171 C 1.562 1.81 2.932 3.449 4.3 5.089 C 4.843 5.739 5.4 6.403 6.019 6.856 C 7.48 7.924 8.905 7.562 9.942 6.836 C 10.309 6.578 10.667 6.25 10.733 5.671 C 10.798 5.092 10.442 4.205 9.915 3.928 C 9.649 4.128 9.218 3.947 8.829 3.792 C 7.805 3.383 6.795 3.16 5.843 3.132 C 5.496 3.122 5.144 3.135 4.769 2.953 C 4.004 2.582 3.393 1.545 2.68 0.862 C 1.765 -0.014 0.642 -0.254 0 0.289",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 13.694,
    height: 5.079,
    viewBox: "0 0 13.694 5.079",
    fill: "none",
    style: {
      position: "absolute",
      left: 36.058,
      top: 28.192,
      width: 13.694,
      height: 5.079
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.51 0.404 C 3.539 -0.095 4.703 0.06 5.754 0.385 C 6.806 0.709 7.822 1.194 8.912 1.335 C 10.283 1.513 11.676 1.137 13.046 0.815 C 13.265 0.763 13.54 0.738 13.653 0.947 C 13.776 1.174 13.597 1.465 13.43 1.668 C 12.396 2.927 11.266 4.252 9.802 4.655 C 9.217 4.816 8.614 4.818 8.017 4.869 C 7.236 4.937 6.456 5.093 5.677 5.078 C 3.576 5.037 1.712 3.768 0 2.476 C 0.908 1.626 1.834 0.801 2.776 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.113,
      top: 29.29,
      width: 13.474,
      height: 4.026,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.473611831665039,
      height: 4.0257487297058105,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.474,
      height: 4.026,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.474,
    height: 4.026,
    viewBox: "0 0 13.474 4.026",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.474,
      height: 4.026
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.58 1.077 C 1.184 0.925 1.768 1.259 2.345 1.467 C 3.85 2.011 5.52 1.704 7.095 1.953 C 8.013 2.098 8.964 2.427 9.851 2.058 C 10.327 1.859 10.727 1.477 11.153 1.158 C 11.729 0.727 12.362 0.407 12.99 0.089 C 13.151 0.008 13.368 -0.062 13.474 0.088 C 12.732 0.988 11.96 1.856 11.159 2.69 C 10.845 3.017 10.52 3.344 10.133 3.544 C 9.762 3.737 9.354 3.803 8.953 3.857 C 7.425 4.06 5.875 4.115 4.377 3.822 C 2.88 3.528 1.431 2.873 0.296 1.772 C 0.163 1.643 0.028 1.493 0.003 1.296 C -0.023 1.099 0.128 0.859 0.302 0.895",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 8.768,
    height: 5.232,
    viewBox: "0 0 8.768 5.232",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.735,
      top: 25.156,
      width: 8.768,
      height: 5.232
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.056 2.632 C 1.132 2.767 2.383 3.929 3.558 4.571 C 5.095 5.409 6.482 5.335 7.678 4.981 C 8.215 4.822 8.768 4.537 8.768 3.73 C 8.768 3.556 8.734 3.346 8.624 3.156 C 8.378 2.737 7.998 2.741 7.732 2.798 C 6.362 3.092 4.534 2.52 2.905 0.851 C 2.517 0.452 2.067 -0.044 1.729 0.003 C 1.625 0.018 1.546 0.085 1.472 0.155 C 0.882 0.702 0.388 1.391 0 2.203",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.577,
      top: 27.688,
      width: 15.633,
      height: 8.963,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.633413314819336,
      height: 8.963141441345215,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.633,
      height: 8.963,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.633,
    height: 8.963,
    viewBox: "0 0 15.633 8.963",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.633,
      height: 8.963
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.555 0.579 C 2.767 2.919 5.422 4.675 8.159 5.605 C 9.115 5.931 10.077 6.156 11.037 6.382 C 12.331 6.685 13.625 6.988 14.918 7.292 C 15.202 7.358 15.56 7.502 15.633 7.827 C 14.36 9.037 12.427 9.131 10.592 8.794 C 7.4 8.207 4.178 6.419 1.554 3.777 C 1.126 3.345 0.703 2.879 0.422 2.32 C 0.052 1.587 -0.042 0.757 0.016 0 C 0.216 0.169 0.416 0.338 0.617 0.507",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 15.561,
    height: 10.680,
    viewBox: "0 0 15.561 10.680",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.558,
      top: 25.017,
      width: 15.561,
      height: 10.68
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.653 1.655 C 4.578 3.598 5.906 5.285 7.429 6.452 C 9.987 8.413 12.921 8.837 15.561 10.542 C 14.859 10.809 14.049 10.636 13.269 10.462 C 12.155 10.212 11.04 9.964 9.927 9.71 C 8.898 9.476 7.862 9.236 6.853 8.76 C 4.415 7.61 2.314 5.165 0.618 2.493 C 0.209 1.85 -0.203 0.953 0.11 0.383 C 0.285 0.066 0.633 -0.012 0.962 0.002 C 1.948 0.044 2.95 0.736 3.783 1.618",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.443,
      top: 36.046,
      width: 10.652,
      height: 10.102,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.374,
    height: 9.418,
    viewBox: "0 0 10.374 9.418",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.374,
      height: 9.418
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.067 0.128 C 5.854 1.774 5.136 3.32 4.18 4.599 C 3.223 5.878 2.035 6.906 0.788 7.789 C 0.448 8.03 0.065 8.321 0 8.77 C 0.319 9.247 0.88 9.448 1.413 9.414 C 1.947 9.38 2.459 9.139 2.945 8.865 C 5.127 7.634 6.955 5.682 8.596 3.607 C 9.238 2.794 9.864 1.946 10.287 0.967 C 10.346 0.829 10.402 0.671 10.358 0.53 C 10.293 0.325 10.062 0.281 9.871 0.267 C 8.554 0.179 7.236 0.09 5.92 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.237,
      top: 0.647,
      width: 10.414,
      height: 9.456,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.414363861083984,
      height: 9.455657958984375,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.415,
      height: 9.455,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.415,
    height: 9.455,
    viewBox: "0 0 10.415 9.455",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.415,
      height: 9.455
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.429 7.739 C -0.003 7.834 -0.127 8.57 0.141 8.955 C 0.41 9.341 0.885 9.439 1.321 9.453 C 3.049 9.51 4.753 8.653 6.172 7.452 C 7.956 5.941 9.381 3.864 10.233 1.526 C 10.341 1.23 10.442 0.914 10.408 0.602 C 10.373 0.29 10.157 -0.011 9.881 0 C 9.662 0.009 9.48 0.201 9.323 0.383 C 7.384 2.628 5.635 5.376 3.044 6.378 C 2.067 6.755 0.907 6.944 0.33 7.935",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30.616,
      top: 33.575,
      width: 7.241,
      height: 14.321,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.512,
    height: 14.293,
    viewBox: "0 0 6.512 14.293",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.512,
      height: 14.293
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.133 4.136 C 1.39 5.121 2.458 6.569 3.263 8.131 C 4.068 9.694 4.625 11.371 5.054 13.04 C 5.171 13.496 5.318 14.018 5.659 14.293 C 6.106 14.196 6.386 13.726 6.474 13.173 C 6.562 12.62 6.483 11.991 6.371 11.373 C 5.869 8.599 4.719 5.844 3.432 3.219 C 2.927 2.192 2.392 1.163 1.709 0.279 C 1.612 0.155 1.499 0.024 1.378 0.003 C 1.201 -0.028 1.117 0.183 1.066 0.37 C 0.71 1.654 0.355 2.939 0 4.223",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.413,
      top: 0.01,
      width: 5.828,
      height: 14.311,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.8279523849487305,
      height: 14.310691833496094,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.829,
      height: 14.31,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.829,
    height: 14.310,
    viewBox: "0 0 5.829 14.310",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.829,
      height: 14.31
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.088 13.439 C 4.07 13.919 4.626 14.388 4.988 14.3 C 5.351 14.211 5.532 13.779 5.637 13.346 C 6.056 11.632 5.746 9.515 5.102 7.523 C 4.293 5.019 2.956 2.612 1.292 0.658 C 1.08 0.41 0.853 0.161 0.598 0.049 C 0.344 -0.062 0.059 0.014 0.008 0.297 C -0.032 0.522 0.08 0.795 0.191 1.039 C 1.549 4.045 3.344 7.094 3.577 10.17 C 3.664 11.331 3.562 12.588 4.222 13.633",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.952,
      top: 34.694,
      width: 11.087,
      height: 5.571,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.087106704711914,
      height: 5.570977210998535,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: 0,
      width: 11.086,
      height: 5.57,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.086,
    height: 5.570,
    viewBox: "0 0 11.086 5.570",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.086,
      height: 5.57
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.088 2.17 C 9.051 3.029 7.999 3.649 6.962 4.508 C 6.528 4.868 6.086 5.232 5.556 5.409 C 5.189 5.532 4.788 5.563 4.387 5.569 C 3.627 5.581 2.837 5.508 2.074 5.176 C 1.31 4.844 0.57 4.223 0.154 3.39 C 0.075 3.233 0.008 3.064 0.001 2.898 C -0.013 2.57 0.206 2.343 0.432 2.193 C 1.524 1.466 3.003 1.671 4.378 1.76 C 6.374 1.89 7.563 1.097 9.433 0.66 C 9.49 0.646 10.963 -0.024 11.025 0.001 C 11.173 0.061 11.014 0.922 10.963 1.07 C 10.764 1.636 10.342 1.852 10.089 2.17",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 9.307,
    height: 3.893,
    viewBox: "0 0 9.307 3.893",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.658,
      top: 33.731,
      width: 9.307,
      height: 3.893
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.157 0.502 C 9.433 2.237 7.834 2.842 6.625 2.986 C 5.122 2.92 0.979 4.891 0.026 3.218 C -0.321 0.736 2.92 1.566 4.333 1.266 C 6.133 1.018 7.327 -1.332 9.307 1.077",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25.256,
      top: 12.631,
      width: 3.244,
      height: 2.285,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.2442073822021484,
      height: 2.284818172454834,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.244,
      height: 2.284,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.244,
    height: 2.284,
    viewBox: "0 0 3.244 2.284",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.244,
      height: 2.284
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.489 2.235 C 1.377 1.966 0.426 1.132 0 0.049 C 0.832 -0.122 1.663 0.185 2.442 0.487 C 2.64 0.564 2.843 0.644 2.996 0.792 C 3.235 1.024 3.311 1.416 3.18 1.736 C 3.048 2.057 2.716 2.284 2.382 2.284",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.227,
      top: 13.819,
      width: 2.098,
      height: 3.76,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.0984227657318115,
      height: 3.759920835494995,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.001,
      width: 2.099,
      height: 3.76,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.099,
    height: 3.760,
    viewBox: "0 0 2.099 3.760",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.099,
      height: 3.76
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.17 3.678 C 0.787 2.768 0.433 1.847 0.111 0.918 C 0.001 0.599 -0.083 0.181 0.142 0.039 C 0.343 -0.087 0.627 0.114 0.841 0.309 C 1.432 0.847 2.044 1.549 2.095 2.34 C 2.114 2.625 2.055 2.894 1.971 3.141 C 1.846 3.509 1.562 3.88 1.197 3.723",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.779,
      top: 12.919,
      width: 1.874,
      height: 3.871,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.8741761445999146,
      height: 3.8708183765411377,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 1.873,
      height: 3.871,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.873,
    height: 3.871,
    viewBox: "0 0 1.873 3.871",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.873,
      height: 3.871
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.608 3.742 C 0.405 3.279 0.237 2.801 0.109 2.318 C 0.054 2.11 0.005 1.897 0.001 1.69 C -0.014 1.122 0.289 0.684 0.586 0.295 C 0.726 0.111 0.93 -0.084 1.159 0.038 C 1.328 0.128 1.42 0.355 1.465 0.557 C 1.609 1.201 1.48 1.841 1.655 2.481 C 1.716 2.705 1.813 2.924 1.855 3.151 C 1.898 3.377 1.871 3.626 1.723 3.738 C 1.634 3.806 1.515 3.815 1.4 3.822 C 1.139 3.838 0.878 3.855 0.617 3.871",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25.756,
      top: 14.002,
      width: 2.23,
      height: 5.519,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.2301881313323975,
      height: 5.518790245056152,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.001,
      width: 2.23,
      height: 5.518,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.230,
    height: 5.518,
    viewBox: "0 0 2.230 5.518",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.23,
      height: 5.518
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.196 3.141 C 1.648 2.458 1.081 1.737 0.839 0.894 C 0.775 0.673 0.733 0.439 0.605 0.245 C 0.477 0.051 0.228 -0.077 0.093 0.052 C 0.006 0.136 -0.001 0.293 0 0.436 C 0.008 1.636 0.196 2.873 0.553 4.079 C 0.667 4.463 0.807 4.861 1.066 5.161 C 1.327 5.462 1.739 5.628 1.996 5.437 C 2.284 5.223 2.249 4.711 2.189 4.275 C 2.125 3.822 2.063 3.368 2 2.913",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 1.778,
    height: 3.370,
    viewBox: "0 0 1.778 3.370",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.628,
      top: 13.992,
      width: 1.778,
      height: 3.37
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.454 1.069 C 1.382 0.744 1.218 0.426 0.996 0.179 C 0.922 0.096 0.834 0.017 0.739 0.002 C 0.626 -0.015 0.535 0.063 0.463 0.145 C -0.102 0.79 -0.157 1.972 0.336 2.913 C 0.374 2.985 0.416 3.058 0.472 3.115 C 0.541 3.185 0.627 3.226 0.711 3.26 C 1.041 3.394 1.426 3.441 1.636 3.193 C 1.859 2.928 1.785 2.448 1.645 2.047 C 1.506 1.645 1.307 1.237 1.314 0.836",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.694,
      top: 13.567,
      width: 1.323,
      height: 2.382,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.3233813047409058,
      height: 2.3818538188934326,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 1.323,
      height: 2.382,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.323,
    height: 2.382,
    viewBox: "0 0 1.323 2.382",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.323,
      height: 2.382
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.185 2.372 C 0.698 2.462 0.095 1.928 0.012 1.333 C -0.04 0.962 0.085 0.627 0.249 0.351 C 0.364 0.158 0.53 -0.031 0.754 0.004 C 0.946 0.034 1.123 0.228 1.212 0.441 C 1.302 0.654 1.318 0.882 1.322 1.1 C 1.329 1.51 1.298 1.913 1.228 2.298",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.928,
      top: 15.597,
      width: 2.054,
      height: 3.04,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.0542285442352295,
      height: 3.0399010181427,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.054,
      height: 3.041,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.054,
    height: 3.041,
    viewBox: "0 0 2.054 3.041",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.054,
      height: 3.041
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.968 2.436 C 1.577 1.828 1.186 1.221 0.796 0.613 C 0.663 0.407 0.523 0.194 0.335 0.061 C 0.286 0.026 0.231 -0.003 0.18 0 C 0.064 0.008 0.026 0.159 0.015 0.291 C -0.05 1.037 0.096 1.85 0.426 2.591 C 0.469 2.688 0.518 2.787 0.594 2.854 C 0.675 2.925 0.774 2.947 0.869 2.968 C 1.131 3.023 1.401 3.078 1.64 3.009 C 1.879 2.94 2.077 2.712 2.051 2.412",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.736,
      top: 15.031,
      width: 2.225,
      height: 6.121,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.225277900695801,
      height: 6.120573043823242,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.002,
      width: 2.226,
      height: 6.12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.226,
    height: 6.120,
    viewBox: "0 0 2.226 6.120",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.226,
      height: 6.12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.226 3.804 C 1.981 3.438 0.958 1.087 0.875 0.663 C 0.826 0.415 0.76 0.097 0.546 0.016 C 0.345 -0.061 0.202 0.153 0.135 0.355 C -0.004 0.776 -0.027 1.869 0.028 2.355 C 0.136 3.309 0.117 3.579 0.279 3.728 C 0.467 3.901 1.339 6.213 1.524 6.117 C 1.71 6.022 1.933 3.709 2.061 3.532",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22.501,
      top: 15.102,
      width: 2.163,
      height: 4.683,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.1630780696868896,
      height: 4.682981014251709,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.163,
      height: 4.683,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.163,
    height: 4.683,
    viewBox: "0 0 2.163 4.683",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.163,
      height: 4.683
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.192 2.911 C 0.007 1.934 -0.164 0.847 0.285 0.132 C 0.315 0.084 0.349 0.037 0.398 0.014 C 0.553 -0.057 0.745 0.147 0.841 0.341 C 1.022 0.7 1.089 1.103 1.271 1.462 C 1.553 2.017 2.107 2.472 2.159 3.067 C 2.174 3.238 2.144 3.398 2.113 3.555 C 2.077 3.743 2.04 3.931 2.004 4.118 C 1.955 4.378 1.861 4.679 1.622 4.683 C 1.427 4.686 1.244 4.482 1.102 4.291 C 0.735 3.8 0.409 3.273 0.129 2.721",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 2.612,
    height: 2.549,
    viewBox: "0 0 2.612 2.549",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.839,
      top: 11.706,
      width: 2.612,
      height: 2.549
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.161 0 C 2.326 0.096 2.505 0.218 2.579 0.411 C 2.652 0.601 2.594 0.799 2.498 0.937 C 2.401 1.074 2.269 1.172 2.169 1.305 C 1.981 1.556 1.916 1.915 1.738 2.176 C 1.52 2.498 1.112 2.642 0.723 2.485 C 0.333 2.329 -0.002 1.853 0 1.408 C 0 1.21 0.062 1.032 0.143 0.873 C 0.538 0.104 1.449 -0.206 2.292 0.143",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.566,
      top: 10.858,
      width: 2.864,
      height: 2.882,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.864461660385132,
      height: 2.8817083835601807,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.865,
      height: 2.881,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.865,
    height: 2.881,
    viewBox: "0 0 2.865 2.881",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.865,
      height: 2.881
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.871 2.753 C 0.764 2.814 0.653 2.875 0.526 2.881 C 0.398 2.886 0.249 2.822 0.169 2.688 C 0.117 2.602 0.1 2.499 0.086 2.402 C 0.022 1.963 -0.032 1.516 0.022 1.101 C 0.075 0.686 0.248 0.299 0.558 0.118 C 0.849 -0.052 1.229 -0.023 1.582 0.107 C 1.936 0.237 2.271 0.461 2.603 0.683 C 2.749 0.781 2.926 0.979 2.844 1.111 C 2.812 1.162 2.752 1.176 2.696 1.185 C 2.351 1.247 1.996 1.275 1.636 1.269 C 1.521 1.268 1.403 1.263 1.3 1.303 C 1.067 1.396 0.973 1.695 0.924 1.98 C 0.886 2.199 0.863 2.426 0.856 2.656",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 19.743,
      top: 14.851,
      width: 3.109,
      height: 4.04,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.109168767929077,
      height: 4.039611339569092,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 3.11,
      height: 4.04,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.110,
    height: 4.040,
    viewBox: "0 0 3.110 4.040",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.11,
      height: 4.04
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.219 3.937 C 0.507 3.741 -0.091 2.788 0.011 2.015 C 0.054 1.693 0.196 1.421 0.358 1.176 C 0.579 0.843 0.84 0.549 1.1 0.257 C 1.223 0.119 1.368 -0.028 1.559 0.005 C 1.846 0.053 2.023 0.452 2.111 0.781 C 2.316 1.549 2.445 2.369 2.9 3.028 C 2.982 3.148 3.079 3.27 3.103 3.411 C 3.155 3.707 2.875 3.852 2.64 3.916 C 2.122 4.059 1.493 4.169 1.024 3.707",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.96,
      top: 16.159,
      width: 3.097,
      height: 5.088,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.0968923568725586,
      height: 5.0882463455200195,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.004,
      top: -0.002,
      width: 3.098,
      height: 5.088,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.098,
    height: 5.088,
    viewBox: "0 0 3.098 5.088",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.098,
      height: 5.088
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.611 3.61 C 0.398 3.514 0.261 3.251 0.176 3.006 C -0.198 1.931 0.04 0.739 0.744 0.165 C 0.853 0.076 0.976 -0.001 1.121 0 C 1.357 0.002 1.597 0.213 1.743 0.46 C 1.89 0.707 1.965 0.988 2.048 1.261 C 2.238 1.892 2.485 2.513 2.78 3.11 C 2.94 3.435 3.124 3.785 3.095 4.119 C 3.078 4.325 2.98 4.493 2.878 4.647 C 2.747 4.844 2.591 5.04 2.364 5.08 C 2.039 5.138 1.688 4.86 1.403 4.579 C 1.083 4.262 0.784 3.917 0.509 3.549",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 23.11,
      top: 18.629,
      width: 3.386,
      height: 5.245,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.385793685913086,
      height: 5.244808197021484,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 3.386,
      height: 5.243,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.386,
    height: 5.243,
    viewBox: "0 0 3.386 5.243",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.386,
      height: 5.243
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.101 5.201 C 1.501 5.096 0.877 4.641 0.57 3.99 C 0.466 3.769 0.4 3.535 0.335 3.303 C 0.123 2.546 -0.092 1.748 0.041 1.042 C 0.114 0.656 0.292 0.317 0.549 0.082 C 0.605 0.03 0.675 -0.019 0.756 0.008 C 0.812 0.026 0.86 0.079 0.901 0.131 C 1.315 0.639 1.563 1.284 1.95 1.818 C 2.275 2.267 2.699 2.636 2.96 3.131 C 3.124 3.442 3.213 3.783 3.3 4.119 C 3.375 4.406 3.445 4.735 3.31 4.943 C 3.251 5.035 3.16 5.089 3.065 5.131 C 2.733 5.278 2.335 5.281 1.954 5.14",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.932,
    height: 5.815,
    viewBox: "0 0 3.932 5.815",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.8,
      top: 10.067,
      width: 3.932,
      height: 5.815
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.706 0.047 C 0.525 -0.056 0.326 0.021 0.218 0.172 C 0.109 0.323 0.07 0.532 0.037 0.735 C 0.008 0.908 -0.019 1.086 0.018 1.271 C 0.052 1.447 0.141 1.613 0.231 1.773 C 1.16 3.433 2.407 4.981 3.932 5.815 C 3.894 5.301 3.629 4.8 3.372 4.327 C 2.566 2.843 1.753 1.35 0.734 0.026",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.01,
      top: 13.246,
      width: 1.939,
      height: 2.667,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.938831090927124,
      height: 2.6672520637512207,
      clipPath: "inset(0px 0.000px 0px -0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.939,
      height: 2.668,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.939,
    height: 2.668,
    viewBox: "0 0 1.939 2.668",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.939,
      height: 2.668
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.925 1.535 C 1.559 0.841 0.956 0.283 0.307 0.037 C 0.225 0.005 0.132 -0.02 0.067 0.024 C -0.062 0.109 0.019 0.358 0.111 0.531 C 0.491 1.239 0.936 1.911 1.434 2.528 C 1.468 2.57 1.504 2.614 1.548 2.641 C 1.687 2.725 1.821 2.597 1.876 2.455 C 1.989 2.16 1.948 1.765 1.768 1.446",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.692,
      top: 14.154,
      width: 3.666,
      height: 6.63,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.6656932830810547,
      height: 6.630213260650635,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.001,
      width: 3.665,
      height: 6.63,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.665,
    height: 6.630,
    viewBox: "0 0 3.665 6.630",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.665,
      height: 6.63
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.665 5.079 C 3.331 3.979 2.892 2.898 2.361 1.865 C 1.974 1.112 1.473 0.324 0.777 0.034 C 0.695 -0.001 0.595 -0.024 0.544 0.041 C 0.513 0.081 0.51 0.144 0.511 0.202 C 0.513 0.49 0.546 0.784 0.608 1.076 C 0.431 0.974 0.231 1.037 0.124 1.184 C 0.017 1.332 -0.01 1.546 0.003 1.758 C 0.046 2.457 0.472 3.122 0.878 3.728 C 1.398 4.508 1.92 5.287 2.44 6.066 C 2.627 6.345 2.882 6.663 3.151 6.627 C 3.371 6.598 3.473 6.337 3.52 6.091 C 3.587 5.735 3.597 5.353 3.548 4.966",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.529,
    height: 10.103,
    viewBox: "0 0 3.529 10.103",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.237,
      top: 10.477,
      width: 3.529,
      height: 10.103
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.876 3.713 C 0.467 2.756 0.179 1.753 0.027 0.753 C -0.007 0.524 -0.029 0.268 0.091 0.117 C 0.215 -0.041 0.458 -0.027 0.654 0.086 C 0.851 0.198 1.013 0.39 1.168 0.576 C 1.784 1.311 2.399 2.045 3.014 2.78 C 3.193 2.994 3.38 3.224 3.445 3.494 C 3.508 3.758 3.441 4.01 3.367 4.24 C 3.193 4.783 2.979 5.302 2.729 5.792 C 3.107 7.222 3.375 8.667 3.529 10.103 C 3.173 10.101 2.819 9.8 2.55 9.466 C 1.881 8.632 1.553 7.546 1.364 6.506 C 1.176 5.465 1.157 4.746 0.877 3.714",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.789,
      top: 12.987,
      width: 2.656,
      height: 4.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.6557652950286865,
      height: 4.9952874183654785,
      clipPath: "inset(-0.000px 0.000px 0.000px -0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.655,
      height: 4.994,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.655,
    height: 4.994,
    viewBox: "0 0 2.655 4.994",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.655,
      height: 4.994
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.309 4.089 C 0.234 3.656 0.159 3.222 0.084 2.789 C 0.018 2.407 -0.048 2.008 0.049 1.67 C 0.128 1.394 0.309 1.19 0.497 1.01 C 0.789 0.734 1.109 0.498 1.432 0.266 C 1.614 0.136 1.805 0.005 2.035 0 C 2.265 -0.005 2.544 0.161 2.628 0.427 C 2.69 0.621 2.636 0.812 2.565 0.972 C 2.352 1.456 1.988 1.823 1.831 2.344 C 1.625 3.022 1.803 3.85 1.736 4.591 C 1.722 4.735 1.693 4.889 1.591 4.958 C 1.46 5.045 1.269 4.958 1.113 4.858 C 0.753 4.627 0.423 4.318 0.146 3.957",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.234,
      top: 10.851,
      width: 3.214,
      height: 9.587,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.2139265537261963,
      height: 9.586942672729492,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.213,
      height: 9.587,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.213,
    height: 9.587,
    viewBox: "0 0 3.213 9.587",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.213,
      height: 9.587
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.213 9.587 C 2.232 8.745 1.609 7.325 1.67 6.068 C 1.709 5.25 2.008 4.469 1.772 3.632 C 1.609 3.055 1.217 2.564 0.897 2.05 C 0.501 1.416 0.199 0.716 0.013 0 C -0.108 2.589 0.614 5.405 2.013 7.803",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.892,
      top: 16.494,
      width: 7.462,
      height: 10.065,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.462333679199219,
      height: 10.064781188964844,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.462,
      height: 10.065,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.462,
    height: 10.065,
    viewBox: "0 0 7.462 10.065",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.462,
      height: 10.065
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.401 7.651 C 2.816 7.426 2.342 6.844 1.936 6.27 C 0.763 4.613 -0.208 2.551 0.039 0.701 C 0.067 0.486 0.116 0.269 0.244 0.128 C 0.373 -0.013 0.6 -0.054 0.774 0.089 C 1.013 0.286 1.054 0.721 1.313 0.868 C 1.599 1.03 1.955 0.712 2.17 0.994 C 2.325 1.198 2.213 1.515 2.37 1.718 C 2.444 1.812 2.555 1.849 2.647 1.916 C 2.943 2.127 3.006 2.573 3.176 2.921 C 3.46 3.502 4.043 3.799 4.499 4.223 C 5.435 5.095 6.884 6.72 7.192 7.988 C 7.234 8.164 7.953 11.072 6.854 9.697 C 6.787 9.612 6.19 10.293 5.414 9.335 C 4.787 8.562 4.136 7.828 3.344 7.33",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25.217,
      top: 17.852,
      width: 2.918,
      height: 6.592,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.9176595211029053,
      height: 6.591888427734375,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.918,
      height: 6.592,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.918,
    height: 6.592,
    viewBox: "0 0 2.918 6.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.918,
      height: 6.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.213 4.193 C -0.129 2.924 -0.057 1.601 0.411 0.568 C 0.524 0.318 0.675 0.072 0.919 0 C 1.564 0.342 2.074 1.043 2.376 1.784 C 2.677 2.525 2.795 3.311 2.873 4.079 C 2.925 4.591 2.96 5.12 2.81 5.562 C 2.706 5.869 2.519 6.116 2.334 6.356 C 2.242 6.476 2.133 6.603 1.981 6.591 C 1.876 6.583 1.775 6.509 1.681 6.434 C 0.984 5.872 0.424 5.053 0.127 4.167",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 29.606,
      top: 12.077,
      width: 3.9,
      height: 7.826,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.899759531021118,
      height: 7.82643985748291,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.004,
      top: 0.001,
      width: 3.9,
      height: 7.827,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.900,
    height: 7.827,
    viewBox: "0 0 3.900 7.827",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.9,
      height: 7.827
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.421 3.574 C 2.651 2.407 1.775 1.32 0.818 0.346 C 0.691 0.217 0.557 0.085 0.403 0.026 C 0.249 -0.032 0.071 0.005 0.017 0.158 C -0.02 0.264 0.009 0.4 0.048 0.523 C 0.286 1.289 0.832 1.925 1.236 2.627 C 2.036 4.014 2.266 5.627 2.419 7.161 C 2.44 7.362 2.474 7.593 2.622 7.73 C 2.78 7.875 2.988 7.837 3.142 7.753 C 3.717 7.439 3.948 6.632 3.892 5.837 C 3.835 5.042 3.54 4.245 3.249 3.467",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 29.631,
      top: 10.586,
      width: 5.614,
      height: 7.81,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.614345073699951,
      height: 7.810131072998047,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.614,
      height: 7.811,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.614,
    height: 7.811,
    viewBox: "0 0 5.614 7.811",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.614,
      height: 7.811
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.336 2.088 C 2.825 1.719 2.374 1.235 1.886 0.819 C 1.398 0.403 0.845 0.044 0.291 0.002 C 0.192 -0.005 0.083 0.004 0.032 0.088 C -0.007 0.152 -0.004 0.243 0.009 0.328 C 0.109 1.018 0.69 1.553 1.19 2.037 C 2.132 2.948 2.968 4.012 3.656 5.174 C 4.093 5.911 4.47 6.686 4.927 7.409 C 5.067 7.63 5.292 7.879 5.481 7.794 C 5.659 7.714 5.627 7.409 5.567 7.17 C 5.094 5.316 4.275 3.506 3.186 1.911",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.854,
      top: 10.629,
      width: 4.298,
      height: 5.292,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.2983293533325195,
      height: 5.292102813720703,
      clipPath: "inset(0.000px 0.000px 0px -0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: 0,
      width: 4.298,
      height: 5.292,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.298,
    height: 5.292,
    viewBox: "0 0 4.298 5.292",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.298,
      height: 5.292
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.298 5.224 C 3.687 3.174 2.321 1.283 0.645 0.164 C 0.445 0.03 0.173 -0.086 0.05 0.087 C -0.033 0.205 0.003 0.397 0.046 0.564 C 0.383 1.849 1.121 3.189 2.209 3.747 C 2.592 3.943 2.999 4.033 3.373 4.263 C 3.748 4.494 4.075 4.864 4.281 5.292",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32.583,
      top: 12.112,
      width: 4.811,
      height: 9.352,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.8114776611328125,
      height: 9.35209846496582,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.002,
      width: 4.811,
      height: 9.351,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.811,
    height: 9.351,
    viewBox: "0 0 4.811 9.351",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.811,
      height: 9.351
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.454 0.096 C 0.323 -0.071 0.089 -0.004 0.027 0.171 C -0.036 0.347 0.022 0.57 0.092 0.772 C 0.326 1.439 0.71 2.067 1.19 2.566 C 1.483 2.872 1.812 3.131 2.088 3.458 C 2.365 3.784 2.593 4.207 2.587 4.616 C 2.582 4.926 2.443 5.19 2.446 5.502 C 2.447 5.791 2.569 6.086 2.686 6.367 C 3.056 7.247 3.43 8.126 3.809 9.003 C 3.85 9.097 3.894 9.196 3.966 9.263 C 4.07 9.359 4.207 9.366 4.318 9.332 C 4.611 9.241 4.778 8.906 4.806 8.548 C 4.834 8.189 4.746 7.807 4.652 7.436 C 4.317 6.115 3.883 4.806 3.358 3.529",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.603,
      top: 11.622,
      width: 1.267,
      height: 4.093,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.2669106721878052,
      height: 4.09261417388916,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.267,
      height: 4.092,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.267,
    height: 4.092,
    viewBox: "0 0 1.267 4.092",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1.267,
      height: 4.092
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.134 3.274 C 0.007 2.181 0.185 1.111 0.633 0.262 C 0.717 0.104 0.86 -0.062 1.033 0.023 C 1.204 0.108 1.253 0.364 1.26 0.564 C 1.309 1.79 1.082 2.966 0.606 3.951 C 0.573 4.02 0.529 4.094 0.454 4.092 C 0.348 4.09 0.273 3.941 0.233 3.82 C 0.109 3.437 0.03 3.044 0 2.656",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36.177,
      top: 11.972,
      width: 2.427,
      height: 9.378,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.42742657661438,
      height: 9.378193855285645,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.427,
      height: 9.378,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.427,
    height: 9.378,
    viewBox: "0 0 2.427 9.378",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.427,
      height: 9.378
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.33 0.134 C 0.524 -0.064 0.898 0.098 1.095 0.377 C 1.292 0.656 1.36 1.005 1.42 1.336 C 1.7 2.884 1.98 4.432 2.26 5.98 C 2.353 6.489 2.445 7.005 2.424 7.5 C 2.393 8.219 2.111 8.866 1.651 9.272 C 1.566 9.346 1.454 9.415 1.34 9.355 C 1.265 9.316 1.212 9.231 1.167 9.15 C 0.889 8.644 0.755 8.079 0.627 7.527 C 0.493 6.952 0.359 6.377 0.226 5.803 C 0.106 5.289 -0.015 4.765 0.001 4.263 C 0.021 3.652 0.242 3.121 0.371 2.551 C 0.553 1.757 0.556 0.875 0.381 0",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 38.296,
      top: 13.721,
      width: 2.849,
      height: 9.364,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.848912000656128,
      height: 9.36351490020752,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.849,
      height: 9.365,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.849,
    height: 9.365,
    viewBox: "0 0 2.849 9.365",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.849,
      height: 9.365
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.744 4.342 C 2.474 3.097 2.205 1.853 1.934 0.609 C 1.89 0.407 1.829 0.176 1.667 0.061 C 1.459 -0.085 1.236 0.057 1.086 0.215 C 0.058 1.293 -0.279 3.172 0.242 4.933 C 0.425 5.555 0.708 6.165 0.801 6.793 C 0.916 7.573 0.73 8.322 0.889 9.101 C 0.902 9.166 0.92 9.235 0.961 9.287 C 1.049 9.396 1.19 9.375 1.286 9.32 C 1.628 9.129 1.785 8.688 1.912 8.268 C 2.326 6.895 2.64 5.463 2.849 3.988",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 37.515,
      top: 27.7,
      width: 14.711,
      height: 6.13,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.171,
      top: 1.476,
      width: 14.54,
      height: 4.654,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.540007591247559,
      height: 4.654439926147461,
      clipPath: "inset(-0.000px 0.000px 0.000px -0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.54,
      height: 4.655,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.540,
    height: 4.655,
    viewBox: "0 0 14.540 4.655",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.54,
      height: 4.655
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.611 0.349 C 3.102 1.743 5.723 2.354 8.116 2.099 C 8.952 2.01 9.758 1.818 10.563 1.626 C 11.646 1.367 12.729 1.109 13.812 0.85 C 14.05 0.794 14.371 0.783 14.54 1.079 C 14.003 2.852 12.577 3.791 11.072 4.251 C 8.455 5.052 5.396 4.654 2.487 3.135 C 2.012 2.887 1.53 2.601 1.12 2.161 C 0.584 1.584 0.222 0.788 0 0 C 0.21 0.083 0.421 0.166 0.632 0.25",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 13.063,
    height: 4.931,
    viewBox: "0 0 13.063 4.931",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.063,
      height: 4.931
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.709 0.494 C 3.855 1.69 5.2 2.538 6.532 2.906 C 8.771 3.524 10.84 2.795 13.063 3.182 C 12.668 3.647 12.081 3.803 11.515 3.948 C 10.705 4.156 9.895 4.363 9.084 4.567 C 8.335 4.755 7.581 4.941 6.778 4.931 C 4.841 4.908 2.775 3.742 0.917 2.253 C 0.469 1.894 -0.049 1.337 0.004 0.775 C 0.033 0.462 0.244 0.274 0.467 0.167 C 1.136 -0.157 1.992 0.025 2.786 0.419",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("svg", {
    width: 4.138,
    height: 2.458,
    viewBox: "0 0 4.138 2.458",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.938,
      top: 19.307,
      width: 4.138,
      height: 2.458
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.458 1.152 C 3.253 0.804 2.925 0.559 2.594 0.416 C 2.261 0.273 1.92 0.222 1.584 0.172 C 1.251 0.122 0.918 0.072 0.584 0.022 C 0.45 0.002 0.311 -0.018 0.192 0.027 C 0.073 0.072 -0.021 0.201 0.004 0.356 C 0.035 0.548 0.219 0.68 0.377 0.774 C 1.385 1.371 2.415 1.898 3.458 2.348 C 3.591 2.406 3.73 2.463 3.862 2.457 C 3.995 2.451 4.12 2.365 4.136 2.216 C 4.152 2.073 4.068 1.921 3.986 1.789 C 3.78 1.462 3.554 1.15 3.308 0.858",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.218,
      top: 19.756,
      width: 9.962,
      height: 6.424,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.961779594421387,
      height: 6.423911094665527,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.962,
      height: 6.424,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.962,
    height: 6.424,
    viewBox: "0 0 9.962 6.424",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.962,
      height: 6.424
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.804 0.269 C 1.5 0.264 1.22 0.113 0.927 0.037 C 0.633 -0.039 0.27 -0.012 0.093 0.246 C -0.15 0.602 0.129 1.079 0.404 1.407 C 1.591 2.829 2.782 4.105 4.291 5.164 C 5.021 5.676 7.389 6.709 8.292 6.35 C 8.931 6.096 10.023 5.183 9.959 4.393 C 9.833 2.839 6.498 2.422 5.468 1.728 C 4.342 0.971 2.946 1.007 1.805 0.269",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.181,
      top: 15.513,
      width: 4.626,
      height: 8.102,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.625696659088135,
      height: 8.10205364227295,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.626,
      height: 8.102,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.626,
    height: 8.102,
    viewBox: "0 0 4.626 8.102",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.626,
      height: 8.102
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.778 5.201 C 2.996 4.692 2.444 3.779 2.002 2.88 C 1.561 1.98 1.179 1.03 0.569 0.249 C 0.479 0.134 0.37 0.015 0.248 0.001 C -0.01 -0.027 -0.032 0.383 0.028 0.681 C 0.416 2.607 1.078 4.518 1.977 6.312 C 2.233 6.823 2.521 7.341 2.932 7.705 C 3.343 8.068 3.908 8.238 4.274 7.973 C 4.626 7.717 4.696 7.128 4.563 6.601 C 4.431 6.074 4.135 5.59 3.846 5.122",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.608,
      top: 18.889,
      width: 7.028,
      height: 7.283,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.027752876281738,
      height: 7.282552242279053,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.026,
      height: 7.282,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.026,
    height: 7.282,
    viewBox: "0 0 7.026 7.282",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.026,
      height: 7.282
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.041 1.299 C 1.55 0.922 1.059 0.544 0.568 0.166 C 0.458 0.082 0.337 -0.007 0.219 0 C -0.064 0.018 -0.031 0.493 0.086 0.82 C 0.484 1.931 1.094 2.963 1.737 3.954 C 2.418 5.005 3.166 6.048 4.108 6.775 C 4.33 6.946 4.564 7.1 4.809 7.188 C 5.311 7.368 5.806 7.255 6.274 7.142 C 6.572 7.069 6.904 6.965 6.999 6.638 C 7.055 6.446 7.015 6.216 6.973 5.999 C 6.83 5.252 6.664 4.466 6.219 3.833 C 5.937 3.432 5.564 3.127 5.2 2.829 C 4.712 2.432 4.475 2.56 3.945 2.272 C 3.283 1.912 2.825 1.814 2.216 1.314",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.844,
      top: 22.213,
      width: 4.989,
      height: 6.108,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.989073753356934,
      height: 6.10834264755249,
      clipPath: "inset(-0.000px 0px 0.000px 0.000px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.99,
      height: 6.108,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.990,
    height: 6.108,
    viewBox: "0 0 4.990 6.108",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.99,
      height: 6.108
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.951 3.593 C 3.322 3.504 2.79 2.85 2.34 2.251 C 1.911 1.679 1.481 1.107 1.051 0.535 C 0.847 0.262 0.573 -0.045 0.303 0.006 C 0.12 0.04 0.013 0.243 0.001 0.46 C -0.01 0.677 0.056 0.906 0.129 1.126 C 0.527 2.324 1.142 3.45 1.757 4.561 C 1.92 4.857 2.088 5.158 2.316 5.398 C 2.884 5.996 3.665 6.071 4.363 6.105 C 4.57 6.115 4.803 6.113 4.916 5.939 C 4.984 5.833 4.994 5.685 4.989 5.541 C 4.963 4.764 4.562 3.933 3.967 3.425",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.868,
      top: 19.501,
      width: 2.87,
      height: 7.097,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.8701908588409424,
      height: 7.096636772155762,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 2.87,
      height: 7.097,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.870,
    height: 7.097,
    viewBox: "0 0 2.870 7.097",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.87,
      height: 7.097
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.331 5.98 C 0.48 4.36 -0.196 2.546 0.057 0.965 C 0.102 0.684 0.18 0.408 0.347 0.216 C 0.513 0.024 0.783 -0.065 1.039 0.054 C 1.331 0.19 1.521 0.542 1.681 0.863 C 1.904 1.311 2.127 1.758 2.35 2.206 C 2.574 2.657 2.805 3.125 2.858 3.608 C 2.902 4.006 2.822 4.38 2.742 4.743 C 2.59 5.438 2.437 6.136 2.183 6.771 C 2.138 6.885 2.085 7.001 1.99 7.058 C 1.835 7.15 1.62 7.062 1.438 6.958 C 0.965 6.688 0.524 6.306 0.157 5.848",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24.511,
      top: 22.057,
      width: 5.005,
      height: 8.921,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.004624366760254,
      height: 8.920741081237793,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.005,
      height: 8.921,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.005,
    height: 8.921,
    viewBox: "0 0 5.005 8.921",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.005,
      height: 8.921
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.005 6.129 C 4.191 3.756 2.62 1.588 0.7 0.187 C 0.527 0.06 0.307 -0.064 0.159 0.038 C 0.068 0.1 0.035 0.233 0.019 0.361 C -0.078 1.122 0.219 1.957 0.519 2.737 C 1.259 4.657 2.063 6.557 2.928 8.429 C 3.025 8.639 3.16 8.881 3.352 8.917 C 3.454 8.936 3.545 8.888 3.626 8.834 C 4.5 8.258 4.817 7.009 4.99 5.811",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.208,
      top: 16.325,
      width: 4.692,
      height: 6.848,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.69198751449585,
      height: 6.847931385040283,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.001,
      width: 4.692,
      height: 6.848,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.692,
    height: 6.848,
    viewBox: "0 0 4.692 6.848",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.692,
      height: 6.848
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.066 4.459 C 0.556 3.099 -0.967 0.23 0.913 0 C 2.115 0.441 2.953 1.968 3.89 2.955 C 5.437 4.422 4.432 5.885 3.492 6.805 C 2.468 7.124 1.294 5.594 1.065 4.459",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 2.874,
    height: 6.664,
    viewBox: "0 0 2.874 6.664",
    fill: "none",
    style: {
      position: "absolute",
      left: 28.072,
      top: 21.588,
      width: 2.874,
      height: 6.664
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.167 5.687 C 0.125 4.706 -0.019 3.708 0.002 2.74 C 0.023 1.772 0.229 0.807 0.794 0.199 C 0.933 0.05 1.141 -0.076 1.336 0.054 C 1.416 0.107 1.477 0.195 1.533 0.279 C 1.925 0.861 2.266 1.483 2.548 2.128 C 2.683 2.436 2.805 2.754 2.852 3.077 C 2.899 3.404 2.864 3.721 2.817 4.028 C 2.682 4.892 2.441 5.713 2.102 6.46 C 2.069 6.534 2.031 6.61 1.965 6.644 C 1.9 6.676 1.819 6.663 1.743 6.646 C 1.191 6.517 0.645 6.162 0.226 5.664",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30.174,
      top: 18.94,
      width: 4.744,
      height: 6.949,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.7443671226501465,
      height: 6.949044227600098,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.001,
      width: 4.744,
      height: 6.949,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.744,
    height: 6.949,
    viewBox: "0 0 4.744 6.949",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.744,
      height: 6.949
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.092 5.333 C 0.118 3.496 0.558 1.761 1.363 0.336 C 1.427 0.223 1.496 0.108 1.602 0.047 C 1.893 -0.118 2.292 0.181 2.575 0.483 C 3.688 1.676 4.467 3.281 4.71 4.884 C 4.77 5.28 4.777 5.736 4.517 5.932 C 4.365 6.047 4.158 6.044 3.964 6.061 C 3.502 6.103 3.072 6.281 2.725 6.577 C 2.495 6.771 2.25 7.028 1.936 6.925 C 1.764 6.868 1.616 6.712 1.478 6.562 C 0.985 6.028 0.493 5.492 0 4.957",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 29.698,
      top: 23.427,
      width: 3.166,
      height: 5.918,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.1656394004821777,
      height: 5.917532920837402,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.165,
      height: 5.918,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.165,
    height: 5.918,
    viewBox: "0 0 3.165 5.918",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.165,
      height: 5.918
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.225 5.573 C 0.016 4.271 -0.048 2.969 0.036 1.713 C 0.081 1.032 0.225 0.279 0.76 0.058 C 1.147 -0.102 1.65 0.085 2.024 0.438 C 2.398 0.791 2.658 1.284 2.838 1.782 C 3.336 3.165 3.262 4.689 2.644 5.757 C 2.61 5.815 2.573 5.874 2.515 5.901 C 2.447 5.933 2.361 5.914 2.28 5.894 C 1.59 5.727 0.899 5.559 0.209 5.392",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.461,
    height: 8.340,
    viewBox: "0 0 3.461 8.340",
    fill: "none",
    style: {
      position: "absolute",
      left: 31.924,
      top: 21.976,
      width: 3.461,
      height: 8.34
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 7.386 C 0.832 5.459 0.223 2.862 0.536 0.649 C 0.572 0.396 0.638 0.123 0.837 0.031 C 1.191 -0.13 1.604 0.369 1.852 0.797 C 2.095 1.216 2.333 1.637 2.567 2.062 C 2.889 2.649 3.207 3.255 3.358 3.897 C 3.676 5.256 3.194 6.499 2.721 7.621 C 2.586 7.941 2.415 8.292 2.093 8.335 C 1.895 8.362 1.681 8.264 1.478 8.168 C 0.909 7.899 0.263 7.544 0.025 6.89",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.786,
      top: 14.356,
      width: 4.998,
      height: 13.295,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.998076915740967,
      height: 13.294673919677734,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.998,
      height: 13.294,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.998,
    height: 13.294,
    viewBox: "0 0 4.998 13.294",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.998,
      height: 13.294
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.74 6.752 C 1.137 6.024 0.738 5.066 0.913 4.222 C 0.956 4.011 1.053 3.827 1.086 3.611 C 1.225 2.693 0.242 1.797 0.032 0.819 C -0.02 0.577 -0.017 0.317 0.107 0.153 C 0.402 -0.235 1.036 0.188 1.433 0.614 C 2.912 2.203 4.191 4.155 4.711 6.28 C 5.265 8.548 4.909 10.765 4.55 12.884 C 4.521 13.057 4.472 13.254 4.322 13.289 C 4.115 13.337 3.918 13.047 3.804 12.806 C 2.88 10.862 2.823 8.617 1.741 6.752",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.762,
      top: 19.062,
      width: 3.203,
      height: 9.538,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.20328688621521,
      height: 9.538016319274902,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: 0,
      width: 3.204,
      height: 9.538,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.204,
    height: 9.538,
    viewBox: "0 0 3.204 9.538",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.204,
      height: 9.538
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.174 9.402 C 0.119 7.868 0.065 6.335 0.01 4.801 C -0.014 4.124 -0.024 3.395 0.324 2.927 C 0.509 2.677 0.794 2.504 0.85 2.164 C 0.882 1.963 0.827 1.728 0.887 1.54 C 1.038 1.063 1.731 1.268 2.051 0.939 C 2.293 0.69 2.278 0.173 2.57 0 C 3.101 0.269 3.207 1.08 3.204 1.698 C 3.197 3.326 3.19 4.955 3.182 6.584 C 3.181 6.995 3.178 7.41 3.099 7.795 C 2.82 9.145 1.483 9.88 0.218 9.38",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30.369,
      top: 24.231,
      width: 2.891,
      height: 8.395,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.891469717025757,
      height: 8.394790649414062,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: -0.001,
      width: 2.892,
      height: 8.395,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.892,
    height: 8.395,
    viewBox: "0 0 2.892 8.395",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.892,
      height: 8.395
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.288 7.56 C 0.12 7.493 0.031 7.259 0.01 7.064 C -0.102 6.045 0.794 5.442 0.885 4.466 C 0.942 3.859 0.68 3.211 0.516 2.581 C 0.334 1.881 0.271 1.167 0.329 0.492 C 0.343 0.327 0.37 0.151 0.48 0.06 C 0.739 -0.155 1.141 0.251 1.375 0.602 C 1.643 1.005 1.912 1.409 2.181 1.812 C 2.421 2.174 2.667 2.546 2.788 2.96 C 2.893 3.316 2.898 3.679 2.889 4.031 C 2.852 5.566 2.563 7.089 1.761 8.16 C 1.666 8.288 1.545 8.415 1.384 8.392 C 1.297 8.38 1.213 8.324 1.132 8.27 C 0.799 8.042 0.474 7.795 0.158 7.529",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 42.049,
      top: 10.871,
      width: 4.294,
      height: 10.229,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.29423713684082,
      height: 10.228679656982422,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.293,
      height: 10.228,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.293,
    height: 10.228,
    viewBox: "0 0 4.293 10.228",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.293,
      height: 10.228
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.892 0.33 C 3.013 -0.087 3.635 -0.095 3.933 0.228 C 4.232 0.551 4.283 1.035 4.291 1.476 C 4.304 2.163 4.255 2.847 4.176 3.526 C 4.047 4.619 3.84 5.699 3.556 6.752 C 3.342 7.547 3.076 8.342 2.609 8.999 C 2.141 9.656 1.442 10.167 0.649 10.224 C 0.526 10.233 0.396 10.23 0.285 10.17 C 0.012 10.022 -0.02 9.632 0.008 9.319 C 0.289 6.149 2.656 3.554 2.816 0.368",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 3.456,
    height: 4.261,
    viewBox: "0 0 3.456 4.261",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.299,
      top: 18.915,
      width: 3.456,
      height: 4.261
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.743 C 0.41 3.229 2.713 -1.302 3.421 0.368 C 3.842 1.523 0.336 5.71 0 3.743 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.707,
    height: 13.459,
    viewBox: "0 0 5.707 13.459",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.971,
      top: 29.619,
      width: 5.707,
      height: 13.459
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.17 0.611 C 1.416 3.413 2.736 5.905 3.328 9.011 C 3.472 9.774 3.607 14.069 5.118 13.385 C 5.775 13.088 5.762 10.981 5.645 10.212 C 5.422 8.739 4.708 7.269 4.089 5.904 C 3.283 4.128 1.883 0.873 0.163 0 C 0.018 0.265 -0.12 0.543 0.17 0.611 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 37.996,
      top: 16.885,
      width: 10.744,
      height: 11.151,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.744186401367188,
      height: 11.150924682617188,
      clipPath: "inset(0px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.001,
      width: 10.745,
      height: 11.151,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.745,
    height: 11.151,
    viewBox: "0 0 10.745 11.151",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 10.745,
      height: 11.151
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.241 4.534 C 7.209 3.996 9.122 2.745 9.324 0.605 C 9.902 -0.619 10.976 0.219 10.7 1.303 C 10.498 4.015 9.818 7.129 7.152 8.508 C -4.323 14.446 0.307 9.192 5.218 4.347",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 4.175,
    height: 7.479,
    viewBox: "0 0 4.175 7.479",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.14,
      top: 10.934,
      width: 4.175,
      height: 7.479
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.158 6.929 C 0.954 5.361 2.131 -0.392 4.113 0.021 C 4.584 1.629 2.26 9.102 0 7.159",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 37.81,
      top: 15.954,
      width: 5.591,
      height: 11.39,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.590610980987549,
      height: 11.389843940734863,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 5.59,
      height: 11.39,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.590,
    height: 11.390,
    viewBox: "0 0 5.590 11.390",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.59,
      height: 11.39
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.648 2.564 C 3.18 1.573 3.185 0.695 4.075 0.075 C 6.481 -0.557 5.402 2.987 4.994 4.211 C 4.361 6.42 3.676 8.718 2.135 10.107 C 1.742 10.516 0.103 12.161 0 10.957 C 0.122 8.303 1.801 5.3 2.648 2.564",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 4.889,
    height: 2.540,
    viewBox: "0 0 4.889 2.540",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.369,
      top: 27.568,
      width: 4.889,
      height: 2.54
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.816 2.426 C 4.013 2.706 3.059 2.422 2.166 2.1 C 1.543 1.875 0.91 1.624 0.348 1.183 C 0.182 1.053 0.004 0.868 0 0.657 C -0.005 0.42 0.212 0.309 0.409 0.276 C 0.798 0.21 1.218 0.274 1.606 0.206 C 1.948 0.147 2.263 -0.013 2.621 0.001 C 3.048 0.018 3.487 0.287 3.846 0.641 C 4.204 0.995 4.494 1.43 4.78 1.86 C 4.832 1.937 4.886 2.022 4.889 2.11 C 4.893 2.198 4.815 2.274 4.744 2.224",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.554,
      top: 27.275,
      width: 15.859,
      height: 5.672,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.859297752380371,
      height: 5.672089576721191,
      clipPath: "inset(-0.000px 0px 0.000px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.859,
      height: 5.672,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.859,
    height: 5.672,
    viewBox: "0 0 15.859 5.672",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 15.859,
      height: 5.672
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.73 0 C 2.072 0.097 1.408 0.28 0.765 0.541 C 0.42 0.682 0.013 0.933 0 1.259 C -0.008 1.451 0.133 1.59 0.269 1.708 C 3.825 4.812 9.081 6.204 14.543 5.488 C 15.058 5.42 15.732 5.202 15.845 4.717 C 15.924 4.38 15.661 4.132 15.41 3.944 C 11.935 1.344 7.305 0.011 2.379 0.192",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.687,
      top: 27.451,
      width: 8.1,
      height: 5.41,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.09988021850586,
      height: 5.410338878631592,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.099,
      height: 5.411,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.099,
    height: 5.411,
    viewBox: "0 0 8.099 5.411",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.099,
      height: 5.411
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.092 2.706 C 4.977 2.263 2.858 1.415 0.854 0.209 C 0.598 0.055 0.272 -0.102 0.093 0.086 C -0.077 0.265 0.015 0.627 0.139 0.908 C 0.869 2.565 2.295 3.737 3.643 4.808 C 3.878 4.995 4.119 5.185 4.381 5.282 C 4.569 5.352 4.76 5.371 4.948 5.384 C 5.805 5.444 6.65 5.402 7.467 5.259 C 7.665 5.224 7.873 5.176 7.992 5.009 C 8.14 4.803 8.114 4.476 8.042 4.181 C 7.893 3.575 7.573 2.991 7.145 2.545",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.004,
      top: 22.938,
      width: 13.581,
      height: 4.794,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.58082389831543,
      height: 4.793878555297852,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.581,
      height: 4.794,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.581,
    height: 4.794,
    viewBox: "0 0 13.581 4.794",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.581,
      height: 4.794
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.099 0 C -0.493 1.393 1.712 2.604 3.057 2.798 C 4.987 3.208 15.199 6.782 13.36 3.248 C 10.133 3.89 3.489 0.768 0.099 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 5.705,
    height: 4.392,
    viewBox: "0 0 5.705 4.392",
    fill: "none",
    style: {
      position: "absolute",
      left: 23.596,
      top: 29.03,
      width: 5.705,
      height: 4.392
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.024 0.19 C 0.811 0.989 1.637 1.772 2.566 2.261 C 3.495 2.75 4.553 2.913 5.332 2.447 C 5.423 2.393 5.552 2.34 5.634 2.445 C 5.663 2.481 5.677 2.529 5.686 2.575 C 5.754 2.923 5.633 3.243 5.469 3.494 C 5.107 4.046 4.517 4.376 3.865 4.392 C 3.214 4.407 2.508 4.108 1.947 3.577 C 1.585 3.236 1.288 2.809 1.006 2.38 C 0.525 1.65 0.058 0.837 0 0",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.563,
      top: 27.596,
      width: 4.591,
      height: 5.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.590504169464111,
      height: 5.994997501373291,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 4.59,
      height: 5.995,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.590,
    height: 5.995,
    viewBox: "0 0 4.590 5.995",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.59,
      height: 5.995
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.157 5.986 C 1.653 6.062 0.868 5.687 0.391 4.831 C 0.075 4.264 -0.004 3.672 0 3.185 C 0.009 2.092 0.334 1.276 0.656 0.483 C 0.757 0.233 0.878 -0.03 1.142 0.003 C 1.409 0.035 1.745 0.366 2.022 0.72 C 2.3 1.075 2.554 1.475 2.847 1.796 C 3.172 2.151 3.52 2.382 3.852 2.709 C 4.185 3.036 4.533 3.54 4.584 3.963 C 4.605 4.143 4.569 4.281 4.525 4.404 C 4.405 4.735 4.217 4.992 3.976 5.155 C 3.384 5.558 2.477 5.413 2.001 5.994",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 8.800,
    height: 6.413,
    viewBox: "0 0 8.800 6.413",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.678,
      top: 22.723,
      width: 8.8,
      height: 6.413
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.225 5.286 C 4.341 5.136 3.478 4.591 2.682 3.978 C 1.484 3.057 0.28 1.785 0.011 0.252 C -0.003 0.174 -0.011 0.086 0.032 0.037 C 0.068 -0.005 0.132 -0.003 0.19 0.004 C 1.414 0.144 2.519 1.45 3.748 1.759 C 4.162 1.864 4.583 1.852 4.988 2.043 C 5.724 2.391 6.189 3.289 6.578 4.104 C 6.806 4.581 8.986 6.013 8.787 6.413",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.867,
      top: 24.893,
      width: 7.336,
      height: 4.367,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.336295127868652,
      height: 4.36659574508667,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.336,
      height: 4.366,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.336,
    height: 4.366,
    viewBox: "0 0 7.336 4.366",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 7.336,
      height: 4.366
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.034 3.662 L 0.653 0.107 C 0.572 0.062 0.488 0.016 0.404 0.003 C 0.194 -0.028 0.032 0.166 0.005 0.396 C -0.022 0.626 0.057 0.878 0.158 1.11 C 0.675 2.3 1.728 3.116 2.74 3.78 C 3.017 3.963 3.3 4.142 3.596 4.244 C 3.966 4.373 4.339 4.377 4.701 4.359 C 5.612 4.314 6.499 4.143 7.336 3.849",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 6.379,
    height: 4.423,
    viewBox: "0 0 6.379 4.423",
    fill: "none",
    style: {
      position: "absolute",
      left: 37.765,
      top: 25.788,
      width: 6.379,
      height: 4.423
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.234 C 2.123 4.743 4.245 4.214 5.717 2.811 C 5.972 2.568 6.213 2.289 6.318 1.913 C 6.479 1.336 6.29 0.643 6.102 0 C 5.028 0.136 3.984 0.394 2.99 0.767 C 2.38 0.996 1.751 1.273 1.062 1.11 C 0.952 1.084 0.829 1.049 0.749 1.116 C 0.701 1.156 0.679 1.226 0.66 1.293 C 0.392 2.251 0.316 3.316 0.438 4.395",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.015,
    height: 13.251,
    viewBox: "0 0 3.015 13.251",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.734,
      top: 32.378,
      width: 3.015,
      height: 13.251
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.481 0.479 C 1.485 3.371 1.692 6.063 0.93 8.817 C 0.744 9.493 -0.973 12.911 0.786 13.242 C 1.551 13.387 2.444 11.74 2.661 11.074 C 3.078 9.801 3.018 8.25 3.004 6.835 C 2.986 4.993 3.029 1.661 1.736 0 C 1.481 0.123 1.228 0.261 1.48 0.479 L 1.481 0.479 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.208,
    height: 10.704,
    viewBox: "0 0 8.208 10.704",
    fill: "none",
    style: {
      position: "absolute",
      left: 32.154,
      top: 31.906,
      width: 8.208,
      height: 10.704
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.142 C 1.126 2.707 2.699 4.234 4.348 6.364 C 5.596 7.975 6.704 9.437 8.208 10.704 C 7.405 7.366 4.986 4.866 2.936 2.348 C 2.336 1.611 0.881 -0.573 0 0.142 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.313,
      top: 19.54,
      width: 8.058,
      height: 8.965,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.05813980102539,
      height: 8.964773178100586,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.057,
      height: 8.965,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.057,
    height: 8.965,
    viewBox: "0 0 8.057 8.965",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.057,
      height: 8.965
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.565 6.481 C 1.782 6.028 1.202 5.118 0.757 4.222 C 0.326 3.354 -0.038 2.398 0.003 1.514 C 0.045 0.63 0.615 -0.127 1.397 0.018 C 2.258 0.176 2.949 1.274 3.269 2.279 C 3.589 3.284 3.707 4.341 4.204 5.285 C 4.895 6.597 6.157 7.39 7.345 7.911 C 7.691 8.063 8.157 8.43 8.038 8.774 C 7.97 8.975 7.732 8.98 7.529 8.953 C 5.752 8.719 3.898 7.683 2.432 6.104",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.758,
      top: 22.91,
      width: 8.707,
      height: 6.268,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.707144737243652,
      height: 6.268165111541748,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 8.708,
      height: 6.268,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.708,
    height: 6.268,
    viewBox: "0 0 8.708 6.268",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.708,
      height: 6.268
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.029 0 C 0.782 1.212 1.883 2.102 3 2.823 C 4.116 3.544 7.625 5.423 8.708 6.228 C 8.336 6.505 5.481 5.241 4.991 5.112 C 4.5 4.983 4.025 4.712 3.565 4.418 C 2.521 3.75 1.501 2.931 0.737 1.847 C 0.349 1.297 0.023 0.65 0 0.008",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 43.83,
      top: 24.039,
      width: 3.351,
      height: 4.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.3506019115448,
      height: 4.676457405090332,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.351,
      height: 4.676,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3.351,
    height: 4.676,
    viewBox: "0 0 3.351 4.676",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 3.351,
      height: 4.676
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.777 1.835 C 1.93 1.363 1.933 0.65 2.231 0.3 C 2.402 0.099 2.648 -0.086 2.913 0.043 C 3.152 0.159 3.287 0.482 3.328 0.765 C 3.421 1.395 3.213 1.961 3.009 2.491 C 2.865 2.864 2.722 3.238 2.578 3.611 C 2.524 3.75 2.47 3.892 2.386 4.006 C 2.273 4.16 2.115 4.258 1.956 4.345 C 1.41 4.644 0.735 4.844 0.104 4.48 C 0.067 4.459 0.028 4.433 0.01 4.391 C -0.009 4.342 0.001 4.285 0.025 4.25 C 0.659 3.357 1.083 3.153 1.776 1.835",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 10.562,
    height: 3.755,
    viewBox: "0 0 10.562 3.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.504,
      top: 31.508,
      width: 10.562,
      height: 3.755
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.534 3.195 C 1.688 2.788 0.905 2.099 0.318 1.246 C -0.514 0.105 0.456 -0.379 1.294 0.336 C 2.86 1.289 4.611 1.657 6.166 1.359 C 7.16 1.075 10.092 -0.158 10.562 1.543 C 9.279 3.669 4.826 4.386 2.543 3.148",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.376,
      top: 31.615,
      width: 9.981,
      height: 4.837,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.98060131072998,
      height: 4.837096214294434,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.98,
      height: 4.837,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.980,
    height: 4.837,
    viewBox: "0 0 9.980 4.837",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 9.98,
      height: 4.837
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.062 2.247 C 7.729 2.866 7.099 3.193 6.43 3.271 C 5.761 3.348 5.051 3.199 4.353 3.003 C 2.806 2.566 1.074 1.697 0.314 0.004 C 0.025 -0.048 -0.042 0.394 0.022 0.727 C 0.39 2.63 2.084 4.196 3.736 4.651 C 5.389 5.106 6.98 4.666 8.397 4.014 C 8.831 3.815 9.264 3.589 9.577 3.209 C 9.891 2.829 10.071 2.265 9.934 1.683 C 9.178 1.521 8.57 1.726 8.063 2.247",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 4.095,
    height: 1.921,
    viewBox: "0 0 4.095 1.921",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.75,
      top: 31.912,
      width: 4.095,
      height: 1.921
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.93 1.896 C 0.598 2.18 -1.121 -0.042 0.992 0.001 C 1.998 0.281 2.967 1.067 4.022 1.129 C 4.556 1.745 1.995 2.018 1.561 1.692",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 28.636,
      top: 32.376,
      width: 4.757,
      height: 3.501,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.7574615478515625,
      height: 3.5014305114746094,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.002,
      top: 0.001,
      width: 4.758,
      height: 3.501,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.758,
    height: 3.501,
    viewBox: "0 0 4.758 3.501",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.758,
      height: 3.501
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.719 0.299 C 0.657 0.029 0.308 -0.085 0.144 0.07 C -0.019 0.224 -0.025 0.526 0.035 0.796 C 0.2 1.528 0.741 2.132 1.253 2.674 C 1.538 2.976 1.841 3.287 2.192 3.42 C 2.381 3.492 2.574 3.507 2.761 3.5 C 3.763 3.463 4.643 2.707 4.754 1.578 C 4.762 1.506 4.763 1.423 4.718 1.359 C 4.629 1.23 4.474 1.302 4.371 1.371 C 3.878 1.693 3.202 1.559 2.578 1.418 C 2.208 1.334 1.832 1.248 1.482 1.037 C 1.131 0.827 0.805 0.467 0.701 0.044",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.314,
      top: 23.125,
      width: 12.675,
      height: 8.565,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.674833297729492,
      height: 8.565215110778809,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.675,
      height: 8.565,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.675,
    height: 8.565,
    viewBox: "0 0 12.675 8.565",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12.675,
      height: 8.565
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.996 6.088 C 2.384 6.236 3.778 6.384 5.144 6.328 C 6.24 6.283 7.376 6.074 8.103 5.296 C 8.736 4.619 8.967 3.614 9.374 2.749 C 9.919 1.592 10.809 0.659 11.906 0.097 C 12.036 0.029 12.187 -0.034 12.339 0.021 C 12.639 0.128 12.696 0.56 12.668 0.875 C 12.546 2.249 12.109 3.521 11.676 4.777 C 11.5 5.29 11.319 5.81 11.008 6.23 C 10.715 6.625 10.318 6.914 9.906 7.167 C 7.1 8.891 3.345 9.03 0 7.532 C 0.034 6.882 0.387 6.307 0.917 6.042",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 31.85,
      top: 23.675,
      width: 4.821,
      height: 7.817,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.821299076080322,
      height: 7.817471027374268,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.001,
      width: 4.822,
      height: 7.818,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.822,
    height: 7.818,
    viewBox: "0 0 4.822 7.818",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.822,
      height: 7.818
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.263 4.131 C 1.492 2.56 2.148 1.828 2.842 0.54 C 3.013 0.225 3.283 -0.109 3.634 0.034 C 3.94 0.16 4.099 0.573 4.198 0.928 C 4.464 1.875 4.656 2.834 4.773 3.788 C 4.813 4.115 4.844 4.448 4.8 4.756 C 4.74 5.172 4.547 5.521 4.316 5.816 C 3.56 6.784 2.417 7.237 1.309 7.663 C 0.9 7.821 0.381 7.95 0 7.565 C 0.575 6.033 0.786 5.151 1.263 4.132",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.334,
      top: 24.007,
      width: 5.728,
      height: 6.807,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.728104591369629,
      height: 6.807160377502441,
      clipPath: "inset(0.000px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.728,
      height: 6.807,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.728,
    height: 6.807,
    viewBox: "0 0 5.728 6.807",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.728,
      height: 6.807
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.027 3.753 C 2.603 2.478 3.425 1.752 4.409 0.585 C 4.649 0.299 4.996 -0.026 5.319 0.002 C 5.6 0.026 5.671 0.309 5.693 0.561 C 5.753 1.234 5.736 1.933 5.645 2.646 C 5.614 2.892 5.573 3.142 5.46 3.392 C 5.309 3.73 5.037 4.047 4.739 4.332 C 3.765 5.265 2.511 5.891 1.3 6.488 C 0.852 6.709 0.3 6.933 0 6.724 C 0.916 5.397 1.323 4.66 2.027 3.753 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "14px 16px 26px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 58,
      borderRadius: 12,
      backgroundColor: "rgb(87,70,41)",
      boxShadow: "0px 8px 20px 0px rgba(87,70,41,0.3)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      whiteSpace: "nowrap",
      lineHeight: 1.4119999408721924,
      color: "rgb(246,238,220)",
      flexShrink: 0
    }
  }, "\uADFC\uC870\uD654\uD658 \uBCF4\uB0B4\uAE30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 58,
      borderRadius: 12,
      backgroundColor: "rgb(151,98,18)",
      boxShadow: "0px 8px 22px 0px rgba(151,98,18,0.42)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Noto Sans KR\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 17,
      whiteSpace: "nowrap",
      lineHeight: 1.4119999408721924,
      color: "rgb(252,244,226)",
      flexShrink: 0
    }
  }, "\uBD80\uC758\uAE08 \uBCF4\uB0B4\uAE30"))))))));
}

// Globals for scripts loaded after this file.
window.RatioVertical = RatioVertical;
window.Icon7 = Icon7;
window.RatioVertical4 = RatioVertical4;
window.V2Light = V2Light;
window.V2Dark = V2Dark;
}
