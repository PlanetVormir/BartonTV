import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Background from '../components/Background';
import Card from '../components/Card';
import MovieDetails from '../components/MovieDetails';
import SeriesDetails from '../components/SeriesDetails';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  other: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'skyblue',
  },
  detailsContainer: {
    flex: 1,
    padding: '4%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
  },
  metadata: {
    fontsize: 15,
    color: 'lightgray',
  },
  loadingText: {
    margin: '4%',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
});

const ContentScreen = props => {
  // const navigation = params.navigation;
  const route = props.route;
  const contentData = route.params.data;

  const contentType =
    contentData.type.toLowerCase() === 'movie' ? 'movie' : 'tv';

  // Fetch data from api
  const [apiData, setApiData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    const data =
      contentType === 'movie'
        ? await props.api.movie(contentData.media_id)
        : await props.api.series(await contentData.media_id);
    setApiData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isLoading) {
      fetchData().then();
    }
  });

  const playCallback = episodeID => {
    props.navigation.navigate('player', {episodeID: episodeID});
  };

  return (
    <Background>
      <View style={styles.container}>
        <Card data={contentData} vertical removeTouch />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>
            {isLoading ? 'Loading...' : contentData.title}
          </Text>
          <Text style={styles.metadata}>
            {isLoading
              ? ''
              : `Quality: ${contentData.quality} \t|\t Rating: ${contentData.rating}`}
          </Text>
          {!isLoading ? (
            contentType === 'movie' ? (
              <MovieDetails
                data={apiData}
                playCallback={playCallback}
                navigation={props.navigation}
              />
            ) : (
              <SeriesDetails
                data={apiData}
                metadata={contentData}
                playCallback={playCallback}
              />
            )
          ) : null}
        </View>
      </View>
    </Background>
  );
};

export default ContentScreen;
