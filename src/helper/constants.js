import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const wp = val => widthPercentageToDP(val);

export const hp = val => heightPercentageToDP(val);

export const fontSize = size => RFValue(size);

export const statusBarHeight = getStatusBarHeight();

/**
 * Asyncstorage constants
 */
export const BookMarkedUsers = 'BookMarkedUsers';
