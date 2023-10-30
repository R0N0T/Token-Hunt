import React from 'react';
import "./CoinInfo.css"
const CoinInfo = (props) => {

  return (
    <div className="coin-info-container">
      <div className="coin-info-header">
        <img src={props.image} alt={props.name} className="coin-image" />
        <h1>{props.name}</h1>
      </div>
      <div className="coin-info-details">
        <p>Price: ${props.price}</p>
        <p>Price Change (24h): {props.priceChangePercentage}%</p>
        <p>Market Cap: ${props.marketCap}</p>
        <p>Market Cap Rank: {props.marketCapRank}</p>
      </div>
    </div>
  );
};

export default CoinInfo;
