import express from 'express';
import { sendWebhookEmail } from './send-email'

var router = express.Router();


var app = express();
app.use(express.json());

app.get('/', function (req, res) {
    sendWebhookEmail();
    res.send('Hello World!');
});

app.use('/v1', router);

export default app;