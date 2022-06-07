// 点击编辑
function edit(obj) {
    $('#form2').css('display', '')
    var id = $(obj).attr('d')
    var tds = $('#' + id + '>td')
    console.log(tds[0])
    var id1 = tds[0].innerText
    var name1 = tds[1].innerText
    var age1 = tds[2].innerText
    var birthday1 = tds[3].innerText
    var address1 = tds[4].innerText
    var current_address1 = tds[5].innerText
    $('input[name="id1"]').val(id1)
    $('input[name="name1"]').val(name1)
    $('input[name="age1"]').val(age1)
    $('input[name="birthday1"]').val(birthday1)
    $('input[name="address1"]').val(address1)
    $('input[name="current_address1"]').val(current_address1)
}

// 关闭编辑页面
function hide1() {
    $('#form2').css('display', 'none')
    return false
}

// 校验日期
function date1() {
    var birthday = $('input[name="birthday1"]').val()
    var reg = /^\d{4}-\d{2}-\d{2}$/;
    if (reg.test(birthday)) {
        var date = new Date(birthday);
        var age = new Date().getFullYear() - date.getFullYear()
        $('input[name="age1"]').val(age)
    } else {
        alert("日期格式错误!")
    }
}

// 提交编辑
function commit_edit() {
    var id = $('input[name="id1"]').val()
    var name = $('input[name="name1"]').val()
    var age = $('input[name="age1"]').val()
    var birthday = $('input[name="birthday1"]').val()
    var address = $('input[name="address1"]').val()
    var current_address = $('input[name="current_address1"]').val()
    $.ajax({
        url: 'rest',
        type: 'PUT',
        data: JSON.stringify({
            'name': name,
            'age': age,
            'id': id,
            'birthday': birthday,
            'address': address,
            'current_address': current_address
        }),
        contentType: 'application/json',
        success: function () {
            $('#form2').css('display', 'none')
            var tds = $('#' + id + '>td')
            tds[1].innerText = name
            tds[2].innerText = age
            tds[3].innerText = birthday
            tds[4].innerText = address
            tds[5].innerText = current_address

        }

    })
}

