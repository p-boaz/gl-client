import useApi from './api'
const api = import.meta.env.VITE_DA_API_KEY

export default async function getTempUrl() {
  const { response: tempUrl, request } = useApi(`https://ny.barplaybook.com/api/temp_url?key=${api}&url=https://ny.barplaybook.com/`)

  const loaded = ref(false)

  if (loaded.value === false)
    await request()
  loaded.value = true

  return { tempUrl }
}
