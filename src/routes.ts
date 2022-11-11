import { Router } from "express";

import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";

import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/authenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/authenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/findAllDeliveries/findAllDeliveriesController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/createDeliveryController";
import { FindAllWithoutEndDateController } from "./modules/deliveries/useCases/findAllWithoutEndDate/findAllWithoutEndDateController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/updateDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllWithoutEndDateController = new FindAllWithoutEndDateController();

// Test server
routes.get('/', (request, response) => {
    return response.json({
        message: 'delivery-backend server is running'
    });
});

// Clients
routes.post('/clients/auth', authenticateClientController.handle);
routes.post('/clients', createClientController.handle);
routes.get(
    '/clients/deliveries',
    ensureAuthenticateClient,
    findAllDeliveriesController.handle
);

// Deliveryman
routes.post('/deliveryman/auth', authenticateDeliverymanController.handle);
routes.post('/deliveryman', createDeliverymanController.handle);

// Deliveries
routes.post('/deliveries', ensureAuthenticateClient, createDeliveryController.handle);
routes.get(
    '/deliveries/available',
    ensureAuthenticateDeliveryman,
    findAllWithoutEndDateController.handle
);
routes.put(
    '/deliveries/updateDeliveryman/:id_delivery',
    ensureAuthenticateDeliveryman,
    updateDeliverymanController.handle
);

export { routes };
