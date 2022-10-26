import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Card from './Card';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    overflow: 'visible',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
});

const ResultView = props => {
  const [selectedId, setSelectedId] = useState(null);

  const activeCardPressCallback = data => {
    setSelectedId(data.media_id);
    props.activeCardCallback(data);
  };

  let i = 0;
  const renderItem = ({item}) => (
    <Card
      key={item.media_id}
      data={item}
      activeCardPressCallback={activeCardPressCallback}
      defaultFocus={i === 0 ? (i++, true) : false}
      vertical={true}
    />
  );

  return (
    // <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    //   {generateResultCards()}
    // </ScrollView>
    <FlatList
      style={styles.body}
      contentContainerStyle={styles.container}
      data={props.data.results}
      renderItem={renderItem}
      keyExtractor={item => item.media_id}
      extraData={selectedId}
      numColumns={4}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ResultView;
