# This is Edouard's DBGI daily open-notebook.

Today is 2024.08.27

Working on the EMI lab/tracking/logistic android application. Here are some ideas about how to implement this application better:

- Centralized authentication: It would be good to have only one singleton that connects to directus and gives the token back to different activities instead of reconnecting again and again in each activity when token is no more valid
- Ask permission not at the opening of the app but only when people need to use services that require these permissions
- Ask to activate bluetooth and location only when needed
- More versatile printer connection to use it even between activities and asks for reconnection when connection lost
- Make old codes for containers still usable to avoid pasting labels again
- Maybe find a solution to change the instance URL in the app in order to adapt to other instances without updating the application
- Make a mode that can generate samples afterwards in order to enter samples extracted without the app
- Provide a solution to print container labels using the connected printer instead of already printed labels