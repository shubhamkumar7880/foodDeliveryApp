import { render, screen } from "@testing-library/react";
import Header from '../Header';
import { Provider } from "react-redux";
import appStore from '../../const/appStore'
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



it("Should render header component with Home link", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        );

        const link = screen.getByRole('link', {name: 'Home'});

        expect(link).toBeInTheDocument();
})

it("Should render header component with Cart Item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        );

        const cart = screen.getByText(/Cart/);

        expect(cart).toBeInTheDocument();
})