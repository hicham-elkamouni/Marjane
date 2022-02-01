
    function isAdmin() {
        if(sessionStorage.getItem('token')){
         const config = {
             headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
            };
    axios.get('http://localhost:3000/api/respRayon/checkAuth', config)
    .then((res) => {
        // BAD TOKEN
        if (res.data.isLogged == false) {
                location.replace('../../pages/auth/login-AC&RR.html')
                sessionStorage.removeItem('token');
            }
        })
    }else{ 
        // EMPTY TOKEN
        location.replace('../../pages/auth/login-AC&RR.html')
    }
    
    
}

const responeLogin = isAdmin();
console.log('responeLogin', responeLogin)