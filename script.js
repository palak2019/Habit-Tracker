let habits = [];

function addHabit() {
    const habitInput = document.getElementById('habit-name');
    const habitName = habitInput.value.trim();

    if (habitName === "") {
        alert("Please enter a habit!");
        return;
    }

    // Add the new habit to the list
    const habit = {
        name: habitName,
        status: "in-progress"
    };

    habits.push(habit);
    habitInput.value = ''; // Clear input field
    renderHabits();
}

function toggleHabitStatus(index) {
    habits[index].status = habits[index].status === "in-progress" ? "completed" : "in-progress";
    renderHabits();
}

function deleteHabit(index) {
    habits.splice(index, 1);
    renderHabits();
}

function renderHabits() {
    const habitList = document.getElementById('habit-list');
    habitList.innerHTML = '';

    habits.forEach((habit, index) => {
        const habitElement = document.createElement('div');
        habitElement.classList.add('habit-item');

        const habitText = document.createElement('span');
        habitText.classList.add(habit.status === 'completed' ? 'completed' : 'in-progress');
        habitText.textContent = habit.name;

        const toggleButton = document.createElement('button');
        toggleButton.textContent = habit.status === 'completed' ? 'Mark as In-Progress' : 'Mark as Completed';
        toggleButton.onclick = () => toggleHabitStatus(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteHabit(index);

        habitElement.appendChild(habitText);
        habitElement.appendChild(toggleButton);
        habitElement.appendChild(deleteButton);

        habitList.appendChild(habitElement);
    });
}