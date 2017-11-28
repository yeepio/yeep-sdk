/**
 * Creates new Yeep organization.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.name
 * @property {string} props.slug
 * @property {string} [props.signupToken]
 * @property {boolean} [props.notify=false]
 * @property {Object} props.admin
 * @property {string} props.admin.email
 * @property {string} props.admin.firstName
 * @property {string} props.admin.lastName
 * @property {string} props.admin.username
 * @property {string} props.admin.password
 * @returns {Promise}
 */
export default function (client, props) {
  return client.post('/v2/org.create', props)
    .then((response) => response.data);
}
