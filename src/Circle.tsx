import styled from "styled-components";

interface ContainerProps {
    bgColor : string;
}

const Container = styled.div<ContainerProps>`
    background-color: ${props => props.bgColor};
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

interface CircleProps  {
    bgColor: string;
}

function Circle({bgColor}: CircleProps){
    return <Container bgColor={bgColor}></Container>
}

export default Circle;