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


store.dispatch(addExpense({ description: "First", amount: 3000,createdAt: 1000}));
store.dispatch(addExpense({ description: "Second", amount: 109500, createdAt: 2000}));
store.dispatch(addExpense({ description: "Third", amount: 4500, createdAt: 3000}));



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>  
        <AppRouter/>
    </Provider>
    
);

ReactDOM.render(jsx, document.getElementById("app"));

