import {fonts} from "./themes";

export const getToggledFont = (style) => style.font.header === fonts.normalFont.header
    ? fonts.largerFont
    : fonts.normalFont;