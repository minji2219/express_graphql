const posts =[
  {
    id:'post1',
    title: 'it is a first post',
    description:'it is a frist post description',
    comments:[{
      id:'comment1',
      text:'it is a first comment',
      likes:1
    }]
  },
  {
    id:'post2',
    title: 'it is a second post',
    description:'it is a second post description',
    comments:[]
  }
]

function getAllPosts(){
  return posts
}
module.exports={
  getAllPosts
}