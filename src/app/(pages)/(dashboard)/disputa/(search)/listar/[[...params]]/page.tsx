import GameList from "../components/template/gameList";
import { LayoutDashboard } from "../../../../layout.dash";
import { ListarDisputaProps } from "@base-project/Routes";

export default function Page({ params }: any) {
  const ListWeekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  console.log(params)
  const getCourse = params?.params?.[0];
  const getSport = params?.params?.[1];
  const getGenderCategory = params?.params?.[2];

  console.log(getCourse, getSport, getGenderCategory);

  return (
    <LayoutDashboard
    >
      {ListWeekday.map((day) => (
        <GameList key={day} day={day} />
      ))}
    </LayoutDashboard>
  );
};
