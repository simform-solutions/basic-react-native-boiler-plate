import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  smallMargin: '5rem',
  baseMargin: '10rem',
  doubleBaseMargin: '20rem',
  section: '25rem',
  doubleSection: '50rem',
  regularBorderWidth: '1rem',
  doubleBorderWidth: '2rem',
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? '64rem' : '54rem',
  icons: {
    tiny: '15rem',
    small: '20rem',
    medium: '30',
    large: '45rem',
    xl: '50rem'
  },
  images: {
    small: '20rem',
    medium: '40rem',
    large: '60rem',
    logo: '200rem'
  },
  buttonHeight: '40rem',
  buttonRadius: '20rem'
};

export default metrics;
