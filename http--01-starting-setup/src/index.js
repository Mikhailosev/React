import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'
import registerServiceWorker from './registerServiceWorker';

axios.interceptors.request.use(request=>{
    console.log(request)
    return request;
}, error=>{
    console.log(error)
    return Promise.reject(error)
})
axios.interceptors.response.use(response=>{
    console.log(response)
    return response
}, error=>{
    console.log(error)
    return Promise.reject(error)
}
)

//axios.defaults.baseUrl='https://'
axios.defaults.headers.common['Authorization']='AUTH TOKEN'
//axios.defaults.headers.post['Content-Type]='application-json'
var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
