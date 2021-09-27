import useApi from './api'

export default async function getInterview() {
  const { response: interview, request } = useApi(`https://ny.barplaybook.com/api/session?key=${api}&session=${id}&filename=${filename}`)

  const loaded = ref(false)

  if (loaded.value === false)
    await request()
  loaded.value = true

  return { interview }
}
