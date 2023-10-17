'use client';
import styled from './styled.module.scss';
import { PageDisputaRegistrarConnection } from 'app/(pages)/(dashboard)/disputa/registrar/@core/connection';

const Pontuation = () => {
  const { disputeSettings } = PageDisputaRegistrarConnection();
  const { pontuationbyPositions } = disputeSettings;
  const { UpdatePontuationbyPositions } = pontuationbyPositions;

  return (
    <div className={styled['pontuation']}>
      {pontuationbyPositions.value.map((pontuation, position) => {
        return (
          <div key={position}>
            <p>{position + 1}º</p>
            <input
              type="number"
              value={pontuation}
              onChange={(e) => {
                const newPontuations = [...pontuationbyPositions.value];
                newPontuations[position] = Number(e.target.value);
                UpdatePontuationbyPositions(newPontuations);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Pontuation;
