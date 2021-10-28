// Assets
import { ReactComponent as MoreIcon } from '../../assets/asideMoreIcon.svg'
import { ReactComponent as SearchIcon } from '../../assets/asideSearchIcon.svg'
import { ReactComponent as VideoAddIcon } from '../../assets/videoAddIcon.svg'

// Components
import { AsideContactButton } from '../AsideContactButton'
import {
  AsideSectionTitle,
  AsideSectionTitleButton,
} from '../AsideSectionTitle'

// Utils
import { contacts } from '../../utils/contacts'

export function AsideContactsSection() {
  return (
    <>
      <AsideSectionTitle title="Contatos">
        <AsideSectionTitleButton
          type="button"
          aria-label="Nova sala"
          data-label-left
          data-label-fixed
        >
          <VideoAddIcon />
        </AsideSectionTitleButton>

        <AsideSectionTitleButton
          type="button"
          aria-label="Pesquisar por nome ou grupo"
          data-label-left
          data-label-fixed
        >
          <SearchIcon />
        </AsideSectionTitleButton>

        <AsideSectionTitleButton
          type="button"
          aria-label="Opções"
          data-label-left
          data-label-fixed
        >
          <MoreIcon />
        </AsideSectionTitleButton>
      </AsideSectionTitle>

      {contacts.map((contact, index) => (
        <AsideContactButton key={index} user={contact} title={contact.name} />
      ))}
    </>
  )
}
