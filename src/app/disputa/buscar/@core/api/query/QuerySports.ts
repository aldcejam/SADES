import { GenderOptionsProps } from "src/defaultTypes/GendersProps";
type QuerySportsProps = {
    sportUUID: string;
    sportName: string;
    sportCategories?: string[];
    genderCategories?: GenderOptionsProps[]; 
  } 
  
  const QuerySports: QuerySportsProps[]  = [
    {
      sportUUID: "0",
      sportName: "futsal",
      sportCategories: undefined,
      genderCategories: ["female", "male"] 
    },
    {
      sportUUID: "1",
      sportName: "volei",
      sportCategories: ["areia", "quadra"],
      genderCategories: ["female", "male", "mixed"] 
    },
    {
      sportUUID: "2",
      sportName: "Natacao",
      sportCategories: ["25m", "50m", "revezamento"],
      genderCategories: ["female", "male", "mixed"] 
    },
    {
      sportUUID: "3",
      sportName: "basquete",
      sportCategories: undefined,
      genderCategories: ["female", "male"] 
    },
    {
      sportUUID: "4",
      sportName: "xadrex",
      sportCategories: undefined,
      genderCategories: ["mixed"] 
    },
    {
      sportUUID: "5",
      sportName: "Handball",
      sportCategories: undefined,
      genderCategories: ["female", "male"] 
    },
    {
      sportUUID: "6",
      sportName: "ping pong",
      sportCategories: undefined,
      genderCategories: ["mixed"] 
    },
    {
      sportUUID: "7",
      sportName: "cabo de guerra",
      sportCategories: undefined,
      genderCategories: ["mixed"] 
    },
  
  ];
  
  
  export { type QuerySportsProps, QuerySports}