/**
 * Creates a new session, a.k.a. sign-in, with the designated org.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @property {string} props.username
 * @property {string} props.password
 * @returns {Promise<Object>}
 */
export default function (client, { org, ...rest }) {
  return client.request({
    url: `/v2/orgs/${props.org}/sessions`,
    methpod: 'post',
    data: rest
  })
    .then((response) => response.data);
}
