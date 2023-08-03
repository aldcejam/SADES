import Link from "next/link"
import layout from "./layout.module.scss"
import { DarkModeButton } from "components/atoms/buttons/darkMode/Button-DarkMode.stories"

export default async function Page() {
    return (
        <div className={layout.body}>
            <div className={layout.container}>
                <header className={`${layout["header-main"]} ${layout["intern-container"]}`} >
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <DarkModeButton />
                    </div>
                </header>
            </div>
        </div>
    )
}