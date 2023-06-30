"use client"
import { useSearchParams } from "next/navigation";
import styled from "app/(dashboard)/layout.module.scss"
import GameList from "./components/template/gameList";
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

      <section
        className={styled["content-page"]}
        data-boxshadow_in_bg="true"
      >
        <div className={styled["box-page"]}>
          <h2>{genderCategory}</h2>
          {ListWeekday.map((day) => (
            <GameList key={day} day={day} />
          ))}
        </div>
      </section >
    </>
  );
};
