import PageTitle from 'components/atoms/pageTitle'
import ContentPage from '../layout-style/ContentPage'
import { StyledPerfil } from './styled'
import { ViewProfile } from 'components/templates/viewProfile'
import UserOperations from './components/organisms/userOperations'

export default function Page() {

    return (
        <>
            <PageTitle title='Perfil' />
            <ContentPage>
                <StyledPerfil>
                    <ViewProfile screen='profileUser' />
                    <UserOperations />
                </StyledPerfil>
            </ContentPage>
        </>
    )
} 