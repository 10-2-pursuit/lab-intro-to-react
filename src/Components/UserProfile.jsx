import pic from "../profile.png";
const UserProfile = () => {
  return (
    <div className="contents container">
      <img src={pic} />
      <div className="userInfo">
        <h1>John Doe</h1>
        <h2>Laborer</h2>
        <p>A hard worker</p>
      </div>
    </div>
  );
};
export default UserProfile;
