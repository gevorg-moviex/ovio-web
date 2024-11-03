import { useDarkMode } from "../../Context/darkmode"

export default function DarkMode() {
    const {isDarkMode, toggleDarkMode} = useDarkMode();

    return (
        <div className="bg-red-50 text-3xl z-50 text-black fixed bottom-0 left-0">
            <span onClick={toggleDarkMode}>{isDarkMode ? "luys" : "mut"}</span>
        </div>
    )
};
