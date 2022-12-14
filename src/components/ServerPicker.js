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
    <View style={styles.body}>
      <Text style={styles.heading}>Servers: </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.data && renderServerCards()}
      </ScrollView>
    </View>
  );
};

export default ServerPicker;
