var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  native: () => native_exports,
  web: () => web_exports
});
module.exports = __toCommonJS(src_exports);

// src/web.ts
var web_exports = {};
__export(web_exports, {
  todo: () => todo
});
var todo = true;

// src/native.ts
var native_exports = {};
__export(native_exports, {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  native,
  web
});
//# sourceMappingURL=index.js.map