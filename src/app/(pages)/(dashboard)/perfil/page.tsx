import PageTitle from 'components/atoms/pageTitle'
import styled from 'app/(pages)/(dashboard)/layout.module.scss'
import { ViewProfile } from 'components/templates/viewProfile'
import UserOperations from './components/organisms/userOperations'
import styledPage from './styled.module.scss'

export default function Page() {

    return (
        <section className={styled["content-page"]}>
            <div className={styledPage['page-perfil']}>
                <ViewProfile screen='profileUser' />
                <UserOperations />
            </div>
        </section>
    )
} 