import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({
        message: 'delivery-backend server is running'
    });
});

app.listen(3000, () => console.log('server is running'));
