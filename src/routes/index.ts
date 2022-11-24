import { Express, Router } from 'express'
import usersRouter from './users'
// import restaurantRouter from './restaurants'
// import authRouter from './auth'

const routers: Array<{
  route: string
  router: Router
}> = [
  { route: 'users', router: usersRouter },
  // { route: 'restaurants', router: restaurantRouter },
  // { route: 'auth', router: authRouter },
]

const configRoutes = (app: Express) => {
  for (const e of routers) app.use(`/api/${e.route}`, e.router)
}

export default configRoutes
