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
    const {isLoading, data} = useQuery<IHistroical[]>(["ohlcv", coinId], ()=> fetchCoinHistory(coinId));
    
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
                    }

                }}

                
            />
        }
    </div>;
}
export default Chart;