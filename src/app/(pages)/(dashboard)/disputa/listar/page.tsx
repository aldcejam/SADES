"use client"
import { useSearchParams } from "next/navigation";
import GameList from "./components/template/gameList";
import { LayoutDashboard } from "../../layout.dash";

export default function Page() {
  const searchParams = useSearchParams();
  const sportSelected = searchParams.get("sportSelected");
  const genderCategory = searchParams.get("genderCategory");
  const sportCategory = searchParams.get("sportCategory");

  const ListWeekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <LayoutDashboard
      pageTitle={`
        ${sportSelected || "esporte não definido"}
        ${sportCategory ? ` - ${sportCategory}` : ""}
    `}
    >
      <h2>{genderCategory}</h2>
      {ListWeekday.map((day) => (
        <GameList key={day} day={day} />
      ))}
    </LayoutDashboard>
  );
};
