import useApi from './api'

export default async function useInterviews() {
  const { response: interviews, request } = useApi('')

  const loaded = ref(false)

  if (loaded.value === false)
    await request()
  loaded.value = true

  return { interviews }
}
