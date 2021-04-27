vue.component('movie-card', {
    props: ['image', 'title'],
    template: `
        <div>
            <img v-bind:src="image" v-bind:alt="title"/>
            <h2>{{ title }}<h2/>
        </div>
    `
})

new vue({
    el: '#app'
})