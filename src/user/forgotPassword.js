/**
 * Sends a reset-password token via email to the designated user.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @property {number} props.userId
 * @returns {Promise}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/user.forgotPassword',
    method: 'post',
    data: props
  });
}
