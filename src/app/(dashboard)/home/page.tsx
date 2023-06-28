import PageTitle from 'components/atoms/pageTitle';
import styled from '../layout.module.scss';
import HomePageCards from './components/template/HomePageCards';

export default function Page() {
  return (
    <> 
      <PageTitle title='Pesquisar por jogo' />
      <section className={styled["content-page"]}>
        <HomePageCards />
      </section>
    </>
  );
}
