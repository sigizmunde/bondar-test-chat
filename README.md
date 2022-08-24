# Test Chat

This project is a test task for a front-end internship appliance

It is created with [Create React App](https://github.com/facebook/create-react-app).

## General info

This app is a chat simulation with a fixed set of contacts. You may write messages and get answers on them. Answers is being generated by [Chuck Norris API](https://api.chucknorris.io/) (one thing you need to know — while testing this app there were few moments of server silence — that's because despite rumors Chuck Norris is a human and sometimes needs a rest).

There is a search feature which looks through contact names and message texts for a search string fragment. Search is driven by state tuple [filter, setFilter], which is passed with useContext hook.

Application features signing-in with Google accounts. It uses user's email address as an ID to store messaging data. No other user data is being stored.
You may also use this app without logging in — your messages will still be stored as messages of a test user.

Application markup is responsive — it is functional on both desktop and mobile.

## Storage

Application uses Redux. Operates local storage wia [redux-persist](https://www.npmjs.com/package/redux-persist).
User's data also is being saved to Firebase/Firestore database on every data update and is being loaded each time the user signs in.

I use asynchronous Redux for authentication and database reading, other asynchronous code is written in Redux custom middleware functions.

## Data format

The main data is stored in two arrays — contacts and messages

```
contacts: {
    items: [
        {
            id: string,
            name: string,
            avatar: string,
            online: bool
        }
        ...
    ]
}

messages: {
    items: [
        {
            datetime: UTC-string,
            contact_id: string,
            text: string,
            incoming: bool
        }
        ...
    ]
}
```

— as long as messages have no unique id's the identificator for messages.items entry is a composite key of datetime and contact_id fields. I decided not to use id generator because composition of these two values will always be unique in my case.

## loopholes

There are two simplifications made in this demo application

1. Firebase/Firestore is used for duplicating user messaging data on every update and storing it till the next time the user will log in. This means, if the user is logged on several instances of the app, every instance will overwrite the database independently. The instance of data with the latest message will be stored, other instances will lose their data after shutting down.

2. Firestore is being operated in a test mode. This means it is opened to read and write data without applying any user authentication policy. Though users authenticate inside the app with Google tokens, the tokens are being stored in the app but don't apply on writing to database.

## contact information

You may write me on [email](mailto:illya.bondar.ukraine@gmail.com) or via [Telegram](https://t.me/iliyabinocular)
