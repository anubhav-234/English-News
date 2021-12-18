console.log("News Application ");

//API sources 
let source='the-times-of-india';
let apiKey="89dc0b5459324b669e74b40f944e87db";

let newsAccordion=document.getElementById("newsAccordion");

//Request to fetch the news

let xhr=new XMLHttpRequest();

xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,true);


xhr.onload=function(){
    let json=JSON.parse(xhr.responseText);
    let articles=json.articles;
    newsAccordion.innerHTML="";
    let html="";
    articles.forEach(function(element,index){html+=
        `<div class="accordion-item">
                    <h2 class="accordion-header" id="flush-heading${index}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                    <img src="${element.urlToImage}"  style="width:150px;height:150px;" class="img-thumbnail" alt="...">
                    <h2 class="mx-2">${element.title}</h2>
                   
                    </button>
                    </h2>
                    <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#newsAccordion">
                    <div class="accordion-body"> <h5>${element.content} </h5><a href="${element.url}" class="link-info" style="text-decoration:none;">Read More...</a> </div>
                    </div>
          </div>`;})
    newsAccordion.innerHTML=html;
 }
 
 xhr.send();
