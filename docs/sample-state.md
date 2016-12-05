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
  stories: {
    1: {
      title: "First imaginary pseudo-story",
      body: "with lots of useful information",
      author_id: 1,
      k_id: 1
      topics: {
        1: {
          id: 1
          title: "Coding"
        }
        2: {
          id: 2
          title: "Plans for world domination"
        }
      }
    }
  },
  story_topics: {
    1: {
        story_id: 1,
        topic_id: 1,
      }
    2: {
        story_id: 1,
        topic_id: 2,
      }  
  }

  topic_follows: {
    1: {
      user_id: 1,
      topic_id: 1,
    }
    2: {
      user_id: 1,
      topic_id: 2,
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
