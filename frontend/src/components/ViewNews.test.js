import React from "react";
import { shallow } from "enzyme";
import ViewNews from "./ViewNews";
import axios from "axios";

jest.mock("axios");

describe("View News component", () => {
  describe("when rendered", () => {
    it("should fetch a list of tasks", () => {
      const getSpy = jest.spyOn(axios, "get");
      const viewNewsInstance = shallow(<ViewNews />);
      expect(getSpy).toBeCalled();
    });
  });
});
