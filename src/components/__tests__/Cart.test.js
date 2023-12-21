import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Cart from '../Cart';
import Header from '../Header';
import { Provider } from "react-redux";
import appStore from '../../const/appStore';
import MOCK_DETAIL from '../../const/mockRestDetail.json';
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import ResturantMenu from "../ResturantMenu";




global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DETAIL)
        }
    })
})

it('Should add products into cart', async () => {
    await act(async () => render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
                <ResturantMenu />
                <Cart />
            </BrowserRouter>
        </Provider>
    ))

    const section = screen.getByText("Soup (6)");

    fireEvent.click(section);

    expect(screen.getAllByTestId('fooditems').length).toBe(6);

    const buttons = screen.getAllByRole("button", {name: "ADD +"})

    fireEvent.click(buttons[0])

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId('fooditems').length).toBe(7);

    const clearBtn = screen.getByText('Clear Cart');

    fireEvent.click(clearBtn);

    expect(screen.getByText("No food found!")).toBeInTheDocument();

})