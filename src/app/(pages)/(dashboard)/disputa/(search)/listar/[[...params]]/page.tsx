import GameList from "../components/template/gameList";
import { LayoutDashboard } from "../../../../layout.dash";
import { ListarDisputaProps } from "@base-project/Routes";

export default function Page({ params }: any) {
  const ListWeekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 
  const getCourse = params?.params?.[0];
  const getSport = params?.params?.[1];
  const getGenderCategory = params?.params?.[2];
 
  return (
    <LayoutDashboard
    >
      {ListWeekday.map((day) => (
        <GameList key={day} day={day} />
      ))}
    </LayoutDashboard>
  );
};
