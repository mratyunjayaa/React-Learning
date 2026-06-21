import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./slicer";

export default function CoinCreate() {
  const dispatch = useDispatch();

  const { data, loading, error } =
    useSelector((state) => state.slice1);

  const searchTerm = useSelector(
    (state) => state.search.searchTerm
  );

  const filteredCoins = data.filter(
    (coin) =>
      coin.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      coin.symbol
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    dispatch(FetchData(100));
  }, [dispatch]);

  if (loading) {
    return (
      <h1 className="loading">
        Loading Coins...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="error">
        Error: {error}
      </h1>
    );
  }

  if (
    searchTerm &&
    filteredCoins.length === 0
  ) {
    return (
      <h2 className="error">
        No coins found.
      </h2>
    );
  }

  return (
    <div className="coin-container">
      {filteredCoins.map((coin) => (
        <CoinCard
          key={coin.id}
          coin={coin}
        />
      ))}
    </div>
  );
}

function CoinCard({ coin }) {
  const change =
    coin.price_change_percentage_24h ?? 0;

  return (
    <div className="coin-card">
      <img
        className="coin-image"
        src={coin.image}
        alt={coin.name}
      />

      <h3 className="coin-name">
        {coin.name}
      </h3>

      <p className="coin-symbol">
        Symbol: {coin.symbol.toUpperCase()}
      </p>

      <p className="coin-price">
        ₹ {coin.current_price?.toLocaleString()}
      </p>

      <p className="coin-rank">
        Rank: #{coin.market_cap_rank}
      </p>

      <p className="coin-market-cap">
        Market Cap: ₹
        {coin.market_cap?.toLocaleString()}
      </p>

      <p
        className={
          change >= 0
            ? "coin-change green"
            : "coin-change red"
        }
      >
        24h Change: {change.toFixed(2)}%
      </p>
    </div>
  );
}