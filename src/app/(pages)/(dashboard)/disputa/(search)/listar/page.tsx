"use client"
import GameList from "./components/template/gameList";
import { LayoutDashboard } from "../../../layout.dash"; 
import { useSearchParams } from "next/navigation"
import { ListarDisputaProps } from "@base-project/Routes";

export default function Page() {
  const ListWeekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const searchParams  = useSearchParams();
  const params: ListarDisputaProps = {
    esporte: searchParams.get("esporte") as string,
    curso: searchParams.get("curso") as string,
    categoria_esportiva: searchParams.get("categoria_esportiva") as string,
    categoria_genero: searchParams.get("categoria_genero") as string,
  }  
  if(params.curso === null || params.esporte === null){
    return <h1>Erro</h1>
  } 
   
  return (
    <LayoutDashboard
      pageTitle={`
        ${params.esporte || "esporte não definido"}
        ${params.categoria_esportiva ? ` - ${params.categoria_esportiva}` : ""}
    `}
    >
      <h2>{params.categoria_genero}</h2>
      {ListWeekday.map((day) => (
        <GameList key={day} day={day} />
      ))}
    </LayoutDashboard>
  );
};
