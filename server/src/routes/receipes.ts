import {Request, ResponseToolkit, ServerRoute} from "@hapi/hapi";
import {getAllReceipes, getReceipeById} from "../controller/Receipes";

export const getAll: ServerRoute = {
  path: "/receipes",
  method: "GET",
  handler: (req: Request, h: ResponseToolkit) => {
    return h.response(getAllReceipes()).code(200);
  }
}

export const getOne: ServerRoute = {
  path: "/receipes/{id}",
  method: "GET",
  handler: function (req:Request, h: ResponseToolkit) {
    return h.response(getReceipeById(+req.params.id)).code(200);
  }
}
