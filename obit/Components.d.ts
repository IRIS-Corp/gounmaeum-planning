// Components.d.ts — the complete catalog of the 5 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Icon7) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Icon" (node 3641:76)
export interface Icon7Props {
  className?: string;
  style?: React.CSSProperties;
  name?: "Airplane" | "BackArrow" | "BackChevron" | "Bank" | "Bus" | "Car" | "Checkmark" | "ChevronDown" | "ChevronRight" | "CloseX" | "Coins" | "Copy" | "CreditCard" | "Envelope" | "Flower" | "Home" | "KakaoNavi" | "KakaoTalk" | "Phone" | "SMS" | "Train" | "WreathGuide" | "arrowDown" | "arrowDownThick" | "arrowLeft" | "arrowLeftThick" | "arrowRight" | "arrowRightThick" | "arrowUp" | "arrowUpThick" | "bubble" | "bubbleFill" | "caretDown" | "caretUp" | "chevronDown" | "chevronDownSmall" | "chevronDownThick" | "chevronDownThickSmall" | "chevronLeft" | "chevronLeftSmall" | "chevronLeftThick" | "chevronLeftThickSmall" | "chevronLeftTight" | "chevronLeftTightSmall" | "chevronLeftTightThick" | "chevronLeftTightThickSmall" | "chevronRight" | "chevronRightSmall" | "chevronRightThick" | "chevronRightThickSmall" | "chevronRightTight" | "chevronRightTightSmall" | "chevronRightTightThick" | "chevronRightTightThickSmall" | "chevronUp" | "chevronUpSmall" | "chevronUpThick" | "chevronUpThickSmall" | "circleInfo" | "circleInfoFill" | "location" | "locationFill" | "logoKakao" | "mail" | "Default" | "Phoneline" | "envelope" | "heartfill" | "heart" | "Search" | "delivery" | "Moon" | "Schedule" | "Weather-rain";
  theme?: "light" | "dark";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Ratio/Vertical" (node 2805:1588)
export interface RatioVerticalProps {
  className?: string;
  style?: React.CSSProperties;
  ratio?: "1:1" | "1:2" | "2:3" | "3:4";
}

// figma layer: "Ratio/Vertical" (node 4700:27929)
export interface RatioVertical4Props {
  className?: string;
  style?: React.CSSProperties;
  ratio?: "1:1" | "3:4" | "2:3" | "1:2";
  theme?: "light" | "dark";
}

// figma layer: "부고장_v2_먹_Dark" (node 4459:7481)
export interface V2DarkProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "부고장_v2_한지_Light" (node 4511:10583)
export interface V2LightProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const Icon7: React.FC<Icon7Props>;
declare const RatioVertical: React.FC<RatioVerticalProps>;
declare const RatioVertical4: React.FC<RatioVertical4Props>;
declare const V2Dark: React.FC<V2DarkProps>;
declare const V2Light: React.FC<V2LightProps>;
declare global {
  interface Window {
    Icon7: React.FC<Icon7Props>;
    RatioVertical: React.FC<RatioVerticalProps>;
    RatioVertical4: React.FC<RatioVertical4Props>;
    V2Dark: React.FC<V2DarkProps>;
    V2Light: React.FC<V2LightProps>;
  }
}
