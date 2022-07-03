<template>
  <div class="content">
    <el-form ref="form" class="content-form" :model="form" label-width="100px">
      <el-form-item label="网站的标题">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="标题第一句话">
        <el-input v-model="form.title1" />
      </el-form-item>
      <el-form-item label="标题第二句话">
        <el-input v-model="form.title2" />
      </el-form-item>
      <el-form-item label="恋爱日期">
        <el-date-picker
          v-model="form.loveTime"
          type="date"
          format="yyyy年 MM月 dd日"
          value-format="yyyy,MM,dd"
          placeholder="选择日期"
        />
      </el-form-item>

      <!-- page1 -->
      <el-form-item label="页码一">
        <br>
        <div v-for="(item,index) in form.page1" :key="index" class="page1-box">
          <div class="page1-box-left">
            <!--网址url-->
            <el-form-item label="网址URL">
              <el-input v-model="item.img_url" />
            </el-form-item>
            <!--图片简介-->
            <el-form-item label="图片简介">
              <el-input v-model="item.img_detail" />
            </el-form-item>
            <!--第一句话-->
            <el-form-item v-for="( p , i) in item.partArr" :key="i" :label=" `第${i+1}句话`">
              <div style="display: flex">
                <div style="flex: 1;margin-bottom: 10px;">
                  <el-input v-model="item.partArr[i]" />
                </div>
                <div style="padding: 0 10px;">
                  <el-button
                    v-if="i === item.partArr.length -1"
                    type="success"
                    size="mini"
                    @click="page1ItemPlus(index)"
                  > +
                  </el-button>
                  <el-button
                    v-if="i === item.partArr.length -1 && i !== 0"
                    type="warning"
                    size="mini"
                    @click="page1ItemCut(index)"
                  > -
                  </el-button>
                </div>
              </div>

            </el-form-item>
          </div>
          <div class="page1-box-right">
            <el-button v-if="index === form.page1.length -1 " type="success" @click="page1Plus"> +</el-button>
            <br>
            <el-button v-if="index === form.page1.length -1 && index !== 0" type="warning" @click="page1Cut"> -
            </el-button>
          </div>
        </div>
      </el-form-item>

      <!-- page2 -->
      <el-form-item label="页码二">
        <br>
        <div v-for="(item,index) in form.page2" :key="index" class="page1-box">
          <div class="page1-box-left">
            <!--网址url-->
            <el-form-item label="网址URL">
              <el-input v-model="item.img_url" />
            </el-form-item>
            <!--图片简介-->
            <!--第一句话-->
            <el-form-item v-for="( p , i) in item.partArr" :key="i" :label=" `第${i+1}句话`">
              <div style="display: flex">
                <div style="flex: 1;margin-bottom: 10px;">
                  <el-input v-model="item.partArr[i]" />
                </div>
                <div style="padding: 0 10px;">
                  <el-button
                    v-if="i === item.partArr.length -1"
                    type="success"
                    size="mini"
                    @click="page2ItemPlus(index)"
                  > +
                  </el-button>
                  <el-button
                    v-if="i === item.partArr.length -1 && i !== 0"
                    type="warning"
                    size="mini"
                    @click="page2ItemCut(index)"
                  > -
                  </el-button>
                </div>
              </div>

            </el-form-item>
          </div>
          <div class="page1-box-right">
            <el-button v-if="index === form.page2.length -1 " type="success" @click="page2Plus"> +</el-button>
            <br>
            <el-button v-if="index === form.page2.length -1 && index !== 0" type="warning" @click="page2Cut"> -
            </el-button>
          </div>
        </div>

      </el-form-item>

      <el-form-item label="页面三 ">
        <div class="page1-box">
          <br>
          <div class="page1-box-left">
            <!--第一句话-->
            <el-form-item v-for="( p , i) in form.page3" :key="i" :label=" `第${i+1}句话`">
              <div style="display: flex">
                <div style="flex: 1;margin-bottom: 10px;">
                  <el-input v-model="form.page3[i]" />
                </div>
                <div style="padding: 0 10px;">
                  <el-button
                    v-if="i === form.page3.length -1"
                    type="success"
                    size="mini"
                    @click="form.page3.push('')"
                  > +
                  </el-button>
                  <el-button
                    v-if="i === form.page3.length -1 && i !== 0"
                    type="warning"
                    size="mini"
                    @click="form.page3.pop()"
                  > -
                  </el-button>
                </div>
              </div>
            </el-form-item>
          </div>
        </div>
      </el-form-item>

      <el-form-item label="页面四">
        <div class="page1-box">
          <br>
          <div class="page1-box-left">
            <!--第一句话-->
            <el-form-item v-for="( p , i) in form.page4" :key="i" :label=" `第${i+1}张照片`">
              <div style="display: flex">
                <div style="flex: 1;margin-bottom: 10px;">
                  <el-input v-model="form.page4[i]" />
                </div>
                <div style="padding: 0 10px;">
                  <el-button
                    v-if="i === form.page4.length -1"
                    type="success"
                    size="mini"
                    @click="form.page4.push('')"
                  > +
                  </el-button>
                  <el-button
                    v-if="i === form.page4.length -1 && i !== 0"
                    type="warning"
                    size="mini"
                    @click="form.page4.pop()"
                  > -
                  </el-button>
                </div>
              </div>
            </el-form-item>
          </div>
        </div>
      </el-form-item>

      <el-form-item label="结尾标题">
        <el-input v-model="form.h1" />
      </el-form-item>

      <!-- 结尾内容 -->
      <el-form-item label="结尾内容">
        <div class="page1-box">
          <br>
          <div class="page1-box-left">
            <!--第一句话-->
            <el-form-item v-for="( p , i) in form.content" :key="i" :label=" `第${i+1}句话`">
              <div style="display: flex">
                <div style="flex: 1;margin-bottom: 10px;">
                  <el-input v-model="form.content[i]" />
                </div>
                <div style="padding: 0 10px;">
                  <el-button
                    v-if="i === form.content.length -1"
                    type="success"
                    size="mini"
                    @click="form.content.push('')"
                  > +
                  </el-button>
                  <el-button
                    v-if="i === form.content.length -1 && i !== 0"
                    type="warning"
                    size="mini"
                    @click="form.content.pop()"
                  > -
                  </el-button>
                </div>
              </div>
            </el-form-item>
          </div>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="preview">点击预览</el-button>
      </el-form-item>
    </el-form>

    <!--弹出窗-->
    <el-dialog
      title="成功"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-input v-model="inputData" placeholder="链接地址" style="width:400px;max-width:100%;" />
      <el-button
        type="primary"
        icon="el-icon-document"
        style="width:100px;max-width:100%;"
        @click="handleCopy(inputData,$event)"
      >
        复制
      </el-button>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { preview } from '@/api/user'
import clip from '@/utils/clipboard'

export default {
  name: 'Documentation',
  components: {},
  data() {
    return {
      form: {
        title: '',
        title1: '',
        title2: '',
        page1: [{
          loveTime: '',
          img_url: '',
          img_detail: '',
          partArr: [' ']
        }],
        page2: [{
          img_url: '',
          partArr: [' ']
        }],
        page3: [''],
        page4: [''],
        h1: '',
        content: ['']
      },
      dialogVisible: false,
      inputData: ''
    }
  },
  methods: {
    // 点击预览
    async preview() {
      const { data, success } = await preview(this.form)
      debugger
      if (success) {
        this.dialogVisible = true
        this.inputData = `http://localhost:3000/love?id=${data}`
      }
    },
    onSubmit() {
      console.log(this.form)
    },
    handleCopy(text, event) {
      clip(text, event)
    },
    page1Plus() {
      this.form.page1.push({
        loveTime: '',
        img_url: '',
        img_detailL: '',
        partArr: ['']
      })
    },
    page1Cut() {
      this.form.page1.pop()
    },
    page1ItemPlus(i) {
      this.form.page1[i].partArr.push(' ')
    },
    page1ItemCut(i) {
      this.form.page1[i].partArr.pop()
    },
    page2Plus() {
      this.form.page2.push({
        img_url: '',
        partArr: [' ']
      })
    },
    page2Cut() {
      this.form.page2.pop()
    },
    page2ItemPlus(i) {
      this.form.page2[i].partArr.push('')
    },
    page2ItemCut(i) {
      this.form.page2[i].partArr.pop()
    },
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 20px;

  .content-form {
    width: 80vw;
  }

  .page1-box {
    padding: 20px 30px 20px 10px;
    border: 1px solid #dce0e6;
    border-radius: 10px;
    display: flex;
    margin-bottom: 20px;

    .page1-box-left {
      flex: 1;
      margin-right: 20px;
    }

    .page1-box-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .el-form-item {
      margin-bottom: 10px;
    }

  }

}

</style>
