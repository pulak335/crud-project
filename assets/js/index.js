$(this.#add-user).submit(function(event){
    alert("data add successfully");
})


$(this.#update-user).submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value'];
    })
    var request ={
        'url':`http://localhost:3200/api/users/${data.id}`,
        'method':'PUT',
        'data':data
    }

    $.ajax(request).done(function(response){
        alert("data update successfully");
    })
})




if(window.location.pathname=='/'){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var request ={
            'url':`http://localhost:3200/api/users/${data.id}`,
            'method':'DELETE'
            
        }
        if(confirm("Are you sure?")){
            
            $.ajax(request).done(function(response){

                    alert("data delete")
                    location.reload()          
            })           
        }
    })
}

    
