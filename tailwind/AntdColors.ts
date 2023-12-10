import {
  presetDarkPalettes,
  presetPalettes,
  PalettesProps,
} from "@ant-design/colors";

const mapColors = (colors: PalettesProps) => {
  const collectColors: Record<string, Record<string, string>> = {};

  Object.keys(colors).forEach((key) => {
    const collectVariants: Record<string, string> = {};

    const colorVariants = colors[key];
    colorVariants.forEach((variant, id) => {
      collectVariants[`${id + 1}`] = variant;
    });

    collectColors[key] = collectVariants;
  });

  return collectColors;
};

export const tailwindAntdColors = {
  light: mapColors(presetPalettes),
  dark: mapColors(presetDarkPalettes),
};
