let age = document.getElementById('age');
function showUser(surname, name) {
	window.alert("Пользователь " + surname + " " +
	 name + ", его возраст " + age.value);

}
showUser("ked", "ed");