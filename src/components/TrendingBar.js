import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import Card from './Card';
import RedSkull from 'redskulljs';

const api = new RedSkull();

const TrendingBar = props => {
  const [apiData, setApiData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await api.trending();
    setApiData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isLoading) {
      fetchData().then(() => {});
    }
  });

  const generateTrendingCards = () => {
    if (isLoading) {
      return [<Card key={0} />];
    }

    let cards = [];
    for (let result of apiData.results) {
      cards.push(
        <Card
          key={result.media_id}
          activeCardCallback={props.activeCardCallback}
          data={result}
        />,
      );
    }
    return cards;
  };

  // set the first result as the active card by default (so that it works even if none of the cards are focused)
  // if (!isLoading) {
  //   apiData && props.activeCardCallback(apiData.results[0]);
  // }
  // this is causing an error, so I've commented it until I figure out what's going wrong

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {apiData && generateTrendingCards()}
    </ScrollView>
  );
};

export default TrendingBar;
