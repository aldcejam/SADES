import React from 'react';
import styled from './styled.module.scss';
import { ApresentationTeams } from '../../molecules/apresentationTeams';
import { ShowMembersOfTeams } from '../../organisms/showMembersOfTeams';
import GameSituation from 'components/atoms/gameSituation';

interface PartidaContentProps {
  display: 'page' | 'modal';
}

const simulation = {
  situation: {
    data: '2021-09-01',
    status: 'andamento',
  },
  teams: [
    {
      teamName: 'informática',
      placar: 2,
      logo: '/testes/time1.png',
      members: [
        {
          id: 1,
          name: 'lucas',
          avatar: '/profile-image.jpg',
          number: 12,
        },
        {
          id: 2,
          name: 'joao',
          avatar: '/profile-image.jpg',
          number: 13,
        },
        {
          id: 3,
          name: 'maria',
          avatar: '/profile-image.jpg',
          number: 7,
        },
        {
          id: 4,
          name: 'jose',
          avatar: '/profile-image.jpg',
          number: 9,
        },
      ],
    },
    {
      teamName: 'eletrotécnica',
      placar: 3,
      logo: '/testes/time2.png',
      members: [
        {
          id: 5,
          name: 'pedro',
          avatar: '/profile-image.jpg',
          number: 10,
        },
        {
          id: 6,
          name: 'julia',
          avatar: '/profile-image.jpg',
          number: 1,
        },
        {
          id: 7,
          name: 'marcos',
          avatar: '/profile-image.jpg',
          number: 5,
        },
        {
          id: 8,
          name: 'josefa',
          avatar: '/profile-image.jpg',
          number: 8,
        },
      ],
    },
    /* {
      teamName: "energias",
      placar: 3,
      logo: "/testes/time3.png",
      members: [
        {
          id: 5,
          name: "pedro",
          avatar: "/profile-image.jpg",
          number: 10
        },
        {
          id: 6,
          name: "julia",
          avatar: "/profile-image.jpg",
          number: 1
        },
        {
          id: 7,
          name: "marcos",
          avatar: "/profile-image.jpg",
          number: 5
        },
        {
          id: 8,
          name: "josefa",
          avatar: "/profile-image.jpg",
          number: 8
        }
      ]
    },
    {
      teamName: "administração",
      placar: 3,
      logo: "/testes/time4.png",
      members: [
        {
          id: 5,
          name: "pedro",
          avatar: "/profile-image.jpg",
          number: 10
        },
        {
          id: 6,
          name: "julia",
          avatar: "/profile-image.jpg",
          number: 1
        },
        {
          id: 7,
          name: "marcos",
          avatar: "/profile-image.jpg",
          number: 5
        },
        {
          id: 8,
          name: "josefa",
          avatar: "/profile-image.jpg",
          number: 8
        }
      ]
    },
    {
      teamName: "eletrotécnica",
      placar: 3,
      logo: "/testes/time2.png",
      members: [
        {
          id: 5,
          name: "pedro",
          avatar: "/profile-image.jpg",
          number: 10
        },
        {
          id: 6,
          name: "julia",
          avatar: "/profile-image.jpg",
          number: 1
        },
        {
          id: 7,
          name: "marcos",
          avatar: "/profile-image.jpg",
          number: 5
        },
        {
          id: 8,
          name: "josefa",
          avatar: "/profile-image.jpg",
          number: 8
        }
      ]
    },
    {
      teamName: "eletrotécnica",
      placar: 3,
      logo: "/testes/time2.png",
      members: [
        {
          id: 5,
          name: "pedro",
          avatar: "/profile-image.jpg",
          number: 10
        },
        {
          id: 6,
          name: "julia",
          avatar: "/profile-image.jpg",
          number: 1
        },
        {
          id: 7,
          name: "marcos",
          avatar: "/profile-image.jpg",
          number: 5
        },
        {
          id: 8,
          name: "josefa",
          avatar: "/profile-image.jpg",
          number: 8
        }
      ]
    } */
  ],
};

export const PartidaContent = ({ display }: PartidaContentProps) => {
  return (
    <div id={styled['partidaContent']}>
      <ApresentationTeams teams={simulation.teams} />
      <ShowMembersOfTeams.root>
        {simulation.teams.map((team) => {
          return (
            <ShowMembersOfTeams.showMembersOfTeam
              key={team.teamName}
              teamName={team.teamName}
              logo={team.logo}
              members={team.members}
            />
          );
        })}
      </ShowMembersOfTeams.root>
      <GameSituation
        className={styled['game-situation']}
        situation="andamento"
        size={display == 'page' ? 'large' : 'medium'}
      />
    </div>
  );
};
