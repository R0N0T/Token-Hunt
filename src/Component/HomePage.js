import react from 'react';
import { useEffect, useState } from 'react';
import CoinInfo from './CoinInfo'
const HomePage = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, [])
    const handleInput = (e) => {
        setSearchQuery(e.target.value);
    }
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div>
            <input type='text' placeholder='search' onChange={handleInput} value={searchQuery} />
            <button>Submit</button>
            {filteredData.map((item) => (
                <CoinInfo
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.current_price}
                    marketCap={item.market_cap}
                    marketCapRank={item.market_cap_rank}
                    priceChangePercentage={item.price_change_percentage_24h}
                />
            ))}
        </div>
    );
}

export default HomePage;