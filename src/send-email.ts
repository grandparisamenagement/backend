const SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.EMAIL_SENDER_API_KEY

const emailSender = { "name": "GPA Webhook", "email": "contact@classics-challenge.cc" };


export const sendWebhookEmail = () => {

    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.sender = emailSender
    sendSmtpEmail.to = [
        { "email": 'oli.livet@gmail.com', "name": 'Olivier LIVET' },
        { "email": 'jordan.ricker@goingpublic.fr', "name": 'Jordan RICKER' }
    ];
    sendSmtpEmail.subject = `GPA Build Triggered`;
    sendSmtpEmail.htmlContent = "<html><head></head><body><p>Hello,</p><p>Entry update just triggered a build. Have a look soon.</p></body></html>";


    apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data: any) {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }, function (error: any) {
        console.error(error);
    });

}