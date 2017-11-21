# Yeep API Client

Yeep API client for Node.js and the browser.

[![Build Status](https://travis-ci.org/yeepio/yeep-sdk.svg?branch=master)](https://travis-ci.org/yeepio/yeep-sdk) [![npm version](https://badge.fury.io/js/yeep.svg)](https://badge.fury.io/js/yeep)

#### Features

* Supports promises + async/await.

## Installation

```
$ npm install amqp-message-bus
```

#### Requirements

* Node.js v.6+

## Quick start

Create new yeep client.

```javascript
const yeep = require('yeep');

const client = yeep.create({
  authToken: 'abc'
});

yeep.user.info({
  org: 'acme',
  id: 1
});
```

## License

[MIT](LICENSE)
