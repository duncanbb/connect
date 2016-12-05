```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPost: {errors: ["body can't be blank"]}
  },
  recent_stories: {
    1: {
      title: "First imaginary pseudo-story",
      body: "with lots of useful information",
      author_id: 1,
      tags: {
        1: {
          id: 1
          title: "Coding"
        },
        2: {
          id: 2
          title: "Plans for world domination"
        }
      }
    }
  },
  selected_story: {
    id: 1,
    comments: {
      1: {
        story_id: 1,
        body: "This story is amazing"
        commentor_id: 2
      },
      2: {
        story_id: 1,
        body: "I hated this story"
        commentor_id: 457987
      }
    }
  }

  story_likes: {
    1: {
      user_id: 1,
      story_id: 1,
    }
  }
}
```
