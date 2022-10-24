//react문법은 없기때문에 ts파일로 만듬
const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins(){
    //promise json data를 return 해야함.
    return fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export function fetchCoinInfo(coinId:string){
    return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());   
}

export function fetchCoinTickerInfo(coinId:string){
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());   
}

export function fetchCoinHistory(coinId:string){
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`).then((res) => res.json());
}