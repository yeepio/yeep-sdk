/**
 * Lists org integrations.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @returns {Promise<Object>}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/integration.list',
    method: 'post',
    data: props
  })
    .then((response) => {
      return {
        integrations: response.data
      };
    });
}
