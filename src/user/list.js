/**
 * Retrieves users under the specified org.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @property {string} props.role
 * @returns {Promise<Object>}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/user.list',
    method: 'post',
    data: props
  })
    .then((response) => {
      return {
        users: response.data
      };
    });
}
