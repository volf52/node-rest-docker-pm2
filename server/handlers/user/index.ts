import userService from "../../services/user";
import repository from "../../repository/user-mock-repository";
import logger from "../../utils/logger";
import User from "../../models/user";
import { RequestHandler } from "express";

// GET
const getUserById: RequestHandler = (req, resp) => {
    try {
        const users = userService.getUserById(
            repository,
            parseInt(req.params.id)
        );
        logger.info("User Retrieved");
        resp.status(200).json({ users });
    } catch (err) {
        logger.error(err.message);
        resp.status(500).json({ msg: err.msg });
    }
};

// POST
const insertUser: RequestHandler = (req, resp) => {
    try {
        const user = User(req.body.id, req.body.name, req.body.email);
        const users = userService.insertUser(repository, user);
        logger.info("User inserted");
        resp.status(200).json({ users });
    } catch (err) {
        logger.error(err.message);
        resp.status(500).json({ msg: err.msg });
    }
};

// PUT
const updateUser: RequestHandler = (req, resp) => {
    try {
        const user = User(req.body.id, req.body.name, req.body.email);
        const users = userService.updateUser(repository, user);
        logger.info("User updated");
        resp.status(200).json({ users });
    } catch (err) {
        logger.error(err.message);
        resp.status(500).json({ msg: err.msg });
    }
};

// DELETE
const deleteUserById: RequestHandler = (req, resp) => {
    try {
        const users = userService.deleteUserById(
            repository,
            parseInt(req.params.id)
        );
        logger.info("User deleted");
        resp.status(200).json({ users });
    } catch (err) {
        logger.error(err.message);
        resp.status(500).json({ msg: err.msg });
    }
};

export default {
    getUserById,
    insertUser,
    updateUser,
    deleteUserById
};
