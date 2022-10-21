import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import ServerPicker from './ServerPicker';
import SeasonPicker from './SeasonPicker';
import EpisodePicker from './EpisodePicker';
import {act} from 'react-test-renderer';

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

const SeriesDetails = props => {
  const generateActiveSeasonData = (activeServer, activeSeason) => {
    const data = {};
    for (let episodeNum in props.data.episodes[activeSeason]) {
      const episodeData = props.data.episodes[activeSeason][episodeNum];
      const activeServerID = props.data.servers[activeServer];
      episodeData.source = episodeData.sources[activeServerID];
      data[episodeNum] = episodeData;
    }
    return data;
  };

  const [activeServer, setActiveServer] = useState(
    Object.keys(props.data.servers)[0],
  );
  const [activeSeason, setActiveSeason] = useState(1);

  const [activeSeasonEpisodes, setActiveSeasonEpisodes] = useState(
    generateActiveSeasonData(activeServer, activeSeason),
  );

  const activeServerCallback = serverName => {
    setActiveServer(serverName);
  };
  const activeSeasonCallback = seasonNumber => {
    setActiveSeason(seasonNumber);
    setActiveSeasonEpisodes(
      generateActiveSeasonData(activeServer, seasonNumber),
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{props.metadata.title}</Text>
      <Text
        style={
          styles.metadata
        }>{`Quality: ${props.metadata.quality} \t|\t Rating: ${props.metadata.rating}`}</Text>
      <ServerPicker
        data={props.data.servers}
        activeCardCallback={activeServerCallback}
      />
      <SeasonPicker
        seasons={Object.keys(props.data.episodes)}
        activeCardCallback={activeSeasonCallback}
      />
      <EpisodePicker
        episodeData={activeSeasonEpisodes}
        activeCardPressCallback={props.playCallback}
      />
    </ScrollView>
  );
};

export default SeriesDetails;
