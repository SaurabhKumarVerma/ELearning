import { color } from '@eLearning/theme/color';
import { MODE } from '@eLearning/types/types';
import { useTheme } from '@rneui/themed';
import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface IELearningTextInput {
  placeholder?: string;
  secureTextEntry?: boolean;
  inputProps?: TextInputProps;
  inputText: string
  onChangeText: (text: string) => void
}

const ELearningTextInput: React.FC<IELearningTextInput> = ({
  placeholder = 'Enter text',
  secureTextEntry = false,
  inputProps,
  inputText,
  onChangeText
}) => {

    const {theme} = useTheme()
    const backgroundColor = theme.mode === MODE.DARK ? color.darkGreenHover:  color.whiteSmoke
    const placeholderColor = theme.mode === MODE.DARK ? color.whisperWhite : color.blackForestGreen
  

  return (
      <TextInput
        style={[styles.input, {backgroundColor}]}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        value={inputText}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...inputProps}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderRadius: 28,
    padding: 24,
    marginBottom: 10,
    fontFamily: 'poppinsMedium',
    fontSize: 16,
  },
});

export default ELearningTextInput;
