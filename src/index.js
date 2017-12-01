import axios from 'axios';
import mapValues from 'lodash/mapValues';
import partial from 'lodash/partial';
import * as botMethods from './bot';
import * as orgMethods from './org';
import * as userMethods from './user';
import * as petitionMethods from './petition';
import * as integrationMethods from './integration';
import * as sessionMethods from './session';
import * as signupMethods from './signup';
import * as resourceMethods from './resource';
import * as handleMethods from './handle';

const ctx = {};

if (typeof module !== 'undefined' && module.exports) {
  ctx.isNode = true;
  ctx.http = require('http');
  ctx.https = require('https');
}

function headersFactory({
  authToken,
  impersonateId
}) {
  const headers = {};

  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`;
  }

  if (impersonateId) {
    headers['x-selected-user-id'] = impersonateId;
  }

  return headers;
}

function clientFactory({
  baseURL,
  headers
}) {
  const options = {
    baseURL,
    headers
  };

  if (ctx.isNode) {
    options.httpAgent = new ctx.http.Agent({ keepAlive: true });
    options.httpsAgent = new ctx.https.Agent({ keepAlive: true });
  }

  return axios.create(options);
}

/**
 * Creates new Yeep API client with the designated properties.
 * @param {Object} [props]
 * @property {string} [props.baseURL]
 * @property {string} [props.authToken]
 * @property {number} [props.impersonateId]
 * @returns {Object}
 */
function create({
  baseURL = 'https://api.yeep.io',
  authToken,
  impersonateId
} = {}) {
  const client = clientFactory({
    baseURL,
    headers: headersFactory({
      authToken,
      impersonateId
    })
  });

  return {
    bot: mapValues(botMethods, (f) => partial(f, client)),
    org: mapValues(orgMethods, (f) => partial(f, client)),
    user: mapValues(userMethods, (f) => partial(f, client)),
    petition: mapValues(petitionMethods, (f) => partial(f, client)),
    integration: mapValues(integrationMethods, (f) => partial(f, client)),
    session: mapValues(sessionMethods, (f) => partial(f, client)),
    signup: mapValues(signupMethods, (f) => partial(f, client)),
    resource: mapValues(resourceMethods, (f) => partial(f, client)),
    handle: mapValues(handleMethods, (f) => partial(f, client)),
  };
}

// function staticAdapter(f) {
//   return function({
//     baseURL,
//     authToken,
//     impersonateId,
//     ...props
//   }) {
//     const client = clientFactory({
//       baseURL,
//       authToken,
//       impersonateId
//     });

//     return f(client, props);
//   }
// }

export default {
  create,
};
