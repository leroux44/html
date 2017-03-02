var iPadLabels = function () {
			function fix() {
				var labels = document.getElementsByTagName('label'), 
					target_id, 
					el;
				for (var i = 0; labels[i]; i++) {
					if (labels[i].getAttribute('for')) {
						labels[i].onclick = labelClick;
					}
				}
			};
			function labelClick() {
				el = document.getElementById(this.getAttribute('for'));
				if (['radio', 'checkbox'].indexOf(el.getAttribute('type')) != -1) {
					el.setAttribute('selected', !el.getAttribute('selected'));
				} else {
					el.focus();
				}
			};
				return {
				fix: fix
			}
		}();
		
		window.onload = function () {
					
					iPadLabels.fix();
				
		}

/* Quand l'utilisateur cliq sur le bouton, bascule entre afficher et cacher le contenu qui se déroule */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//ferme le dropdown si user enlève le curseur
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

