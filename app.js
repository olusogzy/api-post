
function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then((data)=> {
        console.log(data)
        let createpost = document.getElementById('createpost')
        let html = "";
        data.forEach(element => {
            console.log(element)
            html += `
            
                <div class="col-md-4">
                     <div class="my-2">
                        <div class="card">
                            <a href="lorem.html" class="text-decoration-none text-black">
                                <div class="card-body">
                                  <h5 class="post-title"> Lorem, ipsum dolor.</h5>

                                  <p class="post-body">
                                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic reprehenderit omnis facere eum nobis earum exercitationem eveniet laudantium corrupti?
                                  </p>
                                </div>  
                            </a>  
                        </div> 
                     </div>   
                </div> 
            `
            createpost.innerHTML = html
        });
    })
}
getPost();



