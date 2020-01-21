    var inputtext =document.getElementsByClassName("element text large")
    var radio =document.getElementsByClassName("element radio ")
    var radio1 =document.getElementsByClassName("element radio1 ")
    var checkbox=document.getElementsByClassName("element checkbox")
    var submit= document.getElementsByClassName("button_text")[0]
    var reset= document.getElementsByClassName("button_text")[1]
    var list =document.getElementById('error-messages')
    var listcountry=document.getElementsByClassName("element select medium")
    var form =document.getElementById("form_1085147")
    var errormsg =document.getElementsByClassName("errors")[0]
    submit.addEventListener('click',checkvalidit)
    reset.addEventListener('click',resetfunc)
    var chec;
    function checkvalidit (e)
   {
     
    chec=true
    var error_msg=" "

    if (inputtext[0].value == "") 
    {
      chec= false
      error_msg+= "<li> -name is reqiured  </li>"
      list.innerHTML=error_msg
    }

    if (inputtext[1].value == "") {
      chec= false
        error_msg =error_msg + "<li> email is reqiured </li>"
                 list.innerHTML=error_msg

    }



    if (inputtext[2].value == "") {
      chec= false
          error_msg =error_msg + "<li>password is reqiured  </li>"
          list.innerHTML=error_msg

     }


   if(inputtext[2].value.length <8)
      {
     chec= false
      error_msg +="<li>password must be 8 digit </li>";
      list.innerHTML=error_msg

     }





   if((radio[0].checked==false ) && (radio[1].checked==false))
   {
    chec= false
    error_msg+="<li>you must choose gender type </li> " 
     list.innerHTML=error_msg
    }

    if((radio1[0].checked==false ) && (radio1[1].checked==false))
    {
     chec= false
     error_msg+="<li>you must choose payment way </li> " 
      list.innerHTML=error_msg
     }


  

 
if(chec == false)
{
  e.preventDefault()
  errormsg.style.display=""
   document.getElementById('error-messages').innerHTML=error_msg
    errormsg.style.color="red"
}
else{
  errormsg.style.display="none"
  document.getElementById('error-messages').innerHTML=" "
}
   }

   

  function resetfunc ()
  {
    errormsg.style.display='none'
    document.getElementById('error-messages').innerHTML=" "

  }