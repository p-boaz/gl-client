import useApi from '~/modules/api'
import { SessionUrl } from '~/types'
const api = import.meta.env.VITE_DA_API_KEY

export default async function resumeSession() {
  const { response: sessionUrl, request } = useApi<SessionUrl>(`https://ny.barplaybook.com/api/resume_url?key=${api}&session=${props.id}&i=docassemble.testServer:data/questions/aaDataTypes.yml&json=1`)
  const loaded = ref(false)

  if (loaded.value === false)
    await request()
  loaded.value = true

  return { sessionUrl }
}
