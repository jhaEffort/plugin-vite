export const routerPlugin = () => {
    return {
        install: (Vue, router) => {
            // const wrap = ()=>{
            //     console.log('执行')
            // }
            // router.afterEach(...args,wrap)
            // function enhancedAfterEach(originalHook) {
            //     return () => {
            //         console.log('Before original hook');

            //         // 调用原始钩子  
            //         originalHook.call(this,...args,()=>{
            //             console.log('111')
            //         });

            //         console.log('After original hook');

            //         // 在这里添加额外的逻辑  
            //     };
            // }
            // const originalAfterEach = router.afterEach;
            // console.log('originalAfterEach',originalAfterEach)
            // router.afterEach = enhancedAfterEach(originalAfterEach);
            // console.log('router.afterEach', router)
        }
    }
}