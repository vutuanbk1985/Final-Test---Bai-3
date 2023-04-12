const btn_1 = document.getElementById("btn-1");
const btn_2 = document.getElementById("btn-2");
const btn_3 = document.getElementById("btn-3");
const btn_4 = document.getElementById("btn-4");
const btn_5 = document.getElementById("btn-5");


btn_1.onclick = (event) => {
    btn_1.classList.add('click');
    btn_2.classList.remove('click');
    btn_3.classList.remove('click');
    btn_4.classList.remove('click');
    btn_5.classList.remove('click');
    event.preventDefault();
}
btn_2.onclick = (event) => {
    btn_2.classList.add('click');
    btn_1.classList.remove('click');
    btn_3.classList.remove('click');
    btn_4.classList.remove('click');
    btn_5.classList.remove('click');
    event.preventDefault();
}
btn_3.onclick = (event) => {
    btn_3.classList.add('click');
    btn_1.classList.remove('click');
    btn_2.classList.remove('click');
    btn_4.classList.remove('click');
    btn_5.classList.remove('click');
    event.preventDefault();
}
btn_4.onclick = (event) => {
    btn_4.classList.add('click');
    btn_1.classList.remove('click');
    btn_2.classList.remove('click');
    btn_3.classList.remove('click');
    btn_5.classList.remove('click');
    event.preventDefault();
}
btn_5.onclick = (event) => {
    btn_5.classList.add('click');
    btn_1.classList.remove('click');
    btn_2.classList.remove('click');
    btn_3.classList.remove('click');
    btn_4.classList.remove('click');
    event.preventDefault();
}

const window_1 = document.getElementById("window-1");
const window_2 = document.getElementById("window-2");
const window_3 = document.getElementById("window-3");
const window_4 = document.getElementById("window-4");
const window_5 = document.getElementById("window-5");
const window_6 = document.getElementById("window-6");

window_1.onclick = (event) => {
    window_1.classList.add('window-click');
    window_2.classList.remove('window-click');
    window_3.classList.remove('window-click');
    window_4.classList.remove('window-click');
    window_5.classList.remove('window-click');
    window_6.classList.remove('window-click');
    event.preventDefault();
}
window_2.onclick = (event) => {
    window_2.classList.add('window-click');
    window_1.classList.remove('window-click');
    window_3.classList.remove('window-click');
    window_4.classList.remove('window-click');
    window_5.classList.remove('window-click');
    window_6.classList.remove('window-click');
    event.preventDefault();
}
window_3.onclick = (event) => {
    window_3.classList.add('window-click');
    window_1.classList.remove('window-click');
    window_2.classList.remove('window-click');
    window_4.classList.remove('window-click');
    window_5.classList.remove('window-click');
    window_6.classList.remove('window-click');
    event.preventDefault();
}
window_4.onclick = (event) => {
    window_4.classList.add('window-click');
    window_1.classList.remove('window-click');
    window_2.classList.remove('window-click');
    window_3.classList.remove('window-click');
    window_5.classList.remove('window-click');
    window_6.classList.remove('window-click');
    event.preventDefault();
}
window_5.onclick = (event) => {
    window_5.classList.add('window-click');
    window_2.classList.remove('window-click');
    window_3.classList.remove('window-click');
    window_4.classList.remove('window-click');
    window_1.classList.remove('window-click');
    window_6.classList.remove('window-click');
    event.preventDefault();
}
window_6.onclick = (event) => {
    window_6.classList.add('window-click');
    window_2.classList.remove('window-click');
    window_3.classList.remove('window-click');
    window_4.classList.remove('window-click');
    window_5.classList.remove('window-click');
    window_1.classList.remove('window-click');
    event.preventDefault();
}

const menu_btn = document.getElementById("menu-btn");
const menu_choice = document.getElementById("menu-choice");
const menu_small  = document.getElementById("menu-small");
menu_btn.onclick = (event)  =>  {
    menu_choice.classList.toggle('active');
    menu_small.classList.toggle('background');
    // menu_btn.onclick = (event)  =>  {
    //     menu_choice.classList.remove('active');
    // }
    event.preventDefault();
}

const btn_1_small = document.getElementById("btn-1-small");
const btn_2_small = document.getElementById("btn-2-small");
const btn_3_small = document.getElementById("btn-3-small");
const btn_4_small = document.getElementById("btn-4-small");
const btn_5_small = document.getElementById("btn-5-small");


btn_1_small.onclick = (event) => {
    btn_1_small.classList.add('click');
    btn_2_small.classList.remove('click');
    btn_3_small.classList.remove('click');
    btn_4_small.classList.remove('click');
    btn_5_small.classList.remove('click');
    event.preventDefault();
}
btn_2_small.onclick = (event) => {
    btn_2_small.classList.add('click');
    btn_1_small.classList.remove('click');
    btn_3_small.classList.remove('click');
    btn_4_small.classList.remove('click');
    btn_5_small.classList.remove('click');
    event.preventDefault();
}
btn_3_small.onclick = (event) => {
    btn_3_small.classList.add('click');
    btn_1_small.classList.remove('click');
    btn_2_small.classList.remove('click');
    btn_4_small.classList.remove('click');
    btn_5_small.classList.remove('click');
    event.preventDefault();
}
btn_4_small.onclick = (event) => {
    btn_4_small.classList.add('click');
    btn_1_small.classList.remove('click');
    btn_2_small.classList.remove('click');
    btn_3_small.classList.remove('click');
    btn_5_small.classList.remove('click');
    event.preventDefault();
}
btn_5_small.onclick = (event) => {
    btn_5_small.classList.add('click');
    btn_1_small.classList.remove('click');
    btn_2_small.classList.remove('click');
    btn_3_small.classList.remove('click');
    btn_4_small.classList.remove('click');
    event.preventDefault();
}