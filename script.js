var list = document.getElementsByTagName('LI')
var i
for(i = 0; i < list.length; i++) {
    var span = document.createElement("SPAN")
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    list[i].appendChild(span)
}

var close = document.getElementsByClassName("close")
var i;
for (i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement
        div.style.display = 'none'
    }
}

var list = document.querySelector('ul')
list.addEventListener('click', (ev)=>{
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked')
    }
}, false)

function create(){
    var li = document.createElement('li')
    var inputValue = document.getElementById('type').value
    var t = document.createTextNode(inputValue)
    li.appendChild(t)
    if(inputValue === ''){
        alert('You must wrire something!')
    }
    else{
        document.getElementById('list').appendChild(li)
    }
    document.getElementById('type').value = ''

    var span = document.createElement("SPAN")
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)

    for (i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement
            div.style.display = "none"
        }
    }
}
