const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  light: 'Avenir-Light',
  medium: 'Avenir-Medium'
};

const size = {
  h1: '38rem',
  h2: '34rem',
  h3: '30rem',
  h4: '26rem',
  h5: '20rem',
  h6: '19rem',
  input: '18rem',
  regular: '17rem',
  medium: '14rem',
  small: '12rem',
  tiny: '8.5rem'
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  }
};

export default {
  type,
  size,
  style
};
