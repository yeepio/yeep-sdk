/**
 * Create a user petition.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @property {number} props.type
 * @property {Object} props.body
 * @returns {Promise<Object>}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/petition.create',
    method: 'post',
    data: props
  })
    .then((response) => {
      return response.data;
    });
}
