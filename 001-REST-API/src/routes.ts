import { Express, Response, Request } from "express";
import { createUserHandler } from "@/controllers/user.controller";

function routes(app: Express) {
    app.get("/status", (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    app.post("/api/users", createUserHandler);
}

export default routes;