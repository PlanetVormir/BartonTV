import React from 'react';
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

const SeasonPicker = props => {
  const renderSeasonCards = () => {
    let cards = [];

    for (let season of props.seasons) {
      cards.push(
        <PickerCard
          key={season}
          activeKey={season}
          activeCardCallback={props.activeCardCallback}
          text={`Season ${season}`}
        />,
      );
    }
    return cards;
  };

  return (
    <View style={styles.body}>
      <Text style={styles.heading}>Seasons: </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.seasons && renderSeasonCards()}
      </ScrollView>
    </View>
  );
};

export default SeasonPicker;
