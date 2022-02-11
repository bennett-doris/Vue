import axios from 'axios';
import {nanoid} from "nanoid"

export default{
  // 人员管理相关功能的配置
  namespaced:true,
  actions: {
    addPerson(context,value){
        value.name.indexOf("王") === 0 ? context.commit("ADDPERSON",value) : alert("添加的人必须姓王");
      },
    addPersonServer(context){
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        response => {
          context.commit("ADDPERSON", {id: nanoid(), name: response.data})
        },
        error => {
          alert(error.message)
        }
      )
    }
  },
  mutations: {
    ADDPERSON(state,value) {
      state.personList.unshift(value)
    }
  },
  state: {
    personList: [
      {"id": "001",name: "张三"}
    ]
  },
  getters: {
    firstPersonName(state) {
      console.log("正常2");
      return state.personList[0].name
    }
  }
}