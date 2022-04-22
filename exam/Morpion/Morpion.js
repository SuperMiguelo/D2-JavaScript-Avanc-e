var tab = new Array("pos_0_0","pos_0_1","pos_0_2", "pos_1_0", "pos_1_1", "pos_1_2", "pos_2_0", "pos_2_1", "pos_2_2");
var essaie = 1;
function croixRond(id,nombre){
    if(tab[nombre]== 1 || tab[nombre]==2 )
    {
        alert('Veuillez cliquez dans sur une case valide');
    }else{
        document.getElementById(id).innerHTML = "<img src='o.gif'>";
        tab[nombre]=1;

        if((tab[0] == 1 && tab[1] == 1 && tab[2] == 1)||
           (tab[3] == 1 && tab[4] == 1 && tab[5] == 1)||
           (tab[6] == 1 && tab[7] == 1 && tab[8] == 1)||
           (tab[0] == 1 && tab[3] == 1 && tab[6] == 1)||
           (tab[1] == 1 && tab[4] == 1 && tab[7] == 1)||
           (tab[2] == 1 && tab[5] == 1 && tab[8] == 1)||
           (tab[0] == 1 && tab[4] == 1 && tab[8] == 1)||
           (tab[2] == 1 && tab[4] == 1 && tab[6] == 1))
           {
            alert('Vous avez Gagné');
            javascript:refresh(0);
        }
        javascript:bot();
    }
}

function bot()
{
    var alea = Math.floor(Math.random() * Math.floor(9));
    while(tab[alea] == 1 || tab[alea] == 2 && essaie <= 4)
    {
        alea = Math.floor(Math.random() * Math.floor(9));
    }
    console.log(tab[alea]);
    document.getElementById(tab[alea]).innerHTML = "<img src='x.gif'>";
    tab[alea] = 2;
    essaie++;

    if((tab[0] == 2 && tab[1] == 2 && tab[2] == 2 )||
       (tab[3] == 2 && tab[4] == 2 && tab[5] == 2)||
       (tab[6] == 2 && tab[7] == 2 && tab[8] == 2)||
       (tab[0] == 2 && tab[3] == 2 && tab[6] == 2)||
       (tab[1] == 2 && tab[4] == 2 && tab[7] == 2)||
       (tab[2] == 2 && tab[5] == 2 && tab[8] == 2)||
       (tab[0] == 2 && tab[4] == 2 && tab[8] == 2)||
       (tab[2] == 2 && tab[4] == 2 && tab[6] == 2)){
           alert('Vous avez perdu');
           javascript:refresh(0);
       }
}

function refresh(timeoutPeriod){
    setTimeout ("location.reload(true);",timeoutPeriod);
}

