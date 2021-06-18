import React from 'react';
import { gql, useQuery } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }: any) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}
