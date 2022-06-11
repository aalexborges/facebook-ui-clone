import imgAmanda from '../assets/peoples/Amanda.jpg'
import imgClara from '../assets/peoples/Clara.jpg'
import imgEstevan from '../assets/peoples/Estevan.jpg'
import imgEvelyn from '../assets/peoples/Evelyn.jpg'
import imgIgor from '../assets/peoples/Igor.jpg'
import imgJennifer from '../assets/peoples/Jennifer.jpg'
import imgKaua from '../assets/peoples/Kaua.jpg'
import imgLaura from '../assets/peoples/Laura.jpg'
import imgLuiza from '../assets/peoples/Luiza.jpg'
import imgMelissa from '../assets/peoples/Melissa.jpg'
import imgRafaela from '../assets/peoples/Rafaela.jpg'
import imgRenan from '../assets/peoples/Renan.jpg'
import imgRyan from '../assets/peoples/Ryan.jpg'
import imgSophia from '../assets/peoples/Sophia.jpg'
import imgTimMarshall from '../assets/peoples/Tim-Marshall.jpg'
import imgVictor from '../assets/peoples/Victor.jpg'

export type Contact = {
  name: string
  avatarUrl: string
  isOnline: boolean
}

export const contacts: Contact[] = [
  {
    name: 'Melissa Alves Gomes',
    avatarUrl: imgMelissa,
    isOnline: true,
  },
  {
    name: 'Kauã Souza',
    avatarUrl: imgKaua,
    isOnline: true,
  },
  {
    name: 'Luiza Melo',
    avatarUrl: imgLuiza,
    isOnline: true,
  },
  {
    name: 'Laura Martins',
    avatarUrl: imgLaura,
    isOnline: true,
  },
  {
    name: 'Renan Pereira Dias',
    avatarUrl: imgRenan,
    isOnline: true,
  },
  {
    name: 'Clara Correia Araujo',
    avatarUrl: imgClara,
    isOnline: true,
  },
  {
    name: 'Amanda Santos Rocha',
    avatarUrl: imgAmanda,
    isOnline: true,
  },
  {
    name: 'Tim Marshall',
    avatarUrl: imgTimMarshall,
    isOnline: true,
  },
  {
    name: 'Evelyn Costa',
    avatarUrl: imgEvelyn,
    isOnline: true,
  },
  {
    name: 'Igor Ribeiro Cavalcanti',
    avatarUrl: imgIgor,
    isOnline: true,
  },
  {
    name: 'Sophia Dias Alves',
    avatarUrl: imgSophia,
    isOnline: true,
  },
  {
    name: 'Ryan Barros',
    avatarUrl: imgRyan,
    isOnline: true,
  },
  {
    name: 'Victor Goncalves Costa',
    avatarUrl: imgVictor,
    isOnline: true,
  },
  {
    name: 'Estevan Melo',
    avatarUrl: imgEstevan,
    isOnline: false,
  },
  {
    name: 'Rafaela Silva',
    avatarUrl: imgRafaela,
    isOnline: false,
  },
  {
    name: 'Jennifer J. Deputy',
    avatarUrl: imgJennifer,
    isOnline: false,
  },
]
