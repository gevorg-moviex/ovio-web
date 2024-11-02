import Section from "../Components/Section/section";
import MainLayout from "../Layouts/MainLayout";
import Cards from "../Components/Cards/cards";
import Suggestions from "../Components/Suggestions/suggestion";
import VideoPart from "../Components/VideoPart/videopart";
import Other from "../Components/Other/other";
import News from "../Components/News/news";
import BottomContact from "../Components/BottomContact/bottomContact";
import ChannelLayout from "../Layouts/SuggestionsLayout";
import Basket from "../Components/Basket/basket";

export default function Home() {
    return (
        <>
        <MainLayout>
            <Section />
            <Cards />
            <Suggestions />
            <VideoPart />
            <Other />
            <ChannelLayout />
            <News />
            <Basket />
            <BottomContact />
        </MainLayout>
        </>
    )
};
