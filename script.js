let count = 0;

function computer_play() {
    // input : none 
    // return type : str 
    // return : rock OR paper OR scissor 
    computer_choice = Math.floor(Math.random() * 3);
    if (computer_choice == 0) {
        display_on_screen('computer choose rock');
        return "rock";
    }
    if (computer_choice == 1) {
        display_on_screen('computer choose paper');
        return "paper";
    }
    if (computer_choice == 2) {
        display_on_screen('computer choose scissor');
        return "scissor";
    }
}

function choose_rock(player_choice, computer_choice) {
    if (player_choice == 'rock' && computer_choice == 'paper') {
        return computer_choice;
    } else {
        return player_choice;
    }
}

function choose_paper(player_choice, computer_choice) {
    if (player_choice == 'paper' && computer_choice == 'scissor') {
        return computer_choice;
    } else {
        return player_choice;
    }
}

function choose_scissor(player_choice, computer_choice) {
    if (player_choice == 'scissor' && computer_choice == 'rock') {
        return computer_choice;
    } else {
        return player_choice;
    }
}


function play_a_single_round(user_input) {
    let player_choice = user_input;
    let computer_choice = computer_play();
    if (player_choice == computer_choice) {
        display_on_screen('it is a draw');
    } else {
        game_mechanism(user_input, computer_choice);
    }
}

function game_mechanism(player_choice, computer_choice) {
    if (player_choice == 'rock') {
        let winner = choose_rock(player_choice, computer_choice);
        display_on_screen(`${winner} is the winner`);
    } else if (player_choice == 'paper') {
        let winner = choose_paper(player_choice, computer_choice);
        display_on_screen(`${winner} is the winner`);
    } else {
        let winner = choose_scissor(player_choice, computer_choice);
        display_on_screen(`${winner} is the winner`);
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
    const container = document.querySelector('#console');

    const content = document.createElement('div');
    content.classList.add('content')
    content.textContent = user_input;

    container.appendChild(content);
}

function delete_from_screen() {
    const container = document.getElementById('console');
    while (container.hasChildNodes()) {
        if (container.lastChild.previousSibling == container.firstChild.nextSibling){
            break
        }
        container.removeChild(container.firstChild);
        
    }
}

function get_user_input() {

    const rock = document.querySelector('#rock');
    rock.onclick = () => {
        display_on_screen('You chose rock');
        play_a_single_round('rock');
        count += 1;
        if (count == 4) {
            delete_from_screen();
            count = 0;
        }
    };

    const paper = document.querySelector('#paper');
    paper.onclick = () => {
        display_on_screen('You chose paper');
        play_a_single_round('paper');
        count += 1;
        if (count == 4) {
            delete_from_screen();
            count = 0;
        }

    };

    const scissor = document.querySelector('#scissor');
    scissor.onclick = () => {
        display_on_screen('You chose scissor');
        play_a_single_round('scissor');
        count += 1;
        if (count == 4) {
            delete_from_screen();
            count = 0;
        }
    }

    

}

get_user_input();