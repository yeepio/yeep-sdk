/**
 * Get org petition info.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @property {number} props.petitionId
 * @returns {Promise}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/petition.info',
    method: 'post',
    data: props
  })
    .then((response) => {
      return {
        petition: response.data
      };
    });
}
