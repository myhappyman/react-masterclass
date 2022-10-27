import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IHistroical{
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
}

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{isLine: boolean}>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${props => props.theme.boxBgColor};
  padding: 7px 0px;
  border-radius: 10px;
  color : ${props => props.isLine ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

interface ICandleData{
    x: any;
    y: any;
    fillColor?: string;
    strokeColor?: string;
    meta?: any;
    goals?: any;
}

function Chart({coinId}:ChartProps){
    const {isLoading, data} = useQuery<IHistroical[]>(
        ["ohlcv", coinId], 
        ()=> fetchCoinHistory(coinId),
        {
            refetchInterval: 10000
        }
    );
    const isDark = useRecoilValue(isDarkAtom);

    const [isLine, setLine] = useState(true);
    const [candleData, setCandleData] = useState<ICandleData[]>();

    useEffect(()=> {
        const newData = data?.map(d => {
            return {x:new Date(d.time_open * 1000), y:[parseFloat(d.open), parseFloat(d.high), parseFloat(d.low), parseFloat(d.close)]}
        });        
        setCandleData(newData);
    }, [data]);

    const changeMode = () => {
        setLine(props => !props);
    }
    
    return <div>
        {isLoading ? "Loading..." : 
            <>
                <Tabs>
                    <Tab onClick={changeMode} isLine={isLine ? true : false}>Line</Tab>
                    <Tab onClick={changeMode} isLine={isLine ? false : true}>Candlestick</Tab>
                </Tabs>
                {
                    isLine && data ? 
                        <ApexChart 
                            type="line"
                            series={[
                                {
                                    name: "종가",
                                    data: data?.map((price => parseFloat(price.close))) ?? [],
                                },
                            ]}
                            options={{
                                theme: {
                                    mode: isDark ? "dark" : "light"
                                },
                                chart: {
                                    height: 300,
                                    width: 500,
                                    toolbar: {
                                        show: false
                                    },
                                    background: "transparent"
                                },
                                grid: {
                                    show: false
                                },
                                stroke: {
                                    curve: "smooth",
                                    width: 4
                                },
                                yaxis: {show: false},
                                xaxis: {
                                    labels: {show: false},
                                    axisTicks: {show: false},
                                    axisBorder: {show: false},
                                    type: "datetime",
                                    categories: data?.map((d => new Date(d.time_close * 1000).toUTCString())) ?? [],
                                },
                                fill: {
                                    type:"gradient",
                                    gradient: {
                                        gradientToColors: ["#16a085"],
                                        stops: [0, 100],
                                    },                            
                                },
                                colors: ["#3498db"],
                                tooltip: {
                                    y: {
                                        formatter: (value) => `$ ${value.toFixed(2)}`
                                    }
                                }                        
                            }}                    
                        />
                    : data ?
                        <ApexChart 
                            type="candlestick"
                            series={[{ data:candleData ?? [] }]}
                            options={{
                            theme: {
                                mode: isDark ? "dark" : "light"
                            },
                            chart: {
                                type: "candlestick",
                                height: 350,
                                width: 500,
                                toolbar: {
                                    show:false,
                                },
                                background: "transparent",
                            },
                            stroke: {
                                curve: "smooth",
                                width: 2,
                            },
                            yaxis: {
                                show: false,
                            },
                            xaxis: {
                                type: "datetime",
                                categories: data?.map((price) => price.time_close),
                                labels: {
                                    style: {
                                        colors: '#9c88ff'
                                    }
                                }
                            },
                            plotOptions: {
                                candlestick: {
                                    colors: {
                                        upward: '#3C90EB',
                                        downward: '#DF7D46'
                                    }
                                }
                            }
                            }}                  
                        />
                    : null
                }
                
            </>
        }
    </div>;
}
export default Chart;