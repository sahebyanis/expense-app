//import React
import React from 'react';
import ReactDOM from 'react-dom';

// import react-redux
import { Provider } from "react-redux";

// import components
import "normalize.css/normalize.css";
import './styles/styles.scss';
import AppRouter from "./routers/AppRouter"

// redux import
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

const jsx = (
    <Provider store={store}>  
        <AppRouter/>
    </Provider>
    
);

ReactDOM.render(jsx, document.getElementById("app"));

