import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import styled from './styled.module.scss';

interface ApresentationTeamsProps {
  teams: any[];
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
          <CloseIcon className={styled["icon-versus"]}/> 
          <div>{teams[1].placar}</div>
        </div>
        <div
          className={styled["image-container"]}>
          <Image
            alt={`logo do time ${teams[1].teamName}`}
            src={teams[1].logo}
            sizes='50px'
            fill />
        </div>
      </div>
      :
      <div className={styled["apresentationMoreThanTwoTeams"]}>

      </div>

  );
} 