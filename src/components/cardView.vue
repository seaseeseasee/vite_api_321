<script setup>

import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="d-flex justify-content-center align-items-center" style="min-height: 100vh;">
    <div class="card" style="width: 18rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <img src="https://lh5.googleusercontent.com/p/AF1QipM0ZFwgLATTLhJMLGfWCEuR0P7VBzj598nYvnhD=w408-h271-k-no" class="card-img-top" >
      <div class="card-body">
        <h5 class="card-title">มหาวิทยาลัยแม่โจ้</h5>
        <p class="card-text">ก่อนไปเรียนอย่าลืมเช็คสภาพอากาศก่อนกันด้วยนะคะ</p>
        <RouterLink to="/WeatherView">
          <button class="btn btn-primary">ดูรายละเอียดเพิ่มเติม</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
