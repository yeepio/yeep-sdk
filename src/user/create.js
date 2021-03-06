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
 * @property {string} [props.role]
 * @property {string} [props.image]
 * @returns {Promise<Object>}
 */
export default function (client, {
  org,
  email,
  firstName,
  lastName,
  invite = false,
  role,
  image
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
      image
    }
  })
    .then((response) => response.data);
}
