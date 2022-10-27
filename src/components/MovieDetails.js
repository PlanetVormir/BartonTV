import React, {useState} from 'react';
import {StyleSheet, View, DeviceEventEmitter} from 'react-native';
import Button from './Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    maxHeight: '40%',
  },
});

const MovieDetails = props => {
  const [activeServer, setActiveServer] = useState(Object.keys(props.data)[0]);

  DeviceEventEmitter.addListener('event.optionSelected', eventData => {
    setActiveServer(eventData.option);
    console.log('selected server ', eventData.option);
  });

  const serverCallback = () => {
    props.navigation.navigate('options', {
      data: Object.keys(props.data),
    });
  };

  const playCallback = () => {
    props.playCallback(props.data[activeServer]);
  };

  return (
    <View style={styles.container}>
      <Button pressCallback={playCallback} text="Play" defaultFocus />
      <Button pressCallback={serverCallback} text="Select Server" />
    </View>
  );
};

export default MovieDetails;
