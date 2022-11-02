import { Router } from "express";

import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/authenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/authenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();

const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();

// Test server
routes.get('/', (request, response) => {
    return response.json({
        message: 'delivery-backend server is running'
    });
});

// Clients
routes.post('/clients/auth', authenticateClientController.handle);
routes.post('/clients', createClientController.handle);

// Deliveryman
routes.post('/deliveryman/auth', authenticateDeliverymanController.handle);
routes.post('/deliveryman', createDeliverymanController.handle);

export { routes };
