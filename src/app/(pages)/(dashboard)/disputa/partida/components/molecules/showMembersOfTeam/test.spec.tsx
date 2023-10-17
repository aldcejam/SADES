import React from 'react';
import { render } from '@testing-library/react';
import { ShowMembersOfTeam } from '.';

test('render component correctly', () => {
  render(
    <ShowMembersOfTeam
      logo="/testes/time1.png"
      teamName="informática"
      members={[]}
    />,
  );
});
