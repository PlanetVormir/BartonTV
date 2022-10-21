import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import SearchCard from './SearchCard';

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

  const activeCardCallback = data => {
    setSelectedId(data.media_id);
    props.activeCardCallback(data);
  };

  let i = 0;
  const renderItem = ({item}) => (
    <SearchCard
      key={item.media_id}
      data={item}
      activeCardCallback={activeCardCallback}
      defaultFocus={i === 0 ? (i++, true) : false}
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
