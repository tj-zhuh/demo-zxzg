
if (!document.createElement('canvas').getContext) { 
    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.top = 0;
    div.style.height = '100%';
    div.style.width = '100%';
    div.style.backgroundColor = '#fff';
    div.style.zIndex = '9999';
    div.style.fontSize = '20px';
    div.innerHTML = '不支持此浏览器';

    window.document.getElementsByTagName('body')[0].appendChild(div);
}





