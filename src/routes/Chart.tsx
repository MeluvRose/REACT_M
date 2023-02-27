import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

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
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000, // ms
    }
  );

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data?.map((price) => [
                price.time_close,
                price.open,
                price.high,
                price.low,
                price.close,
              ]) as number[][],
            },
          ]}
          options={{
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#0652DD",
                  downward: "#EA2027",
                },
              },
            },
            theme: {
              mode: isDark ? "dark" : "light",
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
                show: true,
                rotate: -45,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: true,
                borderType: "solid",
                color: "#78909C",
                height: 6,
                offsetX: 0,
                offsetY: 0,
              },
              type: "datetime",
              categories: data?.map((price) => {
                const time = new Date(price.time_close * 1000);
                return time.toString();
              }),
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#4834d4"], stops: [0, 0] },
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
