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
  welcomeButton: {
    alignSelf: 'center'
  },
  welcomeButtonText: {
    ...Fonts.style.normal,
    color: Colors.white,
    paddingHorizontal: Metrics.baseMargin
  }
});
