<template>
  <div class="content">
    <div class="row">
      <div class="col-6">
        FORM HERE
      </div>
      <div class="col-6">
        <h5>Project Estimation</h5>
        <table>
          <tr>
            <td>
              <span>{{ projectSize }}</span>
            </td>
            <td>Size of Project</td>
          </tr>
          <tr>
            <td>
              <span>{{ numberOfDevelopers }}</span>
            </td>
            <td># of Developer</td>
          </tr>
          <tr>
            <td>
              <span>{{ numberOfQa }}</span>
            </td>
            <td># of Quality Analysts</td>
          </tr>
          <tr>
            <td>
              <span>{{ timeToComplete }}</span>
            </td>
            <td>Approximate time to complete</td>
          </tr>
        </table>
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
      score = 0

      this.projectSize = 200;
      this.numberOfDevelopers = 200;
      this.numberOfQa = 200;
      this.timeToComplete = 200;

      score = this.projectSize + this.numberOfDevelopers + this.numberOfQa + this.timeToComplete

      if(this.isNewBusiness)
      {
        score = score*2
      }

      if(this.isNewTech)
      {
        score = score + (score*.5)
      }

      score = score + (score*.5)
    },
  },
};
</script>
<style scoped></style>
