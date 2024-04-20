const { getArticles } = require('../gemini/getArticles');
const {welcomeEmail} = require('../utils/welcomeEmail')
const {Email } = require('../utils/Email')

const email = new Email(process.env.SMTP_SERVICE,process.env.SMTP_EMAIL,process.env.SMTP_PASSWORD);

async function sendWelcomeEmail(emailId,score,analysis,keywords){
    try {
        if(!emailId || !score || !analysis || !keywords){
            return;
        }

        const articles = await getArticles(keywords)

        
        const EmailToSend = welcomeEmail(score,analysis,articles)
        const emailSent = await email.sendEmail(emailId,EmailToSend)
        if(emailSent){
        }
        else{
        }
    } catch (error) {
    }
}

module.exports = {sendWelcomeEmail}