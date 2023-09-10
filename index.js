function login(){
	var username = document.getElementById('username');
	if (username.value.length < 4) { username.style.border.color = red; }
	var password = document.getElementById('password');
	var LDAP = document.getElementById('LDAP').checked;
	var out = document.getElementById('note');
	out.innerHTML = `<p>` + username + `</p>`;
	out.innerHTML += `<p>` + password + `</p>`;
	out.innerHTML += `<p>` + LDAP + `</p>`;
}