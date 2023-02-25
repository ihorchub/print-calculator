import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { GlobalStyle } from './GlobalStyles';
import { ContactsWrapper, Title, Wrapper } from './App.styled';
import { exempleContacts } from 'helpers/exempleContacts';
import { getContactsFromLocalStorage } from 'helpers/getLocalContacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => getContactsFromLocalStorage() ?? exempleContacts
  );

  const [filter, setFilter] = useState('');

  useEffect(
    () => window.localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const formSubmitHandler = data => {
    const newContact = { id: nanoid(), ...data };

    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contacts.`)
      : setContacts(prevState => [newContact, ...prevState]);
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id =>
    setContacts(prevState => prevState.filter(contact => contact.id !== id));

  return (
    <>
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm formSubmit={formSubmitHandler} />

        <ContactsWrapper>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contactList={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        </ContactsWrapper>
      </Wrapper>
      <GlobalStyle />
    </>
  );
};
