import FirstTopSide from "../Components/FirstTop/firstTopSide";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import Help from "../Components/Help/help";

export default function HelpLayout() {
    return (
        <>
            <FirstTopSide />
            <Header />
                <Help />
            <Footer />
        </>
    )
};
