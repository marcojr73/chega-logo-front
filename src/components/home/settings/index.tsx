import { themeContext } from "@/providers/ThemeProvider"
import SettingsContainer from "@/styles/homeStyles/settingsContainer"
import dark from "@/styles/themes/dark"
import light from "@/styles/themes/light"
import { NextComponentType } from "next"
import React, { useContext } from "react"
import {BsMoonStarsFill, BsSunFill} from "react-icons/bs"
import Switch from "react-switch"

const Settings: NextComponentType = () => {
    const { theme, setTheme } = useContext(themeContext)

    function toggleTheme() {
        setTheme(theme.title === "light" ? dark : light)
    }
    return (
        <SettingsContainer>
            <div className="theme">
                <h1>Tema</h1>
                <Switch className="switch"
                    onChange={toggleTheme}
                    checked={theme.title === "dark"}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    offColor={"#FFFFFF"}
                    onColor={"#000000"}
                    checkedHandleIcon={<BsMoonStarsFill className="icon-theme" />}
                    uncheckedHandleIcon={<BsSunFill className="icon-theme" />}
                />
            </div>
            <div className="language">
                
            </div>
        </SettingsContainer>
    )
}

export default Settings