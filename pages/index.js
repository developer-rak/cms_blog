import Head from "next/head";

const posts = [
   { title: 'React Testing', excerpt: 'Learn React Testing' },
   { title: 'React with Tailwind', excerpt: 'Learn React with tailwind' },
]

export default function Home() {
   return (
      <div className="container px-10 mx-auto mb-8 bg-gray-300">
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {posts.map((post, index) => (
               <div>
                  {post.title}
                  {post.excerpt}
               </div>
            ))}
         </div>
      </div>
   )
}