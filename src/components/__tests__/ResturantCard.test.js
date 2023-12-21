import { render, screen } from "@testing-library/react";
import ResturantCard from '../ResturantCard';
import { REST_DATA } from '../../const/rest';
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { withPromotedLabel } from "../ResturantCard";



it('Should render ResturantCard component with props data', () => {
    render(<BrowserRouter><ResturantCard item={REST_DATA[1]} /></BrowserRouter>)

    const cardData = screen.getByText("KFC");

    expect(cardData).toBeInTheDocument();
});

it('Should render ResturantCard component with label', () => {
    const ResturantCardPromoted = withPromotedLabel(ResturantCard);

    render(<BrowserRouter><ResturantCardPromoted item={REST_DATA[1]} key={REST_DATA[1]?.info?.id} /></BrowserRouter>)

    const cardData = screen.getByTestId("promoted");

    expect(cardData).toBeInTheDocument();
});

