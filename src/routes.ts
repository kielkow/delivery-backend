import { Router } from "express";

import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/authenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.get('/', (request, response) => {
    return response.json({
        message: 'delivery-backend server is running'
    });
});

routes.post('/auth', authenticateClientController.handle);

routes.post('/clients', createClientController.handle);

routes.post('/deliveryman', createDeliverymanController.handle);

export { routes };
