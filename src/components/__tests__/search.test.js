import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from '../../const/mockResList.json';
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import FakeTimers from '@sinonjs/fake-timers'



global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})
let clock;
beforeEach(() => {
  clock = FakeTimers.install()
})
afterEach(() => {
  clock.uninstall()
})
it('Should render the resCards with search', async () => {
    await act(async () => render(
        <BrowserRouter><Body /></BrowserRouter>
    ))

    const searchBar = screen.getByTestId("searchBar");

    fireEvent.change(searchBar, { target: { value: 'pizza' } });
    await act(() => clock.tick(1000)) // advance the clock by the amount of the debounce

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(3);

    fireEvent.change(searchBar, { target: { value: '' } });
    await act(() => clock.tick(1000)) // advance the clock by the amount of the debounce

    const cardsTotal = screen.getAllByTestId("resCard");

    expect(cardsTotal.length).toBe(20);
})

it('Should filter Top Rated Resturant', async () => {
    await act(async () => render(
        <BrowserRouter><Body /></BrowserRouter>
    ))

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Resturant"});

    fireEvent.click(topRatedBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(8);
})