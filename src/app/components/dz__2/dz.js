function findClass() {
    console.log(document.getElementsByClassName('container'));
}
findClass();

function findByClass() {
    var elements = document.getElementsByClassName('container');
    console.log (elements);
}
findByClass ();

function findByTag() {
    console.log(document.getElementsByTagName('div'));
}
findByTag();

function classNotId()  {
    var idelem = document.querySelectorAll('[id]');
    var classelem  = document.getElementsByClassName('nav_right');
    console.log(classelem);

}
classNotId ();

function tagByClass() {
    var tags = document.getElementsByTagName('*');
    console.log(tags.classList.contains('test'));
}
tagByClass();

function findHref() {
    var mylink = document.getElementById('nav_link').textContent;
    console.log(mylink);
}
findHref();

function findLink() {
    var newlink = document.querySelector('[href*="./test.hml"]').textContent;
    console.log(newlink);
}
findLink();