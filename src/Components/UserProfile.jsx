import ProfilePicture from '../profile.png'

const UserProfile = () => {
    return (
        <div>
            
            <img src={ ProfilePicture } alt='' ></img>
            <h1>Jack Brown</h1>
            <h3>Software Engineer</h3>
            <p> lorem Ipsum</p>
            
        </div>
    );
}

export default UserProfile;