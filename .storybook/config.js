import {  addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import brainhub from './config_brainhub';

addDecorator(
  withOptions(brainhub)
);

function loadStories() {
  require('../stories/index.jsx');
}

configure(loadStories, module);