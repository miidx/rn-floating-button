import React from 'react';
import { TouchableOpacity, Platform, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const isIPhoneXSize = dim => dim.height === 812 || dim.width === 812;
const isIPhoneXrSize = dim => dim.height === 896 || dim.width === 896;
const dim = Dimensions.get('window');

const isIphoneX = Platform.OS === 'ios' && (isIPhoneXSize(dim) || isIPhoneXrSize(dim));

const styles = {
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
};

const FloatingButton = ({
  iconName, onPress, right, bottom, buttonColor, iconColor,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.floatingButton, { right, bottom, backgroundColor: buttonColor }]}
  >
    <Icon name={iconName} size={30} color={iconColor} />
  </TouchableOpacity>
);

export default FloatingButton;

FloatingButton.propTypes = {
  right: PropTypes.number,
  bottom: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string,
  buttonColor: PropTypes.string,
  iconColor: PropTypes.string,
};

FloatingButton.defaultProps = {
  right: 10,
  bottom: isIphoneX ? 80 : 40,
  iconName: 'plus',
  buttonColor: '#50ABF1',
  iconColor: '#fff',
};
