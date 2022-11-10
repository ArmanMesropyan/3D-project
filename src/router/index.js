import React from 'react';
import {Route} from "react-router-dom";
import NavBar from "../pages/navBar";
import Space from '../pages/space';
import Sahara from "../pages/sahara";
import Light from "../pages/light";
import FutureCity from "../pages/futureCity";
import Website3D from "../pages/3dSite";
import Miami from "../pages/miami";

const RouterComponent = () => {
    return (
        <>
            <Route exact path={'/'} render={() => <NavBar/>}/>
            <Route exact path={'/futureCity'} render={() => <FutureCity/>}/>
            <Route exact path={'/space'} render={() => <Space/>}/>
            <Route exact path={'/sahara'} render={() => <Sahara/>}/>
            <Route exact path={'/light'} render={() => <Light/>}/>
            <Route exact path={'/website3d'} render={() => <Website3D/>}/>
            <Route exact path={'/miami'} render={() => <Miami/>}/>
        </>
    )
};

export default RouterComponent;
