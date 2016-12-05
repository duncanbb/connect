## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**StoryIndex**
 - Home
 - Header
    * microNewStoryContainer
    * Search Component
      =SearchResultsContainer
      **UserSearch**
       + AutoSearch
       * AutoSearchResults

      **TagsSearch**
       + AutoSearch
       * AutoSearchResults

    * notifications    
 - Sidebar
    *TagFollowsContainer
  -StoriesHeader

-  StoriesContainer**
 - StoriesHeader
  * Like Component
  * CommentCountComponent
  * Bookmark Component
  * NewStoryContainer

**ExpandedStoryContainer**
 - highlights (if reached)
 - commentsContainer
 - tagsContainer

**NewTag**
 - NewTag


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/story/:storyId" | "ExpandedStoryContainer" |
| "/home/tag/:tagname/ | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-story" | "NewStoryContainer" |
| "/new-tag" | "NewTag" |

# Are these routes right? I had a little trouble with this since Medium is such a single page app.
# Let me know if I need to rework
