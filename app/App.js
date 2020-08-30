import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {notificationManager} from './services/NotificationManager';
import Reactotron from 'reactotron-react-native';
import('./services/reactotron/Reactotron').then(() => console.log('yeah'));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.localNotify = null;
    this.senderID = '852702009688';
  }

  componentDidMount() {
    this.localNotify = notificationManager;
    this.localNotify.configure(
      this.onRegister,
      this.onNotification,
      this.onOpenNotification,
      this.senderID,
    );
  }

  onRegister(token) {
    console.log('[Notification] Registered:', token);
  }

  onNotification(notify) {
    console.log('[Notification] onNotification: ', notify);
  }

  onOpenNotification(notify) {
    console.log('[Notification] onOpenNotification: ', notify);
    alert('Open Notification');
  }

  onPressSendNotification = () => {
    const options = {
      soundName: 'default',
      playSound: true,
      vibrate: true,
    };

    this.localNotify.showNotification(
      1,
      'App Notification',
      'Local Notification',
      {}, //data,
      options, //options
    );
  };

  onPressCancelNotification = () => {
    this.localNotify.cancelAllLocalNotification();
  };

  render() {
    Reactotron.log('Hello');

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPressSendNotification}>
          <Text> Send notification</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.onPressCancelNotification}>
          <Text> Cancel notifications</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 10,
  },
});
