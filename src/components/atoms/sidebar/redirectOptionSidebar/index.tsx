import Link from "next/link"
import styled from "./styled.module.scss"

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
            <div className={styled["redirect-option-sidebar"]} title={title}>
                <span className={styled["icon"]}>
                    {icon}
                </span>
                <p>{text}</p>
            </div>
        </Link>
    )
}

export default RedirectOptionSidebar