import { body } from 'express-validator';

export const movieCheckValidation = () => {
    return [
        body("title")
            .isString()
            .withMessage("Title is required!")
            .isLength({min: 3})
            .withMessage("Minimum 3 characters to movie title."),
        body("rating")
            .isNumeric()
            .withMessage("Rating needs to be a number!.")
            .custom((value: number) => {
                if(value < 0 || value > 10) {
                    throw new Error("Rating needs to be between 0 and 10.")
                }
                return true;
            }),
        body("description")
            .isString()
            .withMessage("Description is required!"),
        body("director")
            .isString()
            .withMessage("Movie director is required!"),
        body("poster")
            .isURL()
            .withMessage("Movie poster needs to be an URL!")
    ]
}