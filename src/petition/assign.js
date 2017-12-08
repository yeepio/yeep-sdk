/**
 * Assign petition to user.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @property {number} props.petitionId
 * @property {number} props.assigneId
 * @returns {Promise}
 */
export default function (client, props) {
  return client.request({
    url: '/v2/petition.assign',
    method: 'post',
    data: props
  });
}
