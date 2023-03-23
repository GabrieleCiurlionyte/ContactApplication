import contactPage from "../views/ContactPage.vue"
import detailedContactPage from "../views/DetailedContactPage.vue"
import loginPage from "../views/LoginPage.vue"
import managementPage from "../views/ManagementPage.vue"

export default [
    {path:'/', component: contactPage},
    {path:'/contacts/:id', component: detailedContactPage},
    {path:'/loginPage', component: loginPage},
    {path:'/management/:type', component: managementPage},
] 