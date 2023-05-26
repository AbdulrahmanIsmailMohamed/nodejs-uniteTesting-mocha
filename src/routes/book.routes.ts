import { NextFunction, Request, Response, Router } from "express";

const router: Router = Router();

const books = [
    {
        id: 1,
        name: "my life is big lie",
        price: 1500,
        count: 1
    },
    {
        id: 2,
        name: "rules",
        price: 2000,
        count: 10
    },
    {
        id: 3,
        name: "some pepole in this life are lies",
        price: 3000,
        count: 2
    }
]

router.get("/books", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(books)
})

export default router