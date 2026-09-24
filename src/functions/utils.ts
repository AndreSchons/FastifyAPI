import { DefineRouteHandler } from "#settings/type.js";
import { FastifyInstance } from "fastify";

export function defineRoutes(handler: DefineRouteHandler) {
    return function(app:FastifyInstance, _: {}, done: Function) {
        handler(app);
        done();
    }
}