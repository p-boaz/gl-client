import useApi from './api'
const api = import.meta.env.VITE_DA_API_KEY

export default async function useUsers() {
  const { response: items, request } = useApi(`https://ny.barplaybook.com/api/user_list?key=${api}`)

  const loaded = ref(false)

  if (loaded.value === false)
    await request()
  loaded.value = true

  return { items }
}
