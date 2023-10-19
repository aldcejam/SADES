import React from 'react';
import { render } from '@testing-library/react';
import { UserCard } from '.';

test('render component correctly', () => {
  render(<UserCard
    name='aldcejam'
    avatar='/profile-image.jpg'
    number={2}
  />);
});
