<template>
  <div>
    <h1 class="text-h1 font-bold text-center pt-10">
      Hello Nudger !
      <v-icon icon="mdi-thumb-up" color="green" size="med" />
    </h1>

    <h4 class="text-grey-darken-1 text-center pt-10">
      A Nuxt template with Vuetify on It.
    </h4>

    <v-row class="pa-10">
      <v-card
        class="mx-auto"
        prepend-icon="$vuetify"
        subtitle="The #1 Vue UI Library"
        width="400"
      >
        <template #title>
          <span class="font-weight-black">Welcome to Vuetify</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<!-- index page -->