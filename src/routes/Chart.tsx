import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

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

function Chart({coinId}:ChartProps){
    const {isLoading, data} = useQuery<IHistroical[]>(
        ["ohlcv", coinId], 
        ()=> fetchCoinHistory(coinId),
        {
            refetchInterval: 10000
        }
    );
    
    return <div>
        {isLoading ? "Loading..." : 
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
                        mode:"dark"
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
        }
    </div>;
}
export default Chart;