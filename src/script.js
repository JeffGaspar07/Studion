$(Document).ready(() => {
// MENU ________________________________________________________________________________
$(".nav__menu-btn").on("click", function (){
    $("#menu").toggleClass("mobile");
    $("#menu").toggleClass("desktop");
    $(this).find("i").toggleClass("fa-bars");
    $(this).find("i").toggleClass("fa-times");
});
// _____________________________________________________________________________________

// EMAIL _______________________________________________________________________________
$("#newslatter-form").submit(function (e) {
    e.preventDefault();
    const email = $("#email").val();
    const emailOptions = {
      Host: "smtp.elasticemail.com",
      Username: "jeffersonjog06@gmail.com",
      Password: "E498D9E1DDB496BC9D0CE178542C4B176A0F",
      To: "jeffersonjog06@gmail.com",
      From: email,
      Subject: "Por favor me adicione na newsletter",
      Body: `
        Olá,
        
        Eu gostaria de ser adicionado na newsletter do site.
        Meu email é ${email}.
        
        Obrigado!
      `,
    };
    try {
      Email.send(emailOptions)
        .then(() => {
          alert("Email enviado com sucesso!");
          location.replace(location.pathname);
        });
    } catch (error) {
      console.log(error.message);
    }
  });
// _____________________________________________________________________________________
});