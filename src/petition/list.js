/**
 * Lists petitions under the designated org.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @property {number} [props.userId]
 * @property {number} [props.assigneeId]
 * @property {string} [props.type]
 * @property {string} [props.state]
 * @returns {Promise<Object>}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/petition.list',
    method: 'post',
    data: props
  })
    .then((response) => {
      return {
        petitions: response.data
      };
    });
}
