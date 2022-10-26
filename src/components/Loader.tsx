import styled, { keyframes } from "styled-components";

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

const Loading = styled.div`
    font-weight: 700;
    text-align: center;
    animation: ${animationLoader} 1s linear infinite;
`;

function Loader(){
    return <Loading>Loading...</Loading>;
}

export default Loader;