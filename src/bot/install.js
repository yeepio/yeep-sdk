/**
 * Installs the specified bot under the designated org.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.type
 * @property {string} props.org
 * @property {Object} props.body
 * @property {boolean} props.resetPassword
 * @returns {Promise}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/bot.install',
    method: 'post',
    data: props,
  })
    .then((response) => response.data);
}
