<template>
  <div>
    <a href="#" class="bg-red-500 hover:bg-red-400 border-b-4 border-red-700 hover:border-red-500 text-white text-center py-2 px-4 rounded" @click="modalOpen = true">
      Update
      <teleport to="body">
        <div v-if="modalOpen" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
          <div class="relative w-auto my-6 mx-auto max-w-6xl">
            <!--content-->
            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <!--header-->
              <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 class="text-3xl font-semibold">
                  Update data
                </h3>
                <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" @click="toggleModal()">
                  <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    <ant-design:close-circle-filled />
                  </span>
                </button>
              </div>
              <!--body-->
              <div class="relative p-6 flex-auto">
                <iframe
                  :src="sessionUrl"
                  frameborder="0"
                  height="600"
                  width="700"
                >
                </iframe>
              </div>
              <!--footer-->
              <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="toggleModal()">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="modalOpen" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </teleport>
    </a>
  </div>
</template>

<script lang="ts">
const api = import.meta.env.VITE_DA_API_KEY

export default {
  name: 'ResumeButton',
  inheritAttrs: false,
  props: {
    id: null,
  },
  data() {
    return {
      sessionUrl: null,
      modalOpen: false,
    }
  },
  async created() {
    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify ({
        session: this.id,
        i: 'docassemble.testServer:data/questions/aaDataTypes.yml',
      }),
    }
    const response = await fetch(`https://ny.barplaybook.com/api/resume_url?key=${api}`, requestOptions)
    const data = await response.json()
    this.sessionUrl = data
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen
    },
  },
}
</script>

<style>
.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>
