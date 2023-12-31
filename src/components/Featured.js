import React from 'react'
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi"
import "./Featured.css"


const Featured = () => {

    const [data, setData] = React.useState(null)
    
    React.useEffect(()=> {
        fetch("http://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en")
        .then(Response => Response.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [])
    



   if(!data) return null


   return (
    <div className='featured'>
        <div className='container'>
            <div className='vänster'>
                <h2>Explore top Crypto's like Bitcoin, Ethereum and Dogecoin</h2>
                <p>See all available assets: Cryptocurrencies and NFT's</p>
                <button className='btn'>See More Coins</button>
            </div>


            <div className='höger'>
                <div className='card'>
                    <div className='top'>
                        <img src={data[0].image} alt=""/>
                    </div>
                    <div>
                        <h5>{data[0].name}</h5>
                        <p>${data[0].current_price.toLocaleString()}</p>
                    </div>
                    {data[0].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDown className='icon' />
                            {data[0].price_change_percentage_24h.toFixed(2)}
                        </span>
                    ) : (<span className='green'>
                            <FiArrowUpRight className='icon' />
                            {data[0].price_change_percentage_24h.toFixed(2)}
                        </span>
                    )}

                    {/* <span><FiArrowUpRight/>2.5%</span> */}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[1].image} alt=""/>
                    </div>
                    <div>
                        <h5>{data[1].name}</h5>
                        <p>${data[1].current_price.toLocaleString()}</p>
                    </div>
                    {data[1].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDown className='icon' />
                            {data[1].price_change_percentage_24h.toFixed(2)}
                        </span>
                    ) : (<span className='green'>
                            <FiArrowUpRight className='icon' />
                            {data[1].price_change_percentage_24h.toFixed(2)}
                        </span>
                    )}

                    {/* <span><FiArrowUpRight/>2.5%</span> */}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[2].image} alt=""/>
                    </div>
                    <div>
                        <h5>{data[2].name}</h5>
                        <p>${data[2].current_price.toLocaleString()}</p>
                    </div>
                    {data[2].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDown className='icon' />
                            {data[2].price_change_percentage_24h.toFixed(2)}
                        </span>
                    ) : (<span className='green'>
                            <FiArrowUpRight className='icon' />
                            {data[2].price_change_percentage_24h.toFixed(2)}
                        </span>
                    )}

                    {/* <span><FiArrowUpRight/>2.5%</span> */}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[3].image} alt=""/>
                    </div>
                    <div>
                        <h5>{data[3].name}</h5>
                        <p>${data[3].current_price.toLocaleString()}</p>
                    </div>
                    {data[3].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDown className='icon' />
                            {data[3].price_change_percentage_24h.toFixed(2)}
                        </span>
                    ) : (<span className='green'>
                            <FiArrowUpRight className='icon' />
                            {data[3].price_change_percentage_24h.toFixed(2)}
                        </span>
                    )}

                    {/* <span><FiArrowUpRight/>2.5%</span> */}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[4].image} alt=""/>
                    </div>
                    <div>
                        <h5>{data[4].name}</h5>
                        <p>${data[4].current_price.toLocaleString()}</p>
                    </div>
                    {data[4].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDown className='icon' />
                            {data[4].price_change_percentage_24h.toFixed(2)}
                        </span>
                    ) : (<span className='green'>
                            <FiArrowUpRight className='icon' />
                            {data[4].price_change_percentage_24h.toFixed(2)}
                        </span>
                    )}

                    {/* <span><FiArrowUpRight/>2.5%</span> */}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[5].image} alt=""/>
                    </div>
                    <div>
                        <h5>{data[5].name}</h5>
                        <p>${data[5].current_price.toLocaleString()}</p>
                    </div>
                    {data[5].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDown className='icon' />
                            {data[5].price_change_percentage_24h.toFixed(2)}
                        </span>
                    ) : (<span className='green'>
                            <FiArrowUpRight className='icon' />
                            {data[5].price_change_percentage_24h.toFixed(2)}
                        </span>
                    )}

                    {/* <span><FiArrowUpRight/>2.5%</span> */}
                </div>
            </div>
        </div>

    </div>
  )
}







export default Featured