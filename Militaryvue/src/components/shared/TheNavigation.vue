<template>
    <nav>
        <ul>
        <li><router-link to="/">Hjem</router-link></li>
        <li><router-link to="soldiers">Soldater</router-link></li>
        <li><router-link to="about">Om oss</router-link></li>
        </ul>
    </nav>
   <router-view/>
</template>