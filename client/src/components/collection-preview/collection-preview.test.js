import { shallow } from 'enzyme';
import React from 'react';
import CollectionPreview from './collection-preview.component';

it('expect to render CollectionPreview component', () => {
  const mockProps = {
    title: 'hats',
    items: [], 
    history: {}, 
    match: {}, 
    routeName: '/hats'
  }
  expect(shallow(<CollectionPreview {...mockProps}/>)).toMatchSnapshot();
})
