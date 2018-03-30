import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-router';
import Post from '../components/Post.js';

storiesOf('Post', module)
  .addDecorator(StoryRouter())
  .add('post', () => (
    <Post />
  ));

