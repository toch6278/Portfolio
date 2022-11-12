console.log("helloworld");

//going to reference pages
let sites = ["https://github.com/toch6278/ATLS-2200-Web-Files", "https://github.com/toch6278/ATLS-2200-Web-Files", "https://www.linkedin.com/in/tchew24/", "https://toch6278.myportfolio.com/work"];
for (i = 1; i < document.getElementsByClassName("icon").length; i++)
{
  document.getElementsByClassName("icon")[i].addEventListener("click", iconClicked, false);
  //getting the id of the image
  console.log(sites[i]);
}
function iconClicked(e)
{
  // console.log("Im in");
  // alert("You'll be taken to the following page...");
  //Resource: used to change between different htmls and open in the same window or a separate window
  //Resource: https://developer.mozilla.org/en-US/docs/Web/API/Window/open
  if(e.target.tagName == "IMG")
  {
    //click on the container which is the div
    ref = e.target.parentNode.id;
    ref = ref.slice(ref.length - 1, ref.length);
  }
  else
  {
    ref = e.target.id;
    ref = ref.slice(ref.length - 1, ref.length);
  }

  window.open(sites[ref], '_blank');
  //get id that triggers the event
}

//--------------------------------------------
// GRID FILLING PICS
let pics = ["accordionBookCover.JPG", "posterMailerCover.JPG", "package.JPG", "giphy.gif"];
let titles = ["Expressive Booklet - Text Project 1", "Poster Mailer - Text Project 2", "Personal Packaging - Text Project 3", "Web AR - Image Final Project"];
for (i = 0; i < pics.length; i++)
{
//   console.log(i);
  document.getElementById('projects').innerHTML+= "<div class = 'pimg'><img src = 'assets/text/" + pics[i]
  + "' class = 'projectpic' id = 'pic" + i + "' /> <div class = 'overlay'> <h3>" + titles[i] + "</h3></div></div>";
  // document.getElementById('projects').innerHTML+= "<div class = 'pimg'><img src = 'assets/text/" + pics[i]  + "' class = 'projectpic' id = 'pic" + i + "' /> ";
  if (i == pics.length - 1)
  {
    document.getElementById('projects').innerHTML += "<div class = 'pimg'><iframe width= '700' height= '400' src = 'assets/TorshawnaChew_MovingImage.mp4'></iframe><div class='overlay'><h3> Timeline Animation - Image Project 2</h3></div></div>";
  }
}

// --------------------------------------------------------------
// separate modals
/* Resources: Casey's website code and office hours*/
let modal;
let modalActive = false;

for (var i = 0; i < document.getElementsByClassName('projectpic').length; i++)
{
  let proj = document.getElementsByClassName('projectpic')[i];
    // console.log("Working: " + proj);
    proj.addEventListener('click', function(){launchModal(this.getAttribute('id'))}, false);
    // console.log(i);
}
window.onClick = function(event)
{
  if (event.target == modal)
  {
    modal.classList.add('disabled');
  }
}
//manage project click to launch modal
function launchModal(attribute)
{
    // modal = document.getElementsByClassName('projectpic')[attribute];
    let modalNumber = attribute.slice(attribute.length - 1, attribute.length);
    // console.log(modalNumber);
    // modal.classList.remove('disabled');
    document.getElementsByClassName('modal')[modalNumber].style.display = "block";
    document.getElementsByClassName('modal')[modalNumber].classList.toggle("openmodal");
    document.getElementsByClassName('projmodal')[0].style.display = "block";
    document.getElementsByClassName('projmodal')[0].addEventListener('click', closeModal);
    // document.getElementById('proj1').addEventListener('click', closeModal);
    modalActive = true;
    //alert('clicked ' + attribute);
};
function closeModal(e)
{
//   modal.addEventListener('click', console.log('closing modal'));
    if (e.target.id == "proj1")
    {
      document.getElementsByClassName('openmodal')[0].classList.toggle("openmodal");
      document.getElementsByClassName('projmodal')[0].style.display = "none";
      openmodal = false;
    }

  if(modalActive == true)
  {
    console.log("closing modal");
  //   modal.classList.add('disabled');
    modalActive = false;
  }
  console.log(e.target.id);
}
