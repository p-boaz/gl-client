import useApi from './api'
const api = import.meta.env.VITE_DA_API_KEY

export default async function getActivities() {
  const { response: activities, request } = useApi(`https://ny.barplaybook.com/api/interviews?key=${api}&include_dictionary=1`)

  const loaded = ref(false)

  if (loaded.value === false)
    await request()
  loaded.value = true

  return { activities }
}
