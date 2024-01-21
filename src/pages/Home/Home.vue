<template>
  <Btn @sendMessage="send" type="success">按钮1</Btn>
  <Btn type="error">按钮2</Btn>
</template>

<script setup lang="ts">
import { h } from 'vue';

interface IProps {
  type: string;
}

const Btn = (props: IProps, ctx: any) => {
  console.log(props);
  console.log(ctx);
  return h(
    'button',
    {
      style: {
        color: props.type === 'success' ? 'green' : 'red',
        border: '1px solid green',
        borderRadius: '5px',
        padding: '5px 10px'
      },
      onClick: () => {
        console.log('我被点击');
      },
      // 双击时触发父组件的send方法
      onDblclick: () => {
        ctx.emit('sendMessage');
      }
    },
    ctx.slots.default()
  );
};

// 子组件触发sendMessage事件时执行的回调
const send = () => {
  console.log('send');
};
</script>

<style scoped lang="less"></style>
