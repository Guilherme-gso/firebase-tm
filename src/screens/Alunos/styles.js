import { StyleSheet } from 'react-native';
import { themes } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.background,
  },
  header: {
    padding: 20,
  },
  headerText: {
    fontFamily: themes.fonts.regular,
    fontSize: 22,
    color: themes.colors.light,
  },
  list:{
    flex: 1,
    paddingHorizontal: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#1E315C',
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: themes.fonts.medium,
    color: themes.colors.light,
  },
  info: {
    fontSize: 14,
    fontFamily: themes.fonts.light,
    color: themes.colors.light,
  },
});