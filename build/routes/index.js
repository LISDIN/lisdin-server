"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import userRouter from './users'
// import restaurantRouter from './restaurants'
// import authRouter from './auth'
const routers = [
// { route: 'user', router: userRouter },
// { route: 'restaurants', router: restaurantRouter },
// { route: 'auth', router: authRouter },
];
const configRoutes = (app) => {
    for (const e of routers)
        app.use(`/api/${e.route}`, e.router);
};
exports.default = configRoutes;
