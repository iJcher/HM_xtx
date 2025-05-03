import {useIntersectionObserver} from '@vueuse/core'
export const imgLazy= {
    install(app){
        app.directive('img-lazy',(el,binding)=>{
            //el是使用该指令的dom节点，binding是给该指令绑定的表达式
            useIntersectionObserver(
                el,
                ([entry]) => {
                  if(entry?.isIntersecting){
                    el.src=binding.value
                  }
                },
              )
        })
    }
}