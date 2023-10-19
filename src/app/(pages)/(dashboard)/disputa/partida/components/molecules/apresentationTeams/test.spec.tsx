import React from 'react';
import { render } from '@testing-library/react';
import { ApresentationTeams } from '.';

test('render component correctly', () => {
  render(<ApresentationTeams teams={[]} />);
});
