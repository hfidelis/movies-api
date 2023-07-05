import morgan, { StreamOptions } from "morgan";
import config from "config";
import Logger from "../../config/logger";

// Definindo a stream de requisições com o Winston, na definição http que foi feita.
const stream: StreamOptions = {
    write: (message) => Logger.http(message)
};

// Definindo quando será feita a stream, no caso apenas em ambiente de dev.
const skip = () => {
    const env = config.get<string>("env") || "development"
    return env !== "development"
};

// Instanciando o middleware com nosso setup e o padrão de mensagens.
const morganMiddleware = morgan(
    ":method :url :status :res[content-length] - :response-time ms",
    { stream, skip }
);

export default morganMiddleware;