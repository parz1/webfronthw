<template>
  <div id="hello">
    <Card class="card">
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>作品
      </p>
      
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
