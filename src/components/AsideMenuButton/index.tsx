import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ReactComponent as ChevronDownIcon } from '../../assets/chevronDownIcon.svg'

import {
  Container,
  Image,
  LeftContainer,
  Text,
  ViewMoreContainer,
} from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  icon?: ReactNode
  imageUrl?: string
  viewMore?: boolean
}

export function AsideMenuButton({ label, icon, imageUrl, ...props }: Props) {
  return (
    <Container type="button" {...props}>
      <LeftContainer>
        {icon && !imageUrl && icon}

        {imageUrl && <Image src={imageUrl} alt={label} />}

        {!icon && !imageUrl && props.viewMore && (
          <ViewMoreContainer>
            <ChevronDownIcon width={20} height={20} />
          </ViewMoreContainer>
        )}
      </LeftContainer>

      <Text>{label}</Text>
    </Container>
  )
}
