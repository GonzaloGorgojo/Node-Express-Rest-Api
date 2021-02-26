import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
    const newUser = req.body;

    users.push({ ...newUser, id: uuidv4() });

    res.send("User Was Added to the Database");
};

export const getUsers = (req, res) => {
    res.send(users);
};

export const getUserByID = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((newUser) => newUser.id === id);
    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((newUser) => newUser.id !== id);

    res.send(`user With ID:${id} Deleted`);
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstname, lasName, age } = req.body;

    const userToUpdate = users.find((newUser) => newUser.id === id);

    if (age) {
        userToUpdate.age = age;
    }
    if (firstname) {
        userToUpdate.firstname = firstname;
    }
    if (lasName) {
        userToUpdate.lasName = lasName;
    }
    res.send("User Updated");
};
