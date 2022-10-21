import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Background from '../components/Background';
import SearchBar from '../components/SearchBar';
import TrendingBar from '../components/TrendingBar';

const styles = StyleSheet.create({
  heading: {
    flex: 0,
    fontWeight: 'bold',
    fontSize: 35,
    margin: '2%',
    marginLeft: 0,
    color: 'white',
  },
  metadata: {
    color: 'slategray',
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
    <Background>
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
    </Background>
  );
};

export default HomeScreen;
