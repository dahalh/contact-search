import axios from "axios";

const rootUrlAPI = "https://jsonplaceholder.typicode.com/users";

const apiProcessor = async ({ method, url }) => {
  try {
    const { data } = await axios({
      method,
      url,
    });
    return data;
  } catch (error) {
    let message = error.message;
    console.log(message);
  }
};

export const getAllContacts = () => {
  const url = rootUrlAPI;
  return apiProcessor({ method: "get", url });
};
