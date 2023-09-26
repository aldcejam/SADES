import Image from 'next/image';
import styled from './styled.module.scss';
import { AiOutlineExpandAlt } from 'react-icons/ai';

interface UserCardProps {
  number: number;
  name: string;
  avatar: string;
}

export const UserCard = ({ avatar, name, number }: UserCardProps) => {
  return (
    <li id={styled["userCard"]}> 
      <button>
        <div className={styled["container"]}>
          <div className={styled["avatar"]}>
            <Image src={avatar} alt={`avatar de ${name}`} fill style={{ objectFit: "cover" }} />
          </div>
          <p className={styled["number"]}>{number}</p>
          <p className={styled["name"]}>{name}</p>
        </div>
        <div className={styled["icon-expand"]}>
          <AiOutlineExpandAlt />
        </div>
      </button>
    </li>
  );
} 