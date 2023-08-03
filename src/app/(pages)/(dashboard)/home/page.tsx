import PageTitle from 'components/atoms/pageTitle';
import styled from 'app/(pages)/(dashboard)/layout.module.scss';
import HomePageCards from './components/template/HomePageCards';

export default function Page() {
  return (
    <section className={styled["content-page"]}>
      <HomePageCards />
    </section>
  );
}
