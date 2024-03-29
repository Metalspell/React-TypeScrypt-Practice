import Trending from "./home/Trending"
import Tech from "./home/Tech"
import { prisma } from "app/api/client";
import { Post } from "@prisma/client";
import Travel from "./home/Travel";
import Other from "./home/Other";
import Subscribe from "./shared/Subscribe";

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`);
      return {
        ...post,
        image: imageModule.default,
      };
    })
  );
  return formattedPosts;
};

export default async function Home() {
  const posts = await getPosts();

  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else if (post?.category === "Interior Design") {
        otherPosts.push(post);
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();

  return (
    <main className="px-10 leading-7">
      <Trending trendingPosts={trendingPosts}/>
      <div className="basis-3/4">
        <div className="gap-10 mb-5 md:flex">
          <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts}/>
          <Other otherPosts={otherPosts}/>
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          {/* <Sidebar /> */}
        </div>
      </div>
    </main>
  )
}
