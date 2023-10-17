import Image from 'next/image';
import styled from './styled.module.scss';

type CourseCardProps = {
  courseShortName: string;
  courseLogo: string;
  isCardSelected: boolean;
};
const CourseCard = ({
  courseLogo,
  courseShortName,
  isCardSelected,
}: CourseCardProps) => {
  return (
    <div className={styled['course-card']}>
      <div
        className={styled['container-logo']}
        data-card-Selected={isCardSelected}
      >
        <div className={styled['logo']}>
          <Image
            alt="logo de curso"
            src={courseLogo}
            fill
            sizes="(max-width: 768px) 100px, 100px"
          />
        </div>
      </div>
      <p>{courseShortName}</p>
    </div>
  );
};

export default CourseCard;
