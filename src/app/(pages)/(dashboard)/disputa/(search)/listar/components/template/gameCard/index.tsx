import CurverBorderButton from 'app/(pages)/(dashboard)/disputa/(search)/listar/illustrations/CurverBorder';
import GameSpecification from '../../molecules/gameSpecification';
import TeamVersus from '../../organisms/teamVersus';
import styled from './styled.module.scss';
import { GameProps } from '../../../@core/api/query/GameProps';
import { ComponentProps } from 'react';

interface GameCardProps extends ComponentProps<'div'> {
  game: GameProps;
}
const GameCard = ({ game, ...props }: GameCardProps) => {
  return (
    <div {...props} id={styled['game-card']}>
      <CurverBorderButton className="scale-x-[-1] " />
      <CurverBorderButton className="right-0" />
      <div className={styled['game-score']}>
        <span className={styled['team-versus']}>
          <TeamVersus placar={game.placar} />
        </span>
        <GameSpecification game={game} />
      </div>
    </div>
  );
};
export default GameCard;
