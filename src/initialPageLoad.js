function pageLoad(content){
    const title = document.createElement('h1');
    const containerDescrip = document.createElement('div');
    content.appendChild(title);
    content.appendChild(containerDescrip);
    title.textContent = "Anime's Restaurant!";
    containerDescrip.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tellus quam, dignissim sed lacus vel, finibus dictum ipsum. Proin tortor magna, mollis eu finibus quis, congue vitae sapien. Donec ornare elit sed erat laoreet aliquet. In vitae nulla nisi. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas accumsan sapien eget tortor egestas, vitae vulputate dolor consectetur. Sed fringilla laoreet facilisis. Donec volutpat est et purus lobortis, ac porttitor massa posuere. Duis consequat magna mattis scelerisque pharetra. Fusce augue magna, tincidunt vel leo sed, porta congue dolor. Curabitur condimentum dictum enim vitae pellentesque."
    containerDescrip.className= 'container-descrip';
}
export {pageLoad};