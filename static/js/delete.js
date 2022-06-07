

function commit_delete(obj) {

  var id = $(obj).attr('d')
    console.log(id)
  var tr = $('#'+id)
  tr.remove()
     $.ajax({
                url: 'rest',
                type: 'DELETE',
                data: JSON.stringify({
                  'id':id
                }),
                contentType: 'application/json'
    })
}