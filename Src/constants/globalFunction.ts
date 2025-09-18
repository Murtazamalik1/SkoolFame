import { PixelRatio } from "react-native";

export function getScaledFontSize(size: any) {
    return size / PixelRatio.getFontScale();
}