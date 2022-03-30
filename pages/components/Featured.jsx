import { useEffect, useState } from "react";
import { getPosts } from "../../services";

export default function Featured() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const fetchPosts = await getPosts();
    setPosts(fetchPosts.filter((post) => post.node.featuredPost));
    // console.log(posts);
  }, []);

  function parseDate(date) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    const parseDate = new Date(date);
    return parseDate.toLocaleDateString("en-US", options);
  }

  return (
    <div
      className="
        blured w-fit bg-slate-700 mt-[-200px] md:mt-[-100px] m-auto "
    >
      <div className="flex items-center justify-between mt-9 px-6">
        <h3 className="text-slate-200 text-xl font-semibold ">
          Featured Articles
        </h3>
        <div className="flex gap-3">
          <img src="/icons/swipe-left.svg" alt="left" />
          <img src="/icons/swipe-right.svg" alt="right" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {posts.map((item) => (
          <div
            className="
                flex
                flex-col
                justify-between
                mt-9
                shadow-md
                bg-white
                p-3 w-full md:w-60 rounded"
          >
            <div>
              <img
                src={item.node.featuredImage.url}
                alt=""
                className="h-48 md:h-36 w-full object-cover rounded"
              />

              <div className="flex justify-between items-center py-3">
                <span className="textm md:text-xs text-[#0071EB]">
                  {item.node.categories[0].name}
                </span>
                <span className=" md:text-[10px] font-medium text-slate-400">
                  {parseDate(item.node.createdAt)}
                </span>
              </div>
              <h1 className="text-xl md:text-sm font-medium">
                {item.node.title}
              </h1>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <img
                className="w-8 h-8 object-cover rounded-full"
                src={item.node.author.photo.url}
                alt=""
              />
              <p className="md:text-xs text-slate-400">
                {item.node.author.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
