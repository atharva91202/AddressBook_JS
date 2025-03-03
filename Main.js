const Contact = require('./Contact.js');
const AddressBook = require('./AddressBook.js');

let myAddressBook = new AddressBook();

try {
    let contact1 = new Contact("John", "Doe", "123 Street", "NewYork", "NewYork", "123456", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    let contact2 = new Contact("Jane", "Smith", "456 Avenue", "LosAngeles", "California", "789012", "8765432109", "jane.smith@example.com");
    myAddressBook.addContact(contact2);
    // Trying to add a duplicate contact
    let contact3 = new Contact("Alice", "Johnson", "789 Road", "NewYork", "NewYork", "654321", "9123456789", "alice.johnson@example.com");
         myAddressBook.addContact(contact3);
} catch (error) {
    console.error(error.message);
}


console.log("\nViewing Contacts by City and State:");
myAddressBook.viewPersonsByCityOrState();
