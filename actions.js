function updateNumber(nombreH3)
{
    lblh3= document.getElementById(nombreH3);
    let cantidad= parseInt(lblh3.value);
    cantidad++;
    lblh3.setAttribute('value', cantidad.toString())

}