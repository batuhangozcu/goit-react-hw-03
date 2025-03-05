import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </ul>
  );
};

export default ContactList;
