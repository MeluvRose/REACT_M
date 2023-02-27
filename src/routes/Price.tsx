import { useState } from "react";
import styled from "styled-components";

interface IQuotes {
  ath_date: string;
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

interface IPriceProps {
  QuoteData: IQuotes | undefined;
}

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const DashBoard = styled(GridBox)`
  grid-template-rows: repeat(6, 1fr);
  height: 50vh;
  background-color: rgba(1, 1, 1, 0.5);
  div {
    grid-column: 1/-1;
  }
  & > div:first-child {
    grid-row: 1/3;
  }
  & > div:nth-child(2) {
    grid-row: 3/5;
  }
  & > div:last-child {
    grid-row: 5/-1;
  }
`;

const DoubleSpace = styled(GridBox)`
  grid-template-rows: repeat(2, 1fr);
  div {
    border-radius: 20px;
    margin: 5px;
  }
  & > div:first-child {
    grid-row: 1/-1;
    grid-column: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.cardBgColor};
    font-size: 18px;
    font-weight: 700;
  }
  & > div:last-child {
    grid-row: 1/-1;
    grid-column: 2/4;
  }
`;

const TripleSpace = styled(GridBox)`
  grid-template-rows: repeat(2, 1fr);
  div {
    grid-row: 1/3;
    border-radius: 20px;
    margin: 5px;
  }
  div:first-child {
    grid-column: 1/2;
  }
  div:nth-child(2) {
    grid-column: 2/3;
  }
  div:last-child {
    grid-column: 3/4;
  }
`;

const FlowBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.cardBgColor};
  span:first-child {
    font-weight: 700;
  }
  span:last-child {
    font-weight: 400;
  }
`;

const NumberSpan = styled.span<{ isRise: boolean }>`
  color: ${(props) => (props.isRise ? "#4834d4" : "#eb4d4b")};
`;

function IsRise(num: undefined | number) {
  if ((num as number) > 0) return true;
  return false;
}

function Price({ QuoteData }: IPriceProps) {
  return (
    <div>
      <DashBoard>
        <DoubleSpace>
          <div>
            <span>Market Cap (24h)</span>
          </div>
          <FlowBox>
            <span>{QuoteData?.market_cap}</span>
            <NumberSpan
              isRise={IsRise(QuoteData?.market_cap_change_24h)}
            >{`${QuoteData?.market_cap_change_24h} (%)`}</NumberSpan>
          </FlowBox>
        </DoubleSpace>
        <DoubleSpace>
          <div>
            <span>Volume (24h)</span>
          </div>
          <FlowBox>
            <span>{QuoteData?.volume_24h}</span>
            <NumberSpan
              isRise={IsRise(QuoteData?.volume_24h_change_24h)}
            >{`${QuoteData?.volume_24h_change_24h} (%)`}</NumberSpan>
          </FlowBox>
        </DoubleSpace>
        <TripleSpace>
          <FlowBox>
            <span>24 Hours</span>
            <NumberSpan
              isRise={IsRise(QuoteData?.percent_change_24h)}
            >{`${QuoteData?.percent_change_24h} (%)`}</NumberSpan>
          </FlowBox>
          <FlowBox>
            <span>7 Days</span>
            <NumberSpan
              isRise={IsRise(QuoteData?.percent_change_7d)}
            >{`${QuoteData?.percent_change_7d} (%)`}</NumberSpan>
          </FlowBox>
          <FlowBox>
            <span>30 Days</span>
            <NumberSpan
              isRise={IsRise(QuoteData?.percent_change_30d)}
            >{`${QuoteData?.percent_change_30d} (%)`}</NumberSpan>
          </FlowBox>
        </TripleSpace>
      </DashBoard>
    </div>
  );
}

export default Price;
