const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const port = process.env.APP_PORT

export default {
    appPort: port,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@hfidelis-api-rest.cvmr4ps.mongodb.net/hfidelisDB?retryWrites=true&w=majority`,
    env: "development"
};
