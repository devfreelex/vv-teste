import { r9x } from 'r9x_js'

import main from './components/appMain/appMain.component'
import appNotFound from './components/appNotFound/appNotFound.component'
import appTransaction from './components/appTransaction/appTransaction.component'


const routes = {
    firstRoute: { hash: '#/', component: appTransaction },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appTransaction },
    ]
}

const app = r9x()

app.use({
    main,
    routes,
})

app.init()