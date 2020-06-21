import boto3
from botocore.exceptions import ClientError

SENDER = "ar.anjomshoaa@gmail.com"

def sendEmail(message,name,email):
    RECIPIENT = email
    AWS_REGION = "us-west-2"
    SUBJECT = name
    BODY_TEXT = message
    
    BODY_HTML = '''<html>
    <head></head>
    <body>
    {0}
    </body>
    </html>
    '''.format(BODY_TEXT)
    # The character encoding for the email.
    CHARSET = "UTF-8"
    
    # Create a new SES resource and specify a region.
    client = boto3.client('ses',region_name=AWS_REGION)
    
    # Try to send the email.
    try:
        #Provide the contents of the email.
        response = client.send_email(
            Destination={
                'ToAddresses': [
                    RECIPIENT,
                ],
            },
            Message={
                'Body': {
                    'Html': {
                        'Charset': CHARSET,
                        'Data': BODY_HTML,
                    },
                    'Text': {
                        'Charset': CHARSET,
                        'Data': BODY_TEXT,
                    },
                },
                'Subject': {
                    'Charset': CHARSET,
                    'Data': SUBJECT,
                },
            },
            Source=SENDER,
        )
    # Display an error if something goes wrong.	
    except ClientError as e:
        raise Exception("Email sent! Message ID:"),
    else:
        return("Email sent! Message ID:")
