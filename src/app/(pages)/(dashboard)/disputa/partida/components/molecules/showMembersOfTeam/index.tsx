import Image from 'next/image';
import { UserCard } from '../userCard';
import styled from './styled.module.scss';

interface ShowMembersOfTeamProps {
  members: {
    id: number,
    name: string,
    avatar: string
    number: number
  }[]
  logo: string
  teamName: string
}

export const ShowMembersOfTeam = ({ members, logo, teamName }: ShowMembersOfTeamProps) => {
  return (
    <div id={styled["showMembersOfTeam"]}>
      <div className={styled["title"]}>
        <h2>{teamName}</h2>
        <div className={styled["logo"]}>
          <Image src={logo} alt={`logo do time ${teamName}`} fill style={{ objectFit: "contain" }} />
        </div>
      </div>
      <ul>
        {members.map((member, index) => {
          return (
            <UserCard
              key={member.id}
              avatar={member.avatar}
              name={member.name}
              number={member.number}
            />
          )
        })}
      </ul>
    </div>
  );
} 