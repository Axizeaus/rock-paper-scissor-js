function computer_play() {
    // input : none 
    // return type : str 
    // return : rock OR paper OR scissor 
    computer_choice = Math.floor(Math.random() * 3);
    if (computer_choice == 0) {
        console.log(`computer choose rock`)
        return "rock";
    }
    if (computer_choice == 1) {
        console.log(`computer choose paper`)
        return "paper";
    }
    if (computer_choice == 2) {
        console.log(`computer choose scissor`)
        return "scissor";
    }
}

function choose_rock(player_choice, computer_choice){
    if (player_choice == 'rock' && computer_choice == 'paper'){
        return computer_choice;
    }
    else{
        return player_choice;
    }
}

function choose_paper(player_choice, computer_choice){
    if (player_choice == 'paper' && computer_choice == 'scissor'){
        return computer_choice;
    }
    else {
        return player_choice;
    }
}

function choose_scissor(player_choice, computer_choice){
    if (player_choice == 'scissor' && computer_choice == 'rock'){
        return computer_choice;
    }
    else {
        return player_choice;
    }
}


function play_a_single_round(user_input) {
    let player_choice = user_input;
    let computer_choice = computer_play();
    if (player_choice == computer_choice) {
        console.log("it is a draw");
    } else {
        game_mechanism(user_input, computer_choice);
    }
}

function game_mechanism(player_choice, computer_choice){
    if (player_choice == 'rock'){
        let winner = choose_rock(player_choice,computer_choice);
        console.log(`${winner} is the winner`);
    } else if (player_choice == 'paper'){
        let winner = choose_paper(player_choice,computer_choice);
        console.log(`${winner} is the winner`);
    } else {
        let winner = choose_scissor(player_choice,computer_choice)
        console.log(`${winner} is the winner`)
    }
}



// // function play_multiple_rounds(){
// //     let num_of_times = prompt("How many times would you like to play?");
// //     for (let i = 0; i < Number(num_of_times); i++){
// //         play_a_single_round();
// //     }
// // }

// play_a_single_round()

function display_on_screen(user_input) {
    const container = document.querySelector('#scoreboard');

    const content = document.createElement('div');
    content.classList.add('content')
    content.textContent = user_input;

    container.appendChild(content);
}


function get_user_input() {

    const rock = document.querySelector('#rock');
    rock.onclick = () => {
        console.log('You chose rock')
        play_a_single_round('rock');
    };

    const paper = document.querySelector('#paper');
    paper.onclick = () => {
        console.log('you chose paper');
        play_a_single_round('paper');
    };

    const scissor = document.querySelector('#scissor');
    scissor.onclick = () => {
        console.log('you chose scissor');
        play_a_single_round('scissor');
    }
    
}

get_user_input();
