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
    text: string;
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
