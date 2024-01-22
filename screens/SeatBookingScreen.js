import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform,  
  TouchableOpacity, ImageBackground } from 'react-native';
import { ArrowLeftIcon, ChevronLeftIcon, HomeIcon } from 'react-native-heroicons/outline';
import * as Device from 'expo-device';
import { useNavigation } from '@react-navigation/native'
import * as Notifications from 'expo-notifications';

import { styles, theme, BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING, } from '../theme';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function SeatBookingScreen() {
  const navigation = useNavigation();
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
            <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={()=> navigation.goBack()}>
                <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
            </TouchableOpacity>
      {/* <Text>Your expo push token: {expoPushToken}</Text> */}
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text> {notification && notification.request.content.title} </Text>
        <Text> {notification && notification.request.content.body}</Text>
        
        {notification && notification.request.content.data && notification.request.content.data.image ? (
    <ImageBackground
      // source={require('./assets/missYou.jpg')} 
      style={{ width: 200, height: 200, marginTop: 10 }}
    >
          </ImageBackground>
        ) : null}
        
      </View>
      <Button
        title="Click me"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
  
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Hello Sir ",
      body: 'This Page is Under Construction 😭',
      data: { data: '' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync({ projectId: 'your-project-id' })).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}