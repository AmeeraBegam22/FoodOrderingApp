import Rescard from "../Restaurantcard";
import MOCK_DATA from "../Mocks/resCardmock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
    
it("should render the props of restaurantCard", () => {
    render(<Rescard resData = {MOCK_DATA}/>);

    const Resname = screen.getByText("Sri Gowrikrishna Restaurant");

    expect(Resname).toBeInTheDocument();

});