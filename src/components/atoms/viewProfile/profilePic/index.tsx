import Image from 'next/image';
import styled from './styled.module.scss';
import { ComponentProps } from 'react';


const ProfilePic = ({...props}: ComponentProps<"div">) => {
  return ( 
    <div 
      {...props}
      id={styled['profile-pic']}>
      <Image
        src="/profile-image.jpg"
        alt=''
        fill
      />
    </div>
  );
};

export default ProfilePic;
