<script lang="ts">
import ResumeButton from './ResumeButton.vue'
import useApi from '~/modules/api'
import getInterview from '~/modules/interview'
import { Interview } from '~/types'
const api = import.meta.env.VITE_DA_API_KEY
const router = useRouter()

export default defineComponent({
  name: 'DetailCard',
  components: {
    ResumeButton,
  },
  props: {
    filename: String,
    id: String,
  },

  async setup(props) {
    getInterview()
    const { response: interview, request } = useApi<Interview>(`https://ny.barplaybook.com/api/session?key=${api}&session=${props.id}&i=docassemble.testServer:data/questions/aaDataTypes.yml&json=1`)

    const loaded = ref(false)

    if (loaded.value === false)
      await request()
    loaded.value = true

    return { interview }
  },
  // computed: {
  //   lastUpdated() {
  //     return {{ formatDate(interview._internal.modtime) }}
  //   },
  // },
  methods: {
    formatDate() {
      const date = new Date()
      return new Intl.DateTimeFormat('default', { dateStyle: 'full', timeStyle: 'long' }).format(date)
    },
  },
})
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg m-8">
    <div class="flex flex-row items-center justify-between px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        {{ interview.product }}
      </h3>
      <resume-button :id="id" />
    </div>

    <div v-if="interview.data_types.elements" class="px-4 py-5 sm:px-6">
      <span>Processing overview</span>
      <ul
        v-for="element in interview.data_types.elements"
        :key="element"
        class="list-disc mx-8"
      >
        <li
          v-for="(key) of element.details.elements"
          :key="key"
          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
        >
          <p>
            {{ key.name }} Data from {{ key.data_subjects }} for {{ key.purpose }}
          </p>
        </li>
      </ul>
    </div>

    <div v-if="interview.users" class="border-t border-gray-200">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Last updated
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ formatDate(interview._internal.modtime) }}
            <ul v-for="value in interview.users.elements" :key="value" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              by {{ value.name.first }} {{ value.name.last }}
            </ul>
          </dd>
        </div>
        <!-- <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Application for
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Backend Developer
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Last Updated by
          </dt>
          <dd v-for="value in interview.users.elements" :key="value" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ value.name.last }}, {{ value.name.first }}
          </dd>
        </div> -->

        <div v-if="interview.data_types.elements" class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Data Types
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul class="list-disc mx-4">
              <li
                v-for="element in interview.data_types.elements"
                :key="element"
                class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
              >
                {{ element.details.elements }}
                <ul>
                  <li v-for="key of element.details.elements" :key="key">
                    {{ key.name }}
                  </li>
                </ul>
              </li>
            </ul>
          </dd>
        </div>

        <div v-if="interview.transfer_details" class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Transfer Details
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
              <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                <div class="w-0 flex-1 flex items-center">
                  <foundation:paperclip class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span class="ml-2 flex-1 w-0 truncate">
                    {{ interview.transfer_details.exporting_country.name }}
                  </span>
                </div>
                <div class="w-0 flex-1 flex items-center">
                  <span class="ml-2 flex-1 w-0 truncate">
                    {{ interview.transfer_details.exporting_country.level_of_protection }}
                  </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Learn more
                  </a>
                </div>
              </li>
              <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                <div class="w-0 flex-1 flex items-center">
                  <foundation:paperclip class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span class="ml-2 flex-1 w-0 truncate">
                    {{ interview.transfer_details.importing_country.name }}
                  </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Learn more
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>

        <div v-if="interview.transfer_details" class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Recommendations
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ interview.transfer_details }}
          </dd>
        </div>
      </dl>
      <div>
        <button
          class="btn m-3 text-sm mt-6"
          @click="$router.back()"
        >
          Back
        </button>
      </div>
    </div>
  </div>
</template>
