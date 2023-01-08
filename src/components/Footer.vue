<script lang="ts" setup>
import { useGettext } from 'vue3-gettext';
import { toggleDark } from '../composables';
const sinceYear = (since: number) => {
    const year = new Date().getFullYear()
    if (year == since) { return `${year}` }
    return `${since}-${year}`
}
const language = useGettext()
</script>

<template>
    <span>&copy; {{ sinceYear(2023) }}</span>
    <el-link href="/">Web Media Manager</el-link>
    <el-select :placeholder="language.available[language.current]" @change="(val: string) => language.current = val">
        <el-option v-for="(name, key) in language.available" :key="key" :label="name" :value="key" />
    </el-select>
    <el-button @click="toggleDark()" b="none!">
        <i inline-flex class="dark:i-mdi-power-sleep i-mdi-white-balance-sunny"></i>
    </el-button>
</template>
