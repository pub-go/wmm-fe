<script lang="ts" setup>
import { reactive } from 'vue';
import Footer from '../components/Footer.vue';
import request from '../request';
const user = reactive({
    username: '',
    password: '',
})
const onSubmit = async () => {
    console.log(user)
    try {
        const response = await request.post('/api/login', user)
        console.log('登录响应', response.data)
        if (response.data.code == 0) {
            console.log('登录成功')
        } else {
            console.log('登录失败')
        }
    } catch (e) {
        console.log('登录失败', e)
    }
}
</script>

<template>
    <el-container>
        <el-main>
            <el-form label-width="100px" p-2 rounded :model="user" class="bg">
                <el-form-item :label="$gettext('Username')">
                    <el-input v-model="user.username" />
                </el-form-item>
                <el-form-item :label="$gettext('Password')">
                    <el-input type="password" v-model="user.password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">{{ $gettext("Login") }}</el-button>
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer class="bg">
            <Footer />
        </el-footer>
    </el-container>
</template>

<style scoped>
.el-container {
    --container-bg: #00000000;
    background-color: var(--el-bg-color);
    background: linear-gradient(45deg, var(--container-bg), var(--container-bg)), url('http://cn.bing.com/ImageResolution.aspx?w=1920&h=1200') no-repeat center fixed;
    background-size: cover;
    height: 100vh;
}

.dark .el-container {
    --container-bg: #00000080;
}

.el-main {
    height: 100%;
    width: 500px;
    max-width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bg {
    --bg-color-transparent: #dcdcdc80;
    --el-text-color-regular: #000;
    background-color: var(--bg-color-transparent);
}

.dark .bg {
    --bg-color-transparent: #24242480;
    --el-text-color-regular: unset;
}

.el-footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>
