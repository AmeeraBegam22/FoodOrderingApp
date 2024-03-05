import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Appstore from "../../utils/Appstore";
import "@testing-library/jest-dom";


it("should render header component" , () => {
    render(
        <BrowserRouter>
          <Provider store={Appstore}>
             <Header/>
          </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button');
    //when you ahve multiple button on the same component and you have to specifically find a single button then 
    //do this,
  //  const loginButton = screen.getByRole('button', {name : 'Login'});

    expect(loginButton).toBeInTheDocument();
});
it("should render header component with cart item" , () => {
    render(
        <BrowserRouter>
          <Provider store={Appstore}>
             <Header/>
          </Provider>
        </BrowserRouter>
    );

    const CartItem = screen.getByText(/Cart/);
    expect(CartItem).toBeInTheDocument();
});
it("should render header component" , () => {
    render(
        <BrowserRouter>
          <Provider store={Appstore}>
             <Header/>
          </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button', {name : 'Login'});

    fireEvent.click(loginButton);
    
    const logoutButton = screen.getByRole('button', {name : 'Logout'});
    
    expect(logoutButton).toBeInTheDocument();
});
