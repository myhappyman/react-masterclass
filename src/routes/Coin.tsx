import {useParams} from "react-router";

/**
 * router-dom 6버전 이상부터 useParams는
 * 타입스크립트에서 알아서 string | undefined로 인식하기때문에
 * interface정의를 하지 않아도 된다.
 * @returns 
 */
function Coin(){
    const {coinId} = useParams();
    return <h1>Coin {coinId}</h1>
}
export default Coin;