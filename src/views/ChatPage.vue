<template>
  <div>
    <p v-for="(message, i) in messages" :key="i">
      {{ message.message }}: {{ i + 1 }} <br />
      Date:{{ message.date }}
    </p>
  </div>
</template>
<script>
export default {
  data: () => ({
    messages: [
      { message: 'This is message number', date: new Date().toDateString() },
      //   { message: 'This is message number' },
      //   { message: 'This is message number' },
      //   { message: 'This is message number' },
      //   { message: 'This is message number' },
      //   { message: 'This is message number' },
      //   { message: 'This is message number' },
    ],
  }),
};
</script>
<style></style>
