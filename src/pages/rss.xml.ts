import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import { SITE } from "@config";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function get() {
  const posts = await getCollection("blog");
  const sortedPosts = await getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ slug, body, data }) => ({
      link: `posts/${slug}`,
      pubDate: new Date(data.pubDatetime),
      content: sanitizeHtml(parser.render(body)),
      ...data,
    })),
  });
}
