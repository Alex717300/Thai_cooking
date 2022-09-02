import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PadThai from "./components/dishes/pad_thai/PadThai";
import FriedRice from "./components/dishes/fried_rice/FriedRice";
import Home from "./components/home/Home";
import SomTam from "./components/dishes/somtam/SomTam";
import Laab from "./components/dishes/laab/Laab";
import Roti from "./components/dishes/roti/Roti";
import CashewChicken from "./components/dishes/cashew_chicken/CashewChicken";
import TodMan from "./components/dishes/tod_man/TodMan";
import KungOp from "./components/dishes/kung_op/KungOp";


function App () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/padthai" element={<PadThai/>}/>
                <Route path="/friedrice" element={<FriedRice/>}/>
                <Route path="/somtam" element={<SomTam/>}/>
                <Route path="/laab" element={<Laab/>}/>
                <Route path="/roti" element={<Roti/>}/>
                <Route path="/cashew_chicken" element={<CashewChicken/>}/>
                <Route path="/todman" element={<TodMan/>}/>
                <Route path="/kungop" element={<KungOp/>}/>
                <Route path="*" element={<Home/>}
                />
            </Routes>
        </BrowserRouter>
    );
}


export default App;
