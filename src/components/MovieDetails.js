import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import ServerPicker from './ServerPicker';

const styles = StyleSheet.create({
  container: {
    padding: '4%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
  },
  metadata: {
    fontSize: 15,
    color: 'lightgray',
  },
});

const MovieDetails = props => {
  const activeCardPressCallback = activeKey => {
    props.playCallback(props.data[activeKey]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{props.metadata.title}</Text>
      <Text
        style={
          styles.metadata
        }>{`Quality: ${props.metadata.quality} \t|\t Rating: ${props.metadata.rating}`}</Text>
      <ServerPicker
        data={props.data}
        activeCardPressCallback={activeCardPressCallback}
      />
    </ScrollView>
  );
};

export default MovieDetails;
