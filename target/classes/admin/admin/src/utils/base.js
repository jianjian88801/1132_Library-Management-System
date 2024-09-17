const base = {
    get() {
        return {
            url : "http://localhost:8080/tushuguanli/",
            name: "tushuguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/tushuguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "图书管理系统"
        } 
    }
}
export default base
