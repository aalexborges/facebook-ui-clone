export type User = {
  name: string
  avatarUrl: string
  isOnline?: boolean
}

export const user: User = {
  name: 'Alex Borges Ramos',
  isOnline: true,
  avatarUrl: 'https://github.com/alexborgesdev.png',
}
