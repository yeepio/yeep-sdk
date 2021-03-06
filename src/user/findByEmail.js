/**
 * Retrieves user information by email.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @property {string} props.email
 * @returns {Promise<Object>}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/user.findByEmail',
    method: 'post',
    data: props
  })
    .then((response) => {
      return {
        user: response.data
      };
    });
}
