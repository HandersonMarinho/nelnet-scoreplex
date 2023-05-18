<template>
  <div class="content">
    <div class="row pt-4">
      <div class="col-6">
        <h5>
          <i class="fa fa-briefcase mr-2" aria-hidden="true"></i>
          Business Information
        </h5>
        <form class="col-8 offset-2">
          <div class="form-group">
            <label for="inputProjectName">Project Name</label>
            <input
              type="text"
              class="form-control"
              id="inputProjectName"
              v-model="projectName"
            />
          </div>
          <div class="form-group">
            <label for="inputBusinessStatement">Business Statement</label>
            <textarea
              class="form-control"
              id="inputBusinessStatement"
              rows="3"
              v-model="businessStatement"
            >
            </textarea>
          </div>
          <div class="custom-control custom-checkbox my-1 mr-sm-2">
            <input
              type="checkbox"
              class="custom-control-input"
              id="inputNewBusiness"
              v-model="isNewBusiness"
            />
            <label class="custom-control-label" for="inputNewBusiness"
              >Is it a new Business?</label
            >
          </div>
          <div class="custom-control custom-checkbox my-1 mr-sm-2">
            <input
              type="checkbox"
              class="custom-control-input"
              id="inputNewTech"
              v-model="isNewTech"
            />
            <label class="custom-control-label" for="inputNewTech"
              >New technology needed for this project?</label
            >
          </div>
          <br />
          <h6>Requirements</h6>
          <div class="row">
            <div class="col-12">
              <label for="inputDescription">Description</label>
              <textarea class="form-control" id="inputDescription" rows="5">
              </textarea>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-4 p-1">Cost</div>
            <div class="col-4 p-1">Scope</div>
            <div class="col-4 p-1">Time</div>
          </div>
          <div class="row">
            <div class="col-4 p-1">
              <input
                type="number"
                min="1"
                max="9"
                class="form-control mb-2 mr-sm-2"
                id="inputCost"
                placeholder="Cost"
              />
            </div>
            <div class="col-4 p-1">
              <input
                type="number"
                min="1"
                max="9"
                class="form-control mb-2 mr-sm-2"
                id="inputScope"
                placeholder="Scope"
              />
            </div>
            <div class="col-4 p-1">
              <input
                type="number"
                min="1"
                max="9"
                class="form-control mb-2 mr-sm-2"
                id="inputTime"
                placeholder="Time"
              />
            </div>
          </div>

          <p>
            Scope: <i>Refers to complexity</i> <br />
            Cost: <i>Resources needed to complete</i> <br />
            Time: <i>To produce deliverable results</i><br />
            Where (1) <b>High</b> and (9) <b>Low</b>
          </p>

          <div class="row">
            <input
              type="button"
              class="btn btn-default btn-sm"
              value="Add Requirement"
              @click="addRequirement()"
            />
          </div>

          <div class="row mt-2 mb-2 req_item" v-for="item in this.requirements">
            <p :key="item.code" class="m-2">
              <i
                class="fa fa-times mr-1 text-danger"
                @click="removeRequirement(item.code)"
                aria-hidden="true"
              ></i>
              {{ item.description }}
            </p>
          </div>

          <input
            type="button"
            value="Estimate it"
            class="btn btn-primary btn-sm btn-block mt-3"
            @click="runCalculation()"
          />
        </form>
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

        <p class="mt-5">
          <button
          @click="exportPdf()"
          class="btn btn-default btn-sm">
            <i class="fa fa-file-pdf-o mr-2" aria-hidden="true"></i> EXPORT PDF REPORT
          </button>
        </p>

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
      businessStatement: "",
      isNewBusiness: false,
      isNewTech: false,
      requirements: [],
    };
  },

  mounted() {},

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
      this.replayBouncing();
    },

    removeRequirement(code) {
      this.requirements = this.requirements.filter((r) => r.code !== code);
    },
    addRequirement() {
      let data = {
        projectName: this.projectName,
        businessStatement: this.businessStatement,
        isNewBusiness: this.isNewBusiness,
        isNewTech: this.isNewTech,
      };

      let reqNumbers = {
        cost: $("#inputCost").val(),
        scope: $("#inputScope").val(),
        time: $("#inputTime").val(),
      };
      this.requirements.push({
        code: new Date().getTime(),
        description: `${$("#inputDescription").val()} - Cost(${
          reqNumbers.cost
        }) Scope(${reqNumbers.scope}) Time(${reqNumbers.time})`,
        ...reqNumbers,
      });

      // Clear form for next
      $("#inputDescription").val("");
      $("#inputCost").val("");
      $("#inputScope").val("");
      $("#inputTime").val("");
    },

    exportPdf(){
      console.log('PDF')
    }
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

.req_item {
  word-break: break-all !important;
}
</style>
