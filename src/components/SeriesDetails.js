import React, {useState} from 'react';
import {StyleSheet, View, DeviceEventEmitter} from 'react-native';
import Button from './Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

const SeriesDetails = props => {
  const [activeServer, setActiveServer] = useState(
    Object.keys(props.data.servers)[0],
  );
  const [activeSeason, setActiveSeason] = useState(1);
  const [activeEpisode, setActiveEpisode] = useState(1);

  DeviceEventEmitter.addListener('event.serverSelected', eventData => {
    console.log('received server', eventData.option);
    setActiveServer(eventData.option);
  });

  DeviceEventEmitter.addListener('event.seasonSelected', eventData => {
    setActiveSeason(eventData.option);
  });

  DeviceEventEmitter.addListener('event.episodeSelected', eventData => {
    setActiveEpisode(eventData.option);
  });

  const serverCallback = () => {
    props.navigation.navigate('options', {
      data: Object.keys(props.data.servers),
      selectEventName: 'event.serverSelected',
    });
  };

  const seasonCallback = () => {
    props.navigation.navigate('options', {
      data: Object.keys(props.data.episodes),
      selectEventName: 'event.seasonSelected',
    });
  };

  const episodeCallback = () => {
    props.navigation.navigate('options', {
      data: Object.keys(props.data.episodes[activeSeason]),
      selectEventName: 'event.episodeSelected',
    });
  };

  const playCallback = () => {
    const server = props.data.servers[activeServer];
    props.playCallback(
      props.data.episodes[activeSeason][activeEpisode].sources[server],
    );
  };

  return (
    <View style={styles.container}>
      <Button pressCallback={playCallback} text="Play" defaultFocus />
      <Button pressCallback={serverCallback} text="Select Server" />
      <Button pressCallback={seasonCallback} text="Select Season" />
      <Button pressCallback={episodeCallback} text="Select Episode" />
    </View>
  );
};

export default SeriesDetails;
