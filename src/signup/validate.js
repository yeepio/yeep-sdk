/**
 * Validates the designated signup token with its associated email.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.token
 * @property {string} props.email
 * @returns {Promise<Object>}
 */
export default function (client, props) {
  return client.post('/v2/signup.validate', props)
    .then((response) => {
      return {
        validity: response.data
      };
    });
}
