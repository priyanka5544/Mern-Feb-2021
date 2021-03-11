$(function(){
   $('body').on('click','.btn-submit',function(){
   
    var username = $('.username').val()
    if(username == "" || username.length < 3){
      $('.nameError').text("Username must contain atleast 3 characters.") 
      e.preventDefault() 
    }else{
      $('.nameError').text("") 
    }
   
    var password = $('.password').val()
    var pattern =  /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/

    if(!pattern.test(password)){
       $('.pwdError').text(`Password should contain atleast 8 characters and
                   //   atleast 1 number,1 upperCase 1 lowerCase letters  and 1 special character from @#$%& `)  
       e.preventDefault()  
    }else{
      $('.pwdError').text("")
    }
     
   var email = $('.email').val()
   var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  //  var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

  if(!pattern.test(email)){
    $('.emailError').text("Email must contain @ ")
    e.preventDefault()
  }else{
    $('.emailError').text("")
  }
    
    var  mobile = $('.mobile').val()
    var pattern =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if(!pattern.test(mobile)){
      $('.mobil34A+eError').text("Mobile number must contain atleast 10 digits number ! ")
      e.preventDefault()
    }else{
      $('.mobileError').text("")
    }
     
    var address = $('.address').val()
    var pattern =  /^[a-zA-Z0-9-\/] ?([a-zA-Z0-9-\/]|[a-zA-Z0-9-\/] )*[a-zA-Z0-9-\/]$/

    if(!pattern.test(address)){
      $('.addressError').text("Address field must be filled")
      e.preventDefault()
    }else{
      $('.addressError').text("")
    }

    var genderForMale = $('.genMale').val()
    var genderForFemale = $('.genFemale').val()
    if(!(genderForFemale.is(":checked",true) || genderForMale.is(":checked",true))){
      $('.genderError').text("choose any option")
     
      e.preventDefault()
      return false
    }else{
      $('.genderError').text(" ")
    }

   })
})
//(@ is not present, double dots are not allowed, email should not be start with dot, only allows character, digit, underscore, and dash,  No character before @ )

$('.btn-submit').click(function(){
 if ($('.check').is(":checked")){
    $('.check').prop("checked",false)
  }
  else
  {
    $('.check').prop("checked",true)
  }
})