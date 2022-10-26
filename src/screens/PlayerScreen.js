import React, {useState, useEffect} from 'react';
import VideoPlayer from 'react-native-media-console';

const PlayerScreen = props => {
  const route = props.route;
  const episodeID = route.params.episodeID;

  // Fetch data from api
  const [apiData, setApiData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await props.api.episode(episodeID);
    setApiData(data);
    setLoading(false);
    console.log(data.url);
  };

  useEffect(() => {
    if (isLoading) {
      fetchData().then();
    }
  });

  return !isLoading ? (
    <VideoPlayer
      source={{
        uri: apiData.url,
        type: 'm3u8',
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }}
      navigator={props.navigator}
      onError={err => console.log(err)}
    />
  ) : null;
};

export default PlayerScreen;
