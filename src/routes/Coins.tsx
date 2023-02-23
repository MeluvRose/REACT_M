import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 70vw;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33%, auto));
  row-gap: 10px;
  text-transform: uppercase;
  div:first-child {
    grid-column: 2/3;
  }
  div:last-child {
    grid-column: 3/4;
  }
`;

const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 50%;
    height: 50%;
    background-color: ${(props) => props.theme.cardBgColor};
    border: none;
    border-radius: 10px;
    &:hover {
      background-color: ${(props) => props.theme.accentColor};
    }
  }
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  border: 1px solid #30336b;
  border-radius: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
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

const Loader = styled.span`
  text-align: center;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: "token";
}

interface ICoinsProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Coins({ toggleDark, isDark }: ICoinsProps) {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      <Header>
        <HeaderItem>
          <Title>Coin</Title>
        </HeaderItem>
        <HeaderItem>
          <button onClick={toggleDark}>{isDark ? "☀️" : "🌙"}</button>
        </HeaderItem>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/REACT_M/nomadcoin/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
