# From Challenge Back End Directory

A lambda function hosted on AWS, the function is an **Api Gateway**, which activates upon 
the call and would save the incoming data into dynamodb database. It also uses Simple Email Service 
provided by AWS to send email.

[Api EndPoint / POST](https://4d4nlf2g7k.execute-api.us-east-2.amazonaws.com/test/form)

## Table of contents

- [Project Description](#project-description)
- [Built With](#built-with)

## Project Description

Upon submit, the form should send message to the email
provided in the form, with the name as the email subject. Add the information into the database also.

## Built With

- [Python](https://python.org) - Programming Language
- [AWS-Lambda](https://aws.amazon.com/lambda/) - Event-driven, Serverless computing platform
- [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html) - Boto is the Amazon Web Services
- [Simple-Email-Service](https://aws.amazon.com/ses/) - Cloud-Based Email Sending Service
- [VS Code](https://code.visualstudio.com) - Code Editor


