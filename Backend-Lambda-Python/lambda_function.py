import json
import boto3
import uuid 
from email import sendEmail

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('USERS')

def lambda_handler(event, context):
    try:
        # Calls the function for sending the email
        sendEmail(event['message'],event['name'],event['email'])
        
        # Data entry for dynamodb
        table.put_item(Item=event)
        return {"code": 200, "message": "User Created and Email Sent"}
    except:
        return {"code": 400, "message": "Bad Request" }
