import { BasketballIllustration } from '../../../illustrations/basketball';
import { FutbolIllustration } from '../../../illustrations/futbol';
import { NatacaoIllustration } from '../../../illustrations/natacao';
import { PingPongIllustration } from '../../../illustrations/pingPong';
import { XadrezIllustration } from '../../../illustrations/xadrez';

export type availableSportsIllustrationProps =
  | 'futbol'
  | 'basquete'
  | 'natacao'
  | 'xadrez'
  | 'ping_pong';

export const GetIllustration = (
  sportName: availableSportsIllustrationProps,
) => {
  switch (sportName) {
    case 'basquete':
      return <BasketballIllustration className="card-basquete__illustration" />;
    case 'futbol':
      return <FutbolIllustration className="card-futbol__illustration" />;
    case 'natacao':
      return <NatacaoIllustration className="card-natacao__illustration" />;
    case 'xadrez':
      return <XadrezIllustration className="card-xadrez__illustration" />;
    case 'ping_pong':
      return <PingPongIllustration className="card-ping_pong__illustration" />;
  }
};
