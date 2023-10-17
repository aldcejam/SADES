'use client';
import { useState } from 'react';
import styled from './styled.module.scss';
import { motion } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa';

type SecondarydataProps = {
  academicEmail: string;
  personalEmail: string;
};
const Secondarydata = ({
  academicEmail,
  personalEmail,
}: SecondarydataProps) => {
  const [templateMoreInformationsIsOpen, settemplateMoreInformationsIsOpen] =
    useState(false);

  const toggleTemplateMoreInformationsSituation = () => {
    settemplateMoreInformationsIsOpen(!templateMoreInformationsIsOpen);
  };
  return (
    <div className={styled['secondary-data']}>
      <motion.nav
        initial={false}
        animate={templateMoreInformationsIsOpen ? 'open' : 'closed'}
        className={styled['menu']}
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => toggleTemplateMoreInformationsSituation()}
        >
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <FaAngleDown className={styled['icon']} />
          </motion.div>
          <p className={styled['title-more-informations']}>E-mails</p>
        </motion.button>
        <motion.ul
          variants={{
            open: {
              display: 'block',
              clipPath: 'inset(0% 0% 0% 0% round 5px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              display: 'none',
              clipPath: 'inset(10% 50% 90% 50% round 5px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{
            pointerEvents: templateMoreInformationsIsOpen ? 'auto' : 'none',
          }}
        >
          <motion.li>Email academico: {academicEmail} </motion.li>
          <motion.li>Email pessoal: {personalEmail} </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Secondarydata;
