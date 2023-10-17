import Content from 'components/organisms/viewProfile/content';
import { memo } from 'react';
import styled from './styled.module.scss';
import { BgViewProfile } from './vectors/bgViewProfile';

type TypesViewProfileComponent = {
  screen: 'profileUser' | 'viewFriend';
};

const ViewProfileComponent = ({ screen }: TypesViewProfileComponent) => {
  return (
    <div className={styled['view-profile']}>
      <BgViewProfile />
      <Content />
    </div>
  );
};

export const ViewProfile = memo(ViewProfileComponent);
