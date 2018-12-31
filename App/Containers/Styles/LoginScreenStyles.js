import EStyleSheet from 'react-native-extended-stylesheet';
import {
  ApplicationStyles,
  Colors,
  Fonts,
  Metrics
} from '../../Themes';
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textRegular: {
    ...Fonts.style.h2,
    textAlign: 'center'
  },
  loginButton: {
    minWidth: '50rem',
    marginTop: Metrics.section,
    alignSelf: 'center'
  },
  loginButtonText: {
    ...Fonts.style.normal,
    color: Colors.white,
    paddingHorizontal: Metrics.baseMargin
  }
});
