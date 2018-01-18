<template>
  <div>
    <div v-for="time in timeline" class="row">
      <div class="col-md-4">
        <q-card inline class="bigger">
          <q-card-media>
            <img :src="time.picture">
          </q-card-media>
          <q-card-title>
            {{time.tweet}}

          </q-card-title>
          <q-card-main >
            <p class="text-faded">{{time.hastag}}</p>
          </q-card-main>
          <q-card-separator />
          <q-card-actions >
            <q-btn flat color="primary">Edit</q-btn>
          </q-card-actions>

        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  QCard,
  QCardTitle,
  QCardMedia,
  QCardActions,
  QCardSeparator,
  QCardMain,
  QList,
  QItem,
  QItemMain,
  QItemSide,
  QItemTile,
  QCollapsible,
  QRating,
  QBtn,
  QParallax,
  QIcon,
  QPopover

} from 'quasar'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    QCard,
    QCardTitle,
    QCardMedia,
    QCardActions,
    QCardSeparator,
    QCardMain,
    QList,
    QItem,
    QItemMain,
    QItemSide,
    QItemTile,
    QCollapsible,
    QRating,
    QBtn,
    QParallax,
    QIcon,
    QPopover
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'getTimeLine'
    ])
  },
  computed: {
    ...mapState([
      'timeline'
    ])
  },
  created () {
    this.getTimeLine()
  }
}
</script>

<style>
</style>
