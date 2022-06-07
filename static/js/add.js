//添加
    //点击添加按钮
    function add() {
        $('#form1').css('display', '')
    }
    // 关闭添加页面
    function hide() {
        $('#form1').css('display', 'none')
        return false
    }
    // 提交添加
    function commit_add() {
        var name = $('input[name="name"]').val()
        var age = $('input[name="age"]').val()
        var birthday = $('input[name="birthday"]').val()
        var address = $('input[name="address"]').val()
        var current_address = $('input[name="current_address"]').val()
        var index =parseInt($('tr:nth-last-child(2)>td:first').text())+1
        if(name===''||age===''||birthday===''||address===''||current_address===''){
            alert('信息不能为空!')
            return false
        }
        $('#form1').css('display', 'none')
        $('#foot').before($('<tr><td>' + index + '</td><td>'  + name + '</td><td>' + age + '</td><td>' + birthday + '</td><td>' + address + '</td><td>' + current_address + '</td>'+
            ' <td class="col-2 text"><div style="display: flex;flex-direction: row; justify-content: space-between;padding: 0 30px"><input class="btn btn-success btn-xs" type="button" value="编辑"><input type="button" class="btn btn-danger btn-xs" value="删除"></div></td>'+'</tr>'))
        $('td').addClass('text')
         $.ajax({
                url: 'rest',
                type: 'POST',
                data: JSON.stringify({
                    'name':name,'age':age,'id':index,'birthday':birthday,'address':address,'current_address':current_address
                }),
                contentType: 'application/json'

    })
        }
    // 日期失去焦点
function date() {
    var birthday = $('input[name="birthday"]').val()
    var reg = /^\d{4}-\d{2}-\d{2}$/;
    if (reg.test(birthday)) {
        var date = new Date(birthday);
        var age = new Date().getFullYear() - date.getFullYear()
        $('input[name="age"]').val(age)
    } else {
        alert("日期格式错误!")
    }
}


