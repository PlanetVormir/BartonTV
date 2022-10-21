import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import PickerCard from './PickerCard';

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    paddingRight: 20,
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'column',
    overflow: 'visible',
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: '2%',
    color: 'lavender',
  },
});

const ServerPicker = props => {
  const renderServerCards = () => {
    let cards = [];

    for (let server in props.data) {
      cards.push(
        <PickerCard
          key={server}
          activeKey={server}
          activeCardPressCallback={props.activeCardPressCallback}
          activeCardCallback={props.activeCardCallback}
          text={server}
        />,
      );
    }
    return cards;
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.body}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <Text style={styles.heading}>Servers: </Text>
      {props.data && renderServerCards()}
    </ScrollView>
  );
};

export default ServerPicker;
