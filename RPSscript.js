<script>
    
    window.location.reload(true);
    const choice = ["rock", "paper", "scissors"];
    const computerMove = choice[Math.floor(Math.random() * choice.length)];
    let userMove = prompt('Choose rock, paper or scissors.\nFirst to five points wins!', '').toLowerCase(); 
    
        if (userMove === computerMove) {
        alert ('Draw! Computer played ' +computerMove+ ". Play Again");
    }   else if (userMove === 'rock' && computerMove === 'paper'){
        alert ('Computer played ' +computerMove+ '. You lose! Paper beats rock!');
    }   else if (userMove === 'rock' && computerMove === 'scissors'){
        alert ('Computer played ' +computerMove+ '. You win! Rock beats scissors!');
    }   else if (userMove === 'paper' && computerMove === 'rock'){
        alert ('Computer played ' +computerMove+ '. You win! Paper beats rock!');
    }   else if (userMove === 'paper' && computerMove === 'scissors'){
        alert ('Computer played ' +computerMove+ '. You lose! Scissors beats paper!');
    }   else if (userMove === 'scissors' && computerMove === 'rock'){
        alert ('Computer played ' +computerMove+ '. You lose! Rock beats scissors!');
    }   else if (userMove === 'scissors' && computerMove === 'paper'){
        alert ('Computer played ' +computerMove+ '. You Win! Scissors beats paper!');
    }   

</script>