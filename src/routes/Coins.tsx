import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
// import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import Loader from "../components/Loader";

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

const CoinList = styled.ul`
`;

const Coin = styled.li`
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a {
        color: ${props => props.theme.bgColor};
        display: flex;
        align-items: center;
        transition: color .5s ease-in;
        padding: 20px;
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

const CoinImg = styled.img`
    width: 35px;
    height: 35px;
    margin: 0 10px 0 0;
`;

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
}


function Coins(){
    // const [loading, setLoading] = useState(true);
    // const [coins, setCoins] = useState<ICoin[]>([]);

    // /**
    //  * useEffect에서 익명함수를 정의하고 ()붙여서 즉시 실행되도록 한다.
    //  * 추가로 함수를 작성하는것을 안해도 된다. 
    //  */
    // useEffect(() => {
    //     (async() => { 
    //         const response = await fetch("https://api.coinpaprika.com/v1/coins");
    //         const json = await response.json();
    //         if(json.length > 100){
    //             setCoins(json.slice(0, 100));
    //         }else{
    //             setCoins(json);
    //         }
    //         setLoading(false);
    //     })();
    // }, []);

    //react-query버전으로 변경!
    const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);


    return (
        <Container>
            <Helmet>
                <title>코인 리스트</title>
            </Helmet>
            <Header>
                <Title>코인 리스트</Title>
            </Header>
            {isLoading ? <Loader /> : 
                (
                    <CoinList>
                        {data?.slice(0, 100).map(c => (
                            <Coin key={c.id}>
                                <Link to={`/${c.id}`} state={c}>
                                    <CoinImg src={`https://cryptocurrencyliveprices.com/img/${c.id}.png`} />
                                    {c.name} &rarr;
                                </Link>
                            </Coin>                    
                        ))}                
                    </CoinList>
                )
            }
        </Container>
    );
}
export default Coins;