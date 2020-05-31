Page({
 data: {
   name:'bradley',
   age:18,
   students:[
     {id:1,name:'a',age:20},
     {id:2,name:'aa',age:20},
     {id:3,name:'aaa',age:40}
    ],
    counter:0
 },
 add() {
   this.setData({
       counter: this.data.counter+1
   })
 },
 sub(){
   this.setData({
     counter:this.data.counter-1
   })
 }
})