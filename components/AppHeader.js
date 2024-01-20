// // AppHeader.js

// import React from 'react';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import CustomIcon from './CustomIcon';
// import {
//   BORDERRADIUS,
//   COLORS,
//   FONTFAMILY,
//   FONTSIZE,
//   SPACING,
// } from '../theme';

// const AppHeader = (props) => {
//   return (
//     <View style={localStyles.container}>
//       <TouchableOpacity style={localStyles.iconBG} onPress={() => props.action()}>
//         <CustomIcon name={props.name} style={localStyles.iconStyle} />
//       </TouchableOpacity>
//       <Text style={localStyles.headerText}>{props.header}</Text>
//       <View style={localStyles.emptyContainer}></View>
//     </View>
//   );
// };

// const localStyles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   iconStyle: {
//     color: COLORS.White,
//     fontSize: FONTSIZE.size_24,
//   },
//   headerText: {
//     flex: 1,
//     fontFamily: FONTFAMILY.poppins_medium,
//     fontSize: FONTSIZE.size_20,
//     textAlign: 'center',
//     color: COLORS.White,
//   },
//   emptyContainer: {
//     height: SPACING.space_20 * 2,
//     width: SPACING.space_20 * 2,
//   },
//   iconBG: {
//     height: SPACING.space_20 * 2,
//     width: SPACING.space_20 * 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: BORDERRADIUS.radius_20,
//     backgroundColor: COLORS.Orange,
//   },
// });

// export default AppHeader;
