<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>单张图</h2>
    <vue-viewer style="display: inline-block"
      :thumb="image"
      :full="image">
    </vue-viewer>
    <h2>多张图</h2>
    <vue-viewer multiple
      :thumb="imageList"
      list-ul-class="image-list"
      :full="imageList">
      <template slot-scope="target">
        <span class="icon-remove" @click.stop="onRemove(target.index)" style="">&times;</span>
      </template>
    </vue-viewer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'vue2-viewer-test',
      image: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3427452369,2586833644&fm=173&app=25&f=JPEG?w=580&h=347&s=908FF35A050626E2428C001E030090D6',
      imageList: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550224739247&di=512032866bea6329b1e46c735d50ac8b&imgtype=0&src=http%3A%2F%2Fimglf2.ph.126.net%2FdHH6OM2rD8JucPGAotUfag%3D%3D%2F6608219914074710297.jpg',
        'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=488030022,1694816207&fm=173&app=25&f=JPEG?w=580&h=347&s=A08FB35A5E0616C664F5631C030010D6',
        'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2574767313,3929397124&fm=173&app=25&f=JPEG?w=580&h=868&s=B784EEA3460236E17A1F137F0300A058'
      ]
    }
  },
  methods: {
    onRemove(index) {
      alert(index);
    }
  }
}
</script>

<style>
.image-list{
  margin: 0; padding: 0
}
.image-list li {
  display: inline-block;
  margin: 0 10px;
  list-style: none;
  position: relative;
}
.image-list li img {
  box-shadow: 0 0 5px #333;
}
.icon-remove{
  width: 20px; height:20px; 
  text-align: center; line-height: 20px;
  background:#f33; 
  position:absolute; top:-10px; right:-10px;
  border-radius: 10px;
  cursor: pointer;
  color:#fff;
}
a {
  color: #42b983;
}
</style>
