import Section from "../Components/Section/section";
import MainLayout from "../Layouts/MainLayout";
import Cards from "../Components/Cards/cards";
import Suggestions from "../Components/Suggestions/suggestion";
import VideoPart from "../Components/VideoPart/videopart";
import Other from "../Components/Other/other";
import Channel from "../Components/Channel/channel";
import News from "../Components/News/news";
import BottomContact from "../Components/BottomContact/bottomContact";


export default function Home() {
    return (
        <>
        <MainLayout>
            <Section />
            <Cards />
            <Suggestions />
            <VideoPart />
            <Other />
            <Channel />
            <News />
            <BottomContact />
        </MainLayout>
        </>
    )
};
