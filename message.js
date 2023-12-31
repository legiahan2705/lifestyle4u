document.querySelector('.friend_mess1').onclick = () => {
    document.querySelector('.mess1').classList.toggle('active');
}

document.querySelector('.friend2').onclick = () => {
    document.querySelector('.mess2a').classList.toggle('active');
}

document.querySelector('#create').onclick = () => {
    document.querySelector('.all-create').classList.toggle('active');
}

document.querySelector('.create_close').onclick = () => {
    document.querySelector('.all-create').classList.remove('active');
}

document.querySelector('#announcement').onclick = () => {
    document.querySelector('.all_announcement').classList.toggle('active');
}

document.querySelector('.announcement_close').onclick = () => {
    document.querySelector('.all_announcement').classList.remove('active');
}


