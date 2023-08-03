import { CoursesSelectedProps, SportSelectedProps } from "../../entities/IDataForRegistrarDisputa"

type VerifyIfCoursesAndSportsSelectedCorrectlyProps = {
    coursesSelected: CoursesSelectedProps[]
    sportSelected: SportSelectedProps
}
const VerifyIfCoursesAndSportsSelectedCorrectly = ({ coursesSelected, sportSelected }: VerifyIfCoursesAndSportsSelectedCorrectlyProps) => {


    const coursesNotSelected = coursesSelected.length == 0
    const sportNotSelected = Object.keys(sportSelected).length == 0 
    const insufficientCourses =  coursesSelected?.length < sportSelected?.minNumberOfCourses
    const excessCourses = coursesSelected?.length > sportSelected?.maxNumberOfCourses

    console.log("course lenght " + coursesSelected.length + " " + coursesSelected.map(course => course.name))

    console.log(coursesNotSelected, sportNotSelected, insufficientCourses, excessCourses)

    

    if (coursesNotSelected) {
        throw new Error("cursos não selecionados");
    }
    if (sportNotSelected) {
        throw new Error("esporte não selecionado");
    }
    if (insufficientCourses && !sportNotSelected) {
        throw new Error(`quantidade de cusos insuficientes, selecione no mínimo ${sportSelected.minNumberOfCourses} cursos`);
    }
    if (excessCourses) {
        throw new Error(`quantidade de cusos excedida, selecione no máximo ${sportSelected.maxNumberOfCourses} cursos`);
    }

}

export default VerifyIfCoursesAndSportsSelectedCorrectly