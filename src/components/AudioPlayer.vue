<template>
    <div>
        <div class="container">
        <div class="region">
            <el-container class="border-r">
            <el-header><span class="logo">快乐的™播放器</span>
            <div class="input-container clear-fix">
                <el-input class="float" v-model="input" placeholder="请输入内容" ></el-input>
                <el-row class="float"><el-button icon="el-icon-search" circle @click="listPost"></el-button></el-row>
            </div>
                </el-header>
            <el-container>

                <el-container>
                <el-main>Main
                    <audio src=""></audio>
                </el-main>
                <el-footer>
                    <el-button icon="el-icon-caret-left" circle></el-button>
                    <el-button icon="el-icon-video-play" circle></el-button>
                    <el-button icon="el-icon-caret-right" circle></el-button>
                </el-footer>
                </el-container>
                <el-aside width="300px">Aside</el-aside>
                
            </el-container>
            </el-container>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            input: '',
            nowonPlay:''
        }
    },methods:{
        listPost: function(){
            this.$store.dispatch('getList',this.input)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    width: 100%;
    height: auto;
}
.region{
    width: 1200px;
    height: auto;
    margin: 0 auto;

}

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
.logo{
    display: block;
    float: left;

}
.border-r{
    border-radius: 4px;
}
.input-container{
    /* width: 200px; */
    float: right;
}
.float{
    float: left
}
.input-container .el-input{
    width: 200px;
}
</style>
