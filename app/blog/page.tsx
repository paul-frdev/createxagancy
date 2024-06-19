import React from 'react'
import { BlogList } from '../ui/blog/BlogList'
import { getPosts } from '../actions/getPosts'
import { SubscribeItem } from '../ui/SubscribeItem'

const BlogPage = async () => {

  const posts = await getPosts({ number: 9 })

  return (
    <>
      <BlogList posts={posts} />
      <SubscribeItem src='/blog/articles.svg' bg='' color='bg-gray200' />
    </>
  )
}

export default BlogPage;