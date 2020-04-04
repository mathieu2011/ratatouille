import pingRoute from "./ping";
import { ServerRoute } from "@hapi/hapi";
import { getAll, getOne } from "./receipes";

const routes: ServerRoute[] = [
  pingRoute,
  getAll,
  getOne
];

export default routes;
