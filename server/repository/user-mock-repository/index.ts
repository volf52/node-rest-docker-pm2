import User from "../../models/user";

const mockedUserList = [
    User(1, "John Smith", "john.smith@email.com"),
    User(2, "Daniel Ackles", "daniel.ackles@email.com"),
    User(3, "Phill Damon", "phill.damon@email.com")
];

export const getUsers = () => mockedUserList;

export default {
    getUsers
};
