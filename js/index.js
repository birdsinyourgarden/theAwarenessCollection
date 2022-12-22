const requestURL = '../json/documentaries.json';

async function fetchDocumentariesJson(){
    const response = await fetch(requestURL);
    const documentaries = await response.json();
    return documentaries;
}

fetchDocumentariesJson().then(documentaries =>{
    for (let index = 0; index < documentaries.length; index++)
    {
        const documentariesSection = document.getElementById('documentarySection');
        
        let id = documentaries[index].id;
        let poster = documentaries[index].poster;
        let title = documentaries[index].title;
        let year = documentaries[index].year;
        let length = documentaries[index].length;
        let director = documentaries[index].director;
        let synopsis = documentaries[index].synopsis;
        
        documentariesSection.innerHTML += `
            <div class="card mb-4" style="width: 18rem;">
                <img src="${poster}" class="card-img-top" alt="documentary poster">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-title"><span class="h6">${year}</span> · ${length}</p>
                    <h6 class="card-title mb-4">${director}</h6>
                    <p class="card-title">${synopsis}</p>                   
                </div>
            </div>
        `
    }
})