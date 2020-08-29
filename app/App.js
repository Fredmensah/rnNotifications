import React , { Component } from "react"
import { View, StyleSheet, TouchableOpacity, Text} from "react-native"
import { notificationManager } from "./services/NotificationManager"

export default class App extends Component{
    constructor(props) {
        super(props);
        this.localNotify = null;
    }

    componentDidMount() {
        this.localNotify = notificationManager;
        this.localNotify.configure();
    };

    onPressSendNotification = () => {
        this.localNotify.showNotification(
            1,
            "App Notification",
            "Local Notification",
            {},//data,
            {} //options
        )
    };

    render() {
      return (
          <View
              style={styles.container}
          >
              <TouchableOpacity
                style={styles.button}
                onPress={this.onPressSendNotification}
              >
                  <Text> Send notification</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.button}
                  //onPress={this.onPressSendNotification}
              >
                  <Text> Cancel notifications</Text>
              </TouchableOpacity>
          </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: 200,
      marginTop: 10
    }
});
