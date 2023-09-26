import React from 'react';
import { render } from '@testing-library/react';
import { UserCard } from './';
 
test('render component correctly', () => {
  render(<UserCard />);
});