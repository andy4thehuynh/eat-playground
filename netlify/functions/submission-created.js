const EAT_PLAYGROUND_EMAIL = 'kim@eatplayground.com';
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function (event, context) {
  try {
    body = JSON.parse(event['body'])
    data = body.payload.human_fields

    const text = `
      New form Submitted!

      Name: ${data.Name}
      Email: ${data.Email}
      Phone Number: ${data['Phone Number']}
      Message: ${data.Message}
    `;

    const msg = {
      to: EAT_PLAYGROUND_EMAIL,
      from: 'andy4thehuynh@gmail.com',
      subject: 'New Contact Form Submission',
      text: text,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Successfully sent email',
      })
    }

  } catch (error) {
    console.error('Error sending email:', error);

    return {
      statusCode: 500,
      body: 'Error sending email'
    };
  };
};