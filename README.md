# CRON JOB 

Este é um micro serviço de agendamento de tarefas. A priori iremos utiliza-los para automatizar os envios de emails de aniversário para os usuários cadastrados em nossa plataforma. Ele utilizará, por meio de consutlas HTTP (axios) endpoints de noss API para a consulta e manipulação dos dados.

## Estilo de Programação do CRON

Esse é o padrão para mostrar um **Schedules** nas bibliotecas de cron. Seu conceito é bem intuitivo e fácil de compreender.

![](https://i.imgur.com/kg9hzDa.png)


## Regras ao JOB

Podemos também passar regras, enquanto o aplicativo estiver em execução, ele será acionado. Aqui ele será executado todo dias as 07:00AM :

    var rule = new schedule.RecurrenceRule();
          rule.dayOfWeek = [new schedule.Range(0, 6)];
          rule.hour = 07;
          rule.minute = 0;
    
## SCRIPTS

**start:** Rodar projeto na produção lendo o diretório 'buildado' com o script build.

**dev:** Rodar o projeto localmente com o Nodemon.


## **VARIÁVEIS DE AMBIENTE**
```
SENDGRID_API_KEY=
SENDGRID_TEMPLATE_ID=
```

- SENDGRID_API_KEY: Chave secreta fornecida pelo SendGrid 
- SENDGRID_TEMPLATE_ID: Chave do template criado no projeto.

## **COMO UTILIZAR?**

Nesse projeto estamos enviando modelos transacionais dinâmicos, ou seja, teremos um template com dados dinâmicos sendo enviados. Caso tenha alguma dúvida, [clique aqui](https://sendgrid.com/blog/how-to-use-sendgrids-dynamic-templates-for-your-transactional-emails/ "clique aqui") para saber como criar seus Templates e de seu funcionamento. 

![](https://i.imgur.com/iuqtzAZ.png)

Lembre-se de editar no arquivo **function.js** as informações da função do [Sengrid](https://sendgrid.com/docs/for-developers/sending-email/v3-nodejs-code-example/ "Sengrid") de envio de e-mail, passando seus dados conforme a documentação da API solicita:

***from*** : Email de quem está enviando - *string*

***subject*** : Assunto da mensagem - *string*

**dynamic_template_data** : Local onde você informa as substituições do seu e-mail. - *JSON*

![](https://i.imgur.com/I0Gbbvr.png)

- O valor aqui passado vem dos dados de usuários 'mockado', no arquivo **users.js**,dados dinâmicos.
