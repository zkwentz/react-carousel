import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel, { Dots } from '../src/index';
import { childrenDiv } from './mockup.jsx';
import App from '../src/App';

storiesOf('React-carousel', module)
  .add('Default usage', () =>
    <Carousel>
      {childrenDiv.map(element => element)}
    </Carousel>)
  .add('Default arrows', () => (
    <Carousel
      arrows
    >
      {childrenDiv.map(element => element)}
    </Carousel>
  ))
  .add('Infinite', () => (
    <Carousel
      arrows
      infinite
      slidesPerPage={2}
    >
      {childrenDiv.map(element => element)}
    </Carousel>
  ));
