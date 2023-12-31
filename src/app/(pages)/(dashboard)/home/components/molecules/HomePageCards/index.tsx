'use client';
import Link from 'next/link';
import CardIllustration from '../../atoms/cardIllustration';
import styled from './styled.module.scss';
import { ComponentProps } from 'react';

type TypesHomePageCard = ComponentProps<'div'> & {
  illustration: any;
  title:
    | 'equipes por curso'
    | 'jogos esportivos'
    | 'jogos do seu curso'
    | 'recordes desta edição'
    | 'recordes de todos os anos'
    | 'publicações sobre a semadec'
    | 'Edições da semadec';
  link: string;
};

const HomePageCard = ({
  illustration,
  title,
  link,
  ...props
}: TypesHomePageCard) => {
  return (
    <div {...props} className={`${styled['home-page-cards']} card`}>
      <Link href={link}>
        <CardIllustration illustration={illustration} />
        <div className={styled.title}>
          <h2>{title}</h2>
          <h3>clique para entrar</h3>
        </div>
      </Link>
    </div>
  );
};

export default HomePageCard;
