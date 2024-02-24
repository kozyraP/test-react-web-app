import { useEffect, useState } from "react";
import React from "react";

import "./App.css";
import SearchMovie from "./SearchMovie";
import NavBar from "./NavBar";


const HomePage = () => {

    return (<>
        <NavBar />
        <h1 className="text-3xl font-bold underline">
            Hello world! xD
        </h1>
    </>
    );
}

export default HomePage;