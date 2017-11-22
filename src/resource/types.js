/**
 * Retrieves resource types supported by the designated service integration.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @property {string} props.integrationId
 * @returns {Promise<Object>}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/resource.types',
    method: 'post',
    data: props
  })
    .then((response) => {
      return {
        types: response.data
      };
    });
}
