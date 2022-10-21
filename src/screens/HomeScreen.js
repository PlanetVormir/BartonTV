import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import TrendingBar from '../components/TrendingBar';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 40,
  },
  heading: {
    flex: 0,
    fontWeight: 'bold',
    fontSize: 35,
    margin: 40,
    marginLeft: 0,
    marginBottom: 20,
    color: 'white',
  },
  metadata: {
    color: 'slategray',
    marginBottom: 20,
  },
  trendingBar: {
    height: 0,
    overflow: 'visible',
  },
});

const HomeScreen = props => {
  // Fetch data from api
  const [apiData, setApiData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await props.api.trending();
    setApiData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isLoading) {
      fetchData().then();
    }
  });

  // active element handlers
  const [activeElement, setActiveElement] = useState({});

  const activeCardCallback = data => {
    setActiveElement(data);
  };

  const searchCallback = query => {
    if (query.length === 0) {
      return;
    }
    props.navigation.navigate('search', {query: query});
  };

  return (
    <View style={styles.body}>
      <LinearGradient
        style={styles.background}
        colors={['rgba(17,26,33, 0.6)', 'rgb(17,26,33)']}>
        <View style={styles.container}>
          <Text style={styles.heading}>
            {activeElement.title ? activeElement.title : 'Loading...'}
          </Text>
          <Text style={styles.metadata}>
            {activeElement.title
              ? `${String(activeElement.type).toUpperCase()} \t|\t ${
                  activeElement.quality
                }\t`
              : ''}
          </Text>
          <SearchBar searchCallback={searchCallback} />
          <TrendingBar
            data={apiData}
            style={styles.trendingBar}
            activeCardCallback={activeCardCallback}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
