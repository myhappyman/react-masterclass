import {Link} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinList = styled.ul`
`;

const Coin = styled.li`
    background-color: white;
    color: ${props => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a {
        transition: color .5s ease-in;
        padding: 20px;
        display: block;
    }    
    &:hover {
        a {
            color: ${props => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`;

const coins = [{
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
    },
    {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
    },
    {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
    },];

function Coins(){
    return (
        <Container>
            <Header>
                <Title>코인 리스트</Title>
            </Header>
            <CoinList>
                {coins.map(c => (
                    <Coin key={c.id}>
                        <Link to={`/${c.id}`}>{c.name} &rarr;</Link>
                    </Coin>                    
                ))}                
            </CoinList>
        </Container>
    );
}
export default Coins;