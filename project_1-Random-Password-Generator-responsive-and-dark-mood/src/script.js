// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')

//   own script
const passwordBox = document.getElementById("Password");
const length = 12;
const upperCase = "ABCDEFGHIjKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%";
const allChars = upperCase+lowerCase+number+symbol;
function createPassword(){
    let password = "";
    password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=number[Math.floor(Math.random()*number.length)];
    password +=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length){
        password +=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
    // console.log(password);
}
// action the button
const btnGenerate = document.getElementById("btnGenerate").addEventListener("click",()=>{
    createPassword();
});
// copy the btn
const copy = document.getElementById("copy");
copy.addEventListener('click', async () => {
    try {
      const text = passwordBox.value;
      if(text===''){
        // console.log("unsuccess");
      }
      else{
        await navigator.clipboard.writeText(text);
        // console.log("success");
      }
      
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
      // Show error message (optional)
    }
  });
