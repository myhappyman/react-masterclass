import { useQuery } from "react-query";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {Routes, Route, useParams, useLocation, useMatch} from "react-router";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";
import { fetchCoinInfo, fetchCoinTickerInfo } from "../api";
import Loader from "../components/Loader";
import { AiOutlineMenu } from "react-icons/ai"

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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.boxBgColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
    background-color: ${props => props.theme.boxBgColor};
    margin: 20px 0px;
    padding: 20px;
    border-radius: 20px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{isActive: boolean}>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${props => props.theme.boxBgColor};
  padding: 7px 0px;
  border-radius: 10px;
  color : ${props => props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

const BackBtn = styled.div`
    display: flex;
    margin: 20px;
    justify-content: right;
    color: ${props => props.theme.textColor};
    font-size: 28px;
    .list{
        margin: 0 0 -3px;
    }
    &:hover{
        transition: .3s linear;
        color: ${props => props.theme.accentColor}
    }
`;

interface LocationState{
    state:{
        name:string;
        rank:number
    }
}

// interface ITag{
//     coin_counter: number;
//     ico_counter: number;
//     id: string;
//     name: string;
// }

// interface IInfoData{
//     id: string;
//     name: string;
//     symbol: string;
//     rank: number;
//     is_new: boolean;
//     is_active: boolean;
//     type: string;
//     logo: string;
//     tags: ITag[];
//     description: string;
//     message: string;
//     open_source: boolean;
//     started_at: string;
//     development_status: string;
//     hardware_wallet: boolean;
//     proof_type: string;
//     org_structure: string;
//     hash_algorithm: string;
//     first_data_at: string;
//     last_data_at: string;
// }

// interface IPriceData{
//     id: string;
//     name: string;
//     symbol: string;
//     rank: number;
//     circulating_supply: number;
//     total_supply: number;
//     max_supply: number;
//     beta_value: number;
//     first_data_at: string;
//     last_updated: string;
//     quotes: {
//         USD: {
//             ath_date: string
//             ath_price: number;
//             market_cap: number;
//             market_cap_change_24h: number;
//             percent_change_1h: number;
//             percent_change_1y: number;
//             percent_change_6h: number;
//             percent_change_7d: number;
//             percent_change_12h: number;
//             percent_change_15m: number;
//             percent_change_24h: number;
//             percent_change_30d: number;
//             percent_change_30m: number;
//             percent_from_price_ath: number;
//             price: number;
//             volume_24h: number;
//             volume_24h_change_24h: number;
//         }
//     }
// }

/**
 * router-dom 6버전 이상부터 useParams는
 * 타입스크립트에서 알아서 string | undefined로 인식하기때문에
 * interface정의를 하지 않아도 된다.
 * 
 * Coin에 대한 상세페이지를 표현하는 컴포넌트
 * @returns 
 */
 function Coin(){
    const {coinId} = useParams();
    const {state} = useLocation() as LocationState;
    const priceMatch = useMatch("/:coindId/price");
    const chartMatch = useMatch("/:coindId/chart");
    // const [loading, setLoading] = useState(true);    
    // const [info, setInfo] = useState<IInfoData>();
    // const [priceInfo, setPriceInfo] = useState<IPriceData>();
    
    // useEffect(()=> {
    //     (async ()=> {
    //         const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
    //         const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
    //         setInfo(infoData);
    //         setPriceInfo(priceData);
    //         setLoading(false);
    //     })();
    // }, [coinId]); //사실 array를 비워서 첫 로딩시 한번만 하고 싶지만 hook인 useEffect는 coinId가 변경될때
    //새로 데이터를 받아볼 수 있도록 최적화를 하려고 경고를 해준다.
    
    //react-query형식으로 변경
    const {isLoading: infoLoading, 
        data:infoData} = useQuery(["info", coinId], () => fetchCoinInfo(`${coinId}`));
    const {isLoading: tickersLoading, 
        data:tickersData} = useQuery(
            ["tickers", coinId], 
            () => fetchCoinTickerInfo(`${coinId}`),
            { //3번째 파라미터는 option을 넣을수 있다.
                refetchInterval: 5000 //해당 쿼리를 5초마다 refetch하도록 설정
            }
        );

    const loading = infoLoading || tickersLoading;

    return (
    <Container>
        <Helmet>
            <title>{state ? state.name : loading ? "loading" : infoData?.name}</title>
        </Helmet>
        <Header>
            <Title>{state ? state.name : loading ? <Loader /> : infoData?.name}</Title>
        </Header>
        <BackBtn><Link to={"/"}><AiOutlineMenu className="list" /> List</Link></BackBtn>
        {loading ? <Loader /> : 
        <>
            <Overview>
                <OverviewItem>
                    <span>Rank:</span>
                    <span>{infoData?.rank}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Symbol:</span>
                    <span>${infoData?.symbol}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Price:</span>
                    <span>${tickersData?.quotes.USD.price.toFixed(2)}</span>
                </OverviewItem>
            </Overview>
            <Description>{infoData?.description}</Description>
            <Overview>
                <OverviewItem>
                    <span>Total Suply:</span>
                    <span>{tickersData?.total_supply}</span>
                </OverviewItem>
                <OverviewItem>
                    <span>Max Supply:</span>
                    <span>{tickersData?.max_supply}</span>
                </OverviewItem>
            </Overview>

            <Tabs>
                <Tab isActive={priceMatch != null ? true : false}>
                    <Link to={`price`}>Price</Link>
                </Tab>
                <Tab isActive={chartMatch != null ? true : false}>
                    <Link to={`chart`}>Chart</Link>
                </Tab>
            </Tabs>
            

            <Routes>
                <Route path="chart" 
                    element={<Chart coinId={coinId as string}/>} />
                <Route path="price" 
                    element={<Price coinId={coinId as string}/>} />
            </Routes>
        </>}
    </Container>
    );
}
export default Coin;