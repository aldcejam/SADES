import GameList from "./components/template/gameList";
import { LayoutDashboard } from "../../../layout.dash";
import { cookies } from "next/headers";
import { SearchParametersForDisputesProps } from "../SearchParametersForDisputes";

export default function Page() {
  const ListWeekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const cookieStore = cookies()

  const dataForToSearchSTRING = cookieStore.get('ParametersToBuscarDisputa')?.value as string
  const dataForToSearchJSON = JSON.parse(dataForToSearchSTRING) as SearchParametersForDisputesProps

  const { sport, genderCategory, sportCategory } = dataForToSearchJSON
  return (
    <LayoutDashboard
      pageTitle={`
        ${sport || "esporte não definido"}
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
