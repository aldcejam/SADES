import { SituationsProps } from '../../../../@core/entities/IDataForRegistrarDisputa';
import styled from './styled.module.scss';

type SituationButtonsProps = {
  Submit: () => void;
  value: SituationsProps;
  isSelected: boolean;
};
const SituationButtons = ({
  Submit,
  value,
  isSelected,
}: SituationButtonsProps) => {
  return (
    <div
      className={styled['situations-button']}
      onClick={() => Submit()}
      data-is-active={isSelected}
    >
      <div className={styled['content']}>
        <div className={styled['ball']} data-ball-situation={value} />
        <p>{value}</p>
      </div>
    </div>
  );
};

export default SituationButtons;
