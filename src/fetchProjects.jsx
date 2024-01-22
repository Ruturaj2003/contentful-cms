import { createClient } from 'contentful';

const client = createClient({
  space: 'mxg3hx82bt6s',
  // defaults to 'master' if not set
  accessToken: 'MP3acEgvha-XO88TOZkGRcQTpc0u9gS_m4R7zUhgwdM',
});

client
  .getEntries({ content_type: 'projects' })
  // .getContentType('projects')
  .then((contentType) => console.log(contentType))
  .catch(console.error);
