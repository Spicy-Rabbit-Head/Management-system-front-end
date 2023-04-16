<template>
    <button>
        <slot/>
    </button>
</template>

<script setup>
defineProps({
    z_background_color: {
        type: String,
        default: '#f38181'
    },
    z_hover_color: {
        type: String,
        default: 'white'
    }
})
</script>

<style scoped>
button {
    padding: 0.4em 1.4em;
    border: 2px solid v-bind(z_background_color);
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    -webkit-transition: .3s;
    transition: .3s;
    z-index: 1;
    font-family: inherit;
    color: v-bind(z_background_color);
}

button::before {
    content: '';
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    -ms-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
    background: v-bind(z_background_color);
    -webkit-transition: .5s ease;
    transition: .5s ease;
    display: block;
    z-index: -1;
}

button:hover::before {
    width: 105%;
}

button:hover {
    color: v-bind(z_hover_color);
}
</style>