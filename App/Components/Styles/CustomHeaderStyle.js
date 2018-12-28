import EStyleSheet from 'react-native-extended-stylesheet';
import { ApplicationStyles, Colors, Fonts } from '../../Themes';

export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  headerStyle: {
    borderBottomWidth: 0,
    elevation: 0
  },
  container: {
    flex: 1
  },
  bodyStyle: {
    flex: 1,
    alignItems: 'center'
  },
  leftButtonStyle: {
    marginLeft: '30rem',
    paddingRight: '20rem',
    paddingLeft: 0
  },
  logo: {
    height: '28rem',
    width: '37.3rem'
  },
  rightButtonStyle: {
    marginRight: '30rem',
    paddingLeft: '20rem',
    paddingRight: 0
  },
  titleText: {
    color: Colors.zumthor,
    fontFamily: Fonts.type.medium,
    fontSize: '17.3rem',
    letterSpacing: 0,
    lineHeight: '20rem'
  },
  rightButtonText: {
    color: Colors.zumthor,
    fontFamily: Fonts.type.medium,
    fontSize: '13.3rem',
    letterSpacing: 0
  }
});
