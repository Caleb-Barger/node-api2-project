const users = [
    {
        id: 0,
        name: "Caleb",
        age: 18
    },
    {
        id: 1,
        name: "Caryss",
        age: 12
    }
];

const getUsers = () => users;

const getUsersById = id => {
    const user = getUsers().find(u => u.id == id );
    return user;
}

const addUser = newUser => {
    getUsers().push(newUser);
}

module.exports = {
    users,
    getUsers,
    getUsersById,
    addUser
};
