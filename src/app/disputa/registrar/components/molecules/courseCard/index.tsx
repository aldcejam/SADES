import Image from "next/image";
import { StyledCourseCard } from "./styled"

type CourseCardProps = {
    courseShortName: string;
    courseLogo: string;
    isCardSelected: boolean;
}
const CourseCard = ({ courseLogo, courseShortName, isCardSelected }: CourseCardProps) => {
    return (
        <StyledCourseCard>
            <div
                className="container-logo"
                data-card-Selected={isCardSelected}
            >
                <div className="logo">
                    <Image alt="logo de curso" src={courseLogo} fill
                        sizes="(max-width: 768px) 100px, 100px"
                    />
                </div>
            </div>
            <p>{courseShortName}</p>
        </StyledCourseCard>
    )
}

export default CourseCard