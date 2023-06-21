import Identity from "components/molecules/ViewProfile/identityData"
import ProfilePic from "components/atoms/profilePic"
import Secondarydata from "components/molecules/ViewProfile/secondarydata"
import SocialMidias from "components/molecules/ViewProfile/socialMidias"
import { StyledContent } from "./styled"

const Content = () => {
    const userDataBase = {
        name: 'aldcejam Paulino Morais Junior',
        matriculation: 20191064010004,
        instagram: '@ald',
        twitter: '@juniorAldcejam',
        academicEmail: 'aldcejam.j@escolar.ifrn.edu.br',
        personalcEmail: 'aldcejamj923@gmail.com',
        bio: "fault with a man who chooses to enjoy a pleasure that has no annoying consequences",
        course: "Informática"
    }
    return (
        <StyledContent>
            <div className="content__profile-pic">
                <ProfilePic />
            </div>
            <Identity
                course={userDataBase.course}
                matriculation={userDataBase.matriculation}
                name={userDataBase.name}
                bio={userDataBase.bio}
            />
            <SocialMidias
                instagram={userDataBase.instagram}
                twitter={userDataBase.twitter}
            />
            <div className="content--divider-line" />
            <Secondarydata
                academicEmail={userDataBase.academicEmail}
                personalEmail={userDataBase.personalcEmail}
            />
        </StyledContent>
    )
}

export default Content