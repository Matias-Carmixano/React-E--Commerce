export const firebaseConfig = {
  apiKey: "AIzaSyAGgJqTh97XdJxSfAfZ1_Nte6fredP2wcY",
  authDomain: "nucbae-commerce.firebaseapp.com",
  projectId: "nucbae-commerce",
  storageBucket: "nucbae-commerce.appspot.com",
  messagingSenderId: "805574458426",
  appId: "1:805574458426:web:94d8c06512d99b48370903"
};


export const actionCodeSettingsVerification = {
    url:
    process.env.NODE_ENV === 'development'
      ? 'https//localhost:3000/' 
      : 'pagina de hosting'
};
//project-805574458426

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === 'development'
    ? 'https://localhost:3000/login'
    : 'URL PRODUCTIVO'
  }     

