import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import ContactsAPI from '../utils/ContactsAPI';

// store all of actions
export default{
  recieveContacts: () => {
    ContactsAPI
      .getContacts('https://jsonplaceholder.typicode.com/users') // takes in the URL
      .then(contacts => { // promise
        AppDispatcher.dispatch({
          actionType: AppConstants.RECEIVE_CONTACTS, // create action
          contacts: contacts
        }); // return contacts
      })
      .catch(message => { // catch any errors
        AppDispatcher.dispatch({
          actionType: AppConstants.RECEIVE_CONTACTS_ERROR,
          message: message
        });
      });
  }
}
