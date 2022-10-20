import {BrowserRouter, Routes, Route} from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";

/**
 * react 6버전 이상부턴 declare관련 설치를 하지 않아도 알아서 타입스크립트가 알아본다.
 */
function Router(){
    return (
    <BrowserRouter>
        <Routes>
        <Route
            path={`${process.env.PUBLIC_URL}/:coinId`}
            element={<Coin/>}
        />
        </Routes>
        <Routes>
        <Route
            path={`${process.env.PUBLIC_URL}/`}
            element={<Coins/>}
        />
        </Routes>
    </BrowserRouter>
    );
}
export default Router;