import contactPage from "../views/ContactPage.vue"
import detailedContactPage from "../views/DetailedContactPage.vue"
import loginPage from "../views/LoginPage.vue"

export default [
    {path:'/', component: contactPage},
    {path:'/detailContactPage', component: detailedContactPage},
    {path:'/loginPage', component: loginPage},
] 