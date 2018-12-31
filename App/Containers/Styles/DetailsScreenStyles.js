import EStyleSheet from 'react-native-extended-stylesheet';
import {
  ApplicationStyles,
  Colors,
  Fonts,
  Metrics
} from '../../Themes';
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  textRegular: {
    ...Fonts.style.h1,
    color: Colors.fire,
    textAlign: 'center'
  },
  logoutButton: {
    marginTop: Metrics.section,
    alignSelf: 'center'
  },
  logoutButtonText: {
    paddingHorizontal: Metrics.doubleBaseMargin,
    color: Colors.white
  }
});
