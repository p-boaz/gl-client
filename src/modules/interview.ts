import useApi from './api'
const api = import.meta.env.VITE_DA_API_KEY

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

export default async function getInterview() {
  const { response: interview, request } = useApi<Interview>(`https://ny.barplaybook.com/api/session?key=${api}&session=AdGTdPz59Aq796rL3ro0YyytY33w7pNI&i=docassemble.playground1:aaDataTypes.yml`)

  const loaded = ref(false)

  if (loaded.value === false)
    await request()
  loaded.value = true

  return { interview }
}
