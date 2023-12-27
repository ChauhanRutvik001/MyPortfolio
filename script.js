function sendEmail() {
    let name = document.getElementById("Full_name").value;
    let email = document.getElementById("Email").value;
    let number = document.getElementById("Number").value;
    let subject = document.getElementById("Subject").value;
    let message = document.getElementById("Message").value;

    var body = "Name: " + name + "<br/> Email: " + email + "<br/> Contact Number: " + number + "<br/> Subject: " + subject + "<br/> Message: " + message;

    // console.log(body);

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rutvikchauhan0002@gmail.com",
        Password: "F613E5FA9D250C994044E1A8CC2A058BB738",
        To: 'rutvikchauhan0002@gmail.com',
        From: "rutvikchauhan0002@gmail.com",
        Subject: subject,
        Body: body
    }).then(
        message => {
            if (message == 'OK') {
                swal("SuccessFull!", "Your Data Successfull Received!", "success");
            }
            else {
                swal("Something Wrong!", "Your Data Is Not Received!", "error");
            }
        }
    );
};



//all strings
var typed = new Typed('.text', {
    strings: ['Fronted Developer', 'Java Expert', 'C++ / C Expert', 'DSA Beginner'],
    typeSpeed: 100,
    backSpeed: 100,
    typeDelay: 1000,
    loop: true
});


//rensoptive
let menuIcon = document.querySelector('#menu-bar');
let navBar = document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navBar.classList.toggle('active');
};

menuIcon.classList.remove('fa-x');
navBar.classList.remove('active');


//scroll
let divs = document.querySelectorAll('div');
let navLinkes = document.querySelectorAll('.nav ul li a');

window.onscroll = () => {
    divs.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinkes.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}


window.onscroll = () => {
    var element = document.getElementById("heding");
    element.classList.add("mystyle");
}


