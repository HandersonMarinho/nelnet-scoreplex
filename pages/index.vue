<template>
  <div class="content">
    <div class="row">
      <div class="col-6">
        <form class="col-8 offset-2">
          <h3>Enter a new requeriment</h3>
          <div class="form-group">
            <label for="inputProjectName">Project Name</label>
            <input
              type="text"
              class="form-control"
              id="inputProjectName"
              aria-describedby="projectNameHelp"
            />
          </div>
          <div class="form-group">
            <label for="inputBusinessStatement">Business Statement</label>
            <textarea class="form-control" id="inputBusinessStatement" rows="3">
            </textarea>
          </div>
          <div class="custom-control custom-checkbox my-1 mr-sm-2">
            <input
              type="checkbox"
              class="custom-control-input"
              id="inputNewBusiness"
            />
            <label class="custom-control-label" for="inputNewBusiness"
              >New Business</label
            >
          </div>
          <div class="custom-control custom-checkbox my-1 mr-sm-2">
            <input
              type="checkbox"
              class="custom-control-input"
              id="inputNewTech"
            />
            <label class="custom-control-label" for="inputNewTech"
              >New Tech</label
            >
          </div>
          <br />
          <h6>Requirements</h6>
          <div class="row">
            <div class="col-6">
              <label for="inputRequirements">Description</label>
              <textarea class="form-control" id="inputRequirements" rows="5">
              </textarea>
            </div>
            <div class="col-6">
              <br />
              <label class="sr-only" for="inputCost">Cost</label>
              <input
                type="number"
                min="1"
                max="9"
                class="form-control mb-2 mr-sm-2"
                id="inputCost"
                placeholder="Cost"
              />
              <label class="sr-only" for="inputCost">Scope</label>
              <input
                type="number"
                min="1"
                max="9"
                class="form-control mb-2 mr-sm-2"
                id="inputScope"
                placeholder="Scope"
              />
              <label class="sr-only" for="inputCost">Time</label>
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
          <div class="row">
            <input
              type="button"
              class="btn btn-primary btn-lg btn-block"
              value="Add Requirement"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block">
            Calculate it
          </button>
        </form>
      </div>
      <div class="col-6">
        seconde column
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
      something: "something",
    };
  },

  mounted() {},

  methods: {
    doIt() {
      alert(1);
    },
  },
};
</script>
<style scoped></style>
