import Link from "next/link";

const fetchSinglePost = (id) => {
   return (
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 10 } })
         .then(res => res.json())
   )
}

const PostDetail = async ({params, children}) => {

   const {id} = params;
   const post = await fetchSinglePost(id);

   return (
      <article>
         <h1>{post.id}.- <span style={{ textTransform: 'capitalize' }}>{post.title}</span></h1>
         <p>{post.body}</p>
         <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
         {children}
      </article>
   )
}

export default PostDetail