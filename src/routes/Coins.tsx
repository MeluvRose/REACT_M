import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 10px;
  a {
    transition: color 0.2s ease-in;
    display: block;
    padding: 20px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    circulating_supply: 19298725,
    total_supply: 19298731,
    max_supply: 21000000,
    beta_value: 0.993677,
    first_data_at: "2010-07-17T00:00:00Z",
    last_updated: "2023-02-22T13:24:27Z",
    quotes: {
      USD: {
        price: 24059.201266258173,
        volume_24h: 17041410740.236916,
        volume_24h_change_24h: -31.3,
        market_cap: 464311908957,
        market_cap_change_24h: -2.4,
        percent_change_15m: -0.31,
        percent_change_30m: -0.36,
        percent_change_1h: -0.61,
        percent_change_6h: 0.17,
        percent_change_12h: -1.32,
        percent_change_24h: -2.41,
        percent_change_7d: 6.1,
        percent_change_30d: 4.98,
        percent_change_1y: -38.15,
        ath_price: 68692.13703693185,
        ath_date: "2021-11-10T16:50:00Z",
        percent_from_price_ath: -64.98,
      },
    },
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    circulating_supply: 122373866,
    total_supply: 122373866,
    max_supply: 0,
    beta_value: 1.29654,
    first_data_at: "2015-08-07T00:00:00Z",
    last_updated: "2023-02-22T13:24:27Z",
    quotes: {
      USD: {
        price: 1643.524959161398,
        volume_24h: 6751559739.979785,
        volume_24h_change_24h: 5.55,
        market_cap: 201124503120,
        market_cap_change_24h: -1.99,
        percent_change_15m: -0.14,
        percent_change_30m: -0.15,
        percent_change_1h: -0.37,
        percent_change_6h: 0.14,
        percent_change_12h: -0.88,
        percent_change_24h: -1.99,
        percent_change_7d: 4.31,
        percent_change_30d: 0.99,
        percent_change_1y: -39.96,
        ath_price: 4864.113196614236,
        ath_date: "2021-11-10T16:05:00Z",
        percent_from_price_ath: -66.21,
      },
    },
  },
  {
    id: "usdt-tether",
    name: "Tether",
    symbol: "USDT",
    rank: 3,
    circulating_supply: 70459776007,
    total_supply: 71420393643,
    max_supply: 0,
    beta_value: 0.0019531,
    first_data_at: "2015-02-25T00:00:00Z",
    last_updated: "2023-02-22T13:24:27Z",
    quotes: {
      USD: {
        price: 0.9997059757007308,
        volume_24h: 26094465774.39915,
        volume_24h_change_24h: -25.48,
        market_cap: 70439059121,
        market_cap_change_24h: 0,
        percent_change_15m: -0.09,
        percent_change_30m: -0.17,
        percent_change_1h: -0.05,
        percent_change_6h: -0.07,
        percent_change_12h: -0.08,
        percent_change_24h: -0.03,
        percent_change_7d: -0.08,
        percent_change_30d: 0.03,
        percent_change_1y: 0.03,
        ath_price: 1.21549,
        ath_date: "2015-02-25T17:04:00Z",
        percent_from_price_ath: -17.75,
      },
    },
  },
];

function Coins() {
  return (
    <Container>
      <Header>
        <Title>Coins</Title>;
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`nomadcoin/${coin.id}`}>{coin.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  );
}

export default Coins;
