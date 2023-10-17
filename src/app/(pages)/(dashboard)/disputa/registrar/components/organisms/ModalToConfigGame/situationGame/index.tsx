'use client';
import SituationsButton from 'app/(pages)/(dashboard)/disputa/registrar/components/molecules/ModalToConfigGame/situationButtons';
import styled from './styled.module.scss';
import { PageDisputaRegistrarConnection } from '../../../../@core/connection';
import { ComponentProps } from 'react';

interface SituationGameProps extends ComponentProps<'div'> {}

const SituationGame = ({ ...props }: SituationGameProps) => {
  const { disputeSettings } = PageDisputaRegistrarConnection();
  const { situation } = disputeSettings;
  const UpdateSituation = situation.Update;
  const situationSelected = situation.value;
  const situationsOptions = situation.options;

  return (
    <div {...props} id={styled['situation-game']}>
      <p className={styled['title']}>Situação do jogo:</p>
      <span className={styled['buttons']}>
        {situationsOptions.map((situation) => {
          return (
            <SituationsButton
              key={situation}
              value={situation}
              Submit={() => UpdateSituation(situation)}
              isSelected={situationSelected == situation}
            />
          );
        })}
      </span>
    </div>
  );
};

export default SituationGame;
