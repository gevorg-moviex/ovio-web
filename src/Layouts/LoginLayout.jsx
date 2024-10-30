import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";

export default function LoginRegisterLayout( {children} ) {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
};
