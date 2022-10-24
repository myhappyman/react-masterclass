//react문법은 없기때문에 ts파일로 만듬
export function fetchCoins(){
    //promise json data를 return 해야함.
    return fetch("https://api.coinpaprika.com/v1/coins").then((res) => res.json());
}