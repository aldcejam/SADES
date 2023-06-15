export type ScoreboardGameProps = {
  placar: Array<{
    course: string;
    logo: string;
    score: number;
  }>;
};
export type SpecificationGameProps = {
  date: Date;
  situation: string;
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
