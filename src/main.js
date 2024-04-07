import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// custom directives
app.directive('font-size', {
    // eslint-disable-next-line no-unused-vars
    beforeMount: (ele, binding) =>{
        ele.style.fontSize = '70px'
        
    }
})

// app.directive('custom-size', {
//     beforeMount: (ele, binding) => {
//         ele.style.fontSize = binding.value + 'px'
//     }
// })

app.directive('custom-size', {
    beforeMount: (ele, binding) => {
        let size = 18
        switch(binding.arg) {
            case 'sm':
                size = 10
                break
            case 'md':
                size = 18
                break
            case 'lg':
                size = 25
                break
            case 'xl':
                size = 40
                break
            case 'xxl':
                size = 70
        }
        ele.style.fontSize = size + 'px'
        }
    })

    app.directive('custom-font',{
        beforeMount:(ele, binding) => {
let size = 18
if(binding.modifiers.sm){
    size =10
} else if (binding.modifiers.lg){
    size = 25
} else if(binding.modifiers.xl){
    size = 72
}
ele.style.fontSize = size + 'px'
if (binding.modifiers.red){
    ele.style.color = '#ff0000'
}
else if ( binding.modifiers.blue){
    ele.style.color = '#0000ff'
}
else if (binding.modifiers.green){
    ele.style.color = '#00ff00'
}
}
})

app.mount('#app')
