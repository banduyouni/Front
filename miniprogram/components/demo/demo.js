import { ComponentWithStore } from 'mobx-miniprogram-bingdings'
import { demoStore } from '../../stores/demo'

const computedBehavior = require('miniprogram-computed').behavior

ComponentWithStore({

  // 注册behavior
  behavior: [computedBehavior],

  computed: {
    total(data){
      return data.a + data.b
    }
  },

  watch:{
    'a, b':function(a, b){
      console(a, b)
    }
  },

  data: {
    a:1,
    b:1
  },

  methods: {
    
  },

  storeBindings :{
    store: demoStore,
    fields: ['numA', 'numB', 'sum'],
    actions: ['update']
  }

})
