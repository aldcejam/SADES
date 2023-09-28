import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import styled from './styled.module.scss';
import Link from 'next/link';

interface ApresentationTeamsProps {
  teams: {
    teamName: string,
    placar: number,
    logo: string,
  }[];
}

export const ApresentationTeams = ({ teams }: ApresentationTeamsProps) => {
  return (
    teams.length == 2 ?
      <div id={styled["apresentationTwoTeams"]}>
        {
          teams.map((team, index) => {
            return (
              <div
                className={styled['container']}
                key={team.teamName}>
                <div className={styled["team"]}>
                  <a href={`#${team.teamName}`}>
                    <Image
                      alt={`logo do time ${team.teamName}`}
                      src={team.logo}
                      sizes='80px'
                      width={80}
                      height={80}
                      title={`${team.teamName}`}
                      className='object-contain -mb-4 mx-2'
                      />
                  </a>
                  <div className={styled["placar"]}>{team.placar}</div>
                  {index < teams.length - 1 ? <CloseIcon className={styled["icon-versus"]} /> : null}
                </div>
              </div>
            )
          })
        }
      </div>
      :
      <div id={styled["apresentationMoreThanTwoTeams"]}>
        {
          teams.map((team, index) => {
            return (
              <a href={`#${team.teamName}`}
                className={styled['container']}
                key={team.teamName}>
                <div
                  key={index}
                  className={styled["image-container"]}>
                  <Image
                    alt={`logo do time ${team.teamName}`}
                    src={team.logo}
                    sizes='50px'
                    fill />
                  <div className={styled["score"]}>
                    {team.placar}
                  </div>
                </div>
                {index < teams.length - 1 ? <CloseIcon className={styled["icon-versus"]} /> : null}
              </a>

            )
          })
        }
      </div>

  );
} 