import { FontSource, loadAsync } from "expo-font";

export const cacheFonts = (fonts: (string | Record<string, FontSource>)[]) => {
    return fonts.map((font) => loadAsync(font));
};
