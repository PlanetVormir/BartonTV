import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import PickerCard from './PickerCard';

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    paddingRight: 20,
    flexDirection: 'column',
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: '2%',
    color: 'lavender',
  },
});

const EpisodePicker = props => {
  const [activeTitle, setActiveTitle] = useState(props.episodeData[1].name);
  const activeCardCallback = episodeNum => {
    setActiveTitle(props.episodeData[episodeNum].name);
  };

  const activeCardPressCallback = episodeNum => {
    props.activeCardPressCallback(props.episodeData[episodeNum].source);
  };

  const renderEpisodeCards = () => {
    let cards = [];

    for (let episode in props.episodeData) {
      cards.push(
        <PickerCard
          key={episode}
          activeKey={episode}
          activeCardCallback={activeCardCallback}
          activeCardPressCallback={activeCardPressCallback}
          text={`Episode ${episode}`}
        />,
      );
    }
    return cards;
  };

  return (
    <View style={styles.body}>
      <Text style={styles.heading}>{`Episodes: ${activeTitle}`}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.episodeData && renderEpisodeCards()}
      </ScrollView>
    </View>
  );
};

export default EpisodePicker;
