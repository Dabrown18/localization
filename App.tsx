import React from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import localized from './app/localize/getLocal';

const SettingsOption = ({text}) => {
  return (
    <View style={styles.settingsOptionContainer}>
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
};

const Divider = () => {
  return <View style={styles.divider} />;
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal: 15}}>
        <Text style={styles.header}>{localized('home_page.settings')}</Text>
        <SettingsOption text={localized('home_page.update_name')} />
        <Divider />
        <SettingsOption text={localized('home_page.update_address')} />
        <Divider />
        <SettingsOption text={localized('home_page.social_media')} />
        <Divider />
        <SettingsOption text={localized('home_page.location')} />
        <Divider />
        <SettingsOption text={localized('home_page.first_name')} />
        <Divider />
        <SettingsOption text={localized('home_page.last_name')} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  settingsOptionContainer: {
    width: '100%',
    padding: 20
  },
  optionText: {
    fontSize: 16,
  },
  divider: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'grey',
  }
});

export default App;
