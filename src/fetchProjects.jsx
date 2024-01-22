import { createClient } from 'contentful';
import { useState } from 'react';
import { useEffect } from 'react';

const client = createClient({
  space: 'mxg3hx82bt6s',
  // defaults to 'master' if not set
  accessToken: 'MP3acEgvha-XO88TOZkGRcQTpc0u9gS_m4R7zUhgwdM',
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });

      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return {
          title,
          url,
          id,
          img,
        };
      });
      setProjects(projects);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};
