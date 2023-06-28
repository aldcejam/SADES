import PageTitle from 'components/atoms/pageTitle'
import styled from '../layout.module.scss'
import { StyledPerfil } from './styled'
import { ViewProfile } from 'components/templates/viewProfile'
import UserOperations from './components/organisms/userOperations'

export default function Page() {

    return (
        <>
            <PageTitle title='Perfil'/>
            <section className={styled["content-page"]}>
                <StyledPerfil>
                    <ViewProfile screen='profileUser' />
                    <UserOperations />
                </StyledPerfil>
            </section>
        </>
    )
} 