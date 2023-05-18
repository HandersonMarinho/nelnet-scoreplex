<template>
  <div class="content">
    <div class="row pt-4">
      <div class="col-6 text-center">
        <h5>
          <i class="fa fa-briefcase mr-2" aria-hidden="true"></i>
          Business Information
        </h5>
      </div>
      <div class="col-6 text-center shadow bounce">
        <h5>
          <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
          Project Estimation
        </h5>
        <p class="">Given the data entered, we recommended</p>
        <p class="mt-5 h6">Size of Project</p>
        <p class="h5">
          <b>{{ projectSize }}</b>
        </p>

        <p class="mt-5 h6"># of Developer</p>
        <p class="h5">
          <b>{{ numberOfDevelopers }}</b>
        </p>

        <p class="mt-5 h6"># of Quality Analysts</p>
        <p class="h5">
          <b>{{ numberOfQa }}</b>
        </p>

        <p class="mt-5 h6">Approximate time to complete</p>
        <p class="h5">
          <b>{{ timeToComplete }}</b>
        </p>

        <button @click="replayBouncing()">Click me</button>
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
    replayBouncing() {
      $(".bounce").css({ display: "none" });
      setTimeout(() => {
        $(".bounce").css({ display: "block" });
      }, 100);
    },

    runCalculation() {
      this.score = 0;

      this.projectSize = 200;
      this.numberOfDevelopers = 200;
      this.numberOfQa = 200;
      this.timeToComplete = 200;

      this.score =
        this.projectSize +
        this.numberOfDevelopers +
        this.numberOfQa +
        this.timeToComplete;

      if (this.isNewBusiness) {
        this.score = this.score * 2;
      }

      if (this.isNewTech) {
        this.score = this.score + this.score * 0.5;
      }

      this.score = this.score + this.score * 0.5;
    },
  },
};
</script>
<style scoped>
.bounce {
  bottom: 0;
  -webkit-animation: bounce 0.5s;
}

@-webkit-keyframes bounce {
  0% {
    bottom: 5px;
  }
  25%,
  75% {
    bottom: 15px;
  }
  50% {
    bottom: 20px;
  }
  100% {
    bottom: 0;
  }
}
</style>
