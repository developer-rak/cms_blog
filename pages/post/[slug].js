import React from 'react';

import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../components';

const postDetails = ({ post }) => {
  return (
    <div className='container px-10 mx-auto mb-8'>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
         <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
         </div>
         <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
               <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
               <Categories />
            </div>
         </div>
      </div>
    </div>
  )
}

export default postDetails;

export async function getStaticProps({ params }) {
   const data = await getPostDetails(params.slug);

   return {
      props: { posts: data }
   }
}

export async function getStaticPaths() {
   const posts = await getPosts();
   
   return {
      paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
      fallback: false,
   }
}