/**
 * Retrieves user information.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @property {string} props.userId
 * @returns {Promise<Object>}
 */
export default function (client, {
  org,
  userId
}) {
  return client.request({
    url: `/v2/orgs/${org}/users/${userId}`,
    method: 'get'
  })
    .then((response) => {
      return {
        user: response.data
      };
    });
}
