//将所有通用的组件注册为插件，提高性能
import ImgView from "./ImgView/ImgView.vue";
import skuIndex from "./SKU/skuIndex.vue";
export const componentsPlugin={
    install(app){
        //全局注册
        app.component('XtxImgView',ImgView)
        app.component('XtxSku',skuIndex)
    }
}