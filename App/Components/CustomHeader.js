import React from 'react';
import {
  Button, Header, Body, Left, Right, Title, Text, Icon
} from 'native-base';
import PropTypes from 'prop-types';
import styles from './Styles/CustomHeaderStyle';

const CustomHeader = (props) => {
  const {
    leftButtonIcon,
    leftButtonPress,
    customLeftStyle,
    customHeaderStyle,
    title,
    onLayout,
    rightButtonText,
    rightButtonPress,
    customRightStyle
  } = props;
  return (
    <Header style={[styles.headerStyle, customHeaderStyle]} onLayout={onLayout}>
      {leftButtonIcon && <Left style={styles.container}>
        <Button
          transparent
          style={[styles.leftButtonStyle, customLeftStyle]}
          onPress={leftButtonPress}
        >
          <Icon
            name={leftButtonIcon === 'back' ? 'ios-arrow-round-back' : leftButtonIcon}
            size={40}
          />
        </Button>
      </Left>}
      {!leftButtonIcon && <Left style={styles.container} />}
      <Body style={styles.bodyStyle}>
        <Title style={styles.titleText}>{title}</Title>
      </Body>
      {rightButtonText && <Right style={styles.container}>
        <Button
          transparent style={[styles.rightButtonStyle, customRightStyle]}
          onPress={rightButtonPress}
        >
          <Text
            style={styles.rightButtonText}
          >
            {rightButtonText}
          </Text>
        </Button>
      </Right>}
      {!rightButtonText && <Right style={styles.container} />}
    </Header>
  );
};

CustomHeader.propTypes = {
  leftButtonIcon: PropTypes.string,
  leftButtonPress: PropTypes.func,
  customLeftStyle: PropTypes.object,
  title: PropTypes.string,
  customHeaderStyle: PropTypes.object,
  rightButtonText: PropTypes.string,
  rightButtonPress: PropTypes.func,
  rightButtonStyle: PropTypes.object,
  onLayout: PropTypes.func,
  customRightStyle: PropTypes.object
};

export default CustomHeader;
