import type { Metadata } from 'next'
import { getMetadataRootURL } from '@/lib/utils'

export const sharedMetadata: Metadata = {
  icons: {
    other: {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
      color: '#22cc5e',
    },
  },
  other: {
    'msapplication-TileColor': '#00a300',
  },
  metadataBase: getMetadataRootURL(),
}
