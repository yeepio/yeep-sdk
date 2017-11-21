/**
 * Initializes the signup process for the designated email address.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.email
 * @returns {Promise}
 */
export default function (client, props) {
  return client.post('/v2/signup.init', props);
}
