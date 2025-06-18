import { fireEvent, screen } from "@testing-library/dom";
import Body from "../Body";
import {  render } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

test("Should render Body Component burger card", () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
 
// const cards=screen.getAllByTestId("resCard");
 const searchBtn=screen.getByRole("button", {name: "Search"});
 const  searchInput=screen.getByTestId("searchInput");
fireEvent.change(searchInput, {target: {value:"coffee"}});
fireEvent.click(searchBtn);
const cards=screen.getAllByTestId("resCard");
expect(cards.length).toBe(5);
//  expect(searchBtn).toBeInTheDocument();
})