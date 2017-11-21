/**
 * Creates new user with the supplied properties under the designated org.
 * Please note: this method requires client authentication.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.org
 * @property {string} props.email
 * @property {string} props.firstName
 * @property {string} props.lastName
 * @property {boolean} [props.invite=false]
 * @property {string} [props.role="MEMBER"]
 * @returns {Promise<Object>}
 */
export default function create(client, {
  org,
  email,
  firstName,
  lastName,
  invite = false,
  role
}) {
  return client.request({
    url: '/v2/user.create',
    method: 'post',
    data: {
      org,
      email,
      firstName,
      lastName,
      invite,
      role,
    }
  })
    .then((response) => response.data);
}
