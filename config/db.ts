import mongoose from "mongoose";
import config from "config";
import Logger from "../config/logger"

async function connect() {
    
    const dbUri = config.get<string>("dbUri");

    try {
        
        await mongoose.connect(dbUri);
        Logger.info("Connected with Database.");

    } catch (err: any) {

        Logger.error("Error while trying to connect with Database.");
        Logger.error(`Error ${err.name}: ${err.message}`);
        // Encerrando a aplicação caso ocorra erro de conexão.
        process.exit(1)
    };

};

export default connect;
