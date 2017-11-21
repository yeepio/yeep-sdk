/**
 * Indicates whether the designated org slug already exists.
 * @param {Axios} client
 * @param {Object} props
 * @property {string} props.slug
 * @returns {Promise<Object>}
 */
export default function (client, props) {
  return client.get('/v2/org.exists', {
    params: props
  })
    .then((response) => {
      return response.data;
    });
}
