import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, Platform, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, ChevronLeftIcon, HomeIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeartIcon} from 'react-native-heroicons/solid';
// import AppHeader from '../components/AppHeader';
import SettingComponent from '../components/SettingComponent';


import { styles, theme, BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING, } from '../theme';


const ios = Platform.OS == 'ios';
const topMargin = ios? '':' mt-3';
var {width, height} = Dimensions.get('window');

export default function UserProfileScreen() {
  const navigation = useNavigation();

    const handleHomeClick = () => {
    // Navigate to the Home screen
    navigation.navigate('Home');
    }

  return (
    <View className="flex-1 bg-neutral-800">
        <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 "+topMargin}>
            <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={()=> navigation.goBack()}>
                <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleHomeClick}>
                <HomeIcon size="35" strokeWidth={2} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
        <View style={localStyles.container}>
      <StatusBar hidden />
      {/* <View style={localStyles.appHeaderContainer}>
         <AppHeader
          name="close"
          header={'My Profile'}
          // action={() => navigation.goBack()}
        /> 
      </View> */}

      <View style={localStyles.profileContainer}>
        <Image
          source={require('../assets/images/castImage1.png')}
          style={localStyles.avatarImage}
        />
        <Text style={localStyles.avatarText}>John Doe</Text>
      </View>

      <View style={localStyles.profileContainer}>
        <SettingComponent
          icon="user"
          heading="Account"
          subheading="Edit Profile"
          subtitle="Change Password"
        />
        <SettingComponent
          icon="setting"
          heading="Settings"
          subheading="Theme"
          subtitle="Permissions"
        />
        <SettingComponent
          icon="dollar"
          heading="Offers & Refferrals"
          subheading="Offer"
          subtitle="Refferrals"
        />
        <SettingComponent
          icon="info"
          heading="About"
          subheading="About Movies"
          subtitle="more"
        />
      </View>
    </View>
    </View>
    
  );
}

const localStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
  profileContainer: {
    alignItems: 'center',
    padding: SPACING.space_36,
  },
  avatarImage: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  avatarText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    marginTop: SPACING.space_16,
    color: COLORS.White,
  },
});