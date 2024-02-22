import { useEffect, useState } from "react";
import React from "react";

import "./App.css";
import SearchMovie from "./SearchMovie";


const App = () => {

    return (
        <div className="app">
            <h1>Hello, World!</h1>
            <SearchMovie />
        </div>
    );
}

export default App;