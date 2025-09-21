import React from "react";

function Profile({ name, role, avatarUrl})
{
    return (
        <div className="Profile">
            <img src={avatarUrl} alt={name}/>
            <h3>{role}</h3>
            <p>{name}</p>
        </div>
    );
}

export default Profile;