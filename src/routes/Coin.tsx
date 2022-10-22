import { useState, useEffect } from "react";
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

interface ITag{
    coin_counter: number;
    ico_counter: number;
    id: string;
    name: string;
}

interface IInfoData{
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    tags: ITag[];
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface IPriceData{
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        }
    }
}

/**
 * router-dom 6버전 이상부터 useParams는
 * 타입스크립트에서 알아서 string | undefined로 인식하기때문에
 * interface정의를 하지 않아도 된다.
 * 
 * Coin에 대한 상세페이지를 표현하는 컴포넌트
 * @returns 
 */
 function Coin(){
    const [loading, setLoading] = useState(true);
    const {coinId} = useParams();
    const {state} = useLocation() as LocationState;
    const [info, setInfo] = useState<IInfoData>();
    const [priceInfo, setPriceInfo] = useState<IPriceData>();
    useEffect(()=> {
        (async ()=> {
            const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
            const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
            setInfo(infoData);
            setPriceInfo(priceData);
            setLoading(false);
        })();
    }, []);
    
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