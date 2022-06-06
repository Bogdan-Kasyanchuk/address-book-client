import toast from 'react-hot-toast';

const elementIsEqualAnother = (contacts, name, contactElement) =>
  contacts.some(
    element => element[name].toLowerCase() === contactElement.toLowerCase(),
  );

const elementIsSelfEqual = (contact, name, contactElement) =>
  contact[name].toLowerCase() !== contactElement.toLowerCase();

const existContactCreate = (contacts, { name, phone, email }) => {
  let elementMessage = null;

  if (elementIsEqualAnother(contacts, 'name', name)) {
    elementMessage = name;
  } else if (elementIsEqualAnother(contacts, 'phone', phone)) {
    elementMessage = phone;
  } else if (elementIsEqualAnother(contacts, 'email', email)) {
    elementMessage = email;
  } else {
    return;
  }

  toast(`${elementMessage} is already in contacts`, {
    icon: '⚠️',
  });

  return true;
};

const existContactUpdate = (contact, contacts, { name, phone, email }) => {
  let elementMessage = null;

  if (
    elementIsSelfEqual(contact, 'name', name) &&
    elementIsEqualAnother(contacts, 'name', name)
  ) {
    elementMessage = name;
  } else if (
    elementIsSelfEqual(contact, 'phone', phone) &&
    elementIsEqualAnother(contacts, 'phone', phone)
  ) {
    elementMessage = phone;
  } else if (
    elementIsSelfEqual(contact, 'email', email) &&
    elementIsEqualAnother(contacts, 'email', email)
  ) {
    elementMessage = email;
  } else {
    return;
  }

  toast(`${elementMessage} is already in contacts`, {
    icon: '⚠️',
  });

  return true;
};

export { existContactCreate, existContactUpdate };
