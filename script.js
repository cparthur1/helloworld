var delayInMilliseconds = 2000;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    location.href = './m_index.html';
} else {
    console.log("Vc esta usando um computador")
    setTimeout(function() {
        console.log("E tb eh gayyy ihhhh")
    }, delayInMilliseconds);
}