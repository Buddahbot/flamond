# Accept a Payment

This application showcases a jewelry ring, featuring description, price, and image retrieved from Stripe. Users can interact with the app by clicking the "Subscribe" button, which triggers the display of the available payment method. In addition, users can provide their address and email details before finalizing their subscription.
Upon subscription, users will be redirected to a confirmation page.

Included are some basic build and run scripts you can use to start up the application.

## Running the sample

create a .env.local file in the root directory and copy paste the public and secret key that I sent with via email into the .env.local file.

### Development

1. Build the application

```shell
$ npm install
```

2. _Optional_: download and run the [Stripe CLI](https://stripe.com/docs/stripe-cli)

```shell
$ stripe listen --forward-to localhost:3000/api/webhooks
```

3. Run the application

```shell
$ STRIPE_WEBHOOK_SECRET=$(stripe listen --print-secret) npm run dev
```

or

npm run dev

4. Go to [localhost:3000](http://localhost:3000)

### Production

1. Build the application

```shell
$ npm install

$ npm build
```

2. Run the application

```shell
$ npm start
```
