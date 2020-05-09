<template>
  <background style="text-align: center;">
    <el-row type="flex" justify="center" align="center" style="top: 80px;">
      <el-col :span="this.$device.isDesktop===true?10:20">
        <el-card v-if="dialogVisible" :body-style="{ padding: '0px' }">
          <!-- <img v-if="imgRoute!==''" :src="imgRoute" /> -->
          <div style="text-align: center;">
            <img src="../assets/runner.jpg" width="100%" />
          </div>
          <div style="padding: 12px;">
            <h2>众星云集·悦跑公益</h2>
            <span style="font-size: 14px;">解锁公益新方式，你的每一步都算数</span>
            <el-input v-model="name" placeholder="请输入姓名以获取证书" style="margin-top: 10px;">
              <el-button type="primary" slot="append" @click="getImgRoute()">点击提交</el-button>
            </el-input>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </background>
</template>

<script>
import { Input, Row, Col, Button, Card } from "element-ui";
import Background from "../components/Background";
export default {
  components: {
    "el-input": Input,
    "el-row": Row,
    "el-col": Col,
    "el-button": Button,
    "el-card": Card,
    background: Background
  },
  data() {
    return {
      name: "",
      imgRoute: "",
      dialogVisible: true
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = !this.dialogVisible;
    },
    getImgRoute() {
      try {
        this.imgRoute = require("../assets/" + this.name + "_1.png");
      } catch (e) {
        this.$message({
          message: "似乎没有找到您的证书呢~",
          type: "warning"
        });
        return ;
      }
      this.showDialog();
      this.$router.push({
        name: 'certification',
        path: '/certification',
        query: {
          imgRoute: this.imgRoute
        }
      })
    },
  }
};
</script>

<style lang="less" scoped>
</style>