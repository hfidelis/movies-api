import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

// Middleware 'Coringa' para validar algum tipo de requisição.
export const validate = (req: Request, res: Response, next: NextFunction) => {

    // Array com os erros extraídos do Request.
    const errors = validationResult(req);

    // Caso não exista erro, next function.
    if(errors.isEmpty()) {
        return next();
    };

    // Criando um Array que vai receber objetos com detalhes dos erros contídos no Request.
    const extratecdErrors: Array<object> = [];

    // Populando nosso Array, através de um map no array principal de erros;
    // O Array recebe um objeto com a chave: local do erro, valor: mensagem do erro;
    // O tipo de erro 'field' contém o atributo path, de acordo com a doc. do express-validator.
    errors.array().map(
        err => {
            if (err.type === 'field') { extratecdErrors.push({[err.path]: err.msg}); };
        }
    );

    // 422 - Erro na requisição.
    return res.status(422).json({
        errors: extratecdErrors
    });
};