

# This is PMA's DBGI daily open-notebook.

Today is 2024.02.29

## Todo today

### Have a look at the DBGI discussion forum
    - https://github.com/orgs/digital-botanical-gardens-initiative/discussions
###
###

## Doing

## Paused

## Done

## Notes


CSS and SASS

Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. It provides mechanisms such as variables, nesting, and mixins, making it easier to create and maintain CSS.

Classes are prefixed by a dot (.) and IDs are prefixed by a hash (#).



The websocket is a communication protocol that makes it possible to establish a two-way communication channel between a server and a client. It is a protocol that operates over TCP, and it is at the same time simple and efficient. It is used to create a real-time web application, such as a chat application or a live feed.

When you have such a thing, you might want to specify its configuration in the NGINX file. This is done by adding a location block to the server block such as :

```
location /ws {
    proxy_pass http://backend;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

This block tells NGINX to proxy all requests to the /ws location to the backend server. It also sets the Upgrade and Connection headers to upgrade the connection to a WebSocket connection.

Strangely enough this blocked the cookies (on Firefox)

## Todo tomorrow, one day ... or never

###
###
###


## Today I learned that

- https://experiment.com/ is a platform for crowdfunding of Scientific project.

We are thinking of mounting one of such project to fund Marco in the next 6 monthes and finalize the work on anticipated LOTUS.

AI for Interspecies Communication https://experiment.com/programs/interspecies

We also discovered about the https://www.earthspecies.org/




