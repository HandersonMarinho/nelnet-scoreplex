<template>
  <div class="content">
    <div class="row">
      <div class="col-6">
        <form class="col-8 offset-2">
          <h3>Enter a new requeriment:</h3>
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
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
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
