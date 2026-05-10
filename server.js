require("dotenv").config();

const express = require("express");
const cron = require("node-cron");

const sendMail = require("./services/mailService");
const supabase = require("./supabaseClient");

const app = express();

app.use(express.json());

cron.schedule("* * * * *", async () => {

  const recipient = "test@gmail.com";
  const subject = "Automated Email";
  const message = "Hello from Supabase Email Automation";

  try {

    await sendMail(recipient, subject, message);

    await supabase
      .from("email_logs")
      .insert([
        {
          recipient,
          subject,
          message,
          status: "Sent"
        }
      ]);

    console.log("Email Sent");

  } catch (error) {

    await supabase
      .from("email_logs")
      .insert([
        {
          recipient,
          subject,
          message,
          status: "Failed"
        }
      ]);

    console.log(error);
  }

});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});