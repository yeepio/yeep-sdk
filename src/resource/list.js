/**
 * Lists resources with the designated properties.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @property {number} [props.userId]
 * @property {string} [props.integrationId]
 * @property {string} [props.type]
 * @property {number} [props.limit]
 * @property {string} [props.after]
 * @property {string} [props.before]
 * @returns {Promise<Object>}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/resource.list',
    method: 'post',
    data: props
  })
    .then((response) => {
      return {
        resources: response.data
      };
    });
}
