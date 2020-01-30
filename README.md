# CRON JOB 

Este é um microserviço de agendamento de tarefas. Apriori iremos utiliza-los para automatizar os envios de emails de aniversário para os usuários cadastrados em nossa plataforma. Ele utilizará, por meio de consutlas HTTP (axios) endpoints de noss API para a consulta e manipulação dos dados. 

## Estilo de Programação do CRON

Esse é o padrão para monstrare um **Schedules** nas bibliotecas de cron. Sei conceito é bem intuitivo e fácil de comprender.

![](https://i.imgur.com/kg9hzDa.png)


## Regras ao JOB

Podemos também passar regreas, enquanto o aplicativo estiver em execução, ele será acionado. Aqui ele eserá executado todo dias as 12:30PM :

    var rule = new schedule.RecurrenceRule();
          rule.dayOfWeek = [new schedule.Range(0, 6)];
          rule.hour = 12;
          rule.minute = 30;
    
