# graph-pdf-mail

## installation 
after clone please use these command
> npm i -g nodemon
> npm install

## Google account setup for email
Becouse of google security need to do this for using email service (for nodemailer)
for step to step guide please visit

https://support.google.com/mail/answer/185833?hl=en

## variable

create .env.dev file 
```Must have these variable ```
>PORT 
>EMAIL 
>EMAIL_PASSWORD 
>NODE_ENV 
>TO_MAIL 

```example ```
>PORT = 3000
>EMAIL = 'abc.gmal.com'
>EMAIL_PASSWORD = ' 16- digit app password  , you will get when you genrate app from google account'
>NODE_ENV ='dev'
>TO_MAIL = "abc@gmail.com"  or "abc@gmail.com , mn@gmail.com"


## email trigger 
> to run type npm start run
> visit http://localhost:PORT 
this will genrate report and convert into pdf after that trigger mail.