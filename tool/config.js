import path from 'path';
import appRoot from 'app-root-path';
const appRootPath = appRoot.toString();
export default{
    root:appRootPath,
    entry:path.resolve(appRootPath,'./src'),
    httpEntry:'/src',
    output:path.resolve(appRootPath,'./build'),
    static:path.resolve(appRootPath,'./build/static'),
    port:3001
}