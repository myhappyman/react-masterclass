import { useState } from "react";
import {useParams, useLocation} from "react-router";
import styled, {keyframes} from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`;

const animationLoader = keyframes`
    0%{
        color: red;
    }
    25%{
        color: yellow;
    }
    50%{
        color: green;
    }
    75%{
        color: blue;
    }
    100%{
        color: purple;
    }
`;

const Loader = styled.div`
    font-weight: 700;
    text-align: center;
    animation: ${animationLoader} 1s linear infinite;
`;

interface LocationState{
    state:{
        name:string;
        rank:number
    }
}

/**
 * router-dom 6버전 이상부터 useParams는
 * 타입스크립트에서 알아서 string | undefined로 인식하기때문에
 * interface정의를 하지 않아도 된다.
 * @returns 
 */
function Coin(){
    const [loading, setLoading] = useState(true);
    const {coinId} = useParams();
    const {state} = useLocation() as LocationState;
    
    return (
    <Container>
        <Header>
            <Title>{state ? state.name : null}</Title>
        </Header>
        {loading ? <Loader>Loading</Loader> : 
        null}
    </Container>
    );
}
export default Coin;