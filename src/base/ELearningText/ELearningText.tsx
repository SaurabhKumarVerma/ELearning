/**
 * ELearningText Component
 * 
 * This component is designed to render text with customizable styles, 
 * presets, and font weights. It leverages the `Text` component from 
 * RNEUI to provide a consistent and flexible way to display text 
 * throughout an e-learning application.
 * 
 * Props:
 * - @text (string | number): The content to be displayed. It can be a string 
 *   or a number.
 * - @preset (Preset, optional): A predefined style for the text, allowing 
 *   for consistent typography across the application. Available presets 
 *   include 'heading', 'subheading', 'body', 'thin', 'light', 'regular', 
 *   'medium', 'semiBold', 'bold', and 'black'. Defaults to 'body'.
 * - @size (number, optional): A custom font size for the text. If not provided, 
 *   the size from the selected preset will be used.
 * - @weight (keyof typeof FONT_FAMILY_MAP, optional): A specific font weight 
 *   to be applied to the text. If provided, it overrides the weight from 
 *   the selected preset.
 * - @style (StyleProp<TextStyle>, optional): Additional styles to be applied 
 *   to the text. This allows for further customization beyond the preset styles.
 * 
 * Functionality:
 * - The component creates a set of text presets with predefined styles, 
 *   including font size, weight, and family, based on the Poppins font.
 * - It combines the selected preset style with any custom size, weight, 
 *   or additional styles provided through props.
 * - The final combined style is applied to the `Text` component, ensuring 
 *   that the text is rendered with the desired appearance.
 */
import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { Text, TextProps } from '@rneui/themed';

export type Preset =
    | 'heading'
    | 'subheading'
    | 'body'
    | 'thin'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semiBold'
    | 'bold'
    | 'black';

interface IELearningText extends TextProps {
    text: string | number;
    preset?: Preset;
    size?: number;
    weight?: keyof typeof FONT_FAMILY_MAP;
    style?: StyleProp<TextStyle>;
}

const FONT_FAMILY_MAP = {
    '100': 'poppinsThin',
    '300': 'poppinsLight',
    '400': 'poppinsRegular',
    '500': 'poppinsMedium',
    '600': 'poppinsSemiBold',
    '700': 'poppinsBold',
    '900': 'poppinsBlack',
} as const;

const createPresets = () => {
    const baseFontStyle: TextStyle = { textAlign: 'left', fontSize: 14 };
    const presets: Record<Preset, TextStyle> = {
        heading: {
            ...baseFontStyle,
            fontSize: 24,
            fontWeight: '700',
            fontFamily: FONT_FAMILY_MAP['700'],
            textAlign: 'center',
        },
        subheading: {
            ...baseFontStyle,
            fontSize: 18,
            fontWeight: '600',
            fontFamily: FONT_FAMILY_MAP['600'],
        },
        body: {
            ...baseFontStyle,
            fontWeight: '400',
            fontFamily: FONT_FAMILY_MAP['400'],
        },
        thin: {
            ...baseFontStyle,
            fontWeight: '100',
            fontFamily: FONT_FAMILY_MAP['100'],
        },
        light: {
            ...baseFontStyle,
            fontWeight: '300',
            fontFamily: FONT_FAMILY_MAP['300'],
        },
        regular: {
            ...baseFontStyle,
            fontWeight: '400',
            fontFamily: FONT_FAMILY_MAP['400'],
        },
        medium: {
            ...baseFontStyle,
            fontWeight: '500',
            fontFamily: FONT_FAMILY_MAP['500'],
        },
        semiBold: {
            ...baseFontStyle,
            fontWeight: '600',
            fontFamily: FONT_FAMILY_MAP['600'],
        },
        bold: {
            ...baseFontStyle,
            fontWeight: '700',
            fontFamily: FONT_FAMILY_MAP['700'],
        },
        black: {
            ...baseFontStyle,
            fontWeight: '900',
            fontFamily: FONT_FAMILY_MAP['900'],
        },
    };

    Object.keys(FONT_FAMILY_MAP).forEach((key) => {
        const weightKey = key as keyof typeof FONT_FAMILY_MAP;
        const fontName = FONT_FAMILY_MAP[weightKey];
        const presetName = fontName.replace('poppins', '').toLowerCase() as Preset;

        presets[presetName] = {
            ...baseFontStyle,
            fontWeight: key as TextStyle['fontWeight'],
            fontFamily: fontName,
        };
    });

    return presets;
};

const PRESETS = createPresets();

const ELearningText: React.FC<IELearningText> = ({
    text,
    preset = 'body',
    size,
    weight,
    style,
    ...rest
}) => {
    const presetStyle = PRESETS[preset];

    const combinedStyle: TextStyle = {
        ...presetStyle,
        fontSize: size ?? presetStyle.fontSize,
        fontFamily: weight ? FONT_FAMILY_MAP[weight] : presetStyle.fontFamily,
        ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
    };

    return <Text {...rest} style={combinedStyle}>{text}</Text>;
};

export default ELearningText;
