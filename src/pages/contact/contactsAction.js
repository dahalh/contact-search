import { setContacts } from "./contactsSlice";
import { getAllContacts } from "../../helpers/axiosHelpers";

export const fetchContactsAction = () => async (dispatch) => {
  const allContacts = await getAllContacts();
  dispatch(setContacts(allContacts));
};
