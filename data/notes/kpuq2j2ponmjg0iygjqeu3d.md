

# This is Luca Cappelletti's DBGI daily open-notebook.

## How to manually update the HTTPS certificates 

Due to the current limitations in automating the renovation of the [Certbot certificate renewal](https://certbot.eff.org/) caused by the [Palo Alto Firewall](https://community.letsencrypt.org/t/palo-alto-firewall-users-with-failing-http-01-challenges-enable-acme-protocol/177600) we are currently forced to manually update the certificates.

Specifically, we first need to optain the updated certificates from the [Certbot](https://certbot.eff.org/) service, which will require us to update the DNS records of the [kg.earthmetabolome.org](https://kg.earthmetabolome.org) domain. Once the DNS points to a server outside of the firewall controlled network, we can run the certbot standalone certificates update in order to obtain the updated certificates. Once the certificates are obtained, we can then update the DNS records to point back to the firewall controlled network.

Now, we need to upload the new certificates to the server within the firewall controlled network. If you are not currently connected within the university of Fribourg network, recall to connect to the VPN service. If you do not have yet access to the VPN service, please contact the IT service of the university of Fribourg.

Once you are now connected to the server, run the following commands to find the current position of the certificates:

```bash
cat /etc/nginx/nginx.conf
```

The output should be something like:

```bash
ssl_certificate /etc/letsencrypt/live/kg.earthmetabolome.org/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/kg.earthmetabolome.org/privkey.pem;
```

Now, we need to replace the certificates with the new ones. To do so, we need to copy the new certificates to the server. To do so, we can use the following command:

```bash
scp -r /path/to/certificates/ user@server:.
```

And then we copy the new certificates to the correct location:

```bash
sudo cp ~/*.pem /etc/letsencrypt/live/kg.earthmetabolome.org/
```

Finally, we need to restart the nginx service:

```bash
sudo systemctl restart nginx
```

Now you can verify that the certificates have been updated by visiting the [kg.earthmetabolome.org](https://kg.earthmetabolome.org) website, and checking the HTTPS certificate information.