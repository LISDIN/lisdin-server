import {CognitoExpress} from 'cognito-express'
import { Request, Response, NextFunction } from 'express';
import { areValidStrings } from '../utils/errors';

const cognitoExpress = new CognitoExpress({
  region: "us-east-1",
  cognitoUserPoolId: process.env.COGNITO_USER_POOL_ID,
  tokenUse: "access",
  tokenExpiration: 3600000
});

export const ensureAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  const { authToken } = req.headers
  try {
    areValidStrings({ authToken })
  } catch (err) {
    res.status(401).send(String(err))
  }

  cognitoExpress.validate(authToken, (err: any, authRes: any) => {
    if (err)
      console.log('AUTH ERROR', err)
    else {
      console.log('AUTHRES', authRes)
      next()
    }
  })
}
