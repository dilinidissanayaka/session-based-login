const signup=document.querySelector('input[type="submit"]')
signup.addEventListener('click',() =>{
    const formData =new FormData(document.querySelector('form'))
    fetch('http://localhost:8080/Model.php',{
        method:'POST',
        body:FormData
    })
    .then(res =>{
        status=res.status
        return res.text()

    })
    .then(data=>{
        alert(data)
        is(status == 200)
        location.href="./index.html"
    })
    .catch(err =>{alert(err)})
})