import Link from "next/link"
import { RedirectIconsSidebarStyled } from "./styled"

type RedirectIconProps = {
    icon: any
    text: string
    href?: string
    title: string
    onclick?: () => void
}

const RedirectOptionSidebar = ({ href, icon, text, title, onclick }: RedirectIconProps) => {
    return (
        <Link href={href ? href : "/"} onClick={onclick}>
            <RedirectIconsSidebarStyled title={title}>
                <span className="icon">
                    {icon}
                </span>
                <p className="text">{text}</p>
            </RedirectIconsSidebarStyled>
        </Link>
    )
}

export default RedirectOptionSidebar