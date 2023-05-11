// Simulando que los comentarios tarden en solicitarse 3 segundos para probar el loading
const fetchPostComments = async (id) => {
   await new Promise(resolve => setTimeout(resolve, 3000))
   return (
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { next: { revalidate: 10 } })
         .then(res => res.json())
   )
}

const CommentsPage = async ({params}) => {

   const {id} = params;
   const comments = await fetchPostComments(id);

   return (
      <ul style={{ background: '#444', fontSize: '10px'}}>
         {
            comments.map(comment => (
               <li key={comment.id}>
                  <h2>{comment.name}</h2>
                  <h3>{comment.email}</h3>
                  <p>{comment.body}</p>
               </li>
            ))
         }
      </ul>
   )
}

export default CommentsPage