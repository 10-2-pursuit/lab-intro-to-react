import ContactUserCard from "./ContactUserCard";
const Contacts = () => {
  return (
    <div className="container">
      <h2>Contacts</h2>
      <ul>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </ul>
    </div>
  );
};
export default Contacts;
