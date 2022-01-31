import React from 'react';
import UserCard from './UserCard';

const UsersList = ({ persons }) => {
    return (<div style={{ display: "flex", justifyContent: "space-around" }}>
        {persons.map((el, i) => <UserCard user={el} key={i} />)}
    </div>);
};

export default UsersList;
