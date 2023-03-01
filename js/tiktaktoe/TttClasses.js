class TttClasses {
    constructor(boardSize, boardId) {
      this.boardSize = 3;
      this.score = 0
      this.playing = 0
      this.case_state = []

      this.scoreX = 0
      this.scoreY = 0
      this.flag = 0

      this.box = {
        id : false,
        click : false,
        BoxValue : false,
        backgroundColor : false
      }
    }

    render() {
       // Add the cells to the board
      let identifiant = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
      let cell = ""
      let reset = ""

      reset = document.getElementById("but")
      // Add an event listener to the cell
      reset.addEventListener('click', () => { 
        this.resetFunction();
      });
      
      for(var i = 0; i < identifiant.length; i++) {
          let id = []
          id = identifiant[i].toString()
          cell = document.getElementById(id)
        
          // Add an event listener to the cell
          cell.addEventListener('click', () => { 
            this.myFunction(id);
          });
        }
      }

    myFunction(id) {

      

      if (this.flag == 0) {
        this.flag == 1
      }else {
        this.flag == 0
      }
      const button = document.getElementById(id);
      
      if (this.playing % 2 ){
        
        const elt = new Object();
        elt.id = id
        elt.click = "true"
        elt.boxValue = "X"
        elt.joueur = "2"
    
        button.style.backgroundColor = "red";
        button.value = "X"
        button.disabled = true;
        this.case_state.push(elt)
    
        this.checkwin ()
        this.playing = this.playing + 1  
      
      }else {
    
    
        const elt = new Object();
        elt.id = id
        elt.click = "true"
        elt.boxValue = "0"
        elt.joueur = "1"
    
        button.style.backgroundColor = "blue"
        button.value = "0"
        button.disabled = true;
    
        this.case_state.push(elt)
        this.checkwin ()
        this.playing = this.playing + 1
        
    
      }
    
    }

    checkwin (){
      // getting curent value of the board
      this.un = document.getElementById("un").value;
      this.deux = document.getElementById("deux").value;
      this.trois = document.getElementById("trois").value;
      this.quatre = document.getElementById("quatre").value;
      this.cinq = document.getElementById("cinq").value;
      this.six = document.getElementById("six").value;
      this.sept = document.getElementById("sept").value;
      this.huit = document.getElementById("huit").value;
      this.neuf = document.getElementById("neuf").value;
      // Checking if Player X won or not and after
        // that disabled all the other fields
        if ((this.un == 'x' || this.un == 'X') && (this.deux == 'x' ||
        this.deux == 'X') && (this.trois == 'x' || this.trois == 'X')) {
            document.getElementById('print').innerHTML = "Player X won";
            document.getElementById("quatre").disabled = true;
            document.getElementById("cinq").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("sept").disabled = true;
            document.getElementById("huit").disabled = true;
            document.getElementById("neuf").disabled = true;
            window.alert('Player X won');
        }
        else if ((this.un == 'x' || this.un == 'X') && (this.quatre == 'x' ||
        this.quatre == 'X') && (this.sept == 'x' || this.sept == 'X')) {
            document.getElementById('print')
                .innerHTML = "Player X won";
            document.getElementById("deux").disabled = true;
            document.getElementById("trois").disabled = true;
            document.getElementById("cinq").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("huit").disabled = true;
            document.getElementById("neuf").disabled = true;
            window.alert('Player X won');
        }
        else if ((this.sept == 'x' || this.sept == 'X') && (this.huit == 'x' ||
        this.huit == 'X') && (this.neuf == 'x' || this.neuf == 'X')) {
            document.getElementById('print').innerHTML = "Player X won";
            document.getElementById("un").disabled = true;
            document.getElementById("deux").disabled = true;
            document.getElementById("trois").disabled = true;
            document.getElementById("quatre").disabled = true;
            document.getElementById("cinq").disabled = true;
            document.getElementById("six").disabled = true;
            window.alert('Player X won');
        }
        else if ((this.trois == 'x' || this.trois == 'X') && (this.six == 'x' ||
        this.six == 'X') && (this.neuf == 'x' || this.neuf == 'X')) {
            document.getElementById('print')
                .innerHTML = "Player X won";
            document.getElementById("un").disabled = true;
            document.getElementById("deux").disabled = true;
            document.getElementById("quatre").disabled = true;
            document.getElementById("cinq").disabled = true;
            document.getElementById("sept").disabled = true;
            document.getElementById("huit").disabled = true;
            window.alert('Player X won');
        }
        else if ((this.un == 'x' || this.un == 'X') && (this.cinq == 'x' ||
        this.cinq == 'X') && (this.neuf == 'x' || this.neuf == 'X')) {
            document.getElementById('print').innerHTML = "Player X won";
            document.getElementById("deux").disabled = true;
            document.getElementById("trois").disabled = true;
            document.getElementById("quatre").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("sept").disabled = true;
            document.getElementById("huit").disabled = true;
            window.alert('Player X won');
        }
        else if ((this.trois == 'x' || this.trois == 'X') && (this.cinq == 'x' ||
        this.cinq == 'X') && (this.sept == 'x' || this.sept == 'X')) {
            document.getElementById('print')
                .innerHTML = "Player X won";
            document.getElementById("un").disabled = true;
            document.getElementById("deux").disabled = true;
            document.getElementById("quatre").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("huit").disabled = true;
            document.getElementById("neuf").disabled = true;
            window.alert('Player X won');
        }
        else if ((this.deux == 'x' || this.deux == 'X') && (this.cinq == 'x' ||
        this.cinq == 'X') && (this.huit == 'x' || this.huit == 'X')) {
            document.getElementById('print').innerHTML = "Player X won";
            document.getElementById("un").disabled = true;
            document.getElementById("trois").disabled = true;
            document.getElementById("quatre").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("sept").disabled = true;
            document.getElementById("neuf").disabled = true;
            window.alert('Player X won');
        }
        else if ((this.quatre == 'x' || this.quatre == 'X') && (this.cinq == 'x' ||
        this.cinq == 'X') && (this.six == 'x' || this.six == 'X')) {
            document.getElementById('print')
                .innerHTML = "Player X won";
            document.getElementById("un").disabled = true;
            document.getElementById("deux").disabled = true;
            document.getElementById("trois").disabled = true;
            document.getElementById("sept").disabled = true;
            document.getElementById("huit").disabled = true;
            document.getElementById("neuf").disabled = true;
            window.alert('Player X won');
        }
        // Checking of Player X finish
        // Checking for Player 0 starts, Is player 0 won or
        // not and after that disabled all the other fields
        else if ((this.un == '0' || this.un == '0') && (this.deux == '0' ||
        this.deux == '0') && (this.trois == '0' || this.trois == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 won";
            document.getElementById("quatre").disabled = true;
            document.getElementById("cinq").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("sept").disabled = true;
            document.getElementById("huit").disabled = true;
            document.getElementById("neuf").disabled = true;
            window.alert('Player 0 won');
        }
        else if ((this.un == '0' || this.un == '0') && (this.quatre == '0' ||
        this.quatre == '0') && (this.sept == '0' || this.sept == '0')) {
            document.getElementById('print').innerHTML = "Player 0 won";
            document.getElementById("deux").disabled = true;
            document.getElementById("trois").disabled = true;
            document.getElementById("cinq").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("huit").disabled = true;
            document.getElementById("neuf").disabled = true;
            window.alert('Player 0 won');
        }
        else if ((this.sept == '0' || this.sept == '0') && (this.huit == '0' ||
        this.huit == '0') && (this.neuf == '0' || neuf == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 won";
            document.getElementById("un").disabled = true;
            document.getElementById("deux").disabled = true;
            document.getElementById("trois").disabled = true;
            document.getElementById("quatre").disabled = true;
            document.getElementById("cinq").disabled = true;
            document.getElementById("six").disabled = true;
            window.alert('Player 0 won');
        }
        else if ((this.trois == '0' || this.trois == '0') && (this.six == '0' ||
        this.six == '0') && (this.neuf == '0' || this.neuf == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 won";
            document.getElementById("un").disabled = true;
            document.getElementById("deux").disabled = true;
            document.getElementById("quatre").disabled = true;
            document.getElementById("cinq").disabled = true;
            document.getElementById("sept").disabled = true;
            document.getElementById("huit").disabled = true;
            window.alert('Player 0 won');
        }
        else if ((this.un == '0' || this.un == '0') && (this.cinq == '0' ||
        this.cinq == '0') && (this.neuf == '0' || this.neuf == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 won";
            document.getElementById("deux").disabled = true;
            document.getElementById("trois").disabled = true;
            document.getElementById("quatre").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("sept").disabled = true;
            document.getElementById("huit").disabled = true;
            window.alert('Player 0 won');
        }
        else if ((this.trois == '0' || this.trois == '0') && (this.cinq == '0' ||
        this.cinq == '0') && (this.sept == '0' || this.sept == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 won";
            document.getElementById("un").disabled = true;
            document.getElementById("deux").disabled = true;
            document.getElementById("quatre").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("huit").disabled = true;
            document.getElementById("neuf").disabled = true;
            window.alert('Player 0 won');
        }
        else if ((this.deux == '0' || this.deux == '0') && (this.cinq == '0' ||
        this.cinq == '0') && (this.huit == '0' || this.huit == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 won";
            document.getElementById("un").disabled = true;
            document.getElementById("trois").disabled = true;
            document.getElementById("quatre").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("sept").disabled = true;
            document.getElementById("neuf").disabled = true;
            window.alert('Player 0 won');
        }
        else if ((this.quatre == '0' || this.quatre == '0') && (this.cinq == '0' ||
        this.cinq == '0') && (this.six == '0' || this.six == '0')) {
            document.getElementById('print')
                .innerHTML = "Player 0 won";
            document.getElementById("un").disabled = true;
            document.getElementById("deux").disabled = true;
            document.getElementById("trois").disabled = true;
            document.getElementById("sept").disabled = true;
            document.getElementById("huit").disabled = true;
            document.getElementById("neuf").disabled = true;
            window.alert('Player 0 won');
        }
     
        // Checking of Player 0 finish
        // Here, Checking about Tie
        else if ((this.un == 'X' || this.un == '0') && (this.deux == 'X'
            || this.deux == '0') && (this.trois == 'X' || this.trois == '0') &&
            (this.quatre == 'X' || this.quatre == '0') && (this.cinq == 'X' ||
            this.cinq == '0') && (this.six == 'X' || this.six == '0') &&
            (this.sept == 'X' || this.sept == '0') && (this.huit == 'X' ||
            this.huit == '0') && (this.neuf == 'X' || this.neuf == '0')) {
                document.getElementById('print')
                    .innerHTML = "Match Tie";
                window.alert('Match Tie');
        }
        else {
     
            // Here, Printing Result
            if (this.playing % 2) {
                document.getElementById('print')
                    .innerHTML = "Player X Turn";
            }
            else {
                document.getElementById('print')
                    .innerHTML = "Player 0 Turn";
            }
        }
    }

    // Function to reset game
    resetFunction() {
        document.getElementById('un').value = '';
        document.getElementById("deux").value = '';
        document.getElementById("trois").value = '';
        document.getElementById("quatre").value = '';
        document.getElementById("cinq").value = '';
        document.getElementById("six").value = '';
        document.getElementById("sept").value = '';
        document.getElementById("huit").value = '';
        document.getElementById("neuf").value = '';
        /**/
        document.getElementById('un').style.background = 'white';
        document.getElementById("deux").style.background = 'white';
        document.getElementById("trois").style.background = 'white';
        document.getElementById("quatre").style.background = 'white';
        document.getElementById("cinq").style.background = 'white';
        document.getElementById("six").style.background = 'white';
        document.getElementById("sept").style.background = 'white';
        document.getElementById("huit").style.background = 'white';
        document.getElementById("neuf").style.background = 'white';
        /**/
        document.getElementById('un').disabled = false;
        document.getElementById("deux").disabled = false;
        document.getElementById("trois").disabled = false;
        document.getElementById("quatre").disabled = false;
        document.getElementById("cinq").disabled = false;
        document.getElementById("six").disabled = false;
        document.getElementById("sept").disabled = false;
        document.getElementById("huit").disabled = false;
        document.getElementById("neuf").disabled = false;

    }
}