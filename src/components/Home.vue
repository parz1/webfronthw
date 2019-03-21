<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>周磊 17181308</h2>
    <Card class="mainbody">
      <Timeline>
        <router-link :to="item.router" v-for="(item,index) in timeLine" :key="index">
        <TimelineItem class="timelineitem">
          <Icon v-if="index==0" type="ios-trophy" slot="dot"></Icon>
          <p class="title">{{item.title}}</p>
          <p class="content">{{item.con}}</p>
        </TimelineItem>
        </router-link>
      </Timeline>
    </Card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "WEB前端设计作业",
      timeLine: [
        {
          title: 'HW1：Interests',
          con: 'Preferred diet&books&movies',
          router: '/HW1'
        },
        {
          title: '封装axios',
          con: '封闭在-api/axios.js中，以便以后请求后端',
          router: ''
        },
        {
          title: '设置Router',
          con: '访问域名自动跳转"/Home"，每次作业对应一个router',
          router: ''
        },
        {
          title: 'Webpack建立Vue项目',
          con: '本地npm构建，上传github',
          router: ''
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: 800;
  font-size: 2rem;
}
h2 {
  font-weight: normal;
  font-size: 1rem;
  margin-top: 0px;
}
ul {
  list-style-type: none;
  padding: 0;
}
.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mainbody {
  margin-top: 20px;
  width: 20%;
  min-width: 300px;
  text-align: left;
}
.title {
  font-weight: 600;
}
.content {
  padding-left: 10px;
  padding-top: 5px;
}
.timelineitem {
  cursor: pointer;
}
</style>
