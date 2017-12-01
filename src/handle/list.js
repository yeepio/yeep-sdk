/**
 * Retrieves handles of the designated service integration.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.type
 * @property {number} [props.integrationid]
 * @property {number} [props.userId]
 * @returns {Promise<Object>}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/handle.list',
    method: 'post',
    data: props,
  })
    .then((response) => {
      return {
        handles: response.data
      };
    });
}
