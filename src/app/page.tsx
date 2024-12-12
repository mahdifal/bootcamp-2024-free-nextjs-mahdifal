type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  const res = await fetch(`https://jsonplaceholder.org/posts`, {
    cache: "no-store",
  });
  const posts: Post[] = await res.json();

  return (
    <main>
      <h1>سلام رفیق</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
        quisquam vel similique nobis iure sed saepe ipsum rem ducimus,
        perspiciatis sequi voluptas? Amet, cumque quasi aut ipsa quis excepturi
        sed.
      </p>
      <ul>
        {posts?.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
