# From Challenge Main Directory
**Software Engineer Interview Challenge**
MK Decision
## Table of contents

- [Project Description](#project-description)
- [Project Requirments](#project-requirments)
- [File Structure](#file-structure)

## Project Description

Build a website contact form. The form should contain fields for Name, Email and
message at a minimum. Upon submit, the form should send the message to the email
provided in the form, with the name as the email subject.

## Project Requirements
| Task                                                                                          | Pass/Fail |
|-----------------------------------------------------------------------------------------------|-----------|
| Set up a free account with Amazon Web Services (AWS)                                          | Pass      |
| Using Material UI, Build a form (name, email, message, submit button).hosted in an S3 bucket. | Pass      |
| On submit, the UI should call API Gateway to trigger a Lambda function.                       | Pass      |
| The Lambda function should send an email using SES, and store the message in DynamoDB         | Pass      |
| Push your code to a public GitHub repository.                                                 | Pass      |
| Respond to this email with your application’s URL, credentials and GitHub link.               | Pass      |

## File Structure
1) **Backend-Lambda**: Back end directory and files for AWS Lambda Function (Python)
2) **Frontend-ReactJs**: Front end directory (Javascript)
