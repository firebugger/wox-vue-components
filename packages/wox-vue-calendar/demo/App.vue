<template>
  <Calendar 
    :calendar-data="calendarData" 
    :check-callback="callback"
    :month-change="monthChange"
    :select-date="selectDate"
  />
</template>

<script>
import Calendar from '../src/index.vue';
import calendarData from './mock';

export default {
  name: 'App',
  data() {
    return {
      number: '未知',
      calendarData,
      selectDate: ''
    }
  },
  components: { Calendar },
  methods: {
    callback( date ) {
      console.log(date);
      this.selectDate = date.date;
    },
    monthChange() {

    }
  }
}
</script>

<style>
    * {padding: 0; margin: 0;}
    ul, li {
      list-style: none;
    }
</style>
<style lang="less" scoped>
  .f {
    width: 80%;
    margin: 100px auto;
    text-align: center;

    >p {
      margin-bottom: 20px;
    }

    .c {
      border: 1px solid #ccc;
      padding: 20px;

      > p {
        margin-bottom: 20px;
      }
    }
  }
</style>
