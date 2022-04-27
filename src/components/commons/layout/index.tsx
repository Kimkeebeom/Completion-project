import Header from "./header/header.container";
import Navi from "./navi/navi.container";
import styled from "@emotion/styled";
import Banner from "./banner/banner.container";
import Footer from "./footer/footer.container";
import { ReactChild } from "react";
import { useRouter } from "next/router";

const Wrap = styled.div`
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
`
const WrapperBody = styled.div``

const HIDDEN_BANNER = [
    "/brand"
]

interface Iprops {
    children: ReactChild
}

export default function Layout(props: Iprops){
    const router = useRouter();

    const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath)

    return(
        <Wrap>
            <Header/>
            <Navi/>
            {!isHiddenBanner && <Banner/>}
            <WrapperBody>
                {props.children}
            </WrapperBody>
            <Footer/>
        </Wrap>
    )
}