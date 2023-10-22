import { Express, Response, Request } from "express";

function routes(app: Express) {
    app.get("/status", (req: Request, res: Response) => {
        res.sendStatus(200);
    });
}

export default routes;