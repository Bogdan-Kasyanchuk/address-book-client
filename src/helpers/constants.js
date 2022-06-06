const TITLE_FORM = {
  NAME: "Name may contain only letters, apostrophe, dash and spaces. For example: Adrian, Jacob Mercer, Charles de Batz, de Castelmore, d'Artagnan, Van-Dame",
  PHONE:
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. For example: +38(033)-111-11-11, 033-111-11-11',
  EMAIL:
    'Email can contain numbers and letters, dashes and under dashes. For example: pibij62253@mail.com, pSDi-j62_2@mail.com',
  ADDRES: 'Аddress can contain any numbers, letters and characters',
  OTHER: 'Other can contain any numbers, letters and characters',
  PASSWORD:
    'The password must be digits and letters and capital letters and special characters. For example: bg2H3p@gR8',
};

const LIMIT = {
  NAME_MIN: 3,
  PASSWORD_MIN: 8,
  PHONE_MIN: 10,
};

module.exports = {
  TITLE_FORM,
  LIMIT,
};
