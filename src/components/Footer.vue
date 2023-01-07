<script lang="ts" setup>
import { toggleDark } from '../composables';
const sinceYear = (since: number) => {
    const year = new Date().getFullYear()
    if (year == since) { return `${year}` }
    return `${since}-${year}`
}
</script>

<template>
    <span>&copy; {{ sinceYear(2023) }}</span>
    <el-link href="/">Web Media Manager</el-link>
    <el-button @click="toggleDark()" b="none!">
        <i inline-flex class="dark:i-mdi-power-sleep i-mdi-white-balance-sunny"></i>
    </el-button>
</template>
