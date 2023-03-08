import koa, { Context } from 'koa';
import json from 'koa-json';
import koaRouter from 'koa-router';
// import bodyParser from 'koa-bodyparser';
import * as data from '../_data';

const app = new koa();
const router = new koaRouter();

// Json prettier middleware
app.use(json());
// // Body middleware
// app.use(bodyParser());

router.get('/', (ctx: Context) => {
  ctx.body = 'Koa Root';
});
router.get('/current-user', (ctx: Context) => {
  ctx.body = data.currentUser;
});

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
