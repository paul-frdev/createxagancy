import React, { Suspense } from 'react'
import { getPosts } from '../actions/getPosts'
import { SubscribeItem } from '../ui/SubscribeItem'
import BlogList from '../ui/blog/BlogList'

const BlogPage = async () => {

  const posts = await getPosts({ number: 9 })

  return (
    <>
      <Suspense>
        <BlogList posts={posts} />
      </Suspense>
      <SubscribeItem src='/blog/articles.svg' bg='' color='bg-gray200' />
    </>
  )
}

export default BlogPage;