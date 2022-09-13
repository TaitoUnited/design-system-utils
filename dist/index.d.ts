declare const todo = true;

declare const web_todo: typeof todo;
declare namespace web {
  export {
    web_todo as todo,
  };
}

declare const WEIGHT_TO_FONT: {
    readonly 100: "Thin";
    readonly 200: "ExtraLight";
    readonly 300: "Light";
    readonly 400: "Regular";
    readonly 500: "Medium";
    readonly 600: "SemiBold";
    readonly 700: "Bold";
    readonly 800: "ExtraBold";
    readonly 900: "Black";
};
declare function getFontFromWeight(weight: number): "thin" | "extralight" | "light" | "regular" | "medium" | "semibold" | "bold" | "extrabold" | "black";
declare function getFonts<T extends Record<string, TypographyDefinition>>(t: T): Record<"thin" | "extralight" | "light" | "regular" | "medium" | "semibold" | "bold" | "extrabold" | "black", string>;
declare function getFontSizes<T extends Record<string, TypographyDefinition>>(t: T): Record<keyof T, number>;
declare function getFontWeights<T extends Record<string, TypographyDefinition>>(t: T): Record<keyof T, string>;
declare function getLineHeights<T extends Record<string, TypographyDefinition>>(t: T): Record<keyof T, number>;
declare function getLetterSpacings<T extends Record<string, TypographyDefinition>>(t: T): Record<keyof T, number>;
declare function getElevation(shadowRadius: number): number;
declare function getShadows<T extends Record<string, ShadowDefinition>, K extends Extract<keyof T, string>>(t: T): Record<ShadowName<K>, ShadowOutput>;
declare type TypographyDefinition = {
    fontFamily: string;
    fontWeight: number;
    fontSize: number;
    textTransform: string;
    letterSpacing: number;
    lineHeight: number;
};
declare type FontWeightToName = typeof WEIGHT_TO_FONT;
declare type FontWeightNum = keyof FontWeightToName;
declare type FontWeightVar = Lowercase<FontWeightToName[keyof FontWeightToName]>;
declare type ShadowName<T extends string> = T extends `shadow${infer Name}` ? Lowercase<Name> : T;
declare type ShadowDefinition = {
    boxShadow: string;
    offset: {
        x: number;
        y: number;
    };
    radius: number;
    opacity: number;
    color: {
        hex: string;
        rgba: string;
    };
};
declare type ShadowOutput = {
    elevation: number;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowRadius: number;
    shadowOpacity: number;
    shadowColor: string;
};

declare const native_getFontFromWeight: typeof getFontFromWeight;
declare const native_getFonts: typeof getFonts;
declare const native_getFontSizes: typeof getFontSizes;
declare const native_getFontWeights: typeof getFontWeights;
declare const native_getLineHeights: typeof getLineHeights;
declare const native_getLetterSpacings: typeof getLetterSpacings;
declare const native_getElevation: typeof getElevation;
declare const native_getShadows: typeof getShadows;
type native_TypographyDefinition = TypographyDefinition;
type native_FontWeightToName = FontWeightToName;
type native_FontWeightNum = FontWeightNum;
type native_FontWeightVar = FontWeightVar;
type native_ShadowName<T extends string> = ShadowName<T>;
type native_ShadowDefinition = ShadowDefinition;
type native_ShadowOutput = ShadowOutput;
declare namespace native {
  export {
    native_getFontFromWeight as getFontFromWeight,
    native_getFonts as getFonts,
    native_getFontSizes as getFontSizes,
    native_getFontWeights as getFontWeights,
    native_getLineHeights as getLineHeights,
    native_getLetterSpacings as getLetterSpacings,
    native_getElevation as getElevation,
    native_getShadows as getShadows,
    native_TypographyDefinition as TypographyDefinition,
    native_FontWeightToName as FontWeightToName,
    native_FontWeightNum as FontWeightNum,
    native_FontWeightVar as FontWeightVar,
    native_ShadowName as ShadowName,
    native_ShadowDefinition as ShadowDefinition,
    native_ShadowOutput as ShadowOutput,
  };
}

export { native, web };
