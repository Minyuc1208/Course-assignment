// get login & password from the user
(function() {
    var login,radioButton,options,newAcct,logFiel,naLogFiel,loginButton,guest,userName,pwd,na_userName,na_pwd,na_vpwd,changePwd,oldPwd,newPwd,vNew,welcome,changeButton,saveButton;
	var form = document.getElementById('hmwk5');
    
    welcome=document.getElementById('welcome');
    changePwd=document.getElementById('changePwd');
   
    options=form.elements.login;
    login=document.getElementById('login');
    newAcct=document.getElementById('newacct');
    guest=document.getElementById('guest');
    
    userName=document.getElementById('username');
    pwd=document.getElementById('pwd');
    na_userName=document.getElementById('na_username');
    na_pwd=document.getElementById('na_password');
    na_vpwd=document.getElementById('na_vpassword');
    
    changeButton=document.createElement('button');          
    changeButton.setAttribute('class','hide');
    
    
   /* chang_old=document.getElementById('change_old');
    change_new=document.getElementById('change_new');
    change_vpassword=document.getElementById('change_vpassword');*/
    
    logFiel=document.getElementById('login_fields');
    naLogFiel=document.getElementById('na_login_fields');
    
    loginButton= document.getElementById('submit');
    
	
	addEvent(form, 'submit', function(e) {
		e.preventDefault();
		var elements = this.elements;
		var username = elements.username.value;
		var msg = 'Welcome ' + username;
		document.getElementById('main').textContent = msg;
	});
	
	// changing password input field to be visible or not	
	var pwd = document.getElementById('pwd');
	var chk = document.getElementById('showPwd');
	
	addEvent(chk, 'change', function(e){
		var target= e.target || e.srcElement;
		console.log(" pwd = " + pwd);
		try{
			if (target.checked) {
				pwd.type = 'text';
			} else {
				pwd.type = 'password';
			}
		} catch(error) {
			alert('This browser cannot switch type');
		}
	});
    
    for (var i=[0];i<options.length;i++){  //task 2
        addEvent(options[i],'click',radioChanged);
    }
	
    function radioChanged(){  
        hide= guest.checked?'':'hide';
        loginButton.className=hide;
        
        if(hide=login.checked?'':'hide'){
              userName.value='';
              pwd.value='';
              logFiel.className=hide;
            
            if(guest.checked){
                loginButton.style.display='block'       
            }else{
                loginButton.style.display='none' 
            }
            
         }else{
             logFiel.className=hide;
         }

        if(hide=newAcct.checked?'':'hide'){
                 na_userName.value='';
                na_pwd.value='';
                na_vpwd.value='';
                naLogFiel.className= hide;
            
            if(guest.checked){
                loginButton.style.display='block';
            }else{
                loginButton.style.display='none';
            }
            
        }else{
            naLogFiel.className=hide;
        }
     }
    
    //task 3
    userName.onkeyup=function(){
        if(userName.value!=''&&pwd.value!=''){
            loginButton.style.display='block';
        }else{
            loginButton.style.display='none';
        }
    }   
    
    pwd.onkeyup=function(){
        if(userName.value!=''&&pwd.value!=''){
            loginButton.style.display='block';
        }else{
            loginButton.style.display='none';  
        }
    }
    
    //task 4
      na_userName.onkeyup=function(){
        if(na_userName.value!=''&&na_pwd.value!=''&&na_vpwd.value!=''){
            loginButton.style.display='block';
        }else{
            loginButton.style.display='none';  
        }
    }
      
      var match=document.getElementById('match');
    
      na_pwd.onkeyup=function(){
        if(na_userName.value!=''&&na_pwd.value!=''&&na_vpwd.value!=''){
            loginButton.style.display='block';
        }else{
            loginButton.style.display='none';  
        }
          if(na_vpwd.value!=''){
      
              if(na_pwd.value!=na_vpwd.value){
                  match.style.display='block';
              }else{
                  match.style.display='none';
              }
          }
    }
      na_vpwd.onkeyup=function(){
        if(na_userName.value!=''&&na_pwd.value!=''&&na_vpwd.value!=''){
            loginButton.style.display='block';
        }else{
            loginButton.style.display='none';  
        }
          if(na_pwd.value!=''){
               if(na_pwd.value!=na_vpwd.value){
                  match.style.display='block';
              }else{
                  match.style.display='none';
              }
          }
    }
      
      loginButton.addEventListener('click',displayGreeting);
    
    function displayGreeting(e){
        e.preventDefault;
         form.style.display='none';
        welcome.style.display='block';

            var newText=document.createElement('h2');
            var moreText=document.createElement('h5');
           
           welcome.appendChild(newText);
            welcome.appendChild(moreText);
            welcome.appendChild(changeButton);
        
        if (login.checked){
            newText.textContent='Welcome back,'+userName.value+'!';
            console.log(newText);
            
        }else if(newAcct.checked){
             newText.textContent='Welcom,'+na_userName.value+'!'; 
            if(na_pwd.value.length<=5){
                moreText.textContent='Caution: Your password may not be very secure.';
                changeButton.style.display='block';
                changeButton.textContent='Change my password'
              changeButton.setAttribute('id','setNew');
                console.log(changeButton.id);
                
            }
       }else if(guest.checked){
           newText.textContent='Welcome, Guest!';
           moreText.textContent='Would you like to create an account now?'
            changeButton.textContent='Yes';
           changeButton.style.display='block';
           changeButton.setAttribute('id','setUpAcct');
           console.log(changeButton.id);
       }
    }
     changeButton.addEventListener('click',newForm);
    
  function newForm(e){
      e.preventDefault();
       welcome.style.display='none';
      
         if(changeButton.id=='setNew'){
           
             //get the elements
             //connect
            changePwd.style.display='block';
           changePwd=document.getElementById('changePwd');
           oldPwd=document.getElementById('oldPwd');
           newPwd=document.getElementById('newPwd');
           vNew=document.getElementById('vNew');
           saveButton =document.getElementById('saveButton');
             saveButton.setAttribute('class','hide');
              var match_old =document.getElementById('match_old');
             var match_new=document.getElementById('match_new');
             
             //3 fields be filled appear the button;
           oldPwd.onkeyup=function(){    
            if(oldPwd.value!="" && newPwd.value!=""&& vNew.value!=""){
                    saveButton.style.display='block';           
                }else{
                    saveButton.style.display='none';           
                }  
              
               
              
         }
             newPwd.onkeyup=function(){  
                if(oldPwd.value!="" && newPwd.value!=""&& vNew.value!=""){
                    saveButton.style.display='block';           
                }else{
                    saveButton.style.display='none';           
                }
                if(vNew.value !=''){
                    
                    if(newPwd.value!=vNew.value){
                        match_new.style.display='block';
                    }else{
                        match_new.style.display='none';
}
}    
                }
             vNew.onkeyup=function(){
                if(oldPwd.value!="" && newPwd.value!=""&& vNew.value!=""){
                    saveButton.style.display='block';           
                }else{
                    saveButton.style.display='none';           
                }
                 if(newPwd.value!=''){
                    
                    if(newPwd.value!=vNew.value){
                        match_new.style.display='block';
                    }else{
                        match_new.style.display='none';
}
}
             
             // if the2 new don't match,alert;
             // click the submit, compate the old value with the value that create before  
             
         }
             saveButton.addEventListener('click',savedPwd);
             function savedPwd(e){
                  e.preventDefault();
                  if(oldPwd.value!=na_pwd.value){
                   match_old.style.display='block';
             }else{
                
                 match_old.style.display='none';
                  
                 changePwd.style.display='none';
                 var resultMsg=document.createElement('h2');
                 var result=document.getElementById('result');
                  
                 resultMsg.textContent='Your password has been changed.';
                 result.appendChild(resultMsg);
                result.style.display='block';
             }
                 
     }
     }
             else if(changeButton.id=='setUpAcct'){
                 
             form.style.display='block';
             newAcct.checked='true';  
             radioChanged();// add this to make sure the newAcct form works.
                      
         }
  }
}());


  










