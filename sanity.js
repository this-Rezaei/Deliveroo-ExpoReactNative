import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ntez7rqd",
  dataset: "deliveroo-data",
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: "2022-01-12", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client; 
