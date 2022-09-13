"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJC4IRQULjs = require('./chunk-JC4IRQUL.js');

// src/native.ts
var native_exports = {};
_chunkJC4IRQULjs.__export.call(void 0, native_exports, {
  getElevation: () => getElevation,
  getFontFromWeight: () => getFontFromWeight,
  getFontSizes: () => getFontSizes,
  getFontWeights: () => getFontWeights,
  getFonts: () => getFonts,
  getLetterSpacings: () => getLetterSpacings,
  getLineHeights: () => getLineHeights,
  getShadows: () => getShadows
});
var WEIGHT_TO_FONT = {
  100: "Thin",
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Black"
};
function getFontFromWeight(weight) {
  return WEIGHT_TO_FONT[weight].toLowerCase();
}
function getFonts(t) {
  const fonts = {};
  Object.values(t).forEach((token) => {
    const suffix = WEIGHT_TO_FONT[token.fontWeight];
    const name = suffix.toLowerCase();
    fonts[name] = `${token.fontFamily}-${suffix}`;
  });
  return fonts;
}
function getFontSizes(t) {
  const fontSizes = {};
  Object.entries(t).forEach(([key, value]) => {
    fontSizes[key] = value.fontSize;
  });
  return fontSizes;
}
function getFontWeights(t) {
  const fontWeights = {};
  Object.entries(t).forEach(([key, value]) => {
    fontWeights[key] = `${value.fontWeight}`;
  });
  return fontWeights;
}
function getLineHeights(t) {
  const lineHeights = {};
  Object.entries(t).forEach(([key, value]) => {
    lineHeights[key] = value.lineHeight * value.fontSize;
  });
  return lineHeights;
}
function getLetterSpacings(t) {
  const letterSpacings = {};
  Object.entries(t).forEach(([key, value]) => {
    letterSpacings[key] = value.letterSpacing;
  });
  return letterSpacings;
}
var ANDROID_ELEVATIONS = [0, 1, 2, 4, 6, 8, 12, 16, 24];
function getElevation(shadowRadius) {
  const elevation = ANDROID_ELEVATIONS.reduce((prev, curr) => {
    return Math.abs(curr - shadowRadius) < Math.abs(prev - shadowRadius) ? curr : prev;
  }, 0);
  return elevation;
}
function getShadows(t) {
  const shadows = {};
  Object.entries(t).forEach(([key, value]) => {
    const k = key.replace("shadow", "").toLowerCase();
    shadows[k] = {
      elevation: getElevation(value.radius),
      shadowOffset: { width: value.offset.x, height: value.offset.y },
      shadowRadius: value.radius,
      shadowOpacity: value.opacity,
      shadowColor: value.color.hex
    };
  });
  return shadows;
}











exports.getFontFromWeight = getFontFromWeight; exports.getFonts = getFonts; exports.getFontSizes = getFontSizes; exports.getFontWeights = getFontWeights; exports.getLineHeights = getLineHeights; exports.getLetterSpacings = getLetterSpacings; exports.getElevation = getElevation; exports.getShadows = getShadows; exports.native_exports = native_exports;
//# sourceMappingURL=chunk-JOAMHDP6.js.map