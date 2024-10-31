import Register from "../Components/Register/register";
import SlicedFooter from "../Components/SlicedFooter/slicedFooter";
import SlicedHeader from "../Components/SlicedHeader/slicedHeader";

export default function RegisterLayout() {
    return (
        <>
            <SlicedHeader />
                <Register />
            <SlicedFooter />
        </>
    )
};
