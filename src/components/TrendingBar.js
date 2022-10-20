import React from 'react';
import {ScrollView} from 'react-native';
import Card from './Card';

const TrendingBar = props => {
  const generateTrendingCards = () => {
    if (props.data.results === undefined) {
      return [
        <Card key={0} />,
        <Card key={1} />,
        <Card key={2} />,
        <Card key={3} />,
      ];
    }

    let cards = [],
      i = 0;
    for (let result of props.data.results) {
      cards.push(
        <Card
          key={result.media_id}
          activeCardCallback={props.activeCardCallback}
          data={result}
          defaultFocus={i === 0}
        />,
      );
      i++;
    }
    return cards;
  };

  return (
    <ScrollView
      style={props.style}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {generateTrendingCards()}
    </ScrollView>
  );
};

export default TrendingBar;
