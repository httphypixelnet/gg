document.body.onload = () => {
    let email;
    const emailElement = document.createElement("p");
    document.getElementById('goguardian-privacy-bubble')
    ?.querySelectorAll('[aria-label="User email"')
    .forEach(v => v.textContent && v.textContent.includes("@seattleschools.org") ? email = v.textContent : null)
    emailElement.innerText = "hello, " + email + ". i've been expecting you";
    document.getElementById("root")?.append(emailElement);
    fetch('/api/email', { headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email
    }),
    method: 'POST'

})
}
