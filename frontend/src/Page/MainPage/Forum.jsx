import React from "react"

const Forum = () => {
  const dummyPosts = [
    {
      _id: 1,
      number: 1,
      title: "첫 번째 게시물",
      views: 120,
      fileUrl: ["file1"],
      createdAt: "2023-01-01",
    },
    {
      _id: 2,
      number: 2,
      title: "두 번째 게시물",
      views: 95,
      fileUrl: [],
      createdAt: "2023-01-05",
    },
    {
      _id: 3,
      number: 3,
      title: "세 번째 게시물",
      views: 70,
      fileUrl: ["file2", "file3"],
      createdAt: "2023-01-10",
    },
    {
      _id: 4,
      number: 4,
      title: "네 번째 게시물",
      views: 50,
      fileUrl: [],
      createdAt: "2023-01-15",
    },
    {
      _id: 5,
      number: 5,
      title: "다섯 번째 게시물",
      views: 30,
      fileUrl: ["file4"],
      createdAt: "2023-01-20",
    },
  ]
}

export default Forum
