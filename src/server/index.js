import 'source-map-support/register';//追中代码
import express from 'express';
import compression from 'compression';
import config from '../../tool/config'

const app = express();
app.disable('x-powered-by');
app.use(compression());
app.use(config.httpEntry,
    express.static(config.entry, { maxAge: 0 })
);

app.use(express.static(config.output));
app.get('*', async(req,res,next)=>{

});

const listener = app.listen(config.port);
console.log(`http://localhost:${config.port}`);
export default listener;