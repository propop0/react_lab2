import React from "react";

function Profile({ name, role, avatarUrl})
{
    return (
        <div className="Profile">
            <img src={avatarUrl} alt={name}/>
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
}

export default Profile;