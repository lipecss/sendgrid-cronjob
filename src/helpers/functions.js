/**********************
**********************
  Importacoes
**********************
***********************/
// Verificando se o ambiente é de desenvolvimento
exports.nodeEnvIsDevelopment = () => {
  try {
    return process.env.NODE_ENV === "development" ? true : false
  } catch (error) {
    console.log("Error in helper nodeEnvIsDevelopment")
  }
}

// Verificando se o ambiente é de producao
exports.nodeEnvIsProduction = () => {
  try {
    return process.env.NODE_ENV === "production" ? true : false
  } catch (error) {
    console.log("Error in helper nodeEnvIsProduction")
  }
}

// Verificando se o ambiente é de producao
exports.sendEmail = (dev, sgMail) => {
  let msg = {
      to: dev.email,
      from: 'your own email',
      subject: 'test subject',
      templateId: process.env.SENDGRID_TEMPLATE_ID,
      dynamic_template_data: {
          name: dev.name
      },
  }
  
  sgMail.send(msg).then(() => {
    console.log('Email Enviado')
  }).catch((error) => {
      console.log('error', error.body.errors);
  });
}