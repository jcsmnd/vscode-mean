const express = require('express');
const app = express();

app.use("/api/posts",(req, res, next) => {
  const posts = [
    {
      id: 'asxcv123',
      title: 'first server-side post',
      content: 'coming form server'
    },
    {
      id: 'asxcv124',
      title: 'Second server-side post',
      content: 'coming form server'
    }

  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
