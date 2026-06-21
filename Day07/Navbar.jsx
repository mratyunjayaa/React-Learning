import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "./searchSlice";

export default function Navbar() {
    const dispatch = useDispatch();

    const { data } = useSelector((state) => state.slice1);

    const searchTerm = useSelector(
        (state) => state.search.searchTerm
    );

    return (
        <nav className="navbar">
            <div className="logo">
                VikNova
            </div>

            <div className="ticker">
                <div className="ticker-content">
                    {data.slice(0, 10).map((coin) => (
                        <span className="coin-item" key={coin.id}>
                            {coin.symbol.toUpperCase()} ₹
                            {coin.current_price.toLocaleString()}{" "}
                            <span
                                className={
                                    coin.price_change_percentage_24h >= 0
                                        ? "green"
                                        : "red"
                                }
                            >
                                {coin.price_change_percentage_24h >= 0
                                    ? "▲"
                                    : "▼"}
                                {coin.price_change_percentage_24h?.toFixed(2)}%
                            </span>
                        </span>
                    ))}
                </div>
            </div>

            <input
                type="text"
                placeholder=" Search a coin..."
                value={searchTerm}
                onChange={(e) =>
                    dispatch(setSearch(e.target.value))
                }
                className="search-input"
            />
        </nav>
    );
}