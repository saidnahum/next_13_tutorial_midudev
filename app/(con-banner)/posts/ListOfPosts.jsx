import Link from "next/link";
import LikeButton from "./LikeButton";

const fetchPosts = () => {

   console.log("FETCHING POSTS !!!!!!!!!!")
   console.log("😽😽😽")

   /*
      - (static) Para crear una página estática se deja el fetch sin argumentos ó {cache: 'force-cache'} por defecto.
      - (SSR) Renderizado cada vez que cargue la página, añadir {cache: 'no-store'}
      - (ISG) Revalidación cada cirtos segundos, agragar {next: {revalidate: 10}}
   */

   return (
      fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 } })
         .then(res => res.json())
   )
}

const ListOfPosts = async () => {

   const posts = await fetchPosts();

   return (
      posts.slice(0, 5).map(post => (
         <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
               <h2 style={{ color: '#09f' }}>{post.id}.- <span style={{ textTransform: 'capitalize' }}>{post.title}</span></h2>
            </Link>
            <p>{post.body}</p>
            <LikeButton />
         </article>
      ))
   )
}

export default ListOfPosts