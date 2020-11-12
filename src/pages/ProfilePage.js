import React from 'react';
import './ProfilePage.css';

const ProfilePage = ({handleLogout}) => {
    return(
        <section className="Signout">
        <button onClick={handleLogout} className="button"> Logout</button>
        </section>
        );
};

export default ProfilePage;