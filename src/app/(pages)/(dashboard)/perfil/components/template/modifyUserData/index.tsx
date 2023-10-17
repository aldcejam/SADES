'use client';
import { useState } from 'react';
import ButtonToTemplateStateToggle from '../../atoms/buttonToTemplateStateToggle';
import Form from '../../organisms/ModifyUserData/form';
import styled from './styled.module.scss';
import { motion } from 'framer-motion';

const ModifyUserData = () => {
  const [isOpenComponentPersonaData, setIsOpenComponentPersonaData] =
    useState(false);
  const ToggleComponentPersonaData = () => {
    isOpenComponentPersonaData
      ? setIsOpenComponentPersonaData(false)
      : setIsOpenComponentPersonaData(true);
  };

  return (
    <motion.div
      className={styled['modify-user-data']}
      layout
      data-isopen={isOpenComponentPersonaData}
    >
      <ButtonToTemplateStateToggle
        title="Modifique suas informações"
        state={isOpenComponentPersonaData}
        ToggleState={ToggleComponentPersonaData}
      />
      <Form title="Modifique suas informações" />
    </motion.div>
  );
};

export default ModifyUserData;
