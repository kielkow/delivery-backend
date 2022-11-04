import { Router } from "express";

import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";

import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/authenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/authenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/createDeliveryController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();

const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();

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

// Deliveries
routes.post('/deliveries', ensureAuthenticateClient, createDeliveryController.handle);

export { routes };
