<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>周磊 17181308</h2>
    <Timeline>
        <TimelineItem color="green">
            <Icon type="ios-trophy" slot="dot"></Icon>
            <span>发布里程碑版本</span>
        </TimelineItem>
        <TimelineItem>发布1.0版本</TimelineItem>
        <TimelineItem>发布2.0版本</TimelineItem>
        <TimelineItem>发布3.0版本</TimelineItem>
    </Timeline>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'WEB前端设计作业'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: 800;
}
h2 {
  font-weight: normal;
  font-size: 1.5rem;
  margin-top: -10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
