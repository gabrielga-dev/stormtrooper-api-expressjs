import {Router} from 'express';
import stormtrooperRoutes from "./StormtrooperRoutes.js";

import passport from 'passport'
import {BasicStrategy} from 'passport-http'

const basicStrategyVerification = new BasicStrategy(
    (username, password, done) => {
        if (username.valueOf() === 'rebels' && password.valueOf() === '1138') {
            return done(null, true)
        }
        return done(null, false)
    }, null
);

const basicMiddleware = passport.authenticate('basic', {session: false})

const routes = new Router();
routes.use(passport.initialize());
passport.use(basicStrategyVerification);

routes.use('/stormtroopers', basicMiddleware, stormtrooperRoutes);

export default routes;