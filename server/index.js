const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const PORT = process.env.PORT || 8000;

app.use(jsonParser);
app.use(cors());

app.get('/', (_, res) => {
  res.send('Portfolio server running');
});

app.post("/verify-token", async (req, res) => {
  const { reCAPTCHA_TOKEN, Secret_Key } = req.body;

  try {
    let response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${Secret_Key}&response=${reCAPTCHA_TOKEN}`);

    return res.status(200).json({
      success: true,
      message: "Token successfully verified",
      verificationInfo: response.data,
    });
  } catch(err) {
    return res.status(500).json({
      success: false,
      message: "Error verifying token",
    });
  }
});

app.listen(PORT, () => console.log(`App started on port ${PORT}`));
