/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useEffect, useState} from 'react';

export default function App() {
  const [location, setLoaction] = useState('');

  function handleRoute() {
    if (location) {
      let updateUrl = `https://shweyokelayexpress.com/${location}`;

      return updateUrl;
    }

    let defaultUrl = 'https://shweyokelayexpress.com/';
    return defaultUrl;
  }

  useEffect(() => {
    handleRoute();
  }, [location]);

  return (
    <>
      <SafeAreaView>
        <StatusBar hidden={false} />
      </SafeAreaView>

      <View style={{flex: 1}}>
        <WebView
          style={styles.webview}
          source={{uri: handleRoute()}}
          scalesPageToFit={true}
        />
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navBox} onPress={() => setLoaction('')}>
          <Icon name="home" size={35} color="#ff5f01" />
          <Text style={{color: '#ff5f01', fontWeight: 600}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navBox}
          onPress={() =>
            setLoaction('ticket/search?pickup=&destination=&date_of_journey=')
          }>
          <Icon name="ticket-alt" size={35} color="#ff5f01" />
          <Text style={{color: '#ff5f01', fontWeight: 600}}>Ticket</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navBox}
          onPress={() => setLoaction('faq')}>
          <Icon name="comments" size={35} color="#ff5f01" />
          <Text style={{color: '#ff5f01', fontWeight: 600}}>FAQ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navBox}
          onPress={() => setLoaction('login')}>
          <Icon name="user-alt" size={35} color="#ff5f01" />
          <Text style={{color: '#ff5f01', fontWeight: 600}}>Profile</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webview: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  navigation: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 50,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    position: 'absolute',
    paddingTop: 10,
    paddingBottom: 10,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '12%',
  },
  navBox: {
    display: 'flex',
  },
});
