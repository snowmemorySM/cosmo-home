<template>
  <div class="center-box">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.center-box {
  position: relative;
  width: 65%;
  margin: 0 auto;
  min-height: 400px;
  margin-top: 20px;
}

.policy-box {
  text-align: left;
  font-size: 15px;
}

.policy-box .block,
.policy-box .num-block {
  position: relative;
  margin-top: 10px;
}

.policy-box .block {
  margin: 15px;
}

.policy-box .iden {
  text-indent: 1em;
}

.policy-box .num-block ol li {
  margin-bottom: 5px;
}

.right-info {
  position: absolute;
  right: 40px;
}

.left-info {
  position: relative;
  display: block;
  margin-top: 120px;
  left: 20px;
}

.left-info ul,
.right-info ul{
  margin: 0;
  list-style:none;
  margin: 0;
  padding: 0;
}

.sub-radi {
  border: 1px solid;
  padding: 10px 0 10px;
}

.sub-radi .col-2 {
  margin-left: 10px;
}

.menu-disc ol {
  padding-left: 20px;
} 
.menu-disc ul{
  list-style: disc;
  padding-left: 10px;
}

</style>