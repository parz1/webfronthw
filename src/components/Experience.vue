<template>
  <div id="hello">
    <Card class="card">
      <p slot="title">简介
      </p>周磊，杭州电子科技大学数字媒体专业本科生，初高中曾参与信息学竞赛获省二等，主攻C/C++以及web前后端技术，曾用QT编写贪吃蛇、vue+iview&node编写安宣线上培训系统，使用u3D制作简易的flappy bird，以及利用Cocoscreator进行微信小游戏的开发。
    </Card>
    <back-btn id="backbtn"></back-btn>
  </div>
</template>

<script>
import BackBtn from "./BackBtn";
export default {
  components: {
    BackBtn
  },
  data() {
    return {
      movieList: [
        {
          name: "The Shawshank Redemption",
          url: "https://movie.douban.com/subject/1292052/",
          rate: 9.6
        },
        {
          name: "Leon:The Professional",
          url: "https://movie.douban.com/subject/1295644/",
          rate: 9.4
        },
        {
          name: "Farewell to My Concubine",
          url: "https://movie.douban.com/subject/1291546/",
          rate: 9.5
        }
      ]
    };
  }
};
</script>

<style scoped>
#hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  margin-top: 20px;
  width: 40%;
  min-width: 320px;
  text-align: left;
}
</style>
