Channel

Channel live todo: add link and put site on heroku

Channel is a full--stack web app based on Medium. The backend runs on Ruby on rails, with a PostgreSQL database and React/Redux framework on the frontend to ensure a seamless user experience.

Features & Implementation

Story Creation and Editing

Stories are stored in the database, linked to the author with a foreign key for user_id. The database structure of this project is somewhat complicated in that users can follow other users, topics, categories, while also writing stories which can be linked to specific tags and so on. Stories displayed in the feed will be based on the tags that the user follows, using that tag_follows table to link users to stories through the tags table. This specific group of stories will persist until the user logs out. I also plan on implementing an infinite scroll if I have enough time.

Stories are displayed in two different components, StoriesContainer - which shows the title, description, image, and estimated read-time of the story, and ExpandedStoryContainer which displays the entire body of the story, its images, and highlights. At the bottom of ExpandedStoryContainers there is space for users to comment. The StoryIndex houses most of the components. Each StoryContainer has like, bookmark, and comment buttons. At the top of the StoriesIndex there is also a component for writing a new story, which you can expand into a full-size rich text editor. I'm choosing between Quill.js and Draft.js to address this. The UI of Channel is adopted from Medium, a site whose functionality is as equally polished as its appearance.

![image_of_stories_index](./wireframes/home_logged_in.png)

Tags

Tags are a table in the database which have names and tag_ids. They are connected to the API by two other tables, tag_follows as mentioned earlier and story_tags, which will be a join-table for stories and tags.

Component Structure

Much of the site is nested within the header or sidebar. Most of the user functionality (posting, adjusting followed tags, and searching) lives in the header, which will be rendered as a subcomponent of the index or ExpandedStoryContainer pages.

StoriesIndex render method:

render: function () {
  return ({this.state.storiss.map(function (story) {
    return <StoriesContainer ={story} />
  }
  <ExpandedStoryContainer ={this.state.selectedStory} />)
}

Tags are maintained on the frontend in the TagStore. Tags are also rendered separately in lists so they required their own object.

Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project. The next steps for Channel are outlined below.

Publications

Publications are another key feature of Medium. They allow specific magazines or blogs to create their own branded namespace within Medium. I plan to expand the features of categories into a full-fledged publication feature.

Expanded inline quoting and commenting

This is another hidden but brilliant feature of Medium -- users can select sections of text which they find interesting and comment on it to other users. These comments can either be public or solely addressed to the author. Live notifications of these sorts of events would also be very interesting to pursue.
