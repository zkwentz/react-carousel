import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from '../src/index';

storiesOf('React-carousel', module)
  .add('simple example', () => (
    <Carousel
      arrows
      infinite
    >
      <div
        style={{
          background: 'red',
        }}
      >
        test
      </div>
      <div
        style={{
          background: 'blue',
        }}
      >
        test
      </div>
      <div
        style={{
          background: 'green',
        }}
      >
        test
      </div>
    </Carousel>
  ));
