import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
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

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000, // ms
    }
  );

  console.log(data);
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => Number(price.close)) as number[],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transperent",
            },
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
              width: 5,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              type: "datetime",
              categories: data?.map((price) => {
                const time = new Date(price.time_close * 1000);
                return time.toString();
              }),
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#4834d4"], stops: [0, 100] },
            },
            colors: ["#eb4d4b"],
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
