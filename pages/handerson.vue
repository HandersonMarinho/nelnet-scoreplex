<template>
  <div class="content">
    <div class="row pt-4">
      <div class="col-6 text-center">
        <h5>Business Information</h5>
      </div>
      <div class="col-6 text-center">
        <h5>Project Estimation</h5>
        <p class="">Given the data entered, we recommended</p>
        <p class="mt-5 h6">Size of Project</p>
        <p class="h5"><b>{{ projectSize }}</b></p>

        <p class="mt-5 h6"># of Developer</p>
        <p class="h5"><b>{{ numberOfDevelopers }}</b></p>

        <p class="mt-5 h6"># of Quality Analysts</p>
        <p class="h5"><b>{{ numberOfQa }}</b></p>

        <p class="mt-5 h6">Approximate time to complete</p>
        <p class="h5"><b>{{ timeToComplete }}</b></p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  // middleware: "auth",

  layout: "empty",

  components: {},

  computed: {},

  data() {
    return {
      projectSize: 0,
      numberOfDevelopers: 0,
      numberOfQa: 0,
      timeToComplete: 0,

      projectName: "",
      businessStatment: "",
      isNewBusiness: false,
      isNewTech: false,
      requirements: [
        {
          code: 0,
          description: "",
          cost: 0,
          scope: 0,
          time: 0,
        },
      ],
    };
  },

  mounted() {
    this.runCalculation();
  },

  methods: {
    runCalculation() {
      // TODO:
      // This is our magic

      this.projectSize = 200;
      this.numberOfDevelopers = 200;
      this.numberOfQa = 200;
      this.timeToComplete = 200;
    },
  },
};
</script>
<style scoped>
</style>
