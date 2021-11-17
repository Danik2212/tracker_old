
function itemCopy( item ){
    var str = getItemText( item );
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function getItemText( item ){
    return item.title + " " + getPercentage( item );
}

function getPercentage( item ){
    if( ( item.goodCount + item.badCount ) == 0 ) return "0%"
    var percent = item.goodCount / ( item.goodCount + item.badCount );
    percent = (percent * 100).toFixed(0);
    return percent + "%";
  }

export { itemCopy, getItemText }