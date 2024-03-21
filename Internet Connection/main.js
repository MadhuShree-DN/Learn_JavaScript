 
      const wrapper =document.querySelector(".wrapper"),
      content = wrapper.querySelector(".content"),
      online_icon = wrapper.querySelector(".icon"),
      title = wrapper.querySelector("span");


function contentOnline()
{
  title.innerText = "You are Online";
  online_icon.innerHTML = '<i class="fa-solid fa-signal"></i>';
  online_icon.style = "background-color: rgb(29,243,29); "
  wrapper.style = "box-shadow: 0 0 10px rgb(29,243,29); border: .1em solid rgb(29,243,29);"
};

function contentOffline()
{
  title.innerText = "You are Offline";
  online_icon.innerHTML = '<i class="fa-solid fa-signal"></i>';
  online_icon.style = "background-color: rgb(243,72,29); "
  wrapper.style = "box-shadow: 0 0 10px rgb(243,72,29); border: .1em solid rgb(243,72,29);"
};

if(window.navigator.onLine)
{
  contentOnline();
}

else
{
  contentOffline();
}

window.addEventListener("online", contentOnline);
window.addEventListener("offline", contentOffline);
