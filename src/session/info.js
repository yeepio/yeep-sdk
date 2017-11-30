/**
 * Retrieves information on the currently active session.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @returns {Promise<Object>}
 */
export default function (client, { org }) {
  return client.request(`/v2/orgs/${org}/sessions/current`)
    .then((response) => response.data);
}
