import styled from './styled.module.scss';

type TypesPageTitle = {
  title: string;
};

const PageTitle = ({ title }: TypesPageTitle) => {
  const dividerTitle = title.split('|');
  return (
    <h1 className={styled['page-title']}>
      {dividerTitle[1] ? (
        <span>
          {dividerTitle[0]}
          <span className={styled['subtitle']}>{'|' + dividerTitle[1]}</span>
        </span>
      ) : (
        <span>{dividerTitle[0]}</span>
      )}
    </h1>
  );
};

export default PageTitle;
