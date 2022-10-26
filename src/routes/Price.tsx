import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTickerInfo } from "../api";
import Loader from "../components/Loader";
import {AiOutlineFall, AiOutlineRise} from "react-icons/ai";

interface PriceProps{
    coinId: string;
}

const PriceWrapper = styled.div<{gridCnt:number}>`
    display: grid;
    grid-template-columns: repeat(${props => props.gridCnt}, 1fr);
    margin: 10px 0px;
    gap: 10px;
`;

const ColumnWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: left;
`;

const PriceInfo = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    background-color: ${props => props.theme.boxBgColor};
    padding: 7px 0px;
    border-radius: 10px;
    padding: 20px 0;
`;

const PriceValue = styled.span`
    font-size: 32px;
    font-weight: 900;
    padding-right: 20px;
`;

const SubHead = styled.div`
    display: block;
    text-align: left;
    color: ${props => props.theme.textColor};
    font-size: 12px;
    font-weight: 700;
    margin: 3px 0;
    padding: 0 20px;
`;

const Value = styled.div<{pointColor:string}>`
    color: ${props => props.pointColor};
    font-size: 28px;
    font-weight: 700;
    padding: 12px;
    .arrow{
        margin: 0px 10px -2px;
    }
`;

function Price({coinId}:PriceProps){
    const {isLoading, data} = useQuery(
        ["priceInfo", coinId],
        () => fetchCoinTickerInfo(coinId),
        {
            refetchInterval: 5000,
            select: (data) => {
                return data.quotes.USD;
            }
        }
    );
    
    const pointColor = (value:number):string => {
        return value === 0 ? "black" : value < 0 ? "green" : "red";
    }

    const pointArrow = (value:number):JSX.Element => {
        return value === 0 ? <div></div> : value < 0 ? <AiOutlineFall className="arrow"/> : <AiOutlineRise className="arrow"/>;
    }

    return (
        <div>
            {isLoading ? <Loader /> : 
                <>
                    <PriceWrapper gridCnt={1}>
                        <PriceInfo>
                            <ColumnWrap>
                                <Column>
                                    <SubHead>{new Date(data.ath_date).toLocaleString()}</SubHead>
                                    <SubHead>현 최고가</SubHead>
                                </Column>
                                <Column>
                                    <PriceValue>${(data.ath_price).toFixed(2)}</PriceValue>
                                </Column>
                            </ColumnWrap>                            
                        </PriceInfo>
                    </PriceWrapper>
                    <PriceWrapper gridCnt={2}>
                        <PriceInfo>
                            <SubHead>1시간 전보다</SubHead>
                            <Value pointColor={pointColor(data.percent_change_1h)}>
                                {data.percent_change_1h} %
                                {pointArrow(data.percent_change_1h)}
                            </Value>
                        </PriceInfo>
                        <PriceInfo>
                            <SubHead>6시간 전보다</SubHead>
                            <Value pointColor={pointColor(data.percent_change_6h)}>
                                {data.percent_change_6h} %
                                {pointArrow(data.percent_change_6h)}
                            </Value>
                        </PriceInfo>
                    </PriceWrapper>
                    <PriceWrapper gridCnt={2}>
                        <PriceInfo>
                            <SubHead>12시간 전보다</SubHead>
                            <Value pointColor={pointColor(data.percent_change_12h)}>
                                {data.percent_change_12h} %
                                {pointArrow(data.percent_change_12h)}
                            </Value>
                        </PriceInfo>
                        <PriceInfo>
                            <SubHead>24시간 전보다</SubHead>
                            <Value pointColor={pointColor(data.percent_change_24h)}>
                                {data.percent_change_24h} %
                                {pointArrow(data.percent_change_24h)}
                            </Value>
                        </PriceInfo>
                    </PriceWrapper>
                    <PriceWrapper gridCnt={2}>
                        <PriceInfo>
                            <SubHead>7일 전보다</SubHead>
                            <Value pointColor={pointColor(data.percent_change_7d)}>
                                {data.percent_change_7d} %
                                {pointArrow(data.percent_change_7d)}
                            </Value>
                        </PriceInfo>
                        <PriceInfo>
                            <SubHead>30일 전보다</SubHead>
                            <Value pointColor={pointColor(data.percent_change_30d)}>
                                {data.percent_change_30d} %
                                {pointArrow(data.percent_change_30d)}
                            </Value>
                        </PriceInfo>
                    </PriceWrapper>
                </>
            }
        </div>
    );
}
export default Price;