const express = require('express');
const { WebPubSubServiceClient } = require('@azure/web-pubsub');
const port = 3200;
const app = express();
const hubName = "chatbox";

let serviceClient = new WebPubSubServiceClient(process.env.WebPubSubConnectionString, hubName);

app.get('/test', (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.send({data: 'Hello World'});
});

app.get('/nego', async(req, res) => {
    let id = req.query.id;
    if(!id) {
        res.status(400)
            .send('missing user id');
        return;
    }
    let token = await serviceClient.getClientAccessToken({ userId: id });
    res.json({url:token.url})
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})