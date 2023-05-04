import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Link } from '@mui/material';

const NewsDisplay = () => {
  const [newsData, setNewsData] = useState(null);
  const APIKEY = 's0JZSOq3PP5yLsMVgoxJc7srgN6hTRP2';

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${APIKEY}`);
    const data = await response.json();
    const topStories = data.results.slice(0, 5);
    setNewsData(topStories);
  };

  if (!newsData) return null;

  return (
    <Box mt={4}>
      <Typography variant="h4" component="h2" gutterBottom>
        Top News Stories
      </Typography>
      <Grid container spacing={2}>
        {newsData.map((story, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={story.title}
                height="200"
                image={story.multimedia.find((media) => media.format === 'threeByTwoSmallAt2X').url}
                title={story.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {story.title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  By {story.byline.replace('By ', '')}
                </Typography>
                <Typography variant="body1" component="p">
                  {story.abstract}
                </Typography>
                <Link href={story.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsDisplay;
