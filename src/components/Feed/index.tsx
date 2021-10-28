// Components
import { FeedNewPost } from '../FeedNewPost'
import { FeedNewVideoChat } from '../FeedNewVideoChat'
import { FeedStory } from '../FeedStory'
import { Post } from '../Post'

// Utils
import { posts } from '../../utils/posts'

import { Container, Content } from './styles'

export function Feed() {
  return (
    <Container data-testid="feedContainer">
      <Content>
        <FeedStory />
        <FeedNewPost />
        <FeedNewVideoChat />

        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </Content>
    </Container>
  )
}
