import { ViewProfile } from 'components/templates/viewProfile'
import UserOperations from './components/organisms/userOperations'
import styledPage from './styled.module.scss'
import { LayoutDashboard } from '../layout.dash'

export default function Page() {
    return (
        <LayoutDashboard>
            <div className={styledPage['page-perfil']}>
                <ViewProfile screen='profileUser' />
                <UserOperations />
            </div>
        </LayoutDashboard>
    )
} 