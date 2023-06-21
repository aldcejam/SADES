"use client"
import { useSearchParams } from "next/navigation";
import ContentPage from 'app/(dashboard)/layout-style/ContentPage';
import GameList from "./components/template/gameList";
import { StyledDisputaListar } from "./styled"; 
import PageTitle from "components/atoms/pageTitle";

export default function Page() {
  const searchParams = useSearchParams();
  const sportSelected = searchParams.get("sportSelected");
  const genderCategory = searchParams.get("genderCategory");
  const sportCategory = searchParams.get("sportCategory");

  const ListWeekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <PageTitle
        title={`${`${sportSelected ? sportSelected : "esporte não definido"}
        ${sportCategory ? ` - ${sportCategory}` : ""}
    `}`} />

      <ContentPage className='with-boxshadow-in-bg'>
        <StyledDisputaListar className="box-page">
          <div className="background" />
          <h2>{genderCategory}</h2>
          {ListWeekday.map((day) => (
            <GameList key={day} day={day} />
          ))}
        </StyledDisputaListar>
      </ContentPage>
    </>
  );
};
 