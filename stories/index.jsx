import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel, { Dots } from '../src/index';
import { childrenDiv } from './mockup.jsx';

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
      animationSpeed={500}
      slidesPerPage={3}
    >
      {childrenDiv.map(element => element)}
    </Carousel>
  ));
