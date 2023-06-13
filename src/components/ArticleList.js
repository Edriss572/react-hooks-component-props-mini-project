import React from 'react'
import Article from './Article'
function ArticleList({posts}) {
  console.log("articles list")
  console.log(posts)
  return (
    <main>
      {posts.map((post) => {
        console.log(post)
        return <Article 
                  key = {post.id} 
                  title = {post.title} 
                  date = {post.date} 
                  preview = {post.preview} 
                  minutes = {post.minutes}
                />;
      })}
    </main>
  )
}

export default ArticleList