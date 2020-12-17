import { StyleSheet } from 'react-native';
import { themes } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.background,
  },
  header: {
    padding: 20,
    alignItems: 'center'
  },
  upload: {
    height: 200,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 1,
    borderColor: themes.colors.light,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  headerText: {
    fontFamily: themes.fonts.regular,
    fontSize: 22,
    color: themes.colors.light,
  },
  content: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontFamily: themes.fonts.regular,
    color: themes.colors.light,
  },
  input: {
    height: 45,
    borderRadius: 2,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#19294D',
    color: themes.colors.light,
    fontFamily: themes.fonts.regular,
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
  button: {
    height: 50,
    backgroundColor: themes.colors.primary,
    borderRadius: 2,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    fontFamily: themes.fonts.light,
    color: themes.colors.light,
  },
});