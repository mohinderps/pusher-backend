const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1737194",
  key: "c424110afb2be5e5edf0",
  secret: "aa7bf5a2c9746e8bd0c4",
  cluster: "ap2",
  useTLS: true,
});

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/message", (req, res) => {
  const { channelName, eventName, eventData = {} } = req.body;

  pusher.trigger(channelName, eventName, eventData);

  res.end();
});

const port = 3001;
app.listen(port);
