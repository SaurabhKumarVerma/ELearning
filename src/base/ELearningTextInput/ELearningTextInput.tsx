/**
 * ELearningTextInput Component
 * 
 * This component is designed to render a customizable text input field. 
 * It provides a user-friendly interface for 
 * entering text, with support for placeholder text, secure input (for 
 * passwords), and theming based on the current application mode (light or dark).
 * 
 * Props:
 * - @placeholder (string, optional): The placeholder text to be displayed 
 *   when the input is empty. Defaults to 'Enter text'.
 * - @secureTextEntry (boolean, optional): A flag indicating whether the 
 *   input should be obscured (e.g., for password fields). Defaults to false.
 * - @inputProps (TextInputProps, optional): Additional properties to be 
 *   passed to the underlying TextInput component, allowing for further 
 *   customization.
 * - @inputText (string): The current value of the text input, which is 
 *   controlled by the parent component.
 * - @onChangeText (function): A callback function that is called when the 
 *   text input value changes. It receives the new text as an argument.
 * 
 * Functionality:
 * - The component uses the `useTheme` hook from RNEUI to determine the 
 *   current theme (light or dark) and adjusts the background and placeholder 
 *   colors accordingly.
 * - The input field is styled with rounded corners, padding, and a specific 
 *   font family and size to ensure a consistent look and feel across the 
 *   application.
 * - The component renders a TextInput that responds to user input and 
 *   updates the value through the provided `onChangeText` callback.
 */
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
    borderRadius: 18,
    padding: 16,
    marginBottom: 10,
    fontFamily: 'poppinsMedium',
    fontSize: 16,
  },
});

export default ELearningTextInput;
