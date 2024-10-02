
# This is Edouard's DBGI daily open-notebook.

Today is 2023.05.15

# To do

# done

# Topics we have to discuss

- How to distinguish wild from cultivated/captive specimens? -> possibility to add this information on the layer name (via the QGIS plugin). So that we can renseign if the layer contains wild or cultivated plants. It is a minimal error way to do it, since whole projects could contain cultivated and wild specimens.
- As clic bot is risky, I created a new account to upload the observations, in case of problems with inat. So that if the account is banned, we don't loose the older plants that were performed manually. But I think that an impersonal account (with dbgi mail for example) could be better.
- The upload of one observation takes approximatively 45 seconds to be performed by the bot. So until approx. 300 observations a day it's totally viable (3 hours and 45 minutes), but more than that will need another bot (not really a problem since we can run another bot with another inat account)
- When and how many times a week do I have to run the code?


# notes

The clic bot for inat is fast ready (It's working on my personal computer, I only need to adapt it to my server settings). I tested multiple configurations, and all seems to work well. I'll make some tests with the real data soon.

To secure the thing, I'll make things as follow:
As the ina import is made with a clic bot, it's not secure. So I'll generate a folder with a copy of the pictures, sorted in folders with the dbgi code. So that each observation has it's own folder. Like that, it's much easier to upload them on inat. And once the observation is submitted, the folder will be deleted. So if the bot is no more working, we will see an accumulation of folders.

On the other side, I'll create another folder with the "original" pictures. This one will be shared on Nextcloud. As an API is much more secure, I'll use this import to secure the pictures removing on the qfieldcloud server.


# code

# links

