const { render } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

it("Should Load a HEader Component with Login Button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);
const loginButton=screen.getByRole("button");
// const loginButton=screen.getByText("Login");
expect(loginButton).toBeInTheDocument();
})

it("Should Load a HEader Component with cart - 0 items",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);
const  cartItems=screen.getByText("Cart (0 items)");

expect(cartItems).toBeInTheDocument();
})

it("Should Load a HEader Component with cart  items with flexible length",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);
const  cartItem=screen.getByText(/Cart/);

expect(cartItem).toBeInTheDocument();
})

it("Should change login button to logout button on click",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);
const loginButton=screen.getByRole("button",{name:"Login"});
fireEvent.click(loginButton);
const logoutButton=screen.getByRole("button",{name:"Logout"});

expect(logoutButton).toBeInTheDocument();
})

