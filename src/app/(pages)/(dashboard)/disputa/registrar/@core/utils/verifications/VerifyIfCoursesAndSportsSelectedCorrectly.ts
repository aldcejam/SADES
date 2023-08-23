import { PageDisputaRegistrarConnection } from "../../connection"
import { CoursesSelectedProps, SportSelectedProps } from "../../entities/IDataForRegistrarDisputa"

type VerifyIfCoursesAndSportsSelectedCorrectlyProps = {
    coursesSelected: CoursesSelectedProps[]
    sportSelected: SportSelectedProps
}
const VerifyIfCoursesAndSportsSelectedCorrectly = () => {
 

    const { sportAndCourseSelected,genderAndSportCategorySelected} = PageDisputaRegistrarConnection()
    
    const { sportSelected, selectCourse } = sportAndCourseSelected
    const { coursesSelected } = selectCourse
    
    const coursesNotSelected = coursesSelected.length == 0
    const sportNotSelected = Object.keys(sportSelected).length == 0 
    const insufficientCourses =  coursesSelected?.length < sportSelected?.value.minNumberOfCourses
    const excessCourses = coursesSelected?.length > sportSelected?.value.maxNumberOfCourses
  

    
    return ()=>{
        if (coursesNotSelected) {
            throw new Error("cursos não selecionados");
        }
        if (sportNotSelected) {
            throw new Error("esporte não selecionado");
        }
        if (insufficientCourses && !sportNotSelected) {
            throw new Error(`quantidade de cusos insuficientes, selecione no mínimo ${sportSelected.value.minNumberOfCourses} cursos`);
        }
        if (excessCourses) {
            throw new Error(`quantidade de cusos excedida, selecione no máximo ${sportSelected.value.maxNumberOfCourses} cursos`);
        }
    }


}

export default VerifyIfCoursesAndSportsSelectedCorrectly