<template>
  <div id="hello">
    <Card class="card">
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>喜欢的电影
      </p>
      <ul>
        <li v-for="item in movieList" :key="item">
          <a :href="item.url" target="_blank">{{ item.name }}</a>
          <span>
            <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
            <Icon type="ios-star" v-if="item.rate >= 9.5"></Icon>
            <Icon type="ios-star-half" v-else></Icon>
            {{ item.rate }}
          </span>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
export default {
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
  min-width: 400px;
  text-align: left;

}
</style>
