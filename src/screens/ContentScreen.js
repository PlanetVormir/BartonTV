import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Background from '../components/Background';
import SearchCard from '../components/SearchCard';
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
    console.log(episodeID, 'episodeID requesting to be played');
  };

  return (
    <Background>
      <View style={styles.container}>
        <SearchCard data={contentData} />
        {!isLoading ? (
          contentType === 'movie' ? (
            <MovieDetails
              data={apiData}
              metadata={contentData}
              playCallback={playCallback}
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
    </Background>
  );
};

export default ContentScreen;
