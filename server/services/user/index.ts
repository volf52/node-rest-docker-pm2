interface User {
    id: number;
    name: string;
    email: string;
}

interface Repo {
    getUsers: () => User[];
}

const sortById = (x: User, y: User) => {
    return x.id - y.id; // better than x.id > y.id
};

export const getUserById = (repository: Repo, id: number) =>
    repository
        .getUsers()
        .filter(user => user.id === id)
        .sort(sortById);

export const insertUser = (repository: Repo, newUser: User) => {
    const userList = [...repository.getUsers(), newUser];

    return userList.sort(sortById);
};

export const updateUser = (repository: Repo, userToUpdate: User) => {
    const userList = [
        ...repository.getUsers().filter(user => user.id !== userToUpdate.id),
        userToUpdate
    ];

    return userList.sort(sortById);
};

export const deleteUserById = (repository: Repo, id: number) =>
    repository
        .getUsers()
        .filter(user => user.id !== id)
        .sort(sortById);

export default {
    getUserById,
    deleteUserById,
    updateUser,
    insertUser
};
