import { GameSituationProps } from "components/atoms/gameSituation";

export type ScoreboardGameProps = {
  placar: Array<{
    course: string;
    logo: string;
    score: number;
  }>;
};
export type SpecificationGameProps = GameSituationProps & {
  date: Date; 
};

export type GameProps = {
  id: number;
  placar: Array<{
    course: string;
    logo: string;
    score: number;
  }>;
  specification: SpecificationGameProps;
};
