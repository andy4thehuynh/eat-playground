exports.handler = async function (event, context) {
  // 1. Set sendgrid api key in an env
  // 2. Get email body to print properly from data object
  // 3. Verify it is sent in SendGrid
  const EAT_PLAYGROUND_EMAIL = "andy4thehuynh@gmail.com";

  console.log("HITS event")
  console.log(event);

  console.log("HITS BODy")
  body = JSON.parse(event['body'])
  data = body.payload.human_fields
  console.log(data.Name)

  const sendNotificationEmail = async ({ data }) => {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(SENDGRID_API_KEY);

    var text = `
      THIS IS THE NAME: 
      ${data.Name}
      THIS IS THE email: 
      ${data.Email}
    `.trim()

    return text;


    // const msg = {
    //   to: EAT_PLAYGROUND_EMAIL,
    //   from: 'andy4thehuynh@gmail.com',
    //   subject: 'New form submission for Eat Playground',
    //   text: text,
    // };

    // sgMail
    //   .send(msg)
    //   .then(() => {
    //     console.log('Email sent')
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   });
  };
  console.log("EMAIL MESSAGE")
  console.log(sendNotificationEmail(data));
  // const formData = require("form-data");
  // const Mailgun = require("mailgun.js");

  // const sendThankYouEmail = async ({ email }) => {
  //   console.log('Sending the email');
  //   const { MG_API_KEY: apiKey, MG_DOMAIN: domain } = process.env;
  //   const mailgun = new Mailgun(formData).client({
  //     username: 'api',
  //     key: apiKey,
  //   });

  //   const mailData = {
  //     from: `Stefan Judis stefan@${domain}`,
  //     to: email,
  //     subject: 'Thank you for your interest',
  //     text: "I'll come back to you asap!",
  //   };

  //   await mailgun.messages.create(domain, mailData);
  // };

  // exports.handler = async (event, context) => {
  //   try {
  //     const data = JSON.parse(event.body);

  //     await sendThankYouEmail(data);

  //     return {
  //       statusCode: 200,
  //       body: JSON.stringify({
  //         message: "Let's become serverless conductors!!!",
  //       }),
  //     };
  //   } catch (error) {
  //     console.log(error);
  //     return {
  //       statusCode: 500,
  //       body: JSON.stringify({ error: 'Failed sending email' }),
  //     };
  //   }
  // };
};