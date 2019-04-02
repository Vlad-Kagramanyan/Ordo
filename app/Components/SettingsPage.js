import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class SettingsPage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>settings Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default SettingsPage;