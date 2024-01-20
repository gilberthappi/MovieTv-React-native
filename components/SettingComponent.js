// SettingComponent.js

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme';
// import CustomIcon from './CustomIcon';

const SettingComponent = (props) => {
  return (
    <View style={localStyles.container}>
      {/* <View>
        <CustomIcon name={props.icon} style={localStyles.iconStyle} />
      </View> */}
      <View style={localStyles.settingContainer}>
        <Text style={localStyles.title}>{props.heading}</Text>
        <Text style={localStyles.subtitle}>{props.subheading}</Text>
        <Text style={localStyles.subtitle}>{props.subtitle}</Text>
      </View>
      {/* <View style={localStyles.iconBG}>
        <CustomIcon name={'arrow-right'} style={localStyles.iconStyle} />
      </View> */}
    </View>
  );
};

export default SettingComponent;

const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.space_20,
  },
  settingContainer: {
    flex: 1,
  },
  iconStyle: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_24,
    paddingHorizontal: SPACING.space_20,
  },
  iconBG: {
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.White,
  },
  subtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.WhiteRGBA15,
  },
});
