import { Router } from "express";

import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/authenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

routes.post('/clients', createClientController.handle);
routes.post('/auth', authenticateClientController.handle);

export { routes };
