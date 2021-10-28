// Assets
import { ReactComponent as ArrowRightIcon } from '../../assets/storyArrowRightIcon.svg'

// Components
import { FeedStoryItem } from '../FeedStoryItem'

// Utils
import { stories } from '../../utils/stories'
import { user } from '../../utils/user'

import { Container, MoreButton } from './styles'

export function FeedStory() {
  return (
    <Container>
      <FeedStoryItem myStory data={{ user: user }} />

      {stories.map(
        (story, index) =>
          index <= 4 && <FeedStoryItem key={index} data={story} />
      )}

      <MoreButton>
        <ArrowRightIcon />
      </MoreButton>
    </Container>
  )
}
