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
      <div className={styled["apresentationTwoTeams"]}>
        <div
          className={styled["image-container"]}>
          <Image
            alt={`logo do time ${teams[0].teamName}`}
            src={teams[0].logo}
            sizes='50px'
            fill
            style={{ objectFit: "contain" }} />
        </div>
        <div
          className={styled["score-container"]}
        >
          <div>{teams[0].placar}</div>
          <CloseIcon className={styled["icon-versus"]} />
          <div>{teams[1].placar}</div>
        </div>
        <Link href={`#${teams[0].teamName}`}>
          <div
            className={styled["image-container"]}>
            <Image
              alt={`logo do time ${teams[1].teamName}`}
              src={teams[1].logo}
              sizes='50px'
              fill />
          </div>
        </Link>
      </div>
      :
      <div className={styled["apresentationMoreThanTwoTeams"]}>
        {
          teams.map((team, index) => {
            return (
              <Link href={`#${team.teamName}`} key={team.teamName}>
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
              </Link>

            )
          })
        }
      </div>

  );
} 