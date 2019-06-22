import mockAxios from "axios";
import { fetchData } from "./request";

it("should call a fetchData function", done => {
  fetchData("/test", {}).then(response => {
    expect(response).toEqual({
      data: {}
    });
  });
  expect(mockAxios.request).toHaveBeenCalledWith({
    method: "get",
    url: "/test"
  });
  expect(mockAxios.request).toHaveBeenCalledTimes(1);
  expect(consoleErrorSpy).not.toHaveBeenCalled();
  done();
});
