/**
 * Get org integration info.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.token
 * @property {number} props.integrationId
 * @returns {Promise<Object>}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/integration.info',
    method: 'post',
    data: props
  })
    .then((response) => {
      return {
        integration: response.data
      };
    });
}
