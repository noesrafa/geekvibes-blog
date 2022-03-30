import { useEffect, useState } from "react";
import { getPosts } from "../../services";

const categories = [
  "Web Development",
  "Marketing",
  "Creative",
  "UX Design",
  "Geeks",
];

export default function Content() {
  const [posts, setPosts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(async () => {
    const fetchPosts = await getPosts();
    setPosts(fetchPosts);
    setFeatured(fetchPosts.filter((post) => post.node.featuredPost));
    // console.log("Hola", featured);
  }, []);

  function parseDate(date) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    const parseDate = new Date(date);
    return parseDate.toLocaleDateString("en-US", options);
  }

  return (
    <div className="pt-20 max-w-screen-xl m-auto">
      <span className="text-center block text-[#0071EB]">
        WE ARE CREATIVE NERDS
      </span>
      <h2 className="text-center text-3xl font-semibold mt-2 mb-10">
        Popular Posts
      </h2>
      <div className="flex gap-10">
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <div className="box-shadow rounded p-4 flex gap-4">
              <div className="relative">
                <img
                  className="w-60 h-60 object-cover rounded"
                  src={post.node.featuredImage.url}
                  alt="featured"
                />
                <div
                  className="
                    absolute z-10 top-0 left-0
                  bg-[#54F293] text-xs p-3 text-black font-medium rounded-sm"
                >
                  {post.node.categories[0].name}
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <div className="flex gap-4 items-center">
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-8 h-8 object-cover rounded-full"
                      src={post.node.author.photo.url}
                      alt=""
                    />
                    <span className="text-xs">{post.node.author.name}</span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {parseDate(post.node.createdAt)}
                  </span>
                </div>
                <h4 className="text-xl font-medium">{post.node.title}</h4>
                <p className="text-xs max-w-md">{post.node.excerpt}</p>
                <button className="text-left text-sm mt-3 font-semibold text-[#0071EB]   border border-[#0071EB] px-4 py-2 rounded-full w-fit">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block w-[400px] mr-4">
          <div>
            <div>
              <h2 className="font-medium">Category</h2>
              <div className="h-[2px] w-8 my-1 mb-4 bg-[#54F293]"></div>
              <div className="flex flex-col gap-2">
                {categories.map((item) => (
                  <>
                    <div className="flex gap-2 items-center">
                      <div className="h-1 w-1 bg-[#54F293] rounded-full"></div>
                      <span>{item}</span>
                    </div>
                    <div className="h-[2px] w-full bg-slate-100"></div>
                  </>
                ))}
              </div>
            </div>
            <div className="mt-14">
              <h2 className="font-medium">Top Post Never Miss</h2>
              <div className="h-[2px] w-8 my-1 mb-4 bg-[#54F293]"></div>
              <div className="flex flex-col gap-3">
                {featured.map((item) => (
                  <div className="box-shadow p-3">
                    <div className="text-xs mb-2">
                      <span className="mr-3 text-slate-400">
                        {parseDate(item.node.createdAt)}
                      </span>
                      <span className="text-[#0071EB]">
                        {item.node.categories[0].name}
                      </span>
                    </div>
                    <h4 className="text-sm font-medium pr-14">
                      {item.node.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-14">
              <h2 className="font-medium">Recent Videos</h2>
              <div className="h-[2px] w-8 my-1 mb-4 bg-[#54F293]"></div>
              <div className="grid grid-cols-2 gap-4">
                {featured.map((item) => (
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover rounded"
                      src={item.node.featuredImage.url}
                      alt=""
                    />
                    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                      <img
                        className="w-14"
                        src="/icons/youtube.svg"
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
