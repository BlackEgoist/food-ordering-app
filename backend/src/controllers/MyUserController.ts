import {Request, Response} from "express";
import User from "../models/User";

const getCurrentUser = async (req: Request, res: Response) => {
    try {
        const currentUser = await User.findOne({_id: req.userId})

        if(!currentUser) {
            return res.status(404).json({message: "User not found"});
        }

        res.json(currentUser);

    } catch(e) {
        console.log(e);
        return res.status(500).json({message: "Cannot get user info"});
    }
}

const createCurrentUser = async (req: Request, res: Response) => {

    try {
        const { auth0Id } = req.body;
        //check if the user exists
        const existingUser = await User.findOne({ auth0Id });
        if (existingUser) {
            return res.status(200).send();
        }

        //create a new user if it doesn't exist
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser.toObject());

    } catch (e) {
        console.log(e);
        res.status(500).json({message: "Error creating user"});
    }
};

const updateCurrentUser = async (req: Request, res: Response) => {

    try {
        const { name, addressLine1, country, city } = req.body;
        const user = await User.findById(req.userId);

        //check if the user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        //update user info
        user.name = name;
        user.addressLine1 = addressLine1;
        user.city = city;
        user.country = country;

        await user.save();

        res.send(user);

    } catch (e) {
        console.log(e);
        res.status(500).json({message: "Error updating user info"});
    }
};

export default {
    getCurrentUser,
    createCurrentUser,
    updateCurrentUser,
};