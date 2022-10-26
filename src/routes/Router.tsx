import {BrowserRouter, Routes, Route} from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";

interface IRouter{
    // changeTheme: () => void;
    darkMode: boolean;
}

/**
 * react 6버전 이상부턴 declare관련 설치를 하지 않아도 알아서 타입스크립트가 알아본다.
 */
function Router({darkMode}:IRouter){
    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route
                path={`/:coinId/*`}
                element={<Coin darkMode={darkMode} />}
            />
        </Routes>
        <Routes>
            <Route
                path={`/`}
                element={<Coins />}
            />
        </Routes>
    </BrowserRouter>
    );
}
export default Router;