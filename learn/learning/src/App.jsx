// export const App = () =>
// { 
// return <h1>Hello Developers, Welcome to coding world</h1>;
// };

//1  import React from "react";
//2  import {Fragment} from "react";

import NetflixSeries from "./components/NetflixSeries";
import "./components/Netflix.module.css";
import {EventHandling} from "./components/EventHandling"
import {EventProps} from "./components/EventProps"
import {EventPropagation} from "./components/EventPropagation"
import {State} from "./components/hooks/State"
import "./components/EV.css"
import { DericedState } from "./components/DericedState";

export const App = () =>
{
    return(
      <section className="container">
        {/* <h1 className="card-heading"> List of Best Netflix Series</h1> */}
        {/* <NetflixSeries /> */}
        {/* <EventHandling /> */}
        {/* <EventProps /> */}
        {/* <EventPropagation /> */}
        {/* <State /> */}
        <DericedState />
      </ section>   
    );
};


