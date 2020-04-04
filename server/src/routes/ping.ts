import {Request, ResponseToolkit, ServerRoute} from "@hapi/hapi";

const pingRoute: ServerRoute = {
    path: "/ping",
    method: "GET",
    handler: function (req:Request, h: ResponseToolkit) {
      return h.response("pong").code(200);
    }
}

export default pingRoute;
