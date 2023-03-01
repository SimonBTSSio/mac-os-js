class Tiktaktoe extends App{
    game;

    constructor(){
        super("imgs/tic-tac-toe.svg", "Tik Tac Toe");
        this.window.setViewHtml(this.htmlApp());
    }

    openApp(){
        super.openApp();
        this.game = new TttClasses('board');
        this.game.render();
    }

    closeApp(){
        this.window.setViewHtml(this.htmlApp());
    }

    htmlApp(){
        return `
        <div id="main">
            <h1>TIC TAC TOE</h1>
    
            <!-- Game Instructions -->
            <p id="ins">Le jeux commence en cliquant sur une boite
                <br><br>Le premier joueur commence comme 
                <b>Joueur X</b><br> Et <br> le segond comme <b>Player 0</b>
            </p>
    
    
    
    
            <br><br>
            <!-- 3*3 grid of Boxes -->
            <input type="text" id="un" value="" readonly>
    
            <input type="text" id="deux" value=""  readonly>
    
            <input type="text" id="trois" value=""  readonly>
            <br><br>
    
            <input type="text" id="quatre" value=""  readonly>
                
            <input type="text" id="cinq" value=""  readonly>
    
            <input type="text" id="six" value="" readonly>
            <br><br>
    
            <input type="text" id="sept" value=""  readonly>
    
            <input type="text" id="huit" value="" readonly>
    
            <input type="text" id="neuf" value="" readonly>
    
            <!-- Grid end here  -->
            <br><br><br>
            <!-- Button to reset game -->
            <button id="but" >
                RESET
            </button>
    
            <br><br>
            <!-- Space to show player turn -->
            <p id="print"></p>
        </div>
        `;
    }
}