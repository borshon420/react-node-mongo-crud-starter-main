import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [users, setUsers] = useState([])
    const {id} = useParams()
    useEffect(()=> {
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>Update User name: {users.name}</h2>
            <p><small>{users._id}</small></p>
        </div>
    );
};

export default UpdateUser;