import {InvalidStormtrooperId} from "../dto/exceptions/stormtrooper/InvalidStormtrooperId.js";

const verifyId = (req, res, next) => {
    if (!/^[0-9a-fA-F]{24}$/.test(req.params.id)) {
        throw new InvalidStormtrooperId()
    }
    next()
}

export default verifyId;