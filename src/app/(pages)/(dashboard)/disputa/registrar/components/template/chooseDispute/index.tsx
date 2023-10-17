'use client';
import SubmitButton from 'components/atoms/submit';
import AvailableSports from '../../organisms/availableSports';
import styled from './styled.module.scss';
import AvailableCourses from '../../organisms/availableCourses';
import { usePageRegistrarDisputa } from '../../../context';

const ChooseDispute = () => {
  const { modalSelectCategories } = usePageRegistrarDisputa();

  return (
    <div className={styled['choose-dispute']}>
      <AvailableCourses />
      <AvailableSports />
      <SubmitButton
        Submit={modalSelectCategories.Toggle}
        value="Selecionar categorias"
      />
    </div>
  );
};

export default ChooseDispute;
