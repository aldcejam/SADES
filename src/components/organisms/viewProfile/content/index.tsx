import ProfilePic from 'components/atoms/viewProfile/profilePic';
import Identity from 'components/molecules/ViewProfile/identityData'; 
import SocialMidias from 'components/molecules/ViewProfile/socialMidias';
import styled from './styled.module.scss'; 

const Content = () => {
  const userDataBase = {
    name: 'aldcejam Paulino Morais Junior',
    matriculation: 20191064010004,
    instagram: 'aldcejam.p',
    twitter: 'aldcejam',
    academicEmail: 'aldcejam.j@escolar.ifrn.edu.br',
    personalcEmail: 'aldcejamj923@gmail.com',
    bio: 'fault with a man who chooses to enjoy a pleasure that has no annoying consequences',
    course: 'Informática',
  };
  return (
    <div className={styled['content']}>
      <ProfilePic /> 
      <Identity
        course={userDataBase.course}
        matriculation={userDataBase.matriculation}
        name={userDataBase.name}
        bio={userDataBase.bio}
      />
      <SocialMidias
        instagram={userDataBase.instagram}
        twitter={userDataBase.twitter}
        academicEmail={userDataBase.academicEmail}
        personalcEmail={userDataBase.personalcEmail}
      /> 
    </div>
  );
};

export default Content;
