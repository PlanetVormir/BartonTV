import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import Background from '../components/Background';
import SearchResults from '../components/SearchResults';

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

const SearchScreen = props => {
  // const navigation = params.navigation;
  const route = props.route;

  // Fetch data from api
  const [apiData, setApiData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await props.api.search(route.params.query);
    setApiData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isLoading) {
      fetchData().then();
    }
  });

  const activeCardCallback = data => {
    props.navigation.navigate('content', {data: data});
  };

  return (
    <Background>
      <Text style={styles.heading}>
        {isLoading ? 'Loading...' : `Results for "${route.params.query}"`}
      </Text>
      <SearchResults data={apiData} activeCardCallback={activeCardCallback} />
    </Background>
  );
};

export default SearchScreen;
