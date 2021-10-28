const theme = {
  white: '#FFFFFF',

  // Base
  accent: '#2078f4',
  baseBlue: '#1877F2',

  // Primary
  primaryText: '#050505',
  primaryTextOnMedia: '#FFFFFF',

  primaryButtonText: '#FFFFFF',
  primaryButtonBackground: '#1877F2',
  primaryDeemphasizedButtonBackground: '#E7F3FF',

  // Secondary
  secondaryIcon: '#65676B',
  secondaryText: '#65676B',

  secondaryButtonText: '#050505',
  secondaryButtonPressed: 'rgba(0, 0, 0, 0.05)',
  secondaryButtonBackground: '#E4E6EB',

  // Backgrounds
  bodyBackground: '#F0F2F5',
  cardBackground: '#FFFFFF',
  navbarBackground: '#FFFFFF',
  commentBackground: '#F0F2F5',
  surfaceBackground: '#FFFFFF',
  notificationBadgeBackground: '#F02849',

  // Others
  divider: '#CED0D4',
  blueLink: '#216FDB',

  positive: '#31A24C',
  scrollThumb: '#BCC0C4',

  popoverColor: '#FFFFFF',
  placeholderText: '#606770',

  filterAccent:
    'invert(39%) sepia(57%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(147.75%) hue-rotate(202deg) brightness(97%) contrast(96%)',
  filterPrimaryIcon:
    'invert(8%) sepia(10%) saturate(200%) saturate(200%) saturate(166%) hue-rotate(177deg) brightness(104%) contrast(91%)',
  filterSecondaryIcon:
    'invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)',
}

export type Theme = typeof theme
export default theme
