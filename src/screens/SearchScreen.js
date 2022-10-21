import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchResults from '../components/SearchResults';
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
    padding: 40,
    flexDirection: 'column',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
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

  return (
    <View style={styles.body}>
      <LinearGradient
        style={styles.background}
        colors={['rgba(17,26,33, 0.6)', 'rgb(17,26,33)']}>
        <View style={styles.container}>
          <Text style={styles.heading}>
            Results for {`"${route.params.query}"`}
          </Text>
          <SearchResults data={apiData} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default SearchScreen;
