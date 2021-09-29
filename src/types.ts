import { ViteSSGContext } from 'vite-ssg'
import { Auth0Client } from '@auth0/auth0-spa-js'

export type UserModule = (ctx: ViteSSGContext) => void

export interface Data_Type {
  id: string
  isAuthenticated: boolean
  error: Error | null
  user: any | null
}
export interface Interview {
  id: string
  data_types: Data_Type[]
}

export interface UILibraryOptions {
  name: string
  prefix?: string
  entries?: string[]
}

export interface $Auth0Defaults {
  client: Auth0Client | null
  state: {
    isLoading: boolean
    isAuthenticated: boolean
    error: Error | null
    user: any | null
  }
}
