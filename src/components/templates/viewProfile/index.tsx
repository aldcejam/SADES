import Content from 'components/organisms/viewProfile/content';
import { memo } from 'react';
import styled from './styled.module.scss';
import { BgViewProfile } from './vectors/bgViewProfile';

export type UserType = {
  screen: 'user' | 'viewer';
};

const ViewProfileComponent = ({ screen }: UserType) => {
  return (
    <div className={styled['view-profile']}>
      <BgViewProfile />
      <Content />
    </div>
  );
};

export const ViewProfile = memo(ViewProfileComponent);
