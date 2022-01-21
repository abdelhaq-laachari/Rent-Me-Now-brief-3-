var burger = document.getElementById('burger');
var navLinks = document.getElementById('navLinks');

burger.addEventListener('click',()=>{
    navLinks.classList.toggle('show');
});



function information(){
    var Name = document.getElementById("name").value
    var Email = document.getElementById("email").value
    var Phone = document.getElementById("phone").value
    var Message = document.getElementById("message").value
    var body = "Name: " + Name
            + "\n Email: " + Email
            + "\n Phone: " + Phone
            + "\n Message: " + Message
    // var x = 'test' + '<br>' + 'test test'
    if(Name != ''){
        Swal.fire(body)
    }else{
        Swal.fire('please enter a valid name')
    }
    if(Email != ''){
        Swal.fire(body)
    }else{
        Swal.fire('please enter a valid Email')
    }
    if(Phone != ''){
        Swal.fire(body)
    }else{
        Swal.fire('please enter a valid Phone')
    }
    if(Message != ''){
        Swal.fire(body)
    }else{
        Swal.fire('please enter a valid Message')
    }
    // alert(body)
}
