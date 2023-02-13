import { NextComponentType } from "next"
import React, { useContext } from "react"

import { useTranslation } from "react-i18next"
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"
import Switch from "react-switch"

import { themeContext } from "@/providers/ThemeProvider"
import SettingsContainer from "@/styles/homeStyles/settingsContainer"
import dark from "@/styles/themes/dark"
import light from "@/styles/themes/light"

const Settings: NextComponentType = () => {
    const { theme, setTheme } = useContext(themeContext)
    const {t, i18n} = useTranslation()

    function toggleTheme() {
        setTheme(theme.title === "light" ? dark : light)
    }
    return (
        <SettingsContainer>
            <div className="theme">
                <h1>{t("theme")}</h1>
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
                <h1>{t("language")}</h1>
                <div className="change">
                    <button onClick={() => i18n.changeLanguage("pt")}>PT</button>
                    <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                </div>
            </div>
        </SettingsContainer>
    )
}

export default Settings