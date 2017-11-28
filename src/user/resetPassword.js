/**
 * Resets the password of the designated user.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @property {string} props.token
 * @property {string} props.password
 * @returns {Promise}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/user.resetPassword',
    method: 'post',
    data: props
  })
    .then((response) => {
      return response.data;
    });
}
